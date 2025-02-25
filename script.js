document.addEventListener("DOMContentLoaded", function () {
    // Inicializar EmailJS
    emailjs.init("OhlIJ0bHi37ZbZil_");

    // Variables de formulario
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

            if (!nombre || !email || !mensaje) {
                M.toast({ html: "Por favor, llena todos los campos." });
                return;
            }

            if (!emailPattern.test(email)) {
                M.toast({ html: "Por favor, ingresa un correo electrónico válido." });
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
    document.querySelector(".cards-container")?.addEventListener("click", function (event) {
        const imagen = event.target.closest("img");
        if (imagen) {
            Swal.fire({
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
