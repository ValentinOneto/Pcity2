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

let componentesRecibidos = [];
// let componentesRecibidos = [
//     {
//     "nombre": "Samsung 980 Pro 1TB",
//     "imagen": "https://images.versus.io/objects/samsung-990-pro-1tb.front.variety.1669636838690.jpg",
//     "capacidad": "1 TB",
//     "velocidad_lectura_aleatoria": "1000000 IOPS",
//     "velocidad_lectura_secuencial": "7000 MB/s",
//     "velocidad_escritura_aleatoria": "1000000 IOPS",
//     "velocidad_escritura secuencial": "5000 MB/s",
//     "canales_controlador": 4
//   },

//   {
//     "nombre": "Kingston A400 480GB",
//     "imagen": "https://images.versus.io/objects/kingston-a400-480gb.front.variety.1576684641045.jpg",
//     "capacidad": "480 GB",
//     "velocidad_lectura_aleatoria": "95000 IOPS",
//     "velocidad_lectura_secuencial": "500 MB/s",
//     "velocidad_escritura_aleatoria": "85000 IOPS",
//     "velocidad_escritura secuencial": "450 MB/s",
//     "canales_controlador": 2
//   }];

/*
actual

cambiado

*/

const arrayComponentes = JSON.parse(localStorage.getItem("resultadoComp"));
arrayComponentes.componente_comparar.forEach(x => {
    componentesRecibidos.push(x)
})
// arrayComponentes.map(componentesRecibidos.push)
// componentesRecibidos.push(arrayComponentes);


//localStorage.clear();


let tabla = "<table>"; 


const categorias = new Set();
componentesRecibidos.forEach(componente => {
    Object.keys(componente).forEach(categoria => {
        if (categoria !== "nombre" && categoria !== "imagen") {
            categorias.add(categoria);
        }
    });
});


tabla += "<tr>";
componentesRecibidos.forEach(componente => {
    tabla += `<th>${componente.nombre}</th>`;
});
tabla += "</tr>";

tabla += "<tr>";
componentesRecibidos.forEach(componente => {
    tabla += `<th><img src="${componente.imagen}"</th>`;
});
tabla += "</tr>";

categorias.forEach(categoria => {
    tabla += "<tr>";
    componentesRecibidos.forEach(componente => {
        let valor = componente[categoria] ? `${categoria}: ${componente[categoria]}` : "";
        tabla += `<td>${textoBien(valor)}</td>`;
    });
    tabla += "</tr>";
});

tabla += "</table>";

document.getElementById("tabla-container").innerHTML = tabla;

    
function textoBien(text) {
    let textBonito = text.replace(/_/g, ' ');

    textBonito = textBonito.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

    return textBonito;
}