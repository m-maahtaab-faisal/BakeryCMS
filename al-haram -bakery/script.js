// Universal Pexels Stable Fallback Asset String
const FALLBACK_IMG = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500";

// Refactored Dataset Matrix utilizing high-stability Pexels endpoints
const CATEGORIES_DATA = [
    { name: "Birthday Cakes", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Wedding Cakes", img: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Anniversary Cakes", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Kids Cakes", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Chocolate Cakes", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Red Velvet", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Black Forest", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Fruit Cakes", img: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Cupcakes", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Pastries", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Cookies", img: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Donuts", img: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Brownies", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Fresh Bread", img: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Savory (Pizza/Burgers)", img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { name: "Pakistani Sweets", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=500" }
];

const MENU_DATA = [
    // Cakes Category
    { id: 1, name: "Premium Birthday Gold Sparkle", cat: "cakes", type: "Birthday Cakes", price: "PKR 2,500", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Layered gourmet chocolate with customized gold leaf dynamic finishing." },
    { id: 2, name: "Royal Three-Tier Wedding Floral", cat: "cakes", type: "Wedding Cakes", price: "PKR 12,000", img: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Exquisite ivory frosting featuring handcrafted editable botanicals." },
    { id: 3, name: "Classic Anniversary Velvet Rose", cat: "cakes", type: "Anniversary Cakes", price: "PKR 3,000", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Deep crimson profiles balanced structural layers of premium cream cheese." },
    { id: 4, name: "Animated Kids Wonderland Theme", cat: "cakes", type: "Kids Cakes", price: "PKR 3,500", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Whimsical structural design featuring natural, non-toxic vibrant icing configurations." },
    { id: 5, name: "Belgian Chocolate Truffle Luxury", cat: "cakes", type: "Chocolate Cakes", price: "PKR 2,800", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Pure 70% dark Belgian absolute reduction ganache layer architecture." },
    { id: 6, name: "Vibrant Crimson Red Velvet", cat: "cakes", type: "Red Velvet", price: "PKR 2,600", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Authentic buttermilk cocoa base structured with vanilla bean essence." },
    { id: 7, name: "Traditional Black Forest Gateau", cat: "cakes", type: "Black Forest", price: "PKR 2,200", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Shaved dark chocolate bark combined with wild cherry compound reduction." },
    { id: 8, name: "Glazed Summer Orchard Fruit Cake", cat: "cakes", type: "Fruit Cakes", price: "PKR 2,400", img: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Light sponge loaded with vanilla custard and dynamic tropical imports." },
    { id: 9, name: "Vanilla Bean Fondant Elegant", cat: "cakes", type: "Signature Cakes", price: "PKR 4,000", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Sleek, satin-finish structural fondant over moist Madagascar sponge." },
    { id: 10, name: "Salted Caramel Lotus Mirror", cat: "cakes", type: "Signature Cakes", price: "PKR 3,200", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Crushed Biscoff foundation topped with hot amber fluid sugar gloss." },
    { id: 11, name: "Premium Ferrero Rocher Overflow", cat: "cakes", type: "Chocolate Cakes", price: "PKR 3,500", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Hazelnut infused matrix surrounded by textured wafer crumbs." },
    { id: 12, name: "Gourmet Espresso Mocha Infusion", cat: "cakes", type: "Signature Cakes", price: "PKR 2,500", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Arabica dark roast profile layers complete with whipped butter glaze." },

    // Pastries Category
    { id: 13, name: "Elegance Chocolate Pastry", cat: "pastries", type: "Pastries", price: "PKR 250", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Single serve high density premium dark cocoa layer cube." },
    { id: 14, name: "Tropical Pineapple Pastry Slice", cat: "pastries", type: "Pastries", price: "PKR 200", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Zesty light framework whipped cream slice featuring crushed fruit." },
    { id: 15, name: "Black Forest Single Slice", cat: "pastries", type: "Pastries", price: "PKR 220", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Traditional dark forest profile scaled optimized for solo consumption." },
    { id: 16, name: "Red Velvet Luxury Mousse Cube", cat: "pastries", type: "Pastries", price: "PKR 260", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Velvet sponge base supporting an ultra-smooth premium cloud cream layout." },
    { id: 17, name: "KitKat Crunch Pastry Frame", cat: "pastries", type: "Pastries", price: "PKR 280", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Incorporates standard wafer bars inside continuous milk chocolate matrix." },
    { id: 18, name: "Oreo Cream Dream Pastry", cat: "pastries", type: "Pastries", price: "PKR 250", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Crushed hydroxide cookie fragments suspended in premium base serum." },
    { id: 19, name: "Ferrero Rocher Royal Pastry", cat: "pastries", type: "Pastries", price: "PKR 320", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Elite individual unit boasting full roasted hazelnut concentration." },

    // Pakistani Sweets / Mithai Category
    { id: 20, name: "Desi Ghee Gulab Jamun", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,200/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Deep fried organic milk solids metrics saturated in cardamom sugar syrup." },
    { id: 21, name: "Khoya Luxurious Barfi", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,400/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Dense reduction confectionery set in perfect geometric structures." },
    { id: 22, name: "Motichoor Premium Laddu", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,000/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Gram flour micro-spheres cooked directly in clarified fat systems." },
    { id: 23, name: "Sponge Syrup Rasgulla", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,100/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Lightweight, highly elastic chhena round configurations fluidly dynamic." },
    { id: 24, name: "Velvet Texture Cham Cham", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,200/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Traditional cylindrical formats garnished with shredded desiccated coconut." },
    { id: 25, name: "Authentic Grainy Kalakand", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,500/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Slow cooked cottage cheese matrix sweetened with precise metric parameters." },
    { id: 26, name: "Rich Inverted Milk Cake", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,400/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Caramelized structural dairy blocks delivering deep traditional profiles." },
    { id: 27, name: "Crispy Flaky Soan Patisa", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,200/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Threaded, ultra-flaky sweet configuration loaded with premium pistachio." },
    { id: 28, name: "Fibrous Royal Soan Papdi", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,100/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Light, melt-in-mouth crystalline architecture built for luxury gifting." },
    { id: 29, name: "Assorted Box Mix Mithai", cat: "sweets", type: "Pakistani Sweets", price: "PKR 1,300/kg", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Comprehensive array collection highlighting all primary sweet modules." },

    // Bakery & Savory Category
    { id: 30, name: "Artisanal Fresh Sourdough Bread", cat: "bakery", type: "Fresh Bread", price: "PKR 180", img: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Naturally leavened hard-crust structural table loaf built daily." },
    { id: 31, name: "Spicy Supreme Chicken Pizza", cat: "bakery", type: "Pizza", price: "PKR 850", img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Stone baked flatbread matrix optimized with local hot seasoning variables." },
    { id: 32, name: "Gourmet Grilled Beef Burger", cat: "bakery", type: "Burgers", price: "PKR 450", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Toasted brioche housing an ultra-dense chargrilled prime muscle patty." },
    { id: 33, name: "Club Sandwich Triple Layer", cat: "bakery", type: "Sandwiches", price: "PKR 380", img: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Multi-tier toasted pullman architecture filled with organic egg and poultry." },
    { id: 34, name: "Golden Crisp Flaky Puff Patties", cat: "bakery", type: "Patties", price: "PKR 90", img: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Laminated puff pastry casing housing shredded spiced validation contents." }
];

const GALLERY_DATA = [
    { tag: "interiors", caption: "Flagship Luxury Displays", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "displays", caption: "Custom Three Tier Array", img: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "craft", caption: "Precision Lamination Stage", img: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "displays", caption: "Individual Dessert Lineup", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "interiors", caption: "Warm Ambience Optimization", img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "craft", caption: "Artisanal Glazing Node", img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "displays", caption: "Traditional Sweet Showcase", img: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { tag: "interiors", caption: "Main Boutique Counter", img: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const REVIEWS_DATA = [
    { author: "Muhammad Awais Rafiq", score: "★★★★★", text: "Everything is very good in taste. Customer dealing is awesome. Highly recommended." },
    { author: "Zain Shabir", score: "★★★★★", text: "Best bakery in Burewala. Their custom fondant cakes are structurally pristine." },
    { author: "Ayesha Malik", score: "★★★★★", text: "Good bakery. The traditional sweets are exceptionally fresh and well-balanced." },
    { author: "Hamza Niaz", score: "★★★★★", text: "Unmatched live baking quality. The presentation matches international standards." }
];

// Structural Core Logic Orchestration
document.addEventListener("DOMContentLoaded", () => {
    initAppLoader();
    initMouseFollower();
    initStickyNavbar();
    initMobileNavigation();
    populateCategories();
    populateMenuElements("all");
    initMenuFiltering();
    populateGalleryEngine("all");
    initGalleryFiltering();
    initLightboxEngine();
    populateReviewsEngine();
    initReviewSliderEngine();
    initScrollRevealEngine();
    initCounterEngine();
    generateHeroParticles();
});

// App Loader Logic
function initAppLoader() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    });
}

// Mouse Follower Engine
function initMouseFollower() {
    const follower = document.getElementById("mouseFollower");
    document.addEventListener("mousemove", (e) => {
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll("a, button, .category-card, .gallery-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            follower.style.width = "24px";
            follower.style.height = "24px";
            follower.style.backgroundColor = "rgba(214, 175, 55, 0.4)";
        });
        item.addEventListener("mouseleave", () => {
            follower.style.width = "8px";
            follower.style.height = "8px";
            follower.style.backgroundColor = "var(--luxury-gold)";
        });
    });
}

// Sticky Navbar Logic
function initStickyNavbar() {
    const navbar = document.getElementById("navbar");
    const topFloat = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            topFloat.classList.add("show");
        } else {
            navbar.classList.remove("scrolled");
            topFloat.classList.remove("show");
        }
        trackActiveNavigationLink();
    });
    topFloat.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Active Nav Link Tracker Engine
function trackActiveNavigationLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentActive = "home";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentActive = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentActive}`) {
            link.classList.add("active");
        }
    });
}

// Mobile Responsive Navigation Engine
function initMobileNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });
}

// Populate Categories UI with Bulletproof Fallback Array Injection
function populateCategories() {
    const target = document.getElementById("categoriesGrid");
    target.innerHTML = CATEGORIES_DATA.map(cat => `
        <div class="category-card reveal-item">
            <img src="${cat.img}" alt="${cat.name}" class="category-img" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            <div class="category-overlay">
                <h3 class="category-title">${cat.name}</h3>
            </div>
        </div>
    `).join('');
}

// Populate Menu Engine with Bulletproof Fallback Array Injection
function populateMenuElements(filterTag) {
    const target = document.getElementById("menuGrid");
    const dataset = filterTag === "all" ? MENU_DATA : MENU_DATA.filter(item => item.cat === filterTag);
    
    target.innerHTML = dataset.map(item => `
        <div class="product-card reveal-item" data-category="${item.cat}">
            <div class="product-img-box">
                <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
                <span class="product-meta-badge">${item.type}</span>
            </div>
            <div class="product-info">
                <div class="product-rating">⭐⭐⭐⭐⭐ 5.0</div>
                <h3 class="product-name">${item.name}</h3>
                <p class="product-desc">${item.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${item.price}</span>
                    <a href="https://wa.me/923070491535?text=Order%20Inquiry%3A%20${encodeURIComponent(item.name)}" target="_blank" class="btn btn-order-sm">
                        <i class="fab fa-whatsapp"></i> Order
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function initMenuFiltering() {
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            populateMenuElements(e.target.dataset.filter);
            setTimeout(() => initScrollRevealEngine(), 100);
        });
    });
}

// Masonry Gallery Population Engine with Bulletproof Fallback Array Injection
function populateGalleryEngine(filterTag) {
    const target = document.getElementById("masonryGallery");
    const dataset = filterTag === "all" ? GALLERY_DATA : GALLERY_DATA.filter(item => item.tag === filterTag);
    
    target.innerHTML = dataset.map(item => `
        <div class="gallery-item reveal-item" data-gtype="${item.tag}">
            <img src="${item.img}" alt="${item.caption}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            <div class="gallery-item-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

function initGalleryFiltering() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            populateGalleryEngine(e.target.dataset.gfilter);
            initLightboxEngine(); 
        });
    });
}

// Lightbox Native Implementation
function initLightboxEngine() {
    const lightbox = document.getElementById("lightbox");
    const imgElement = document.getElementById("lightboxImg");
    const caption = document.getElementById("lightboxCaption");
    
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
            lightbox.style.display = "block";
            const clickedImg = item.querySelector("img");
            imgElement.src = clickedImg.src;
            caption.innerHTML = clickedImg.alt;
        });
    });
    
    document.querySelector(".lightbox-close").addEventListener("click", () => {
        lightbox.style.display = "none";
    });
    
    lightbox.addEventListener("click", (e) => {
        if(e.target === lightbox) lightbox.style.display = "none";
    });
}

// Reviews Setup
function populateReviewsEngine() {
    const target = document.getElementById("reviewsSlider");
    target.innerHTML = REVIEWS_DATA.map(rev => `
        <div class="review-card">
            <div class="rev-stars">${rev.score}</div>
            <p class="rev-text">"${rev.text}"</p>
            <h4 class="rev-author">${rev.author}</h4>
        </div>
    `).join('');
}

// Review Slider Core Mechanics
function initReviewSliderEngine() {
    const slider = document.getElementById("reviewsSlider");
    const nextBtn = document.getElementById("slideNext");
    const prevBtn = document.getElementById("slidePrev");
    let pointer = 0;
    
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${pointer * 100}%)`;
    }
    
    nextBtn.addEventListener("click", () => {
        pointer = (pointer + 1) % REVIEWS_DATA.length;
        updateSliderPosition();
    });
    
    prevBtn.addEventListener("click", () => {
        pointer = (pointer - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length;
        updateSliderPosition();
    });
}

// Custom Accelerated Scroll Reveal Engine
function initScrollRevealEngine() {
    const targets = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-item");
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    targets.forEach(t => observer.observe(t));
}

// Counter UI Initialization
function initCounterEngine() {
    const section = document.getElementById("statsContainer");
    const counters = document.querySelectorAll(".stat-number");
    let executed = false;
    
    const obs = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !executed) {
            counters.forEach(c => {
                const targetValue = parseInt(c.dataset.target);
                let current = 0;
                const incrementalJump = targetValue / 40;
                const thread = setInterval(() => {
                    current += incrementalJump;
                    if(current >= targetValue) {
                        c.innerText = targetValue.toLocaleString() + "+";
                        clearInterval(thread);
                    } else {
                        c.innerText = Math.floor(current).toLocaleString() + "+";
                    }
                }, 25);
            });
            executed = true;
        }
    }, { threshold: 0.3 });
    
    if(section) obs.observe(section);
}

// Particle Generation System For Cinematic Hero
function generateHeroParticles() {
    const target = document.getElementById("heroParticles");
    if(!target) return;
    for(let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = "var(--luxury-gold)";
        particle.style.borderRadius = "50%";
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.transform = `translateY(0)`;
        
        particle.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: particle.style.opacity },
            { transform: `translateY(-${Math.random() * 100 + 50}px) translateX(${Math.random() * 40 - 20}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 4000 + 3000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
        target.appendChild(particle);
    }
}