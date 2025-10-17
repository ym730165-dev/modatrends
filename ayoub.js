// بيانات المنتجات (24+ item)
const PRODUCTS = [
    { id: "m1", name: "produit BAC lettre", price: 45, cat: "men and women", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" },
    { id: "m2", name:"produit BAC Eco", price: 45, cat: "men and women", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=801&auto=format&fit=crop" },
    { id: "m3", name:"produit BAC Sience", price: 45, cat: "men and women", img: "fotor_creation_2025-10-15.jpg" },
    { id: "m4", name: "produit BAC Technique", price: 45, cat: "men and women", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=803&auto=format&fit=crop" },
  
    { id: "w1", name: "produit BAC Math", price: 220, cat: "women and men", img: "https://images.unsplash.com/photo-1534367610123-5a7f5b6a1c31?q=80&w=804&auto=format&fit=crop" },
    { id: "w2", name: "produit BAC informatique", price: 85, cat: "women and me", img: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=805&auto=format&fit=crop" },
    { id: "w3", name: "produit BAC lettre 2", price: 110, cat: "women and men", img: "https://images.unsplash.com/photo-1520975911284-afe32c6b0d3f?q=80&w=806&auto=format&fit=crop" },
    { id: "w4", name: "produit BAC Eco 2", price: 210, cat: "women", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=807&auto=format&fit=crop" },
  
    { id: "a1", name: "produit BAC Sience 2", price: 45, cat: "women and men", img: "unnamed2.jpg" },
    { id: "a2", name: "produit BAC Technique 2", price: 235, cat: "women and men", img: "https://images.unsplash.com/photo-1519741491766-87f060b4a999?q=80&w=809&auto=format&fit=crop" },
    { id: "a3", name: "produit BAC Math 2", price: 69, cat: "women and men", img: "https://images.unsplash.com/photo-1520975911284-afe32c6b0d3f?q=80&w=810&auto=format&fit=crop" },
    { id: "a4", name: "produit BAC informatique 2", price: 420, cat: "women and men", img: "https://images.unsplash.com/photo-1519741491766-87f060b4a999?q=80&w=811&auto=format&fit=crop" },
  
    { id: "m5", name: "produit BAC lettre 3", price: 75, cat:"women and men", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=812&auto=format&fit=crop" },
    { id: "m6", name: "produit BAC Eco 3", price: 145, cat: "women and men", img: "https://images.unsplash.com/photo-1519741491766-87f060b4a999?q=80&w=813&auto=format&fit=crop" },
    { id: "w5", name: "produit BAC Sience 3", price: 199, cat: "women and men", img: "unnamed3.jpg" },
    { id: "w6", name: "produit BAC Technique 3", price: 180, cat: "women and men", img: "https://images.unsplash.com/photo-1526178612674-0c6b9f2f8f70?q=80&w=815&auto=format&fit=crop" },
  
    { id: "a5", name:"produit BAC Math 3", price: 55, cat: "women and men", img: "https://images.unsplash.com/photo-1519741491766-87f060b4a999?q=80&w=816&auto=format&fit=crop" },
    { id: "a6", name: "produit BAC informatique 3", price: 120, cat: "women and men", img: "https://images.unsplash.com/photo-1520975911284-afe32c6b0d3f?q=80&w=817&auto=format&fit=crop" },
    { id: "m7", name: "produit BAC lettre 4", price: 420, cat: "women and men", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=818&auto=format&fit=crop" },
    { id: "w7", name: "produit BAC Eco 4", price: 300, cat: "women and men", img: "https://images.unsplash.com/photo-1534367610123-5a7f5b6a1c31?q=80&w=819&auto=format&fit=crop" },
  
    { id: "a7", name:"produit BAC Sience 4", price: 160, cat: "women and men", img: "https://images.unsplash.com/photo-1526178612674-0c6b9f2f8f70?q=80&w=820&auto=format&fit=crop" },
    { id: "m8", name:"produit BAC Technique 4", price: 59, cat:"women and men", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=821&auto=format&fit=crop" },
    { id: "w8", name:  "produit BAC Math 4", price: 95, cat:"women and men", img: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=822&auto=format&fit=crop" },
    { id: "a8", name: "produit BAC informatique 4", price: 35, cat: "women and men", img: "https://images.unsplash.com/photo-1519741491766-87f060b4a999?q=80&w=823&auto=format&fit=crop" }
  ];
  
  // عناصر DOM
  const productGrid = document.getElementById('product-grid');
  const cartPanel = document.getElementById('cart-panel');
  const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cart-total');
  const toast = document.getElementById('toast');
  const yearEl = document.getElementById('year');
  
  yearEl.textContent = new Date().getFullYear();
  
  // LocalStorage cart
  let CART = JSON.parse(localStorage.getItem('shop_cart') || '{}');
  
  // Render products
  function renderProducts(list = PRODUCTS){
    productGrid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <div class="category">${p.cat}</div>
        <div class="price">${p.price} د.ت</div>
        <div class="actions">
          <button class="btn add-btn" data-id="${p.id}">أضف إلى السلة</button>
          <button class="btn info-btn" data-id="${p.id}">عرض</button>
        </div>
      `;
      productGrid.appendChild(card);
    });
    attachAddButtons();
  }
  
  // Attach add-to-cart handlers
  function attachAddButtons(){
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        addToCart(id, 1);
      };
    });
    document.querySelectorAll('.info-btn').forEach(b => {
      b.onclick = () => {
        const id = b.dataset.id;
        const p = PRODUCTS.find(x => x.id === id);
        alert(`${p.name}\nالسعر: ${p.price} د.ت\nالفئة: ${p.cat}`);
      };
    });
  }
  
  // Add to cart logic
  function addToCart(id, qty=1){
    if(!CART[id]) CART[id] = 0;
    CART[id] += qty;
    saveCart();
    showToast('تمت الإضافة للسلة');
    renderCart();
  }
  
  // Save
  function saveCart(){
    localStorage.setItem('shop_cart', JSON.stringify(CART));
  }
  
  // Render cart
  function renderCart(){
    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;
    for(const id in CART){
      const qty = CART[id];
      const p = PRODUCTS.find(x => x.id === id);
      if(!p) continue;
      count += qty;
      total += p.price * qty;
  
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div style="flex:1">
          <strong>${p.name}</strong>
          <div>${p.price} د.ت</div>
          <div class="qty-control">
            <button data-op="dec" data-id="${id}">-</button>
            <span>${qty}</span>
            <button data-op="inc" data-id="${id}">+</button>
            <button data-op="del" data-id="${id}" style="margin-right:10px;background:transparent;border:0;color:var(--accent);cursor:pointer">إزالة</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
    }
    cartCount.textContent = count;
    cartTotalEl.textContent = `${total} د.ت`;
    attachCartButtons();
  }
  
  // Cart item handlers
  function attachCartButtons(){
    cartItemsList.querySelectorAll('button').forEach(b => {
      b.onclick = () => {
        const op = b.dataset.op;
        const id = b.dataset.id;
        if(op === 'inc') { CART[id] = (CART[id]||0) + 1; }
        if(op === 'dec') { CART[id] = Math.max(0, (CART[id]||0) - 1); if(CART[id]===0) delete CART[id]; }
        if(op === 'del') { delete CART[id]; }
        saveCart();
        renderCart();
      };
    });
  }
  
  // Toast
  let toastTimer;
  function showToast(text){
    toast.textContent = text;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toast.classList.add('hidden'), 1600);
  }
  
  // Cart open/close
  openCartBtn.onclick = () => { cartPanel.classList.remove('hidden'); cartPanel.setAttribute('aria-hidden','false'); renderCart(); };
  closeCartBtn.onclick = () => { cartPanel.classList.add('hidden'); cartPanel.setAttribute('aria-hidden','true'); };
  
 // Checkout button
document.getElementById('checkout').onclick = () => {
    if (Object.keys(CART).length === 0) {
      alert('السلة فارغة');
      return;
    }
    // حفظ السلة في التخزين المحلي ثم تحويل الصفحة
    saveCart();
    window.location.href = "checkout.html";
  };
  
  
  
  // Filters & search
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  
  function applyFilters(){
    let list = PRODUCTS.slice();
    const cat = categoryFilter.value;
    const q = searchInput.value.trim().toLowerCase();
    if(cat !== 'all') list = list.filter(p => p.cat === cat);
    if(q) list = list.filter(p => p.name.toLowerCase().includes(q));
    const sort = sortSelect.value;
    if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
    if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
    if(sort === 'name-asc') list.sort((a,b)=>a.name.localeCompare(b.name));
    renderProducts(list);
  }
  
  categoryFilter.onchange = applyFilters;
  searchInput.oninput = applyFilters;
  sortSelect.onchange = applyFilters;
  
  // Theme toggle (light/dark)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('site_theme');
  if(savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    if(next) document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('site_theme', next || 'light');
  };
  
  // Initialize
  renderProducts();
  renderCart();
  applyFilters();
  