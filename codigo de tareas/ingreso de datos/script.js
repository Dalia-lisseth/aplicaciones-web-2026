const form = document.getElementById("formCliente");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let cedula = document.getElementById("cedula").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();

    // Validar campos vacíos
    if (cedula === "" || nombre === "" || direccion === "" || telefono === "" || correo === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
    }

    // Validar cédula
    if (cedula.length !== 10 || isNaN(cedula)) {
        mensaje.style.color = "red";
        mensaje.textContent = "La cédula debe tener 10 dígitos numéricos";
        return;
    }

    // Validar teléfono
    if (telefono.length < 7) {
        mensaje.style.color = "red";
        mensaje.textContent = "Teléfono inválido";
        return;
    }

    // Mensaje de éxito
    mensaje.style.color = "green";
    mensaje.textContent = "Cliente registrado correctamente ✔";

    form.reset();
});