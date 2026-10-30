/*
 * Shared config + helpers for the conversion-focused redesign pages.
 *
 * IMPORTANT: Dues in CONFIG.plans are PLACEHOLDERS. AAA Western & Central NY
 * prices by ZIP code, so wire `getPlanPrice` to the real rating service (or
 * replace the numbers) before launch. Everything that displays a price reads
 * from here, so this is the only place to change.
 */
window.AAA = (function () {
  const CONFIG = {
    phones: {
      membership: "(800) 836-2582",
      insurance: "(888) 671-7044",
    },
    // Where lead / join forms POST. Leave null to run in demo mode (logs to console).
    endpoints: {
      join: null,
      travelLead: null,
      insuranceLead: null,
    },
    // Hand-off to the existing official join flow until a real checkout endpoint exists.
    officialJoinUrl: "https://westerncentralnyaaa.com/membership/join",
    // Associate dues + one-time enrollment fee. PLACEHOLDERS.
    associatePrice: { basic: 35, plus: 45, premier: 65 },
    enrollmentFee: 15,
    monthlyFee: 1, // $1/mo processing fee on monthly plan (per club's payment-options page)
    plans: {
      basic: {
        name: "Basic",
        price: 69, // PLACEHOLDER
        tagline: "Around-town peace of mind",
        tow: "Tows up to 5 miles",
        towMiles: 5,
        features: [
          "4 roadside calls / year",
          "Towing up to 5 miles",
          "Battery jump & flat-tire change",
          "Lockout service",
          "Fuel delivery",
          "All member discounts & travel perks",
        ],
        missing: ["Long-distance towing", "Free rental car day"],
      },
      plus: {
        name: "Plus",
        price: 99, // PLACEHOLDER
        tagline: "Road trips & daily commutes",
        tow: "Tows up to 100 miles",
        towMiles: 100,
        popular: true,
        features: [
          "4 roadside calls / year",
          "Towing up to 100 miles",
          "Battery, tire, lockout & fuel",
          "Higher lockout & locksmith coverage",
          "All member discounts & travel perks",
        ],
        missing: ["200-mile tow", "Free rental car day"],
      },
      premier: {
        name: "Premier",
        price: 134, // PLACEHOLDER
        tagline: "Maximum coverage, every mile",
        tow: "One tow up to 200 miles",
        towMiles: 200,
        features: [
          "4 roadside calls / year",
          "One tow up to 200 miles + 100-mile tows",
          "Free 1-day rental car after a local breakdown",
          "Battery, tire, lockout & fuel",
          "All member discounts & travel perks",
        ],
        missing: [],
      },
    },
  };

  // Hook for ZIP-based pricing. Returns a Promise so a real API can drop in.
  function getPlanPrice(planKey /*, zip */) {
    return Promise.resolve(CONFIG.plans[planKey].price);
  }

  const money = (n, cents = false) =>
    "$" + (cents ? n.toFixed(2) : Math.round(n).toLocaleString());

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function header(active) {
    const links = [
      ["membership.html", "Membership"],
      ["travel.html", "Travel"],
      ["insurance.html", "Insurance"],
    ];
    const nav = links
      .map(([href, label]) => `<a href="${href}"${label === active ? ' aria-current="page"' : ""}>${label}</a>`)
      .join("");
    const phone = active === "Insurance" ? CONFIG.phones.insurance : CONFIG.phones.membership;
    return `
      <header class="site-header">
        <div class="container">
          <a class="logo" href="index.html"><span class="logo-mark">AAA</span><span class="logo-text">Western &amp;<br>Central New York</span></a>
          <nav class="nav" aria-label="Primary">${nav}</nav>
          <div class="header-actions">
            <a class="header-phone" href="tel:${phone.replace(/\D/g, "")}">📞 ${phone}</a>
            ${active === "Join" ? "" : '<a class="btn btn-primary btn-sm" href="join.html" data-track="header_join">Join AAA</a>'}
          </div>
        </div>
      </header>`;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div><strong style="color:#fff">AAA Western &amp; Central New York</strong><br>Serving members since 1900.</div>
          <div>Membership help: <a href="tel:8008362582">${CONFIG.phones.membership}</a><br>Insurance quotes: <a href="tel:8886717044">${CONFIG.phones.insurance}</a></div>
          <div class="small" style="max-width:420px">Insurance is not included in AAA membership dues; separate costs apply. Insurance sold through AAA Members Insurance Agency of Western &amp; Central New York, Inc.</div>
        </div>
      </footer>`;
  }

  function mountChrome(active) {
    document.body.insertAdjacentHTML("afterbegin", header(active));
    // Footer must wait for the page body, since this runs from the top of <body>.
    const addFooter = () => document.body.insertAdjacentHTML("beforeend", footer() + '<div class="toast" role="status" aria-live="polite"></div>');
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addFooter);
    else addFooter();
  }

  function toast(msg) {
    const t = $(".toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // Show the sticky CTA once the given element scrolls out of view.
  function stickyAfter(triggerEl, barEl) {
    if (!triggerEl || !barEl) return;
    new IntersectionObserver(([e]) => barEl.classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0)).observe(triggerEl);
  }

  // Minimal analytics shim: pushes to dataLayer if GTM is present.
  function track(event, data = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  }
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-track]");
    if (el) track("cta_click", { id: el.dataset.track });
  });

  function submitLead(kind, payload) {
    track("lead_submit", { kind });
    const url = CONFIG.endpoints[kind];
    if (!url) {
      console.info(`[demo] ${kind} lead`, payload);
      return new Promise((r) => setTimeout(r, 600));
    }
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((r) => {
      if (!r.ok) throw new Error("Request failed");
    });
  }

  // Validate required fields inside a container; returns true when valid.
  function validate(root) {
    let ok = true;
    $$("[required]", root).forEach((input) => {
      const field = input.closest(".field");
      let valid = input.type === "checkbox" ? input.checked : input.value.trim() !== "";
      if (valid && input.type === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      if (valid && input.dataset.zip !== undefined) valid = /^\d{5}$/.test(input.value);
      if (valid && input.type === "tel") valid = input.value.replace(/\D/g, "").length >= 10;
      if (field) field.classList.toggle("has-error", !valid);
      if (!valid) ok = false;
    });
    // Radio groups marked data-required-group
    $$("[data-required-group]", root).forEach((group) => {
      const checked = $("input:checked", group);
      const field = group.closest(".field");
      if (field) field.classList.toggle("has-error", !checked);
      if (!checked) ok = false;
    });
    if (!ok) {
      const first = $(".has-error", root);
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return ok;
  }

  // Remember form inputs across visits so abandoners can pick up where they left off.
  function persist(form, key) {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      Object.entries(saved).forEach(([name, val]) => {
        $$(`[name="${name}"]`, form).forEach((el) => {
          if (el.type === "radio" || el.type === "checkbox") el.checked = Array.isArray(val) ? val.includes(el.value) : el.value === val;
          else el.value = val;
        });
      });
    } catch (_) {}
    form.addEventListener("input", () => {
      try {
        const data = {};
        new FormData(form).forEach((v, k) => {
          if (data[k] !== undefined) data[k] = [].concat(data[k], v);
          else data[k] = v;
        });
        localStorage.setItem(key, JSON.stringify(data));
      } catch (_) {}
    });
  }

  function formData(form) {
    const data = {};
    new FormData(form).forEach((v, k) => {
      if (data[k] !== undefined) data[k] = [].concat(data[k], v);
      else data[k] = v;
    });
    return data;
  }

  return { CONFIG, getPlanPrice, money, $, $$, mountChrome, toast, stickyAfter, track, submitLead, validate, persist, formData };
})();
