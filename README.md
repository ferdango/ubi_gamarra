# UbiGamarra · prototipo PWA

Web que se comporta como app para encontrar tiendas del **Emporio Comercial de Gamarra** (La Victoria, Lima). Funciona en el celular, se instala en la pantalla de inicio y tiene un mapa con estilo inspirado en Waze.

## Pantallas

| Pantalla | Qué hace |
|---|---|
| **Mapa** (`#/mapa`) | Mapa vectorial con estilo tipo Waze (modo día/noche y vista 3D). Pines por tipo de producto, zona del emporio marcada, Estación Gamarra del Metro, tu ubicación con cono de dirección, reportes de la comunidad (ofertas, mucha gente, obras, serenazgo…), botón naranja para reportar, ruta a pie real y navegación simulada paso a paso. |
| **Buscar** (`#/buscar`) | Búsqueda por texto o voz, 12 tipos de producto, filtros (por mayor, por menor, abierto ahora, ★ 4,5+), orden por cercanía / valoración / reseñas y “Ver en mapa”. |
| **Detalle de tienda** (`#/tienda/<id>`) | Nombre, categorías, dirección exacta (calle, número, galería, piso y stand), mini‑mapa, botón **Abrir en Google Maps** y **Cómo llegar con Google Maps**, productos con precios, horario, medios de pago y reseñas (con resumen, orden y formulario para escribir una). |
| **Guardados** (`#/guardados`) | Tiendas marcadas con el corazón. |

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
js/mapstyle.js        estilo de mapa tipo Waze (día y noche)
js/app.js             lógica: rutas internas, mapa, búsqueda, detalle, reseñas, reportes
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
  "productos": [{ "nombre": "Jean mom dama", "desde": 38 }],
  "venta": { "mayor": true, "menor": true, "minimoMayor": "media docena" },
  "horario": [[600, 960], [540, 1140], …],  // domingo a sábado, minutos desde la medianoche; null = cerrado
  "pagos": ["Efectivo", "Yape", "Plin", "Tarjeta"],
  "desde": 2012, "verificada": true,
  "resenas": [{ "autor": "María L.", "estrellas": 5, "fecha": "2026-10-20", "texto": "…" }]
}
```

Tip: en Google Maps, mantén presionado el punto exacto de la tienda y copia las coordenadas para `lat` y `lng`.

## Datos y servicios

- **Tiendas, precios, horarios y reseñas: ficticios** (demo). Las direcciones se ubicaron sobre calles y numeración reales de Gamarra tomadas de OpenStreetMap.
- Mapa: teselas vectoriales gratuitas de [OpenFreeMap](https://openfreemap.org) (sin API key) con MapLibre GL JS.
- Calles, numeración y zona del emporio: © colaboradores de [OpenStreetMap](https://www.openstreetmap.org/copyright).
- Rutas a pie: servidor público OSRM de FOSSGIS (`routing.openstreetmap.de`). Si no responde, se dibuja una línea recta aproximada.
- Las reseñas, reportes, guardados y puntos que crea el usuario se guardan solo en su dispositivo (`localStorage`).

## Para pasar de prototipo a producto

- Base de datos real de tiendas (p. ej. Supabase) con panel para que cada tienda edite su ficha.
- Reseñas y reportes compartidos entre usuarios, con moderación y cuentas.
- Servidor de rutas propio o con contrato (el servidor público OSRM no es para producción).
- Fotos reales de cada tienda y catálogo de productos.
