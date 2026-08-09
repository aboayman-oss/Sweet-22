/* ============================================================
   SWEET 22 — script.js
   RTL Arabic birthday site for Habiba
   ============================================================ */

/* ════ CONTENT CONFIG — swap media here only ════════════════ */
const content = {
  hero: {
    name: "حبيبة",
    age: "22",
    tagline: "كل سنة وانتي طيبة يا اجمل حاجة حصلتلي"
  },

  openingLetter: [
    "من يوم ما دخلتي حياتي وانتي بتضحكي وضحكتك الحلوة دي خليت الدنيا دي كلها بقت شكل تاني خالص",
    "لسه فاكر أول مرة شفتك، في درس الجيولوجيا، وانا مش مصدق إزاي حبيت بنت من أول نظرة كدة... حتى الكروكس بتاعك عجبني!!",
    "من الواتساب للسناب شات، الكلام كان بيحلى كل يوم أكتر من اللي قبله،",
    "لحد ما بقينا مع بعض في 26 يونيو 2022، في نص امتحانات الثانوية العامة.",
    "دلوقتي بقالنا تقريبا 5 سنين، وانتي كل يوم بتثبتيلي إني اخترت صح.",
    "مش بس حبيبتي، إنتي أعز صحابي كمان، اللي أقدر أقعد معاها ساعات ومزهقش.",
    "كل سنة وانتي طيبة يا حبيبة."
  ],

  timelineTitle: "رحلتنا",
  timeline: [
    { date: "البداية", image: "timeline-1.jpg",
      caption: "شوية ذكريات" },
    { date: "26 يونيو 2022", image: "timeline-2.jpg",
      caption: "في نص ضغط الثانوية العامة، قررنا نبقى مع بعض...وده أحسن قرار في حياتي." },
    { date: "دلوقتي", image: "timeline-3.jpg",
      caption: "بقالنا تقريبا 5 سنين، وكل يوم بحبك أكتر من اليوم اللي قبله." }
  ],

  giftHuntTitle: "رحلة الهدايا",
  giftHunt: [
    { video: "gift-1.mp4", caption: "دورت كتير عشان ألاقيلك حاجة تناسبك..." },
    { video: "gift-2.mp4", caption: "يا مسهل..." },
    { video: "gift-3.mp4", caption: "وده آخر حاجة... يارب تعجبك زي ما انتي عاجباني." }
  ],

  reasonsTitle: "22 سبب بحبك عشانهم",
  reasons: [
    "ضحكتك العسل دي",
    "اعز صحابي",
    "الكروكس",
    "دمك خفيف",
    "دماغك حلوة",
    "باقية عليا",
    "ميتزهقش منك",
    "بتفهميني من غير ما اشرح (سعات)",
    "بتضحكي علي النكت البايخة بتاعتي",
    "جميلة",
    "الصبر عندك فوق الحدود",
    "مجتهدة مهما زادت المسؤليات",
    "قدرتي تحققي المعادلة الصعبة وتبقي حبيبتي واعز صحابي",
    "بتستحمليني (أحيانًا)",
    "عيشنا وكبرنا مع بعض",
    "بتدعميني حتى وانتي مش قادرة تدعمي نفسك.",
    "دكتورة قد الدنيا وعبقرية",
    "لسه بتحسسيني إني محظوظ إني اخترتك من أول يوم.",
    "برغم كل حاجة حصلت انتي لسة جنبي ومعايا",
    "اقصر مني",
    "بتخليني دايما متحمس للمستقبل",
    "عشان انتي حبيبة... وعمرك ما هتبقي حاجة عادية بالنسبالي."
  ],

  galleryTitle: "شوية ذكريات كمان",
  gallery: [
    "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg",
    "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg"
  ],

  ourMomentsTitle: "هحححح",
  ourMoments: [
    { video: "us-1.mp4", caption: "فاكرة؟" },
    { video: "us-2.mp4", caption: "عبقرية" }
  ],

  closingLetter: [
    "يا حبي",
    "داخلين اهو في 5 سنين.",
    "انهردة كبرتي سنة كمان، واحنا مع بعض",
    "كل سنة وانتي طيبة يا اجمل حاجة حصلتلي، وربنا يخليكي ليا ونكمل الطريق ده مع بعض.",
    "بحبك، والي جاي احلي واحلي، هااااانت😂❤️"
  ],

  footer: "كل سنة وانتي طيبة يا حبيبة 🎂❤️"
};

/* ════ VECTOR SVG ICONS DICTIONARY ═════════════════════════ */
const SVG_ICONS = {
  sparkleStar: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  rose: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a6 6 0 0 0-6 6c0 3.5 4 8 6 11 2-3 6-7.5 6-11a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
  giftBox: `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
  flower: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4z" opacity="0.6"/><path d="M12 12a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4z" opacity="0.6"/><path d="M4 12a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4z" opacity="0.6"/><path d="M12 12a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4z" opacity="0.6"/></svg>`,
  film: `<svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`,
  sparkleMini: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/></svg>`
};

/* ════ PIN GATE ══════════════════════════════════════════════ */
function initPinGate() {
  const CORRECT_PIN = '3009';
  const gate    = document.getElementById('pin-gate');
  const dots    = document.querySelectorAll('.pin-dot');
  const dotsWrap= document.getElementById('pin-dots');
  const errEl   = document.getElementById('pin-error');
  const pad     = document.getElementById('pin-pad');
  const curtain = document.getElementById('curtain');

  let entered = '';

  function updateDots() {
    dots.forEach((d, i) => {
      d.classList.toggle('filled', i < entered.length);
      d.classList.remove('success');
    });
  }

  function pushDigit(d) {
    if (entered.length >= 4) return;
    entered += d;
    updateDots();
    if (entered.length === 4) {
      setTimeout(check, 120);
    }
  }

  function pop() {
    if (!entered.length) return;
    entered = entered.slice(0, -1);
    updateDots();
    hideError();
  }

  function check() {
    if (entered === CORRECT_PIN) {
      // Turn dots green
      dots.forEach(d => d.classList.add('success'));
      // Unlock gate + open curtain + restore body scrolling
      setTimeout(() => {
        gate.classList.add('unlock');
        if (curtain) curtain.classList.add('open');
        document.body.classList.remove('pin-locked');

        setTimeout(() => {
          gate.style.display = 'none';
          if (curtain) curtain.style.display = 'none';
        }, 700);
      }, 400);
    } else {
      // Shake + error
      dotsWrap.classList.remove('shake');
      void dotsWrap.offsetWidth;       // reflow to restart animation
      dotsWrap.classList.add('shake');
      showError();
      setTimeout(() => {
        entered = '';
        updateDots();
        dotsWrap.classList.remove('shake');
      }, 500);
    }
  }

  function showError() {
    errEl.classList.add('show');
  }
  function hideError() {
    errEl.classList.remove('show');
  }

  // Numpad clicks
  pad.addEventListener('click', e => {
    const key = e.target.closest('.pin-key');
    if (!key) return;
    const digit = key.dataset.digit;
    if (digit !== undefined) {
      pushDigit(digit);
      hideError();
    }
  });

  // Clear/backspace button
  document.getElementById('pin-clear').addEventListener('click', pop);

  // Physical keyboard support
  document.addEventListener('keydown', function handler(e) {
    if (gate.style.display === 'none') {
      document.removeEventListener('keydown', handler);
      return;
    }
    if (e.key >= '0' && e.key <= '9') { pushDigit(e.key); hideError(); }
    if (e.key === 'Backspace') pop();
  });
}

/* ════ GIFT HUNT PIN GATE (1208) ═════════════════════════════ */
function initGiftPinGate() {
  const CORRECT_PIN = '1208';
  const vaultCard   = document.getElementById('gift-vault-card');
  const unlockedContent = document.getElementById('gift-unlocked-content');
  const dots        = document.querySelectorAll('#gift-pin-dots .pin-dot');
  const dotsWrap    = document.getElementById('gift-pin-dots');
  const errEl       = document.getElementById('gift-pin-error');
  const pad         = document.getElementById('gift-pin-pad');

  if (!vaultCard || !unlockedContent) return;

  let entered = '';

  function updateDots() {
    dots.forEach((d, i) => {
      d.classList.toggle('filled', i < entered.length);
      d.classList.remove('success');
    });
  }

  function pushDigit(d) {
    if (entered.length >= 4) return;
    entered += d;
    updateDots();
    if (entered.length === 4) {
      setTimeout(check, 120);
    }
  }

  function pop() {
    if (!entered.length) return;
    entered = entered.slice(0, -1);
    updateDots();
    hideError();
  }

  function check() {
    if (entered === CORRECT_PIN) {
      dots.forEach(d => d.classList.add('success'));
      vaultCard.classList.add('unlock');
      setTimeout(() => {
        vaultCard.style.display = 'none';
        unlockedContent.style.display = 'block';
      }, 580);
    } else {
      dotsWrap.classList.remove('shake');
      void dotsWrap.offsetWidth;
      dotsWrap.classList.add('shake');
      showError();
      setTimeout(() => {
        entered = '';
        updateDots();
        dotsWrap.classList.remove('shake');
      }, 500);
    }
  }

  function showError() {
    if (errEl) errEl.classList.add('show');
  }
  function hideError() {
    if (errEl) errEl.classList.remove('show');
  }

  if (pad) {
    pad.addEventListener('click', e => {
      const key = e.target.closest('.pin-key');
      if (!key) return;
      const digit = key.dataset.gdigit;
      if (digit !== undefined) {
        pushDigit(digit);
        hideError();
      }
    });
  }

  const clearBtn = document.getElementById('gift-pin-clear');
  if (clearBtn) clearBtn.addEventListener('click', pop);

  document.addEventListener('keydown', function(e) {
    if (vaultCard.style.display === 'none') return;

    const rect = vaultCard.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key >= '0' && e.key <= '9') { pushDigit(e.key); hideError(); }
    if (e.key === 'Backspace') pop();
  });
}

/* ════ FAST & RELIABLE PRELOADER ════════════════════════════ */
function initPreloader() {
  const preloader   = document.getElementById('preloader');
  const bar         = document.getElementById('preloader-bar');
  const pct         = document.getElementById('preloader-pct');
  const cakeFillRect= document.getElementById('cake-fill-rect');
  const flames      = document.querySelectorAll('.flame');

  // Track images primarily for fast & reliable preloader reveal
  const imgs = Array.from(document.querySelectorAll('img[data-preload]'));
  const total = imgs.length;

  let loaded = 0;
  let revealed = false;

  function updateProgress(p) {
    p = Math.min(100, Math.max(0, p));
    if (bar) bar.style.width = p + '%';
    if (cakeFillRect) {
      const fillHeight = (p / 100) * 45;
      cakeFillRect.setAttribute('height', fillHeight);
      cakeFillRect.setAttribute('y', 160 - fillHeight);
    }
    if (pct) pct.textContent = p + '%';

    const flameCount = flames.length;
    const litCount = Math.floor((p / 100) * flameCount);
    flames.forEach((f, i) => {
      if (i < litCount) f.style.opacity = '1';
    });
  }

  function revealSite() {
    if (revealed) return;
    revealed = true;

    updateProgress(100);
    flames.forEach(f => f.style.opacity = '1');

    setTimeout(() => {
      preloader.classList.add('hide');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 400);
  }

  // Safety fallback timeout — guarantee preloader resolves within 1.5s
  const safetyTimer = setTimeout(() => {
    revealSite();
  }, 1500);

  if (total === 0) {
    clearTimeout(safetyTimer);
    revealSite();
    return;
  }

  function onLoad() {
    loaded++;
    const p = Math.round((loaded / total) * 100);
    updateProgress(p);
    if (loaded >= total) {
      clearTimeout(safetyTimer);
      revealSite();
    }
  }

  imgs.forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    } else {
      img.addEventListener('load',  onLoad, { once: true });
      img.addEventListener('error', onLoad, { once: true });
    }
  });
}

/* ════ DOM BUILDERS ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('timeline-title-text').textContent = content.timelineTitle;
  document.getElementById('gift-title-text').textContent     = content.giftHuntTitle;
  document.getElementById('reasons-title-text').textContent  = content.reasonsTitle;
  document.getElementById('gallery-title-text').textContent  = content.galleryTitle;
  document.getElementById('moments-title-text').textContent  = content.ourMomentsTitle;

  buildHero();
  buildOpeningLetter();
  buildTimeline();
  buildGiftHunt();
  buildReasons();
  buildGallery();
  buildOurMoments();
  buildClosingLetter();
  buildFooter();

  initPinGate();
  initGiftPinGate();
  initPreloader();

  initAmbientCanvas();
  initIntersectionObserver();
  initHeroParallax();
  initRipple();
});

/* ── Hero ─────────────────────────────────────────────────── */
function buildHero() {
  document.getElementById('hero-name').textContent    = content.hero.name;
  document.getElementById('hero-age').textContent     = content.hero.age;
  document.getElementById('hero-tagline').textContent = content.hero.tagline;
}

/* ── Opening Letter ──────────────────────────────────────── */
function buildOpeningLetter() {
  const wrap = document.getElementById('letter-lines');
  content.openingLetter.forEach((line, i) => {
    const p = document.createElement('p');
    p.className = 'letter-line';
    p.textContent = line;
    p.style.transitionDelay = (i * 0.1) + 's';
    wrap.appendChild(p);
  });
}

/* ── Timeline ────────────────────────────────────────────── */
function buildTimeline() {
  const wrap = document.getElementById('timeline-items');
  const icons = [SVG_ICONS.sparkleStar, SVG_ICONS.heart, SVG_ICONS.rose];

  content.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item ' + (i % 2 === 0 ? 'reveal-left' : 'reveal-right');

    const dot = `<div class="timeline-dot">${icons[i] || SVG_ICONS.sparkleStar}</div>`;
    const imgSrc = 'assets/images/' + item.image;

    const card = `
      <div class="timeline-card">
        <div class="timeline-img-wrap">
          <img data-preload src="${imgSrc}" alt="${item.date}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="timeline-img-placeholder" style="display:none">
            ${SVG_ICONS.camera}<span>${item.image}</span>
          </div>
        </div>
        <div class="timeline-body">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-caption">${item.caption}</div>
        </div>
      </div>`;

    div.innerHTML = dot + card;
    wrap.appendChild(div);
  });
}

/* ── Gift Hunt ───────────────────────────────────────────── */
function buildGiftHunt() {
  const wrap       = document.getElementById('gift-steps');
  const dotsWrap   = document.getElementById('gift-dots');
  const nextBtn    = document.getElementById('gift-next-btn');
  let   currentStep = 0;

  content.giftHunt.forEach((item, i) => {
    const step = document.createElement('div');
    step.className = 'gift-step' + (i === 0 ? ' active' : '');
    step.id = 'gift-step-' + i;

    const src = 'assets/videos/' + item.video;
    const posterSrc = 'assets/images/gift-poster-' + (i + 1) + '.jpg';

    step.innerHTML = `
      <div class="gift-video-wrap">
        <video playsinline controls preload="none" poster="${posterSrc}">
          <source src="${src}" type="video/mp4">
        </video>
        <div class="gift-video-placeholder" style="display:none">
          ${SVG_ICONS.giftBox}<span>${item.video}</span>
        </div>
      </div>
      <p class="gift-caption">${item.caption}</p>`;

    wrap.appendChild(step);

    const videoWrap = step.querySelector('.gift-video-wrap');
    const video = videoWrap.querySelector('video');
    const placeholder = videoWrap.querySelector('.gift-video-placeholder');

    // Handle empty 0-byte video placeholders or load failures cleanly
    video.addEventListener('error', () => {
      video.style.display = 'none';
      placeholder.style.display = 'flex';
    });

    const dot = document.createElement('div');
    dot.className = 'gift-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });

  const steps = wrap.querySelectorAll('.gift-step');
  const dots  = dotsWrap.querySelectorAll('.gift-dot');

  function goTo(idx) {
    steps[currentStep].classList.remove('active');
    dots[currentStep].classList.remove('active');
    currentStep = idx;
    steps[currentStep].classList.add('active');
    dots[currentStep].classList.add('active');
    nextBtn.hidden = currentStep >= steps.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) goTo(currentStep + 1);
  });
  addRipple(nextBtn);
}

/* ── 22 Reasons ─────────────────────────────────────────── */
function buildReasons() {
  const grid = document.getElementById('reasons-grid');
  content.reasons.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal-scale';
    card.style.transitionDelay = (i * 0.03) + 's';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `السبب ${i + 1}`);
    card.innerHTML = `
      <span class="reason-num">${i + 1}</span>
      <span class="reason-text-collapsed">اضغطي لتعرفي ${SVG_ICONS.sparkleMini}</span>
      <span class="reason-text">${reason}</span>`;

    function toggle() {
      card.classList.toggle('open');
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    grid.appendChild(card);
  });
}

/* ── Gallery ─────────────────────────────────────────────── */
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  const lb   = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');

  content.gallery.forEach((filename, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal-scale';
    item.style.transitionDelay = (i * 0.04) + 's';

    const src = 'assets/images/' + filename;
    item.innerHTML = `
      <img data-preload src="${src}" alt="ذكرى ${i + 1}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="gallery-placeholder" style="display:none">
        ${SVG_ICONS.flower}<span>${filename}</span>
      </div>`;

    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && img.naturalWidth > 0) {
        lbImg.src = img.src;
        lb.classList.add('open');
      }
    });
    grid.appendChild(item);
  });

  document.getElementById('lightbox-close').addEventListener('click', () => {
    lb.classList.remove('open');
    lbImg.src = '';
  });
  lb.addEventListener('click', e => {
    if (e.target === lb) { lb.classList.remove('open'); lbImg.src = ''; }
  });
}

/* ── Our Moments ─────────────────────────────────────────── */
function buildOurMoments() {
  const list = document.getElementById('moments-list');
  content.ourMoments.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'moment-item reveal';
    el.style.transitionDelay = (i * 0.12) + 's';

    const src = 'assets/videos/' + item.video;
    const posterSrc = 'assets/images/us-poster-' + (i + 1) + '.jpg';

    el.innerHTML = `
      <div class="moment-video-wrap">
        <video playsinline preload="none" poster="${posterSrc}">
          <source src="${src}" type="video/mp4">
        </video>
        <div class="gift-video-placeholder" style="display:none">
          ${SVG_ICONS.film}<span>${item.video}</span>
        </div>
        <div class="play-btn" id="playbtn-${i}" aria-label="تشغيل">
          <div class="play-btn-pulse-ring"></div>
          <div class="play-btn-inner">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <p class="moment-caption">${item.caption}</p>`;

    list.appendChild(el);

    const wrap = el.querySelector('.moment-video-wrap');
    const video = wrap.querySelector('video');
    const playBtn = wrap.querySelector('.play-btn');
    const placeholder = wrap.querySelector('.gift-video-placeholder');

    video.addEventListener('error', () => {
      video.style.display = 'none';
      playBtn.style.display = 'none';
      placeholder.style.display = 'flex';
    });

    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play().then(() => {
          playBtn.classList.add('hide');
        }).catch(() => {
          // If video file is 0-byte or unplayable, fallback gracefully
          video.style.display = 'none';
          playBtn.style.display = 'none';
          placeholder.style.display = 'flex';
        });
      }
    });

    video.addEventListener('pause', () => playBtn.classList.remove('hide'));
    video.addEventListener('ended', () => playBtn.classList.remove('hide'));
  });
}

/* ── Closing Letter ──────────────────────────────────────── */
function buildClosingLetter() {
  const envelope = document.getElementById('envelope');
  const letterEl = document.getElementById('env-letter');

  content.closingLetter.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    letterEl.insertBefore(p, letterEl.querySelector('.love-sign'));
  });

  let opened = false;
  envelope.addEventListener('click', () => {
    if (!opened) {
      opened = true;
      envelope.classList.add('open');
    }
  });
  envelope.setAttribute('tabindex', '0');
  envelope.setAttribute('role', 'button');
  envelope.setAttribute('aria-label', 'افتحي الرسالة');
  envelope.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); envelope.click(); }
  });
}

/* ── Footer ──────────────────────────────────────────────── */
function buildFooter() {
  document.getElementById('footer-text').textContent = content.footer;
}

/* ════ ENHANCED AMBIENT CANVAS (Organic Vector Particles) ══ */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;
  const particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x     = Math.random() * W;
      this.y     = H + 20;
      this.size  = 12 + Math.random() * 16;
      this.speed = 0.4 + Math.random() * 0.7;
      this.drift = (Math.random() - 0.5) * 0.4;
      this.alpha = 0.2 + Math.random() * 0.4;
      this.rot   = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.type  = Math.floor(Math.random() * 4);
      this.color = ['#e8b4ad', '#c8958c', '#d4a96a', '#ecc9c5'][Math.floor(Math.random() * 4)];
    }
    update() {
      this.y   -= this.speed;
      this.x   += this.drift + Math.sin(this.y * 0.02) * 0.3;
      this.rot += this.rotSpeed;
      if (this.y < -20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.fillStyle = this.color;

      if (this.type === 0) {
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(this.size / 2, -this.size / 4, this.size / 2, this.size / 4, 0, this.size / 2);
        ctx.bezierCurveTo(-this.size / 2, this.size / 4, -this.size / 2, -this.size / 4, 0, -this.size / 2);
        ctx.fill();
      } else if (this.type === 1) {
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * this.size, Math.sin((i * Math.PI) / 2) * this.size);
          ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (this.size * 0.35), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (this.size * 0.35));
        }
        ctx.closePath();
        ctx.fill();
      } else if (this.type === 2) {
        const s = this.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.6);
        ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.8, -s, 0, -s * 0.3);
        ctx.bezierCurveTo(s * 0.8, -s, s, -s * 0.4, 0, s * 0.6);
        ctx.fill();
      } else {
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  const COUNT = Math.min(32, Math.floor(W / 25));
  for (let i = 0; i < COUNT; i++) {
    const p = new Particle();
    p.y = Math.random() * H;
    particles.push(p);
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(frame);
  }
  frame();
}

/* ════ INTERSECTION OBSERVER ════════════════════════════════ */
function initIntersectionObserver() {
  const selectors = '.reveal, .reveal-scale, .reveal-left, .reveal-right, .letter-line';
  const els = document.querySelectorAll(selectors);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

/* ════ HERO PARALLAX ════════════════════════════════════════ */
function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroH   = document.getElementById('hero').offsetHeight;
    if (scrollY < heroH) {
      const pct = scrollY / heroH;
      heroBg.style.transform = `scale(${1.05 + pct * 0.05}) translateY(${pct * 12}%)`;
    }
  }, { passive: true });
}

/* ════ RIPPLE ═══════════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll('.ripple-btn').forEach(addRipple);
}

function addRipple(el) {
  el.classList.add('ripple-btn');
  el.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY  - rect.top  - size/2}px;
    `;
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

/* ════ VECTOR CONFETTI BURST ═══════════════════════════════ */
(function initCelebration() {
  const btn    = document.getElementById('celebrate-btn');
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');

  addRipple(btn);

  btn.addEventListener('click', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.classList.add('active');

    const pieces = [];
    const COLORS = ['#c8958c', '#e8b4ad', '#d4a96a', '#f5e0dd', '#ecc9c5', '#ffffff'];
    const COUNT  = 110;

    for (let i = 0; i < COUNT; i++) {
      pieces.push({
        x:       canvas.width  / 2 + (Math.random() - 0.5) * 80,
        y:       canvas.height / 2 + (Math.random() - 0.5) * 80,
        vx:      (Math.random() - 0.5) * 16,
        vy:      -9 - Math.random() * 11,
        gravity: 0.26,
        size:    12 + Math.random() * 16,
        color:   COLORS[Math.floor(Math.random() * COLORS.length)],
        type:    Math.floor(Math.random() * 4),
        alpha:   1,
        rot:     Math.random() * Math.PI * 2,
        rotV:    (Math.random() - 0.5) * 0.22,
        life:    1
      });
    }

    let active = true;
    function loop() {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allDead = true;
      pieces.forEach(p => {
        p.vy   += p.gravity;
        p.x    += p.vx;
        p.y    += p.vy;
        p.rot  += p.rotV;
        p.life -= 0.011;
        p.alpha = Math.max(0, p.life);

        if (p.alpha > 0) {
          allDead = false;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;

          if (p.type === 0) {
            const s = p.size * 0.5;
            ctx.beginPath();
            ctx.moveTo(0, s * 0.6);
            ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.8, -s, 0, -s * 0.3);
            ctx.bezierCurveTo(s * 0.8, -s, s, -s * 0.4, 0, s * 0.6);
            ctx.fill();
          } else if (p.type === 1) {
            ctx.beginPath();
            ctx.moveTo(0, -p.size / 2);
            ctx.bezierCurveTo(p.size / 2, -p.size / 4, p.size / 2, p.size / 4, 0, p.size / 2);
            ctx.bezierCurveTo(-p.size / 2, p.size / 4, -p.size / 2, -p.size / 4, 0, -p.size / 2);
            ctx.fill();
          } else if (p.type === 2) {
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
              ctx.lineTo(Math.cos((i * Math.PI) / 2) * p.size, Math.sin((i * Math.PI) / 2) * p.size);
              ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (p.size * 0.3), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (p.size * 0.3));
            }
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          }

          ctx.restore();
        }
      });

      if (allDead) {
        active = false;
        canvas.classList.remove('active');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        requestAnimationFrame(loop);
      }
    }
    requestAnimationFrame(loop);
  });
})();
