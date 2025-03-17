

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item img");

    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.boxShadow = "0px 0px 15px rgba(89, 0, 255, 0.8)";
        });

        item.addEventListener("mouseout", () => {
            item.style.boxShadow = "none";
        });
    });
});


// JavaScript para animar la aparición de los productos
window.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.producto');

    productos.forEach((producto, index) => {
        setTimeout(() => {
            producto.classList.add('show');
        }, 100 * index); // Animación en cadena
    });
})