// ===== Mobile nav toggle =====
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ===== Sticky header shadow =====
const header = document.querySelector('[data-scroll-shadow]');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 8) header.classList.add('has-shadow');
  else header.classList.remove('has-shadow');
};
window.addEventListener('scroll', onScroll);
onScroll();

// ===== Ensure body padding matches fixed header height =====
function setHeaderHeightVar() {
  const h = document.querySelector('.site-header')?.offsetHeight || 64;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}
window.addEventListener('load', setHeaderHeightVar);
window.addEventListener('resize', setHeaderHeightVar);

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('[data-reveal]');
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 }) : null;
revealEls.forEach(el => io ? io.observe(el) : el.classList.add('is-visible'));

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Language toggle (EN <-> TA) =====
const translations = {
  ta: {
    site_title: "Mr.Cutz Mens Beauty Parlour | நைப் & பராமரிப்பு",
    skip: "உள்ளடக்கத்துக்கு செல்லவும்",
    toggle_nav: "வழிசெலுத்தலை மாற்று",
    nav_services: "சேவைகள்",
    nav_pricing: "விலைப்பட்டியல்",
    nav_barbers: "திறமையாளர்",
    nav_gallery: "கேலரி",
    nav_contact: "வருகை",
    hero_sharp: "தூக்கல்.",
    hero_clean: "தூய்மை.",
    hero_confident: "நம்பிக்கை.",
    hero_sub: "கச்சிதமான ஹேர் கட்ட், தாடி அலங்காரம், ஷேவ் மற்றும் பராமரிப்பு — உங்கள் ஸ்டைலுக்கு பொருந்தும்.",
    cta_find_us: "வழிகாட்டவும்",
    cta_call: "இப்போதே அழைக்க",
    badge_rated: "உள்ளூர்வாசிகள் மதிப்பளித்தனர்",
    badge_hygiene_title: "சுத்தம் உறுதி",
    badge_hygiene_sub: "கருவிகள் கிருமி நாசனம்",
    badge_walkins: "வாக்-இன்களுக்கு வரவேற்பு",
    badge_hours: "காலை 9 – இரவு 9",
    services_title: "சேவைகள்",
    services_sub: "பாரம்பரிய கட் முதல் மோடர்ன் பேடு வரை — தாடி பராமரிப்பு, ஷேவ், ஃபேஷியல் உள்ளிட்டவை.",
    svc_haircut: "ஹேர் கட்ட்",
    svc_haircut_desc: "கத்தரி & கிளிப்பர் வேலை, ஸ்டைலிங்குடன் முடிவு.",
    svc_beard: "தாடி ட்ரிம்",
    svc_beard_desc: "லைன்-அப், பேடு, எண்ணெய் ஃபினிஷ்.",
    svc_shave: "ஹாட் டவல் ஷேவ்",
    svc_shave_desc: "ஹாட் டவல், ஃபோம், ஸ்ட்ரெய்ட் ரேசர் ஷேவ்.",
    svc_facial: "ஃபேஷியல்",
    svc_facial_desc: "ஆழ்ந்த சுத்தம் மற்றும் புதுப்பிப்பு.",
    pricing_title: "விலைப்பட்டியல்",
    pricing_sub: "தெளிவு, நியாயம், ஒவ்வொரு கட்டும் மதிப்பு.",
    inc_consult: "கன்சல்டேஷன்",
    inc_wash: "வாஷ் & ஸ்டைல்",
    inc_finish: "ஃபினிஷிங் தயாரிப்பு",
    popular: "பிரபலமானது",
    svc_combo: "கட் + தாடி",
    combo_1: "பிரிசிஷன் பேடு அல்லது கத்தரி கட்ட்",
    combo_2: "தாடி ஷேப்பிங் & லைன்-அப்",
    combo_3: "ஹாட் டவல் ஃபினிஷ்",
    svc_shave_short: "ஷேவ்",
    shave_1: "ஹாட் டவல் தயார்",
    shave_2: "ரேசர் ஷேவ்",
    shave_3: "ஆப்டர்-ஷேவ் பால்ம்",
    facial_1: "க்ளீன்ஸ் & எக்ஸ்ஃபோலியேட்",
    facial_2: "மாஸ்க் & மசாஜ்",
    facial_3: "மாய்ஸ்சரைஸ்",
    cta_directions: "வழிகாட்டவும்",
    pricing_note: "வாக்-இன் • கார்டு & UPI கட்டணம்",
    barbers_title: "நிபுணர்களை சந்திக்கவும்",
    barbers_sub: "அனுபவம் மிக்க கைகள். நெருக்கமான அணுகு.",
    barber_1: "அருண்",
    barber_1_desc: "பேடு ஸ்பெஷலிஸ்ட் • 8+ ஆண்டுகள்",
    barber_2: "ராகுல்",
    barber_2_desc: "கிளாசிக் கட்ட் • தாடி அலங்காரம்",
    barber_3: "விஜய்",
    barber_3_desc: "ரேசர் ஷேவ் • ஃபேஷியல்",
    gallery_title: "கேலரி",
    gallery_sub: "புதிய கட்டுகள் & கூர்மையான லுக்.",
    findus_title: "எங்களை கண்டுபிடிக்க",
    hours_label: "நேரம்:",
    hours_value: "தினமும் திறந்திருக்கும் • காலை 9:00 – இரவு 9:00",
    phone_label: "தொலைபேசி:",
    address: "Mr.Cutz Mens Beauty Parlour<br/>தமிழ்நாடு, இந்தியா",
    btn_directions: "கூகுள் மேப்பில் திறக்க",
    btn_call: "அழைக்க",
    tagline: "நுணுக்கமான கட்டுகள். மேம்பட்ட பராமரிப்பு.",
    rights: "அனைத்தும் உரிமையுரியது."
  }
};

// Cache default English text so we can restore it exactly
document.querySelectorAll('[data-i18n]').forEach(el => {
  if (!el.dataset.defaultText) el.dataset.defaultText = el.innerHTML;
});

function applyTranslations(lang) {
  const dict = translations[lang] || {};
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'ta' && dict[key]) {
      if (el.tagName === 'TITLE') document.title = dict[key];
      else el.innerHTML = dict[key];
    } else {
      // restore English default
      if (el.tagName === 'TITLE') document.title = (document.querySelector('title').dataset.defaultText || document.title);
      else el.innerHTML = el.dataset.defaultText;
    }
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'ta' ? 'English' : 'தமிழ்';
    btn.setAttribute('aria-pressed', lang === 'ta' ? 'true' : 'false');
  }
  localStorage.setItem('mrcutz_lang', lang);
}

// Button click → toggle
const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = localStorage.getItem('mrcutz_lang') || 'en';
    const next = current === 'ta' ? 'en' : 'ta';
    applyTranslations(next);
  });
}

// On load → apply saved or default EN
applyTranslations(localStorage.getItem('mrcutz_lang') || 'en');
