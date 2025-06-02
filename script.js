document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-hamburguesa-tocar");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("activo");
        menu.classList.toggle("activo");
    });

    document.querySelectorAll('.menu-comida').forEach(el => {
        el.addEventListener('animationend', () => {
            el.style.transform = '';
        });
    });
    const botonReservar = document.querySelector(".enviar");
    const formulario = document.querySelector(".formulario");
    const ventana = document.getElementById("ventana-reserva");
    const mensaje = document.getElementById("mensaje-reserva");
    const cerrarBtn = document.getElementById("cerrar-ventana");

    botonReservar.addEventListener("click", function (event) {
        event.preventDefault(); // ← esto es clave
        if (formulario.checkValidity()) {
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const personas = document.getElementById("personas").value;
            const fecha = document.getElementById("fecha").value;
            const hora = document.getElementById("hora").value;
    
            mensaje.innerHTML = `
                <strong>Nombre:</strong> ${nombre}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Teléfono:</strong> ${telefono}<br>
                <strong>Personas:</strong> ${personas}<br>
                <strong>Fecha:</strong> ${fecha}<br>
                <strong>Hora:</strong> ${hora}
            `;
    
            ventana.style.display = "flex";
        } else {
            formulario.reportValidity();
        }
    });

    cerrarBtn.addEventListener("click", function () {
        ventana.style.display = "none";
        formulario.reset();
    });
});