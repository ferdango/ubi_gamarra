/* UbiGamarra · prototipo PWA
   Pantallas: mapa (estilo Waze), búsqueda por tipo de producto, detalle de tienda y guardados. */
(function () {
  'use strict';

  const STORES = window.UBI_STORES;
  const CATS = window.UBI_CATS;
  const CAT = Object.fromEntries(CATS.map((c) => [c.id, c]));
  const BY_ID = Object.fromEntries(STORES.map((s) => [s.id, s]));
  const RTYPES = window.UBI_REPORT_TYPES;
  const STATION = window.UBI_STATION;
  const SIM_START = window.UBI_SIM_START;
  const GAMARRA = { lat: -12.0664, lng: -77.0138 };
  const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const PAY_ICON = { Efectivo: '💵', Yape: '📱', Plin: '📲', Tarjeta: '💳', Transferencia: '🏦' };

  // ---------------------------------------------------------------- utilidades
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const storage = {
    get(k, d) { try { const v = localStorage.getItem('ubi:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ubi:' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } },
    clear() { try { Object.keys(localStorage).filter((k) => k.startsWith('ubi:')).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* nada */ } },
  };

  function distM(a, b) {
    const R = 6371000, r = Math.PI / 180;
    const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function bearing(a, b) {
    const r = Math.PI / 180;
    const y = Math.sin((b[0] - a[0]) * r) * Math.cos(b[1] * r);
    const x = Math.cos(a[1] * r) * Math.sin(b[1] * r) - Math.sin(a[1] * r) * Math.cos(b[1] * r) * Math.cos((b[0] - a[0]) * r);
    return (Math.atan2(y, x) / r + 360) % 360;
  }
  const lerpAngle = (a, b, t) => a + ((((b - a) % 360) + 540) % 360 - 180) * t;
  const walkM = (s) => distM(state.user, s) * 1.3; // factor de rodeo por el damero de calles
  const walkMin = (m) => Math.max(1, Math.round(m / 75)); // 4,5 km/h
  const fmtDist = (m) => (m < 1000 ? `${Math.max(10, Math.round(m / 10) * 10)} m` : `${(m / 1000).toFixed(1).replace('.', ',')} km`);
  const fmtRating = (v) => v.toFixed(1).replace('.', ',');

  function limaNow() {
    const p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Lima', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
    const get = (t) => p.find((x) => x.type === t).value;
    return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')), min: (+get('hour') % 24) * 60 + +get('minute') };
  }
  function fmtTime(min) {
    min = ((Math.round(min) % 1440) + 1440) % 1440;
    const h = Math.floor(min / 60), m = min % 60;
    return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'a. m.' : 'p. m.'}`;
  }
  function openInfo(s) {
    const { day, min } = limaNow();
    const t = s.horario[day];
    if (t && min >= t[0] && min < t[1]) return { open: true, short: 'Abierto', text: `Abierto · cierra ${fmtTime(t[1])}` };
    if (t && min < t[0]) return { open: false, short: 'Cerrado', text: `Cerrado · abre hoy ${fmtTime(t[0])}` };
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7, h = s.horario[d];
      if (h) return { open: false, short: 'Cerrado', text: `Cerrado · abre ${i === 1 ? 'mañana' : 'el ' + DAYS[d].toLowerCase()} ${fmtTime(h[0])}` };
    }
    return { open: false, short: 'Cerrado', text: 'Cerrado' };
  }
  function timeAgo(iso) {
    const days = Math.floor((Date.now() - new Date(iso + 'T12:00:00-05:00').getTime()) / 864e5);
    if (days <= 0) return 'hoy';
    if (days === 1) return 'ayer';
    if (days < 7) return `hace ${days} días`;
    if (days < 30) { const w = Math.round(days / 7); return w === 1 ? 'hace 1 semana' : `hace ${w} semanas`; }
    const mo = Math.round(days / 30);
    return mo <= 1 ? 'hace 1 mes' : `hace ${mo} meses`;
  }
  const minutesAgo = (ts) => {
    const m = Math.max(1, Math.round((Date.now() - ts) / 60000));
    return m < 60 ? `hace ${m} min` : `hace ${Math.round(m / 60)} h`;
  };

  const reviewsOf = (s) => [...(state.userReviews[s.id] || []), ...s.resenas];
  function ratingOf(s) {
    const r = reviewsOf(s);
    return { avg: r.reduce((a, x) => a + x.estrellas, 0) / r.length, n: r.length };
  }
  function starsHTML(v, cls = '') {
    let h = '';
    for (let i = 1; i <= 5; i++) h += `<i style="--f:${Math.max(0, Math.min(1, v - i + 1)) * 100}%"></i>`;
    return `<span class="stars ${cls}" role="img" aria-label="${fmtRating(v)} de 5 estrellas">${h}</span>`;
  }
  const fullAddress = (s) => `${s.direccion.calle} ${s.direccion.numero}, ${s.direccion.interior}, ${s.direccion.distrito}, ${s.direccion.ciudad}`;
  const gmapsSearch = (s) => `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`;
  const gmapsDir = (s) => `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}&travelmode=walking`;
  const catNames = (s) => s.categorias.map((id) => CAT[id].corto).join(' · ');
  const vibrate = (ms = 12) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) { /* nada */ } };

  // ---------------------------------------------------------------- íconos (trazos de 24 px)
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    map: '<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-7.5-10.4A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.7c0 5.8-7.5 10.4-7.5 10.4Z"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    share: '<path d="M12 3.5v11M7.5 8 12 3.5 16.5 8"/><path d="M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
    locate: '<circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="8"/><path d="M12 1.5V4M12 20v2.5M1.5 12H4M20 12h2.5"/>',
    moon: '<path d="M20 14.6A8.2 8.2 0 1 1 9.4 4a6.6 6.6 0 0 0 10.6 10.6Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    pin: '<path d="M12 21.5s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12Z"/><circle cx="12" cy="9.5" r="2.6"/>',
    nav: '<path d="M3.5 11 20.5 3.5 13 20.5l-2-7.5-7.5-2Z"/>',
    walk: '<circle cx="13" cy="4.5" r="1.8"/><path d="M9.5 21l2.5-6.5 3 3V21M7 12.5l2.5-3.5 4-1 3 3.5 2.5.8M12 14.5 13.5 8"/>',
    external: '<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    megaphone: '<path d="M4 10v4a1 1 0 0 0 1 1h2.5L13 19V5L7.5 9H5a1 1 0 0 0-1 1Z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>',
    edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
    store: '<path d="M4 9 5.5 4h13L20 9M4.5 9v11h15V9M4 9h16M9.5 20v-6h5v6"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    download: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.4"/>',
    up: '<path d="M7 11.5 12 6l5 5.5M12 6v12"/>',
    'turn-left': '<path d="M19 20v-6.5a4.5 4.5 0 0 0-4.5-4.5H5M9.5 4.5 5 9l4.5 4.5"/>',
    'turn-right': '<path d="M5 20v-6.5A4.5 4.5 0 0 1 9.5 9H19M14.5 4.5 19 9l-4.5 4.5"/>',
    'slight-left': '<path d="M15 20v-6.5L8 6.5M8 12V6.5h5.5"/>',
    'slight-right': '<path d="M9 20v-6.5l7-7M16 12V6.5h-5.5"/>',
    uturn: '<path d="M8 20V9.5a4 4 0 0 1 8 0V14M12.5 10.5 16 14l3.5-3.5"/>',
    flag: '<path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11"/>',
  };
  const ico = (name, cls = '') => `<svg class="svg-ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  function hydrateIcons(root = document) {
    $$('.ico[data-i]', root).forEach((el) => { if (!el.firstElementChild) el.innerHTML = ico(el.dataset.i); });
  }
  const WAZER = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#33CCFF" stroke="#fff" stroke-width="3"/><circle cx="14.6" cy="17.2" r="2.4" fill="#0B2540"/><circle cx="25.4" cy="17.2" r="2.4" fill="#0B2540"/><circle cx="15.3" cy="16.4" r=".8" fill="#fff"/><circle cx="26.1" cy="16.4" r=".8" fill="#fff"/><path d="M13.6 23.4c1.7 2.9 4 4.2 6.4 4.2s4.7-1.3 6.4-4.2" fill="none" stroke="#0B2540" stroke-width="2.4" stroke-linecap="round"/><circle cx="10.8" cy="22.6" r="2" fill="#FF8FB1" opacity=".85"/><circle cx="29.2" cy="22.6" r="2" fill="#FF8FB1" opacity=".85"/></svg>';

  // ---------------------------------------------------------------- estado
  const systemDark = matchMedia('(prefers-color-scheme: dark)');
  const state = {
    user: { ...SIM_START, simulated: true, heading: 290 },
    theme: storage.get('theme', null) || (systemDark.matches ? 'dark' : 'light'),
    is3d: false,
    baseTab: 'mapa',
    navigated: false,
    selected: null,
    mapFilter: null, // {type:'cat', cat} | {type:'ids', ids, label}
    sheet: 'browse',
    report: null,
    route: null,
    nav: null,
    search: { q: '', cat: null, mayor: false, menor: false, abierto: false, top: false, orden: 'cerca' },
    reviewSort: 'recientes',
    favs: new Set(storage.get('favs', [])),
    userReviews: storage.get('reviews', {}),
    useful: new Set(storage.get('useful', [])),
    userReports: storage.get('reports', []),
    votes: storage.get('votes', {}),
    points: storage.get('points', 0),
  };
  const loadedAt = Date.now();
  const allReports = () => [
    ...window.UBI_REPORTS.map((r) => ({ ...r, creado: loadedAt - r.minutos * 60000 })),
    ...state.userReports,
  ].filter((r) => state.votes[r.id] !== 'down');
  const addPoints = (n) => { state.points += n; storage.set('points', state.points); };

  // ---------------------------------------------------------------- tema
  function applyTheme(theme, persist) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    $('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#16202B' : '#33CCFF');
    const btn = $('#btn-theme');
    btn.innerHTML = ico(theme === 'dark' ? 'sun' : 'moon');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche');
    if (persist) storage.set('theme', theme);
    if (map) map.setStyle(buildMapStyle(theme === 'dark'), { diff: false });
    if (miniMap) miniMap.setStyle(buildMapStyle(theme === 'dark'), { diff: false });
  }

  // ---------------------------------------------------------------- mapa
  let map = null, userMarker = null, miniMap = null, miniMarker = null;
  const storeMarkers = new Map();
  const reportMarkers = new Map();
  const EMPTY = { type: 'FeatureCollection', features: [] };
  const lineFeature = (coords) => ({ type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} });

  function overlayHeights() {
    const screen = $('#screen-mapa');
    const top = $('.map-top').getBoundingClientRect();
    const sheet = $('#sheet').getBoundingClientRect();
    const sr = screen.getBoundingClientRect();
    return { top: top.bottom - sr.top, bottom: sr.bottom - sheet.top, h: sr.height };
  }

  function initMap() {
    if (!window.maplibregl) {
      $('#map').innerHTML = `<div class="map-fallback">${ico('map')}<b>No se pudo cargar el mapa</b><span>Revisa tu conexión a internet. La búsqueda y el detalle de tiendas siguen funcionando.</span></div>`;
      return;
    }
    map = new maplibregl.Map({
      container: 'map',
      style: buildMapStyle(state.theme === 'dark'),
      center: [GAMARRA.lng, GAMARRA.lat],
      zoom: 16.3,
      minZoom: 12,
      maxZoom: 19.5,
      maxBounds: [[-77.12, -12.15], [-76.92, -11.98]],
      attributionControl: false,
      dragRotate: true,
      touchPitch: true,
      fadeDuration: 150,
    });
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-left');
    map.on('style.load', addOverlays);
    map.on('zoom', updatePinScale);
    map.on('rotate', updatePuck);
    map.on('click', (e) => {
      if (e.originalEvent && e.originalEvent.target.closest('.pin, .rpin, .landmark')) return;
      if (state.sheet === 'place' || state.sheet === 'report') deselect();
    });
    map.once('load', () => {
      fitToStores(visibleStores(), false, 0.55);
      const attrib = $('.maplibregl-ctrl-attrib');
      if (attrib) attrib.classList.remove('maplibregl-compact-show');
    });

    STORES.forEach((s) => {
      const c = CAT[s.categorias[0]];
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'pin';
      el.style.setProperty('--c', c.color);
      el.setAttribute('aria-label', `${s.nombre}, ${c.nombre}`);
      el.innerHTML = `<span class="pin-body"><span class="pin-emoji">${c.emoji}</span></span><span class="pin-label">${esc(s.nombre)}</span>`;
      el.addEventListener('click', (ev) => { ev.stopPropagation(); selectStore(s.id); });
      storeMarkers.set(s.id, { el, marker: new maplibregl.Marker({ element: el, anchor: 'bottom' }).setLngLat([s.lng, s.lat]).addTo(map) });
      el.setAttribute('aria-label', `${s.nombre}, ${c.nombre}`); // MapLibre lo reemplaza por "Map marker"
    });

    const st = document.createElement('div');
    st.className = 'landmark';
    st.innerHTML = `<span class="lm-icon">🚇</span><span class="lm-label">${STATION.nombre}<small>${STATION.linea}</small></span>`;
    new maplibregl.Marker({ element: st, anchor: 'left', offset: [-15, 0] }).setLngLat([STATION.lng, STATION.lat]).addTo(map);
    st.setAttribute('aria-label', `${STATION.nombre}, ${STATION.linea}`);

    allReports().forEach(addReportMarker);

    const u = document.createElement('div');
    u.className = 'user-puck';
    u.innerHTML = `<div class="puck-pulse"></div><div class="puck-cone"></div><div class="puck-face">${WAZER}</div>`;
    userMarker = new maplibregl.Marker({ element: u, anchor: 'center' }).setLngLat([state.user.lng, state.user.lat]).addTo(map);
    u.setAttribute('aria-label', 'Tu ubicación');
    updatePuck();
    updatePinScale();
  }

  function addOverlays() {
    const dark = state.theme === 'dark';
    const firstSymbol = (map.getStyle().layers.find((l) => l.type === 'symbol') || {}).id;
    map.addSource('ubi-zone', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Polygon', coordinates: window.UBI_ZONE }, properties: {} } });
    map.addLayer({ id: 'ubi-zone-fill', type: 'fill', source: 'ubi-zone', paint: { 'fill-color': '#33CCFF', 'fill-opacity': dark ? 0.07 : 0.1 } }, firstSymbol);
    map.addLayer({ id: 'ubi-zone-line', type: 'line', source: 'ubi-zone',
      paint: { 'line-color': '#1FB5F0', 'line-width': ['interpolate', ['linear'], ['zoom'], 13, 1.5, 18, 3.5], 'line-dasharray': [2, 1.4], 'line-opacity': 0.9 } }, firstSymbol);
    map.addSource('ubi-zone-label', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Point', coordinates: [-77.01565, -12.0689] }, properties: { t: 'EMPORIO\nCOMERCIAL\nDE GAMARRA' } } });
    map.addLayer({ id: 'ubi-zone-label', type: 'symbol', source: 'ubi-zone-label', maxzoom: 16.2,
      layout: { 'text-field': ['get', 't'], 'text-font': ['Noto Sans Bold'], 'text-size': 13, 'text-letter-spacing': 0.1 },
      paint: { 'text-color': dark ? '#5FD3FF' : '#0A8FD1', 'text-halo-color': dark ? '#1B2632' : '#FFFFFF', 'text-halo-width': 2 } });

    map.addSource('ubi-route', { type: 'geojson', data: EMPTY });
    map.addSource('ubi-route-done', { type: 'geojson', data: EMPTY });
    const rw = (a, b) => ['interpolate', ['exponential', 1.5], ['zoom'], 13, a, 19, b];
    map.addLayer({ id: 'ubi-route-casing', type: 'line', source: 'ubi-route', layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': dark ? '#0B4F86' : '#0A6CB5', 'line-width': rw(7, 22) } }, firstSymbol);
    map.addLayer({ id: 'ubi-route-line', type: 'line', source: 'ubi-route', layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': '#33CCFF', 'line-width': rw(4, 15) } }, firstSymbol);
    map.addLayer({ id: 'ubi-route-done', type: 'line', source: 'ubi-route-done', layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': dark ? '#55657A' : '#A9B4C0', 'line-width': rw(4, 15) } }, firstSymbol);

    if (state.route && state.route.coords) map.getSource('ubi-route').setData(lineFeature(state.route.coords));
    map.setLayoutProperty('building-3d', 'visibility', state.is3d ? 'visible' : 'none');
  }

  function updatePinScale() {
    if (!map) return;
    const z = map.getZoom();
    const el = $('#map');
    el.style.setProperty('--pin-scale', Math.max(0.55, Math.min(1, (z - 13.4) / 2.4)).toFixed(2));
    el.classList.toggle('show-labels', z >= 16.9);
    el.classList.toggle('hide-reports', z < 14.4);
  }

  function updatePuck() {
    if (!userMarker) return;
    const cone = $('.puck-cone', userMarker.getElement());
    cone.style.transform = `rotate(${state.user.heading - (map ? map.getBearing() : 0)}deg)`;
  }

  function setUserPosition(lat, lng, heading) {
    state.user.lat = lat; state.user.lng = lng;
    if (heading != null && !Number.isNaN(heading)) state.user.heading = heading;
    if (userMarker) userMarker.setLngLat([lng, lat]);
    updatePuck();
  }

  function visibleStores() {
    const f = state.mapFilter;
    if (!f) return STORES;
    if (f.type === 'cat') return STORES.filter((s) => s.categorias.includes(f.cat));
    return STORES.filter((s) => f.ids.includes(s.id));
  }

  function applyMapFilter(fit) {
    const vis = new Set(visibleStores().map((s) => s.id));
    storeMarkers.forEach((m, id) => m.el.classList.toggle('is-hidden', !vis.has(id)));
    if (state.selected && !vis.has(state.selected)) { state.selected = null; markSelected(); if (state.sheet === 'place') state.sheet = 'browse'; }
    renderMapChips();
    renderSheet();
    if (fit) fitToStores(visibleStores(), true);
  }

  // closer > 0 acerca un poco la cámara aunque algún pin del borde quede bajo los paneles
  function fitToStores(list, animate, closer = 0) {
    if (!map || !list.length) return;
    const o = overlayHeights();
    if (list.length === 1) {
      map.easeTo({ center: [list[0].lng, list[0].lat], zoom: 17.2, offset: [0, (o.top - o.bottom) / 2], duration: animate ? 800 : 0 });
      return;
    }
    const b = new maplibregl.LngLatBounds();
    list.forEach((s) => b.extend([s.lng, s.lat]));
    const cam = map.cameraForBounds(b, { padding: { top: o.top + 24, bottom: o.bottom + 24, left: 36, right: 72 }, maxZoom: 17.2 });
    if (!cam) return;
    map.easeTo({ center: b.getCenter(), zoom: Math.min(17.2, cam.zoom + closer), bearing: 0, offset: [-18, (o.top - o.bottom) / 2], duration: animate ? 900 : 0 });
  }

  function markSelected() {
    storeMarkers.forEach((m, id) => {
      const on = id === state.selected;
      m.el.classList.toggle('is-selected', on);
      m.el.style.zIndex = on ? 5 : '';
    });
  }

  function selectStore(id, fly = true) {
    const s = BY_ID[id];
    if (!s || state.nav) return;
    if (state.route) clearRoute();
    state.selected = id;
    state.sheet = 'place';
    markSelected();
    renderSheet();
    vibrate();
    if (fly && map) {
      requestAnimationFrame(() => {
        const o = overlayHeights();
        map.easeTo({ center: [s.lng, s.lat], zoom: Math.max(map.getZoom(), 16.9), offset: [0, (o.top - o.bottom) / 2], duration: reduceMotion ? 0 : 700 });
      });
    }
  }

  function deselect() {
    if (state.nav) return;
    if (state.route) clearRoute();
    state.selected = null;
    state.report = null;
    state.sheet = 'browse';
    markSelected();
    renderSheet();
  }

  // ---------------------------------------------------------------- chips y ubicación (mapa)
  function renderMapChips() {
    const f = state.mapFilter;
    let html = '';
    if (f && f.type === 'ids') {
      html += `<button class="chip is-active chip-query" data-chip="clear">🔎 “${esc(f.label)}” ${ico('x')}</button>`;
    }
    html += `<button class="chip ${!f ? 'is-active' : ''}" data-chip="all" role="tab" aria-selected="${!f}">✨ Todo</button>`;
    html += CATS.map((c) => {
      const on = f && f.type === 'cat' && f.cat === c.id;
      return `<button class="chip ${on ? 'is-active' : ''}" data-chip="${c.id}" style="--c:${c.color}" role="tab" aria-selected="${!!on}">${c.emoji} ${c.corto}</button>`;
    }).join('');
    const box = $('#map-chips');
    box.innerHTML = html;
    const active = $('.chip.is-active:not(.chip-query)', box);
    if (active && f) active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function renderLocChip() {
    const el = $('#loc-chip');
    el.innerHTML = state.user.simulated
      ? `<span>📍 Ubicación <b>simulada en Gamarra</b></span><button data-loc="real">Usar mi ubicación</button>`
      : `<span>📍 Usando <b>tu ubicación real</b></span><button data-loc="sim">Simular Gamarra</button>`;
  }

  let watchId = null;
  function useRealLocation() {
    if (!navigator.geolocation) { toast('Tu navegador no permite obtener la ubicación.'); return; }
    toast('Buscando tu ubicación…', { ms: 1800 });
    navigator.geolocation.getCurrentPosition((pos) => {
      const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      const d = distM(p, GAMARRA);
      if (d > 3000) {
        toast(`Estás a ${fmtDist(d)} de Gamarra. Seguimos con la ubicación simulada para que pruebes la app.`, { ms: 5000 });
        return;
      }
      state.user.simulated = false;
      setUserPosition(p.lat, p.lng, pos.coords.heading);
      if (watchId == null) {
        watchId = navigator.geolocation.watchPosition((w) => {
          if (state.nav || state.user.simulated) return;
          setUserPosition(w.coords.latitude, w.coords.longitude, w.coords.heading);
        }, () => {}, { enableHighAccuracy: true, maximumAge: 5000 });
      }
      afterUserMoved(true);
      toast('¡Listo! Usamos tu ubicación real.');
    }, () => toast('No pudimos obtener tu ubicación. Revisa los permisos del navegador.', { ms: 4000 }),
    { enableHighAccuracy: true, timeout: 10000 });
  }
  function useSimulatedLocation() {
    if (watchId != null) { navigator.geolocation.clearWatch(watchId); watchId = null; }
    state.user.simulated = true;
    setUserPosition(SIM_START.lat, SIM_START.lng, 290);
    afterUserMoved(true);
  }
  function afterUserMoved(recenter) {
    renderLocChip();
    renderSheet();
    if (state.baseTab === 'buscar') renderResults();
    renderSaved();
    if (recenter && map) {
      const o = overlayHeights();
      map.easeTo({ center: [state.user.lng, state.user.lat], zoom: Math.max(map.getZoom(), 16.6), offset: [0, (o.top - o.bottom) / 2], duration: 700 });
    }
  }

  // ---------------------------------------------------------------- hoja inferior del mapa
  function miniCardHTML(s) {
    const c = CAT[s.categorias[0]], r = ratingOf(s), oi = openInfo(s);
    return `<button class="mini-card" data-id="${s.id}">
      <span class="mc-icon" style="--c:${c.color}">${c.emoji}</span>
      <span class="mc-name">${esc(s.nombre)}</span>
      <span class="mc-meta">★ ${fmtRating(r.avg)} · ${fmtDist(walkM(s))}</span>
      <span class="mc-status ${oi.open ? 'ok' : 'off'}">${oi.short}</span>
    </button>`;
  }

  function renderSheet() {
    const body = $('#sheet-body');
    if (!body) return;
    let html = '';
    const mode = state.sheet;
    if (mode === 'place' && state.selected) {
      const s = BY_ID[state.selected], c = CAT[s.categorias[0]], r = ratingOf(s), oi = openInfo(s), d = walkM(s);
      html = `<div class="place">
        <div class="place-top">
          <span class="mc-icon lg" style="--c:${c.color}">${c.emoji}</span>
          <div class="place-info">
            <h2>${esc(s.nombre)}${s.verificada ? `<span class="verified sm" title="Verificada">${ico('check')}</span>` : ''}</h2>
            <div class="place-cats">${catNames(s)}</div>
            <div class="place-meta">${starsHTML(r.avg, 'sm')} <b>${fmtRating(r.avg)}</b> (${r.n}) · <span class="${oi.open ? 'ok' : 'off'}">${oi.short}</span></div>
          </div>
          <button class="icon-btn" data-act="close" aria-label="Cerrar">${ico('x')}</button>
        </div>
        <div class="place-addr">${ico('pin')}<span><b>${esc(s.direccion.calle)} ${esc(s.direccion.numero)}</b> · ${esc(s.direccion.interior)}</span></div>
        <div class="place-actions">
          <button class="btn btn-ghost" data-act="detail">${ico('store')} Ver tienda</button>
          <button class="btn btn-go" data-act="route">${ico('nav')} Ir · ${walkMin(d)} min</button>
        </div>
      </div>`;
    } else if (mode === 'route' && state.route) {
      const r = state.route, s = r.store;
      if (r.loading) {
        html = `<div class="route-loading"><span class="spinner"></span> Calculando la mejor ruta a pie a <b>${esc(s.nombre)}</b>…</div>`;
      } else {
        const min = Math.max(1, Math.round(r.duration / 60));
        const now = limaNow().min;
        html = `<div class="route-sum">
            <div class="route-time"><b>${min} min</b><span>${fmtDist(r.distance)} · a pie ${ico('walk')}</span></div>
            <div class="route-eta"><span>Llegada</span><b>${fmtTime(now + min)}</b></div>
          </div>
          <div class="route-to">${ico('flag')}<span>Hacia <b>${esc(s.nombre)}</b> · ${esc(s.direccion.interior)}</span></div>
          ${r.real ? '' : '<p class="fine">Ruta aproximada en línea recta: el servicio de rutas no respondió.</p>'}
          <div class="place-actions">
            <button class="btn btn-ghost" data-act="cancel-route">Cancelar</button>
            <button class="btn btn-go" data-act="start-nav">▶ Iniciar</button>
          </div>
          <a class="gm-link" href="${gmapsDir(s)}" target="_blank" rel="noopener">${ico('external')} Abrir esta ruta en Google Maps</a>`;
      }
    } else if (mode === 'nav' && state.nav) {
      html = `<div class="nav-sum">
          <div><b id="nav-eta">--</b><span>llegada</span></div>
          <div><b id="nav-min">--</b><span id="nav-dist">--</span></div>
          <button class="btn btn-stop" data-act="exit-nav">Salir</button>
        </div>
        <p class="fine center">Simulación del recorrido a pie (demo acelerada)</p>`;
    } else if (mode === 'arrived' && state.selected) {
      const s = BY_ID[state.selected];
      html = `<div class="arrived">
          <div class="arrived-emoji">🎉</div>
          <h2>¡Llegaste!</h2>
          <p><b>${esc(s.nombre)}</b><br>${esc(s.direccion.interior)}</p>
          <div class="points-pill">+5 puntos 🏅</div>
          <div class="place-actions">
            <button class="btn btn-ghost" data-act="close">Listo</button>
            <button class="btn btn-go" data-act="detail">${ico('store')} Ver tienda</button>
          </div>
        </div>`;
    } else if (mode === 'report' && state.report) {
      const r = allReports().find((x) => x.id === state.report);
      if (!r) { state.sheet = 'browse'; return renderSheet(); }
      const t = RTYPES[r.tipo];
      const voted = state.votes[r.id];
      const linked = r.tienda && BY_ID[r.tienda];
      html = `<div class="report-card">
          <div class="place-top">
            <span class="rp-icon" style="--c:${t.color}">${t.emoji}</span>
            <div class="place-info">
              <h2>${t.nombre}</h2>
              <div class="place-cats">${minutesAgo(r.creado)} · a ${fmtDist(distM(state.user, r))} de ti</div>
              <div class="place-meta">👍 ${r.votos + (voted === 'up' ? 1 : 0)} confirmaciones${r.mio ? ' · Tu reporte' : ''}</div>
            </div>
            <button class="icon-btn" data-act="close" aria-label="Cerrar">${ico('x')}</button>
          </div>
          <p class="report-text">${esc(r.texto)}</p>
          ${linked ? `<button class="link-row" data-act="report-store" data-id="${linked.id}">${CAT[linked.categorias[0]].emoji} Ver tienda: <b>${esc(linked.nombre)}</b> ${ico('chev')}</button>` : ''}
          <div class="place-actions">
            ${r.mio
              ? '<button class="btn btn-ghost" data-act="report-delete">Quitar mi reporte</button>'
              : `<button class="btn btn-ghost ${voted === 'up' ? 'is-done' : ''}" data-act="vote-up" ${voted ? 'disabled' : ''}>👍 ${voted === 'up' ? '¡Gracias!' : 'Sigue ahí'}</button>
                 <button class="btn btn-ghost" data-act="vote-down" ${voted ? 'disabled' : ''}>👎 Ya no está</button>`}
          </div>
        </div>`;
    } else {
      state.sheet = 'browse';
      const list = visibleStores().slice().sort((a, b) => walkM(a) - walkM(b));
      const f = state.mapFilter;
      const title = !f ? 'Cerca de ti' : f.type === 'cat' ? `${CAT[f.cat].emoji} ${CAT[f.cat].nombre}` : `Resultados: “${esc(f.label)}”`;
      html = `<div class="sheet-head">
          <div><h2>${title}</h2><p>${list.length} ${list.length === 1 ? 'tienda' : 'tiendas'} en Gamarra · por distancia</p></div>
          <a class="link-btn" href="${f && f.type === 'cat' ? '#/buscar?cat=' + f.cat : '#/buscar'}">Ver lista ${ico('chev')}</a>
        </div>
        <div class="carousel">${list.slice(0, 14).map(miniCardHTML).join('')}</div>`;
    }
    body.innerHTML = html;
    body.classList.remove('swap');
    void body.offsetWidth;
    body.classList.add('swap');
  }

  function onSheetClick(e) {
    const card = e.target.closest('.mini-card');
    if (card) { selectStore(card.dataset.id); return; }
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === 'close') deselect();
    else if (act === 'detail') location.hash = '#/tienda/' + state.selected;
    else if (act === 'route') startRoute(state.selected);
    else if (act === 'cancel-route') { clearRoute(); state.sheet = 'place'; renderSheet(); }
    else if (act === 'start-nav') startNav();
    else if (act === 'exit-nav') exitNav(false);
    else if (act === 'report-store') { state.report = null; selectStore(btn.dataset.id); }
    else if (act === 'vote-up' || act === 'vote-down') voteReport(state.report, act === 'vote-up' ? 'up' : 'down');
    else if (act === 'report-delete') deleteReport(state.report);
  }

  // ---------------------------------------------------------------- rutas y navegación simulada
  async function fetchRoute(a, b) {
    const url = `https://routing.openstreetmap.de/routed-foot/route/v1/foot/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson&steps=true`;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 7000);
      const res = await fetch(url, { signal: ctrl.signal });
      clearTimeout(timer);
      const j = await res.json();
      if (j.code !== 'Ok' || !j.routes.length) throw new Error('sin ruta');
      const rt = j.routes[0];
      const coords = [[a.lng, a.lat], ...rt.geometry.coordinates, [b.lng, b.lat]];
      const steps = rt.legs[0].steps.map((st) => ({ type: st.maneuver.type, mod: st.maneuver.modifier, name: st.name, dist: st.distance, exit: st.maneuver.exit }));
      const extra = distM(a, { lng: coords[1][0], lat: coords[1][1] }) + distM(b, { lng: coords[coords.length - 2][0], lat: coords[coords.length - 2][1] });
      return { coords, steps, distance: rt.distance + extra, duration: (rt.distance + extra) / 1.25, real: true };
    } catch (err) {
      const d = distM(a, b);
      return { coords: [[a.lng, a.lat], [b.lng, b.lat]], steps: [{ type: 'depart', name: '', dist: d }, { type: 'arrive', name: '', dist: 0 }], distance: d, duration: d / 1.25, real: false };
    }
  }

  async function startRoute(id) {
    const s = BY_ID[id];
    if (!s) return;
    if (location.hash.indexOf('#/mapa') !== 0) location.hash = '#/mapa';
    state.selected = id;
    markSelected();
    state.route = { store: s, loading: true };
    state.sheet = 'route';
    renderSheet();
    const r = await fetchRoute(state.user, s);
    if (!state.route || state.route.store !== s) return;
    state.route = { ...r, store: s };
    if (map && map.getSource('ubi-route')) map.getSource('ubi-route').setData(lineFeature(r.coords));
    renderSheet();
    requestAnimationFrame(() => {
      if (!map) return;
      const o = overlayHeights();
      const b = new maplibregl.LngLatBounds();
      r.coords.forEach((c) => b.extend(c));
      map.fitBounds(b, { padding: { top: o.top + 40, bottom: o.bottom + 40, left: 50, right: 80 }, maxZoom: 17.4, duration: 900, bearing: 0, pitch: state.is3d ? 45 : 0 });
    });
  }

  function clearRoute() {
    state.route = null;
    if (map && map.getSource('ubi-route')) {
      map.getSource('ubi-route').setData(EMPTY);
      map.getSource('ubi-route-done').setData(EMPTY);
    }
  }

  function shortStreet(name) {
    if (!name) return '';
    return name.replace(/^Jirón /, 'Jr. ').replace(/^Avenida /, 'Av. ').replace(/^Pasaje /, 'Psje. ').replace(/^Calle /, 'Ca. ').replace(/^Prolongación /, 'Prol. ');
  }
  function stepInfo(step, storeName) {
    const name = shortStreet(step.name);
    const on = name ? ` en ${name}` : '';
    const mod = step.mod || '';
    const side = mod.includes('left') ? 'izquierda' : 'derecha';
    switch (step.type) {
      case 'depart': return { icon: 'up', text: name ? `Camina por ${name}` : 'Comienza a caminar' };
      case 'arrive': return { icon: 'flag', text: `Llegas a ${storeName}` };
      case 'roundabout': case 'rotary': return { icon: 'turn-right', text: `En la rotonda, toma la salida ${step.exit || ''}`.trim() };
      default:
        if (mod === 'uturn') return { icon: 'uturn', text: 'Da la vuelta' };
        if (mod === 'straight' || step.type === 'new name' || step.type === 'continue') return { icon: 'up', text: name ? `Sigue por ${name}` : 'Sigue recto' };
        if (mod.startsWith('slight')) return { icon: 'slight-' + (side === 'izquierda' ? 'left' : 'right'), text: `Mantente a la ${side}${on}` };
        return { icon: side === 'izquierda' ? 'turn-left' : 'turn-right', text: `Gira a la ${side}${on}` };
    }
  }

  function startNav() {
    const r = state.route;
    if (!r || r.loading || !map) return;
    const pts = r.coords;
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + distM({ lng: pts[i - 1][0], lat: pts[i - 1][1] }, { lng: pts[i][0], lat: pts[i][1] }));
    const total = cum[cum.length - 1] || 1;
    const stepTotal = r.steps.reduce((a, s) => a + s.dist, 0) || total;
    let acc = 0;
    const starts = r.steps.map((s) => { const v = (acc * total) / stepTotal; acc += s.dist; return v; });
    state.nav = { cum, total, starts, d: 0, i: 0, last: performance.now(), lastDraw: 0, speed: Math.max(7, total / 30), bearing: map.getBearing() };
    state.sheet = 'nav';
    $('#app').classList.add('is-nav');
    $('#nav-banner').hidden = false;
    $('#speedo').hidden = false;
    renderSheet();
    const h = overlayHeights().h;
    map.setPadding({ top: h * 0.42, bottom: 0, left: 0, right: 0 });
    vibrate(20);
    requestAnimationFrame(navTick);
  }

  function navTick(now) {
    const n = state.nav;
    if (!n) return;
    const dt = Math.min(0.08, (now - n.last) / 1000);
    n.last = now;
    n.d = Math.min(n.total, n.d + n.speed * dt);
    const pts = state.route.coords;
    while (n.i < pts.length - 2 && n.cum[n.i + 1] < n.d) n.i++;
    const a = pts[n.i], b = pts[n.i + 1];
    const seg = n.cum[n.i + 1] - n.cum[n.i] || 1;
    const t = Math.min(1, Math.max(0, (n.d - n.cum[n.i]) / seg));
    const pos = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    const brg = seg > 0.5 ? bearing(a, b) : state.user.heading;
    n.bearing = lerpAngle(n.bearing, brg, 0.08);
    setUserPosition(pos[1], pos[0], brg);
    map.jumpTo({ center: pos, bearing: n.bearing, pitch: 58, zoom: 17.9 });
    if (now - n.lastDraw > 120) {
      n.lastDraw = now;
      const done = pts.slice(0, n.i + 1).concat([pos]);
      map.getSource('ubi-route-done').setData(lineFeature(done));
      updateNavUI();
    }
    if (n.d >= n.total) { arrive(); return; }
    requestAnimationFrame(navTick);
  }

  function updateNavUI() {
    const n = state.nav, r = state.route;
    if (!n || !r) return;
    let k = 0;
    while (k < n.starts.length - 1 && n.starts[k + 1] <= n.d + 2) k++;
    const next = r.steps[k + 1] || r.steps[r.steps.length - 1];
    const toNext = Math.max(0, (n.starts[k + 1] != null ? n.starts[k + 1] : n.total) - n.d);
    const info = stepInfo(next, r.store.nombre);
    $('#nav-banner').innerHTML = `<div class="nb-arrow">${ico(info.icon)}</div>
      <div class="nb-text"><b>${fmtDist(toNext)}</b><span>${esc(info.text)}</span></div>`;
    const remaining = n.total - n.d;
    const min = Math.max(1, Math.round(remaining / 1.25 / 60));
    const etaEl = $('#nav-eta');
    if (etaEl) {
      etaEl.textContent = fmtTime(limaNow().min + min);
      $('#nav-min').textContent = `${min} min`;
      $('#nav-dist').textContent = fmtDist(remaining);
    }
    $('#speedo b').textContent = String(4 + Math.round(Math.sin(n.d / 37)));
  }

  function resetCamera() {
    if (!map) return;
    map.setPadding({ top: 0, bottom: 0, left: 0, right: 0 });
    const o = overlayHeights();
    map.easeTo({ pitch: state.is3d ? 55 : 0, bearing: 0, zoom: 17, offset: [0, (o.top - o.bottom) / 2], duration: 900 });
  }

  function endNavUI() {
    state.nav = null;
    $('#app').classList.remove('is-nav');
    $('#nav-banner').hidden = true;
    $('#speedo').hidden = true;
  }

  function exitNav() {
    endNavUI();
    clearRoute();
    state.sheet = state.selected ? 'place' : 'browse';
    renderSheet();
    resetCamera();
  }

  function arrive() {
    const s = state.route.store;
    endNavUI();
    clearRoute();
    setUserPosition(s.lat, s.lng);
    state.selected = s.id;
    state.sheet = 'arrived';
    addPoints(5);
    renderSheet();
    renderLocChip();
    vibrate([30, 60, 30]);
    if (map) {
      map.setPadding({ top: 0, bottom: 0, left: 0, right: 0 });
      requestAnimationFrame(() => {
        const o = overlayHeights();
        map.easeTo({ center: [s.lng, s.lat], pitch: state.is3d ? 55 : 0, bearing: 0, zoom: 17.4, offset: [0, (o.top - o.bottom) / 2], duration: 900 });
      });
    }
  }

  // ---------------------------------------------------------------- reportes de la comunidad
  function addReportMarker(r) {
    if (!map) return;
    const t = RTYPES[r.tipo];
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'rpin' + (r.mio && Date.now() - r.creado < 4000 ? ' is-new' : '');
    el.style.setProperty('--c', t.color);
    el.setAttribute('aria-label', `Reporte: ${t.nombre}`);
    el.innerHTML = `<span class="rpin-body">${t.emoji}</span>`;
    el.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (state.nav) return;
      if (state.route) clearRoute();
      state.selected = null;
      markSelected();
      state.report = r.id;
      state.sheet = 'report';
      renderSheet();
    });
    reportMarkers.set(r.id, new maplibregl.Marker({ element: el, anchor: 'bottom' }).setLngLat([r.lng, r.lat]).addTo(map));
    el.setAttribute('aria-label', `Reporte: ${t.nombre}`);
  }

  function removeReportMarker(id) {
    const m = reportMarkers.get(id);
    if (!m) return;
    m.getElement().classList.add('is-gone');
    setTimeout(() => m.remove(), 300);
    reportMarkers.delete(id);
  }

  function voteReport(id, dir) {
    state.votes[id] = dir;
    storage.set('votes', state.votes);
    addPoints(1);
    if (dir === 'down') {
      removeReportMarker(id);
      state.report = null;
      state.sheet = 'browse';
      toast('Gracias, lo quitamos del mapa. +1 punto');
    } else {
      toast('¡Gracias por confirmar! +1 punto');
    }
    renderSheet();
  }

  function deleteReport(id) {
    state.userReports = state.userReports.filter((r) => r.id !== id);
    storage.set('reports', state.userReports);
    removeReportMarker(id);
    state.report = null;
    state.sheet = 'browse';
    renderSheet();
    toast('Reporte eliminado.');
  }

  function openReportPicker() {
    if (state.nav) return;
    const types = Object.entries(RTYPES);
    openModal({
      cls: 'modal-sheet',
      html: `<div class="modal-grip"></div>
        <div class="modal-head"><h2>¿Qué quieres reportar?</h2><button class="icon-btn" data-close aria-label="Cerrar">${ico('x')}</button></div>
        <p class="muted">Ayuda a otros compradores de Gamarra. Tu reporte aparece en el mapa donde estás.</p>
        <div class="report-grid">${types.map(([id, t]) => `<button class="rg-item" data-type="${id}" style="--c:${t.color}"><span class="rg-emoji">${t.emoji}</span><span>${t.nombre}</span></button>`).join('')}</div>
        <div class="report-form" hidden>
          <div class="rf-chosen"></div>
          <textarea id="report-text" rows="3" maxlength="160" placeholder="Cuéntanos más (opcional)"></textarea>
          <div class="rf-loc">${ico('pin')} ${state.user.simulated ? 'En tu ubicación simulada en Gamarra' : 'En tu ubicación actual'}</div>
          <button class="btn btn-go btn-lg" id="report-send">Enviar reporte</button>
        </div>`,
      onMount(m) {
        let chosen = null;
        $$('.rg-item', m).forEach((b) => b.addEventListener('click', () => {
          chosen = b.dataset.type;
          const t = RTYPES[chosen];
          $('.report-grid', m).hidden = true;
          $('.report-form', m).hidden = false;
          $('.rf-chosen', m).innerHTML = `<span class="rp-icon" style="--c:${t.color}">${t.emoji}</span><b>${t.nombre}</b><button class="link-btn" data-change>Cambiar</button>`;
          $('[data-change]', m).onclick = () => { $('.report-grid', m).hidden = false; $('.report-form', m).hidden = true; };
          $('#report-text', m).placeholder = {
            oferta: 'Ej.: 2 jeans por S/ 60 en el stand 214', gente: 'Ej.: Mucha cola en la entrada de la galería',
            obra: 'Ej.: Vereda rota, cruza por el otro lado', policia: 'Ej.: Serenazgo en la esquina',
            cerrado: 'Ej.: La tienda no abrió hoy', parking: 'Ej.: Hay espacios libres en la playa',
          }[chosen];
          vibrate();
        }));
        $('#report-send', m).addEventListener('click', () => {
          if (!chosen) return;
          const text = $('#report-text', m).value.trim() || `Reporte de ${RTYPES[chosen].nombre.toLowerCase()} enviado por un comprador.`;
          const jitter = () => (Math.random() - 0.5) * 0.00012;
          const r = { id: 'u' + Date.now(), tipo: chosen, lat: state.user.lat + jitter(), lng: state.user.lng + jitter(), texto: text, creado: Date.now(), votos: 0, mio: true };
          state.userReports.push(r);
          storage.set('reports', state.userReports);
          addReportMarker(r);
          addPoints(5);
          closeModal();
          toast(`¡Gracias! Tu reporte ya está en el mapa. +5 puntos 🏅`);
          if (map) map.easeTo({ center: [r.lng, r.lat], zoom: Math.max(map.getZoom(), 16.6), duration: 600 });
        });
      },
    });
  }

  // ---------------------------------------------------------------- búsqueda
  function haystack(s) {
    return norm([s.nombre, s.descripcion, s.direccion.calle, s.direccion.interior,
      ...s.categorias.map((id) => `${CAT[id].nombre} ${CAT[id].claves.join(' ')}`),
      ...s.productos.map((p) => p.nombre)].join(' '));
  }
  const HAY = Object.fromEntries(STORES.map((s) => [s.id, haystack(s)]));

  function searchStores(opts = state.search) {
    const tokens = norm(opts.q).split(/[^a-z0-9ñ]+/).filter((t) => t.length > 1);
    let list = STORES.filter((s) => {
      if (opts.cat && !s.categorias.includes(opts.cat)) return false;
      if (opts.mayor && !s.venta.mayor) return false;
      if (opts.menor && !s.venta.menor) return false;
      if (opts.abierto && !openInfo(s).open) return false;
      if (opts.top && ratingOf(s).avg < 4.5) return false;
      const h = HAY[s.id];
      return tokens.every((t) => h.includes(t) || (t.length > 3 && t.endsWith('s') && h.includes(t.slice(0, -1))) || (t.length > 4 && t.endsWith('es') && h.includes(t.slice(0, -2))));
    });
    const by = {
      cerca: (a, b) => walkM(a) - walkM(b),
      valoradas: (a, b) => ratingOf(b).avg - ratingOf(a).avg,
      resenas: (a, b) => ratingOf(b).n - ratingOf(a).n,
    }[opts.orden];
    list = list.sort(by);
    // Si se busca por texto, primero las coincidencias en el nombre
    if (tokens.length) list.sort((a, b) => (tokens.some((t) => norm(b.nombre).includes(t)) ? 1 : 0) - (tokens.some((t) => norm(a.nombre).includes(t)) ? 1 : 0));
    return list;
  }

  function storeCardHTML(s) {
    const c = CAT[s.categorias[0]], r = ratingOf(s), oi = openInfo(s), d = walkM(s);
    const fav = state.favs.has(s.id);
    return `<article class="store-card" data-id="${s.id}" tabindex="0" role="link" aria-label="${esc(s.nombre)}">
      <div class="sc-icon" style="--c:${c.color}">${c.emoji}</div>
      <div class="sc-main">
        <div class="sc-top">
          <h3>${esc(s.nombre)}${s.verificada ? `<span class="verified sm" title="Verificada">${ico('check')}</span>` : ''}</h3>
          <button class="fav-mini ${fav ? 'is-on' : ''}" data-fav="${s.id}" aria-label="${fav ? 'Quitar de guardados' : 'Guardar'}" aria-pressed="${fav}">${ico('heart')}</button>
        </div>
        <div class="sc-cats">${s.categorias.map((id) => `${CAT[id].emoji} ${CAT[id].corto}`).join(' · ')}</div>
        <div class="sc-meta">${starsHTML(r.avg, 'sm')} <b>${fmtRating(r.avg)}</b> <span>(${r.n})</span> · ${fmtDist(d)} · ${walkMin(d)} min</div>
        <div class="sc-addr">${esc(s.direccion.calle)} ${esc(s.direccion.numero)} · ${esc(s.direccion.interior)}</div>
        <div class="sc-tags">
          <span class="tag ${oi.open ? 'tag-ok' : 'tag-off'}">${oi.short}</span>
          ${s.venta.mayor ? '<span class="tag">Por mayor</span>' : ''}
          ${s.venta.menor ? '<span class="tag">Por menor</span>' : ''}
          <span class="tag">desde S/ ${Math.min(...s.productos.map((p) => p.desde))}</span>
        </div>
      </div>
    </article>`;
  }

  function renderFilters() {
    const s = state.search;
    const chip = (key, label) => `<button class="fchip ${s[key] ? 'is-on' : ''}" data-filter="${key}" aria-pressed="${s[key]}">${s[key] ? ico('check') : ''}${label}</button>`;
    $('#search-filters').innerHTML = `
      ${chip('mayor', 'Por mayor')}${chip('menor', 'Por menor')}${chip('abierto', 'Abierto ahora')}${chip('top', '★ 4,5 o más')}
      <label class="fchip fselect">${ico('clock')}<select id="search-sort" aria-label="Ordenar resultados">
        <option value="cerca" ${s.orden === 'cerca' ? 'selected' : ''}>Más cerca</option>
        <option value="valoradas" ${s.orden === 'valoradas' ? 'selected' : ''}>Mejor valoradas</option>
        <option value="resenas" ${s.orden === 'resenas' ? 'selected' : ''}>Más reseñas</option>
      </select></label>`;
  }

  function searchHash() {
    const p = new URLSearchParams();
    if (state.search.cat) p.set('cat', state.search.cat);
    if (state.search.q) p.set('q', state.search.q);
    const qs = p.toString();
    return '#/buscar' + (qs ? '?' + qs : '');
  }

  function renderResults() {
    const s = state.search;
    const box = $('#search-results');
    $('#search-clear').hidden = !s.q;
    $('[data-tab="buscar"]', $('#tabbar')).setAttribute('href', searchHash());
    const hasFilters = s.mayor || s.menor || s.abierto || s.top;
    if (!s.q && !s.cat && !hasFilters) {
      box.innerHTML = `
        <h2 class="sec-title">Buscar por tipo de producto</h2>
        <div class="cat-grid">${CATS.map((c) => {
          const n = STORES.filter((x) => x.categorias.includes(c.id)).length;
          return `<a class="cat-tile" href="#/buscar?cat=${c.id}" style="--c:${c.color}"><span class="ct-emoji">${c.emoji}</span><span class="ct-name">${c.nombre}</span><span class="ct-count">${n} tiendas</span></a>`;
        }).join('')}</div>
        <h2 class="sec-title">Búsquedas populares</h2>
        <div class="popular">${window.UBI_POPULAR.map((p) => `<button class="pop-chip" data-pop="${esc(p)}">${ico('search')} ${esc(p)}</button>`).join('')}</div>
        <h2 class="sec-title">Mejor valoradas</h2>
        <div class="card-list">${STORES.slice().sort((a, b) => ratingOf(b).avg - ratingOf(a).avg).slice(0, 4).map(storeCardHTML).join('')}</div>
        <p class="demo-note">Tiendas y reseñas de demostración ubicadas en calles reales de Gamarra.</p>`;
      return;
    }
    const list = searchStores();
    const c = s.cat && CAT[s.cat];
    box.innerHTML = `
      ${c ? `<div class="cat-banner" style="--c:${c.color}"><span class="cb-emoji">${c.emoji}</span><div><b>${c.nombre}</b><span>${STORES.filter((x) => x.categorias.includes(c.id)).length} tiendas en Gamarra</span></div><a class="icon-btn" href="#/buscar${s.q ? '?q=' + encodeURIComponent(s.q) : ''}" aria-label="Quitar categoría">${ico('x')}</a></div>` : ''}
      <div class="results-head">
        <span><b>${list.length}</b> ${list.length === 1 ? 'tienda' : 'tiendas'}${s.q ? ` para “${esc(s.q)}”` : ''}</span>
        ${list.length ? `<button class="btn btn-soft btn-sm" id="see-on-map">${ico('map')} Ver en mapa</button>` : ''}
      </div>
      ${list.length
        ? `<div class="card-list">${list.map(storeCardHTML).join('')}</div>`
        : `<div class="empty"><div class="empty-emoji">🧐</div><b>No encontramos tiendas${s.q ? ` para “${esc(s.q)}”` : ''}</b><span>Prueba con otra palabra o quita algún filtro.</span>
            <div class="popular">${window.UBI_POPULAR.slice(0, 4).map((p) => `<button class="pop-chip" data-pop="${esc(p)}">${esc(p)}</button>`).join('')}</div></div>`}`;
  }

  function initSearch() {
    const input = $('#search-input');
    let t = null;
    input.addEventListener('input', () => {
      state.search.q = input.value.trim();
      clearTimeout(t);
      t = setTimeout(() => {
        history.replaceState(null, '', searchHash());
        renderResults();
      }, 140);
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); });
    $('#search-clear').addEventListener('click', () => {
      input.value = ''; state.search.q = '';
      history.replaceState(null, '', searchHash());
      renderResults(); input.focus();
    });
    $('#search-filters').addEventListener('click', (e) => {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      state.search[b.dataset.filter] = !state.search[b.dataset.filter];
      vibrate(8);
      renderFilters(); renderResults();
    });
    $('#search-filters').addEventListener('change', (e) => {
      if (e.target.id === 'search-sort') { state.search.orden = e.target.value; renderResults(); }
    });
    $('#search-results').addEventListener('click', (e) => {
      const pop = e.target.closest('[data-pop]');
      if (pop) { input.value = pop.dataset.pop; state.search.q = pop.dataset.pop; history.replaceState(null, '', searchHash()); renderResults(); return; }
      if (e.target.closest('#see-on-map')) {
        const s = state.search;
        state.mapFilter = s.cat && !s.q && !(s.mayor || s.menor || s.abierto || s.top)
          ? { type: 'cat', cat: s.cat }
          : { type: 'ids', ids: searchStores().map((x) => x.id), label: s.q || (s.cat ? CAT[s.cat].corto : 'Filtros') };
        state.selected = null;
        markSelected();
        location.hash = '#/mapa';
        setTimeout(() => applyMapFilter(true), 60);
      }
    });
    setupVoice($('#search-mic'), (text) => {
      input.value = text; state.search.q = text;
      history.replaceState(null, '', searchHash());
      renderResults();
    });
  }

  let voice = null;
  function setupVoice(btn, onText) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { btn.hidden = true; return; }
    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      startVoice(btn, onText);
    });
  }
  function startVoice(btn, onText) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    if (voice) { voice.stop(); return; }
    voice = new SR();
    voice.lang = 'es-PE';
    voice.interimResults = true;
    voice.onresult = (ev) => onText(Array.from(ev.results).map((r) => r[0].transcript).join(' ').trim());
    voice.onend = () => { btn.classList.remove('is-listening'); voice = null; };
    voice.onerror = () => toast('No pudimos escucharte. Revisa el permiso del micrófono.');
    btn.classList.add('is-listening');
    toast('Te escucho… di lo que buscas 🎙️', { ms: 2000 });
    voice.start();
  }

  // ---------------------------------------------------------------- guardados
  function toggleFav(id) {
    if (state.favs.has(id)) { state.favs.delete(id); toast('Quitada de guardados'); }
    else { state.favs.add(id); toast('Guardada ❤️ La encuentras en Guardados'); vibrate(); }
    storage.set('favs', [...state.favs]);
    updateFavBadge();
    renderSaved();
    $$(`[data-fav="${id}"]`).forEach((b) => { const on = state.favs.has(id); b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
  }
  function updateFavBadge() {
    const b = $('#fav-badge');
    b.hidden = !state.favs.size;
    b.textContent = state.favs.size;
  }
  function renderSaved() {
    const list = STORES.filter((s) => state.favs.has(s.id)).sort((a, b) => walkM(a) - walkM(b));
    $('#saved-list').innerHTML = list.length
      ? `<p class="muted pad-x">${list.length} ${list.length === 1 ? 'tienda guardada' : 'tiendas guardadas'} · ordenadas por distancia</p><div class="card-list">${list.map(storeCardHTML).join('')}</div>`
      : `<div class="empty"><div class="empty-emoji">💙</div><b>Aún no guardas tiendas</b><span>Toca el corazón en una tienda para tenerla a la mano en tu próxima visita a Gamarra.</span><a class="btn btn-go" href="#/buscar">${ico('search')} Buscar tiendas</a></div>`;
  }

  function onCardListClick(e) {
    const fav = e.target.closest('[data-fav]');
    if (fav) { e.stopPropagation(); toggleFav(fav.dataset.fav); return; }
    const card = e.target.closest('.store-card');
    if (card) location.hash = '#/tienda/' + card.dataset.id;
  }
  function onCardKey(e) {
    if (e.key !== 'Enter' || !e.target.classList.contains('store-card')) return;
    location.hash = '#/tienda/' + e.target.dataset.id;
  }

  // ---------------------------------------------------------------- detalle de tienda
  let detailId = null;

  function reviewHTML(s, rv) {
    const key = `${s.id}|${rv.autor}|${rv.fecha}`;
    const initials = rv.autor.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    const hue = [...rv.autor].reduce((a, ch) => a + ch.charCodeAt(0), 0) % 360;
    const useful = state.useful.has(key);
    return `<article class="review">
      <div class="rv-avatar" style="--h:${hue}">${esc(initials)}</div>
      <div class="rv-main">
        <div class="rv-top"><b>${esc(rv.autor)}</b>${rv.mia ? '<span class="rv-badge you">Tu reseña</span>' : ''}${rv.mayorista ? `<span class="rv-badge">🛍️ Mayorista · ${esc(rv.mayorista)}</span>` : ''}</div>
        <div class="rv-sub">${starsHTML(rv.estrellas, 'sm')} <span>${timeAgo(rv.fecha)}</span></div>
        <p>${esc(rv.texto)}</p>
        ${rv.mia ? '' : `<button class="rv-useful ${useful ? 'is-on' : ''}" data-useful="${esc(key)}">👍 Útil${(rv.utiles || 0) + (useful ? 1 : 0) ? ` (${(rv.utiles || 0) + (useful ? 1 : 0)})` : ''}</button>`}
      </div>
    </article>`;
  }

  function reviewsHTML(s) {
    const list = reviewsOf(s), r = ratingOf(s);
    const dist = [5, 4, 3, 2, 1].map((k) => list.filter((x) => x.estrellas === k).length);
    const sorted = list.slice().sort(state.reviewSort === 'mejores'
      ? (a, b) => b.estrellas - a.estrellas || b.fecha.localeCompare(a.fecha)
      : (a, b) => b.fecha.localeCompare(a.fecha) || (b.mia ? 1 : 0) - (a.mia ? 1 : 0));
    return `<div class="sec-head"><h2>Reseñas</h2><button class="btn btn-soft btn-sm" data-act="write">${ico('edit')} Escribir reseña</button></div>
      <div class="rv-summary">
        <div class="rv-big"><b>${fmtRating(r.avg)}</b>${starsHTML(r.avg)}<span>${r.n} reseñas</span></div>
        <div class="rv-bars">${[5, 4, 3, 2, 1].map((k, i) => `<div class="rv-bar"><span>${k}</span><i><em style="width:${(dist[i] / list.length) * 100}%"></em></i><small>${dist[i]}</small></div>`).join('')}</div>
      </div>
      <div class="seg" role="tablist">
        <button role="tab" class="${state.reviewSort !== 'mejores' ? 'is-on' : ''}" aria-selected="${state.reviewSort !== 'mejores'}" data-sort="recientes">Más recientes</button>
        <button role="tab" class="${state.reviewSort === 'mejores' ? 'is-on' : ''}" aria-selected="${state.reviewSort === 'mejores'}" data-sort="mejores">Mejor valoradas</button>
      </div>
      <div class="rv-list">${sorted.map((rv) => reviewHTML(s, rv)).join('')}</div>`;
  }

  function detailHTML(s) {
    const c = CAT[s.categorias[0]], r = ratingOf(s), oi = openInfo(s), d = walkM(s);
    const fav = state.favs.has(s.id);
    const a = s.direccion;
    const today = limaNow().day;
    return `
      <div class="detail-bar">
        <button class="round-btn" data-act="back" aria-label="Volver">${ico('back')}</button>
        <div class="detail-bar-title">${esc(s.nombre)}</div>
        <button class="round-btn" data-act="share" aria-label="Compartir tienda">${ico('share')}</button>
        <button class="round-btn fav-top ${fav ? 'is-on' : ''}" data-act="fav" aria-label="${fav ? 'Quitar de guardados' : 'Guardar tienda'}" aria-pressed="${fav}">${ico('heart')}</button>
      </div>
      <div class="detail-scroll">
        <div class="detail-hero" style="--c:${c.color}">
          <div class="hero-deco" aria-hidden="true"><span>${c.emoji}</span><span>${c.emoji}</span><span>${CAT[s.categorias[1] || s.categorias[0]].emoji}</span><span>${c.emoji}</span></div>
          <div class="hero-emoji">${c.emoji}</div>
        </div>
        <div class="detail-card">
          <h1>${esc(s.nombre)}${s.verificada ? `<span class="verified" title="Tienda verificada">${ico('check')}</span>` : ''}</h1>
          <div class="cat-chips">${s.categorias.map((id) => `<a class="cat-chip" href="#/buscar?cat=${id}" style="--c:${CAT[id].color}">${CAT[id].emoji} ${CAT[id].nombre}</a>`).join('')}</div>
          <button class="rating-line" data-act="to-reviews">${starsHTML(r.avg)} <b>${fmtRating(r.avg)}</b> <span>· ${r.n} reseñas</span></button>
          <div class="status-line"><span class="dot ${oi.open ? 'ok' : 'off'}"></span>${oi.text}</div>
          <div class="sc-tags">
            ${s.venta.mayor ? `<span class="tag tag-strong">Por mayor${s.venta.minimoMayor ? ` · desde ${s.venta.minimoMayor}` : ''}</span>` : ''}
            ${s.venta.menor ? '<span class="tag">Por menor</span>' : ''}
            <span class="tag">En Gamarra desde ${s.desde}</span>
          </div>
          <div class="quick-actions">
            <button data-act="route"><span class="qa-ico go">${ico('nav')}</span><span>Ir ahora</span></button>
            <a href="${gmapsDir(s)}" target="_blank" rel="noopener"><span class="qa-ico">${ico('pin')}</span><span>Google Maps</span></a>
            <button data-act="share"><span class="qa-ico">${ico('share')}</span><span>Compartir</span></button>
            <button data-act="fav" class="${fav ? 'is-on' : ''}"><span class="qa-ico fav">${ico('heart')}</span><span>${fav ? 'Guardada' : 'Guardar'}</span></button>
          </div>
          <p class="detail-desc">${esc(s.descripcion)}</p>
        </div>

        <section class="detail-sec">
          <h2>Dirección exacta</h2>
          <div class="addr-box">
            <span class="addr-ico">${ico('pin')}</span>
            <div>
              <div class="addr-main">${esc(a.calle)} ${esc(a.numero)}</div>
              <div class="addr-int">${esc(a.interior)}</div>
              <div class="addr-sub">${esc(a.distrito)}, ${esc(a.ciudad)} · Emporio Comercial de Gamarra</div>
            </div>
          </div>
          <div class="addr-meta">
            <span>${ico('walk')} A ${fmtDist(d)} · ${walkMin(d)} min a pie${state.user.simulated ? ' (ubicación simulada)' : ''}</span>
            <span>🚇 A ${fmtDist(distM(STATION, s) * 1.3)} de la Estación Gamarra</span>
          </div>
          <div class="mini-map-slot" id="mini-map-slot"></div>
          <div class="btn-row">
            <a class="btn btn-primary" href="${gmapsSearch(s)}" target="_blank" rel="noopener">${ico('external')} Ver ubicación en Google Maps</a>
            <button class="btn btn-ghost" data-act="copy" aria-label="Copiar dirección">${ico('copy')}</button>
          </div>
        </section>

        <section class="detail-sec">
          <h2>Productos y precios</h2>
          <ul class="product-list">${s.productos.map((p) => `<li><span>${esc(p.nombre)}</span><b>desde S/ ${p.desde}</b></li>`).join('')}</ul>
          <p class="fine">Precios referenciales por unidad. ${s.venta.mayor ? `Precio por mayor desde ${esc(s.venta.minimoMayor)}.` : 'Solo venta por menor.'}</p>
        </section>

        <section class="detail-sec">
          <h2>Horario</h2>
          <ul class="hours">${[1, 2, 3, 4, 5, 6, 0].map((i) => `<li class="${i === today ? 'is-today' : ''}"><span>${DAYS[i]}${i === today ? ' · hoy' : ''}</span><span>${s.horario[i] ? `${fmtTime(s.horario[i][0])} – ${fmtTime(s.horario[i][1])}` : 'Cerrado'}</span></li>`).join('')}</ul>
          <h2 class="mt">Medios de pago</h2>
          <div class="pay-chips">${s.pagos.map((p) => `<span class="pay">${PAY_ICON[p] || '💳'} ${p}</span>`).join('')}</div>
        </section>

        <section class="detail-sec" id="detail-reviews">${reviewsHTML(s)}</section>
        <p class="demo-note">Tienda y reseñas de demostración. Calles y numeración: © colaboradores de OpenStreetMap.</p>
      </div>
      <div class="detail-cta">
        <a class="btn btn-go btn-lg" href="${gmapsDir(s)}" target="_blank" rel="noopener">${ico('nav')} Cómo llegar con Google Maps</a>
      </div>`;
  }

  function openDetail(id) {
    const s = BY_ID[id];
    if (!s) { location.replace('#/mapa'); return; }
    const el = $('#detail');
    if (detailId !== id || !el.innerHTML) {
      detailId = id;
      state.reviewSort = 'recientes';
      parkMiniMap();
      el.innerHTML = detailHTML(s);
      $('.detail-scroll', el).scrollTop = 0;
      el.classList.remove('scrolled');
    }
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    $('#app').classList.add('detail-open');
    mountMiniMap(s);
  }

  function closeDetail() {
    const el = $('#detail');
    if (!el.classList.contains('is-open')) return;
    el.classList.remove('is-open');
    el.setAttribute('aria-hidden', 'true');
    $('#app').classList.remove('detail-open');
  }

  // El mini‑mapa es una sola instancia: se guarda fuera del detalle antes de redibujarlo
  function parkMiniMap() {
    const mm = $('#mini-map');
    if (mm) $('#mini-map-holder').appendChild(mm);
  }

  function mountMiniMap(s) {
    const slot = $('#mini-map-slot');
    const mm = $('#mini-map');
    if (!slot || !mm || !window.maplibregl) return;
    slot.appendChild(mm);
    if (!miniMap) {
      miniMap = new maplibregl.Map({
        container: mm, style: buildMapStyle(state.theme === 'dark'), center: [s.lng, s.lat], zoom: 16.8,
        interactive: false, attributionControl: false,
      });
      const el = document.createElement('div');
      el.className = 'pin is-selected static';
      miniMarker = new maplibregl.Marker({ element: el, anchor: 'bottom' });
    }
    const c = CAT[s.categorias[0]];
    const el = miniMarker.getElement();
    el.style.setProperty('--c', c.color);
    el.innerHTML = `<span class="pin-body"><span class="pin-emoji">${c.emoji}</span></span>`;
    miniMarker.setLngLat([s.lng, s.lat]).addTo(miniMap);
    requestAnimationFrame(() => { miniMap.resize(); miniMap.jumpTo({ center: [s.lng, s.lat], zoom: 16.8 }); });
    slot.onclick = () => window.open(gmapsSearch(s), '_blank', 'noopener');
    slot.setAttribute('role', 'link');
    slot.setAttribute('aria-label', 'Abrir ubicación en Google Maps');
  }

  async function shareStore(s) {
    const url = location.origin + location.pathname + '#/tienda/' + s.id;
    const text = `${s.nombre} · ${fullAddress(s)}`;
    if (navigator.share) {
      try { await navigator.share({ title: s.nombre, text, url }); } catch (e) { /* cancelado */ }
      return;
    }
    copyText(`${text}\n${url}`, 'Enlace copiado para compartir');
  }
  function copyText(text, msg) {
    const done = () => toast(msg);
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    else fallbackCopy(text, done);
  }
  function fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('No se pudo copiar'); }
    ta.remove();
  }

  function onDetailClick(e) {
    const s = BY_ID[detailId];
    if (!s) return;
    const useful = e.target.closest('[data-useful]');
    if (useful) {
      const k = useful.dataset.useful;
      state.useful.has(k) ? state.useful.delete(k) : state.useful.add(k);
      storage.set('useful', [...state.useful]);
      $('#detail-reviews').innerHTML = reviewsHTML(s);
      return;
    }
    const sort = e.target.closest('[data-sort]');
    if (sort) { state.reviewSort = sort.dataset.sort; $('#detail-reviews').innerHTML = reviewsHTML(s); return; }
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === 'back') goBack();
    else if (act === 'share') shareStore(s);
    else if (act === 'copy') copyText(fullAddress(s), 'Dirección copiada 📋');
    else if (act === 'fav') { toggleFav(s.id); refreshDetailFav(s); }
    else if (act === 'route') startRoute(s.id);
    else if (act === 'to-reviews') $('#detail-reviews').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    else if (act === 'write') openReviewModal(s);
  }
  function refreshDetailFav(s) {
    const on = state.favs.has(s.id);
    const top = $('#detail .fav-top');
    top.classList.toggle('is-on', on);
    top.setAttribute('aria-pressed', on);
    top.setAttribute('aria-label', on ? 'Quitar de guardados' : 'Guardar tienda');
    const qa = $('#detail .quick-actions [data-act="fav"]');
    qa.classList.toggle('is-on', on);
    qa.lastElementChild.textContent = on ? 'Guardada' : 'Guardar';
  }

  function openReviewModal(s) {
    openModal({
      cls: 'modal-sheet',
      html: `<div class="modal-grip"></div>
        <div class="modal-head"><h2>Tu reseña de ${esc(s.nombre)}</h2><button class="icon-btn" data-close aria-label="Cerrar">${ico('x')}</button></div>
        <div class="star-pick" role="radiogroup" aria-label="Calificación">${[1, 2, 3, 4, 5].map((n) => `<button role="radio" aria-checked="false" data-star="${n}" aria-label="${n} estrella${n > 1 ? 's' : ''}">★</button>`).join('')}</div>
        <div class="star-label muted">Toca las estrellas para calificar</div>
        <div class="quick-tags">${['Buen precio', 'Buena atención', 'Buena calidad', 'Tallas completas', 'Envío a provincia'].map((t) => `<button class="pop-chip" data-tag="${t}">${t}</button>`).join('')}</div>
        <label class="field"><span>Tu comentario</span><textarea id="rv-text" rows="4" maxlength="400" placeholder="¿Qué compraste? ¿Cómo fue la atención y el precio?"></textarea></label>
        <label class="field"><span>Tu nombre (opcional)</span><input id="rv-name" maxlength="30" placeholder="Ej.: Carla M."></label>
        <button class="btn btn-go btn-lg" id="rv-send" disabled>Publicar reseña</button>
        <p class="fine center">Tu reseña se guarda en este dispositivo (prototipo).</p>`,
      onMount(m) {
        let stars = 0;
        const labels = ['', 'Muy mala', 'Mala', 'Regular', 'Buena', '¡Excelente!'];
        const send = $('#rv-send', m), text = $('#rv-text', m);
        const sync = () => { send.disabled = !(stars > 0 && text.value.trim().length >= 4); };
        $$('[data-star]', m).forEach((b) => b.addEventListener('click', () => {
          stars = +b.dataset.star;
          $$('[data-star]', m).forEach((x) => { const on = +x.dataset.star <= stars; x.classList.toggle('is-on', on); x.setAttribute('aria-checked', +x.dataset.star === stars); });
          $('.star-label', m).textContent = labels[stars];
          vibrate(8); sync();
        }));
        $$('[data-tag]', m).forEach((b) => b.addEventListener('click', () => {
          const t = b.dataset.tag;
          if (!text.value.includes(t)) text.value = (text.value.trim() ? text.value.trim() + '. ' : '') + t;
          b.classList.add('is-on'); sync();
        }));
        text.addEventListener('input', sync);
        send.addEventListener('click', () => {
          const rv = { autor: $('#rv-name', m).value.trim() || 'Tú', estrellas: stars, fecha: new Date(Date.now() - 5 * 3600e3).toISOString().slice(0, 10), texto: text.value.trim(), mia: true, utiles: 0 };
          (state.userReviews[s.id] = state.userReviews[s.id] || []).unshift(rv);
          storage.set('reviews', state.userReviews);
          addPoints(10);
          closeModal();
          state.reviewSort = 'recientes';
          const scroll = $('#detail .detail-scroll').scrollTop;
          parkMiniMap();
          $('#detail').innerHTML = detailHTML(s);
          $('#detail .detail-scroll').scrollTop = scroll;
          mountMiniMap(s);
          $('#detail-reviews').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
          toast('¡Gracias por tu reseña! +10 puntos 🏅');
          renderSheet();
        });
      },
    });
  }

  // ---------------------------------------------------------------- modales, menú y avisos
  function openModal({ html, cls = '', onMount }) {
    const root = $('#modal-root');
    root.innerHTML = `<div class="modal-backdrop" data-close></div><div class="modal ${cls}" role="dialog" aria-modal="true">${html}</div>`;
    root.classList.add('is-open');
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-visible')));
    $$('[data-close]', root).forEach((b) => b.addEventListener('click', closeModal));
    if (onMount) onMount($('.modal', root));
  }
  function closeModal() {
    const root = $('#modal-root');
    if (!root.classList.contains('is-open')) return;
    root.classList.remove('is-visible');
    setTimeout(() => { root.classList.remove('is-open'); root.innerHTML = ''; }, 260);
  }

  function toast(msg, { ms = 2600, action, onAction } = {}) {
    const root = $('#toast-root');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span>${msg}</span>${action ? `<button>${esc(action)}</button>` : ''}`;
    root.appendChild(el);
    while (root.children.length > 2) root.firstElementChild.remove();
    requestAnimationFrame(() => el.classList.add('in'));
    const dismiss = () => { el.classList.remove('in'); setTimeout(() => el.remove(), 300); };
    if (action) el.querySelector('button').addEventListener('click', () => { onAction(); dismiss(); });
    setTimeout(dismiss, ms);
  }

  let installEvt = null;
  const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  function openMenu() {
    const level = state.points >= 60 ? 'Experto de Gamarra' : state.points >= 20 ? 'Comprador frecuente' : 'Novato';
    openModal({
      cls: 'modal-menu',
      html: `<div class="menu-profile">
          <div class="menu-avatar">${WAZER}</div>
          <div><b>¡Hola, comprador!</b><span>🏅 ${state.points} puntos · ${level}</span></div>
          <button class="icon-btn" data-close aria-label="Cerrar menú">${ico('x')}</button>
        </div>
        <nav class="menu-list">
          ${!isStandalone() && installEvt ? `<button data-m="install">${ico('download')} Instalar UbiGamarra</button>` : ''}
          ${!isStandalone() && !installEvt && isIOS ? `<div class="menu-hint">${ico('download')} <span>Para instalar en iPhone: toca <b>Compartir</b> y luego <b>Agregar a inicio</b>.</span></div>` : ''}
          <button data-m="theme">${ico(state.theme === 'dark' ? 'sun' : 'moon')} ${state.theme === 'dark' ? 'Modo día' : 'Modo noche'}</button>
          <a href="#/guardados" data-close>${ico('heart')} Mis tiendas guardadas</a>
          <button data-m="loc">${ico('locate')} ${state.user.simulated ? 'Usar mi ubicación real' : 'Simular que estoy en Gamarra'}</button>
          <button data-m="reset">${ico('refresh')} Restablecer datos de demo</button>
        </nav>
        <div class="menu-about">
          ${ico('info')}
          <p><b>UbiGamarra · prototipo</b><br>Tiendas, precios y reseñas son de demostración. Calles, numeración y zona del emporio: © colaboradores de OpenStreetMap. Mapa: OpenFreeMap. Rutas a pie: OSRM.</p>
        </div>`,
      onMount(m) {
        m.addEventListener('click', async (e) => {
          const b = e.target.closest('[data-m]');
          if (!b) return;
          const act = b.dataset.m;
          if (act === 'install' && installEvt) {
            installEvt.prompt();
            await installEvt.userChoice;
            installEvt = null;
            closeModal();
          } else if (act === 'theme') { applyTheme(state.theme === 'dark' ? 'light' : 'dark', true); closeModal(); }
          else if (act === 'loc') { closeModal(); state.user.simulated ? useRealLocation() : useSimulatedLocation(); }
          else if (act === 'reset') {
            if (confirm('¿Borrar tus reseñas, reportes, guardados y puntos de este dispositivo?')) { storage.clear(); location.hash = '#/mapa'; location.reload(); }
          }
        });
      },
    });
  }

  // ---------------------------------------------------------------- navegación entre pantallas
  function parseHash() {
    const h = location.hash.replace(/^#/, '') || '/mapa';
    const [path, qs] = h.split('?');
    return { parts: path.split('/').filter(Boolean), params: new URLSearchParams(qs || '') };
  }

  function showTab(tab) {
    state.baseTab = tab;
    $('#app').dataset.tab = tab;
    $$('.screen').forEach((sc) => sc.classList.toggle('is-active', sc.id === 'screen-' + tab));
    $$('#tabbar a').forEach((a) => {
      const on = a.dataset.tab === tab;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function goBack() {
    if (state.navigated && history.length > 1) history.back();
    else location.hash = '#/' + state.baseTab;
  }

  let firstRoute = true;
  function onRoute() {
    const { parts, params } = parseHash();
    const view = parts[0] || 'mapa';
    if (!firstRoute) state.navigated = true;
    firstRoute = false;
    closeModal();
    if (view === 'tienda') { openDetail(parts[1]); return; }
    closeDetail();
    if (view === 'mapa') {
      showTab('mapa');
      if (params.get('cat') && CAT[params.get('cat')]) { state.mapFilter = { type: 'cat', cat: params.get('cat') }; applyMapFilter(true); }
    } else if (view === 'buscar') {
      showTab('buscar');
      const cat = params.get('cat');
      state.search.cat = CAT[cat] ? cat : null;
      state.search.q = params.get('q') || '';
      $('#search-input').value = state.search.q;
      renderFilters();
      renderResults();
      $('#search-results').scrollTop = 0;
      if (params.get('focus')) setTimeout(() => $('#search-input').focus(), 250);
    } else if (view === 'guardados') {
      showTab('guardados');
      renderSaved();
    } else {
      location.replace('#/mapa');
    }
  }

  // ---------------------------------------------------------------- arranque
  function bindUI() {
    hydrateIcons();
    $('#btn-menu').innerHTML = WAZER;
    $('#map-search').addEventListener('click', () => { location.hash = '#/buscar?focus=1'; });
    setupVoice($('#map-mic'), (text) => {
      location.hash = '#/buscar?q=' + encodeURIComponent(text);
    });
    $('#btn-menu').addEventListener('click', openMenu);
    $('#map-chips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-chip]');
      if (!b) return;
      const v = b.dataset.chip;
      if (v === 'all' || v === 'clear') state.mapFilter = null;
      else state.mapFilter = state.mapFilter && state.mapFilter.cat === v ? null : { type: 'cat', cat: v };
      vibrate(8);
      if (state.sheet !== 'nav') { if (state.route) clearRoute(); state.sheet = 'browse'; state.selected = null; markSelected(); }
      applyMapFilter(true);
    });
    $('#loc-chip').addEventListener('click', (e) => {
      const b = e.target.closest('[data-loc]');
      if (!b) return;
      b.dataset.loc === 'real' ? useRealLocation() : useSimulatedLocation();
    });
    $('#btn-theme').addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark', true));
    $('#btn-3d').addEventListener('click', () => {
      state.is3d = !state.is3d;
      $('#btn-3d').classList.toggle('is-on', state.is3d);
      $('#btn-3d').setAttribute('aria-pressed', state.is3d);
      if (!map) return;
      map.setLayoutProperty('building-3d', 'visibility', state.is3d ? 'visible' : 'none');
      map.easeTo({ pitch: state.is3d ? 55 : 0, bearing: state.is3d ? -18 : 0, duration: 900 });
    });
    $('#btn-locate').addEventListener('click', () => afterUserMoved(true));
    $('#btn-report').addEventListener('click', openReportPicker);
    $('#sheet-body').addEventListener('click', onSheetClick);
    ['#search-results', '#saved-list'].forEach((sel) => {
      $(sel).addEventListener('click', onCardListClick);
      $(sel).addEventListener('keydown', onCardKey);
    });
    const detail = $('#detail');
    detail.addEventListener('click', onDetailClick);
    detail.addEventListener('scroll', (e) => {
      if (e.target.classList && e.target.classList.contains('detail-scroll')) detail.classList.toggle('scrolled', e.target.scrollTop > 150);
    }, true);
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if ($('#modal-root').classList.contains('is-open')) closeModal();
      else if ($('#detail').classList.contains('is-open')) goBack();
    });

    // Ningún foco debe desplazar el marco de la app (navegadores sin overflow: clip)
    ['#app', '#screen-mapa'].forEach((sel) => {
      const el = $(sel);
      el.addEventListener('scroll', () => { if (el.scrollLeft || el.scrollTop) { el.scrollLeft = 0; el.scrollTop = 0; } });
    });

    // La hoja inferior empuja los botones flotantes
    const sheet = $('#sheet');
    const setH = () => $('#screen-mapa').style.setProperty('--sheet-h', sheet.offsetHeight + 'px');
    if (window.ResizeObserver) new ResizeObserver(setH).observe(sheet);
    setH();

    systemDark.addEventListener('change', (e) => { if (!storage.get('theme', null)) applyTheme(e.matches ? 'dark' : 'light', false); });

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installEvt = e;
      if (!storage.get('installHint', false)) {
        storage.set('installHint', true);
        setTimeout(() => toast('Instala UbiGamarra en tu celular 📲', {
          ms: 7000, action: 'Instalar',
          onAction: async () => { if (!installEvt) return; installEvt.prompt(); await installEvt.userChoice; installEvt = null; },
        }), 2500);
      }
    });
    window.addEventListener('appinstalled', () => toast('¡UbiGamarra quedó instalada! 🎉'));
    window.addEventListener('hashchange', onRoute);
  }

  function init() {
    document.documentElement.dataset.theme = state.theme;
    bindUI();
    applyTheme(state.theme, false);
    initMap();
    initSearch();
    renderMapChips();
    renderLocChip();
    renderSheet();
    renderFilters();
    renderResults();
    renderSaved();
    updateFavBadge();
    onRoute();
    // refresca "abierto/cerrado" cada minuto
    setInterval(() => { if (!state.nav) renderSheet(); }, 60000);
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      navigator.serviceWorker.register('sw.js').catch(() => { /* sin modo offline */ });
    }
  }

  init();
})();
