document.addEventListener('DOMContentLoaded', () => {
    const options = [];
    const input1 = document.getElementById('input1');
    const busq1 = document.getElementById('busq1');

    fetchData("busqueda", sugerencias)

    function sugerencias(sugerencias) {
        sugerencias.forEach(componentes => {
            componentes.forEach(componente => {
            options.push(componente.nombre);  
            })
        })
    }

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
const contraseñaInputS = document.getElementById("contraS");
const contraseñaInputR = document.getElementById("contraR");

const componentes = document.querySelectorAll(".comp");
const personaBoton = document.getElementById("persona");
const mainRegistrar = document.getElementById("mainRegistrar");
const mainSesion = document.getElementById("mainSesion");
const fondo = document.querySelector(".inicio");
const botonRegistrar = document.getElementById("regist");
const cruzSesion = document.getElementById('cruzSesion');
const cruzRegistrar = document.getElementById('cruzRegistrar');
const iniciarBoton = document.getElementById('iniciar');
const errorS = document.getElementById('errorS');
const errorR = document.getElementById('errorR');
const botonVolverIniciar = document.getElementById('iniciarSesion');
const botonCrear = document.getElementById("crear");

const ojoS = document.getElementById("ojoS");
const ojoCloseS = document.getElementById("ojoCloseS")
const ojoR = document.getElementById("ojoR");
const ojoCloseR = document.getElementById("ojoCloseR")


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
cruzRegistrar.addEventListener('click', salirRegistrar);


function iniciarSesion() {
    const nombre = nombreInputS.value;
    const contraseña = contraseñaInputS.value;

    postData("sesion", {nombre, contraseña}, (response) => {
        if (response.ok) {
            window.location.href = "../inicio/index.html";
            personaBoton.classList.add("non");
        } else {
            errorS.classList.remove("non");
        }
    });
}
iniciarBoton.addEventListener("click", iniciarSesion);

function registrarse (){
    const nombre = nombreInputR;
    const contraseña = contraseñaInputR;

    postData("registrar", {nombre, contraseña},(response) =>{
        if (response.ok) {
            window.location.href = "../inicio/index.html";
            personaBoton.classList.add("non");
        } else {
            errorR.classList.remove("non");
        }
    })
}

function iniciar(){
    mainRegistrar.classList.add("non");
    mainSesion.classList.remove("non");
}
botonVolverIniciar.addEventListener('click', iniciar);


function crearCuenta(){
    mainSesion.classList.add("non");
    mainRegistrar.classList.remove("non");
}
botonCrear.addEventListener('click', crearCuenta);

function contraseñaS(){
    const input = contraseñaInputS;

    if(input.type == 'password'){
        input.type = 'text';
        ojoS.classList.remove("non");
        ojoCloseS.classList.add("non");

    }
    else{
        input.type = 'password'
        ojoS.classList.add("non");
        ojoCloseS.classList.remove("non");
    }
}
ojoS.addEventListener('click', contraseñaS);
ojoCloseS.addEventListener('click', contraseñaS);

function contraseñaR(){
    const input = contraseñaInputR;

    if(input.type == 'password'){
        input.type = 'text';
        ojoR.classList.remove("non");
        ojoCloseR.classList.add("non");

    }
    else{
        input.type = 'password'
        ojoR.classList.add("non");
        ojoCloseR.classList.remove("non");
    }
}
ojoR.addEventListener('click', contraseñaR);
ojoCloseR.addEventListener('click', contraseñaR);


const comps = document.querySelector(".componentes");

options.forEach(componente =>{
    const tarjeta = document.createElement('button');
    tarjeta.classList.add("comp");

    comps.appendChild(tarjeta);

    const nombre = document.createElement('h2');
    nombre.textContent = componente.nombre;

    tarjeta.appendChild(nombre);

    const imagen = document.createElement('img');
    imagen.src = componente.imagen;
    imagen.classList.add('foto');

    tarjeta.appendChild(imagen);
})