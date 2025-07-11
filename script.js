// Modal funksiyalari
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');
    
    const projectData = {
        enrollex: {
            title: 'Enrollex',
            image: 'images/projects/enrollex.jpg',
            description: 'Shifoxona uchun bemorlar ro\'yxatini shakllantirish va boshqarish tizimi. C++ va Qt Framework yordamida yaratilgan.',
            link: 'https://github.com/muhammadqodir1313/enrollex'
        },
        calculator: {
            title: 'Kalkulator',
            image: 'images/projects/calc.jpg',
            description: 'Desktop kalkulator ilovasi. Asosiy matematik amallarni bajarish imkoniyatiga ega.',
            link: 'https://github.com/muhammadqodir1313/calculator'
        },
        notepad: {
            title: 'Bloknot',
            image: 'images/projects/notepad.jpg',
            description: 'Matn muharriri. Fayllarni yaratish, tahrirlash va saqlash imkoniyatlariga ega.',
            link: 'https://github.com/muhammadqodir1313/notepad'
        },
        'peer-learn': {
            title: 'Peer-Learn',
            image: 'images/projects/peer-learn.png',
            description: 'Hamma soha vakillari uchun bilim almashinuv platformasi. React, Vue.js, MongoDB, TailwindCSS.',
            link: 'https://muhammadqodir1313.github.io/Peer-Learn/'
        },
        'tatuff-ovozi': {
            title: 'TATUFF Ovozi',
            image: 'images/projects/tatuff-ovozi.png',
            description: 'Onlayn radio va eshittirishlar platformasi, foydalanuvchilar uchun zamonaviy va interaktiv dizayn. HTML, CSS, JavaScript, Bootstrap.',
            link: 'https://muhammadqodir1313.github.io/TATUFF-Ovozi/'
        },
        'basics-of-anatomy': {
            title: 'Basics of Anatomy',
            image: 'images/projects/basics-of-anatomy.png',
            description: 'Anatomiya asoslarini o\'rgatuvchi interaktiv veb-ilova. HTML, CSS, JavaScript, React, Node.js.',
            link: 'https://muhammadqodir1313.github.io/basics-of-anatomy/'
        },
        'translab': {
            title: 'Translab',
            image: 'images/projects/translab.png',
            description: 'Tarjima xizmatlari va kurslar uchun ko\'p tilli veb-sayt. HTML, CSS.',
            link: 'https://muhammadqodir1313.github.io/translab/'
        },
        'tingla': {
            title: 'Tingla',
            image: 'images/projects/tingla.jpg',
            description: 'Audio va elektron kitoblarni tinglash va o\'qish uchun platforma. HTML, CSS.',
            link: 'https://muhammadqodir1313.github.io/tingla/'
        },
        'minimal': {
            title: 'Minimal',
            image: 'images/projects/minimal.png',
            description: 'Minimalist dizayn asosidagi portfoliolar va brendlar uchun veb-sayt. HTML, CSS.',
            link: 'https://muhammadqodir1313.github.io/Minimal/'
        },
        'furnitureweb': {
            title: 'FurnitureWeb',
            image: 'images/projects/furniture.png',
            description: 'Zamonaviy mebel katalogi va buyurtma platformasi. HTML, CSS.',
            link: 'https://muhammadqodir1313.github.io/furnitureWeb/'
        }
    };

    const project = projectData[projectId];
    if (project) {
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        modalLink.href = project.link;
        modalLink.target = '_blank';
        modal.style.display = 'block';
    }
}

// Modal yopish
document.querySelector('.close').onclick = function() {
    document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Scroll bo'lganda navbar stilini o'zgartirish
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menuga bosganda avtomatik yopilish
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar active holatini boshqarish
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Kontakt forma validatsiyasi va yuborish
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Form elementlarini olish
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Validatsiya
    if (!nameInput.value.trim()) {
        alert("Iltimos, ismingizni kiriting");
        nameInput.focus();
        return;
    }

    if (!emailInput.value.trim()) {
        alert("Iltimos, email manzilingizni kiriting");
        emailInput.focus();
        return;
    }

    // Email formatini tekshirish
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Iltimos, to'g'ri email manzilini kiriting");
        emailInput.focus();
        return;
    }

    if (!messageInput.value.trim()) {
        alert("Iltimos, xabaringizni kiriting");
        messageInput.focus();
        return;
    }

    // Yuborish jarayoni
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    submitBtn.disabled = true;

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };

    try {
        // Backend ulanishini tekshirish
        const response = await fetch('https://backend-3l6p.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            credentials: 'include', // CORS uchun credentials qo'shildi
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Server xatosi: ${response.status}`);
        }
        
        const data = await response.json(); // Javobni tekshirish
        console.log('Server javobi:', data);
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Yuborildi!';
        submitBtn.style.backgroundColor = '#2ecc71';
        this.reset();
    } catch (error) {
        console.error('Ulanish xatosi:', error.message);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Serverga ulanib bo\'lmadi';
        submitBtn.style.backgroundColor = '#e74c3c';
    }

    // 3 sekunddan keyin tugmani asl holatiga qaytarish
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '#3498db';
        submitBtn.disabled = false;
    }, 3000);
});

// AOS kutubxonasini ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});

// Forma validatsiyasi
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert("Iltimos, barcha maydonlarni to'ldiring");
        return;
    }
    
    // EmailJS orqali xabar yuborish
    // ... existing code ...
});
