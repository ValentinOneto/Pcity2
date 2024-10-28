const iniciarBoton = document.getElementById("iniciar");
const registrarBoton = document.getElementById("registrar");


const nombreInput = document.getElementById("nombre");
const contraseñaInput = document.getElementById("contra");
const nombreInput2 = document.getElementById("nombre2");
const contraseñaInput2 = document.getElementById("contra2");

const login = document.getElementById("login");
const signup = document.getElementById('signup');

const error = document.getElementById("error");

const botonCrear = document.getElementById("crear");
const crearCuenta = document.getElementById("crearCuenta");
const iniciarSesion = document.getElementById("inicarSesion");


function iniciarSesion(){
    let nombre = nombreInput.value;
    let contraseña = contraseñaInput.value;
    
    postData("sesion", {nombre, contraseña},(response) =>{
        if (response.ok){
            window.location.href = "../inicio/index.html"
        } else {
            error.classList.add("error")
        }
    })
}

iniciarBoton.addEventListener("click", iniciarSesion);

function crearCuentas(){
    
    nombreInput.classList.add("non");
    contraseñaInput.classList.add("non");

    signup.classList.remove("non");

    botonCrear.classList.add("non");
    crearCuenta.classList.add("non");
    iniciarBoton.classList.add("non");

    registrarBoton.classList.remove("non");
    iniciarSesion.classList.remove("non");

}

botonCrear.addEventListener("click", crearCuentas);