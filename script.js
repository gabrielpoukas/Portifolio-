document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = navList.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const isExpanded = navList.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    /* ===== ANIMAÇÃO DE ENTRADA AO SCROLL ===== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    /* Observar cards e seções */
    document.querySelectorAll('.card-projeto, .secao').forEach(el => {
        observer.observe(el);
    });

    /* ===== EFEITO DE SCROLL PARALELO SUAVE ===== */
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        /* Movimento suave do header */
        const header = document.querySelector('.header');
        header.style.transform = `translateY(${Math.min(scrollY * 0.05, 20)}px)`;
    });

    /* ===== EFEITO DE RIPPLE AO CLICAR BOTÕES ===== */
    document.querySelectorAll('.btn-live, .btn-github, .btn-contato').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* ===== ANIMAÇÃO DO PITCH AO CARREGAR ===== */
    const pitch = document.querySelector('.pitch');
    if (pitch) {
        pitch.style.animation = 'fadeInUp 1s ease-out 0.3s both';
    }
});