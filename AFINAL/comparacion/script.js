let todosComponentes = {
    procesadoresArray : [],
    motherboardsArray : [],
    discosArray : [],
    ramsArray : [],
    graficasArray : [],
}

let opciones = [];
const input1 = document.getElementById('input1');
const busq1 = document.getElementById('busq1');

fetchData('procesadores', (procesadores) => {
    todosComponentes.procesadoresArray = Object.values(procesadores).flat().map(item => item.nombre);
})

fetchData('motherboards', (motherboards) => {
    todosComponentes.motherboardsArray = Object.values(motherboards).flat().map(item => item.nombre);
})

fetchData('discos', (discos) => {
    todosComponentes.discosArray = Object.values(discos).flat().map(item => item.nombre);
})

fetchData('rams', (rams) => {
    todosComponentes.ramsArray = Object.values(rams).flat().map(item => item.nombre);
})

fetchData('graficas', (graficas) => {
    todosComponentes.graficasArray = Object.values(graficas).flat().map(item => item.nombre);
})

fetchData('componentes', (componentes) => {
    componentes = Object.values(componentes).flat().map(item => item.nombre);
    opciones.push(...componentes);
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

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

setupAutocomplete(input1, busq1, opciones);


let componentes = document.querySelectorAll(".comp");
let titulo = document.getElementById("titulo");
let botones = document.querySelectorAll(".boton")

function colorBoton(button) {
    [...botones].forEach(b => {
        b.classList.remove('filtro')
    })
    button.classList.add('filtro')
}

function inputs (){
    componentes.forEach(componente => {
        componente.addEventListener("click", ()=> { 
    
    componentes.forEach(c => c.classList.remove("filtro"));
    componente.classList.add("filtro");

    let titulos = componente.nextSibling.textContent.trim();
    titulo.textContent = titulos;

    select1.innerHTML = '';
    select2.innerHTML = '';

    if(titulo.textContent == "Procesador"){
        todosComponentes.procesadoresArray.forEach((procesador) => {
                const option1 = document.createElement('option');
                option1.textContent = procesador;
                option1.value = procesador;

                const option2 = document.createElement('option');
                option2.textContent = procesador;
                option2.value = procesador;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if (titulo.textContent == "Motherboard"){
        todosComponentes.motherboardsArray.forEach((motherboard) => {
                const option1 = document.createElement('option');
                option1.textContent = motherboard;
                option1.value = motherboard;

                const option2 = document.createElement('option');
                option2.textContent = motherboard;
                option2.value = motherboard;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if(titulo.textContent == "Disco SSD"){
        todosComponentes.discosArray.forEach((disco) => {
                const option1 = document.createElement('option');
                option1.textContent = disco;
                option1.value = disco;

                const option2 = document.createElement('option');
                option2.textContent = disco;
                option2. value = disco;

                select1.appendChild(option1);
                select2.appendChild(option2);
        })
    } else if(titulo.textContent == "RAM"){
        todosComponentes.ramsArray.forEach((ram) => {
                const option1 = document.createElement('option');
                option1.textContent = ram;
                option1.value = ram;

                const option2 = document.createElement('option');
                option2.textContent = ram;
                option2.value = ram;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if (titulo.textContent == "Gráfica"){
        todosComponentes.graficasArray.forEach((grafica) => {
                const option1 = document.createElement('option');
                option1.textContent = grafica;
                option1.value = grafica;

                const option2 = document.createElement('option');
                option2.textContent = grafica;
                option2.value = grafica;
                
                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    }
});
})
}

inputs()



document.getElementById("compararBoton").addEventListener("click", () => {
    postData('componentesComparar', [select1.value, select2.value], (response) => {
        if (response.ok) {
            window.location.href = "../resultados/index.html";
        } else {
            alert("Los datos no se envían correctamente");
        }
    });
});