       
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.fade-in-left, .fade-in-right');
            const triggerPoint = window.innerHeight * 0.8; // Punto de activación hacia abajo
            const exitPoint = window.innerHeight * 0.2; // Punto de desaparición hacia arriba
    
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
    
                if (elementTop < triggerPoint && elementTop > exitPoint) {
                    element.classList.add('active'); // Aparece al bajar
                } else {
                    element.classList.remove('active'); // Desaparece al subir
                }
            });
        });

        function toggleNightMode() {
        const body = document.body;
        if (body.classList.contains('night-mode')) {
            body.classList.remove('night-mode');
            localStorage.setItem('nightMode', 'off');
        } else {
            body.classList.add('night-mode');
            localStorage.setItem('nightMode', 'on');
        }
    }

    // Verifica el estado guardado al cargar la página
    window.onload = function() {
        if (localStorage.getItem('nightMode') === 'on') {
            document.body.classList.add('night-mode');
            document.getElementById('toggleNightMode').checked = true; // Muestra el switch activado
        }
};
    