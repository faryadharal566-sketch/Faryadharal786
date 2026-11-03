
/* =====================================
   PUNJAB PIZZA
   ADVANCED JAVASCRIPT ENGINE
===================================== */

// IMPORTANT:
// Apna real WhatsApp number country code ke sath
// bina + sign ke yahan likhna hai.
const WHATSAPP_NUMBER = "923001234567";


/* =====================================
   1. WEBSITE LOADER
===================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});


/* =====================================
   2. PRODUCT DATABASE
===================================== */

const products = [

    {
        id: 1,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 1299,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85",
        description: "Loaded with delicious pepperoni and melted cheese.",
        badge: "BEST SELLER",
        rating: "★★★★★"
    },

    {
        id: 2,
        name: "Chicken Fajita",
        category: "pizza",
        price: 1199,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=85",
        description: "Juicy chicken, fresh vegetables and special sauce.",
        badge: "POPULAR",
        rating: "★★★★★"
    },

    {
        id: 3,
        name: "Cheese Lovers",
        category: "pizza",
        price: 1399,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85",
        description: "Extra cheese with an amazing creamy flavour.",
        badge: "CHEESY",
        rating: "★★★★★"
    },

    {
        id: 4,
        name: "BBQ Chicken Pizza",
        category: "pizza",
        price: 1499,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
        description: "Smoky BBQ chicken with a crispy golden crust.",
        badge: "SPECIAL",
        rating: "★★★★★"
    },

    {
        id: 5,
        name: "Classic Beef Burger",
        category: "burger",
        price: 599,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
        description: "Fresh beef patty with cheese and signature sauce.",
        badge: "POPULAR",
        rating: "★★★★★"
    },

    {
        id: 6,
        name: "Crispy Chicken Burger",
        category: "burger",
        price: 499,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",
        description: "Crispy chicken with fresh lettuce and sauce.",
        badge: "CRISPY",
        rating: "★★★★★"
    },

    {
        id: 7,
        name: "Loaded Fries",
        category: "fries",
        price: 399,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",
        description: "Golden fries topped with cheese and special sauce.",
        badge: "HOT",
        rating: "★★★★★"
    },

    {
        id: 8,
        name: "Cheese Fries",
        category: "fries",
        price: 449,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=85",
        description: "Crispy fries covered with melted cheese.",
        badge: "CHEESY",
        rating: "★★★★★"
    },

    {
        id: 9,
        name: "Cold Drink",
        category: "drinks",
        price: 150,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85",
        description: "Refreshing chilled drink with your meal.",
        badge: "FRESH",
        rating: "★★★★★"
    },

    {
        id: 10,
        name: "Fresh Lemonade",
        category: "drinks",
        price: 199,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=700&q=85",
        description: "Freshly prepared refreshing lemonade.",
        badge: "REFRESHING",
        rating: "★★★★★"
    },

    {
        id: 11,
        name: "Double Cheese Pizza",
        category: "pizza",
        price: 1599,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=85",
        description: "A rich pizza with double cheese and toppings.",
        badge: "PREMIUM",
        rating: "★★★★★"
    },

    {
        id: 12,
        name: "Zinger Burger",
        category: "burger",
        price: 549,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=700&q=85",
        description: "Crunchy chicken with delicious creamy sauce.",
        badge: "FAVOURITE",
        rating: "★★★★★"
    }

];


/* =====================================
   3. RENDER MENU
===================================== */

const menuGrid = document.getElementById("menuGrid");

function renderProducts(category = "all") {

    const filteredProducts = category === "all"
        ? products
        : products.filter(product =>
            product.category === category
        );

    menuGrid.innerHTML = "";

    filteredProducts.forEach((product, index) => {

        const card = document.createElement("article");

        card.className = "menu-card";

        card.style.animationDelay = `${index * 0.07}s`;

        card.innerHTML = `

            <div class="menu-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="menu-badge">
                    ${product.badge}
                </span>

            </div>

            <div class="menu-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="menu-rating">
                    ${product.rating}
                </div>

                <div class="menu-price-row">

                    <span class="menu-price">
                        PKR ${product.price.toLocaleString("en-PK")}
                    </span>

                    <button
                        class="add-cart"
                        data-id="${product.id}"
                    >
                        <i class="fa-solid fa-plus"></i>
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

        menuGrid.appendChild(card);

    });

}

renderProducts();


/* =====================================
   4. CATEGORY FILTER
===================================== */

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        renderProducts(category);

    });

});


/* =====================================
   5. SHOPPING CART
===================================== */

let cart = [];

const cartButton = document.getElementById("cartButton");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


function formatPrice(price) {

    return "PKR " + price.toLocaleString("en-PK");

}


function addToCart(productId) {

    const product = products.find(item =>
        item.id === Number(productId)
    );

    if (!product) return;

    const existing = cart.find(item =>
        item.id === product.id
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

    showToast(product.name + " added to cart!");

}


function updateCart() {

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;

    cartTotal.textContent = formatPrice(totalAmount);

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🍕
            </p>
        `;

        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        const title = document.createElement("div");
        const heading = document.createElement("h4");
        const price = document.createElement("p");

        heading.textContent = item.name;
        price.textContent = formatPrice(item.price * item.quantity);

        title.append(heading, price);

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const decrease = document.createElement("button");
        decrease.textContent = "−";
        decrease.setAttribute("aria-label", "Decrease quantity");

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const increase = document.createElement("button");
        increase.textContent = "+";
        increase.setAttribute("aria-label", "Increase quantity");

        decrease.addEventListener("click", () => {
            changeQuantity(item.id, -1);
        });

        increase.addEventListener("click", () => {
            changeQuantity(item.id, 1);
        });

        controls.append(decrease, quantity, increase);

        cartItem.append(title, controls);

        cartItems.appendChild(cartItem);

    });

}


function changeQuantity(id, amount) {

    const item = cart.find(product =>
        product.id === id
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(product =>
            product.id !== id
        );

    }

    updateCart();

}


/* =====================================
   6. MENU BUTTON EVENTS
===================================== */

menuGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-cart");

    if (!button) return;

    addToCart(button.dataset.id);

});


/* =====================================
   7. DEAL ORDER
===================================== */

document.querySelectorAll(".deal-order").forEach(button => {

    button.addEventListener("click", () => {

        const deal = {
            name: button.dataset.deal,
            price: Number(button.dataset.price)
        };

        const existing = cart.find(item =>
            item.id === deal.name
        );

        if (existing) {

            existing.quantity++;

        } else {

            cart.push({
                id: deal.name,
                name: deal.name,
                price: deal.price,
                quantity: 1
            });

        }

        updateCart();

        showToast(deal.name + " added to cart!");

    });

});


/* =====================================
   8. OPEN AND CLOSE CART
===================================== */

cartButton.addEventListener("click", () => {

    cartOverlay.classList.add("open");

    document.body.style.overflow = "hidden";

});


function hideCart() {

    cartOverlay.classList.remove("open");

    document.body.style.overflow = "";

}

closeCart.addEventListener("click", hideCart);

cartOverlay.addEventListener("click", event => {

    if (event.target === cartOverlay) {

        hideCart();

    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        hideCart();

    }

});


/* =====================================
   9. WHATSAPP CHECKOUT
===================================== */

function sendWhatsAppOrder() {

    if (cart.length === 0) {

        showToast("Your cart is empty!");

        return;

    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    let message = "🍕 *PUNJAB PIZZA ORDER* 🍕\n\n";

    cart.forEach(item => {

        message +=
            `• ${item.name}\n` +
            `  Quantity: ${item.quantity}\n` +
            `  Price: ${formatPrice(item.price * item.quantity)}\n\n`;

    });

    message +=
        "--------------------------\n" +
        `*TOTAL: ${formatPrice(total)}*\n\n` +
        "Please confirm my order.\n";

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

}

document.getElementById("checkoutButton")
    .addEventListener("click", sendWhatsAppOrder);


/* =====================================
   10. TOAST NOTIFICATION
===================================== */

function showToast(message) {

    const toast = document.getElementById("toast");

    const toastText = document.getElementById("toastText");

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimeout);

    window.toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================
   11. ADVANCED NAVBAR
===================================== */

const header = document.getElementById("header");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");

});


document.querySelectorAll(".nav-link, .mobile-login").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.querySelector("i").className = "fa-solid fa-bars";

    });

});


window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 50);

}, { passive: true });


/* =====================================
   12. ACTIVE NAVBAR LINK
===================================== */

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + entry.target.id) {

                link.classList.add("active");

            }

        });

    });

}, {
    threshold: 0,
    rootMargin: "-25% 0px -65% 0px"
});

sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================
   13. SCROLL REVEAL ANIMATIONS
===================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .menu-card, .deal-card, .about-image, " +
    ".about-content, .review-card, .contact-container, .login-card"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================
   14. LOGIN FORM VALIDATION
===================================== */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    const email = document.getElementById("userEmail").value.trim();

    const password = document.getElementById("userPassword").value;

    const loginMessage = document.getElementById("loginMessage");

    if (name.length < 3) {

        loginMessage.style.color = "#ff6464";

        loginMessage.textContent = "Please enter your full name.";

        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        loginMessage.style.color = "#ff6464";

        loginMessage.textContent = "Please enter a valid email.";

        return;

    }

    if (password.length < 6) {

        loginMessage.style.color = "#ff6464";

        loginMessage.textContent = "Password must have at least 6 characters.";

        return;

    }

    loginMessage.style.color = "#6dff9b";

    loginMessage.textContent =
        "Welcome " + name + "! Demo form submitted successfully.";

});


/* =====================================
   15. CONTACT FORM
===================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    showToast("Message form submitted successfully!");

    contactForm.reset();

});


/* =====================================
   16. WHATSAPP FLOATING BUTTON
===================================== */

const whatsappButton = document.querySelector(".whatsapp-button");

whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${
    encodeURIComponent("Hello Punjab Pizza! I want to place an order.")
}`;


/* =====================================
   17. INITIAL CART
===================================== */

updateCart();

console.log("🍕 Punjab Pizza Website Loaded Successfully!");
