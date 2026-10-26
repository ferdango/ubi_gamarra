// Pagos con Yape a través de ProntoPaga (Yape One Shot).
// El cliente solo escribe su celular: le llega una notificación en su app Yape con el monto listo, la aprueba
// y la app detecta el pago consultando el estado. Las credenciales de ProntoPaga nunca van en el navegador:
// en modo "api" la app habla con tu backend (ver docs/integracion-prontopaga.md).

(function () {
  const CONFIG = {
    modo: 'demo',     // 'demo' simula todo en el navegador · 'api' usa tu backend
    apiBase: '',      // p. ej. 'https://<proyecto>.supabase.co/functions/v1/yape'
    vencimientoMin: 5, // minutos que dura la solicitud de pago en Yape
    demoAprobarEnSeg: 9,
  };

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // ---------------------------------------------------------------- modo demo
  const demo = new Map();
  const demoApi = {
    async createYapePayment({ monto }) {
      await wait(700);
      const id = 'demo_' + Date.now().toString(36);
      const now = Date.now();
      demo.set(id, { id, monto, estado: 'pendiente', creado: now, aprobarEn: now + CONFIG.demoAprobarEnSeg * 1000, venceEn: now + CONFIG.vencimientoMin * 60000 });
      return { id, estado: 'pendiente', venceEn: new Date(now + CONFIG.vencimientoMin * 60000).toISOString() };
    },
    async getPayment(id) {
      await wait(250);
      const p = demo.get(id);
      if (!p) return { id, estado: 'vencido' };
      const now = Date.now();
      if (p.estado === 'pendiente' && p.aprobarEn && now >= p.aprobarEn) {
        p.estado = 'pagado';
        p.operacion = String(Math.floor(10000000 + Math.random() * 89999999));
        p.pagadoEn = new Date().toISOString();
      } else if (p.estado === 'pendiente' && now >= p.venceEn) {
        p.estado = 'vencido';
      }
      return { id, estado: p.estado, operacion: p.operacion, pagadoEn: p.pagadoEn, motivo: p.motivo };
    },
    async cancelPayment(id) {
      const p = demo.get(id);
      if (p && p.estado === 'pendiente') p.estado = 'cancelado';
      return { id, estado: 'cancelado' };
    },
    // Solo en la demo: imita lo que la persona hace en su app Yape
    simulate(id, accion) {
      const p = demo.get(id);
      if (!p || p.estado !== 'pendiente') return;
      if (accion === 'aprobar') p.aprobarEn = Date.now();
      if (accion === 'rechazar') { p.estado = 'rechazado'; p.motivo = 'Rechazaste la solicitud en Yape.'; }
      if (accion === 'detener') p.aprobarEn = null;
    },
  };

  // ---------------------------------------------------------------- modo api (tu backend)
  async function call(path, options) {
    const res = await fetch(CONFIG.apiBase.replace(/\/$/, '') + path, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.mensaje || 'No pudimos comunicarnos con el servicio de pagos.');
    return data;
  }
  const httpApi = {
    createYapePayment: (body) => call('/pagos', { method: 'POST', body: JSON.stringify(body) }),
    getPayment: (id) => call('/pagos/' + encodeURIComponent(id), { method: 'GET' }),
    cancelPayment: (id) => call('/pagos/' + encodeURIComponent(id) + '/cancelar', { method: 'POST' }),
    simulate() {},
  };

  const usarApi = CONFIG.modo === 'api' && CONFIG.apiBase;
  window.UbiPayments = { config: CONFIG, modo: usarApi ? 'api' : 'demo', ...(usarApi ? httpApi : demoApi) };
})();
