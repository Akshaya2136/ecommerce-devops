/* ============================================================
   SUNDARI CLOSET — script.js
   Full ecommerce logic: Cart, Wishlist, Filter, Search, QuickView
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, name: "Banarasi Silk Saree", sub: "Royal Weave Collection",
    price: 3499, originalPrice: 4999, category: "ethnic",
    emoji: "🥻", bg: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    badge: "sale", desc: "Luxurious Banarasi silk saree with intricate gold zari work. Perfect for weddings and festive occasions. Comes with a matching blouse piece.",
    height: "tall"
  },
  {
    id: 2, name: "Floral Anarkali Kurti", sub: "Everyday Ethnic",
    price: 999, originalPrice: 1499, category: "ethnic",
    emoji: "👘", bg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
    badge: "new", desc: "A breezy, floral-printed Anarkali kurti in soft cotton fabric. Ideal for daily wear, office, or casual outings.",
    height: "short"
  },
  {
    id: 3, name: "Gold Jhumka Earrings", sub: "Kundan & Meenakari",
    price: 699, originalPrice: 999, category: "accessories",
    emoji: "💛", bg: "linear-gradient(135deg,#fff9c4,#ffee58)",
    badge: "hot", desc: "Handcrafted kundan jhumkas with meenakari detailing. Lightweight and comfortable for all-day wear.",
    height: "short"
  },
  {
    id: 4, name: "Festive Lehenga Set", sub: "Navratri Special Edition",
    price: 4299, originalPrice: 5999, category: "ethnic",
    emoji: "✨", bg: "linear-gradient(135deg,#f3e5f5,#e1bee7)",
    badge: "sale", desc: "A stunning three-piece festive lehenga with heavy embroidery on the choli and a fully flared skirt with gota patti detailing.",
    height: "tall"
  },
  {
    id: 5, name: "Indo-Western Coord Set", sub: "Fusion Fashion",
    price: 1899, originalPrice: 2499, category: "western",
    emoji: "👗", bg: "linear-gradient(135deg,#e0f7fa,#b2ebf2)",
    badge: "new", desc: "A chic coord set blending Indian embroidery with a contemporary silhouette. Features a crop top and wide-leg palazzo pants.",
    height: "medium"
  },
  {
    id: 6, name: "Mojari Block Heels", sub: "Rajasthani Craft",
    price: 1299, originalPrice: 1699, category: "footwear",
    emoji: "👡", bg: "linear-gradient(135deg,#fbe9e7,#ffccbc)",
    badge: "new", desc: "Authentic Rajasthani mojari crafted by artisans with traditional mirror and embroidery work, with a modern block heel.",
    height: "short"
  },
  {
    id: 7, name: "Potli Party Clutch", sub: "Velvet & Zari",
    price: 799, originalPrice: 1199, category: "bags",
    emoji: "👜", bg: "linear-gradient(135deg,#fce4ec,#f48fb1)",
    badge: "hot", desc: "An exquisite velvet potli bag with golden zari embroidery. The drawstring closure and golden tassels add a royal touch.",
    height: "short"
  },
  {
    id: 8, name: "Chanderi Silk Kurti", sub: "Premium Silk Range",
    price: 1599, originalPrice: 2199, category: "ethnic",
    emoji: "🌸", bg: "linear-gradient(135deg,#fff3e0,#ffe0b2)",
    badge: null, desc: "Delicate Chanderi silk kurti with subtle block-print motifs. The lightweight fabric drapes beautifully.",
    height: "medium"
  },
  {
    id: 9, name: "Oxidized Silver Bangles Set", sub: "Tribal Artistry",
    price: 499, originalPrice: 799, category: "accessories",
    emoji: "💍", bg: "linear-gradient(135deg,#eceff1,#cfd8dc)",
    badge: "sale", desc: "A set of 12 oxidized silver bangles featuring tribal motifs. Pairs perfectly with both ethnic and boho-western outfits.",
    height: "short"
  },
  {
    id: 10, name: "Kolhapuri Flats", sub: "Handmade Leather",
    price: 1099, originalPrice: 1499, category: "footwear",
    emoji: "🩴", bg: "linear-gradient(135deg,#f1f8e9,#dcedc8)",
    badge: "new", desc: "Genuine leather Kolhapuri chappals with intricate hand-punched designs. Durable and extremely comfortable for daily wear.",
    height: "medium"
  },
  {
    id: 11, name: "Ikat Printed Maxi Dress", sub: "Boho-Indian Fusion",
    price: 1399, originalPrice: 1899, category: "western",
    emoji: "🌺", bg: "linear-gradient(135deg,#e8eaf6,#c5cae9)",
    badge: null, desc: "A gorgeous maxi dress featuring traditional Ikat weave patterns in a contemporary silhouette. Perfect for vacations and festivals.",
    height: "tall"
  },
  {
    id: 12, name: "Embroidered Tote Bag", sub: "Handloom Heritage",
    price: 999, originalPrice: 1399, category: "bags",
    emoji: "🛍", bg: "linear-gradient(135deg,#e0f2f1,#b2dfdb)",
    badge: "hot", desc: "A spacious cotton canvas tote featuring traditional Indian embroidery. Eco-friendly, sturdy, and fashionable.",
    height: "medium"
  },
  {
    id: 13, name: "Maang Tikka Set", sub: "Bridal & Festive",
    price: 849, originalPrice: 1199, category: "accessories",
    emoji: "👑", bg: "linear-gradient(135deg,#fff8e1,#ffecb3)",
    badge: null, desc: "An elegant maang tikka paired with matching earrings featuring polki stones and pearl drops. Ideal for brides and wedding guests.",
    height: "short"
  },
  {
    id: 14, name: "Georgette Palazzo Set", sub: "Comfort Ethnic",
    price: 1199, originalPrice: 1699, category: "ethnic",
    emoji: "🌙", bg: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    badge: "sale", desc: "A flowy georgette palazzo set with ethnic print and lace detailing. Comes with a dupatta. Great for festivals and family gatherings.",
    height: "medium"
  },
  {
    id: 15, name: "Block Print Kimono Top", sub: "Contemporary Indian",
    price: 749, originalPrice: 1099, category: "western",
    emoji: "🎨", bg: "linear-gradient(135deg,#f3e5f5,#e1bee7)",
    badge: "new", desc: "A trendy kimono-style top with traditional Ajrakh block prints. Looks great over jeans or as a beach cover-up.",
    height: "short"
  },
  {
    id: 16, name: "Pearl Choker Necklace", sub: "South Indian Style",
    price: 1499, originalPrice: 2199, category: "accessories",
    emoji: "📿", bg: "linear-gradient(135deg,#fff9c4,#f0f4c3)",
    badge: null, desc: "Multi-layered pearl choker necklace in South Indian temple jewellery style. Features antique gold finish and ruby-colored stone accents.",
    height: "medium"
  },
  {
    id: 17, name: "Jaipuri Printed Jumpsuit", sub: "Fusion Ethnic",
    price: 1799, originalPrice: 2299, category: "western",
    emoji: "💜", bg: "linear-gradient(135deg,#e8f5e9,#dcedc8)",
    badge: "hot", desc: "A stylish jumpsuit with classic Jaipuri block prints. The wide-legged silhouette and V-neckline give a modern ethnic look.",
    height: "tall"
  },
  {
    id: 18, name: "Woven Potli Bag", sub: "Handloom Craft",
    price: 649, originalPrice: 899, category: "bags",
    emoji: "🎀", bg: "linear-gradient(135deg,#fbe9e7,#ffccbc)",
    badge: "sale", desc: "Handwoven potli bag crafted from natural fibers with tribal motifs. Perfect for ethnic occasions and festive outings.",
    height: "short"
  }
];

/* ────────────────────────────────────────────────────────────
   STATE
──────────────────────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('sc_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('sc_wishlist') || '[]');
let activeFilter = '';
let searchQuery = '';
let sortMode = '';
let qvQty = 1;
let currentQvProduct = null;

/* ────────────────────────────────────────────────────────────
   LOADER
──────────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initApp();
  }, 1600);
});

function initApp() {
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
  setupScrollObserver();
  setupSearchInput();
  setupScrollTop();
  setupNavbarScroll();
}

/* ────────────────────────────────────────────────────────────
   RENDER PRODUCTS (Masonry)
──────────────────────────────────────────────────────────── */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (activeFilter) {
    list = list.filter(p => p.category === activeFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  if (sortMode === 'low') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === 'high') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortMode === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function discountPct(price, orig) {
  return Math.round((1 - price / orig) * 100);
}

function getImgHeight(height) {
  if (height === 'tall') return '200px';
  if (height === 'short') return '130px';
  return '165px';
}

function isWishlisted(id) {
  return wishlist.some(w => w.id === id);
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = list.map((p, i) => {
    const disc = discountPct(p.price, p.originalPrice);
    const wishlisted = isWishlisted(p.id);
    const imgH = getImgHeight(p.height);
    const badgeHtml = p.badge
      ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? 'Sale' : p.badge === 'new' ? 'New' : 'Hot'}</span>`
      : '';

    return `
    <div class="product-card fade-in-observe" data-id="${p.id}" style="animation-delay:${i * 0.06}s">
      <div class="product-img-wrap">
        <div class="product-img" style="background:${p.bg};height:${imgH};display:flex;align-items:center;justify-content:center;font-size:${p.height === 'tall' ? '4rem' : '3rem'}">
          ${p.emoji}
        </div>
        ${badgeHtml}
        <button class="wishlist-heart ${wishlisted ? 'active' : ''}" onclick="toggleWishlist(event,${p.id})" aria-label="Wishlist">
          ${wishlisted ? '♥' : '♡'}
        </button>
        <div class="product-overlay">
          <button class="overlay-btn" onclick="openQuickView(event,${p.id})">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-sub">${p.sub}</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          <span class="product-original">${formatPrice(p.originalPrice)}</span>
          <span class="product-discount">${disc}% off</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(event,${p.id})">+ Add to Cart</button>
      </div>
    </div>`;
  }).join('');

  // Observe new cards
  setupScrollObserver();
}

/* ────────────────────────────────────────────────────────────
   FILTER & SORT
──────────────────────────────────────────────────────────── */
function filterByCategory(cat) {
  activeFilter = cat;

  // Update pills
  document.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === cat);
  });

  // Scroll to shop section
  document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderProducts();
}

function sortProducts(val) {
  sortMode = val;
  renderProducts();
}

/* ────────────────────────────────────────────────────────────
   SEARCH
──────────────────────────────────────────────────────────── */
function setupSearchInput() {
  const input = document.getElementById('searchInput');
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchQuery = input.value.trim();
      renderProducts();
      if (searchQuery) {
        document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth' });
      }
    }, 280);
  });
}

/* ────────────────────────────────────────────────────────────
   CART
──────────────────────────────────────────────────────────── */
function addToCart(e, id) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast(`🛍 Added to cart: ${product.name}`);
  animateCartIcon();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem('sc_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function openCart() {
  renderCart();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  checkOverlay();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍</div>
        <h4>Your cart is empty</h4>
        <p>Add some beautiful pieces to your cart!</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${item.bg}">
        ${item.emoji}
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function checkout() {
  showToast('✦ Redirecting to checkout… (demo)');
  setTimeout(closeCart, 1000);
}

function animateCartIcon() {
  const btn = document.querySelector('.cart-btn');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = '', 300);
}

/* ────────────────────────────────────────────────────────────
   WISHLIST
──────────────────────────────────────────────────────────── */
function toggleWishlist(e, id) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const idx = wishlist.findIndex(w => w.id === id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('♡ Removed from wishlist');
  } else {
    wishlist.push(product);
    showToast('♥ Added to wishlist!');
  }
  localStorage.setItem('sc_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  // Re-render heart on card
  const hearts = document.querySelectorAll(`.product-card[data-id="${id}"] .wishlist-heart`);
  hearts.forEach(h => {
    const wl = isWishlisted(id);
    h.classList.toggle('active', wl);
    h.textContent = wl ? '♥' : '♡';
  });
}

function updateWishlistBadge() {
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function openWishlist() {
  renderWishlist();
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  checkOverlay();
}

function renderWishlist() {
  const container = document.getElementById('wishlistItems');

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">♡</div>
        <h4>Your wishlist is empty</h4>
        <p>Heart products you love to save them here.</p>
      </div>`;
    return;
  }

  container.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${item.bg}">
        ${item.emoji}
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <button class="add-to-cart-btn" style="width:auto;padding:0.3rem 0.8rem;font-size:0.75rem"
            onclick="addToCart(null,${item.id})">Add to Cart</button>
          <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(w => w.id !== id);
  localStorage.setItem('sc_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderWishlist();
  // update card heart
  const hearts = document.querySelectorAll(`.product-card[data-id="${id}"] .wishlist-heart`);
  hearts.forEach(h => { h.classList.remove('active'); h.textContent = '♡'; });
}

/* ────────────────────────────────────────────────────────────
   QUICK VIEW
──────────────────────────────────────────────────────────── */
function openQuickView(e, id) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentQvProduct = p;
  qvQty = 1;

  const disc = discountPct(p.price, p.originalPrice);
  document.getElementById('qvContent').innerHTML = `
    <div class="qv-img-side" style="background:${p.bg}">
      <span style="font-size:6rem;">${p.emoji}</span>
    </div>
    <div class="qv-info-side">
      <span class="qv-badge">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
      <h2 class="qv-name">${p.name}</h2>
      <p class="qv-sub">${p.sub}</p>
      <div class="qv-price-row">
        <span class="qv-price">${formatPrice(p.price)}</span>
        <span class="qv-original">${formatPrice(p.originalPrice)}</span>
        <span class="qv-discount">${disc}% off</span>
      </div>
      <p class="qv-desc">${p.desc}</p>
      <div class="qv-qty">
        <label>Qty:</label>
        <div class="qv-qty-controls">
          <button class="qty-btn" onclick="changeQvQty(-1)">−</button>
          <span class="qty-num" id="qvQtyDisplay">1</span>
          <button class="qty-btn" onclick="changeQvQty(1)">+</button>
        </div>
      </div>
      <div class="qv-actions">
        <button class="btn-primary" onclick="qvAddToCart()">Add to Cart 🛍</button>
        <button class="btn-outline" onclick="toggleWishlist(null,${p.id});updateQvHeart()">
          <span id="qvHeart">${isWishlisted(p.id) ? '♥ Wishlisted' : '♡ Add to Wishlist'}</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickViewOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewOverlay').classList.remove('show');
  if (!document.getElementById('cartSidebar').classList.contains('open') &&
      !document.getElementById('wishlistSidebar').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function changeQvQty(delta) {
  qvQty = Math.max(1, qvQty + delta);
  document.getElementById('qvQtyDisplay').textContent = qvQty;
}

function qvAddToCart() {
  if (!currentQvProduct) return;
  for (let i = 0; i < qvQty; i++) addToCart(null, currentQvProduct.id);
  closeQuickView();
  openCart();
}

function updateQvHeart() {
  const el = document.getElementById('qvHeart');
  if (!el || !currentQvProduct) return;
  el.textContent = isWishlisted(currentQvProduct.id) ? '♥ Wishlisted' : '♡ Add to Wishlist';
}

/* ────────────────────────────────────────────────────────────
   OVERLAY / CLOSE ALL
──────────────────────────────────────────────────────────── */
function checkOverlay() {
  const cartOpen = document.getElementById('cartSidebar').classList.contains('open');
  const wlOpen   = document.getElementById('wishlistSidebar').classList.contains('open');
  if (!cartOpen && !wlOpen) {
    document.getElementById('overlay').classList.remove('show');
    document.body.style.overflow = '';
  }
}

function closeAll() {
  closeCart();
  closeWishlist();
}

/* ────────────────────────────────────────────────────────────
   SECTION SWITCHING
──────────────────────────────────────────────────────────── */
function showSection(section) {
  if (section === 'shop') {
    document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function scrollToCategories() {
  document.getElementById('categoriesSection').scrollIntoView({ behavior: 'smooth' });
}

/* ────────────────────────────────────────────────────────────
   TOAST
──────────────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ────────────────────────────────────────────────────────────
   SCROLL OBSERVER (Fade in)
──────────────────────────────────────────────────────────── */
function setupScrollObserver() {
  const items = document.querySelectorAll('.fade-in-observe:not(.visible)');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(el => observer.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }
}

/* ────────────────────────────────────────────────────────────
   SCROLL TO TOP
──────────────────────────────────────────────────────────── */
function setupScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ────────────────────────────────────────────────────────────
   NAVBAR SCROLL
──────────────────────────────────────────────────────────── */
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(194,120,140,0.15)'
      : '0 2px 16px rgba(194,120,140,0.07)';
  }, { passive: true });
}

/* ────────────────────────────────────────────────────────────
   HAMBURGER / MOBILE MENU
──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
});

function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ────────────────────────────────────────────────────────────
   KEYBOARD CLOSE
──────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeQuickView();
    closeAll();
  }
});
