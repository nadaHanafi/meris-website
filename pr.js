/* ===================================================================
   MERIS — product data
   Replace `img` with a real photo path (e.g. "images/turquoise.jpg")
   to swap out the gold-on-wine placeholder. `ph` sets the placeholder
   gradient colors [start, end] until then. `featured: true` shows a
   piece in the homepage teaser grid.
   =================================================================== */
const PRODUCTS = [
  {
    id: "turquoise-circle",
    name: "Turquoise circle Necklace",
    category: "necklaces",
    jpegrice: 500,
    img: "./images/turquoise circle necklace.jpeg",

    ph: ["#1F6E6B", "#0E3634"],
    desc: "A bold single-strand statement piece in hand-selected turquoise beads. Worn long over a plain neckline, it does the talking on its own.",
    featured: true
  },
  {
    id: "earth-love",
    name: "earth love",
    category: "necklaces",
    price: 350,
    img: "./images/earth love necklace.jpeg",
    ph: ["#8B2635", "#3A0F16"],
    desc: "Delicate coral-toned beads . A softer statement for someone who likes their bold understated.",
    featured: true
  },
  {
    id: "aribian night set",
    name: "aribian night set",
    category: ["earrings" , "necklaces" ],

    price: 780,
    img: "./images/arabian night set.jpeg",
    ph: ["#241119", "#0C0509"],
    desc: "Faceted black beads on a fine gold-tone wire. Lightweight enough for all day, striking enough for the evening."
  },
  {
    id: "moon-necklace",
    name: "Moon Necklace",
    category: "necklaces",
    price: 200,
    img: "./images/moon stainless necklaces.jpeg",
    ph: ["#4B1030", "#1C0817"],
    desc: "A moon stainless charm — quiet on its own, layered beautifully with anything bolder."
  },
  {
    id: "layered-charm",
    name: "Layered Charm Necklace",
    category: "necklaces",
    price: 800,
    img: "./images/seashell necklace.jpeg",
    ph: ["#6B4A1F", "#2A1A0A"],
    desc: "Multiple strands finished with mixed medallion charms. The most statement piece in the collection — meant to be seen.",
    featured: true
  },
  {
    id: "sea-pearls-choker",
    name: "Sea pearls Beaded Choker",
    category: "chokers",
    price: 460,
    img: "./images/pearls neght chocker.jpeg",
    ph: ["#2D6B62", "#0F2E28"],
    desc: "Sits close to the collarbone in cool sea-glass tones. Pairs well with an open collar or bare shoulders."
  },
  {
    id: "golden-hour",
    name: "golden hour necklace",
    category: "necklaces",
    price: 550,
    img: "./images/gold hour nechlace.jpeg",
    ph: ["#6E1F2E", "#2A0A11"],
    desc: "a golden hour beads on a fitted neclace length, gives the feeling of sunset.",
    featured: true
  },
  {
    id: "blue-mermaide",
    name: "mermaide necklace",
    category: "neclaces",
    price: 300,
    img: "./images/mermaide necklace.jpeg",
    ph: ["#8A5A1E", "#3A250A"],
    desc: "a beab mermaide blue neclace . gives you the feeling of the sea."
  }
];

/* ===================================================================
   Auto-email order handoff
   A static site can't send email itself (no SMTP from a browser),
   so this posts to Formspree — a free form-backend service that
   forwards submissions straight to your inbox with no customer
   action beyond clicking the button.

   SETUP REQUIRED:
   1. Go to https://formspree.io and create a free account.
   2. Create a new form — Formspree gives you an endpoint that
      looks like https://formspree.io/f/abcdwxyz
   3. Paste that endpoint below, replacing FORMSPREE_ENDPOINT.
   Until that's done, this will show an error toast instead of
   sending, since there's nowhere real to send it yet.
   =================================================================== */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/moeqknkg";

function showToast(message){
  let toast = document.getElementById("site-toast");
  if (!toast){
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.style.cssText = `
      position:fixed; left:50%; bottom:28px; transform:translateX(-50%);
      background:#240817; color:#F5ECDF; padding:14px 22px; border-radius:2px;
      font-family:"Jost", sans-serif; font-size:.88rem; letter-spacing:.01em;
      box-shadow:0 12px 30px rgba(0,0,0,.35); z-index:9999; opacity:0;
      transition:opacity .3s ease; max-width:88vw; text-align:center;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => { toast.style.opacity = "1"; });
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => { toast.style.opacity = "0"; }, 4500);
}

function sendOrderEmail(subject, message, button){
  if (FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")){
    showToast("Order form isn't connected yet — add your Formspree endpoint in script.js.");
    return Promise.reject(new Error("Formspree endpoint not configured"));
  }
  const originalText = button ? button.textContent : null;
  if (button){ button.textContent = "Sending…"; button.style.pointerEvents = "none"; }

  return fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ subject, message })
  })
    .then(res => {
      if (!res.ok) throw new Error("Send failed");
      showToast("Order sent! We'll get back to you soon.");
      return true;
    })
    .catch(() => {
      showToast("Couldn't send that — please try again in a moment.");
      return false;
    })
    .finally(() => {
      if (button){ button.textContent = originalText; button.style.pointerEvents = "auto"; }
    });
}


/* ===================================================================
   Cart state — persisted so it survives navigating between pages
   =================================================================== */
const CART_KEY = "meris_cart";
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  
} catch (e) {
  cart = [];
}
function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

/* ===================================================================
   Render a product grid into any container
   =================================================================== */
function renderProductGrid(container, products){
  if (!container) return;
  container.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = p.category;
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="product-photo" style="--ph-a:${p.ph[0]}; --ph-b:${p.ph[1]};">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : `<span class="ph-mark">M</span>`}
        <button class="product-quick" data-id="${p.id}" aria-label="Quick view ${p.name}">+</button>
      </div>
      <p class="product-cat">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-price">${p.price} EGP</p>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".product-quick")) return;
      openQuickView(p.id);
    });
    card.querySelector(".product-quick").addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickView(p.id);
    });

    container.appendChild(card);
  });
}

/* ===================================================================
   Filtering (shop page only)
   =================================================================== */
function initFilters(){
  const filterTabs = document.getElementById("filter-tabs");
  if (!filterTabs) return;
  filterTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;
    filterTabs.querySelectorAll(".filter-tab").forEach(t => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    const filter = tab.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
}

/* ===================================================================
   Quick view modal
   =================================================================== */
let activeProductId = null;

function openQuickView(id){
  const pvOverlay = document.getElementById("pv-overlay");
  const pvModal = document.getElementById("pv-modal");
  if (!pvOverlay || !pvModal) return;
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeProductId = id;

  const pvPhoto = document.getElementById("pv-photo");
  pvPhoto.style.setProperty("--ph-a", p.ph[0]);
  pvPhoto.style.setProperty("--ph-b", p.ph[1]);
  pvPhoto.innerHTML = p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : "";
  document.getElementById("pv-cat").textContent = p.category;
  document.getElementById("pv-name").textContent = p.name;
  document.getElementById("pv-price").textContent = `${p.price} EGP`;
  document.getElementById("pv-desc").textContent = p.desc;
  pvOverlay.classList.add("is-open");
  pvModal.classList.add("is-open");
}
function closeQuickView(){
  const pvOverlay = document.getElementById("pv-overlay");
  const pvModal = document.getElementById("pv-modal");
  if (!pvOverlay || !pvModal) return;
  pvOverlay.classList.remove("is-open");
  pvModal.classList.remove("is-open");
}

function initQuickView(){
  const pvOverlay = document.getElementById("pv-overlay");
  const pvClose = document.getElementById("pv-close");
  const pvAdd = document.getElementById("pv-add");
  if (!pvOverlay) return;
  pvClose.addEventListener("click", closeQuickView);
  pvOverlay.addEventListener("click", closeQuickView);
  pvAdd.addEventListener("click", () => {
    if (activeProductId) addToCart(activeProductId);
    closeQuickView();
    openCart();
  });
}

/* ===================================================================
   Cart logic — drawer markup is included on every page
   =================================================================== */
function addToCart(id){
  const line = cart.find(l => l.id === id);
  if (line) line.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
}
function changeQty(id, delta){
  const line = cart.find(l => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(l => l.id !== id);
  saveCart();
  renderCart();
}
function removeLine(id){
  cart = cart.filter(l => l.id !== id);
  saveCart();
  renderCart();
}

function renderCart(){
  const cartItemsEl = document.getElementById("cart-items");
  const cartEmptyEl = document.getElementById("cart-empty");
  const cartCountEl = document.getElementById("cart-count");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const checkoutBtn = document.getElementById("checkout-btn");
  if (!cartItemsEl) return;

  const totalQty = cart.reduce((sum, l) => sum + l.qty, 0);
  if (cartCountEl) cartCountEl.textContent = totalQty;

  if (cart.length === 0){
    cartItemsEl.innerHTML = "";
    if (cartEmptyEl) cartItemsEl.appendChild(cartEmptyEl);
    if (cartSubtotalEl) cartSubtotalEl.textContent = "0 EGP";
    if (checkoutBtn){
      checkoutBtn.style.opacity = ".5";
      checkoutBtn.style.pointerEvents = "none";
    }
    return;
  }

  if (checkoutBtn){
    checkoutBtn.style.opacity = "1";
    checkoutBtn.style.pointerEvents = "auto";
  }

  let subtotal = 0;
  cartItemsEl.innerHTML = "";
  cart.forEach(line => {
    const p = PRODUCTS.find(x => x.id === line.id);
    if (!p) return;
    subtotal += p.price * line.qty;

    const row = document.createElement("div");
    row.className = "cart-line";
    row.innerHTML = `
      <div class="cart-line-photo" style="--ph-a:${p.ph[0]}; --ph-b:${p.ph[1]};"></div>
      <div class="cart-line-info">
        <p class="cart-line-name">${p.name}</p>
        <p class="cart-line-price">${p.price} EGP</p>
        <div class="cart-line-qty">
          <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
          <span>${line.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-line-remove" data-action="remove" data-id="${p.id}">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  if (cartSubtotalEl) cartSubtotalEl.textContent = `${subtotal} EGP`;

  cartItemsEl.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "inc") changeQty(id, 1);
      if (action === "dec") changeQty(id, -1);
      if (action === "remove") removeLine(id);
    });
  });

  if (checkoutBtn){
    const lines = cart.map(l => {
      const p = PRODUCTS.find(x => x.id === l.id);
      return `${l.qty} x ${p.name} (${p.price} EGP)`;
    }).join("\n");
    const msg = `New order from the website:\n${lines}\n\nSubtotal: ${subtotal} EGP`;
    checkoutBtn.href = "#";
    checkoutBtn.onclick = (e) => {
      e.preventDefault();
      sendOrderEmail("New Meris order", msg, checkoutBtn).then(sent => {
        if (sent){
          cart = [];
          saveCart();
          renderCart();
          setTimeout(closeCart, 1200);
        }
      });
    };
  }
}

function openCart(){
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  if (!cartDrawer) return;
  cartDrawer.classList.add("is-open");
  cartOverlay.classList.add("is-open");
}
function closeCart(){
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  if (!cartDrawer) return;
  cartDrawer.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");
}

function initCart(){
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  if (!cartToggle) return;
  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
}

/* ===================================================================
   Mobile nav
   =================================================================== */
function initNav(){
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (!navToggle) return;
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}

/* ===================================================================
   Init
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const shopGrid = document.getElementById("product-grid");
  if (shopGrid) renderProductGrid(shopGrid, PRODUCTS);

  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) renderProductGrid(featuredGrid, PRODUCTS.filter(p => p.featured));

  initFilters();
  initQuickView();
  initCart();
  initNav();
  renderCart();
});