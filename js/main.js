// Main JavaScript file for EcoTaxi Barcelona by Taxi Class

// DOM Elements
const header = document.querySelector('.main-header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-list a');
const reserveButtons = document.querySelectorAll('.reserve-btn, .primary-btn, .cta-primary, .service-btn');

// Header Scroll Effect
let lastScrollY = window.scrollY;
const scrollThreshold = 100;

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mobileNav?.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Animate menu icon
    const icon = mobileMenuToggle?.querySelector('.material-icons');
    if (icon) {
        icon.textContent = mobileNav?.classList.contains('active') ? 'close' : 'menu';
    }
}

// Smooth Scrolling
function smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileNav?.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Stagger animations for grid items
            if (entry.target.classList.contains('service-card') || 
                entry.target.classList.contains('eco-card') ||
                entry.target.classList.contains('testimonial-card')) {
                
                const cards = entry.target.parentElement.querySelectorAll('.service-card, .eco-card, .testimonial-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100);
                });
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Initialize animations
function initAnimations() {
    const animateElements = document.querySelectorAll(
        '.section-header, .service-card, .feature-item, .eco-card, .testimonial-card, .cta-content'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Handle reserve button clicks
function handleReserveClick(e) {
    // Si el botón tiene un onclick definido, no hacemos nada y dejamos que se ejecute
    if (e.currentTarget.hasAttribute('onclick')) {
        return; // No interferir con botones que tienen onclick
    }
    
    // Si es un enlace real con href, dejamos que siga su curso normal
    if (e.currentTarget.tagName === 'A' && e.currentTarget.href && e.currentTarget.href !== '#') {
        return; // No prevenir el comportamiento por defecto para enlaces reales
    }
    
    e.preventDefault();
    
    // Show reservation modal or redirect to booking page
    // For now, just show an alert
    const buttonText = e.currentTarget.textContent.trim();
    
    // Simulate loading state
    const originalContent = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = '<i class="material-icons rotating">autorenew</i> Procesando...';
    e.currentTarget.disabled = true;
    
    setTimeout(() => {
        e.currentTarget.innerHTML = originalContent;
        e.currentTarget.disabled = false;
        
        // Show success message
        showNotification('¡Gracias por tu interés! Un agente se pondrá en contacto contigo en breve.', 'success');
    }, 1500);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="material-icons">${type === 'success' ? 'check_circle' : 'info'}</i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-dark);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        background-color: var(--eco-green);
    }
    
    .notification .material-icons {
        font-size: 24px;
    }
    
    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .rotating {
        animation: rotating 1s linear infinite;
    }
    
    .menu-open {
        overflow: hidden;
    }
`;

// Create and append style element
const styleElement = document.createElement('style');
styleElement.textContent = notificationStyles;
document.head.appendChild(styleElement);

// Initialize mobile navigation HTML
function createMobileNav() {
    const mobileNavHTML = `
        <nav class="mobile-nav">
            <ul class="mobile-nav-list">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#flota">Nuestra Flota</a></li>
                <li><a href="#compromiso">Compromiso Eco</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li>
                    <button class="reserve-btn" style="width: 100%; margin-top: 16px;">
                        <i class="material-icons">event_available</i>
                        Reservar Ahora
                    </button>
                </li>
            </ul>
        </nav>
    `;
    
    header.insertAdjacentHTML('afterend', mobileNavHTML);
    
    // Update mobileNav reference
    window.mobileNav = document.querySelector('.mobile-nav');
}

// Parallax effect for hero section
function handleParallax() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Create mobile navigation
    createMobileNav();
    
    // Event listeners
    window.addEventListener('scroll', () => {
        handleScroll();
        handleParallax();
    });
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    reserveButtons.forEach(button => {
        // Solo agregar el event listener a botones que NO tienen onclick
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', handleReserveClick);
        }
    });
    
    // Initialize animations
    initAnimations();
    
    // Initial scroll check
    handleScroll();
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .eco-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Phone call initiated:', link.href);
            // Here you could add analytics tracking
        });
    });
});

// Add some CSS animations
const animationStyles = `
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card,
    .eco-card,
    .testimonial-card,
    .feature-item {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .service-card.animate,
    .eco-card.animate,
    .testimonial-card.animate,
    .feature-item.animate {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
`;

// Append animation styles
const animStyleElement = document.createElement('style');
animStyleElement.textContent = animationStyles;
document.head.appendChild(animStyleElement);

console.log('EcoTaxi Barcelona by Taxi Class - Website initialized successfully');
