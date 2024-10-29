const nombreInput = document.getElementById("nombre");
const contraseñaInput = document.getElementById("contraseña");


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
