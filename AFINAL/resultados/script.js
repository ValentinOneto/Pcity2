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

let componentesRecibidos = [
    {
      "nombre": "Intel Core i5-12400",
        "imagen": "https://images.versus.io/objects/intel-core-i5-12400.front.variety.1642534862512.jpg",
        "velocidad": "2.5 GHz",
        "cache": "480KB 7,5MB 18MB",
        "hilos":12,
        "nucleos": 6,
        "transistores": "10 nm",
        "ram_velocidad": "4800 MHz",
        "max_ram": "128 GB",
        "memoria_canales": 2,
        "gpu":1,
        "velocidad_GPU": "300 MHz",
        "unidades_ejecucion": 24,
        "pantallas_compatibles": 4,
        "unidades_generacion_salida": 24,
        "tmu": 16,
        "unidades_tonalidad": 256
      },

      {
        "nombre": "Intel Core i3-14100",
          "imagen": "https://images.versus.io/objects/intel-core-i3-14100.front.variety.1704934063131.jpg",
          "velocidad": "3.5 GHz",
          "cache": "320KB 5MB 12MB",
          "hilos": 8,
          "nucleos": 4,
          "transistores": "10 nm",
          "ram_velocidad": "4800 MHz",
          "max_ram": "128 GB",
          "memoria_canales": 2,
          "gpu":1,
          "velocidad_GPU": "300 MHz",
          "unidades_ejecucion": 32,
          "pantallas_compatibles": 4,
          "unidades_generacion_salida": 8,
          "tmu": 12,
          "unidades_tonalidad": 192
       }
];

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