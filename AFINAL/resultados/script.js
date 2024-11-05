const options = ["aiekas","skibidi", "toilet", "sigma","yakatai","aieka","alezito","ñomñom","mi pueblo no se toca"];
    const input1 = document.getElementById('input1');
    const busq1 = document.getElementById('busq1');

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

let componentesRecibidos = [
    {
    "nombre": "Ryzen 5 5600G",
    "imagen": "https://images.versus.io/objects/amd-ryzen-5-5600g.front.variety.1627676535298.jpg",
    "velocidad": "3.9 GHz",
    "cache": "384KB 3MB 16MB",
    "hilos": 12,
    "nucleos": 6,
    "transistores": "7 nm",
    "ram_velocidad": "3200 MHz",
    "max_ram": "64 GB",
    "memoria_canales": 2,
    "gpu": {
      "velocidad": "1900 MHz",
      "unidades_ejecucion": 7,
      "pantallas_compatibles": 3,
      "unidades_generacion_salida": 8,
      "tmu": 28,
      "unidades_tonalidad": 448
    }
},
{
    "nombre": "Ryzen 7 5700X",
    "imagen": "https://images.versus.io/objects/amd-ryzen-7-5700x.front.variety.1647854895792.jpg",
    "velocidad": "3.4 GHz",
    "cache": "512KB 4MB 32MB",
    "hilos": 16,
    "nucleos": 8,
    "transistores": "7 nm",
    "ram_velocidad": "3200 MHz",
    "max_ram": "128 GB",
    "memoria_canales": 2
  }
]


const tabla = document.getElementById('tabla');
function tablaCompletar() {
    componentesRecibidos.forEach() 
}