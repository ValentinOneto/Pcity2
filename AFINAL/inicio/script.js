document.addEventListener('DOMContentLoaded', () => {
    let opciones = [];

    const input1 = document.getElementById('input1');
    const busq1 = document.getElementById('busq1');
    const componentesPopu = document.querySelector(".componentesPopu");

    fetchData('componentes', (componentes) => {
        const componentesProcesados = Object.values(componentes).flat().map(item => ({
            nombre: item.nombre,  
            imagen: item.imagen
        }));
        
        console.log(componentesProcesados);

        // Eliminar duplicados en las opciones
        opciones = [...new Set(componentesProcesados.map(item => item.nombre))];
        setupAutocomplete(input1, busq1, opciones);
        mostrarComponentes(componentesProcesados);
    });

    function mostrarComponentes(componentes) {
        componentes.forEach(item => {
            const tarjeta = document.createElement('button');
            const foto = document.createElement('img');
            const nombre = document.createElement('h5');
    
            tarjeta.classList.add('comp');
            foto.classList.add('foto');
            foto.src = item.imagen;
            nombre.textContent = item.nombre;
    
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(foto);
            componentesPopu.appendChild(tarjeta);

            tarjeta.addEventListener("click", click);
            function click() {
                window.location.href = "../comparacion/index.html";
            }
        });
    }

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
                    busq.innerHTML = ''; // Limpiar sugerencias.
                    window.location.href = '../comparacion/index.html';
                });
            });

            if (inputValue === '' || opcionFilt.length === 0) {
                busq.innerHTML = '';
            }
        });
    }

    const mainSesion = document.getElementById("mainSesion");
    const mainRegistrar = document.getElementById("mainRegistrar");

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
    const nombreInputS = document.getElementById("nombreS");
    const nombreInputR = document.getElementById("nombreR");

    function persona() {
        mainSesion.classList.remove("non");
        inicio.classList.add("fondo");
    }
    personaBoton.addEventListener('click', persona);

    function salirSesion() {
        mainSesion.classList.add("non");
        inicio.classList.remove("fondo");
    }
    const cruzSesion = document.getElementById('cruzSesion');
    cruzSesion.addEventListener('click', salirSesion);

    function salirRegistrar() {
        mainRegistrar.classList.add("non");
        inicio.classList.remove("fondo");
    }
    const cruzRegistrar = document.getElementById('cruzRegistrar');
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

    function registrarse() {
        const nombre = nombreInputR.value; 
        const contraseña = contraseñaInputR.value;

        postData("registrar", {nombre, contraseña}, (response) => {
            if (response.ok) {
                window.location.href = "../inicio/index.html";
                personaBoton.classList.add("non");
            } else {
                errorR.classList.remove("non");
            }
        });
    }

    function iniciar() {
        mainRegistrar.classList.add("non");
        mainSesion.classList.remove("non");
    }
    botonVolverIniciar.addEventListener('click', iniciar);

    function crearCuenta() {
        mainSesion.classList.add("non");
        mainRegistrar.classList.remove("non");
    }
    botonCrear.addEventListener('click', crearCuenta);

    function contraseñaS() {
        const input = contraseñaInputS;

        if (input.type === 'password') {
            input.type = 'text';
            ojoS.classList.remove("non");
            ojoCloseS.classList.add("non");
        } else {
            input.type = 'password';
            ojoS.classList.add("non");
            ojoCloseS.classList.remove("non");
        }
    }
    ojoS.addEventListener('click', contraseñaS);
    ojoCloseS.addEventListener('click', contraseñaS);

    function contraseñaR() {
        const input = contraseñaInputR;

        if (input.type === 'password') {
            input.type = 'text';
            ojoR.classList.remove("non");
            ojoCloseR.classList.add("non");
        } else {
            input.type = 'password';
            ojoR.classList.add("non");
            ojoCloseR.classList.remove("non");
        }
    }

    ojoR.addEventListener('click', contraseñaR);
    ojoCloseR.addEventListener('click', contraseñaR);

    document.getElementById('registrar').addEventListener('click', registrarse);
});
