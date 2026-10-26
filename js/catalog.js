// Catálogo fijo de UbiGamarra: tipos de producto, zona del emporio, hitos y reportes de la comunidad (demo).

window.UBI_CATS = [
  { id: 'jeans', nombre: 'Jeans y denim', corto: 'Jeans', emoji: '👖', color: '#3D7BF7',
    claves: ['jean', 'jeans', 'denim', 'pantalon', 'short', 'overol', 'falda'] },
  { id: 'polos', nombre: 'Polos y camisetas', corto: 'Polos', emoji: '👕', color: '#FF8A3D',
    claves: ['polo', 'polos', 'camiseta', 'pima', 'algodon', 'oversize', 'basico', 'bividi', 't-shirt'] },
  { id: 'ninos', nombre: 'Bebés y niños', corto: 'Niños', emoji: '🧸', color: '#FF6FB5',
    claves: ['bebe', 'nino', 'nina', 'ninos', 'infantil', 'ajuar', 'body', 'enterizo', 'kids', 'baby'] },
  { id: 'deportiva', nombre: 'Ropa deportiva', corto: 'Deportiva', emoji: '⚽', color: '#22B573',
    claves: ['deporte', 'deportivo', 'deportiva', 'buzo', 'futbol', 'legging', 'fitness', 'sport', 'licra', 'suplex'] },
  { id: 'dama', nombre: 'Moda mujer', corto: 'Mujer', emoji: '👗', color: '#A35CFF',
    claves: ['vestido', 'blusa', 'dama', 'mujer', 'fiesta', 'gala', 'falda', 'top', 'jogger'] },
  { id: 'caballero', nombre: 'Camisas y ternos', corto: 'Hombre', emoji: '👔', color: '#47607E',
    claves: ['camisa', 'terno', 'saco', 'caballero', 'hombre', 'vestir', 'oxford'] },
  { id: 'uniformes', nombre: 'Uniformes', corto: 'Uniformes', emoji: '🎒', color: '#00A99D',
    claves: ['uniforme', 'escolar', 'colegio', 'corporativo', 'mandil', 'empresa', 'trabajo'] },
  { id: 'telas', nombre: 'Telas e insumos', corto: 'Telas', emoji: '🧵', color: '#E0A030',
    claves: ['tela', 'telas', 'jersey', 'franela', 'rib', 'popelina', 'drill', 'avios', 'cierre', 'boton', 'hilo', 'etiqueta', 'insumo', 'kilo', 'metro'] },
  { id: 'interior', nombre: 'Pijamas e íntima', corto: 'Pijamas', emoji: '🌙', color: '#F0567A',
    claves: ['pijama', 'lenceria', 'interior', 'trusa', 'boxer', 'brasier', 'intima'] },
  { id: 'casacas', nombre: 'Casacas y chompas', corto: 'Casacas', emoji: '🧥', color: '#8B6B5C',
    claves: ['casaca', 'chompa', 'polar', 'cortavientos', 'chaleco', 'abrigo', 'termica', 'frio'] },
  { id: 'accesorios', nombre: 'Accesorios', corto: 'Accesorios', emoji: '🧢', color: '#D9A400',
    claves: ['gorra', 'correa', 'cartera', 'mochila', 'bolso', 'billetera', 'sombrero', 'accesorio', 'visera'] },
  { id: 'servicios', nombre: 'Estampado y bordado', corto: 'Estampado', emoji: '🎨', color: '#6C5CE7',
    claves: ['estampado', 'bordado', 'sublimado', 'dtf', 'serigrafia', 'personalizado', 'logo', 'ponchado', 'parche'] },
];

window.UBI_POPULAR = ['jean mom', 'polo pima', 'buzo escolar', 'vestido de fiesta', 'pijama', 'telas jersey', 'bordado de logo', 'casaca'];

// "Conglomerado Comercial de Gamarra" (OpenStreetMap, relación 3921717)
window.UBI_ZONE = [[
  [-77.01784, -12.061705], [-77.015588, -12.061404], [-77.013795, -12.061152], [-77.013174, -12.061074],
  [-77.012529, -12.065723], [-77.012296, -12.067492], [-77.012264, -12.067734], [-77.012252, -12.067829],
  [-77.01193, -12.070273], [-77.011725, -12.071832], [-77.014055, -12.072558], [-77.014485, -12.069427],
  [-77.016814, -12.069753], [-77.017442, -12.064703], [-77.01784, -12.061705],
]];

window.UBI_STATION = { nombre: 'Estación Gamarra', linea: 'Línea 1 del Metro', lat: -12.06528, lng: -77.012384 };

// Punto de partida simulado: salida de la Estación Gamarra hacia Jr. Hipólito Unánue
window.UBI_SIM_START = { lat: -12.065118, lng: -77.012685 };

window.UBI_REPORT_TYPES = {
  oferta:  { nombre: 'Oferta',          emoji: '🔥', color: '#FF6B2C' },
  gente:   { nombre: 'Mucha gente',     emoji: '👥', color: '#7C5CFF' },
  obra:    { nombre: 'Obra o peligro',  emoji: '🚧', color: '#F5A623' },
  policia: { nombre: 'Serenazgo',       emoji: '👮', color: '#2F80ED' },
  cerrado: { nombre: 'Tienda cerrada',  emoji: '🚫', color: '#EB5757' },
  parking: { nombre: 'Estacionamiento', emoji: '🅿️', color: '#27AE60' },
};

// minutos: antigüedad del reporte al abrir la app
window.UBI_REPORTS = [
  { id: 'r1', tipo: 'oferta', lat: -12.06528, lng: -77.01372, minutos: 18, votos: 7, tienda: 'basic-tee',
    texto: '3 polos básicos x S/ 25 en Basic Tee Lima, 4.º piso.' },
  { id: 'r2', tipo: 'gente', lat: -12.06648, lng: -77.01318, minutos: 9, votos: 12,
    texto: 'Mucha gente en la esquina de Jr. Gamarra con Sebastián Barranca. Avanza lento.' },
  { id: 'r3', tipo: 'obra', lat: -12.06822, lng: -77.01405, minutos: 55, votos: 3,
    texto: 'Vereda en reparación en Jr. Antonio Bazo. Cruza por el otro lado.' },
  { id: 'r4', tipo: 'policia', lat: -12.06386, lng: -77.01395, minutos: 25, votos: 5,
    texto: 'Serenazgo patrullando Jr. Humboldt.' },
  { id: 'r5', tipo: 'oferta', lat: -12.06398, lng: -77.01452, minutos: 40, votos: 9, tienda: 'pima-peru',
    texto: 'Polos pima a S/ 22 por docena hasta las 6 p. m.' },
  { id: 'r6', tipo: 'cerrado', lat: -12.06962, lng: -77.01318, minutos: 70, votos: 2,
    texto: 'Puerta lateral de la galería cerrada. Entra por Jr. Italia.' },
  { id: 'r7', tipo: 'parking', lat: -12.06516, lng: -77.01712, minutos: 30, votos: 4,
    texto: 'Playa de estacionamiento con espacios libres en Prolongación Parinacochas.' },
];
