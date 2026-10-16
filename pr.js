/* ===================================================================
   MERIS — product data
   Replace `img` with a real photo path (e.g. "images/turquoise.jpg")
   to swap out the gold-on-wine placeholder. `ph` sets the placeholder
   gradient colors [start, end] until then. `featured: true` shows a
   piece in the homepage teaser grid.
   =================================================================== */
/* ===================================================================
   SOLD OUT: add a product's id to this list to mark it as sold out
   everywhere (shop, quick view, cart). Remove the id to put it back
   on sale. Example:  const SOLD_OUT = ["Oasis", "Moonlit"];
   =================================================================== */
const SOLD_OUT = [];

/* Categories used in the shop: "necklaces", "chokers", "bracelets", "earrings".
   To add a bracelet or earring, copy any product below and set
   category: "bracelets"  or  category: "earrings"  (exact spelling). */
const PRODUCTS = [
  {
    id: "Oasis",
    name: "Oasis",
    category: "necklaces",
    price: 400,
    img:[
      "images/Oasis-1.jpeg",
         "images/Oasis-2.jpeg",
         "images/Oasis.model-3.jpeg",
        ],
    

    ph: ["#1F6E6B", "#0E3634"],
    desc: "Inspired by the beauty of a desert oasis, this handcrafted necklace features smooth turquoise-colored stones with natural earthy accents. Its bold yet elegant design brings together the calming tones of water and the warmth of nature, creating a timeless statement piece perfect for any occasion.",
    featured: true
  },
  {
    id: "Nile Azure",
    name: "Nile Azure",
    category: "necklaces",
    price: 800,
    img:[
      "images/Nile Azure-1.jpeg",
         "images/Nile Azure-2.jpeg",
        ],
    

    ph: ["#1F6E6B", "#0E3634"],
    desc: "Where the sea meets the sky crafted from naturale agate ",
    featured: true
  },
  {
    id: "earth-love",
    name: "earth love",
    category: "necklaces",
    price: 550,
    img: [
      "images/Earth love-1.jpeg",
      "images/Earth love-2.jpeg",
      "images/Earth love.model-3.jpeg",
    ],
    ph: ["#8B2635", "#3A0F16"],
    desc: "Deeply rooted in natural beauty ,flowing rows of warm bronze and shimmering amber beads that bring an effortless, grounded feel to your style. A simple, soulful piece made to connect you with nature.",
    featured: true
  },
  {
    id: "Wildflower",
    name: "Wildflower",
    category: "necklaces",
    price: 360,
    img: [
      "images/Wildflower-1.jpeg",
      "images/Wildflower-2.jpeg",
      "images/Wildflower.model-3.jpeg"],

    ph: ["#8B2635", "#3A0F16"],
    desc: "A garden of earthy hues in one piece ,a mix of smooth focal stones and colorful chips crafted for a carefree vibe. Wear it long or double it up for a bold layer",
    featured: true
  },
  {
    id: "Desert Mosaic",
    name: "Desert mosaic",
    category: "necklaces",
    price: 300,
    img: [
      "images/Desert Mosaic-1.jpeg",
      "images/Desert Mosaic-2.jpeg",
      "images/Desert Mosaic.model-3.jpeg"],

    ph: ["#8B2635", "#3A0F16"],
    desc: "Earthy warmth in every link , wire-wrapped stones in rich rust, amber, and sandstone tones. Style it long for an effortless look or doubled up for a layered statement.",
    featured: true
  },
  
  {
    id: "Siren Silver set",
    name: "Siren Silver set",
    category: "necklaces",

    price: 760,
    img: [
      "images/Siren Silver-1.jpeg",
      "images/Siren Silver-2.jpeg",
      "images/Siren Silver-3.jpeg",
      "images/Siren Silver.model-4.jpeg",
      "images/Siren Silver.model-5.jpeg",
    ],
    ph: ["#241119", "#0C0509"],
    desc: "Mysterious vibes meet bold metallic style ,cascading strands of detailed silver beads and dark black stones. A bold statement set that comes with matching earrings for a dramatic finish."
  },
  {
    id: "Moonlit",
    name: "Moonlit",
    category: "necklaces",
    price: 250,
    img: [
      "images/Moonlit-1.jpeg",
      "images/Moonlit-2.jpeg",
      "images/Moonlit.model-3.jpeg",
    ],
    ph: ["#4B1030", "#1C0817"],
    desc: "Mysterious and soft , patterned stone beads in muted earth tones, finished with a warm gold clasp. A quiet, soulful accent made to bring effortless grace to your everyday look."
  },
 
  {
    id: "sea-pearls-choker",
    name: "Sea pearls Beaded Choker",
    category: "chokers",
    price: 100,
    img: "./images/pearls neght chocker.jpeg",
    ph: ["#2D6B62", "#0F2E28"],
    desc: "Sits close to the collarbone in cool sea-glass tones. Pairs well with an open collar or bare shoulders."
  },
  {
    id: "Amber Honey",
    name: "Amber Honey",
    category: "necklaces",
    price: 550,
    img: [
      "images/Amber Honey-1.jpeg",
      "images/Amber Honey-2.jpeg",
      "images/Amber Honey.model-3.jpeg",
    ],
    ph: ["#6E1F2E", "#2A0A11"],
    desc: "Warm sunlight captured in every bead , honey-amber beads that glow with a rich, sunlit warmth. A bold, statement piece designed to light up any outfit effortless style.",
    featured: true
  },
  {
    id: "Ocean Wave",
    name: "Ocean Wave",
    category: "necklaces",
    price: 550,
    img: [
      "images/Ocean Wave-1.jpeg",
      "images/Ocean Wave-2.jpeg",
      "images/Oasis.model-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "Dive into the deep blue ,cascading strands of vibrant sea-blue beads anchored with smooth, ocean-toned stones. A lightweight, multi-layered piece that gives you that effortless beachy glow.",
  },
  {
    id: "Forest Path",
    name: "Forest Path",
    category: "necklaces",
    price:400,
    img: [
      "images/Forest Path-1.jpeg",
      "images/Forest Path-2.jpeg",
      "images/Forest Path.model-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A simple, minimalist pendant featuring a natural, luminous shell suspended on a sleek black cord, accented by a striking single blue bead. Elegant, clean, and effortlessly chic.",
  },
{
    id: "Moonlit Pearl",
    name: "Moonlit Pearl",
    category: "necklaces",
    price: 100,
    img: [
      "images/Moonlit Pearl-1.jpeg",
      "images/Moonlit Pearl-2.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A handcrafted statement piece inspired by quiet woodland trails. This necklace features a rich mix of forest green, dark, and clear beads, styled with a striking central focal bead and a delicate cascading tassel. Earthy, elegant, and effortlessly unique.",
  } ,
  {
    id: "Midnight Glimmer",
    name: "Midnight Glimmer",
    category: "necklaces",
    price:400,
    img: [
      "images/Midnight Glimmer-1.jpeg",
      "images/Midnight Glimmer-2.jpeg",
      "images/Midnight Glimmer-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A stunning statement necklace featuring cascading black bead strands and bold gold accents. Handcrafted mosaic tube inlays add a unique, artisanal touch to this elegant piece. Perfect for elevating both evening wear .",
  },
   {
    id: "Turquoise Isle",
    name: "Turquoise Isle",
    category: "necklaces",
    price:560,
    img: [
      "images/Turquoise Isle-1.jpeg",
      "images/Turquoise Isle-2.jpeg",
      "images/Turquoise Isle-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A bold, statement necklace featuring large, smooth oval beads with a vibrant turquoise finish and intricate dark veining. This eye-catching piece adds a brilliant pop of color and coastal charm to any outfit.",
  },
  {
    id: "Coral Cove",
    name: "Coral Cove",
    category: "necklaces",
    price:370,
    img: [
      "images/Coral Cove-1.jpeg",
      "images/Coral Cove-2.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A playful and elegant matching set featuring vibrant red bead strands accented with gold details, delicate coral branch charms, and a charming central crab pendant. Crafted with durable stainless steel, it can be worn comfortably as either a choker or a necklace to suit your style. Complete with matching earrings, it brings a delightful coastal-inspired touch to any look.",
  },
{
    id: "Ancient Spiral",
    name: "Ancient Spiral",
    category: "necklaces",
    price:155,
    img: [
      "images/Ancient Spiral-1.jpeg",
      "images/Ancient Spiral-2.jpeg",
      "images/Ancient Spiral-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A striking necklace featuring carved green cylindrical beads and deep red stones. It is finished with a detailed golden spiral pendant, giving it a unique and earthy look.",
  },
  {
    id: "Vintage Blossom",
    name: "Vintage Blossom",
    category: "chokers",
    price:155,
    img: [
      "images/Vintage Blossom-1.jpeg",
      "images/Vintage Blossom-2.jpeg",
      "images/Vintage Blossom-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A delicate and charming lace choker featuring a continuous chain of interconnected floral motifs. Soft, vintage-inspired, and versatile, it is available in both warm brown and classic black.   ",
  },
   {
    id: "Ethereal Sands",
    name: "Ethereal Sands",
    category: "necklaces",
    price:155,
    img: [
      "images/Ethereal Sands-1.jpeg",
      "images/Ethereal Sands-2.jpeg",
      "images/Ethereal Sands-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A delicate necklace featuring smooth, warm-toned beads and soft floral accents, . Light and graceful, it adds a touch of bohemian elegance to any outfit.",
  },
  {
    id: "Forest Ivory",
    name: "Forest Ivory",
    category: "necklaces",
    price:155,
    img: [
      "images/Forest Ivory-1.jpeg",
      "images/Forest Ivory-2.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A charming necklace featuring a natural mix of tumbled green stones and smooth white elongated beads. With its earthy tones and organic textures, it brings a fresh, nature-inspired touch to your everyday look.",
  },
  {
    id: "Sunset Spark",
    name: "Sunset Spark",
    category: "chokers",
    price: 250,
    img: [
      "images/Forest Ivory-1.jpeg",
      "images/Forest Ivory-2.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A vibrant choker featuring an alternating pattern of warm red, orange, and light-colored beads. With its bright, fiery tones, it adds a cheerful and eye-catching pop of color to your style.",
  },
   {
    id: "Coastal Earth",
    name: "Coastal Earth",
    category: "chokers",
    price:165,
    img: [
      "images/Coastal Earth-1.jpeg",
      "images/Coastal Earth-2.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A unique choker featuring a striking contrast of natural cowrie shells and warm brown, polished beads. Blending beachside charm with earthy tones, it is a perfect statement piece for a relaxed, nature-inspired look.",
  },
  {
    id: "Ocean Star",
    name: "Ocean Star",
    category: "necklaces",
    price:400,
    img: [
      "images/Ocean Star-1.jpeg",
      "images/Ocean Star-2.jpeg",
      "images/Ocean Star-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A captivating necklace featuring an array of multi-toned, polished beads in calming shades of blue and earthy neutral hues. It is highlighted by a detailed silver starfish pendant, bringing a serene, coastal elegance to your look."
  },
  {
    id: "Celestial Glow",
    name: "Celestial Glow",
    category: "necklaces",
    price:180,
    img: [
      "images/Celestial Glow-1.jpeg",
      "images/Celestial Glow-2.jpeg",
      "images/Celestial Glow-3.jpeg",
      "images/Celestial Glow-4.jpeg",
      "images/Celestial Glow-5.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A pair of radiant stainless steel necklaces featuring delicate gold chains and celestial pendants. One showcases a sun and crescent moon motif framed in sparkling crystals, while the other features a textured crescent moon dotted with tiny stars. Priced at 180 each, they bring a touch of timeless, starry elegance to your daily wear.",
  },
  {
    id: "Ocean Treasure",
    name: "Ocean Treasure",
    category: "chokers",
    price:185,
    img: [
      "images/Ocean Treasure.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A gorgeous charm necklace featuring a statement gold stainless steel chain adorned with dangling seashells, delicate starfish accents, and luminous pearls. Bringing together coastal beauty and durable design, it's a stunning piece of wearable treasure for your everyday style.",
  },
  {
    id: "Bohemian Sage",
    name: "Bohemian Sage",
    category: "necklaces",
    price:170,
    img: [
      "images/Bohemian Sage-1.jpeg",
      "images/Bohemian Sage-2.jpeg",
      "images/Bohemian Sage-3.jpeg",
      "images/Bohemian Sage-4.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A captivating necklace featuring a strand of tumbled green and earthy stone chips, complemented by an ornate, intricately detailed vintage-style gold pendant. Combining bohemian charm with rich, natural textures, it is a statement piece full of timeless character.",
  },
  {
    id: "Midnight Cascade",
    name: "Midnight Cascade",
    category: "necklaces",
    price:120,
    img: [
      "images/Midnight Cascade.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A delicate silver lariat necklace featuring a cascading drop of deep blue beads, white marble-patterned stones, and a charming starfish accent at the end. Graceful and unique, it brings an elegant, ocean-inspired movement to your neckline.",
  },
   {
    id: "Golden Dusk",
    name: "Golden Dusk",
    category: "necklaces",
    price:120,
    img: [
      "images/Golden Dusk.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A stunning gold lariat necklace featuring a warm cascade of amber tones, a delicate crescent moon charm, and a textured starfish pendant. Rich in color and coastal charm, it adds a warm, magical elegance to your favorite outfits.",
  },
   {
    id: "Crimson Sol",
    name: "Crimson Sol",
    category: "necklaces",
    price:120,
    img: [
      "images/Crimson Sol.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A striking silver lariat necklace featuring vibrant red beads cascading down to a radiant celestial sun pendant. Bold, passionate, and beautifully detailed, it adds a warm flash of color and celestial grace to your style.",
  },
  {
    id: "Desert Heritage",
    name: "Desert Heritage",
    category: "necklaces",
    price:180,
    img: [
      "images/Desert Heritage-1.jpeg",
      "images/Desert Heritage-2.jpeg",
      "images/Desert Heritage-3.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A captivating necklace crafted with a rich blend of earthy brown stones, delicate white accents, and durable stainless steel hardware. Suspended from the strand is an ornate, textured Arabic-inspired coin pendant that brings a timeless, cultural elegance to your everyday style.",
  },
  {
    id: "Golden Earth",
    name: "Golden Earth",
    category: "chokers",
    price:180,
    img: [
      "images/Golden Earth.jpeg",
    ],
    ph: ["#8A5A1E", "#3A250A"],
    desc: "A minimalist choker necklace crafted from rich brown tumbled stone chips interspersed with delicate beads and finished with durable gold stainless steel hardware. Warm and grounded, it brings a touch of organic, earthy beauty to your everyday look.",
  },
];
PRODUCTS.forEach(p => { if (SOLD_OUT.includes(p.id)) p.soldOut = true; });

function getImages(p){
  if (Array.isArray(p.img)) return p.img;
  return p.img ? [p.img] : [];
}

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
  toast._hideTimer = setTimeout(() => { toast.style.opacity = "0"; }, 6000);
}
 
function sendOrderEmail(subject, message, button, email){
  // Remove the validation check completely - just go straight to sending
  const originalText = button ? button.textContent : null;
  if (button){ button.textContent = "Sending…"; button.style.pointerEvents = "none"; }
 
  return fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ subject, message, email })
  })
    .then(res => {
      if (!res.ok) throw new Error("Send failed");
      showToast("Thank you! Your order has been received. We'll confirm it by email shortly.");
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
// Drop any items that have since been marked sold out
cart = cart.filter(l => { const p = PRODUCTS.find(x => x.id === l.id); return p && !p.soldOut; });

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
    const imgs = getImages(p);
    const card = document.createElement("article");
    card.className = "product-card" + (p.soldOut ? " is-sold-out" : "");
    card.dataset.category = p.category;
    card.dataset.id = p.id;
 
    card.innerHTML = `
      <div class="product-photo" style="--ph-a:${p.ph[0]}; --ph-b:${p.ph[1]};">
        ${imgs.length ? `<img src="${imgs[0]}" alt="${p.name}" loading="lazy">` : `<span class="ph-mark">M</span>`}
        ${p.soldOut ? `<span class="sold-out-badge">Sold Out</span>` : `<button class="product-quick" data-id="${p.id}" aria-label="Quick view ${p.name}">+</button>`}
      </div>
      <p class="product-cat">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-price">${p.soldOut ? "Sold out" : p.price + " EGP"}</p>
    `;
 
    card.addEventListener("click", (e) => {
      if (e.target.closest(".product-quick")) return;
      openQuickView(p.id);
    });
    const quickBtn = card.querySelector(".product-quick");
    if (quickBtn){
      quickBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openQuickView(p.id);
      });
    }
 
    container.appendChild(card);
  });
}
 
/* ===================================================================
   Shop page — category filter + pagination (shop page only)
   Shows PRODUCTS_PER_PAGE items at a time, with numbered page buttons
   (1, 2, 3…). Switching category resets back to page 1.
   =================================================================== */
let shopFilter = "all";
let shopPage = 1;

function getFilteredProducts(){
  return shopFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === shopFilter);
}

function renderShopGrid(){
  const grid = document.getElementById("product-grid");
  const pager = document.getElementById("shop-pagination");
  if (!grid) return;
  // Show every product in the selected category (no page limit)
  const items = getFilteredProducts();
  renderProductGrid(grid, items);
  if (items.length === 0){
    grid.innerHTML = '<p class="shop-empty">New pieces in this category are coming soon.</p>';
  }
  if (pager) pager.innerHTML = "";
}

function initShopPage(){
  const grid = document.getElementById("product-grid");
  if (!grid) return; // not on the shop page

  const filterTabs = document.getElementById("filter-tabs");
  if (filterTabs){
    filterTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;
      filterTabs.querySelectorAll(".filter-tab").forEach(t => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      shopFilter = tab.dataset.filter;
      shopPage = 1;
      renderShopGrid();
    });
  }

  renderShopGrid();
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
  const imgs = getImages(p);
  pvPhoto.innerHTML = imgs.length ? `
  <img class="pv-main" src="${imgs[0]}" alt="${p.name}">
  ${imgs.length > 1 ? `<div class="pv-thumbs">
    ${imgs.map((src, i) => `<button type="button" class="pv-thumb${i === 0 ? " is-active" : ""}" data-src="${src}" aria-label="Photo ${i + 1}"><img src="${src}" alt=""></button>`).join("")}
  </div>` : ""}` : "";

pvPhoto.querySelectorAll(".pv-thumb").forEach(btn => {
  btn.addEventListener("click", () => {
    pvPhoto.querySelector(".pv-main").src = btn.dataset.src;
    pvPhoto.querySelectorAll(".pv-thumb").forEach(t => t.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});
  document.getElementById("pv-cat").textContent = p.category;
  document.getElementById("pv-name").textContent = p.name;
  document.getElementById("pv-price").textContent = p.soldOut ? "Sold out" : `${p.price} EGP`;
  document.getElementById("pv-desc").textContent = p.desc;
 
  const pvAdd = document.getElementById("pv-add");
  if (pvAdd){
    pvAdd.textContent = p.soldOut ? "Sold out" : "Add to bag";
    pvAdd.disabled = !!p.soldOut;
    pvAdd.style.opacity = p.soldOut ? ".5" : "1";
    pvAdd.style.pointerEvents = p.soldOut ? "none" : "auto";
  }
 
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
  const prod = PRODUCTS.find(x => x.id === id);
  if (!prod || prod.soldOut) return;
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
/* ===================================================================
   Checkout page (checkout.html) — order summary + details form
   =================================================================== */
function renderCheckoutSummary(){
  const itemsEl = document.getElementById("checkout-items");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const summaryEl = document.getElementById("checkout-summary") || (itemsEl ? itemsEl.closest(".checkout-summary") : null);
  const submitBtn = document.getElementById("checkout-submit");
  if (!itemsEl) return;
 
  const isEmpty = cart.length === 0;
  if (summaryEl) summaryEl.classList.toggle("is-empty", isEmpty);
  const formEl = document.getElementById("checkout-form");
  if (formEl) formEl.classList.toggle("is-disabled", isEmpty);
 
  let subtotal = 0;
  itemsEl.innerHTML = "";
  cart.forEach(line => {
    const p = PRODUCTS.find(x => x.id === line.id);
    if (!p) return;
    subtotal += p.price * line.qty;
 
    const row = document.createElement("div");
    row.className = "checkout-line";
    row.innerHTML = `
      <div class="checkout-line-photo" style="--ph-a:${p.ph[0]}; --ph-b:${p.ph[1]};"></div>
      <div class="checkout-line-info">
        <p class="checkout-line-name">${p.name}</p>
        <p class="checkout-line-meta">${line.qty} × ${p.price} EGP</p>
      </div>
    `;
    itemsEl.appendChild(row);
  });
 
  if (subtotalEl) subtotalEl.textContent = `${subtotal} EGP`;
  return subtotal;
}
 
function initCheckoutForm(){
  const form = document.getElementById("checkout-form");
  if (!form) return;
 
  renderCheckoutSummary();
 
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
 
    const nameInput = document.getElementById("checkout-name");
    const emailInput = document.getElementById("checkout-email");
    const phoneInput = document.getElementById("checkout-phone");
    const addressInput = document.getElementById("checkout-address");
    const errorEl = document.getElementById("checkout-error");
    const submitBtn = document.getElementById("checkout-submit");
 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
 
    const missing = [];
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    [ [nameInput, name !== ""], [emailInput, emailOk], [phoneInput, phone !== ""], [addressInput, address !== ""] ].forEach(([el, ok]) => {
      el.classList.toggle("is-invalid", !ok);
      if (!ok) missing.push(el);
    });
 
    if (missing.length){
      if (errorEl) errorEl.classList.add("is-visible");
      missing[0].focus();
      return;
    }
    if (errorEl) errorEl.classList.remove("is-visible");
 
    const lines = cart.map(l => {
      const p = PRODUCTS.find(x => x.id === l.id);
      return `${l.qty} x ${p.name} (${p.price} EGP)`;
    }).join("\n");
    const subtotal = cart.reduce((sum, l) => {
      const p = PRODUCTS.find(x => x.id === l.id);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
 
    const msg = `New order from the website:\n${lines}\n\nSubtotal: ${subtotal} EGP\n\nCustomer details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDelivery address: ${address}`;
 
    sendOrderEmail("New Meris order", msg, submitBtn, email).then(sent => {
      if (sent){
        cart = [];
        saveCart();
        renderCart();
        form.reset();
        renderCheckoutSummary();
        setTimeout(() => { window.location.href = "index-pr.html"; }, 4500);
      }
    });
  });
}
 
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
 
 
  initShopPage();
  initQuickView();
  initCart();
  initNav();
  initCheckoutForm();
  renderCart();
});
