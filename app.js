// Global Cart Array
let cart = [];

// Load cart from localStorage
function loadCartFromStorage() {
    const storedCart = localStorage.getItem('luxuryshop_cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('luxuryshop_cart', JSON.stringify(cart));
}

// Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from storage first
    loadCartFromStorage();
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Display initial content
    displayProducts();
    updateDashboardStats();
    setupSearch();
    setupShippingMethod();

    // Show home section by default
    showSection('home');
}

// Section Navigation
function showSection(sectionName) {
    // Hide all sections
    const sections = ['home', 'products', 'cart', 'checkout', 'order-success'];
    sections.forEach(section => {
        document.getElementById(`${section}-section`).style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).style.display = 'block';
    
    // Update active nav link
    updateActiveNav(sectionName);
    
    // Update specific section content if needed
    if (sectionName === 'cart') {
        updateCartPage();
    } else if (sectionName === 'checkout') {
        updateCheckoutPage();
    }
}

// Update Active Navigation
function updateActiveNav(activeSection) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the correct nav link
    const activeLink = document.querySelector(`[onclick="showSection('${activeSection}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification alert alert-${type === 'error' ? 'danger' : type}`;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${getNotificationIcon(type)} mr-2"></i>
            <span>${message}</span>
            <button type="button" class="close ml-auto" onclick="this.parentElement.parentElement.remove()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Update Dashboard Stats
function updateDashboardStats() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('cart-items-count').textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Setup Shipping Method for Checkout
function setupShippingMethod() {
    const shippingSelect = document.getElementById('shipping-method');
    if (shippingSelect) {
        shippingSelect.addEventListener('change', function() {
            updateCheckoutPage();
        });
    }
}

// Update Checkout Page
function updateCheckoutPage() {
    const summaryContainer = document.getElementById('checkout-summary');
    if (!summaryContainer) return;

    let summaryHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        summaryHTML += `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
                <span>${formatRupiah(itemTotal)}</span>
            </div>
        `;
    });

    const shippingSelect = document.getElementById('shipping-method');
    let shippingCost = 0;
    if (shippingSelect) {
        const selectedOption = shippingSelect.value;
        switch (selectedOption) {
            case 'regular':
                shippingCost = 0;
                break;
            case 'express':
                shippingCost = 25000;
                break;
            case 'same-day':
                shippingCost = 50000;
                break;
        }
    }

    const total = subtotal + shippingCost;

    summaryHTML += `
        <hr>
        <div class="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>${formatRupiah(subtotal)}</span>
        </div>
        <div class="d-flex justify-content-between mb-2">
            <span>Pengiriman</span>
            <span>${formatRupiah(shippingCost)}</span>
        </div>
        <hr>
        <div class="d-flex justify-content-between font-weight-bold">
            <span>Total</span>
            <span>${formatRupiah(total)}</span>
        </div>
    `;

    summaryContainer.innerHTML = summaryHTML;
}

// Process Checkout
function processCheckout() {
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Simulate order processing
    showNotification('Memproses pesanan...', 'info');

    setTimeout(() => {
        // Clear cart
        cart = [];
        saveCartToStorage();

        // Update UI
        updateCartCounts();
        updateCartDropdown();

        // Show success page
        showSection('order-success');
        showNotification('Pesanan berhasil diproses!', 'success');
    }, 2000);
}
