// Galería de varios pisos (simulación): plano por piso con 10 stands en cada uno.
// El contorno es el de un edificio real de OpenStreetMap (vía 443498547, Jr. San Cristóbal 1580);
// el nombre de la galería, los stands y sus tiendas son ficticios.

window.UBI_GALERIA = {
  id: 'galeria-modelo',
  nombre: 'Galería Modelo',
  direccion: { calle: 'Jr. San Cristóbal', numero: '1580', distrito: 'La Victoria', ciudad: 'Lima' },
  // id del mismo edificio en las teselas de OpenFreeMap (id de la vía de OSM × 10 + 2): se oculta para dibujar el nuestro
  teselaId: 4434985472,
  // esquinas del contorno: noroeste, suroeste, sureste y noreste. El frente da a Jr. San Cristóbal (norte)
  esquinas: [[-77.0136207, -12.0672727], [-77.013566, -12.0676897], [-77.0133769, -12.067666], [-77.0134316, -12.0672489]],
  alturaPiso: 3.6, // metros
  ingreso: 'Jr. San Cristóbal 1580',
  salida: 'Psje. Gamarra',
  horario: [[600, 960], [540, 1140], [540, 1140], [540, 1140], [540, 1140], [540, 1140], [540, 1140]],
  // Por piso: tema y 10 stands. Stands 1 a 5 a la derecha del pasillo (entrando desde Jr. San Cristóbal),
  // 6 a 10 a la izquierda, de fondo a frente. null = stand disponible para alquiler.
  pisos: [
    { tema: 'Jeans y polos', stands: [
      ['Denim Rocco', 'jeans', 'Jeans clásicos y slim para caballero.'],
      ['Polos Áncash', 'polos', 'Polos de algodón peinado por docena.'],
      ['Jeans Kalú', 'jeans', 'Jeans mom y wide leg para dama.'],
      ['Básicos Lima', 'polos', 'Polos básicos en 20 colores.'],
      null,
      ['Pima Norte', 'polos', 'Polos pima y camisas polo bordadas.'],
      ['Taller Índigo', 'jeans', 'Jeans al por mayor: corte, lavado y acabado.'],
      ['Shorts & Co.', 'jeans', 'Shorts y bermudas de drill y denim.'],
      ['Oversize Club', 'polos', 'Polos oversize con estampados urbanos.'],
      ['Jeans Brisa', 'jeans', 'Jeans para niña y juvenil.'],
    ] },
    { tema: 'Moda mujer', stands: [
      ['Bella Moda', 'dama', 'Vestidos casuales y de fiesta.'],
      ['Blusas Mía', 'dama', 'Blusas de gasa y crepé.'],
      ['Kiara Fashion', 'dama', 'Conjuntos y tops de temporada.'],
      ['Lencería Luna', 'interior', 'Pijamas y lencería.'],
      ['Atelier Rosa', 'dama', 'Vestidos de gala a medida.'],
      null,
      ['Faldas & Más', 'dama', 'Faldas plisadas, midi y largas.'],
      ['Casual Nina', 'dama', 'Joggers, tops y polos para dama.'],
      ['Moda Valery', 'dama', 'Ropa de dama en tallas grandes.'],
      ['Chompas Andina', 'casacas', 'Chompas y cárdigans tejidos.'],
    ] },
    { tema: 'Bebés y niños', stands: [
      ['Baby Algodón', 'ninos', 'Bodies y ajuares de algodón pima.'],
      ['Kids Pop', 'ninos', 'Polos y buzos infantiles estampados.'],
      ['Mundo Peque', 'ninos', 'Ropa de bebé de 0 a 24 meses.'],
      ['Pijamitas', 'interior', 'Pijamas para niños y niñas.'],
      ['Mini Jeans', 'ninos', 'Jeans y overoles para niños.'],
      ['Princesitas', 'ninos', 'Vestidos de niña para fiestas.'],
      null,
      ['Escolar Feliz', 'uniformes', 'Uniformes y buzos escolares.'],
      ['Tierno', 'ninos', 'Enterizos y mantas para bebé.'],
      ['Junior Style', 'ninos', 'Ropa juvenil de 8 a 16 años.'],
    ] },
    { tema: 'Deportiva y uniformes', stands: [
      ['Sport Andes', 'deportiva', 'Buzos y casacas deportivas.'],
      ['Fútbol Total', 'deportiva', 'Camisetas de fútbol personalizadas.'],
      ['Licras Fit', 'deportiva', 'Leggings y tops de suplex.'],
      ['Uniformes Pro', 'uniformes', 'Uniformes corporativos y mandiles.'],
      ['Casacas Polar', 'casacas', 'Casacas polares y cortavientos.'],
      ['Team Lima', 'deportiva', 'Indumentaria para equipos y promociones.'],
      ['Mandiles Salud', 'uniformes', 'Uniformes médicos y chaquetas.'],
      null,
      ['Run Perú', 'deportiva', 'Ropa para correr y para el gimnasio.'],
      ['Gorras Top', 'accesorios', 'Gorras, viseras y mochilas.'],
    ] },
    { tema: 'Telas, insumos y estampado', stands: [
      ['Telas Jersey', 'telas', 'Jersey, franela y rib por kilo.'],
      ['Estampados DTF', 'servicios', 'Estampado DTF y sublimado desde 1 unidad.'],
      ['Hilos & Avíos', 'telas', 'Hilos, cierres, botones y etiquetas.'],
      ['Bordados Inca', 'servicios', 'Bordado de logos y parches.'],
      ['Telas Popelina', 'telas', 'Popelina, drill y gabardina por metro.'],
      ['Serigrafía Arte', 'servicios', 'Serigrafía para polos y bolsas.'],
      ['Saldos Textiles', 'telas', 'Retazos y saldos de tela por kilo.'],
      ['Etiquetas Lima', 'telas', 'Etiquetas tejidas y estampadas.'],
      ['Sublimados Max', 'servicios', 'Sublimado en polos, tazas y gorras.'],
      ['Rib & Cuellos', 'telas', 'Cuellos, puños y rib tejido.'],
    ] },
  ],
};
