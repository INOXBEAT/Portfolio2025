document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("OhlIJ0bHi37ZbZil_");

    const formulario = document.getElementById("contacto");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    agregarEventoImagenes();

    if (formulario) {
        formulario.addEventListener("submit", async function (event) {
            event.preventDefault();

            const nombre = nombreInput.value.trim();
            const email = emailInput.value.trim();
            const mensaje = mensajeInput.value.trim();

            if (!nombre) {
                M.toast({ html: "Por favor, ingresa tu nombre.", classes: "red lighten-1" });
                nombreInput.focus();
                return;
            }

            if (!email) {
                M.toast({ html: "Por favor, ingresa tu correo electrónico.", classes: "red lighten-1" });
                emailInput.focus();
                return;
            }

            if (!emailPattern.test(email)) {
                M.toast({ html: "Por favor, ingresa un correo electrónico válido.", classes: "red lighten-1" });
                emailInput.focus();
                return;
            }

            if (!mensaje) {
                M.toast({ html: "El mensaje no puede estar vacío.", classes: "red lighten-1" });
                mensajeInput.focus();
                return;
            }

            M.toast({ html: "Enviando mensaje...", classes: "blue lighten-1" });

            try {
                const response = await emailjs.send("service_ecd3usl", "template_wnbetk9", {
                    from_name: nombre,
                    from_email: email,
                    message: mensaje,
                    reply_to: "jpreciado85@gmail.com",
                });

                console.log("Correo enviado con éxito:", response);
                M.toast({ html: "Formulario enviado con éxito!", classes: "green lighten-1" });
                formulario.reset();
            } catch (error) {
                console.error("Error en EmailJS:", error);
                M.toast({ html: "Error al enviar el mensaje. Inténtalo de nuevo.", classes: "red lighten-1" });
            }
        });
    }
});


function agregarEventoImagenes() {
    document.addEventListener("click", function (event) {
        const imagen = event.target.closest(".col.s12.m6.l4 img"); // Selecciona imágenes dentro de la clase
        if (imagen) {
            Swal.fire({
                width: "90%",
                imageUrl: imagen.src,
                imageAlt: "Vista del proyecto",
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: "swal-wide",
                },
                showClass: {
                    popup: "animate__animated animate__fadeIn",
                },
                hideClass: {
                    popup: "animate__animated animate__zoomOut",
                },
            });
        }
    });
}

