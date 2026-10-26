// Datos de demostración de UbiGamarra.
// Las tiendas y reseñas son ficticias; las calles y la numeración se basan en OpenStreetMap (© colaboradores de OSM).
// productos: precio por menor, precioMayor desde minMayor unidades (null si solo vende por menor); tipo define la ilustración.
// whatsapp: número de la tienda con código de país (51 + 9 dígitos); null en las tiendas demo.
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
    "id": "jean-mom-dama",
    "nombre": "Jean mom dama",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 38,
    "precioMayor": 32,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 200,
    "vendidos": 264
   },
   {
    "id": "jean-skinny-stretch",
    "nombre": "Jean skinny stretch",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 35,
    "precioMayor": 30,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 200,
    "vendidos": 75
   },
   {
    "id": "jean-cargo-caballero",
    "nombre": "Jean cargo caballero",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 260,
    "vendidos": 192
   },
   {
    "id": "short-denim",
    "nombre": "Short denim",
    "tipo": "short",
    "cat": "jeans",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 260,
    "vendidos": 348
   },
   {
    "id": "falda-denim",
    "nombre": "Falda denim",
    "tipo": "falda",
    "cat": "jeans",
    "precio": 30,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 48,
    "vendidos": 31,
    "etiqueta": "Oferta",
    "precioAntes": 38
   },
   {
    "id": "overol-denim",
    "nombre": "Overol denim",
    "tipo": "overol",
    "cat": "jeans",
    "precio": 60,
    "precioMayor": 50,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 200,
    "vendidos": 664,
    "etiqueta": "Más vendido"
   },
   {
    "id": "jean-nino",
    "nombre": "Jean niño",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 28,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 48,
    "vendidos": 580,
    "etiqueta": "Nuevo"
   },
   {
    "id": "casaca-denim",
    "nombre": "Casaca denim",
    "tipo": "casaca",
    "cat": "jeans",
    "precio": 65,
    "precioMayor": 54,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 480,
    "vendidos": 336
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
  "whatsapp": null,
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
    "id": "jean-slim-fit",
    "nombre": "Jean slim fit",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 42,
    "precioMayor": 37,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 150,
    "vendidos": 228
   },
   {
    "id": "jean-clasico-tallas-38-44",
    "nombre": "Jean clásico tallas 38-44",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 48,
    "precioMayor": 42,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 48,
    "vendidos": 103
   },
   {
    "id": "jean-rasgado",
    "nombre": "Jean rasgado",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 60,
    "vendidos": 336
   },
   {
    "id": "jean-wide-leg",
    "nombre": "Jean wide leg",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 40,
    "precioMayor": 34,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 85,
    "vendidos": 592,
    "etiqueta": "Más vendido"
   },
   {
    "id": "jean-cargo-caballero",
    "nombre": "Jean cargo caballero",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 24,
    "vendidos": 98
   },
   {
    "id": "jean-skinny-stretch",
    "nombre": "Jean skinny stretch",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 35,
    "precioMayor": 29,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 18,
    "vendidos": 63
   },
   {
    "id": "short-denim",
    "nombre": "Short denim",
    "tipo": "short",
    "cat": "jeans",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 60,
    "vendidos": 132,
    "etiqueta": "Nuevo"
   },
   {
    "id": "casaca-denim",
    "nombre": "Casaca denim",
    "tipo": "casaca",
    "cat": "jeans",
    "precio": 65,
    "precioMayor": 58,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 48,
    "vendidos": 230
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
  "whatsapp": null,
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
    "id": "jean-wide-leg",
    "nombre": "Jean wide leg",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 40,
    "precioMayor": 35,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 24,
    "vendidos": 31
   },
   {
    "id": "casaca-denim",
    "nombre": "Casaca denim",
    "tipo": "casaca",
    "cat": "jeans",
    "precio": 65,
    "precioMayor": 58,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 85,
    "vendidos": 48
   },
   {
    "id": "falda-denim",
    "nombre": "Falda denim",
    "tipo": "falda",
    "cat": "jeans",
    "precio": 30,
    "precioMayor": 25,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 24,
    "vendidos": 254
   },
   {
    "id": "jean-nino",
    "nombre": "Jean niño",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 28,
    "precioMayor": 23,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 85,
    "vendidos": 124
   },
   {
    "id": "jean-cargo-caballero",
    "nombre": "Jean cargo caballero",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 38,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 120,
    "vendidos": 139
   },
   {
    "id": "jean-mom-dama",
    "nombre": "Jean mom dama",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 38,
    "precioMayor": 32,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 18,
    "vendidos": 490,
    "etiqueta": "Más vendido"
   },
   {
    "id": "jean-skinny-stretch",
    "nombre": "Jean skinny stretch",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 35,
    "precioMayor": 29,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 120,
    "vendidos": 100,
    "etiqueta": "Nuevo"
   },
   {
    "id": "overol-denim",
    "nombre": "Overol denim",
    "tipo": "overol",
    "cat": "jeans",
    "precio": 60,
    "precioMayor": 53,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 60,
    "vendidos": 450
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
  "whatsapp": null,
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
    "id": "jean-bordado",
    "nombre": "Jean bordado",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 38,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 340,
    "vendidos": 146
   },
   {
    "id": "jean-push-up",
    "nombre": "Jean push up",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 40,
    "precioMayor": 34,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 36,
    "vendidos": 165,
    "etiqueta": "Oferta",
    "precioAntes": 50
   },
   {
    "id": "overol-denim",
    "nombre": "Overol denim",
    "tipo": "overol",
    "cat": "jeans",
    "precio": 60,
    "precioMayor": 52,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 48,
    "vendidos": 216
   },
   {
    "id": "casaca-denim",
    "nombre": "Casaca denim",
    "tipo": "casaca",
    "cat": "jeans",
    "precio": 65,
    "precioMayor": 57,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 85,
    "vendidos": 165,
    "etiqueta": "Nuevo"
   },
   {
    "id": "short-denim",
    "nombre": "Short denim",
    "tipo": "short",
    "cat": "jeans",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 60,
    "vendidos": 50
   },
   {
    "id": "jean-cargo-caballero",
    "nombre": "Jean cargo caballero",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 340,
    "vendidos": 286
   },
   {
    "id": "jean-mom-dama",
    "nombre": "Jean mom dama",
    "tipo": "jean",
    "cat": "jeans",
    "precio": 38,
    "precioMayor": 31,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul oscuro",
      "hex": "#1F3557"
     },
     {
      "n": "Celeste",
      "hex": "#86AEDB"
     },
     {
      "n": "Azul clásico",
      "hex": "#2F5D9E"
     }
    ],
    "material": "Denim stretch 12 oz",
    "stock": 340,
    "vendidos": 1008,
    "etiqueta": "Más vendido"
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
  "whatsapp": null,
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
    "id": "polo-pima-cuello-redondo",
    "nombre": "Polo pima cuello redondo",
    "tipo": "polo",
    "cat": "polos",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 480,
    "vendidos": 415
   },
   {
    "id": "polo-pima-cuello-v",
    "nombre": "Polo pima cuello V",
    "tipo": "polo",
    "cat": "polos",
    "precio": 27,
    "precioMayor": 23,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 48,
    "vendidos": 258
   },
   {
    "id": "polo-manga-larga",
    "nombre": "Polo manga larga",
    "tipo": "polo-ml",
    "cat": "polos",
    "precio": 32,
    "precioMayor": 27,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 120,
    "vendidos": 140,
    "etiqueta": "Oferta",
    "precioAntes": 40
   },
   {
    "id": "polo-basico-nino",
    "nombre": "Polo básico niño",
    "tipo": "polo",
    "cat": "polos",
    "precio": 10,
    "precioMayor": 9,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 200,
    "vendidos": 704,
    "etiqueta": "Más vendido"
   },
   {
    "id": "polo-cuello-chino",
    "nombre": "Polo cuello chino",
    "tipo": "polo",
    "cat": "polos",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 340,
    "vendidos": 20,
    "etiqueta": "Nuevo"
   },
   {
    "id": "polo-basico-jersey",
    "nombre": "Polo básico jersey",
    "tipo": "tela",
    "cat": "polos",
    "precio": 12,
    "precioMayor": 10,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 340,
    "vendidos": 65
   },
   {
    "id": "polo-oversize",
    "nombre": "Polo oversize",
    "tipo": "polo",
    "cat": "polos",
    "precio": 22,
    "precioMayor": 19,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 340,
    "vendidos": 208
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
  "whatsapp": null,
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
    "id": "polo-basico-jersey",
    "nombre": "Polo básico jersey",
    "tipo": "tela",
    "cat": "polos",
    "precio": 12,
    "precioMayor": 10,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 36,
    "vendidos": 252
   },
   {
    "id": "polo-oversize",
    "nombre": "Polo oversize",
    "tipo": "polo",
    "cat": "polos",
    "precio": 22,
    "precioMayor": 19,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 60,
    "vendidos": 150
   },
   {
    "id": "polo-cuello-chino",
    "nombre": "Polo cuello chino",
    "tipo": "polo",
    "cat": "polos",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 200,
    "vendidos": 268
   },
   {
    "id": "polo-pima-cuello-redondo",
    "nombre": "Polo pima cuello redondo",
    "tipo": "polo",
    "cat": "polos",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 24,
    "vendidos": 204,
    "etiqueta": "Nuevo"
   },
   {
    "id": "polo-manga-larga",
    "nombre": "Polo manga larga",
    "tipo": "polo-ml",
    "cat": "polos",
    "precio": 32,
    "precioMayor": 27,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 200,
    "vendidos": 1064,
    "etiqueta": "Más vendido"
   },
   {
    "id": "top-basico-dama",
    "nombre": "Top básico dama",
    "tipo": "top",
    "cat": "polos",
    "precio": 14,
    "precioMayor": 12,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 60,
    "vendidos": 60
   },
   {
    "id": "polo-basico-nino",
    "nombre": "Polo básico niño",
    "tipo": "polo",
    "cat": "polos",
    "precio": 10,
    "precioMayor": 8,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 60,
    "vendidos": 480
   },
   {
    "id": "bividi-algodon",
    "nombre": "Bividí algodón",
    "tipo": "top",
    "cat": "polos",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 120,
    "vendidos": 512
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
  "whatsapp": null,
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
    "id": "polo-sublimado",
    "nombre": "Polo sublimado",
    "tipo": "estampado",
    "cat": "polos",
    "precio": 20,
    "precioMayor": 17,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 150,
    "vendidos": 101,
    "etiqueta": "Oferta",
    "precioAntes": 25
   },
   {
    "id": "polo-dtf-full-color",
    "nombre": "Polo DTF full color",
    "tipo": "estampado",
    "cat": "polos",
    "precio": 24,
    "precioMayor": 20,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Impresión DTF",
    "stock": 260,
    "vendidos": 65,
    "etiqueta": "Nuevo"
   },
   {
    "id": "polo-promocional",
    "nombre": "Polo promocional",
    "tipo": "polo",
    "cat": "polos",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 24,
    "vendidos": 296
   },
   {
    "id": "polo-basico-nino",
    "nombre": "Polo básico niño",
    "tipo": "polo",
    "cat": "polos",
    "precio": 10,
    "precioMayor": 9,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 120,
    "vendidos": 248
   },
   {
    "id": "polo-manga-larga",
    "nombre": "Polo manga larga",
    "tipo": "polo-ml",
    "cat": "polos",
    "precio": 32,
    "precioMayor": 28,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 120,
    "vendidos": 218
   },
   {
    "id": "bividi-algodon",
    "nombre": "Bividí algodón",
    "tipo": "top",
    "cat": "polos",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 150,
    "vendidos": 110
   },
   {
    "id": "polo-cuello-chino",
    "nombre": "Polo cuello chino",
    "tipo": "polo",
    "cat": "polos",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 480,
    "vendidos": 912,
    "etiqueta": "Más vendido"
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
  "whatsapp": null,
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
    "id": "polo-basico-nino",
    "nombre": "Polo básico niño",
    "tipo": "polo",
    "cat": "polos",
    "precio": 10,
    "precioMayor": 9,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 85,
    "vendidos": 83,
    "etiqueta": "Nuevo"
   },
   {
    "id": "bividi-algodon",
    "nombre": "Bividí algodón",
    "tipo": "top",
    "cat": "polos",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 480,
    "vendidos": 300
   },
   {
    "id": "top-basico-dama",
    "nombre": "Top básico dama",
    "tipo": "top",
    "cat": "polos",
    "precio": 14,
    "precioMayor": 12,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 24,
    "vendidos": 441,
    "etiqueta": "Más vendido"
   },
   {
    "id": "polo-oversize",
    "nombre": "Polo oversize",
    "tipo": "polo",
    "cat": "polos",
    "precio": 22,
    "precioMayor": 19,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 48,
    "vendidos": 79
   },
   {
    "id": "polo-pima-cuello-redondo",
    "nombre": "Polo pima cuello redondo",
    "tipo": "polo",
    "cat": "polos",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 260,
    "vendidos": 139
   },
   {
    "id": "polo-manga-larga",
    "nombre": "Polo manga larga",
    "tipo": "polo-ml",
    "cat": "polos",
    "precio": 32,
    "precioMayor": 28,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 36,
    "vendidos": 51
   },
   {
    "id": "polo-basico-jersey",
    "nombre": "Polo básico jersey",
    "tipo": "tela",
    "cat": "polos",
    "precio": 12,
    "precioMayor": 10,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 36,
    "vendidos": 143,
    "etiqueta": "Oferta",
    "precioAntes": 15
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
  "whatsapp": null,
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
    "id": "body-pima-bebe",
    "nombre": "Body pima bebé",
    "tipo": "body",
    "cat": "ninos",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 48,
    "vendidos": 1016,
    "etiqueta": "Más vendido"
   },
   {
    "id": "ajuar-5-piezas",
    "nombre": "Ajuar 5 piezas",
    "tipo": "body",
    "cat": "ninos",
    "precio": 75,
    "precioMayor": 63,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Algodón pima",
    "stock": 18,
    "vendidos": 296
   },
   {
    "id": "enterizo-polar",
    "nombre": "Enterizo polar",
    "tipo": "body",
    "cat": "ninos",
    "precio": 35,
    "precioMayor": 29,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Polar 280 g",
    "stock": 340,
    "vendidos": 23
   },
   {
    "id": "casaca-nino",
    "nombre": "Casaca niño",
    "tipo": "casaca",
    "cat": "ninos",
    "precio": 55,
    "precioMayor": 48,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Microfibra con forro polar",
    "stock": 480,
    "vendidos": 32
   },
   {
    "id": "vestido-nina",
    "nombre": "Vestido niña",
    "tipo": "vestido",
    "cat": "ninos",
    "precio": 45,
    "precioMayor": 37,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Crepé",
    "stock": 85,
    "vendidos": 21,
    "etiqueta": "Nuevo"
   },
   {
    "id": "pijama-bebe",
    "nombre": "Pijama bebé",
    "tipo": "pijama",
    "cat": "ninos",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Algodón pima",
    "stock": 36,
    "vendidos": 370,
    "etiqueta": "Oferta",
    "precioAntes": 31
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
  "whatsapp": null,
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
    "id": "conjunto-nino",
    "nombre": "Conjunto niño",
    "tipo": "polo",
    "cat": "ninos",
    "precio": 39,
    "precioMayor": 34,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón pima",
    "stock": 60,
    "vendidos": 580,
    "etiqueta": "Más vendido"
   },
   {
    "id": "vestido-nina",
    "nombre": "Vestido niña",
    "tipo": "vestido",
    "cat": "ninos",
    "precio": 45,
    "precioMayor": 37,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Crepé",
    "stock": 85,
    "vendidos": 49
   },
   {
    "id": "casaca-nino",
    "nombre": "Casaca niño",
    "tipo": "casaca",
    "cat": "ninos",
    "precio": 55,
    "precioMayor": 46,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra con forro polar",
    "stock": 150,
    "vendidos": 435
   },
   {
    "id": "gorrito-bebe",
    "nombre": "Gorrito bebé",
    "tipo": "gorra",
    "cat": "ninos",
    "precio": 10,
    "precioMayor": 9,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-6 m",
     "6-12 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón pima",
    "stock": 480,
    "vendidos": 381,
    "etiqueta": "Oferta",
    "precioAntes": 12
   },
   {
    "id": "body-pima-bebe",
    "nombre": "Body pima bebé",
    "tipo": "body",
    "cat": "ninos",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 18,
    "vendidos": 216
   },
   {
    "id": "manta-de-polar",
    "nombre": "Manta de polar",
    "tipo": "manta",
    "cat": "ninos",
    "precio": 30,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Polar 280 g",
    "stock": 48,
    "vendidos": 230
   },
   {
    "id": "short-nino",
    "nombre": "Short niño",
    "tipo": "short",
    "cat": "ninos",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     }
    ],
    "material": "Algodón pima",
    "stock": 18,
    "vendidos": 207,
    "etiqueta": "Nuevo"
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
  "whatsapp": null,
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
    "id": "pijama-bebe",
    "nombre": "Pijama bebé",
    "tipo": "pijama",
    "cat": "ninos",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     }
    ],
    "material": "Algodón pima",
    "stock": 480,
    "vendidos": 62,
    "etiqueta": "Oferta",
    "precioAntes": 31
   },
   {
    "id": "manta-de-polar",
    "nombre": "Manta de polar",
    "tipo": "manta",
    "cat": "ninos",
    "precio": 30,
    "precioMayor": 26,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     }
    ],
    "material": "Polar 280 g",
    "stock": 200,
    "vendidos": 840
   },
   {
    "id": "set-regalo-baby-shower",
    "nombre": "Set regalo baby shower",
    "tipo": "body",
    "cat": "ninos",
    "precio": 85,
    "precioMayor": 73,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Algodón pima",
    "stock": 120,
    "vendidos": 84
   },
   {
    "id": "body-pima-bebe",
    "nombre": "Body pima bebé",
    "tipo": "body",
    "cat": "ninos",
    "precio": 18,
    "precioMayor": 16,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "0-3 m",
     "3-6 m",
     "6-12 m",
     "12-24 m"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Algodón pima 100 %",
    "stock": 60,
    "vendidos": 368
   },
   {
    "id": "vestido-nina",
    "nombre": "Vestido niña",
    "tipo": "vestido",
    "cat": "ninos",
    "precio": 45,
    "precioMayor": 39,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Crepé",
    "stock": 340,
    "vendidos": 25,
    "etiqueta": "Nuevo"
   },
   {
    "id": "casaca-nino",
    "nombre": "Casaca niño",
    "tipo": "casaca",
    "cat": "ninos",
    "precio": 55,
    "precioMayor": 46,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     }
    ],
    "material": "Microfibra con forro polar",
    "stock": 340,
    "vendidos": 50
   },
   {
    "id": "conjunto-nino",
    "nombre": "Conjunto niño",
    "tipo": "polo",
    "cat": "ninos",
    "precio": 39,
    "precioMayor": 33,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Algodón pima",
    "stock": 24,
    "vendidos": 670
   },
   {
    "id": "short-nino",
    "nombre": "Short niño",
    "tipo": "short",
    "cat": "ninos",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "2",
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde agua",
      "hex": "#A7E8D0"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rosado bebé",
      "hex": "#FFC8DD"
     }
    ],
    "material": "Algodón pima",
    "stock": 60,
    "vendidos": 1040,
    "etiqueta": "Más vendido"
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
  "whatsapp": null,
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
    "id": "camiseta-sublimada",
    "nombre": "Camiseta sublimada",
    "tipo": "estampado",
    "cat": "deportiva",
    "precio": 28,
    "precioMayor": 24,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 340,
    "vendidos": 32,
    "etiqueta": "Nuevo"
   },
   {
    "id": "short-deportivo",
    "nombre": "Short deportivo",
    "tipo": "short",
    "cat": "deportiva",
    "precio": 15,
    "precioMayor": 12,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 120,
    "vendidos": 92
   },
   {
    "id": "uniforme-completo",
    "nombre": "Uniforme completo",
    "tipo": "polo",
    "cat": "deportiva",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 260,
    "vendidos": 485
   },
   {
    "id": "polo-de-educacion-fisica",
    "nombre": "Polo de educación física",
    "tipo": "polo",
    "cat": "deportiva",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 60,
    "vendidos": 448
   },
   {
    "id": "top-deportivo",
    "nombre": "Top deportivo",
    "tipo": "top",
    "cat": "deportiva",
    "precio": 22,
    "precioMayor": 18,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     }
    ],
    "material": "Suplex con licra",
    "stock": 150,
    "vendidos": 1088,
    "etiqueta": "Más vendido"
   },
   {
    "id": "casaca-cortavientos",
    "nombre": "Casaca cortavientos",
    "tipo": "casaca",
    "cat": "deportiva",
    "precio": 55,
    "precioMayor": 48,
    "minMayor": 10,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 120,
    "vendidos": 415
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
  "whatsapp": null,
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
    "id": "legging-suplex",
    "nombre": "Legging suplex",
    "tipo": "legging",
    "cat": "deportiva",
    "precio": 30,
    "precioMayor": 27,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Suplex con licra",
    "stock": 18,
    "vendidos": 393,
    "etiqueta": "Más vendido"
   },
   {
    "id": "top-deportivo",
    "nombre": "Top deportivo",
    "tipo": "top",
    "cat": "deportiva",
    "precio": 22,
    "precioMayor": 20,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Suplex con licra",
    "stock": 85,
    "vendidos": 198
   },
   {
    "id": "conjunto-fitness",
    "nombre": "Conjunto fitness",
    "tipo": "top",
    "cat": "deportiva",
    "precio": 55,
    "precioMayor": 45,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Suplex con licra",
    "stock": 340,
    "vendidos": 195,
    "etiqueta": "Oferta",
    "precioAntes": 69
   },
   {
    "id": "casaca-cortavientos",
    "nombre": "Casaca cortavientos",
    "tipo": "casaca",
    "cat": "deportiva",
    "precio": 55,
    "precioMayor": 46,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 200,
    "vendidos": 40,
    "etiqueta": "Nuevo"
   },
   {
    "id": "short-deportivo",
    "nombre": "Short deportivo",
    "tipo": "short",
    "cat": "deportiva",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 48,
    "vendidos": 184
   },
   {
    "id": "buzo-microfibra",
    "nombre": "Buzo microfibra",
    "tipo": "buzo",
    "cat": "deportiva",
    "precio": 75,
    "precioMayor": 67,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 36,
    "vendidos": 234
   },
   {
    "id": "camiseta-sublimada",
    "nombre": "Camiseta sublimada",
    "tipo": "estampado",
    "cat": "deportiva",
    "precio": 28,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 340,
    "vendidos": 120
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
  "whatsapp": null,
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
    "id": "buzo-escolar",
    "nombre": "Buzo escolar",
    "tipo": "buzo",
    "cat": "deportiva",
    "precio": 65,
    "precioMayor": 58,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Franela perchada",
    "stock": 480,
    "vendidos": 528
   },
   {
    "id": "buzo-microfibra",
    "nombre": "Buzo microfibra",
    "tipo": "buzo",
    "cat": "deportiva",
    "precio": 75,
    "precioMayor": 62,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 120,
    "vendidos": 1152,
    "etiqueta": "Más vendido"
   },
   {
    "id": "polo-de-educacion-fisica",
    "nombre": "Polo de educación física",
    "tipo": "polo",
    "cat": "deportiva",
    "precio": 18,
    "precioMayor": 16,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 36,
    "vendidos": 304
   },
   {
    "id": "top-deportivo",
    "nombre": "Top deportivo",
    "tipo": "top",
    "cat": "deportiva",
    "precio": 22,
    "precioMayor": 19,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Suplex con licra",
    "stock": 480,
    "vendidos": 76
   },
   {
    "id": "camiseta-sublimada",
    "nombre": "Camiseta sublimada",
    "tipo": "estampado",
    "cat": "deportiva",
    "precio": 28,
    "precioMayor": 23,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 340,
    "vendidos": 480,
    "etiqueta": "Nuevo"
   },
   {
    "id": "casaca-cortavientos",
    "nombre": "Casaca cortavientos",
    "tipo": "casaca",
    "cat": "deportiva",
    "precio": 55,
    "precioMayor": 49,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 260,
    "vendidos": 45
   },
   {
    "id": "short-deportivo",
    "nombre": "Short deportivo",
    "tipo": "short",
    "cat": "deportiva",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul eléctrico",
      "hex": "#2563EB"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 18,
    "vendidos": 56
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
  "whatsapp": null,
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
    "id": "vestido-casual",
    "nombre": "Vestido casual",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 49,
    "precioMayor": 44,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Crepé",
    "stock": 18,
    "vendidos": 127
   },
   {
    "id": "vestido-de-oficina",
    "nombre": "Vestido de oficina",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 65,
    "precioMayor": 57,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Crepé",
    "stock": 200,
    "vendidos": 130,
    "etiqueta": "Nuevo"
   },
   {
    "id": "enterizo-dama",
    "nombre": "Enterizo dama",
    "tipo": "overol",
    "cat": "dama",
    "precio": 59,
    "precioMayor": 50,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Crepé",
    "stock": 18,
    "vendidos": 133,
    "etiqueta": "Oferta",
    "precioAntes": 74
   },
   {
    "id": "top-urbano",
    "nombre": "Top urbano",
    "tipo": "top",
    "cat": "dama",
    "precio": 19,
    "precioMayor": 17,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Crepé",
    "stock": 260,
    "vendidos": 459
   },
   {
    "id": "camisa-dama",
    "nombre": "Camisa dama",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 39,
    "precioMayor": 34,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 85,
    "vendidos": 140
   },
   {
    "id": "pantalon-palazzo",
    "nombre": "Pantalón palazzo",
    "tipo": "pantalon",
    "cat": "dama",
    "precio": 45,
    "precioMayor": 37,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Crepé",
    "stock": 120,
    "vendidos": 952,
    "etiqueta": "Más vendido"
   },
   {
    "id": "blusa-de-gasa",
    "nombre": "Blusa de gasa",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 29,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Gasa",
    "stock": 24,
    "vendidos": 136
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
  "whatsapp": null,
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
    "id": "blusa-de-gasa",
    "nombre": "Blusa de gasa",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 29,
    "precioMayor": 25,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Gasa",
    "stock": 120,
    "vendidos": 16
   },
   {
    "id": "blusa-saten",
    "nombre": "Blusa satén",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 35,
    "precioMayor": 31,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Satén",
    "stock": 18,
    "vendidos": 48
   },
   {
    "id": "camisa-dama",
    "nombre": "Camisa dama",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 39,
    "precioMayor": 33,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 36,
    "vendidos": 166
   },
   {
    "id": "falda-plisada",
    "nombre": "Falda plisada",
    "tipo": "falda",
    "cat": "dama",
    "precio": 35,
    "precioMayor": 31,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Crepé",
    "stock": 36,
    "vendidos": 114,
    "etiqueta": "Oferta",
    "precioAntes": 44
   },
   {
    "id": "top-urbano",
    "nombre": "Top urbano",
    "tipo": "top",
    "cat": "dama",
    "precio": 19,
    "precioMayor": 17,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Crepé",
    "stock": 120,
    "vendidos": 57,
    "etiqueta": "Nuevo"
   },
   {
    "id": "enterizo-dama",
    "nombre": "Enterizo dama",
    "tipo": "overol",
    "cat": "dama",
    "precio": 59,
    "precioMayor": 53,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Crepé",
    "stock": 260,
    "vendidos": 408,
    "etiqueta": "Más vendido"
   },
   {
    "id": "pantalon-palazzo",
    "nombre": "Pantalón palazzo",
    "tipo": "pantalon",
    "cat": "dama",
    "precio": 45,
    "precioMayor": 39,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Crepé",
    "stock": 18,
    "vendidos": 264
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
  "whatsapp": null,
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
    "id": "vestido-de-fiesta",
    "nombre": "Vestido de fiesta",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 120,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Crepé",
    "stock": 200,
    "vendidos": 106
   },
   {
    "id": "vestido-de-graduacion",
    "nombre": "Vestido de graduación",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 150,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Crepé",
    "stock": 36,
    "vendidos": 147,
    "etiqueta": "Oferta",
    "precioAntes": 188
   },
   {
    "id": "alquiler-de-vestido",
    "nombre": "Alquiler de vestido",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 60,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "alquiler",
    "tallas": [],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Crepé",
    "stock": 60,
    "vendidos": 138,
    "etiqueta": "Nuevo"
   },
   {
    "id": "pantalon-palazzo",
    "nombre": "Pantalón palazzo",
    "tipo": "pantalon",
    "cat": "dama",
    "precio": 45,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     }
    ],
    "material": "Crepé",
    "stock": 60,
    "vendidos": 512
   },
   {
    "id": "casaca-crop",
    "nombre": "Casaca crop",
    "tipo": "casaca",
    "cat": "dama",
    "precio": 49,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Microfibra con forro polar",
    "stock": 48,
    "vendidos": 695,
    "etiqueta": "Más vendido"
   },
   {
    "id": "blusa-de-gasa",
    "nombre": "Blusa de gasa",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 29,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Gasa",
    "stock": 36,
    "vendidos": 132
   },
   {
    "id": "camisa-dama",
    "nombre": "Camisa dama",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 39,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 60,
    "vendidos": 392
   },
   {
    "id": "vestido-casual",
    "nombre": "Vestido casual",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 49,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Crepé",
    "stock": 18,
    "vendidos": 44
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
  "whatsapp": null,
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
    "id": "jogger-dama",
    "nombre": "Jogger dama",
    "tipo": "pantalon",
    "cat": "dama",
    "precio": 35,
    "precioMayor": 29,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Crepé",
    "stock": 24,
    "vendidos": 164
   },
   {
    "id": "casaca-crop",
    "nombre": "Casaca crop",
    "tipo": "casaca",
    "cat": "dama",
    "precio": 49,
    "precioMayor": 41,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Microfibra con forro polar",
    "stock": 36,
    "vendidos": 27,
    "etiqueta": "Oferta",
    "precioAntes": 61
   },
   {
    "id": "top-urbano",
    "nombre": "Top urbano",
    "tipo": "top",
    "cat": "dama",
    "precio": 19,
    "precioMayor": 17,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Crepé",
    "stock": 120,
    "vendidos": 92
   },
   {
    "id": "vestido-casual",
    "nombre": "Vestido casual",
    "tipo": "vestido",
    "cat": "dama",
    "precio": 49,
    "precioMayor": 42,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Crepé",
    "stock": 48,
    "vendidos": 369,
    "etiqueta": "Nuevo"
   },
   {
    "id": "enterizo-dama",
    "nombre": "Enterizo dama",
    "tipo": "overol",
    "cat": "dama",
    "precio": 59,
    "precioMayor": 52,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Crepé",
    "stock": 150,
    "vendidos": 620,
    "etiqueta": "Más vendido"
   },
   {
    "id": "pantalon-palazzo",
    "nombre": "Pantalón palazzo",
    "tipo": "pantalon",
    "cat": "dama",
    "precio": 45,
    "precioMayor": 38,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "26",
     "28",
     "30",
     "32",
     "34"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Crepé",
    "stock": 85,
    "vendidos": 363
   },
   {
    "id": "camisa-dama",
    "nombre": "Camisa dama",
    "tipo": "camisa",
    "cat": "dama",
    "precio": 39,
    "precioMayor": 34,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Rojo vino",
      "hex": "#7A1F35"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 150,
    "vendidos": 128
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
  "whatsapp": null,
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
    "id": "camisa-de-vestir",
    "nombre": "Camisa de vestir",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 45,
    "precioMayor": 39,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 120,
    "vendidos": 760,
    "etiqueta": "Más vendido"
   },
   {
    "id": "camisa-oxford",
    "nombre": "Camisa oxford",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 55,
    "precioMayor": 47,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Oxford de algodón",
    "stock": 48,
    "vendidos": 240,
    "etiqueta": "Nuevo"
   },
   {
    "id": "camisa-a-medida",
    "nombre": "Camisa a medida",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 85,
    "precioMayor": 74,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#BFD7F2"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 340,
    "vendidos": 219
   },
   {
    "id": "terno-slim-fit",
    "nombre": "Terno slim fit",
    "tipo": "terno",
    "cat": "caballero",
    "precio": 280,
    "precioMayor": 249,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "36",
     "38",
     "40",
     "42",
     "44",
     "46"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     }
    ],
    "material": "Casimir stretch",
    "stock": 48,
    "vendidos": 720,
    "etiqueta": "Oferta",
    "precioAntes": 350
   },
   {
    "id": "pantalon-de-vestir",
    "nombre": "Pantalón de vestir",
    "tipo": "pantalon",
    "cat": "caballero",
    "precio": 69,
    "precioMayor": 59,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Casimir stretch",
    "stock": 85,
    "vendidos": 393
   },
   {
    "id": "saco-casual",
    "nombre": "Saco casual",
    "tipo": "terno",
    "cat": "caballero",
    "precio": 160,
    "precioMayor": 142,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "36",
     "38",
     "40",
     "42",
     "44",
     "46"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#BFD7F2"
     }
    ],
    "material": "Casimir stretch",
    "stock": 85,
    "vendidos": 52
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
  "whatsapp": null,
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
    "id": "terno-slim-fit",
    "nombre": "Terno slim fit",
    "tipo": "terno",
    "cat": "caballero",
    "precio": 280,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "36",
     "38",
     "40",
     "42",
     "44",
     "46"
    ],
    "colores": [
     {
      "n": "Celeste",
      "hex": "#BFD7F2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Casimir stretch",
    "stock": 18,
    "vendidos": 60
   },
   {
    "id": "saco-casual",
    "nombre": "Saco casual",
    "tipo": "terno",
    "cat": "caballero",
    "precio": 160,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "36",
     "38",
     "40",
     "42",
     "44",
     "46"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     }
    ],
    "material": "Casimir stretch",
    "stock": 60,
    "vendidos": 117
   },
   {
    "id": "pantalon-de-vestir",
    "nombre": "Pantalón de vestir",
    "tipo": "pantalon",
    "cat": "caballero",
    "precio": 69,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "28",
     "30",
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Casimir stretch",
    "stock": 24,
    "vendidos": 20
   },
   {
    "id": "camisa-oxford",
    "nombre": "Camisa oxford",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 55,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste",
      "hex": "#BFD7F2"
     }
    ],
    "material": "Oxford de algodón",
    "stock": 36,
    "vendidos": 292,
    "etiqueta": "Nuevo"
   },
   {
    "id": "camisa-manga-corta",
    "nombre": "Camisa manga corta",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 39,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Celeste",
      "hex": "#BFD7F2"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 120,
    "vendidos": 368,
    "etiqueta": "Más vendido"
   },
   {
    "id": "camisa-de-vestir",
    "nombre": "Camisa de vestir",
    "tipo": "camisa",
    "cat": "caballero",
    "precio": 45,
    "precioMayor": null,
    "minMayor": null,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 24,
    "vendidos": 76,
    "etiqueta": "Oferta",
    "precioAntes": 56
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
  "whatsapp": null,
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
    "id": "falda-escolar",
    "nombre": "Falda escolar",
    "tipo": "falda",
    "cat": "uniformes",
    "precio": 35,
    "precioMayor": 30,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 85,
    "vendidos": 135
   },
   {
    "id": "pantalon-escolar",
    "nombre": "Pantalón escolar",
    "tipo": "pantalon",
    "cat": "uniformes",
    "precio": 39,
    "precioMayor": 34,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Drill de algodón",
    "stock": 340,
    "vendidos": 192,
    "etiqueta": "Nuevo"
   },
   {
    "id": "chompa-escolar",
    "nombre": "Chompa escolar",
    "tipo": "chompa",
    "cat": "uniformes",
    "precio": 45,
    "precioMayor": 37,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 85,
    "vendidos": 82
   },
   {
    "id": "chaleco-con-logo",
    "nombre": "Chaleco con logo",
    "tipo": "chaleco",
    "cat": "uniformes",
    "precio": 59,
    "precioMayor": 49,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 265
   },
   {
    "id": "polo-corporativo-bordado",
    "nombre": "Polo corporativo bordado",
    "tipo": "polo",
    "cat": "uniformes",
    "precio": 29,
    "precioMayor": 25,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     }
    ],
    "material": "Hilo de poliéster",
    "stock": 36,
    "vendidos": 832,
    "etiqueta": "Más vendido"
   },
   {
    "id": "camisa-escolar",
    "nombre": "Camisa escolar",
    "tipo": "camisa",
    "cat": "uniformes",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 260,
    "vendidos": 138
   },
   {
    "id": "mandil",
    "nombre": "Mandil",
    "tipo": "mandil",
    "cat": "uniformes",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 43,
    "etiqueta": "Oferta",
    "precioAntes": 31
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
  "whatsapp": null,
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
    "id": "camisa-corporativa",
    "nombre": "Camisa corporativa",
    "tipo": "camisa",
    "cat": "uniformes",
    "precio": 49,
    "precioMayor": 41,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 340,
    "vendidos": 320,
    "etiqueta": "Más vendido"
   },
   {
    "id": "mandil",
    "nombre": "Mandil",
    "tipo": "mandil",
    "cat": "uniformes",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 220
   },
   {
    "id": "chaleco-con-logo",
    "nombre": "Chaleco con logo",
    "tipo": "chaleco",
    "cat": "uniformes",
    "precio": 59,
    "precioMayor": 49,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 340,
    "vendidos": 119,
    "etiqueta": "Nuevo"
   },
   {
    "id": "falda-escolar",
    "nombre": "Falda escolar",
    "tipo": "falda",
    "cat": "uniformes",
    "precio": 35,
    "precioMayor": 29,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 28,
    "etiqueta": "Oferta",
    "precioAntes": 44
   },
   {
    "id": "camisa-escolar",
    "nombre": "Camisa escolar",
    "tipo": "camisa",
    "cat": "uniformes",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 18,
    "vendidos": 320
   },
   {
    "id": "chompa-escolar",
    "nombre": "Chompa escolar",
    "tipo": "chompa",
    "cat": "uniformes",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "6",
     "8",
     "10",
     "12",
     "14",
     "16"
    ],
    "colores": [
     {
      "n": "Guinda",
      "hex": "#7F1D3A"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 18,
    "vendidos": 78
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
  "whatsapp": null,
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
    "id": "jersey-30-1",
    "nombre": "Jersey 30/1",
    "tipo": "tela",
    "cat": "telas",
    "precio": 28,
    "precioMayor": 25,
    "minMayor": 5,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 200,
    "vendidos": 19
   },
   {
    "id": "franela",
    "nombre": "Franela",
    "tipo": "tela",
    "cat": "telas",
    "precio": 30,
    "precioMayor": 25,
    "minMayor": 5,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     }
    ],
    "material": "Franela de algodón",
    "stock": 36,
    "vendidos": 426
   },
   {
    "id": "rib",
    "nombre": "Rib",
    "tipo": "tela",
    "cat": "telas",
    "precio": 32,
    "precioMayor": 28,
    "minMayor": 5,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Rib 1x1",
    "stock": 85,
    "vendidos": 36
   },
   {
    "id": "drill",
    "nombre": "Drill",
    "tipo": "tela",
    "cat": "telas",
    "precio": 14,
    "precioMayor": 12,
    "minMayor": 5,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Drill",
    "stock": 200,
    "vendidos": 600,
    "etiqueta": "Más vendido"
   },
   {
    "id": "french-terry",
    "nombre": "French terry",
    "tipo": "tela",
    "cat": "telas",
    "precio": 34,
    "precioMayor": 30,
    "minMayor": 5,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     }
    ],
    "material": "French terry",
    "stock": 48,
    "vendidos": 136
   },
   {
    "id": "popelina",
    "nombre": "Popelina",
    "tipo": "tela",
    "cat": "telas",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 5,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 120,
    "vendidos": 363,
    "etiqueta": "Oferta",
    "precioAntes": 11
   },
   {
    "id": "pique",
    "nombre": "Piqué",
    "tipo": "tela",
    "cat": "telas",
    "precio": 30,
    "precioMayor": 26,
    "minMayor": 5,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Piqué de algodón",
    "stock": 18,
    "vendidos": 83,
    "etiqueta": "Nuevo"
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
  "whatsapp": null,
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
    "id": "cierres",
    "nombre": "Cierres",
    "tipo": "avios",
    "cat": "telas",
    "precio": 6,
    "precioMayor": 5,
    "minMayor": 3,
    "unidad": "docena",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     }
    ],
    "material": "Surtido para confección",
    "stock": 340,
    "vendidos": 912,
    "etiqueta": "Más vendido"
   },
   {
    "id": "botones",
    "nombre": "Botones",
    "tipo": "avios",
    "cat": "telas",
    "precio": 8,
    "precioMayor": 7,
    "minMayor": 3,
    "unidad": "ciento",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Surtido para confección",
    "stock": 60,
    "vendidos": 304,
    "etiqueta": "Nuevo"
   },
   {
    "id": "etiquetas-tejidas",
    "nombre": "Etiquetas tejidas",
    "tipo": "etiqueta",
    "cat": "telas",
    "precio": 120,
    "precioMayor": 103,
    "minMayor": 3,
    "unidad": "millar",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     }
    ],
    "material": "Algodón",
    "stock": 48,
    "vendidos": 160
   },
   {
    "id": "pique",
    "nombre": "Piqué",
    "tipo": "tela",
    "cat": "telas",
    "precio": 30,
    "precioMayor": 26,
    "minMayor": 3,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Piqué de algodón",
    "stock": 48,
    "vendidos": 234,
    "etiqueta": "Oferta",
    "precioAntes": 38
   },
   {
    "id": "elastico-2-cm",
    "nombre": "Elástico 2 cm",
    "tipo": "avios",
    "cat": "telas",
    "precio": 12,
    "precioMayor": 10,
    "minMayor": 3,
    "unidad": "rollo",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Plomo",
      "hex": "#6B7280"
     }
    ],
    "material": "Surtido para confección",
    "stock": 480,
    "vendidos": 294
   },
   {
    "id": "drill",
    "nombre": "Drill",
    "tipo": "tela",
    "cat": "telas",
    "precio": 14,
    "precioMayor": 12,
    "minMayor": 3,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     }
    ],
    "material": "Drill",
    "stock": 260,
    "vendidos": 515
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
  "whatsapp": null,
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
    "id": "popelina",
    "nombre": "Popelina",
    "tipo": "tela",
    "cat": "telas",
    "precio": 9,
    "precioMayor": 8,
    "minMayor": 10,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Popelina 100 % algodón",
    "stock": 340,
    "vendidos": 144
   },
   {
    "id": "drill",
    "nombre": "Drill",
    "tipo": "tela",
    "cat": "telas",
    "precio": 14,
    "precioMayor": 12,
    "minMayor": 10,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     }
    ],
    "material": "Drill",
    "stock": 85,
    "vendidos": 368
   },
   {
    "id": "algodon-estampado",
    "nombre": "Algodón estampado",
    "tipo": "estampado",
    "cat": "telas",
    "precio": 12,
    "precioMayor": 11,
    "minMayor": 10,
    "unidad": "metro",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Algodón",
    "stock": 120,
    "vendidos": 144
   },
   {
    "id": "rib",
    "nombre": "Rib",
    "tipo": "tela",
    "cat": "telas",
    "precio": 32,
    "precioMayor": 28,
    "minMayor": 10,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     }
    ],
    "material": "Rib 1x1",
    "stock": 150,
    "vendidos": 445
   },
   {
    "id": "elastico-2-cm",
    "nombre": "Elástico 2 cm",
    "tipo": "avios",
    "cat": "telas",
    "precio": 12,
    "precioMayor": 10,
    "minMayor": 10,
    "unidad": "rollo",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     }
    ],
    "material": "Surtido para confección",
    "stock": 120,
    "vendidos": 704,
    "etiqueta": "Más vendido"
   },
   {
    "id": "pique",
    "nombre": "Piqué",
    "tipo": "tela",
    "cat": "telas",
    "precio": 30,
    "precioMayor": 27,
    "minMayor": 10,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Piqué de algodón",
    "stock": 48,
    "vendidos": 126
   },
   {
    "id": "franela",
    "nombre": "Franela",
    "tipo": "tela",
    "cat": "telas",
    "precio": 30,
    "precioMayor": 26,
    "minMayor": 10,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     }
    ],
    "material": "Franela de algodón",
    "stock": 260,
    "vendidos": 110
   },
   {
    "id": "french-terry",
    "nombre": "French terry",
    "tipo": "tela",
    "cat": "telas",
    "precio": 34,
    "precioMayor": 29,
    "minMayor": 10,
    "unidad": "kilo",
    "tallas": [],
    "colores": [
     {
      "n": "Amarillo",
      "hex": "#F5C518"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul rey",
      "hex": "#1D4ED8"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Verde",
      "hex": "#16A34A"
     },
     {
      "n": "Turquesa",
      "hex": "#14B8A6"
     }
    ],
    "material": "French terry",
    "stock": 340,
    "vendidos": 200,
    "etiqueta": "Nuevo"
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
  "whatsapp": null,
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
    "id": "pijama-dama",
    "nombre": "Pijama dama",
    "tipo": "pijama",
    "cat": "interior",
    "precio": 35,
    "precioMayor": 30,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 200,
    "vendidos": 171,
    "etiqueta": "Nuevo"
   },
   {
    "id": "pijama-caballero",
    "nombre": "Pijama caballero",
    "tipo": "pijama",
    "cat": "interior",
    "precio": 38,
    "precioMayor": 32,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Algodón con licra",
    "stock": 48,
    "vendidos": 262,
    "etiqueta": "Más vendido"
   },
   {
    "id": "pijama-polar-nino",
    "nombre": "Pijama polar niño",
    "tipo": "pijama",
    "cat": "interior",
    "precio": 32,
    "precioMayor": 27,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "4",
     "6",
     "8",
     "10",
     "12"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Polar 280 g",
    "stock": 24,
    "vendidos": 121
   },
   {
    "id": "brasier",
    "nombre": "Brasier",
    "tipo": "brasier",
    "cat": "interior",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 48,
    "vendidos": 232
   },
   {
    "id": "pack-trusas-x3",
    "nombre": "Pack trusas x3",
    "tipo": "interior",
    "cat": "interior",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     }
    ],
    "material": "Algodón con licra",
    "stock": 60,
    "vendidos": 220
   },
   {
    "id": "boxer-algodon-x3",
    "nombre": "Bóxer algodón x3",
    "tipo": "interior",
    "cat": "interior",
    "precio": 20,
    "precioMayor": 17,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 260,
    "vendidos": 130
   },
   {
    "id": "pijama-short",
    "nombre": "Pijama short",
    "tipo": "short",
    "cat": "interior",
    "precio": 29,
    "precioMayor": 24,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 36,
    "vendidos": 154,
    "etiqueta": "Oferta",
    "precioAntes": 36
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
  "whatsapp": null,
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
    "id": "pack-trusas-x3",
    "nombre": "Pack trusas x3",
    "tipo": "interior",
    "cat": "interior",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 36,
    "vendidos": 78,
    "etiqueta": "Nuevo"
   },
   {
    "id": "brasier",
    "nombre": "Brasier",
    "tipo": "brasier",
    "cat": "interior",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "32",
     "34",
     "36",
     "38"
    ],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 200,
    "vendidos": 135
   },
   {
    "id": "boxer-algodon-x3",
    "nombre": "Bóxer algodón x3",
    "tipo": "interior",
    "cat": "interior",
    "precio": 20,
    "precioMayor": 17,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Lila",
      "hex": "#B89AE6"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 150,
    "vendidos": 264
   },
   {
    "id": "pijama-caballero",
    "nombre": "Pijama caballero",
    "tipo": "pijama",
    "cat": "interior",
    "precio": 38,
    "precioMayor": 34,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Celeste bebé",
      "hex": "#BDE0FE"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 200,
    "vendidos": 17
   },
   {
    "id": "pijama-dama",
    "nombre": "Pijama dama",
    "tipo": "pijama",
    "cat": "interior",
    "precio": 35,
    "precioMayor": 30,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 24,
    "vendidos": 480,
    "etiqueta": "Más vendido"
   },
   {
    "id": "pijama-short",
    "nombre": "Pijama short",
    "tipo": "short",
    "cat": "interior",
    "precio": 29,
    "precioMayor": 25,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Rosado",
      "hex": "#F2A7C3"
     }
    ],
    "material": "Algodón con licra",
    "stock": 48,
    "vendidos": 256
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
  "whatsapp": null,
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
    "id": "casaca-impermeable",
    "nombre": "Casaca impermeable",
    "tipo": "casaca",
    "cat": "casacas",
    "precio": 89,
    "precioMayor": 79,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Taslan impermeable",
    "stock": 18,
    "vendidos": 243,
    "etiqueta": "Nuevo"
   },
   {
    "id": "chompa-tejida",
    "nombre": "Chompa tejida",
    "tipo": "chompa",
    "cat": "casacas",
    "precio": 65,
    "precioMayor": 55,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 260,
    "vendidos": 17
   },
   {
    "id": "chaleco-acolchado",
    "nombre": "Chaleco acolchado",
    "tipo": "chaleco",
    "cat": "casacas",
    "precio": 75,
    "precioMayor": 66,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     }
    ],
    "material": "Acolchado térmico",
    "stock": 48,
    "vendidos": 408,
    "etiqueta": "Más vendido"
   },
   {
    "id": "cortavientos",
    "nombre": "Cortavientos",
    "tipo": "casaca",
    "cat": "casacas",
    "precio": 55,
    "precioMayor": 48,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 480,
    "vendidos": 57
   },
   {
    "id": "casaca-termica",
    "nombre": "Casaca térmica",
    "tipo": "casaca",
    "cat": "casacas",
    "precio": 95,
    "precioMayor": 81,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     }
    ],
    "material": "Acolchado térmico",
    "stock": 85,
    "vendidos": 153
   },
   {
    "id": "chompa-cuello-tortuga",
    "nombre": "Chompa cuello tortuga",
    "tipo": "chompa",
    "cat": "casacas",
    "precio": 55,
    "precioMayor": 49,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 48,
    "vendidos": 147
   },
   {
    "id": "polar-con-capucha",
    "nombre": "Polar con capucha",
    "tipo": "polar",
    "cat": "casacas",
    "precio": 45,
    "precioMayor": 38,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Polar 280 g",
    "stock": 340,
    "vendidos": 34
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
  "whatsapp": null,
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
    "id": "polar-con-capucha",
    "nombre": "Polar con capucha",
    "tipo": "polar",
    "cat": "casacas",
    "precio": 45,
    "precioMayor": 40,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     }
    ],
    "material": "Polar 280 g",
    "stock": 18,
    "vendidos": 21,
    "etiqueta": "Nuevo"
   },
   {
    "id": "cortavientos",
    "nombre": "Cortavientos",
    "tipo": "casaca",
    "cat": "casacas",
    "precio": 55,
    "precioMayor": 49,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 150,
    "vendidos": 1280,
    "etiqueta": "Más vendido"
   },
   {
    "id": "casaca-termica",
    "nombre": "Casaca térmica",
    "tipo": "casaca",
    "cat": "casacas",
    "precio": 95,
    "precioMayor": 81,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Gris",
      "hex": "#8A8F98"
     }
    ],
    "material": "Acolchado térmico",
    "stock": 85,
    "vendidos": 88
   },
   {
    "id": "chompa-tejida",
    "nombre": "Chompa tejida",
    "tipo": "chompa",
    "cat": "casacas",
    "precio": 65,
    "precioMayor": 56,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 200,
    "vendidos": 130,
    "etiqueta": "Oferta",
    "precioAntes": 81
   },
   {
    "id": "chompa-cuello-tortuga",
    "nombre": "Chompa cuello tortuga",
    "tipo": "chompa",
    "cat": "casacas",
    "precio": 55,
    "precioMayor": 46,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Gris",
      "hex": "#8A8F98"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Mostaza",
      "hex": "#D4A017"
     }
    ],
    "material": "Tejido acrílico",
    "stock": 60,
    "vendidos": 417
   },
   {
    "id": "chaleco-acolchado",
    "nombre": "Chaleco acolchado",
    "tipo": "chaleco",
    "cat": "casacas",
    "precio": 75,
    "precioMayor": 65,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde militar",
      "hex": "#4B5320"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Acolchado térmico",
    "stock": 48,
    "vendidos": 134
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
  "whatsapp": null,
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
    "id": "gorra-bordada",
    "nombre": "Gorra bordada",
    "tipo": "gorra",
    "cat": "accesorios",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 120,
    "vendidos": 180,
    "etiqueta": "Nuevo"
   },
   {
    "id": "gorra-trucker",
    "nombre": "Gorra trucker",
    "tipo": "gorra",
    "cat": "accesorios",
    "precio": 18,
    "precioMayor": 15,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 512,
    "etiqueta": "Oferta",
    "precioAntes": 22
   },
   {
    "id": "sombrero-de-pescador",
    "nombre": "Sombrero de pescador",
    "tipo": "sombrero",
    "cat": "accesorios",
    "precio": 20,
    "precioMayor": 18,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 150,
    "vendidos": 308
   },
   {
    "id": "mochila-urbana",
    "nombre": "Mochila urbana",
    "tipo": "mochila",
    "cat": "accesorios",
    "precio": 49,
    "precioMayor": 41,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     }
    ],
    "material": "Lona impermeable",
    "stock": 36,
    "vendidos": 94
   },
   {
    "id": "correa-de-cuero",
    "nombre": "Correa de cuero",
    "tipo": "correa",
    "cat": "accesorios",
    "precio": 25,
    "precioMayor": 21,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L"
    ],
    "colores": [
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     },
     {
      "n": "Camel",
      "hex": "#C19A6B"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Cuero genuino",
    "stock": 120,
    "vendidos": 665,
    "etiqueta": "Más vendido"
   },
   {
    "id": "cartera-dama",
    "nombre": "Cartera dama",
    "tipo": "cartera",
    "cat": "accesorios",
    "precio": 59,
    "precioMayor": 51,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Cuero sintético",
    "stock": 60,
    "vendidos": 640
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
  "whatsapp": null,
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
    "id": "correa-de-cuero",
    "nombre": "Correa de cuero",
    "tipo": "correa",
    "cat": "accesorios",
    "precio": 25,
    "precioMayor": 22,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L"
    ],
    "colores": [
     {
      "n": "Camel",
      "hex": "#C19A6B"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Cuero genuino",
    "stock": 260,
    "vendidos": 315
   },
   {
    "id": "cartera-dama",
    "nombre": "Cartera dama",
    "tipo": "cartera",
    "cat": "accesorios",
    "precio": 59,
    "precioMayor": 49,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Cuero sintético",
    "stock": 260,
    "vendidos": 212,
    "etiqueta": "Oferta",
    "precioAntes": 74
   },
   {
    "id": "mochila-urbana",
    "nombre": "Mochila urbana",
    "tipo": "mochila",
    "cat": "accesorios",
    "precio": 49,
    "precioMayor": 42,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Lona impermeable",
    "stock": 480,
    "vendidos": 159
   },
   {
    "id": "billetera-de-cuero",
    "nombre": "Billetera de cuero",
    "tipo": "billetera",
    "cat": "accesorios",
    "precio": 35,
    "precioMayor": 30,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Camel",
      "hex": "#C19A6B"
     },
     {
      "n": "Marrón",
      "hex": "#7B4A2A"
     }
    ],
    "material": "Cuero genuino",
    "stock": 24,
    "vendidos": 154
   },
   {
    "id": "sombrero-de-pescador",
    "nombre": "Sombrero de pescador",
    "tipo": "sombrero",
    "cat": "accesorios",
    "precio": 20,
    "precioMayor": 18,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 162
   },
   {
    "id": "gorra-bordada",
    "nombre": "Gorra bordada",
    "tipo": "gorra",
    "cat": "accesorios",
    "precio": 15,
    "precioMayor": 13,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Drill de algodón",
    "stock": 120,
    "vendidos": 780,
    "etiqueta": "Más vendido"
   },
   {
    "id": "gorra-trucker",
    "nombre": "Gorra trucker",
    "tipo": "gorra",
    "cat": "accesorios",
    "precio": 18,
    "precioMayor": 16,
    "minMayor": 6,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde olivo",
      "hex": "#7C8A4A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 60,
    "vendidos": 225,
    "etiqueta": "Nuevo"
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
  "whatsapp": null,
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
    "id": "estampado-dtf-a4",
    "nombre": "Estampado DTF A4",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 6,
    "precioMayor": 5,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Impresión DTF",
    "stock": 60,
    "vendidos": 147
   },
   {
    "id": "sublimado-de-polo",
    "nombre": "Sublimado de polo",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 8,
    "precioMayor": 7,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 340,
    "vendidos": 105
   },
   {
    "id": "serigrafia-por-color",
    "nombre": "Serigrafía por color",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 2,
    "precioMayor": 1.5,
    "minMayor": 12,
    "unidad": "color",
    "tallas": [],
    "colores": [
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     }
    ],
    "material": "Tinta plastisol",
    "stock": 60,
    "vendidos": 715,
    "etiqueta": "Más vendido"
   },
   {
    "id": "parche-bordado",
    "nombre": "Parche bordado",
    "tipo": "bordado",
    "cat": "servicios",
    "precio": 5,
    "precioMayor": 4,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Hilo de poliéster",
    "stock": 120,
    "vendidos": 348,
    "etiqueta": "Oferta",
    "precioAntes": 6
   },
   {
    "id": "gorra-con-logo-bordado",
    "nombre": "Gorra con logo bordado",
    "tipo": "gorra",
    "cat": "servicios",
    "precio": 18,
    "precioMayor": 16,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 48,
    "vendidos": 64,
    "etiqueta": "Nuevo"
   },
   {
    "id": "polo-personalizado",
    "nombre": "Polo personalizado",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 22,
    "precioMayor": 19,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 48,
    "vendidos": 128
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
  "whatsapp": null,
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
    "id": "bordado-de-logo",
    "nombre": "Bordado de logo",
    "tipo": "bordado",
    "cat": "servicios",
    "precio": 4,
    "precioMayor": 3,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     }
    ],
    "material": "Hilo de poliéster",
    "stock": 200,
    "vendidos": 1088,
    "etiqueta": "Más vendido"
   },
   {
    "id": "ponchado-de-diseno",
    "nombre": "Ponchado de diseño",
    "tipo": "bordado",
    "cat": "servicios",
    "precio": 30,
    "precioMayor": 26,
    "minMayor": 12,
    "unidad": "diseño",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 480,
    "vendidos": 308
   },
   {
    "id": "parche-bordado",
    "nombre": "Parche bordado",
    "tipo": "bordado",
    "cat": "servicios",
    "precio": 5,
    "precioMayor": 4,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Hilo de poliéster",
    "stock": 150,
    "vendidos": 141
   },
   {
    "id": "polo-personalizado",
    "nombre": "Polo personalizado",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 22,
    "precioMayor": 20,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "colores": [
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     }
    ],
    "material": "Jersey 30/1 peinado",
    "stock": 24,
    "vendidos": 25
   },
   {
    "id": "gorra-con-logo-bordado",
    "nombre": "Gorra con logo bordado",
    "tipo": "gorra",
    "cat": "servicios",
    "precio": 18,
    "precioMayor": 16,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [
     "Única"
    ],
    "colores": [
     {
      "n": "Beige",
      "hex": "#E6D2B3"
     },
     {
      "n": "Azul marino",
      "hex": "#1E2F5A"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     }
    ],
    "material": "Drill de algodón",
    "stock": 150,
    "vendidos": 308,
    "etiqueta": "Nuevo"
   },
   {
    "id": "estampado-dtf-a4",
    "nombre": "Estampado DTF A4",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 6,
    "precioMayor": 5,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     },
     {
      "n": "Negro",
      "hex": "#26272B"
     },
     {
      "n": "Melange",
      "hex": "#B7BBC2"
     }
    ],
    "material": "Impresión DTF",
    "stock": 200,
    "vendidos": 27
   },
   {
    "id": "sublimado-de-polo",
    "nombre": "Sublimado de polo",
    "tipo": "estampado",
    "cat": "servicios",
    "precio": 8,
    "precioMayor": 7,
    "minMayor": 12,
    "unidad": "unidad",
    "tallas": [],
    "colores": [
     {
      "n": "Verde botella",
      "hex": "#1F5E45"
     },
     {
      "n": "Rojo",
      "hex": "#D63A3A"
     },
     {
      "n": "Blanco",
      "hex": "#F5F5F3"
     }
    ],
    "material": "Microfibra dry-fit",
    "stock": 260,
    "vendidos": 97,
    "etiqueta": "Oferta",
    "precioAntes": 10
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
  "whatsapp": null,
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
