document.addEventListener('DOMContentLoaded', () => {
    let opciones = [];
    let componentesEntero = [];
    const input1 = document.getElementById('input1');
    const busq1 = document.getElementById('busq1');
    
    fetchData('componentes', (componentes) => {
        componentesEntero = componentes;
        const nombreComponentes = Object.values(componentes).flat().map(item => item.nombre);
        opciones.push(...nombreComponentes);
        setupAutocomplete(input1, busq1, opciones);
    
        mostrarComponentes();
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        let opciones = [];
        let componentesEntero = {};  // El objeto que contiene las categorías y los componentes
        const input1 = document.getElementById('input1');
        const busq1 = document.getElementById('busq1');
        
        fetchData('componentes', (componentes) => {
            componentesEntero = componentes;  // Asignamos el objeto correctamente
            const nombreComponentes = Object.values(componentes).flat().map(item => item.nombre);
            opciones.push(...nombreComponentes);
            setupAutocomplete(input1, busq1, opciones);
        
            mostrarComponentes();  // Llamamos a la función para mostrar los componentes
        });
        
        function mostrarComponentes() {
            // Usamos Object.entries() para recorrer el objeto
            for (const [categoria, items] of Object.entries(componentesEntero)) {
                // Verifica si 'items' es un array antes de recorrerlo
                if (Array.isArray(items)) {
                    items.forEach(componente => {
                        const tarjeta = document.createElement('button');
                        const foto = document.createElement('img');
                        const nombre = document.createElement('h5');
            
                        tarjeta.classList.add('comp');
                        foto.classList.add('foto');
            
                        foto.src = componente.imagen;
                        nombre.textContent = componente.nombre;
            
                        componentesPopu.appendChild(tarjeta);
                        tarjeta.appendChild(nombre);
                        tarjeta.appendChild(foto);
                    });
                } else {
                    console.error(`Categoria "${categoria}" no es un array.`, items);
                }
            }
        }
    
        function setupAutocomplete(input, busq, opciones) {
            input.addEventListener('input', function () {
                const inputValue = input.value ? input.value.toLowerCase() : '';  // Validación agregada
                busq.innerHTML = '';
    
                const opcionFilt = opciones.filter(opcion =>
                    opcion.toLowerCase().startsWith(inputValue)
                );
    
                opcionFilt.forEach(opcion => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.textContent = opcion;
                    busq.appendChild(suggestionItem);
    
                    suggestionItem.addEventListener('click', function () {
                        input.value = opcion;
                        busq.innerHTML = '';
                        window.location.href = '../comparacion/index.html';
                    });
                });
    
                if (inputValue === '' || opcionFilt.length === 0) {
                    busq.innerHTML = '';
                }
            });
        }
    
        setupAutocomplete(input1, busq1, opciones);
    });
    

fetchData('componentes', (componentes) => {
    const nombreComponentes = Object.values(componentes).flat().map(item => item.nombre);
    opciones.push(...nombreComponentes);
    setupAutocomplete(input1, busq1, opciones);
});

function setupAutocomplete(input, busq, opciones) {
    input.addEventListener('input', function () {
        const inputValue = input.value.toLowerCase();
        busq.innerHTML = '';

        const opcionFilt = opciones.filter(opcion =>
            opcion.toLowerCase().startsWith(inputValue)
        );

        opcionFilt.forEach(opcion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = opcion;
            busq.appendChild(suggestionItem);

            suggestionItem.addEventListener('click', function () {
                input.value = opcion;
                busq.innerHTML = '';
                window.location.href = '../comparacion/index.html';
            });
        });

        if (inputValue === '' || opcionFilt.length === 0) {
            busq.innerHTML = '';
        }
    });
}

setupAutocomplete(input1, busq1, opciones);
})

const iniciarBoton = document.getElementById('iniciar');
const errorS = document.getElementById('errorS');
const errorR = document.getElementById('errorR');
const botonVolverIniciar = document.getElementById('iniciarSesion');
const botonCrear = document.getElementById("crear");

const ojoS = document.getElementById("ojoS");
const ojoCloseS = document.getElementById("ojoCloseS");
const ojoR = document.getElementById("ojoR");
const ojoCloseR = document.getElementById("ojoCloseR");
const contraseñaInputS = document.getElementById("contraS");
const contraseñaInputR = document.getElementById("contraR");
const personaBoton = document.querySelector(".log");
const inicio = document.querySelector(".inicio");
const componentesPopu = document.querySelector(".componentesPopu");
const nombreInputS = document.getElementById("nombreS");
const nombreInputR = document.getElementById("nombreR");


function persona(){
    mainSesion.classList.remove("non");
    inicio.classList.add("fondo");
}
personaBoton.addEventListener('click', persona);


function salirSesion() {
    mainSesion.classList.add("non");
    inicio.classList.remove("fondo");
}
cruzSesion.addEventListener('click', salirSesion);

function salirRegistrar() {
    mainRegistrar.classList.add("non");
    inicio.classList.remove("fondo");
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