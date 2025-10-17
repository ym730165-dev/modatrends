// انتظر حتى يتم تحميل كل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. وظيفة أزرار "أضف إلى السلة" ---
    
    // ابحث عن كل الأزرار التي تحمل الكلاس 'add-to-cart'
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // قم بتطبيق هذه الوظيفة على كل زر وجدته
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // أظهر رسالة بسيطة
            alert('تمت إضافة المنتج إلى سلة التسوق!');

            // يمكنك هنا إضافة منطق أكثر تعقيدًا في المستقبل
            // مثل إضافة المنتج فعليًا إلى كائن (Object) يمثل السلة
        });
    });


    // --- 2. وظيفة التحقق من نموذج الاشتراك بالبريد الإلكتروني ---

    // ابحث عن النموذج
    const newsletterForm = document.querySelector('.newsletter-form');

    // أضف مستمع حدث 'submit' للنموذج
    newsletterForm.addEventListener('submit', (event) => {
        // امنع السلوك الافتراضي للنموذج (وهو إعادة تحميل الصفحة)
        event.preventDefault(); 
        
        // ابحث عن حقل إدخال البريد الإلكتروني داخل النموذج
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const emailValue = emailInput.value;

        // تحقق مما إذا كان الحقل فارغًا أو لا يحتوي على '@'
        if (emailValue === '' || !emailValue.includes('@')) {
            alert('الرجاء إدخال بريد إلكتروني صحيح.');
        } else {
            // إذا كان البريد الإلكتروني صحيحًا
            alert('شكرًا لاشتراكك! سيتم إرسال الخصم إلى بريدك الإلكتروني.');
            // امسح حقل الإدخال بعد الإرسال الناجح
            emailInput.value = ''; 
        }
    });

});

// 🛒 نظام السلة
const cart = [];
const cartContainer = document.getElementById("cart-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");

// إضافة منتج للسلة
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const name = productCard.querySelector("h3").textContent;
    const priceText = productCard.querySelector(".price").textContent;
    const price = parseFloat(priceText);
    
    cart.push({ name, price });
    updateCart();
    alert(`${name} تمت إضافته إلى السلة ✅`);
  });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name}</span>
        <span>${item.price.toFixed(2)} د.ت</span>
        <button onclick="removeFromCart(${index})">❌</button>
      `;
      cartItems.appendChild(li);
    });
    cartTotal.textContent = `${total.toFixed(2)} د.ت`;
    
    // حفظ السلة في localStorage
    localStorage.setItem("cartData", JSON.stringify(cart));
  }
  
  document.getElementById("checkout-btn").addEventListener("click", () => {
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "checkout.html";
  });
  

// إزالة منتج
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// فتح وإغلاق السلة
openCartBtn.addEventListener("click", () => cartContainer.classList.remove("hidden"));
closeCartBtn.addEventListener("click", () => cartContainer.classList.add("hidden"));
