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

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

setupAutocomplete(input1, busq1, opciones);

fetchData('procesadores', (procesadores) => {
    todosComponentes.procesadoresArray.push(procesadores);
})

fetchData('motherboards', (motherboards) => {
    todosComponentes.motherboardsArray.push(motherboards);
})

fetchData('discos', (discos) => {
    todosComponentes.discosArray.push(discos);
})

fetchData('rams', (rams) => {
    todosComponentes.ramsArray.push(rams);
})

fetchData('graficas', (graficas) => {
    todosComponentes.graficasArray.push(graficas);
})


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
                option1.textContent = `${procesador.nombre}`;
                option1.value = procesador.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${procesador.nombre}`;
                option2.value = procesador.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if (titulo.textContent == "Motherboard"){
        todosComponentes.motherboardsArray.forEach((motherboard) => {
                const option1 = document.createElement('option');
                option1.textContent = `${motherboard.nombre}`;
                option1.value = motherboard.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${motherboard.nombre}`;
                option2.value = motherboard.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if(titulo.textContent == "Disco SSD"){
        todosComponentes.discosArray.forEach((disco) => {
                const option1 = document.createElement('option');
                option1.textContent = `${disco.nombre}`;
                option1.value = disco.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${disco.nombre}`;
                option2. value = disco.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);
        })
    } else if(titulo.textContent == "RAM"){
        todosComponentes.ramsArray.forEach((ram) => {
                const option1 = document.createElement('option');
                option1.textContent = `${ram.nombre}`;
                option1.value = ram.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${ram.nombre}`;
                option2.value = ram.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);

        })
    } else if (titulo.textContent == "Gráfica"){
        todosComponentes.graficasArray.forEach((grafica) => {
                const option1 = document.createElement('option');
                option1.textContent = `${grafica.nombre}`;
                option1.value = grafica.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${grafica.nombre}`;
                option2.value = grafica.nombre;
                
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