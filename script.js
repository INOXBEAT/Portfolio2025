document.addEventListener("DOMContentLoaded", function () {
    // Inicializar EmailJS (coloca tu public key)
    (function() {
        emailjs.init("OhlIJ0bHi37ZbZil_");
    })();

    agregarEventoImagenes();

    document.getElementById("contacto").addEventListener("submit", async function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            M.toast({ html: "Por favor, llena todos los campos." });
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
            this.reset();
        } catch (error) {
            console.error("Error en EmailJS:", error);
            M.toast({ html: "Error al enviar el mensaje. Inténtalo de nuevo.", classes: "red lighten-1" });
        }
    });
});

function agregarEventoImagenes() {
    document.querySelector(".card-container")?.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            Swal.fire({
                imageUrl: event.target.src,
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
