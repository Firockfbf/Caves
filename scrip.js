document.addEventListener('DOMContentLoaded', function() {
    const elementsToReveal = document.querySelectorAll('.hidden');
    
    // Fonction qui vérifie si un élément est dans la fenêtre de vue
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elementsToReveal.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {  // Déclenche l'effet avant d'arriver à la fin de la page
                element.classList.add('reveal');
            }
        });
    }

    // Vérifie la visibilité des éléments à chaque fois que l'utilisateur défile
    window.addEventListener('scroll', checkVisibility);
    
    // Vérifie les éléments dès que la page se charge
    checkVisibility();
});
