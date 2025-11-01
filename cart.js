// Add to Cart Function with Stock Validation
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) {
        showNotification('Produk tidak ditemukan', 'error');
        return;
    }

    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > product.stock) {
        showNotification(`Stok tidak mencukupi! Stok tersedia: ${product.stock}`, 'warning');
        return;
    }

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        if (existingItem.quantity + quantity > product.stock) {
            showNotification(`Tidak dapat menambah. Total quantity akan melebihi stok (${product.stock})`, 'warning');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    // Update product stock
    updateProductStock(productId, quantity);

    // Save to localStorage
    saveCartToStorage();

    // Update UI
    updateCartCounts();
    updateCartDropdown();
    showNotification(`${product.name} berhasil ditambahkan ke keranjang`, 'success');
}

// Remove from Cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        const removedItem = cart[itemIndex];
        // Restore stock
        const product = getProductById(productId);
        if (product) {
            product.stock += removedItem.quantity;
        }
        cart.splice(itemIndex, 1);

        // Save to localStorage
        saveCartToStorage();

        // Update UI
        updateCartCounts();
        updateCartDropdown();
        updateCartPage();
        showNotification(`${removedItem.name} dihapus dari keranjang`, 'info');
    }
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    const product = getProductById(productId);

    if (!item || !product) return;

    const quantityDifference = newQuantity - item.quantity;

    if (quantityDifference > 0 && quantityDifference > product.stock) {
        showNotification(`Stok tidak mencukupi! Stok tersedia: ${product.stock}`, 'warning');
        return;
    }

    // Update stock
    updateProductStock(productId, quantityDifference);

    item.quantity = newQuantity;

    // Save to localStorage
    saveCartToStorage();

    // Update UI
    updateCartCounts();
    updateCartDropdown();
    updateCartPage();
}

// Update Cart Counts in Navbar and Sidebar
function updateCartCounts() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('sidebar-cart-count').textContent = totalItems;
    document.getElementById('cart-items-count').textContent = totalItems;
}

// Update Cart Dropdown dengan gambar fallback
function updateCartDropdown() {
    const cartDropdown = document.getElementById('cart-dropdown-items');
    cartDropdown.innerHTML = '';

    if (cart.length === 0) {
        cartDropdown.innerHTML = '<span class="dropdown-item text-muted">Keranjang kosong</span>';
    } else {
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            const cartItem = `
                <div class="dropdown-item">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" width="40" height="40" class="rounded mr-3"
                             onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'">
                        <div class="flex-grow-1">
                            <div class="text-truncate font-weight-bold">${item.name}</div>
                            <small class="text-muted">${item.quantity} x ${formatRupiah(item.price)}</small>
                        </div>
                        <div class="font-weight-bold">${formatRupiah(subtotal)}</div>
                    </div>
                </div>
            `;
            cartDropdown.innerHTML += cartItem;
        });
    }
}

// Update Cart Page dengan gambar fallback
function updateCartPage() {
    const container = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-4x mb-4"></i>
                <h4 class="text-muted">Keranjang Belanja Kosong</h4>
                <p class="text-muted mb-4">Silakan tambahkan produk ke keranjang belanja Anda</p>
                <button class="btn btn-primary" onclick="showSection('products')">
                    <i class="fas fa-shopping-bag mr-2"></i>
                    Mulai Belanja
                </button>
            </div>
        `;
    } else {
        container.innerHTML = '';
        
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            const cartItem = `
                <div class="cart-item">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                                 onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'">
                        </div>
                        <div class="col-md-3">
                            <h5 class="mb-1">${item.name}</h5>
                            <p class="text-muted mb-0">${formatRupiah(item.price)}</p>
                        </div>
                        <div class="col-md-3">
                            <div class="quantity-controls justify-content-start">
                                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="text" class="quantity-display" value="${item.quantity}" readonly>
                                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h5 class="cart-item-total">${formatRupiah(subtotal)}</h5>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cartItem;
        });
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        container.innerHTML += `
            <div class="row mt-4">
                <div class="col-12 text-right">
                    <div class="total-section p-4 bg-light rounded">
                        <h3 class="mb-0">Total: ${formatRupiah(total)}</h3>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-success btn-lg" onclick="showSection('checkout')">
                            <i class="fas fa-credit-card mr-2"></i>
                            Lanjut ke Checkout
                        </button>
                        <button class="btn btn-outline-secondary ml-2" onclick="showSection('products')">
                            <i class="fas fa-shopping-bag mr-2"></i>
                            Lanjut Belanja
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}