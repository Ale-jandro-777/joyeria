document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach((link, index) => {
        // Añadir un retraso a la animación para cada enlace
        link.style.animationDelay = '${index * 0.3}s';

        link.addEventListener('mouseover', () => {
            link.style.transition = '0.5s';
            link.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
            link.style.transform = 'rotate(3deg) scale(1.1)';
        });

        link.addEventListener('mouseout', () => {
            link.style.boxShadow = 'none';
            link.style.transform = 'rotate(0deg) scale(1)';
        });

        link.addEventListener('click', () => {
            link.style.animation = 'bounce 0.5s';
            setTimeout(() => link.style.animation = '', 500);
        });
    });
});

// Animaciones CSS agregadas desde JavaScript
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(styleSheet);