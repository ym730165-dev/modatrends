const cart = JSON.parse(localStorage.getItem("shop_cart")) || {};
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let total = 0;

// قائمة المنتجات
const PRODUCTS = [
  { id: "m1", name: "produit BAC lettre", price: 45 },
  { id: "m2", name: "produit BAC Eco", price: 45 },
  { id: "m3", name: "produit BAC Sience", price: 45 },
  { id: "m4", name: "produit BAC Technique", price: 45 },
  { id: "w1", name: "produit BAC Math", price: 45 },
  { id: "w2", name: "produit BAC informatique", price: 45 },
  { id: "m5", name: "produit BAC lettre 2", price: 45 },
  { id: "m6", name: "produit BAC Eco 2", price: 45 },
  { id: "m7", name: "produit BAC Sience 2", price: 45 },
  { id: "m8", name: "produit BAC Technique 2", price: 45 },
  { id: "w3", name: "produit BAC Math 2", price: 45 },
  { id: "w4", name: "produit BAC informatique 2", price: 45 }
];

// عرض المنتجات في صفحة الدفع
for (const id in cart) {
  const qty = cart[id];
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) continue;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${product.name} × ${qty}</span>
    <span>${(product.price * qty).toFixed(2)} د.ت</span>
  `;
  checkoutItems.appendChild(li);
  total += product.price * qty;
}

checkoutTotal.textContent = total.toFixed(2) + " د.ت";

// تأكيد الطلب
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const payment = document.getElementById("payment").value;

  alert(`شكراً ${name}! ✅ تم استلام طلبك.\nسيتم التوصيل إلى ${address}.`);

  // حفظ الطلب
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({
    name,
    address,
    phone,
    payment,
    cart,
    total,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("orders", JSON.stringify(orders));

  // تنظيف السلة
  localStorage.removeItem("shop_cart");

  // توجيه
  window.location.href = "admin.html";
});
