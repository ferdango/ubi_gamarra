// Datos de demostración de UbiGamarra.
// Las tiendas y reseñas son ficticias; las calles y la numeración se basan en OpenStreetMap (© colaboradores de OSM).
// horario: un par [abre, cierra] en minutos desde la medianoche por día, de domingo (0) a sábado (6); null = cerrado.

window.UBI_STORES = [
 {
  "id": "denim-inka",
  "nombre": "Denim Inka",
  "categorias": [
   "jeans"
  ],
  "descripcion": "Jeans para dama y caballero confeccionados en taller propio. Cortes mom, skinny, wide leg y cargo.",
  "direccion": {
   "calle": "Jr. Antonio Bazo",
   "numero": "1011",
   "interior": "Galería Hilos de Oro, 2.º piso, stand 214",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.068496,
  "lng": -77.013783,
  "productos": [
   {
    "nombre": "Jean mom dama",
    "desde": 38
   },
   {
    "nombre": "Jean skinny stretch",
    "desde": 35
   },
   {
    "nombre": "Jean cargo caballero",
    "desde": 45
   },
   {
    "nombre": "Short denim",
    "desde": 25
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2012,
  "verificada": true,
  "resenas": [
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-10-21",
    "texto": "Los lavados son igualitos a los de las fotos. Volvería a comprar sin dudarlo.",
    "mayorista": "Tienda en Puno",
    "utiles": 9
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-10-19",
    "texto": "Tienen jeans en tallas grandes, que es difícil encontrar. Tienen todas las tallas y varios colores.",
    "mayorista": "Tienda en Ica",
    "utiles": 13
   },
   {
    "autor": "Kevin R.",
    "estrellas": 5,
    "fecha": "2026-10-06",
    "texto": "Buena tela stretch, las costuras bien reforzadas. Buenos precios por docena, regresaré para surtir mi tienda.",
    "utiles": 14
   },
   {
    "autor": "Gaby N.",
    "estrellas": 4,
    "fecha": "2026-06-06",
    "texto": "Atención rápida incluso en temporada alta. Precios justos; la atención podría ser más rápida.",
    "utiles": 6
   }
  ]
 },
 {
  "id": "rocky-jeans",
  "nombre": "Rocky Jeans",
  "categorias": [
   "jeans",
   "caballero"
  ],
  "descripcion": "Especialistas en jeans clásicos y slim fit para caballero, con lavados a la piedra y tallas grandes.",
  "direccion": {
   "calle": "Jr. Sebastián Barranca",
   "numero": "1575",
   "interior": "Galería Arcoíris, 1.er piso, stand 108",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.066452,
  "lng": -77.01377,
  "productos": [
   {
    "nombre": "Jean slim fit",
    "desde": 42
   },
   {
    "nombre": "Jean clásico tallas 38-44",
    "desde": 48
   },
   {
    "nombre": "Jean rasgado",
    "desde": 45
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "6 unidades"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2008,
  "verificada": false,
  "resenas": [
   {
    "autor": "Miguel A.",
    "estrellas": 4,
    "fecha": "2026-10-05",
    "texto": "Me hicieron rebaja por llevar varias prendas. Me costó encontrar el stand, pidan referencia en la entrada.",
    "utiles": 7
   },
   {
    "autor": "Ana S.",
    "estrellas": 4,
    "fecha": "2026-09-22",
    "texto": "Camisas de buena tela, no se arrugan mucho. Atención rápida incluso en temporada alta.",
    "utiles": 4
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-09-18",
    "texto": "Me asesoraron bien para elegir modelos que se venden. Precios justos; la atención podría ser más rápida.",
    "utiles": 4
   },
   {
    "autor": "Diego F.",
    "estrellas": 5,
    "fecha": "2026-08-19",
    "texto": "Trabajo a medida muy prolijo. Aceptan Yape, eso facilita bastante.",
    "utiles": 0
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 4,
    "fecha": "2026-08-04",
    "texto": "Excelente atención, la señorita fue muy amable. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 13
   },
   {
    "autor": "Sofía B.",
    "estrellas": 4,
    "fecha": "2026-07-07",
    "texto": "Tienen todas las tallas y varios colores. Bien en general, aunque tuve que esperar un rato.",
    "utiles": 4
   },
   {
    "autor": "Ricardo Ñ.",
    "estrellas": 3,
    "fecha": "2026-06-16",
    "texto": "Por menor el precio sube un poco, conviene comprar por docena. Poco surtido la vez que fui.",
    "utiles": 9
   }
  ]
 },
 {
  "id": "blue-andes",
  "nombre": "Blue Andes Denim",
  "categorias": [
   "jeans"
  ],
  "descripcion": "Fabricantes de denim para tiendas de provincia. Envíos por agencia a todo el Perú.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "921",
   "interior": "C.C. Textil Victoria, 3.er piso, stand 312",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.067606,
  "lng": -77.013018,
  "productos": [
   {
    "nombre": "Jean wide leg",
    "desde": 40
   },
   {
    "nombre": "Casaca denim",
    "desde": 65
   },
   {
    "nombre": "Falda denim",
    "desde": 30
   },
   {
    "nombre": "Jean niño",
    "desde": 28
   }
  ],
  "venta": {
   "mayor": true,
   "menor": false,
   "minimoMayor": "1 docena"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Transferencia"
  ],
  "desde": 2015,
  "verificada": true,
  "resenas": [
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-10-19",
    "texto": "El jean mom calza perfecto y no se destiñe. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Puno",
    "utiles": 4
   },
   {
    "autor": "Kevin R.",
    "estrellas": 5,
    "fecha": "2026-10-02",
    "texto": "Los lavados son igualitos a los de las fotos. Calidad de exportación a precio de Gamarra.",
    "utiles": 6
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-09-22",
    "texto": "Buena tela stretch, las costuras bien reforzadas. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 6
   },
   {
    "autor": "Gaby N.",
    "estrellas": 4,
    "fecha": "2026-08-19",
    "texto": "Tienen jeans en tallas grandes, que es difícil encontrar. Me dieron boleta sin problema.",
    "utiles": 12
   }
  ]
 },
 {
  "id": "jeans-wari",
  "nombre": "Jeans Wari",
  "categorias": [
   "jeans",
   "dama"
  ],
  "descripcion": "Jeans de moda para dama con bordados y aplicaciones. Nuevos modelos cada semana.",
  "direccion": {
   "calle": "Jr. San Cristóbal",
   "numero": "1528",
   "interior": "Galería Santa Rosita, 1.er piso, stand 15",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.06739,
  "lng": -77.01443,
  "productos": [
   {
    "nombre": "Jean bordado",
    "desde": 45
   },
   {
    "nombre": "Jean push up",
    "desde": 40
   },
   {
    "nombre": "Overol denim",
    "desde": 60
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2018,
  "verificada": false,
  "resenas": [
   {
    "autor": "Luis M.",
    "estrellas": 5,
    "fecha": "2026-10-12",
    "texto": "Me hicieron el basta en el momento. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 14
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-09-22",
    "texto": "El jean mom calza perfecto y no se destiñe. Todo llegó bien empaquetado.",
    "mayorista": "Tienda en Ica",
    "utiles": 11
   },
   {
    "autor": "Walter Y.",
    "estrellas": 4,
    "fecha": "2026-09-06",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Cusco",
    "utiles": 2
   },
   {
    "autor": "Miguel A.",
    "estrellas": 3,
    "fecha": "2026-08-18",
    "texto": "Cumple, pero no hay mucho espacio para probarse. Vestidos muy bonitos y a la moda, encontré mi talla.",
    "utiles": 12
   },
   {
    "autor": "Diego F.",
    "estrellas": 5,
    "fecha": "2026-05-14",
    "texto": "Los lavados son igualitos a los de las fotos. Calidad de exportación a precio de Gamarra.",
    "utiles": 10
   }
  ]
 },
 {
  "id": "pima-peru",
  "nombre": "Pima Perú Polos",
  "categorias": [
   "polos"
  ],
  "descripcion": "Polos de algodón pima 100 % peruano, cuello redondo y en V. Más de 20 colores.",
  "direccion": {
   "calle": "Jr. Humboldt",
   "numero": "1563",
   "interior": "1.er piso, stand 4",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.064088,
  "lng": -77.014327,
  "productos": [
   {
    "nombre": "Polo pima cuello redondo",
    "desde": 25
   },
   {
    "nombre": "Polo pima cuello V",
    "desde": 27
   },
   {
    "nombre": "Polo manga larga",
    "desde": 32
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2010,
  "verificada": true,
  "resenas": [
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-10-20",
    "texto": "Colores firmes, ya los lavé varias veces y siguen igual. Todo llegó bien empaquetado.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 10
   },
   {
    "autor": "Pedro H.",
    "estrellas": 3,
    "fecha": "2026-10-06",
    "texto": "Por menor el precio sube un poco, conviene comprar por docena. Demoraron con mi pedido más de lo acordado.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 7
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-10-04",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Buenos productos, pero los sábados hay mucha gente.",
    "utiles": 10
   },
   {
    "autor": "Fiorella V.",
    "estrellas": 4,
    "fecha": "2026-09-27",
    "texto": "Aceptan Yape, eso facilita bastante. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Ica",
    "utiles": 7
   },
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-08-31",
    "texto": "Algodón de verdad, suavecito y no se encoge. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 6
   },
   {
    "autor": "Jorge C.",
    "estrellas": 4,
    "fecha": "2026-08-29",
    "texto": "Me asesoraron bien para elegir modelos que se venden. Precios justos; la atención podría ser más rápida.",
    "utiles": 1
   },
   {
    "autor": "Lucía P.",
    "estrellas": 5,
    "fecha": "2026-05-20",
    "texto": "Me separaron el pedido y lo recogí sin problemas. Excelente atención, la señorita fue muy amable.",
    "utiles": 7
   }
  ]
 },
 {
  "id": "algodon-norteno",
  "nombre": "Algodón Norteño",
  "categorias": [
   "polos"
  ],
  "descripcion": "Polos básicos y oversize en jersey peinado 30/1. Ideal para emprendedores y estampadores.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "677",
   "interior": "Galería El Telar, 2.º piso, stand 221",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.06491,
  "lng": -77.013378,
  "productos": [
   {
    "nombre": "Polo básico jersey",
    "desde": 12
   },
   {
    "nombre": "Polo oversize",
    "desde": 22
   },
   {
    "nombre": "Polo cuello chino",
    "desde": 18
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "1 docena"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2014,
  "verificada": true,
  "resenas": [
   {
    "autor": "Fiorella V.",
    "estrellas": 5,
    "fecha": "2026-10-07",
    "texto": "Buen gramaje, no se transparentan. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 5
   },
   {
    "autor": "Ana S.",
    "estrellas": 5,
    "fecha": "2026-10-07",
    "texto": "Colores firmes, ya los lavé varias veces y siguen igual. Atención rápida incluso en temporada alta.",
    "utiles": 10
   },
   {
    "autor": "Carmen T.",
    "estrellas": 5,
    "fecha": "2026-10-07",
    "texto": "Algodón de verdad, suavecito y no se encoge. Buenos precios por docena, regresaré para surtir mi tienda.",
    "mayorista": "Tienda en SJL",
    "utiles": 1
   },
   {
    "autor": "Kevin R.",
    "estrellas": 4,
    "fecha": "2026-09-24",
    "texto": "Aceptan Yape, eso facilita bastante. La calidad está bien, aunque no siempre tienen tallas grandes.",
    "utiles": 9
   }
  ]
 },
 {
  "id": "polos-full-color",
  "nombre": "Polos Full Color",
  "categorias": [
   "polos",
   "servicios"
  ],
  "descripcion": "Polos personalizados con sublimado y DTF. Pedidos para promociones, colegios y eventos.",
  "direccion": {
   "calle": "Jr. Italia",
   "numero": "1581",
   "interior": "1.er piso, stand 7",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069206,
  "lng": -77.013103,
  "productos": [
   {
    "nombre": "Polo sublimado",
    "desde": 20
   },
   {
    "nombre": "Polo DTF full color",
    "desde": 24
   },
   {
    "nombre": "Polo promocional",
    "desde": 9
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "12 unidades"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2019,
  "verificada": false,
  "resenas": [
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-10-16",
    "texto": "Los polos básicos salen a muy buen precio por docena. Volvería a comprar sin dudarlo.",
    "mayorista": "Tienda en Chiclayo",
    "utiles": 2
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-09-29",
    "texto": "Algodón de verdad, suavecito y no se encoge. Me asesoraron bien para elegir modelos que se venden.",
    "utiles": 9
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 5,
    "fecha": "2026-09-25",
    "texto": "Colores muy vivos en el sublimado. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 7
   },
   {
    "autor": "María L.",
    "estrellas": 4,
    "fecha": "2026-09-24",
    "texto": "Me ayudaron a mejorar el diseño sin costo. Tienen todas las tallas y varios colores.",
    "utiles": 14
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-08-15",
    "texto": "Colores firmes, ya los lavé varias veces y siguen igual. Buenos precios por docena, regresaré para surtir mi tienda.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 7
   }
  ]
 },
 {
  "id": "basic-tee",
  "nombre": "Basic Tee Lima",
  "categorias": [
   "polos"
  ],
  "descripcion": "Básicos de algodón para toda la familia: polos, bividís y tops a precio de fábrica.",
  "direccion": {
   "calle": "Jr. Hipólito Unánue",
   "numero": "1622",
   "interior": "Galería Punto Moda, 4.º piso, stand 410",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.065345,
  "lng": -77.013607,
  "productos": [
   {
    "nombre": "Polo básico niño",
    "desde": 10
   },
   {
    "nombre": "Bividí algodón",
    "desde": 9
   },
   {
    "nombre": "Top básico dama",
    "desde": 14
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2016,
  "verificada": false,
  "resenas": [
   {
    "autor": "Miguel A.",
    "estrellas": 4,
    "fecha": "2026-10-18",
    "texto": "Me separaron el pedido y lo recogí sin problemas. Buenos productos, pero los sábados hay mucha gente.",
    "utiles": 0
   },
   {
    "autor": "Jorge C.",
    "estrellas": 4,
    "fecha": "2026-10-12",
    "texto": "Fácil de ubicar, está cerca de la escalera. Bien en general, aunque tuve que esperar un rato.",
    "utiles": 6
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-10-10",
    "texto": "Buen gramaje, no se transparentan. Volvería a comprar sin dudarlo.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 12
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 4,
    "fecha": "2026-10-02",
    "texto": "Aceptan Yape, eso facilita bastante. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Cusco",
    "utiles": 7
   },
   {
    "autor": "Pedro H.",
    "estrellas": 2,
    "fecha": "2026-09-23",
    "texto": "Demoraron con mi pedido más de lo acordado. Me costó encontrar el stand, pidan referencia en la entrada.",
    "mayorista": "Tienda en Ica",
    "utiles": 1
   },
   {
    "autor": "Gaby N.",
    "estrellas": 5,
    "fecha": "2026-08-16",
    "texto": "Algodón de verdad, suavecito y no se encoge. Me dieron boleta sin problema.",
    "utiles": 4
   },
   {
    "autor": "Carmen T.",
    "estrellas": 4,
    "fecha": "2026-05-13",
    "texto": "Tienen todas las tallas y varios colores. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 11
   }
  ]
 },
 {
  "id": "pequenos-pasitos",
  "nombre": "Pequeños Pasitos",
  "categorias": [
   "ninos"
  ],
  "descripcion": "Ropita para bebé de 0 a 24 meses en algodón pima: bodies, ajuares y enterizos.",
  "direccion": {
   "calle": "Jr. Antonio Bazo",
   "numero": "935",
   "interior": "Galería Santa Rosita, 2.º piso, stand 203",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.067807,
  "lng": -77.013878,
  "productos": [
   {
    "nombre": "Body pima bebé",
    "desde": 18
   },
   {
    "nombre": "Ajuar 5 piezas",
    "desde": 75
   },
   {
    "nombre": "Enterizo polar",
    "desde": 35
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2011,
  "verificada": true,
  "resenas": [
   {
    "autor": "Sofía B.",
    "estrellas": 5,
    "fecha": "2026-10-16",
    "texto": "Las tallas vienen exactas según la edad. Atención rápida incluso en temporada alta.",
    "utiles": 2
   },
   {
    "autor": "Pedro H.",
    "estrellas": 5,
    "fecha": "2026-10-05",
    "texto": "Mi bebé no tuvo ninguna alergia, buena tela. Me separaron el pedido y lo recogí sin problemas.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 13
   },
   {
    "autor": "Lucía P.",
    "estrellas": 3,
    "fecha": "2026-10-01",
    "texto": "Precios justos; la atención podría ser más rápida. Los conjuntos para niños tienen diseños bonitos.",
    "utiles": 2
   },
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-09-29",
    "texto": "Me asesoraron bien para elegir modelos que se venden. Me dieron boleta sin problema.",
    "utiles": 10
   },
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-08-30",
    "texto": "Ropita muy suave, ideal para regalo. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 1
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-05-16",
    "texto": "Me hicieron rebaja por llevar varias prendas. Fácil de ubicar, está cerca de la escalera.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 8
   },
   {
    "autor": "Milagros G.",
    "estrellas": 5,
    "fecha": "2026-05-09",
    "texto": "Despacho rápido a provincia por agencia. Todo llegó bien empaquetado.",
    "utiles": 14
   }
  ]
 },
 {
  "id": "kids-fashion",
  "nombre": "Kids Fashion Gamarra",
  "categorias": [
   "ninos"
  ],
  "descripcion": "Moda infantil de 2 a 14 años: conjuntos, vestidos y casacas con diseños de temporada.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "1031",
   "interior": "1.er piso, stand 19",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.06882,
  "lng": -77.012853,
  "productos": [
   {
    "nombre": "Conjunto niño",
    "desde": 39
   },
   {
    "nombre": "Vestido niña",
    "desde": 45
   },
   {
    "nombre": "Casaca niño",
    "desde": 55
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2013,
  "verificada": false,
  "resenas": [
   {
    "autor": "Patricia Z.",
    "estrellas": 4,
    "fecha": "2026-10-11",
    "texto": "Atención rápida incluso en temporada alta. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 11
   },
   {
    "autor": "Diego F.",
    "estrellas": 4,
    "fecha": "2026-09-20",
    "texto": "Despacho rápido a provincia por agencia. Cumple, pero no hay mucho espacio para probarse.",
    "utiles": 10
   },
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-08-25",
    "texto": "Ropita muy suave, ideal para regalo. Me separaron el pedido y lo recogí sin problemas.",
    "utiles": 14
   },
   {
    "autor": "Milagros G.",
    "estrellas": 5,
    "fecha": "2026-04-13",
    "texto": "Mi bebé no tuvo ninguna alergia, buena tela. Me asesoraron bien para elegir modelos que se venden.",
    "utiles": 11
   }
  ]
 },
 {
  "id": "mundo-bebe",
  "nombre": "Mundo Bebé Andino",
  "categorias": [
   "ninos",
   "interior"
  ],
  "descripcion": "Pijamas, mantas y ropa de bebé con diseños andinos. Regalos para baby shower.",
  "direccion": {
   "calle": "Av. Isabel La Católica",
   "numero": "1548",
   "interior": "3.er piso, stand 305",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.068437,
  "lng": -77.01404,
  "productos": [
   {
    "nombre": "Pijama bebé",
    "desde": 25
   },
   {
    "nombre": "Manta de polar",
    "desde": 30
   },
   {
    "nombre": "Set regalo baby shower",
    "desde": 85
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2017,
  "verificada": true,
  "resenas": [
   {
    "autor": "Patricia Z.",
    "estrellas": 3,
    "fecha": "2026-10-11",
    "texto": "La calidad está bien, aunque no siempre tienen tallas grandes. El precio no fue el mismo que me dieron por mensaje.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 12
   },
   {
    "autor": "Elmer V.",
    "estrellas": 5,
    "fecha": "2026-10-04",
    "texto": "Pijamas muy cómodas y de algodón. Todo llegó bien empaquetado.",
    "utiles": 11
   },
   {
    "autor": "Carmen T.",
    "estrellas": 5,
    "fecha": "2026-09-20",
    "texto": "Buena variedad de tallas en ropa interior. Fácil de ubicar, está cerca de la escalera.",
    "mayorista": "Tienda en SJL",
    "utiles": 13
   },
   {
    "autor": "Miguel A.",
    "estrellas": 4,
    "fecha": "2026-09-14",
    "texto": "Me dieron boleta sin problema. Me costó encontrar el stand, pidan referencia en la entrada.",
    "utiles": 11
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-08-23",
    "texto": "Mi bebé no tuvo ninguna alergia, buena tela. Me asesoraron bien para elegir modelos que se venden.",
    "utiles": 12
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-08-07",
    "texto": "Ropita muy suave, ideal para regalo. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 10
   },
   {
    "autor": "Milagros G.",
    "estrellas": 2,
    "fecha": "2026-04-01",
    "texto": "Poco surtido la vez que fui. Por menor el precio sube un poco, conviene comprar por docena.",
    "utiles": 3
   }
  ]
 },
 {
  "id": "futbol-pro",
  "nombre": "Fútbol Pro Camisetas",
  "categorias": [
   "deportiva"
  ],
  "descripcion": "Camisetas de fútbol sublimadas para equipos y campeonatos. Numeración y nombres incluidos.",
  "direccion": {
   "calle": "Jr. Italia",
   "numero": "1610",
   "interior": "2.º piso, stand 226",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.06938,
  "lng": -77.012729,
  "productos": [
   {
    "nombre": "Camiseta sublimada",
    "desde": 28
   },
   {
    "nombre": "Short deportivo",
    "desde": 15
   },
   {
    "nombre": "Uniforme completo",
    "desde": 45
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "10 juegos"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2009,
  "verificada": true,
  "resenas": [
   {
    "autor": "Carmen T.",
    "estrellas": 3,
    "fecha": "2026-10-08",
    "texto": "Cumple, pero no hay mucho espacio para probarse. La licra no se transparenta al hacer ejercicio.",
    "mayorista": "Tienda en Piura",
    "utiles": 5
   },
   {
    "autor": "Lucía P.",
    "estrellas": 4,
    "fecha": "2026-09-22",
    "texto": "Los buzos son abrigaditos y de buena tela. Todo llegó bien empaquetado.",
    "utiles": 3
   },
   {
    "autor": "María L.",
    "estrellas": 4,
    "fecha": "2026-09-18",
    "texto": "Entregaron los uniformes del campeonato a tiempo. Aceptan Yape, eso facilita bastante.",
    "utiles": 13
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 4,
    "fecha": "2026-05-20",
    "texto": "Volvería a comprar sin dudarlo. Buen producto; ojalá tuvieran más colores.",
    "mayorista": "Tienda en Piura",
    "utiles": 10
   }
  ]
 },
 {
  "id": "activa-sport",
  "nombre": "Activa Sport Wear",
  "categorias": [
   "deportiva",
   "dama"
  ],
  "descripcion": "Ropa fitness para dama: leggings, tops y conjuntos deportivos en suplex y licra.",
  "direccion": {
   "calle": "Jr. Humboldt",
   "numero": "1612",
   "interior": "2.º piso, stand 230",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.063777,
  "lng": -77.013627,
  "productos": [
   {
    "nombre": "Legging suplex",
    "desde": 30
   },
   {
    "nombre": "Top deportivo",
    "desde": 22
   },
   {
    "nombre": "Conjunto fitness",
    "desde": 55
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2020,
  "verificada": true,
  "resenas": [
   {
    "autor": "María L.",
    "estrellas": 3,
    "fecha": "2026-10-20",
    "texto": "Precios justos; la atención podría ser más rápida. Vestidos muy bonitos y a la moda, encontré mi talla.",
    "utiles": 1
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 4,
    "fecha": "2026-10-19",
    "texto": "Excelente atención, la señorita fue muy amable. Por menor el precio sube un poco, conviene comprar por docena.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 4
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-10-09",
    "texto": "La licra no se transparenta al hacer ejercicio. Me asesoraron bien para elegir modelos que se venden.",
    "mayorista": "Tienda en Piura",
    "utiles": 4
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-09-21",
    "texto": "Me hicieron el basta en el momento. Buenos precios por docena, regresaré para surtir mi tienda.",
    "utiles": 8
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-09-14",
    "texto": "Las camisetas sublimadas quedaron idénticas al diseño. Volvería a comprar sin dudarlo.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 12
   },
   {
    "autor": "Walter Y.",
    "estrellas": 3,
    "fecha": "2026-08-26",
    "texto": "Buenos productos, pero los sábados hay mucha gente. El precio no fue el mismo que me dieron por mensaje.",
    "mayorista": "Tienda en SJL",
    "utiles": 12
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-08-02",
    "texto": "Despacho rápido a provincia por agencia. Me costó encontrar el stand, pidan referencia en la entrada.",
    "utiles": 9
   }
  ]
 },
 {
  "id": "buzos-victoria",
  "nombre": "Buzos La Victoria",
  "categorias": [
   "deportiva",
   "uniformes"
  ],
  "descripcion": "Buzos escolares y deportivos en franela y microfibra. Bordado del logo del colegio.",
  "direccion": {
   "calle": "Jr. Huánuco",
   "numero": "1503",
   "interior": "1.er piso, stand 12",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.062909,
  "lng": -77.015224,
  "productos": [
   {
    "nombre": "Buzo escolar",
    "desde": 65
   },
   {
    "nombre": "Buzo microfibra",
    "desde": 75
   },
   {
    "nombre": "Polo de educación física",
    "desde": 18
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "1 docena"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Transferencia"
  ],
  "desde": 2005,
  "verificada": false,
  "resenas": [
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-09-29",
    "texto": "Atención rápida incluso en temporada alta. Buenos productos, pero los sábados hay mucha gente.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 0
   },
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-09-21",
    "texto": "La tela del uniforme aguanta bastante uso. Me dieron boleta sin problema.",
    "utiles": 10
   },
   {
    "autor": "Milagros G.",
    "estrellas": 3,
    "fecha": "2026-09-11",
    "texto": "Buen producto; ojalá tuvieran más colores. Poco surtido la vez que fui.",
    "utiles": 5
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 4,
    "fecha": "2026-08-28",
    "texto": "Volvería a comprar sin dudarlo. Cumple, pero no hay mucho espacio para probarse.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 2
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-08-23",
    "texto": "Hicieron los uniformes del colegio de mis hijos a tiempo. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Puno",
    "utiles": 10
   }
  ]
 },
 {
  "id": "valentina-moda",
  "nombre": "Valentina Moda",
  "categorias": [
   "dama"
  ],
  "descripcion": "Vestidos casuales y de oficina para dama, tallas S a XXL. Nuevos diseños cada quincena.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "788",
   "interior": "Galería Nuevo Amanecer, 2.º piso, stand 245",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.066165,
  "lng": -77.013433,
  "productos": [
   {
    "nombre": "Vestido casual",
    "desde": 49
   },
   {
    "nombre": "Vestido de oficina",
    "desde": 65
   },
   {
    "nombre": "Enterizo dama",
    "desde": 59
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2015,
  "verificada": true,
  "resenas": [
   {
    "autor": "Pedro H.",
    "estrellas": 4,
    "fecha": "2026-10-22",
    "texto": "Me hicieron el basta en el momento. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Chiclayo",
    "utiles": 6
   },
   {
    "autor": "Renzo D.",
    "estrellas": 5,
    "fecha": "2026-09-17",
    "texto": "Vestidos muy bonitos y a la moda, encontré mi talla. Me separaron el pedido y lo recogí sin problemas.",
    "utiles": 2
   },
   {
    "autor": "Luis M.",
    "estrellas": 5,
    "fecha": "2026-08-30",
    "texto": "Las blusas tienen buen acabado, parecen de tienda por departamento. Buenos precios por docena, regresaré para surtir mi tienda.",
    "utiles": 9
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-08-27",
    "texto": "Aceptan Yape, eso facilita bastante. Por menor el precio sube un poco, conviene comprar por docena.",
    "utiles": 11
   }
  ]
 },
 {
  "id": "blusas-bella",
  "nombre": "Blusas Bella Lima",
  "categorias": [
   "dama"
  ],
  "descripcion": "Blusas de gasa, chalís y satén. Tendencias de temporada a precio de fábrica.",
  "direccion": {
   "calle": "Jr. Sebastián Barranca",
   "numero": "1612",
   "interior": "3.er piso, stand 318",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.066608,
  "lng": -77.013257,
  "productos": [
   {
    "nombre": "Blusa de gasa",
    "desde": 29
   },
   {
    "nombre": "Blusa satén",
    "desde": 35
   },
   {
    "nombre": "Camisa dama",
    "desde": 39
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2016,
  "verificada": false,
  "resenas": [
   {
    "autor": "Renzo D.",
    "estrellas": 4,
    "fecha": "2026-10-17",
    "texto": "Las blusas tienen buen acabado, parecen de tienda por departamento. Atención rápida incluso en temporada alta.",
    "utiles": 8
   },
   {
    "autor": "Miguel A.",
    "estrellas": 5,
    "fecha": "2026-09-30",
    "texto": "Siempre tienen modelos nuevos. Aceptan Yape, eso facilita bastante.",
    "utiles": 5
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-09-22",
    "texto": "Calidad de exportación a precio de Gamarra. Buen producto; ojalá tuvieran más colores.",
    "utiles": 12
   },
   {
    "autor": "Fiorella V.",
    "estrellas": 3,
    "fecha": "2026-09-04",
    "texto": "Cumple, pero no hay mucho espacio para probarse. Poco surtido la vez que fui.",
    "mayorista": "Tienda en Puno",
    "utiles": 13
   }
  ]
 },
 {
  "id": "fiesta-gala",
  "nombre": "Fiesta & Gala",
  "categorias": [
   "dama"
  ],
  "descripcion": "Vestidos de fiesta, quinceañero y graduación. Alquiler y venta, con arreglos el mismo día.",
  "direccion": {
   "calle": "Pasaje Gamarra",
   "numero": "137",
   "interior": "1.er piso, stand 6",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.067646,
  "lng": -77.013685,
  "productos": [
   {
    "nombre": "Vestido de fiesta",
    "desde": 120
   },
   {
    "nombre": "Vestido de graduación",
    "desde": 150
   },
   {
    "nombre": "Alquiler de vestido",
    "desde": 60
   }
  ],
  "venta": {
   "mayor": false,
   "menor": true,
   "minimoMayor": ""
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2007,
  "verificada": true,
  "resenas": [
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-10-09",
    "texto": "Me separaron el pedido y lo recogí sin problemas. Atención rápida incluso en temporada alta.",
    "utiles": 7
   },
   {
    "autor": "Carmen T.",
    "estrellas": 4,
    "fecha": "2026-09-23",
    "texto": "Tienen todas las tallas y varios colores. Por menor el precio sube un poco, conviene comprar por docena.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 2
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 2,
    "fecha": "2026-09-22",
    "texto": "Demoraron con mi pedido más de lo acordado. Cumple, pero no hay mucho espacio para probarse.",
    "mayorista": "Tienda en Ica",
    "utiles": 7
   },
   {
    "autor": "Miguel A.",
    "estrellas": 4,
    "fecha": "2026-09-16",
    "texto": "Siempre tienen modelos nuevos. Despacho rápido a provincia por agencia.",
    "utiles": 1
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 4,
    "fecha": "2026-09-13",
    "texto": "Aceptan Yape, eso facilita bastante. La calidad está bien, aunque no siempre tienen tallas grandes.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 6
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 5,
    "fecha": "2026-09-02",
    "texto": "Me hicieron el basta en el momento. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en Puno",
    "utiles": 0
   },
   {
    "autor": "Diego F.",
    "estrellas": 5,
    "fecha": "2026-08-23",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Calidad de exportación a precio de Gamarra.",
    "utiles": 0
   }
  ]
 },
 {
  "id": "urban-chica",
  "nombre": "Urban Chica",
  "categorias": [
   "dama",
   "casacas"
  ],
  "descripcion": "Moda urbana juvenil: tops, joggers, casacas cortas y conjuntos de temporada.",
  "direccion": {
   "calle": "Jr. San Cristóbal",
   "numero": "1590",
   "interior": "2.º piso, stand 214",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.06725,
  "lng": -77.013306,
  "productos": [
   {
    "nombre": "Jogger dama",
    "desde": 35
   },
   {
    "nombre": "Casaca crop",
    "desde": 49
   },
   {
    "nombre": "Top urbano",
    "desde": 19
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2021,
  "verificada": false,
  "resenas": [
   {
    "autor": "Fiorella V.",
    "estrellas": 4,
    "fecha": "2026-10-15",
    "texto": "Las blusas tienen buen acabado, parecen de tienda por departamento. Buenos precios por docena, regresaré para surtir mi tienda.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 4
   },
   {
    "autor": "María L.",
    "estrellas": 4,
    "fecha": "2026-10-08",
    "texto": "Mandé a Huancayo y llegó en dos días. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 8
   },
   {
    "autor": "Sofía B.",
    "estrellas": 5,
    "fecha": "2026-09-16",
    "texto": "Me hicieron el basta en el momento. Excelente atención, la señorita fue muy amable.",
    "utiles": 7
   },
   {
    "autor": "Diego F.",
    "estrellas": 5,
    "fecha": "2026-09-09",
    "texto": "Siempre tienen modelos nuevos. Me dieron boleta sin problema.",
    "utiles": 3
   },
   {
    "autor": "Ricardo Ñ.",
    "estrellas": 3,
    "fecha": "2026-08-03",
    "texto": "La calidad está bien, aunque no siempre tienen tallas grandes. Vestidos muy bonitos y a la moda, encontré mi talla.",
    "utiles": 11
   }
  ]
 },
 {
  "id": "camiseria-don-carlos",
  "nombre": "Camisería Don Carlos",
  "categorias": [
   "caballero"
  ],
  "descripcion": "Camisas de vestir y casuales en popelina y oxford. Confección a medida en 48 horas.",
  "direccion": {
   "calle": "Jr. Antonio Bazo",
   "numero": "1069",
   "interior": "1.er piso, stand 3",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069022,
  "lng": -77.013711,
  "productos": [
   {
    "nombre": "Camisa de vestir",
    "desde": 45
   },
   {
    "nombre": "Camisa oxford",
    "desde": 55
   },
   {
    "nombre": "Camisa a medida",
    "desde": 85
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 1998,
  "verificada": true,
  "resenas": [
   {
    "autor": "María L.",
    "estrellas": 5,
    "fecha": "2026-10-17",
    "texto": "Me ajustaron el terno el mismo día. Aceptan Yape, eso facilita bastante.",
    "utiles": 13
   },
   {
    "autor": "Ricardo Ñ.",
    "estrellas": 4,
    "fecha": "2026-09-25",
    "texto": "Camisas de buena tela, no se arrugan mucho. Me dieron boleta sin problema.",
    "utiles": 9
   },
   {
    "autor": "Elmer V.",
    "estrellas": 5,
    "fecha": "2026-09-18",
    "texto": "Todo llegó bien empaquetado. Me asesoraron bien para elegir modelos que se venden.",
    "utiles": 6
   },
   {
    "autor": "Luis M.",
    "estrellas": 5,
    "fecha": "2026-07-16",
    "texto": "Excelente atención, la señorita fue muy amable. Tienen todas las tallas y varios colores.",
    "utiles": 4
   },
   {
    "autor": "Renzo D.",
    "estrellas": 5,
    "fecha": "2026-07-09",
    "texto": "Calidad de exportación a precio de Gamarra. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 1
   },
   {
    "autor": "Miguel A.",
    "estrellas": 5,
    "fecha": "2026-06-10",
    "texto": "Buen corte, las camisas calzan bien en los hombros. Fácil de ubicar, está cerca de la escalera.",
    "utiles": 4
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-06-02",
    "texto": "Trabajo a medida muy prolijo. Me separaron el pedido y lo recogí sin problemas.",
    "mayorista": "Tienda en Piura",
    "utiles": 11
   }
  ]
 },
 {
  "id": "ternos-senorial",
  "nombre": "Ternos El Señorial",
  "categorias": [
   "caballero"
  ],
  "descripcion": "Ternos, sacos y pantalones de vestir. Ajustes sin costo y ternos para promociones.",
  "direccion": {
   "calle": "Jr. Hipólito Unánue",
   "numero": "1555",
   "interior": "2.º piso, stand 201",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.065271,
  "lng": -77.014713,
  "productos": [
   {
    "nombre": "Terno slim fit",
    "desde": 280
   },
   {
    "nombre": "Saco casual",
    "desde": 160
   },
   {
    "nombre": "Pantalón de vestir",
    "desde": 69
   }
  ],
  "venta": {
   "mayor": false,
   "menor": true,
   "minimoMayor": ""
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2003,
  "verificada": true,
  "resenas": [
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-09-18",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Me separaron el pedido y lo recogí sin problemas.",
    "mayorista": "Tienda en Ica",
    "utiles": 0
   },
   {
    "autor": "María L.",
    "estrellas": 5,
    "fecha": "2026-09-17",
    "texto": "Me ajustaron el terno el mismo día. Calidad de exportación a precio de Gamarra.",
    "utiles": 8
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 5,
    "fecha": "2026-08-17",
    "texto": "Camisas de buena tela, no se arrugan mucho. Volvería a comprar sin dudarlo.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 3
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-07-30",
    "texto": "Tienen todas las tallas y varios colores. Todo llegó bien empaquetado.",
    "mayorista": "Tienda en SJL",
    "utiles": 0
   },
   {
    "autor": "Jorge C.",
    "estrellas": 5,
    "fecha": "2026-07-15",
    "texto": "Trabajo a medida muy prolijo. Excelente atención, la señorita fue muy amable.",
    "utiles": 1
   },
   {
    "autor": "Gaby N.",
    "estrellas": 5,
    "fecha": "2026-07-10",
    "texto": "Buen corte, las camisas calzan bien en los hombros. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 0
   }
  ]
 },
 {
  "id": "uniformes-santa-rosa",
  "nombre": "Uniformes Santa Rosa",
  "categorias": [
   "uniformes"
  ],
  "descripcion": "Uniformes escolares de colegios nacionales y particulares: faldas, pantalones, chompas y camisas.",
  "direccion": {
   "calle": "Jr. Antonio Bazo",
   "numero": "1120",
   "interior": "Galería Los Telares, 1.er piso, stand 11",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069513,
  "lng": -77.013867,
  "productos": [
   {
    "nombre": "Falda escolar",
    "desde": 35
   },
   {
    "nombre": "Pantalón escolar",
    "desde": 39
   },
   {
    "nombre": "Chompa escolar",
    "desde": 45
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "1 docena"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2001,
  "verificada": false,
  "resenas": [
   {
    "autor": "Rosa Q.",
    "estrellas": 5,
    "fecha": "2026-10-15",
    "texto": "Cumplieron con el pedido grande para mi empresa. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 1
   },
   {
    "autor": "Ricardo Ñ.",
    "estrellas": 5,
    "fecha": "2026-10-08",
    "texto": "Bordaron el logo de mi empresa perfecto. Me dieron boleta sin problema.",
    "utiles": 14
   },
   {
    "autor": "Fiorella V.",
    "estrellas": 5,
    "fecha": "2026-10-04",
    "texto": "Me hicieron rebaja por llevar varias prendas. Atención rápida incluso en temporada alta.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 8
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 3,
    "fecha": "2026-09-28",
    "texto": "Buenos productos, pero los sábados hay mucha gente. La tela del uniforme aguanta bastante uso.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 1
   },
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-09-23",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Precios justos; la atención podría ser más rápida.",
    "mayorista": "Tienda en Puno",
    "utiles": 13
   },
   {
    "autor": "Walter Y.",
    "estrellas": 4,
    "fecha": "2026-08-25",
    "texto": "Hicieron los uniformes del colegio de mis hijos a tiempo. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 4
   }
  ]
 },
 {
  "id": "corporativo-textil",
  "nombre": "Corporativo Textil Pro",
  "categorias": [
   "uniformes",
   "servicios"
  ],
  "descripcion": "Uniformes corporativos, mandiles y ropa de trabajo con bordado de logo incluido.",
  "direccion": {
   "calle": "Jr. Huánuco",
   "numero": "1485",
   "interior": "2.º piso, stand 207",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.062664,
  "lng": -77.015258,
  "productos": [
   {
    "nombre": "Camisa corporativa",
    "desde": 49
   },
   {
    "nombre": "Mandil",
    "desde": 25
   },
   {
    "nombre": "Chaleco con logo",
    "desde": 59
   }
  ],
  "venta": {
   "mayor": true,
   "menor": false,
   "minimoMayor": "12 unidades"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Transferencia"
  ],
  "desde": 2010,
  "verificada": true,
  "resenas": [
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-10-18",
    "texto": "Colores muy vivos en el sublimado. Todo llegó bien empaquetado.",
    "mayorista": "Tienda en Cusco",
    "utiles": 5
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-10-17",
    "texto": "Hicieron los uniformes del colegio de mis hijos a tiempo. Tienen todas las tallas y varios colores.",
    "utiles": 12
   },
   {
    "autor": "Diego F.",
    "estrellas": 4,
    "fecha": "2026-09-23",
    "texto": "El estampado DTF no se cuartea después de lavar. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 5
   },
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-09-12",
    "texto": "Cumplieron con el pedido grande para mi empresa. Excelente atención, la señorita fue muy amable.",
    "utiles": 12
   },
   {
    "autor": "Jorge C.",
    "estrellas": 4,
    "fecha": "2026-09-04",
    "texto": "La tela del uniforme aguanta bastante uso. Me dieron boleta sin problema.",
    "utiles": 10
   },
   {
    "autor": "Luis M.",
    "estrellas": 4,
    "fecha": "2026-08-01",
    "texto": "Me ayudaron a mejorar el diseño sin costo. Me separaron el pedido y lo recogí sin problemas.",
    "utiles": 14
   }
  ]
 },
 {
  "id": "telas-jersey",
  "nombre": "Telas Jersey Andina",
  "categorias": [
   "telas"
  ],
  "descripcion": "Venta de telas por kilo y por metro: jersey, franela, rib, piqué y french terry.",
  "direccion": {
   "calle": "Jr. San Cristóbal",
   "numero": "1505",
   "interior": "1.er piso, stand 2",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.067228,
  "lng": -77.014876,
  "productos": [
   {
    "nombre": "Jersey 30/1 (kilo)",
    "desde": 28
   },
   {
    "nombre": "Franela (kilo)",
    "desde": 30
   },
   {
    "nombre": "Rib (kilo)",
    "desde": 32
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "5 kilos"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Transferencia"
  ],
  "desde": 2004,
  "verificada": true,
  "resenas": [
   {
    "autor": "Milagros G.",
    "estrellas": 4,
    "fecha": "2026-10-18",
    "texto": "Volvería a comprar sin dudarlo. La calidad está bien, aunque no siempre tienen tallas grandes.",
    "utiles": 0
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-10-12",
    "texto": "Atención rápida incluso en temporada alta. Aceptan Yape, eso facilita bastante.",
    "utiles": 10
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 4,
    "fecha": "2026-10-06",
    "texto": "Buenos precios por docena, regresaré para surtir mi tienda. Fácil de ubicar, está cerca de la escalera.",
    "mayorista": "Tienda en Puno",
    "utiles": 9
   },
   {
    "autor": "Juana Ch.",
    "estrellas": 5,
    "fecha": "2026-09-28",
    "texto": "Pesan la tela delante de ti, todo transparente. Me dieron boleta sin problema.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 10
   },
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-09-24",
    "texto": "Calidad de exportación a precio de Gamarra. Despacho rápido a provincia por agencia.",
    "mayorista": "Tienda en Puno",
    "utiles": 14
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-09-04",
    "texto": "Buen precio por kilo comparado con otros stands. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en Cusco",
    "utiles": 11
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-08-28",
    "texto": "Encontré todos los avíos que necesitaba en un solo lugar. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Cusco",
    "utiles": 11
   }
  ]
 },
 {
  "id": "avios-botones",
  "nombre": "Avíos & Botones Gamarra",
  "categorias": [
   "telas",
   "accesorios"
  ],
  "descripcion": "Todo en avíos: cierres, botones, hilos, etiquetas, elásticos y tiras para confección.",
  "direccion": {
   "calle": "Jr. Humboldt",
   "numero": "1545",
   "interior": "1.er piso, stand 1",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.064123,
  "lng": -77.014596,
  "productos": [
   {
    "nombre": "Cierres (docena)",
    "desde": 6
   },
   {
    "nombre": "Botones (ciento)",
    "desde": 8
   },
   {
    "nombre": "Etiquetas tejidas (millar)",
    "desde": 120
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "por paquete"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 1999,
  "verificada": true,
  "resenas": [
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-10-13",
    "texto": "Encontré todos los avíos que necesitaba en un solo lugar. Despacho rápido a provincia por agencia.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 1
   },
   {
    "autor": "Kevin R.",
    "estrellas": 4,
    "fecha": "2026-09-30",
    "texto": "Las mochilas son resistentes. Buenos precios por docena, regresaré para surtir mi tienda.",
    "utiles": 1
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 5,
    "fecha": "2026-09-19",
    "texto": "Pesan la tela delante de ti, todo transparente. Me separaron el pedido y lo recogí sin problemas.",
    "mayorista": "Tienda en SJL",
    "utiles": 4
   },
   {
    "autor": "Milagros G.",
    "estrellas": 5,
    "fecha": "2026-09-18",
    "texto": "Las gorras con bordado quedaron geniales. Volvería a comprar sin dudarlo.",
    "utiles": 3
   }
  ]
 },
 {
  "id": "casa-algodon",
  "nombre": "La Casa del Algodón",
  "categorias": [
   "telas"
  ],
  "descripcion": "Telas de algodón y popelina por metro para confeccionistas, costureras y estudiantes de moda.",
  "direccion": {
   "calle": "Jr. Italia",
   "numero": "1546",
   "interior": "1.er piso, stand 9",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069475,
  "lng": -77.013495,
  "productos": [
   {
    "nombre": "Popelina (metro)",
    "desde": 9
   },
   {
    "nombre": "Drill (metro)",
    "desde": 14
   },
   {
    "nombre": "Algodón estampado (metro)",
    "desde": 12
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "10 metros"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2012,
  "verificada": false,
  "resenas": [
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-10-06",
    "texto": "Buen precio por kilo comparado con otros stands. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en SJL",
    "utiles": 3
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 4,
    "fecha": "2026-10-06",
    "texto": "Encontré todos los avíos que necesitaba en un solo lugar. Buenos precios por docena, regresaré para surtir mi tienda.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 13
   },
   {
    "autor": "Diego F.",
    "estrellas": 5,
    "fecha": "2026-10-06",
    "texto": "Gran variedad de telas jersey y franela. Excelente atención, la señorita fue muy amable.",
    "utiles": 1
   },
   {
    "autor": "Lucía P.",
    "estrellas": 5,
    "fecha": "2026-08-02",
    "texto": "Pesan la tela delante de ti, todo transparente. Volvería a comprar sin dudarlo.",
    "utiles": 14
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-04-22",
    "texto": "Me asesoraron bien para elegir modelos que se venden. La calidad está bien, aunque no siempre tienen tallas grandes.",
    "utiles": 11
   }
  ]
 },
 {
  "id": "dulces-suenos",
  "nombre": "Pijamas Dulces Sueños",
  "categorias": [
   "interior"
  ],
  "descripcion": "Pijamas de algodón y polar para toda la familia. Diseños de temporada y personajes.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "742",
   "interior": "Galería El Telar, 3.er piso, stand 330",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.065656,
  "lng": -77.0135,
  "productos": [
   {
    "nombre": "Pijama dama",
    "desde": 35
   },
   {
    "nombre": "Pijama caballero",
    "desde": 38
   },
   {
    "nombre": "Pijama polar niño",
    "desde": 32
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2014,
  "verificada": true,
  "resenas": [
   {
    "autor": "Luis M.",
    "estrellas": 3,
    "fecha": "2026-10-02",
    "texto": "Buen producto; ojalá tuvieran más colores. Poco surtido la vez que fui.",
    "utiles": 9
   },
   {
    "autor": "Renzo D.",
    "estrellas": 2,
    "fecha": "2026-09-20",
    "texto": "El precio no fue el mismo que me dieron por mensaje. Buenos productos, pero los sábados hay mucha gente.",
    "utiles": 7
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 5,
    "fecha": "2026-08-26",
    "texto": "Pijamas muy cómodas y de algodón. Me hicieron rebaja por llevar varias prendas.",
    "mayorista": "Tienda en Chiclayo",
    "utiles": 6
   },
   {
    "autor": "María L.",
    "estrellas": 5,
    "fecha": "2026-08-03",
    "texto": "Buena variedad de tallas en ropa interior. Me separaron el pedido y lo recogí sin problemas.",
    "utiles": 11
   }
  ]
 },
 {
  "id": "intima-lenceria",
  "nombre": "Íntima Lencería",
  "categorias": [
   "interior",
   "dama"
  ],
  "descripcion": "Ropa interior para dama y caballero, bodies y lencería. Venta discreta y por mayor.",
  "direccion": {
   "calle": "Jr. Sebastián Barranca",
   "numero": "1660",
   "interior": "2.º piso, stand 219",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.066528,
  "lng": -77.012627,
  "productos": [
   {
    "nombre": "Pack trusas x3",
    "desde": 15
   },
   {
    "nombre": "Brasier",
    "desde": 25
   },
   {
    "nombre": "Bóxer algodón x3",
    "desde": 20
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "1 docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2017,
  "verificada": false,
  "resenas": [
   {
    "autor": "Jorge C.",
    "estrellas": 5,
    "fecha": "2026-10-19",
    "texto": "Atención discreta y amable. Tienen todas las tallas y varios colores.",
    "utiles": 10
   },
   {
    "autor": "Lucía P.",
    "estrellas": 3,
    "fecha": "2026-10-05",
    "texto": "Por menor el precio sube un poco, conviene comprar por docena. Poco surtido la vez que fui.",
    "utiles": 11
   },
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-10-01",
    "texto": "Me hicieron el basta en el momento. Fácil de ubicar, está cerca de la escalera.",
    "mayorista": "Tienda en Puno",
    "utiles": 3
   },
   {
    "autor": "Luis M.",
    "estrellas": 5,
    "fecha": "2026-06-09",
    "texto": "Vestidos muy bonitos y a la moda, encontré mi talla. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 5
   }
  ]
 },
 {
  "id": "casacas-andinas",
  "nombre": "Casacas Andinas",
  "categorias": [
   "casacas"
  ],
  "descripcion": "Casacas, chompas y chalecos con acabados de exportación. Diseños con motivos andinos.",
  "direccion": {
   "calle": "Jr. Mariscal Agustín Gamarra",
   "numero": "1088",
   "interior": "1.er piso, stand 14",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069458,
  "lng": -77.013022,
  "productos": [
   {
    "nombre": "Casaca impermeable",
    "desde": 89
   },
   {
    "nombre": "Chompa tejida",
    "desde": 65
   },
   {
    "nombre": "Chaleco acolchado",
    "desde": 75
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2006,
  "verificada": true,
  "resenas": [
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-10-21",
    "texto": "Mandé a Huancayo y llegó en dos días. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Cusco",
    "utiles": 2
   },
   {
    "autor": "Luis M.",
    "estrellas": 5,
    "fecha": "2026-10-17",
    "texto": "Polares de buena calidad para el frío de la sierra. Fácil de ubicar, está cerca de la escalera.",
    "utiles": 14
   },
   {
    "autor": "Fiorella V.",
    "estrellas": 4,
    "fecha": "2026-10-10",
    "texto": "Los cierres son resistentes, no se malogran. Calidad de exportación a precio de Gamarra.",
    "mayorista": "Tienda en Huancayo",
    "utiles": 2
   },
   {
    "autor": "Diego F.",
    "estrellas": 4,
    "fecha": "2026-08-29",
    "texto": "Me hicieron rebaja por llevar varias prendas. Por menor el precio sube un poco, conviene comprar por docena.",
    "utiles": 1
   }
  ]
 },
 {
  "id": "polar-center",
  "nombre": "Polar Center",
  "categorias": [
   "casacas",
   "deportiva"
  ],
  "descripcion": "Polares, cortavientos y casacas deportivas. Despachos a Cusco, Puno y Huancayo.",
  "direccion": {
   "calle": "Av. Aviación",
   "numero": "455",
   "interior": "C.C. Punto Aviación, 2.º piso, stand 240",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.065356,
  "lng": -77.012104,
  "productos": [
   {
    "nombre": "Polar con capucha",
    "desde": 45
   },
   {
    "nombre": "Cortavientos",
    "desde": 55
   },
   {
    "nombre": "Casaca térmica",
    "desde": 95
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2011,
  "verificada": false,
  "resenas": [
   {
    "autor": "Hugo E.",
    "estrellas": 3,
    "fecha": "2026-10-11",
    "texto": "La calidad está bien, aunque no siempre tienen tallas grandes. Mandé a Huancayo y llegó en dos días.",
    "utiles": 0
   },
   {
    "autor": "María L.",
    "estrellas": 4,
    "fecha": "2026-10-06",
    "texto": "Entregaron los uniformes del campeonato a tiempo. Volvería a comprar sin dudarlo.",
    "utiles": 2
   },
   {
    "autor": "Milagros G.",
    "estrellas": 5,
    "fecha": "2026-09-08",
    "texto": "Los buzos son abrigaditos y de buena tela. Me separaron el pedido y lo recogí sin problemas.",
    "utiles": 3
   },
   {
    "autor": "Elmer V.",
    "estrellas": 4,
    "fecha": "2026-08-06",
    "texto": "Las casacas son abrigadoras y bien terminadas. Excelente atención, la señorita fue muy amable.",
    "utiles": 3
   },
   {
    "autor": "Luis M.",
    "estrellas": 4,
    "fecha": "2026-07-21",
    "texto": "Me dieron boleta sin problema. Precios justos; la atención podría ser más rápida.",
    "utiles": 10
   },
   {
    "autor": "Ricardo Ñ.",
    "estrellas": 5,
    "fecha": "2026-06-30",
    "texto": "Las camisetas sublimadas quedaron idénticas al diseño. Atención rápida incluso en temporada alta.",
    "utiles": 6
   },
   {
    "autor": "Gaby N.",
    "estrellas": 3,
    "fecha": "2026-06-13",
    "texto": "Por menor el precio sube un poco, conviene comprar por docena. Polares de buena calidad para el frío de la sierra.",
    "utiles": 5
   }
  ]
 },
 {
  "id": "cap-store",
  "nombre": "Cap Store Gamarra",
  "categorias": [
   "accesorios"
  ],
  "descripcion": "Gorras, viseras y sombreros. Bordado y estampado de gorras publicitarias.",
  "direccion": {
   "calle": "Jr. Hipólito Unánue",
   "numero": "1660",
   "interior": "1.er piso, stand 21",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.065265,
  "lng": -77.012996,
  "productos": [
   {
    "nombre": "Gorra bordada",
    "desde": 15
   },
   {
    "nombre": "Gorra trucker",
    "desde": 18
   },
   {
    "nombre": "Sombrero de pescador",
    "desde": 20
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "1 docena"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2018,
  "verificada": true,
  "resenas": [
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-10-08",
    "texto": "Fácil de ubicar, está cerca de la escalera. Buenos productos, pero los sábados hay mucha gente.",
    "utiles": 13
   },
   {
    "autor": "Carmen T.",
    "estrellas": 5,
    "fecha": "2026-09-27",
    "texto": "Despacho rápido a provincia por agencia. Tienen todas las tallas y varios colores.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 11
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 4,
    "fecha": "2026-09-25",
    "texto": "Atención rápida incluso en temporada alta. Excelente atención, la señorita fue muy amable.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 5
   },
   {
    "autor": "Kevin R.",
    "estrellas": 5,
    "fecha": "2026-09-20",
    "texto": "Las mochilas son resistentes. Me dieron boleta sin problema.",
    "utiles": 2
   },
   {
    "autor": "Sofía B.",
    "estrellas": 4,
    "fecha": "2026-09-06",
    "texto": "Correas de cuero de buena calidad y baratas. Todo llegó bien empaquetado.",
    "utiles": 0
   },
   {
    "autor": "Rosa Q.",
    "estrellas": 4,
    "fecha": "2026-08-18",
    "texto": "Las gorras con bordado quedaron geniales. Me asesoraron bien para elegir modelos que se venden.",
    "mayorista": "Tienda en Puno",
    "utiles": 5
   }
  ]
 },
 {
  "id": "tio-lucho",
  "nombre": "Correas & Bolsos Tío Lucho",
  "categorias": [
   "accesorios"
  ],
  "descripcion": "Correas de cuero, carteras, mochilas y billeteras. Más de 30 años en Gamarra.",
  "direccion": {
   "calle": "Jr. Italia",
   "numero": "1650",
   "interior": "1.er piso, stand 5",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.069325,
  "lng": -77.012249,
  "productos": [
   {
    "nombre": "Correa de cuero",
    "desde": 25
   },
   {
    "nombre": "Cartera dama",
    "desde": 59
   },
   {
    "nombre": "Mochila urbana",
    "desde": 49
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "media docena"
  },
  "horario": [
   null,
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1110
   ],
   [
    480,
    1080
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 1993,
  "verificada": true,
  "resenas": [
   {
    "autor": "Carmen T.",
    "estrellas": 5,
    "fecha": "2026-10-23",
    "texto": "Correas de cuero de buena calidad y baratas. Aceptan Yape, eso facilita bastante.",
    "mayorista": "Tienda en Arequipa",
    "utiles": 6
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 5,
    "fecha": "2026-10-11",
    "texto": "Las gorras con bordado quedaron geniales. Me asesoraron bien para elegir modelos que se venden.",
    "mayorista": "Tienda en Piura",
    "utiles": 1
   },
   {
    "autor": "Elmer V.",
    "estrellas": 5,
    "fecha": "2026-09-08",
    "texto": "Todo llegó bien empaquetado. Despacho rápido a provincia por agencia.",
    "utiles": 6
   },
   {
    "autor": "Patricia Z.",
    "estrellas": 3,
    "fecha": "2026-07-19",
    "texto": "Buenos productos, pero los sábados hay mucha gente. Las mochilas son resistentes.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 11
   },
   {
    "autor": "Milagros G.",
    "estrellas": 5,
    "fecha": "2026-06-12",
    "texto": "Mucha variedad de modelos. Atención rápida incluso en temporada alta.",
    "utiles": 2
   }
  ]
 },
 {
  "id": "sublimax",
  "nombre": "Estampados Sublimax",
  "categorias": [
   "servicios",
   "polos"
  ],
  "descripcion": "Estampado DTF, sublimado y serigrafía. Diseño gratis y entrega en 24 a 48 horas.",
  "direccion": {
   "calle": "Jr. Huánuco",
   "numero": "1531",
   "interior": "3.er piso, stand 301",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.063292,
  "lng": -77.01517,
  "productos": [
   {
    "nombre": "Estampado DTF (A4)",
    "desde": 6
   },
   {
    "nombre": "Sublimado de polo",
    "desde": 8
   },
   {
    "nombre": "Serigrafía por color",
    "desde": 2
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "12 unidades"
  },
  "horario": [
   [
    600,
    1020
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    570,
    1200
   ],
   [
    540,
    1230
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin",
   "Tarjeta"
  ],
  "desde": 2016,
  "verificada": true,
  "resenas": [
   {
    "autor": "Fiorella V.",
    "estrellas": 5,
    "fecha": "2026-10-07",
    "texto": "Colores firmes, ya los lavé varias veces y siguen igual. Atención rápida incluso en temporada alta.",
    "mayorista": "Tienda en Cusco",
    "utiles": 1
   },
   {
    "autor": "Julio I.",
    "estrellas": 4,
    "fecha": "2026-10-03",
    "texto": "Aceptan Yape, eso facilita bastante. Buenos productos, pero los sábados hay mucha gente.",
    "mayorista": "Tienda en Piura",
    "utiles": 5
   },
   {
    "autor": "Yesenia O.",
    "estrellas": 4,
    "fecha": "2026-09-29",
    "texto": "Me hicieron rebaja por llevar varias prendas. La calidad está bien, aunque no siempre tienen tallas grandes.",
    "mayorista": "Tienda en Trujillo",
    "utiles": 12
   },
   {
    "autor": "Elmer V.",
    "estrellas": 5,
    "fecha": "2026-09-27",
    "texto": "Algodón de verdad, suavecito y no se encoge. Volvería a comprar sin dudarlo.",
    "utiles": 13
   },
   {
    "autor": "Luis M.",
    "estrellas": 4,
    "fecha": "2026-09-22",
    "texto": "Me asesoraron bien para elegir modelos que se venden. Cumple, pero no hay mucho espacio para probarse.",
    "utiles": 1
   },
   {
    "autor": "Pedro H.",
    "estrellas": 5,
    "fecha": "2026-08-26",
    "texto": "Los polos básicos salen a muy buen precio por docena. Me dieron boleta sin problema.",
    "mayorista": "Tienda en Lima Norte",
    "utiles": 1
   },
   {
    "autor": "Hugo E.",
    "estrellas": 4,
    "fecha": "2026-08-05",
    "texto": "Calidad de exportación a precio de Gamarra. Me costó encontrar el stand, pidan referencia en la entrada.",
    "utiles": 7
   }
  ]
 },
 {
  "id": "bordados-express",
  "nombre": "Bordados Express",
  "categorias": [
   "servicios",
   "uniformes"
  ],
  "descripcion": "Bordado computarizado de logos para uniformes, gorras y polos. Ponchado de diseño incluido.",
  "direccion": {
   "calle": "Jr. San Cristóbal",
   "numero": "1612",
   "interior": "2.º piso, stand 202",
   "distrito": "La Victoria",
   "ciudad": "Lima"
  },
  "lat": -12.0672,
  "lng": -77.012908,
  "productos": [
   {
    "nombre": "Bordado de logo",
    "desde": 4
   },
   {
    "nombre": "Ponchado de diseño",
    "desde": 30
   },
   {
    "nombre": "Parche bordado",
    "desde": 5
   }
  ],
  "venta": {
   "mayor": true,
   "menor": true,
   "minimoMayor": "12 unidades"
  },
  "horario": [
   [
    600,
    960
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1140
   ],
   [
    540,
    1170
   ]
  ],
  "pagos": [
   "Efectivo",
   "Yape",
   "Plin"
  ],
  "desde": 2013,
  "verificada": false,
  "resenas": [
   {
    "autor": "Patricia Z.",
    "estrellas": 4,
    "fecha": "2026-10-14",
    "texto": "Bordado rápido, en 24 horas tenía mi pedido. Buenos precios por docena, regresaré para surtir mi tienda.",
    "mayorista": "Tienda en Puno",
    "utiles": 3
   },
   {
    "autor": "Hugo E.",
    "estrellas": 5,
    "fecha": "2026-10-11",
    "texto": "Bordaron el logo de mi empresa perfecto. Me hicieron rebaja por llevar varias prendas.",
    "utiles": 11
   },
   {
    "autor": "María L.",
    "estrellas": 4,
    "fecha": "2026-10-07",
    "texto": "Aceptan Yape, eso facilita bastante. Por menor el precio sube un poco, conviene comprar por docena.",
    "utiles": 1
   },
   {
    "autor": "Julio I.",
    "estrellas": 5,
    "fecha": "2026-10-04",
    "texto": "Me ayudaron a mejorar el diseño sin costo. Me dieron boleta sin problema.",
    "mayorista": "Tienda en Ica",
    "utiles": 4
   },
   {
    "autor": "Pedro H.",
    "estrellas": 4,
    "fecha": "2026-09-05",
    "texto": "Me separaron el pedido y lo recogí sin problemas. Me costó encontrar el stand, pidan referencia en la entrada.",
    "mayorista": "Tienda en Chiclayo",
    "utiles": 6
   },
   {
    "autor": "Kevin R.",
    "estrellas": 4,
    "fecha": "2026-08-23",
    "texto": "Volvería a comprar sin dudarlo. Bien en general, aunque tuve que esperar un rato.",
    "utiles": 11
   },
   {
    "autor": "Miguel A.",
    "estrellas": 4,
    "fecha": "2026-04-29",
    "texto": "Hicieron los uniformes del colegio de mis hijos a tiempo. Me asesoraron bien para elegir modelos que se venden.",
    "utiles": 7
   }
  ]
 }
];
