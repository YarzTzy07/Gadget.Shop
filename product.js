// Products Data with high-quality images
const products = [
    {
        id: 1,
        name: "MacBook Pro 16\"",
        price: 32500000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Laptop profesional dengan chip M2 Pro, layar Liquid Retina XDR 16 inci, dan performa luar biasa untuk kreativitas dan produktivitas.",
        category: "laptop",
        featured: true,
        stock: 15
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 21500000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartphone flagship dengan titanium aerospace-grade, kamera 48MP, dan chip A17 Pro untuk pengalaman mobile terbaik.",
        category: "smartphone",
        featured: true,
        stock: 25
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 4850000,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Headphone wireless dengan noise cancellation terbaik di kelasnya, suara high-resolution, dan baterai 30 jam.",
        category: "audio",
        featured: false,
        stock: 30
    },
    {
        id: 4,
        name: "Apple Watch Ultra 2",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1633469884535-13c0cc16ee8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartwatch adventure dengan titanium aerospace-grade, GPS presisi tinggi, dan ketahanan air hingga 100 meter.",
        category: "wearable",
        featured: true,
        stock: 20
    },
    {
        id: 5,
        name: "iPad Pro 12.9\"",
        price: 18500000,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Tablet profesional dengan chip M2, layar Liquid Retina XDR 12.9 inci, dan support Apple Pencil 2nd generation.",
        category: "tablet",
        featured: false,
        stock: 18
    },
    {
        id: 6,
        name: "Sony A7IV Camera",
        price: 28500000,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Kamera mirrorless full-frame dengan sensor 33MP, autofocus real-time tracking, dan video 4K 60p.",
        category: "camera",
        featured: true,
        stock: 12
    },
    {
        id: 7,
        name: "Samsung Odyssey G9",
        price: 18500000,
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Monitor gaming curved 49\" dengan resolutoin Dual QHD, refresh rate 240Hz, dan teknologi QLED.",
        category: "monitor",
        featured: false,
        stock: 8
    },
    {
        id: 8,
        name: "PlayStation 5 Pro",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Konsol gaming next-gen dengan ray tracing accelerated, SSD ultra-high speed, dan 4K 120fps gaming.",
        category: "gaming",
        featured: true,
        stock: 15
    },
    {
        id: 9,
        name: "AirPods Pro 2",
        price: 3850000,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Wireless earbuds dengan Active Noise Cancellation, audio berkualitas tinggi, dan Adaptive Transparency.",
        category: "audio",
        featured: false,
        stock: 35
    },
    {
        id: 10,
        name: "Samsung Galaxy Z Fold5",
        price: 24500000,
        image: "https://images.unsplash.com/photo-1684868480050-76ee5f78d4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartphone foldable dengan layar Dynamic AMOLED 2X, chip Snapdragon 8 Gen 2, dan kamera premium.",
        category: "smartphone",
        featured: true,
        stock: 10
    },
    {
        id: 11,
        name: "Dell XPS 13 Plus",
        price: 22500000,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Ultrabook premium dengan layar InfinityEdge, processor Intel Core i7, dan desain minimalist yang elegan.",
        category: "laptop",
        featured: false,
        stock: 12
    },
    {
        id: 12,
        name: "Canon EOS R5",
        price: 45500000,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Kamera mirrorless full-frame dengan video 8K, stabilisasi 5-axis, dan autofocus canggih.",
        category: "camera",
        featured: true,
        stock: 6
    },
    {
        id: 13,
        name: "MacBook Air M3",
        price: 19500000,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Laptop ultrabook dengan chip M3, layar Liquid Retina 13.6 inci, baterai hingga 18 jam, dan desain tipis ringan yang elegan.",
        category: "laptop",
        featured: false,
        stock: 22
    },
    {
        id: 14,
        name: "iPhone 14 Pro",
        price: 18500000,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartphone premium dengan Dynamic Island, kamera 48MP, chip A16 Bionic, dan Always-On display untuk pengalaman iOS terbaik.",
        category: "smartphone",
        featured: false,
        stock: 28
    },
    {
        id: 15,
        name: "Sony WF-1000XM4",
        price: 4250000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "True wireless earbuds dengan noise cancellation industry-leading, suara berkualitas tinggi, dan baterai 8 jam plus charging case.",
        category: "audio",
        featured: true,
        stock: 40
    },
    {
        id: 16,
        name: "Apple Watch Series 9",
        price: 8500000,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartwatch dengan chip S9 SiP, layar Retina always-on, health monitoring canggih, dan watchOS 10 untuk kebugaran dan produktivitas.",
        category: "wearable",
        featured: false,
        stock: 25
    },
    {
        id: 17,
        name: "iPad Air 5th Gen",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Tablet versatile dengan chip M1, layar Liquid Retina 10.9 inci, support Apple Pencil Pro, dan kamera landscape orientation untuk produktivitas maksimal.",
        category: "tablet",
        featured: false,
        stock: 20
    },
    {
        id: 18,
        name: "Nikon Z6 II",
        price: 32500000,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Kamera mirrorless full-frame dengan dual card slots, video 4K 60p, autofocus hybrid, dan performa tinggi untuk fotografi profesional.",
        category: "camera",
        featured: false,
        stock: 9
    },
    {
        id: 19,
        name: "LG UltraFine 5K",
        price: 14500000,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Monitor 27 inci 5K Retina dengan color accuracy tinggi, Thunderbolt 3 connectivity, dan desain bezel-less untuk workstation profesional.",
        category: "monitor",
        featured: false,
        stock: 11
    },
    {
        id: 20,
        name: "Xbox Series X",
        price: 9500000,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Konsol gaming next-gen dengan ray tracing, SSD custom 1TB, backward compatibility, dan Quick Resume untuk gaming 4K ultimate.",
        category: "gaming",
        featured: true,
        stock: 18
    },
    {
        id: 21,
        name: "Bose QuietComfort 45",
        price: 4850000,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Headphone wireless dengan noise cancellation adaptif, suara natural, dan baterai 24 jam untuk kenyamanan sepanjang hari.",
        category: "audio",
        featured: false,
        stock: 32
    },
    {
        id: 22,
        name: "Google Pixel 8 Pro",
        price: 13500000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Smartphone dengan Google Tensor G3, kamera computational photography, Android pure, dan AI features untuk fotografi dan produktivitas.",
        category: "smartphone",
        featured: true,
        stock: 16
    },
    {
        id: 23,
        name: "ASUS ROG Strix G15",
        price: 18500000,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Gaming laptop dengan AMD Ryzen 9, RTX 4070, layar 165Hz QHD, RGB keyboard, dan cooling system premium untuk gaming intensif.",
        category: "laptop",
        featured: false,
        stock: 14
    },
    {
        id: 24,
        name: "DJI Mavic 3 Pro",
        price: 28500000,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Drone profesional dengan kamera Hasselblad 4/3 CMOS, video 5.1K, flight time 43 menit, dan return-to-home canggih untuk fotografi udara.",
        category: "camera",
        featured: true,
        stock: 7
    }
];

// Fallback image URL
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

// Format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Display Products
function displayProducts(productsToShow = products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    if (productsToShow.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">Produk tidak ditemukan</h4>
                <p class="text-muted">Coba kata kunci lain atau lihat semua produk</p>
                <button class="btn btn-primary mt-3" onclick="clearSearch()">
                    <i class="fas fa-times mr-2"></i>
                    Hapus Pencarian
                </button>
            </div>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.innerHTML += productCard;
    });
}

// Create Product Card HTML
function createProductCard(product) {
    const isLowStock = product.stock < 5;
    const stockBadge = isLowStock ? 
        `<span class="badge badge-danger position-absolute top-0 end-0 m-3">Stok Terbatas</span>` : 
        `<span class="badge badge-success position-absolute top-0 end-0 m-3">Stok: ${product.stock}</span>`;

    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card product-card h-100">
                <div class="position-relative">
                    <img src="${product.image}" 
                         class="card-img-top product-image image-loading" 
                         alt="${product.name}"
                         onload="this.classList.remove('image-loading')"
                         onerror="this.src='${FALLBACK_IMAGE}'; this.classList.remove('image-loading')">
                    ${product.featured ? '<span class="badge badge-featured position-absolute top-0 start-0 m-3">Featured</span>' : ''}
                    ${stockBadge}
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text product-description flex-grow-1">${product.description}</p>
                    
                    <div class="product-price text-center mb-3">
                        ${formatRupiah(product.price)}
                    </div>
                    
                    ${isLowStock ? `
                        <div class="alert alert-warning alert-dismissible fade show py-2 mb-3" role="alert">
                            <small><i class="fas fa-exclamation-triangle mr-1"></i> Stok hampir habis!</small>
                        </div>
                    ` : ''}
                    
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="decreaseQuantity(${product.id})" ${isLowStock ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="text" class="quantity-display" id="quantity-${product.id}" value="1" readonly>
                        <button class="quantity-btn" onclick="increaseQuantity(${product.id})" ${isLowStock ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <button class="btn btn-primary btn-add-to-cart mt-2" 
                            onclick="addToCart(${product.id})" 
                            ${isLowStock ? 'disabled' : ''}
                            id="add-to-cart-${product.id}">
                        <i class="fas fa-cart-plus mr-2"></i>
                        ${isLowStock ? 'Stok Habis' : 'Tambah ke Keranjang'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Quantity Controls
function increaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const product = products.find(p => p.id === productId);
    let quantity = parseInt(quantityInput.value);
    
    if (quantity < product.stock) {
        quantityInput.value = quantity + 1;
        updateAddToCartButton(productId);
    } else {
        showNotification(`Stok tidak mencukupi! Stok tersedia: ${product.stock}`, 'warning');
    }
}

function decreaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateAddToCartButton(productId);
    }
}

// Update Add to Cart Button State
function updateAddToCartButton(productId) {
    const product = products.find(p => p.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const addToCartBtn = document.getElementById(`add-to-cart-${productId}`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity > product.stock) {
        addToCartBtn.disabled = true;
        addToCartBtn.innerHTML = '<i class="fas fa-times mr-2"></i> Stok Tidak Cukup';
        addToCartBtn.className = 'btn btn-danger btn-add-to-cart mt-2';
    } else {
        addToCartBtn.disabled = false;
        addToCartBtn.innerHTML = '<i class="fas fa-cart-plus mr-2"></i> Tambah ke Keranjang';
        addToCartBtn.className = 'btn btn-primary btn-add-to-cart mt-2';
    }
}

// Search Products
function setupSearch() {
    const searchInput = document.getElementById('search-product');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            displayProducts();
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
}

// Clear Search
function clearSearch() {
    const searchInput = document.getElementById('search-product');
    searchInput.value = '';
    displayProducts();
    showNotification('Pencarian dihapus', 'info');
}

// Filter by Category
function filterByCategory(category) {
    if (category === 'all') {
        displayProducts();
    } else {
        const filteredProducts = products.filter(product => 
            product.category === category
        );
        displayProducts(filteredProducts);
    }
}

// Get Featured Products
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Get Products by Category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Update Product Stock (after purchase)
function updateProductStock(productId, quantitySold) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.stock -= quantitySold;
        if (product.stock < 0) product.stock = 0;
        
        // Update UI if product is currently displayed
        const currentProductCard = document.querySelector(`[onclick="addToCart(${productId})"]`);
        if (currentProductCard) {
            const productElement = currentProductCard.closest('.col-lg-3');
            if (productElement) {
                const newProductCard = createProductCard(product);
                productElement.outerHTML = newProductCard;
            }
        }
    }
}

// Get Product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Update Dashboard Stats
function updateDashboardStats() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-categories').textContent = new Set(products.map(p => p.category)).size;
    
    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
    document.getElementById('cart-items-count').textContent = totalStock;
}

// Initialize Products (removed auto-initialization to avoid conflicts with app.js)
function initializeProducts() {
    displayProducts();
    setupSearch();
    updateDashboardStats();
}
