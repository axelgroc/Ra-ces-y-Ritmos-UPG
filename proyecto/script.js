// script.js
document.getElementById('boton-eventos').addEventListener('click', () => {
    document.getElementById('eventos').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = ["inicio", "eventos", "galeria", "contacto"];
    sections.forEach(section => {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById(section).innerHTML = html;
            })
            .catch(err => console.error(`Error cargando ${section}:`, err));
    });
});
