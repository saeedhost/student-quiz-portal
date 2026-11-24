/* =========================================================
   QuizPortal — shared helpers (used by index.html & admin.html)
   ========================================================= */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzw9NVQ9GwmAruitPse9wkIpgeVKehh-4jSLmFhr5fud6k0EgeOIJs3GxJNfIJg-8dqBg/exec";

/* ---------- SVG icon sprite (injected once, referenced with <use href="#i-name">) ---------- */
const ICON_PATHS = {
  logo: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  plus: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
  add: '<path d="M12 5v14M5 12h14"/>',
  list: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  error: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  success: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  json: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/>',
  edit3: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
  trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  hourglass: '<path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>'
};

(function injectSprite() {
  const symbols = Object.entries(ICON_PATHS)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("");
  const wrap = document.createElement("div");
  wrap.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${symbols}</svg>`;
  document.body.prepend(wrap.firstChild);
  const bar = document.createElement("div");
  bar.id = "topProgress";
  document.body.appendChild(bar);
})();

const QP = (() => {
  let serverOffset = 0;   // serverTime − clientTime (only applied when the device clock is clearly wrong)
  let busy = 0;

  const icon = (name, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const now = () => Date.now() + serverOffset;

  function syncClock(serverTime) {
    const t = new Date(serverTime).getTime();
    if (isNaN(t)) return;
    const diff = t - Date.now();
    serverOffset = Math.abs(diff) > 15000 ? diff : 0;
  }

  function setBusy(delta) {
    busy = Math.max(0, busy + delta);
    document.documentElement.classList.toggle("is-busy", busy > 0);
  }

  async function request(url, options, retries) {
    setBusy(1);
    try {
      for (let attempt = 0; ; attempt++) {
        try {
          const res = await fetch(url, options);
          if (!res.ok) throw new Error(`Server responded with ${res.status}`);
          const data = await res.json();
          if (data && data.serverTime) syncClock(data.serverTime);
          return data;
        } catch (err) {
          if (attempt >= retries) {
            return {
              status: "error",
              network: true,
              message: navigator.onLine ? "Could not reach the server. Please try again." : "You are offline. Please check your internet connection."
            };
          }
          await sleep(900 * (attempt + 1));
        }
      }
    } finally {
      setBusy(-1);
    }
  }

  const get = (params, retries = 1) =>
    request(`${SCRIPT_URL}?${new URLSearchParams(params)}`, { method: "GET" }, retries);

  const post = (payload, retries = 0) =>
    request(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    }, retries);

  /* Stale-while-revalidate GET: renders cached data instantly, then refreshes from the server. */
  function cachedGet(params, onData, ttlMs = 5 * 60 * 1000) {
    const key = "qp_cache:" + JSON.stringify(params);
    let hadCache = false;
    try {
      const c = JSON.parse(sessionStorage.getItem(key) || "null");
      if (c && Date.now() - c.t < ttlMs) { hadCache = true; onData(c.d, { cached: true }); }
    } catch (e) { /* ignore */ }
    return get(params).then(d => {
      if (d.status === "success") {
        try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d })); } catch (e) { /* quota */ }
        onData(d, { cached: false });
      } else if (!hadCache) {
        onData(d, { cached: false });
      } else {
        toast(d.message || "Could not refresh data.", "warning");
      }
      return d;
    });
  }

  function clearCache() {
    Object.keys(sessionStorage).filter(k => k.startsWith("qp_cache:")).forEach(k => sessionStorage.removeItem(k));
  }

  /* ---------- UI helpers ---------- */
  function esc(v) {
    return String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function toast(msg, type = "info", ms = 4200) {
    let wrap = document.getElementById("toastWrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.id = "toastWrap";
      wrap.className = "toast-wrap";
      wrap.setAttribute("role", "status");
      wrap.setAttribute("aria-live", "polite");
      document.body.appendChild(wrap);
    }
    const el = document.createElement("div");
    el.className = `toast toast-${type}`;
    const ic = { success: "success", error: "error", warning: "warning", info: "info" }[type] || "info";
    el.innerHTML = `<span class="toast-icon">${icon(ic)}</span><span class="toast-msg"></span><button type="button" class="toast-close" aria-label="Dismiss">&times;</button>`;
    el.querySelector(".toast-msg").textContent = msg;
    const remove = () => { el.classList.add("leaving"); setTimeout(() => el.remove(), 250); };
    el.querySelector(".toast-close").onclick = remove;
    wrap.appendChild(el);
    if (ms) setTimeout(remove, ms);
  }

  async function withLoading(btn, fn) {
    if (btn) { btn.disabled = true; btn.classList.add("is-loading"); }
    try { return await fn(); }
    finally { if (btn) { btn.disabled = false; btn.classList.remove("is-loading"); } }
  }

  const bootAt = performance.now();
  function hidePreloader() {
    const p = document.getElementById("preloader");
    if (!p || p.classList.contains("done")) return;
    const wait = Math.max(0, 280 - (performance.now() - bootAt));
    setTimeout(() => {
      if (p.classList.contains("done")) return;
      p.classList.add("done");
      setTimeout(() => p.remove(), 500);
    }, wait);
  }
  // Safety net: never leave the preloader on screen forever
  setTimeout(hidePreloader, 10000);

  /* ---------- Native <dialog> modals ---------- */
  // Light-dismiss fallback for browsers without `closedby` support (Safari)
  function enableLightDismiss(dialog) {
    if ("closedBy" in HTMLDialogElement.prototype) return;
    dialog.addEventListener("click", e => {
      if (e.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      const inside = r.top <= e.clientY && e.clientY <= r.bottom && r.left <= e.clientX && e.clientX <= r.right;
      if (!inside) dialog.close();
    });
  }

  let dlgSeq = 0;
  function confirmDialog({ title, message = "", html = "", confirmText = "Confirm", cancelText = "Cancel", tone = "primary", iconName = "info" }) {
    return new Promise(resolve => {
      const id = `dlg-title-${++dlgSeq}`;
      const d = document.createElement("dialog");
      d.className = "modal modal-sm";
      d.setAttribute("aria-labelledby", id);
      const btnClass = tone === "danger" ? "btn-danger" : tone === "success" ? "btn-success" : "btn-primary";
      d.innerHTML = `
        <form method="dialog" class="modal-box">
          <div class="modal-header">
            <div class="modal-icon ${tone === "danger" ? "danger" : tone === "warning" ? "warning" : ""}">${icon(iconName)}</div>
            <h1 id="${id}" style="font-size:1.1rem;flex:1"></h1>
          </div>
          <div class="modal-body"><p class="dlg-msg muted"></p>${html}</div>
          <div class="modal-actions">
            <button value="cancel" class="btn btn-outline" autofocus>${esc(cancelText)}</button>
            <button value="ok" class="btn ${btnClass}">${esc(confirmText)}</button>
          </div>
        </form>`;
      d.querySelector(`#${id}`).textContent = title;
      const msgEl = d.querySelector(".dlg-msg");
      if (message) msgEl.textContent = message; else msgEl.remove();
      d.addEventListener("close", () => {
        const ok = d.returnValue === "ok";
        d.returnValue = "";
        resolve(ok);
        setTimeout(() => d.remove(), 50);
      });
      document.body.appendChild(d);
      d.showModal();
    });
  }

  /* ---------- Formatting ---------- */
  function fmtDateTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    if (isNaN(d)) return "—";
    return d.toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
  }

  function fmtDuration(ms) {
    if (ms <= 0) return "0s";
    const s = Math.floor(ms / 1000);
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    if (d) return `${d}d ${h}h`;
    if (h) return `${h}h ${String(m).padStart(2, "0")}m`;
    if (m) return `${m}m ${String(sec).padStart(2, "0")}s`;
    return `${sec}s`;
  }

  function fmtClock(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    const mm = String(m).padStart(2, "0"), ss = String(sec).padStart(2, "0");
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  // Value for <input type="datetime-local"> in the user's local timezone
  function toLocalInput(date) {
    const d = new Date(date);
    const pad = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function initials(name) {
    return String(name || "?").trim().split(/\s+/).slice(0, 2).map(p => p[0]).join("").toUpperCase() || "?";
  }

  function statusBadge(status) {
    const cls = status === "Active" ? "badge-active" : status === "Scheduled" ? "badge-scheduled" : "badge-expired";
    return `<span class="badge ${cls}">${esc(status)}</span>`;
  }

  function resultBadge(status) {
    const cls = status === "Correct" ? "badge-active" : status === "Wrong" ? "badge-expired" : "badge-warning";
    return `<span class="badge ${cls}">${esc(status)}</span>`;
  }

  function download(filename, content, mime = "text/plain") {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 200);
  }

  function toCSV(rows) {
    return "\ufeff" + rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  }

  function uid() {
    return (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
  }

  function generateQuizCode(len = 6) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let out = "";
    for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  }

  /* ---------- Printable PDF generator (lazy-loads jsPDF, falls back to clean browser print) ---------- */
  let jsPdfPromise = null;
  function loadJsPdf() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if (!jsPdfPromise) {
      jsPdfPromise = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js";
        s.async = true;
        s.onload = () => (window.jspdf && window.jspdf.jsPDF ? resolve(window.jspdf.jsPDF) : reject(new Error("jsPDF failed")));
        s.onerror = () => reject(new Error("Could not load PDF library"));
        document.head.appendChild(s);
      });
    }
    return jsPdfPromise;
  }

  function openPrintFallback({ quizName, subtitle, items, includeAnswers, includeStudentAnswers }) {
    let sheet = document.getElementById("printSheet");
    if (!sheet) {
      sheet = document.createElement("div");
      sheet.id = "printSheet";
      document.body.appendChild(sheet);
    }
    sheet.innerHTML = `
      <div class="ps-head">
        <h1>${esc(quizName || "Quiz MCQs")}</h1>
        <div class="ps-meta">${subtitle.map(s => `<span>${esc(s)}</span>`).join("")}</div>
      </div>
      ${items.map((it, idx) => `
        <div class="ps-q">
          <div class="ps-qt">${idx + 1}. ${esc(it.question)}</div>
          ${Array.isArray(it.options) && it.options.length ? `<ul class="ps-opts">${it.options.map((o, k) => `<li><strong>${String.fromCharCode(65 + k)}.</strong> ${esc(o)}</li>`).join("")}</ul>` : ""}
          ${includeStudentAnswers && it.selected ? `<div style="font-size:9.5pt;color:#334155">Your Answer: <strong>${esc(it.selected)}</strong>${it.status ? ` (${esc(it.status)})` : ""}</div>` : ""}
          ${includeAnswers && it.correct ? `<div class="ps-ans">Correct Answer: <strong>${esc(it.correct)}</strong></div>` : ""}
        </div>`).join("")}
    `;
    document.body.classList.add("printing-sheet");
    const cleanup = () => document.body.classList.remove("printing-sheet");
    window.addEventListener("afterprint", cleanup, { once: true });
    setTimeout(() => window.print(), 60);
    setTimeout(cleanup, 2500);
  }

  async function downloadQuizPdf({
    quizName = "Quiz",
    studentName = "",
    studentClass = "",
    date = "",
    obtainedMarks = null,
    totalMarks = null,
    items = [],
    includeAnswers = true,
    includeStudentAnswers = true,
    printOnly = false
  }) {
    if (!items.length) { toast("No MCQs available to export.", "warning"); return; }
    const subtitle = [];
    if (studentName) subtitle.push(`Student: ${studentName}${studentClass ? " (" + studentClass + ")" : ""}`);
    if (date) subtitle.push(`Date: ${fmtDateTime(date)}`);
    subtitle.push(`Total MCQs: ${items.length}`);
    if (includeAnswers && obtainedMarks !== null && totalMarks !== null) {
      const pct = totalMarks ? Math.round((obtainedMarks / totalMarks) * 100) : 0;
      subtitle.push(`Score: ${obtainedMarks} / ${totalMarks} (${pct}%)`);
    }

    if (printOnly) {
      openPrintFallback({ quizName, subtitle, items, includeAnswers, includeStudentAnswers });
      return;
    }

    let jsPDF;
    try {
      jsPDF = await loadJsPdf();
    } catch (e) {
      toast("Opening print-to-PDF view (PDF library offline).", "info");
      openPrintFallback({ quizName, subtitle, items, includeAnswers, includeStudentAnswers });
      return;
    }

    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const pw = doc.internal.pageSize.getWidth();
    const ph = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxW = pw - margin * 2;
    let y = 16;

    const ensureSpace = (needed) => {
      if (y + needed > ph - 18) { doc.addPage(); y = 18; }
    };

    // Header banner
    doc.setFillColor(79, 70, 229);
    doc.roundedRect(margin, y - 5, maxW, 20, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    const titleLines = doc.splitTextToSize(String(quizName), maxW - 10);
    doc.text(titleLines[0], margin + 5, y + 3);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(includeAnswers ? "QuizPortal — Printable MCQs & Answer Sheet" : "QuizPortal — Printable MCQs Practice Paper", margin + 5, y + 10);
    y += 22;

    // Metadata strip
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(9.5);
    const metaText = doc.splitTextToSize(subtitle.join("   |   "), maxW);
    doc.text(metaText, margin, y);
    y += metaText.length * 4.8 + 3;
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y, pw - margin, y);
    y += 7;

    // Questions
    items.forEach((it, idx) => {
      const qLines = doc.splitTextToSize(`${idx + 1}. ${String(it.question || "")}`, maxW);
      const optList = Array.isArray(it.options) ? it.options : [];
      const optBlocks = optList.map((o, k) => doc.splitTextToSize(`${String.fromCharCode(65 + k)}) ${String(o)}`, maxW - 6));
      let blockH = qLines.length * 5.2 + 2;
      optBlocks.forEach(lines => { blockH += lines.length * 4.5 + 1; });
      if (includeStudentAnswers && it.selected) blockH += 5.5;
      if (includeAnswers && it.correct) blockH += 5.5;
      blockH += 5;

      ensureSpace(Math.min(blockH, ph - 36));

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(15, 23, 42);
      qLines.forEach(line => { ensureSpace(6); doc.text(line, margin, y); y += 5.2; });
      y += 1;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.8);
      doc.setTextColor(51, 65, 85);
      optBlocks.forEach(lines => {
        ensureSpace(lines.length * 4.5 + 2);
        doc.text(lines, margin + 5, y);
        y += lines.length * 4.5 + 1;
      });

      if (includeStudentAnswers && it.selected) {
        const statusStr = it.status === "Not Solved" ? "Skipped" : (it.status || "");
        const stuLines = doc.splitTextToSize(`Your Answer: ${it.selected}${statusStr ? " [" + statusStr + "]" : ""}`, maxW - 4);
        ensureSpace(stuLines.length * 4.6 + 1);
        if (it.status === "Wrong") doc.setTextColor(185, 28, 28);
        else if (it.status === "Not Solved") doc.setTextColor(180, 83, 9);
        else doc.setTextColor(4, 120, 87);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.2);
        doc.text(stuLines, margin + 4, y);
        y += stuLines.length * 4.6 + 0.5;
      }

      if (includeAnswers && it.correct) {
        const corLines = doc.splitTextToSize(`Correct Answer: ${it.correct}`, maxW - 4);
        ensureSpace(corLines.length * 4.6 + 1);
        doc.setTextColor(4, 120, 87);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.2);
        doc.text(corLines, margin + 4, y);
        y += corLines.length * 4.6 + 0.5;
      }

      y += 2;
      doc.setDrawColor(226, 232, 240);
      doc.line(margin, y, pw - margin, y);
      y += 5;
    });

    // Footer with page numbers
    const pages = doc.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      doc.setPage(p);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(148, 163, 184);
      doc.text(`QuizPortal • ${String(quizName).slice(0, 50)}`, margin, ph - 9);
      doc.text(`Page ${p} of ${pages}`, pw - margin, ph - 9, { align: "right" });
    }

    const safe = String(quizName || "Quiz").replace(/[^a-zA-Z0-9_-]/g, "_");
    doc.save(`${safe}_${includeAnswers ? "MCQs_Answers" : "MCQs_Practice"}.pdf`);
  }

  function skeletonRows(cols, rows = 4) {
    return Array.from({ length: rows }, () =>
      `<tr class="sk-row">${Array.from({ length: cols }, () => `<td><div class="skeleton sk-line"></div></td>`).join("")}</tr>`
    ).join("");
  }

  function emptyState(title, text, iconName = "info") {
    return `<div class="empty"><div class="empty-ic">${icon(iconName, "ic-lg")}</div><h4>${esc(title)}</h4><p>${esc(text)}</p></div>`;
  }

  /* ---------- Sidebar / navigation drawer ---------- */
  function initShell() {
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".sidebar-close");
    const mq = window.matchMedia("(max-width: 960px)");
    if (!sidebar) return;

    const syncRole = () => {
      if (mq.matches) { sidebar.setAttribute("role", "dialog"); sidebar.setAttribute("aria-label", "Navigation menu"); }
      else { sidebar.removeAttribute("role"); sidebar.removeAttribute("aria-modal"); closeDrawer(false); }
    };
    function openDrawer() {
      body.classList.add("sidebar-open");
      sidebar.setAttribute("aria-modal", "true");
      if (main) main.inert = true;
      menuBtn && menuBtn.setAttribute("aria-expanded", "true");
      closeBtn && closeBtn.focus({ preventScroll: true });
    }
    function closeDrawer(restoreFocus = true) {
      if (!body.classList.contains("sidebar-open")) return;
      body.classList.remove("sidebar-open");
      sidebar.removeAttribute("aria-modal");
      if (main) main.inert = false;
      menuBtn && menuBtn.setAttribute("aria-expanded", "false");
      if (restoreFocus && menuBtn) menuBtn.focus();
    }
    menuBtn && menuBtn.addEventListener("click", openDrawer);
    closeBtn && closeBtn.addEventListener("click", () => closeDrawer());
    document.querySelector(".sidebar-backdrop")?.addEventListener("click", () => closeDrawer());
    document.addEventListener("keydown", e => { if (e.key === "Escape" && body.classList.contains("sidebar-open")) closeDrawer(); });
    sidebar.addEventListener("click", e => { if (e.target.closest(".nav-item") && mq.matches) closeDrawer(false); });
    mq.addEventListener("change", syncRole);
    syncRole();
  }

  return {
    icon, sleep, now, get, post, cachedGet, clearCache, esc, toast, withLoading, hidePreloader,
    confirmDialog, enableLightDismiss, fmtDateTime, fmtDuration, fmtClock, toLocalInput, initials,
    statusBadge, resultBadge, download, toCSV, uid, generateQuizCode, downloadQuizPdf,
    skeletonRows, emptyState, initShell
  };
})();
