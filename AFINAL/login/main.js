const iniciarBoton = document.getElementById("iniciar");
const nombreInput = document.getElementById("nombre");
const contraseñaInput = document.getElementById("contra");
const error = document.getElementById("error");

function iniciarSesion() {
    const nombre = nombreInput.value;
    const contraseña = contraseñaInput.value;

    postData("sesion", { nombre, contraseña }, (response) => {
        if (response.ok) {
            window.location.href = "../inicio/index.html";
        } else {
            error.classList.remove("non");
        }
    });
}
iniciarBoton.addEventListener("click", iniciarSesion);