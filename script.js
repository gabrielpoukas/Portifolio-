document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");
    const sections = document.querySelectorAll("section");
    const themeToggle = document.getElementById("theme-toggle");


    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });


        


    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const offset = header.offsetHeight;

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });


    const activateLinkOnScroll = () => {
        const scrollY = window.scrollY + header.offsetHeight + 50;

        sections.forEach(section => {
            if (
                scrollY >= section.offsetTop &&
                scrollY < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(link => link.classList.remove("active"));
                const active = document.querySelector(
                    `.nav-list a[href="#${section.id}"]`
                );
                active?.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", activateLinkOnScroll);


    window.addEventListener("scroll", () => {
        header.style.boxShadow =
            window.scrollY > 20
                ? "0 8px 25px rgba(0,0,0,0.15)"
                : "0 4px 12px rgba(0,0,0,0.08)";
    });


    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
    });


    const revealElements = document.querySelectorAll(".secao, .card-projeto");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });



    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });


    const typingElement = document.querySelector(".inicio h2");
    const text = typingElement.textContent;
    typingElement.textContent = "";

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();

     const descriptionElement = document.getElementById("typing-description");

    const descriptionText = `Estudante de Sistemas de Informação focado em 
    Front-End (HTML, CSS, JS), com paixão por interfaces acessíveis e responsivas,
    buscando transformar conhecimento teórico em soluções práticas e escaláveis.`;

    let descIndex = 0;

    function typeDescription() {
        if (descIndex < descriptionText.length) {
            descriptionElement.textContent += descriptionText.charAt(descIndex);
            descIndex++;
            setTimeout(typeDescription, 25);
        }
    }

    typeDescription();


});