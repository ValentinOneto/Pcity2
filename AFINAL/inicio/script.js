document.addEventListener('DOMContentLoaded', () => {
    const options = ["aiekas","skibidi", "toilet", "sigma","yakatai","aieka","alezito","ñomñom","mi pueblo no se toca"];
    const input1 = document.getElementById('input1');
    const busq1 = document.getElementById('busq1');

    function setupAutocomplete(input, busq, options) {
        input.addEventListener('input', function() {
            const inputValue = input.value.toLowerCase();
            busq.innerHTML = '';

            const opcionFilt = options.filter(opcion =>
                opcion.toLowerCase().startsWith(inputValue)
            );

            opcionFilt.forEach(opcion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = opcion;
                busq.appendChild(suggestionItem);

                suggestionItem.addEventListener('click', function() {
                    input.value = opcion;
                    busq.innerHTML = '';
                });
            });

            if (inputValue === '' || opcionFilt.length === 0) {
                busq.innerHTML = '';
            }
        });
    }

    setupAutocomplete(input1, busq1, options);
});


const nombreInputS = document.getElementById("nombreS");
const nombreInputR = document.getElementById('nombreR')
const contraseñaInput = document.getElementById("contra");
const personaBoton = document.getElementById("persona");
const mainRegistrar = document.getElementById("mainRegistrar");
const mainSesion = document.getElementById("mainSesion");
const fondo = document.querySelector(".inicio");
const botonCrear = document.getElementById("crear");
const botonRegistrar = document.getElementById("regist");
const cruzSesion = document.getElementById('cruzSesion');
const cruzRegistrar = document.getElementById('cruzRegistrar');
const iniciarBoton = document.getElementById('iniciar')

function persona(){
    mainSesion.classList.remove("non");
    fondo.classList.add("fondo");
}
personaBoton.addEventListener('click', persona);


function salirSesion() {
    mainSesion.classList.add("non");
    fondo.classList.remove("fondo");
}
cruzSesion.addEventListener('click', salirSesion);

function salirRegistrar() {
    mainRegistrar.classList.add("non");
    fondo.classList.remove("fondo");
}
cruzSesion.addEventListener('click', salirRegistrar);


function iniciarSesion() {
    const nombre = nombreInput.value;
    const contraseña = contraseñaInput.value;

    postData("sesion", {nombre, contraseña}, (response) => {
        if (response.ok) {
            window.location.href = "../inicio/index.html";
            personaBoton.classList.add("non");
        } else {
            error.classList.remove("non");
        }
    });
}
iniciarBoton.addEventListener("click", iniciarSesion);


function crearCuenta(){
    mainSesion.classList.add("non");
    mainRegistrar.classList.remove("non");
}
botonCrear.addEventListener('click', crearCuenta)