document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = navList.querySelectorAll('a');

    // Função para alternar o menu (abrir/fechar)
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const isExpanded = navList.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Função para fechar o menu ao clicar em um link (para navegação em Single Page)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se está no modo mobile (menu está aberto)
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});