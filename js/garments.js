// Ilustraciones de producto (SVG) que se pintan con el color elegido, como la foto de un e-commerce.
// Cada forma: under (detrás), body (silueta principal), extra (encima), detail (costuras) y top (botones, broches).
// Marcadores de color: {c} color, {s} sombra, {d} costura, {l} tono claro.

(function () {
  const TEE = 'M40 20 L50 15 Q60 24 70 15 L80 20 L104 34 L95 53 L84 47 L84 104 L36 104 L36 47 L25 53 L16 34 Z';
  const LONG = 'M40 20 L50 15 Q60 24 70 15 L80 20 L98 30 L108 92 L96 95 L84 52 L84 104 L36 104 L36 52 L24 95 L12 92 L22 30 Z';
  const PANTS = 'M34 14 H86 L90 106 H67 L60 50 L53 106 H30 Z';
  const LONG_SEAMS = 'M40 21 L36 52 M80 21 L84 52 M14 86 L25 89 M95 89 L106 86 M37 98 H83';
  const circle = (cx, cy, r) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
  const dots = (pts, r, fill) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`).join('');

  const SHAPES = {
    polo: { body: TEE, detail: 'M50 15 Q60 27 70 15 M40 21 L36 47 M80 21 L84 47 M37 98 H83' },
    'polo-ml': { body: LONG, detail: 'M50 15 Q60 27 70 15 ' + LONG_SEAMS },
    camisa: {
      body: LONG,
      extra: '<path d="M50 15 L60 28 L54 34 L45 22 Z M70 15 L60 28 L66 34 L75 22 Z" fill="{c}" stroke="{s}" stroke-width="1.4" stroke-linejoin="round"/>',
      detail: 'M60 30 V104 ' + LONG_SEAMS,
      top: dots([[60, 44], [60, 58], [60, 72], [60, 86]], 1.9, '{d}'),
    },
    estampado: {
      body: TEE,
      extra: '<rect x="44" y="42" width="32" height="32" rx="8" fill="url(#ug-print)"/><path d="M60 48 l3.4 7 7.6 1.1-5.5 5.3 1.3 7.6L60 65.4l-6.8 3.6 1.3-7.6-5.5-5.3 7.6-1.1Z" fill="#fff"/>',
      detail: 'M50 15 Q60 27 70 15 M37 98 H83',
    },
    bordado: {
      body: circle(60, 60, 40),
      extra: '<circle cx="60" cy="60" r="33" fill="none" stroke="{l}" stroke-width="2.2" stroke-dasharray="4 3"/><path d="M60 40 l5.6 11.4 12.6 1.8-9.1 8.9 2.1 12.5L60 68.7l-11.2 5.9 2.1-12.5-9.1-8.9 12.6-1.8Z" fill="{l}"/>',
    },
    jean: { body: PANTS, detail: 'M34 22 H86 M60 22 V46 M38 26 Q45 36 53 30 M82 26 Q75 36 67 30 M31 100 H52 M68 100 H89 M42 14 V22 M78 14 V22' },
    pantalon: { body: PANTS, detail: 'M34 22 H86 M60 22 V44 M45 26 L42 104 M75 26 L78 104' },
    short: { body: 'M32 28 H88 L92 80 L66 82 L60 58 L54 82 L28 80 Z', detail: 'M32 36 H88 M60 36 V54 M30 74 L54 76 M66 76 L90 74' },
    falda: { body: 'M42 24 H78 L96 98 Q60 106 24 98 Z', detail: 'M42 32 H78 M52 32 L44 100 M60 32 V103 M68 32 L76 100' },
    vestido: { body: 'M47 12 H53 Q60 20 67 12 H73 L75 34 L71 44 L94 104 Q60 110 26 104 L49 44 L45 34 Z', detail: 'M53 12 Q60 22 67 12 M49 44 H71 M56 46 L50 104 M64 46 L70 104' },
    overol: {
      under: '<path d="M46 30 L41 9 M74 30 L79 9" stroke="{c}" stroke-width="5" stroke-linecap="round"/>',
      body: 'M42 28 H78 V46 H86 L90 106 H67 L60 62 L53 106 H30 L34 46 H42 Z',
      detail: 'M50 33 H70 V43 H50 Z M34 52 H86 M60 52 V60',
      top: dots([[45, 32], [75, 32]], 2.2, '{d}'),
    },
    casaca: {
      body: LONG,
      extra: '<path d="M60 19 V104" stroke="{d}" stroke-width="2.4" stroke-dasharray="2 2"/>',
      detail: 'M48 16 Q60 8 72 16 M42 76 L49 86 M78 76 L71 86 ' + LONG_SEAMS,
    },
    polar: {
      under: '<path d="M44 26 Q41 2 60 2 Q79 2 76 26 Q60 34 44 26 Z" fill="{c}" stroke="{s}" stroke-width="1.6"/>',
      body: LONG,
      detail: 'M50 16 Q60 26 70 16 M44 74 H76 L80 94 H40 Z M55 22 V38 M65 22 V38 ' + LONG_SEAMS,
    },
    chompa: { body: LONG, detail: 'M50 15 Q60 26 70 15 M47 17 Q60 31 73 17 M36 95 H84 M42 96 V103 M48 96 V103 M54 96 V103 M60 96 V103 M66 96 V103 M72 96 V103 M78 96 V103 M14 86 L25 89 M95 89 L106 86' },
    chaleco: {
      body: 'M42 16 L52 13 L60 28 L68 13 L78 16 Q81 30 86 35 L86 104 H34 V35 Q39 30 42 16 Z',
      extra: '<path d="M60 29 V104" stroke="{d}" stroke-width="2.4" stroke-dasharray="2 2"/>',
      detail: 'M34 52 H86 M34 68 H86 M34 84 H86',
    },
    buzo: {
      body: LONG,
      extra: '<path d="M25 32 L16 91 M95 32 L104 91" stroke="#fff" stroke-width="3.2" opacity=".9"/><path d="M60 19 V104" stroke="{d}" stroke-width="2.4" stroke-dasharray="2 2"/>',
      detail: 'M48 16 Q60 8 72 16 ' + LONG_SEAMS,
    },
    legging: { body: 'M40 14 H80 L78 108 H64 L60 44 L56 108 H42 Z', detail: 'M40 22 H80' },
    top: { body: 'M40 18 L50 12 Q60 26 70 12 L80 18 L88 86 Q60 94 32 86 Z', detail: 'M50 12 Q60 28 70 12 M34 78 Q60 86 86 78' },
    body: {
      body: 'M40 22 L50 18 Q60 26 70 18 L80 22 L94 34 L86 46 L80 42 L80 78 Q80 92 66 98 H54 Q40 92 40 78 L40 42 L34 46 L26 34 Z',
      detail: 'M50 18 Q60 28 70 18 M44 88 Q60 96 76 88',
      top: dots([[54, 93], [60, 94], [66, 93]], 1.6, '{d}'),
    },
    pijama: {
      body: LONG,
      detail: 'M50 15 Q60 26 70 15 M60 26 V104 ' + LONG_SEAMS,
      top: dots([[46, 46], [74, 54], [48, 72], [72, 82], [44, 92], [30, 70], [90, 66]], 2.4, '{l}') + dots([[60, 40], [60, 56], [60, 72], [60, 88]], 1.8, '{d}'),
    },
    terno: {
      body: LONG,
      extra: '<path d="M51 16 L60 46 L69 16 Q60 23 51 16 Z" fill="#fff"/><path d="M58 22 H62 L63.5 40 L60 45 L56.5 40 Z" fill="{s}"/>',
      detail: 'M50 15 L55 48 L60 56 M70 15 L65 48 L60 56 M70 72 H80 ' + LONG_SEAMS,
      top: dots([[60, 66], [60, 78]], 2, '{d}'),
    },
    mandil: {
      under: '<path d="M46 22 Q60 3 74 22" fill="none" stroke="{c}" stroke-width="4"/>',
      body: 'M44 20 H76 V40 Q92 44 92 60 L88 104 H32 L28 60 Q28 44 44 40 Z',
      detail: 'M48 62 H72 V80 H48 Z M28 54 L14 62 M92 54 L106 62',
    },
    interior: { body: 'M18 32 H102 L99 60 L72 90 L60 80 L48 90 L21 60 Z', detail: 'M18 42 H102' },
    brasier: {
      under: '<path d="M35 40 L41 14 M85 40 L79 14" stroke="{c}" stroke-width="3" stroke-linecap="round"/>',
      body: 'M22 50 Q34 30 52 44 Q60 52 68 44 Q86 30 98 50 L98 60 Q60 72 22 60 Z',
      detail: 'M60 50 V64 M24 56 Q60 68 96 56',
    },
    gorra: {
      body: 'M26 72 Q28 36 60 34 Q92 36 94 72 Z',
      extra: '<path d="M58 66 Q96 60 112 74 Q94 86 58 77 Z" fill="{c}" stroke="{s}" stroke-width="1.6" stroke-linejoin="round"/>',
      detail: 'M60 34 Q55 54 58 70 M60 34 Q74 50 80 68 M60 34 Q44 48 38 70',
      top: '<circle cx="60" cy="34" r="3.2" fill="{s}"/>',
    },
    sombrero: {
      body: 'M38 40 Q60 26 82 40 L88 70 H32 Z',
      extra: '<path d="M14 72 Q60 58 106 72 Q60 92 14 72 Z" fill="{c}" stroke="{s}" stroke-width="1.6"/>',
      detail: 'M35 62 H85',
    },
    mochila: {
      under: '<path d="M50 19 Q60 5 70 19" fill="none" stroke="{s}" stroke-width="3.5"/>',
      body: 'M34 30 Q34 18 46 18 H74 Q86 18 86 30 V100 Q86 106 80 106 H40 Q34 106 34 100 Z',
      detail: 'M42 64 H78 V96 H42 Z M40 40 H80 M48 70 H72',
    },
    cartera: {
      under: '<path d="M42 52 Q42 22 60 22 Q78 22 78 52" fill="none" stroke="{s}" stroke-width="4"/>',
      body: 'M24 50 H96 L90 100 Q90 104 86 104 H34 Q30 104 30 100 Z',
      detail: 'M24 50 L60 74 L96 50',
      top: '<circle cx="60" cy="74" r="3.4" fill="#E2B740"/>',
    },
    correa: {
      body: 'M10 54 H110 Q113 54 113 57 V65 Q113 68 110 68 H10 Z',
      extra: '<rect x="14" y="46" width="24" height="30" rx="4" fill="none" stroke="#B9BFC9" stroke-width="4.5"/><path d="M26 61 H46" stroke="#B9BFC9" stroke-width="3" stroke-linecap="round"/>',
      detail: 'M40 57.5 H108 M40 64.5 H108',
      top: dots([[70, 61], [80, 61], [90, 61]], 1.9, '{d}'),
    },
    billetera: {
      body: 'M22 34 H98 Q102 34 102 38 V86 Q102 90 98 90 H22 Q18 90 18 86 V38 Q18 34 22 34 Z',
      detail: 'M18 52 H102 M86 52 V90',
      top: '<path d="M24 40 H96" stroke="{d}" stroke-width="1.4" stroke-dasharray="3 3"/>',
    },
    tela: {
      body: 'M30 33 H90 V97 H30 Z',
      extra: '<ellipse cx="90" cy="65" rx="11" ry="32" fill="{c}" stroke="{s}" stroke-width="1.6"/>',
      detail: 'M42 36 V94 M54 35 V95 M66 35 V95 M78 36 V94',
      top: '<ellipse cx="30" cy="65" rx="11" ry="32" fill="{s}"/><ellipse cx="30" cy="65" rx="4" ry="10" fill="#EFE7D3"/>',
    },
    avios: {
      body: circle(46, 56, 22) + ' ' + circle(82, 82, 14),
      detail: circle(46, 56, 15) + ' ' + circle(82, 82, 9),
      top: dots([[41, 51], [51, 51], [41, 61], [51, 61]], 2.6, '{d}') + dots([[79, 79], [85, 79], [79, 85], [85, 85]], 1.8, '{d}'),
    },
    etiqueta: {
      body: 'M28 36 H80 L96 60 L80 84 H28 Q24 84 24 80 V40 Q24 36 28 36 Z',
      detail: 'M34 50 H66 M34 60 H72 M34 70 H58',
      top: '<circle cx="84" cy="60" r="4.2" fill="#fff" stroke="{s}" stroke-width="1.4"/>',
    },
    manta: {
      under: '<path d="M24 36 Q24 30 30 30 H90 Q96 30 96 36 V58 H24 Z" fill="{l}" stroke="{s}" stroke-width="1.6"/>',
      body: 'M16 62 Q16 56 22 56 H98 Q104 56 104 62 V94 Q104 100 98 100 H22 Q16 100 16 94 Z',
      detail: 'M16 74 H104 M24 100 V106 M34 100 V106 M44 100 V106 M54 100 V106 M64 100 V106 M74 100 V106 M84 100 V106 M94 100 V106',
    },
  };

  window.UBI_TIPO_LABEL = {
    polo: 'Polos', 'polo-ml': 'Manga larga', camisa: 'Camisas y blusas', estampado: 'Estampados', bordado: 'Bordados',
    jean: 'Jeans', pantalon: 'Pantalones', short: 'Shorts', falda: 'Faldas', vestido: 'Vestidos', overol: 'Enterizos',
    casaca: 'Casacas', polar: 'Polares', chompa: 'Chompas', chaleco: 'Chalecos', buzo: 'Buzos', legging: 'Leggings',
    top: 'Tops', body: 'Bebé', pijama: 'Pijamas', terno: 'Ternos', mandil: 'Mandiles', interior: 'Ropa interior',
    brasier: 'Brasieres', gorra: 'Gorras', sombrero: 'Sombreros', mochila: 'Mochilas', cartera: 'Carteras', correa: 'Correas',
    billetera: 'Billeteras', tela: 'Telas', avios: 'Avíos', etiqueta: 'Etiquetas', manta: 'Mantas',
  };

  function tones(hex) {
    const n = parseInt(hex.slice(1), 16);
    const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    const mix = (t, k) => '#' + rgb.map((v) => Math.round(v + (t - v) * k).toString(16).padStart(2, '0')).join('');
    const lum = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
    return { s: mix(0, 0.28), l: mix(255, 0.55), d: lum > 0.62 ? 'rgba(0,0,0,.26)' : 'rgba(255,255,255,.4)' };
  }

  window.garmentSVG = function (tipo, hex, cls) {
    const g = SHAPES[tipo] || SHAPES.polo;
    const t = tones(hex || '#B7BBC2');
    const paint = (str) => (str || '').replace(/\{c\}/g, hex).replace(/\{s\}/g, t.s).replace(/\{d\}/g, t.d).replace(/\{l\}/g, t.l);
    return `<svg class="garment ${cls || ''}" viewBox="0 0 120 120" aria-hidden="true">${paint(g.under)}`
      + `<path d="${g.body}" fill="${hex}" stroke="${t.s}" stroke-width="1.6" stroke-linejoin="round"/>${paint(g.extra)}`
      + `<path d="${g.body}" fill="url(#ug-shine)"/>`
      + (g.detail ? `<path d="${g.detail}" fill="none" stroke="${t.d}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>` : '')
      + `${paint(g.top)}</svg>`;
  };
})();
