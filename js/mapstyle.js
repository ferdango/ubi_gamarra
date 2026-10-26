// Estilo de mapa inspirado en Waze (colores planos, vías gruesas y redondeadas) sobre teselas vectoriales de OpenFreeMap.

(function () {
  const DAY = {
    land: '#F1F1EC', residential: '#ECECE5', commercial: '#F4EEE4', park: '#CDEBC0', water: '#A7D8F2',
    building: '#E3E3DC', buildingLine: '#D5D5CD', building3d: '#E6E4DE',
    road: '#FFFFFF', casing: '#D3D5D9',
    tertiary: '#FFFFFF', casingTertiary: '#CDD1D6',
    secondary: '#FFF1BF', casingSecondary: '#E5CF8A',
    primary: '#FFE08A', casingPrimary: '#E7B955',
    motorway: '#FFC15E', casingMotorway: '#E39A35',
    pedestrian: '#F9F8F3', casingPedestrian: '#DCDAD2', path: '#B4B9C0',
    transit: '#2BB673', label: '#4B5563', labelMajor: '#3A4250', halo: '#FFFFFF', place: '#7A8594', housenumber: '#9AA1AB',
  };
  const NIGHT = {
    land: '#1B2632', residential: '#1E2A37', commercial: '#222D39', park: '#1D3A2F', water: '#11314A',
    building: '#26323F', buildingLine: '#2E3B49', building3d: '#2C3947',
    road: '#3A4A5C', casing: '#141C25',
    tertiary: '#43556A', casingTertiary: '#141C25',
    secondary: '#7D6A43', casingSecondary: '#3B3021',
    primary: '#A8853C', casingPrimary: '#4E3D1D',
    motorway: '#C2762F', casingMotorway: '#5F3816',
    pedestrian: '#2A3746', casingPedestrian: '#18212B', path: '#5B6A7B',
    transit: '#3FBF86', label: '#C9D3DD', labelMajor: '#E2E8EF', halo: '#1B2632', place: '#8C99A8', housenumber: '#6E7C8C',
  };

  const width = (stops) => ['interpolate', ['exponential', 1.6], ['zoom'], ...stops.flat()];
  const cls = (...names) => ['match', ['get', 'class'], names, true, false];

  // "Jirón Antonio Bazo" -> "Jr. Antonio Bazo", como se escriben las direcciones en Lima
  const NAME = ['coalesce', ['get', 'name:es'], ['get', 'name'], ''];
  const prefix = (long, short) => [['==', ['index-of', long, ['var', 'n']], 0], ['concat', short, ['slice', ['var', 'n'], long.length]]];
  const SHORT_NAME = ['let', 'n', NAME, ['case',
    ...prefix('Jirón ', 'Jr. '), ...prefix('Avenida ', 'Av. '), ...prefix('Pasaje ', 'Psje. '),
    ...prefix('Calle ', 'Ca. '), ...prefix('Prolongación ', 'Prol. '),
    ['var', 'n']]];

  window.buildMapStyle = function (night) {
    const c = night ? NIGHT : DAY;
    return {
      version: 8,
      name: night ? 'UbiGamarra noche' : 'UbiGamarra día',
      glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
      sources: { omt: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' } },
      layers: [
        { id: 'background', type: 'background', paint: { 'background-color': c.land } },
        { id: 'landuse-residential', type: 'fill', source: 'omt', 'source-layer': 'landuse',
          filter: cls('residential', 'suburb', 'neighbourhood'), paint: { 'fill-color': c.residential } },
        { id: 'landuse-commercial', type: 'fill', source: 'omt', 'source-layer': 'landuse',
          filter: cls('commercial', 'retail', 'industrial'), paint: { 'fill-color': c.commercial } },
        { id: 'landcover-green', type: 'fill', source: 'omt', 'source-layer': 'landcover',
          filter: cls('grass', 'wood', 'scrub'), paint: { 'fill-color': c.park } },
        { id: 'park', type: 'fill', source: 'omt', 'source-layer': 'park', paint: { 'fill-color': c.park } },
        { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', paint: { 'fill-color': c.water } },
        { id: 'waterway', type: 'line', source: 'omt', 'source-layer': 'waterway',
          paint: { 'line-color': c.water, 'line-width': width([[12, 1], [18, 6]]) } },
        { id: 'building', type: 'fill', source: 'omt', 'source-layer': 'building', minzoom: 14.5,
          paint: { 'fill-color': c.building, 'fill-outline-color': c.buildingLine,
            'fill-opacity': ['interpolate', ['linear'], ['zoom'], 14.5, 0, 16, 1] } },

        // Peatonales y veredas (Gamarra tiene varias calles peatonales)
        { id: 'path-pedestrian-casing', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 14,
          filter: ['all', cls('path'), ['==', ['get', 'subclass'], 'pedestrian']],
          layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casingPedestrian, 'line-width': width([[14, 2], [16, 6], [18, 18], [19, 30]]) } },
        { id: 'path-pedestrian', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 14,
          filter: ['all', cls('path'), ['==', ['get', 'subclass'], 'pedestrian']],
          layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.pedestrian, 'line-width': width([[14, 1], [16, 4], [18, 15], [19, 26]]) } },
        { id: 'path', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 15,
          filter: ['all', cls('path', 'track'), ['!=', ['get', 'subclass'], 'pedestrian']],
          paint: { 'line-color': c.path, 'line-width': width([[15, 0.6], [18, 2]]), 'line-dasharray': [2, 1.5] } },

        // Bordes de vías
        { id: 'road-casing-minor', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 13,
          filter: cls('minor', 'service'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casing, 'line-width': width([[13, 0.8], [15, 4], [17, 12], [19, 32]]) } },
        { id: 'road-casing-tertiary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 11,
          filter: cls('tertiary'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casingTertiary, 'line-width': width([[11, 1], [13, 3], [15, 7], [17, 16], [19, 40]]) } },
        { id: 'road-casing-secondary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 9,
          filter: cls('secondary'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casingSecondary, 'line-width': width([[9, 1], [13, 4], [15, 8], [17, 18], [19, 44]]) } },
        { id: 'road-casing-primary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 7,
          filter: cls('primary', 'trunk'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casingPrimary, 'line-width': width([[7, 1], [12, 4], [15, 10], [17, 22], [19, 50]]) } },
        { id: 'road-casing-motorway', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 6,
          filter: cls('motorway'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.casingMotorway, 'line-width': width([[6, 1], [12, 5], [15, 12], [17, 24], [19, 54]]) } },

        // Relleno de vías
        { id: 'road-service', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 14,
          filter: cls('service'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.road, 'line-width': width([[14, 0.5], [15, 2], [17, 8], [19, 24]]) } },
        { id: 'road-minor', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 13,
          filter: cls('minor'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.road, 'line-width': width([[13, 0.4], [15, 2.6], [17, 9.5], [19, 28]]) } },
        { id: 'road-tertiary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 11,
          filter: cls('tertiary'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.tertiary, 'line-width': width([[11, 0.5], [13, 2], [15, 5.5], [17, 13], [19, 35]]) } },
        { id: 'road-secondary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 9,
          filter: cls('secondary'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.secondary, 'line-width': width([[9, 0.5], [13, 2.6], [15, 6.5], [17, 15], [19, 39]]) } },
        { id: 'road-primary', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 7,
          filter: cls('primary', 'trunk'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.primary, 'line-width': width([[7, 0.5], [12, 2.6], [15, 8], [17, 18.5], [19, 45]]) } },
        { id: 'road-motorway', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 6,
          filter: cls('motorway'), layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': c.motorway, 'line-width': width([[6, 0.5], [12, 3.5], [15, 9.5], [17, 20], [19, 49]]) } },

        // Línea 1 del Metro de Lima (viaducto sobre Av. Aviación)
        { id: 'transit', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 11,
          filter: cls('transit', 'rail'),
          paint: { 'line-color': c.transit, 'line-width': width([[11, 1.5], [15, 4], [18, 8]]), 'line-opacity': 0.85 } },
        { id: 'transit-dash', type: 'line', source: 'omt', 'source-layer': 'transportation', minzoom: 14,
          filter: cls('transit', 'rail'),
          paint: { 'line-color': c.land, 'line-width': width([[14, 1], [18, 3]]), 'line-dasharray': [3, 3] } },

        // Edificios en 3D (se activan con el botón 3D)
        { id: 'building-3d', type: 'fill-extrusion', source: 'omt', 'source-layer': 'building', minzoom: 15,
          layout: { visibility: 'none' },
          paint: { 'fill-extrusion-color': c.building3d,
            'fill-extrusion-height': ['coalesce', ['get', 'render_height'], 8],
            'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0],
            'fill-extrusion-opacity': 0.85 } },

        // Etiquetas
        { id: 'housenumber', type: 'symbol', source: 'omt', 'source-layer': 'housenumber', minzoom: 17.3,
          layout: { 'text-field': ['get', 'housenumber'], 'text-font': ['Noto Sans Regular'], 'text-size': 10 },
          paint: { 'text-color': c.housenumber, 'text-halo-color': c.halo, 'text-halo-width': 1 } },
        { id: 'road-label-minor', type: 'symbol', source: 'omt', 'source-layer': 'transportation_name', minzoom: 14.5,
          filter: ['!', cls('motorway', 'trunk', 'primary', 'secondary')],
          layout: { 'symbol-placement': 'line', 'text-field': SHORT_NAME, 'text-font': ['Noto Sans Bold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 14.5, 9.5, 17, 12, 19, 15], 'text-max-angle': 30,
            'symbol-spacing': 260, 'text-letter-spacing': 0.02 },
          paint: { 'text-color': c.label, 'text-halo-color': c.halo, 'text-halo-width': 2 } },
        { id: 'road-label-major', type: 'symbol', source: 'omt', 'source-layer': 'transportation_name', minzoom: 12,
          filter: cls('motorway', 'trunk', 'primary', 'secondary'),
          layout: { 'symbol-placement': 'line', 'text-field': SHORT_NAME, 'text-font': ['Noto Sans Bold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 12, 10, 17, 13.5, 19, 16], 'text-max-angle': 30,
            'symbol-spacing': 320, 'text-letter-spacing': 0.02 },
          paint: { 'text-color': c.labelMajor, 'text-halo-color': c.halo, 'text-halo-width': 2.2 } },
        { id: 'place-label', type: 'symbol', source: 'omt', 'source-layer': 'place', maxzoom: 16,
          filter: cls('suburb', 'quarter', 'neighbourhood'),
          layout: { 'text-field': ['upcase', NAME], 'text-font': ['Noto Sans Bold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 12, 10, 15, 12], 'text-letter-spacing': 0.12, 'text-max-width': 8 },
          paint: { 'text-color': c.place, 'text-halo-color': c.halo, 'text-halo-width': 1.5 } },
      ],
    };
  };
})();
