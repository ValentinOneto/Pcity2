const iniciar = document.getElementById("iniciar");
const registrarse = document.getElementById("regist");
const nombreInput = document.getElementById("nombre");
const contraseñaInput = document.getElementById("contra");
const error = document.getElementById("error");


function inicarSesion(){
    let nombre = nombreInput.value;
    let contraseña = contraseñaInput.value;
    
    postData("sesion", {nombre, contraseña},(response) =>{
        if (response.ok){
            window.location.href = "../inicio/index.html"
        } else {
            error.classList.remove("err")
            error.classList.add("error")
        }
    })

}