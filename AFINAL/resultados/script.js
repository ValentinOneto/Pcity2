const opciones = ["aiekas", "skibidi", "toilet", "sigma", "yakatai", "aieka", "alezito", "ñomñom", "mi pueblo no se toca"];
const input1 = document.getElementById('input1');
const busq1 = document.getElementById('busq1');

// Función de autocompletado
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
        "nombre": "Intel Core i7-13700k",
        "imagen": "https://images.versus.io/objects/intel-core-i7-13700k.front.variety.1664372627709.jpg",
        "velocidad": "8 x 3.4 GHz / 8 x 2.5 GHz",
        "cache": " deesconocido 24MB 30MB",
        "hilos": 24,
        "nucleos": 16,
        "transistores": "7 nm",
        "ram_velocidad": "5600 MHz",
        "max_ram": "128 GB",
        "memoria_canales": 2,
        "GPU": 1,
        "velocidad_GPU": "300 MHz",
        "unidades_ejecucion": 32,
        "pantallas_compatibles": 4,
        "unidades_generacion_salida": 8,
        "tmu": 16,
        "unidades_tonalidad": 256
       },

       {
        "nombre": "Intel Core i5-12600k",
        "imagen": "https://images.versus.io/objects/intel-core-i5-12600k.front.variety.1636453151841.jpg",
        "velocidad": "6 x 3.7 GHz / 4 x 2.8 GHz",
        "cache": " deesconocido 9.5MB 20MB",
        "hilos": 16,
        "nucleos": 10,
        "transistores": "7 nm",
        "ram_velocidad": "4800 MHz",
        "max_ram": "128 GB",
        "memoria_canales": 2,
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


