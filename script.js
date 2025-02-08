document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación de campos vacíos
    if (!nombre || !email || !mensaje) {
        M.toast({html: 'Por favor, llena todos los campos.'});
        return; // Detener ejecución si algún campo está vacío
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        M.toast({html: 'Por favor, ingresa un correo electrónico válido.'});
        return;
    }

    // Enviar formulario (simulando el envío)
    M.toast({html: 'Formulario enviado con éxito!'});

    // Limpiar los campos del formulario
    document.getElementById('contacto').reset();
});
