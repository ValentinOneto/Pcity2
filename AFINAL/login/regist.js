    const nombreInput = document.getElementById("nombre");
    const contraseñaInput = document.getElementById("contraseña");
    const fondo = document.getElementById("body");

function registrarse(){
    const nombre = nombreInput.value;
    const contraseña = contraseñaInput.value;

    postData("registrar", {nombre, contraseña}, (response) => {
        if (response.ok) {
            window.location.href = "../inicio/index.html";
        } else {
            error.classList.remove("non");
        }  
    }
    )}

    function inicio(){
        window.location.href = "../inicio/index.html";
    }

    fondo.addEventListener('click', inicio)