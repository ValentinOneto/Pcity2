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

const arrayComponentes = JSON.parse(localStorage.getItem("resultadoComp"));
arrayComponentes.componente_comparar.forEach(x => {
    componentesRecibidos.push(x)
})

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