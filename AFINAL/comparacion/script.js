let opciones = [];
const input1 = document.getElementById('input1');
const busq1 = document.getElementById('busq1');

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


let procesadoresArray = [];
let fuentesArray = [];
let motherboardsArray = [];
let discosArray = [];
let ramsArray = [];
let graficasArray = [];

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');


fetchData('procesadores', (procesadores) => {
    procesadoresArray.push(procesadores);
})

fetchData('fuentes', (fuentes) => {
    fuentesArray.push(fuentes);
})

fetchData('motherboards', (motherboards) => {
    motherboardsArray.push(motherboards);
})

fetchData('discos', (discos) => {
    discosArray.push(discos);
})

fetchData('rams', (rams) => {
    ramsArray.push(rams);
})

fetchData('graficas', (graficas) => {
    graficasArray.push(graficas);
})

let componentes = document.querySelectorAll(".comp");
let titulo = document.getElementById("titu");

function inputs (){

    componentes.forEach(componente => {
        componente.addEventListener("click", ()=> { 
    
    componentes.forEach(c => c.classList.remove("filtro"));
    componente.classList.add("filtro")

    let titulos = componente.nextSibling.textContent.trim();
    titulo.textContent = titulos;

    if(titulo.textContent == "Procesador"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        }])
    } else if(titulo.textContent == "Fuente"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        }])
    } else if (titulo.textContent == "Motherboard"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        }])
    } else if(titulo.textContent == "Disco SSD"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);
        }])
    } else if(titulo.textContent == "RAM"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        }])
    } else if (titulo.textContent == "Gráfica"){
        procesadoresArray.forEach([option1, option2 => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre}`;
                option1.value = componente.nombre;

                option2 = document.createElement('option');
                option2.textContent = `${componente.nombre}`;
                option2.value = componente.nombre;
                
                select1.appendChild(option1);
                select2.appendChild(option2);

        }])
    }
});
})
inputs();
}

let botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
boton.addEventListener("click", ()=> { 

    botones.forEach(c => c.classList.remove("filtro"));
    boton.classList.add("filtro");
});
});

document.getElementById("compararBoton").addEventListener("click", () => {
    postData('componentesComparar', [select1.value, select2.value], (response) => {
        if (response.ok) {
            window.location.href = "../resultados/index.html";
        } else {
            alert("Los datos no se envían correctamente");
        }
    });
});