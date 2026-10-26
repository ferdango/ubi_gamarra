# UbiGamarra · prototipo PWA

Web que se comporta como app para encontrar tiendas del **Emporio Comercial de Gamarra** (La Victoria, Lima). Funciona en el celular, se instala en la pantalla de inicio y tiene un mapa con estilo inspirado en Waze.

## Pantallas

| Pantalla | Qué hace |
|---|---|
| **Mapa** (`#/mapa`) | Mapa vectorial con estilo tipo Waze (modo día/noche y vista 3D). Pines por tipo de producto, zona del emporio marcada, Estación Gamarra del Metro, tu ubicación con cono de dirección, reportes de la comunidad (ofertas, mucha gente, obras, serenazgo…), botón naranja para reportar, ruta a pie real y navegación simulada paso a paso. |
| **Buscar** (`#/buscar`) | Búsqueda por texto o voz de **tiendas o productos** (para comparar precios entre stands), 12 tipos de producto, ofertas del día, filtros (por mayor, por menor, abierto ahora, ★ 4,5+), orden por cercanía / precio / valoración / reseñas y “Ver en mapa”. |
| **Detalle de tienda** (`#/tienda/<id>`) | Nombre, categorías, dirección exacta (calle, número, galería, piso y stand), mini‑mapa, botón **Abrir en Google Maps** y **Cómo llegar con Google Maps**, botón **WhatsApp** que abre el chat de la tienda con un mensaje listo (incluye lo que tengas en el carrito de esa tienda), **catálogo** tipo tienda online, horario, medios de pago y reseñas (con resumen, orden y formulario para escribir una). |
| **Ficha de producto** (`#/tienda/<id>?p=<producto>`) | Ilustración que cambia con el color, precio por menor y por mayor (tabla por cantidad), colores, tallas, cantidad con atajos (media docena, docena), material, stock y botón **Agregar al pedido**. |
| **Pedido** (`#/pedido`) | Carrito agrupado por tienda. Aplica el precio por mayor solo, avisa cuánto falta para llegar al mayor, muestra el ahorro y permite **separar el pedido** (pagas al recoger) o **comprar con Yape**: escribes tu celular, apruebas la notificación en tu app Yape y la app detecta el pago y muestra **¡Pago realizado!** con el código de recojo; la constancia llega al correo. |
| **Guardados** (`#/guardados`) | Tiendas marcadas con el corazón. |
| **Galería por pisos** (`#/mapa?galeria=1`) | Simulación de un edificio de 5 pisos con 10 stands por piso. Al acercarte se ve el plano del piso elegido (stands por color de categoría, escaleras, ascensor, SS.HH., ingreso y salida) y una barra para cambiar de piso. En 3D los pisos de abajo se ven macizos, el actual abierto con sus stands y los de arriba como vidrio. Cada stand tiene ficha con piso, número, cómo llegar dentro de la galería y ruta a pie hasta el ingreso. El número tras `galeria=` abre ese piso. |

## Probarla en tu computadora

```bash
git clone https://github.com/ferdango/ubi_gamarra.git
cd ubi_gamarra
python3 -m http.server 5173
```

Abre <http://localhost:5173>. En una pantalla ancha se muestra dentro de un marco de celular; en el celular ocupa toda la pantalla.

Para instalarla en el celular hay que publicarla en un hosting con **HTTPS** (GitHub Pages, Netlify, Vercel, Cloudflare Pages…). Son archivos estáticos: basta con subir la carpeta tal cual.

## Estructura

```
index.html            esqueleto de las pantallas
css/app.css           estilos (tokens de color, modo noche, marco de celular)
js/catalog.js         tipos de producto, zona del emporio, estación y reportes demo
js/data.js            tiendas y reseñas (datos de demostración)
js/galeria.js         galería de varios pisos simulada: contorno, pisos y stands
js/mapstyle.js        estilo de mapa tipo Waze (día y noche)
js/garments.js        ilustraciones SVG de productos que se pintan con el color elegido
js/payments.js        pagos con Yape vía ProntoPaga (modo demo o modo api con tu backend)
docs/                 integración real con ProntoPaga
js/app.js             lógica: rutas internas, mapa, búsqueda, detalle, catálogo, pedido, reseñas, reportes
sw.js                 service worker (funciona sin conexión y guarda las teselas visitadas)
manifest.webmanifest  datos de instalación (nombre, íconos, colores)
icons/                íconos de la app
```

## Editar o agregar tiendas

Cada tienda en `js/data.js` tiene esta forma:

```js
{
  "id": "denim-inka",                       // se usa en la URL #/tienda/denim-inka
  "nombre": "Denim Inka",
  "categorias": ["jeans"],                  // ids de js/catalog.js; la primera define el color y el ícono
  "descripcion": "…",
  "direccion": { "calle": "Jr. Antonio Bazo", "numero": "1011",
                 "interior": "Galería Hilos de Oro, 2.º piso, stand 214",
                 "distrito": "La Victoria", "ciudad": "Lima" },
  "lat": -12.068496, "lng": -77.013783,     // coordenadas exactas para el pin y Google Maps
  "productos": [{
    "id": "jean-mom-dama", "nombre": "Jean mom dama",
    "tipo": "jean",                        // ilustración (ver js/garments.js)
    "cat": "jeans",                        // tipo de producto para la búsqueda
    "precio": 38, "precioMayor": 33,       // precioMayor null = solo por menor
    "minMayor": 6, "unidad": "unidad",      // unidad, kilo, metro, docena…
    "tallas": ["26", "28", "30"],
    "colores": [{ "n": "Azul clásico", "hex": "#2F5D9E" }],
    "material": "Denim stretch 12 oz", "stock": 120, "vendidos": 340,
    "etiqueta": "Oferta", "precioAntes": 48  // opcionales: Más vendido, Nuevo u Oferta
  }],
  "venta": { "mayor": true, "menor": true, "minimoMayor": "media docena" },
  "horario": [[600, 960], [540, 1140], …],  // domingo a sábado, minutos desde la medianoche; null = cerrado
  "pagos": ["Efectivo", "Yape", "Plin", "Tarjeta"],
  "whatsapp": "51987654321",              // 51 + 9 dígitos; null = usa UBI_WHATSAPP_DEMO
  "desde": 2012, "verificada": true,
  "resenas": [{ "autor": "María L.", "estrellas": 5, "fecha": "2026-10-20", "texto": "…" }]
}
```

Tip: en Google Maps, mantén presionado el punto exacto de la tienda y copia las coordenadas para `lat` y `lng`.

Las tiendas demo no tienen WhatsApp propio (`"whatsapp": null`). Para probar el botón, pon un número de prueba en `window.UBI_WHATSAPP_DEMO` (`js/catalog.js`): todas las tiendas demo abrirán ese chat. Si está vacío, el botón avisa que la tienda aún no tiene WhatsApp.

## Galería de varios pisos (simulación)

`js/galeria.js` describe un edificio: el contorno (4 esquinas), la altura de cada piso, el horario y, por piso, un tema y 10 stands (`[nombre, categoría, descripción]` o `null` si está libre). La app arma el plano sola: vestíbulo con escalera mecánica al frente, 5 stands a cada lado del pasillo y, al fondo, escaleras, ascensor y SS.HH. Los stands se numeran por piso (101–110, 201–210…): del 1 al 5 a la derecha entrando y del 6 al 10 a la izquierda, de fondo a frente.

El contorno es el de un edificio real de OpenStreetMap (Jr. San Cristóbal 1580); el nombre "Galería Modelo", los stands y sus tiendas son ficticios. Para usar otro edificio, cambia `esquinas` y `teselaId` (id del edificio en las teselas de OpenFreeMap, que se oculta para no duplicarlo; en un edificio que en OSM es una vía es el id de la vía × 10 + 2).

## Datos y servicios

- **Tiendas, precios, horarios y reseñas: ficticios** (demo). Las direcciones se ubicaron sobre calles y numeración reales de Gamarra tomadas de OpenStreetMap.
- Mapa: teselas vectoriales gratuitas de [OpenFreeMap](https://openfreemap.org) (sin API key) con MapLibre GL JS.
- Calles, numeración y zona del emporio: © colaboradores de [OpenStreetMap](https://www.openstreetmap.org/copyright).
- Rutas a pie: servidor público OSRM de FOSSGIS (`routing.openstreetmap.de`). Si no responde, se dibuja una línea recta aproximada.
- Las reseñas, reportes, guardados, pedidos y puntos que crea el usuario se guardan solo en su dispositivo (`localStorage`). Separar un pedido es una simulación: no se envía a ninguna tienda.

## Pagos con Yape (ProntoPaga · Yape One Shot)

El pago funciona en **modo demo**: simula la notificación de Yape y la aprobación, y no cobra nada. Para cobrar de verdad hace falta un backend propio con las credenciales de ProntoPaga. La app ya trae el cliente listo: solo hay que cambiar `modo` y `apiBase` en `js/payments.js`. Detalle del flujo, contrato de la API y lista de lo que hay que pedirle a ProntoPaga: [docs/integracion-prontopaga.md](docs/integracion-prontopaga.md).

## Para pasar de prototipo a producto

- Base de datos real de tiendas (p. ej. Supabase) con panel para que cada tienda edite su ficha.
- Reseñas y reportes compartidos entre usuarios, con moderación y cuentas.
- Servidor de rutas propio o con contrato (el servidor público OSRM no es para producción).
- Fotos reales de cada tienda y de cada producto (hoy son ilustraciones).
- Pedidos reales: aviso a la tienda (por ejemplo, WhatsApp Business) y backend de pagos con ProntoPaga.
