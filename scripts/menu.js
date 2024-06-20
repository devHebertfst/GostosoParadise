document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();

    const menuItems = {
        'eventos.html': 'eventos-link',
        'culinaria.html': 'culinaria-link',
        'passeios.html': 'passeios-link',
        'localidades.html': 'localidades-link'
    };

    Object.values(menuItems).forEach(id => {
        document.getElementById(id).classList.remove('active');
    });

    if (menuItems[currentPage]) {
        document.getElementById(menuItems[currentPage]).classList.add('active');
    }
});
