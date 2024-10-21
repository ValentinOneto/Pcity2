const iniciar = document.getElementById("iniciar");
const registrarse = document.getElementById("regist");
const nombreInput = document.getElementById("nombre");
const contraseñaInput = document.getElementById("contra");


function inicarSesion(){
    let nombre = nombreInput.value;
    let contraseña = contraseñaInput.value;
    
    postData("sesion", {nombre, contraseña},(response) =>{
        if (responde.ok){
            window.location.href = "../inicio/index.html"
        } else {
            
        }
    })

}