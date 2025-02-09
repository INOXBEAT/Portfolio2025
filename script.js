

// Validación y envío del formulario de contacto
document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación de campos vacíos
    if (!nombre || !email || !mensaje) {
        M.toast({html: 'Por favor, llena todos los campos.'});
        return;
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        M.toast({html: 'Por favor, ingresa un correo electrónico válido.'});
        return;
    }

    // Simular el envío del formulario
    M.toast({html: 'Formulario enviado con éxito!'});

    // Limpiar el formulario
    this.reset();
});

// SWEETALERT PARA IMÁGENES DE PROYECTOS

function agregarEventoImagenes() {
    document.querySelectorAll(".card img").forEach((img) => {
        // Verifica si la imagen ya tiene un evento asignado
        if (!img.dataset.listener) {
            img.dataset.listener = "true"; // Marca la imagen como escuchada
            
            img.addEventListener("click", function () {
                
                Swal.fire({
                    imageUrl: this.src,
                    imageAlt: "Vista del proyecto",
                    showCloseButton: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: "swal-wide"
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                    },
                });
            });
        }
    });
}

// Ejecutar la función cuando se cargue el DOM
document.addEventListener("DOMContentLoaded", agregarEventoImagenes);




