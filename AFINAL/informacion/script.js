document.addEventListener('DOMContentLoaded', () => {
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
    
    let componentes = document.querySelectorAll(".comp");
    let titulo = document.getElementById("titu");
    let descripcion = document.getElementById("desc");
    componentes.forEach(componente => {
        componente.addEventListener("click", ()=> { 
        
        componentes.forEach(c => c.classList.remove("filtro"));
        componente.classList.add("filtro")

        let titulos = componente.nextSibling.textContent.trim();
        titulo.textContent = titulos;

        if(titulo.textContent == "Procesador"){
            descripcion.innerHTML = `Un procesador, también conocido como CPU (Unidad Central de Procesamiento), es el "cerebro" de una computadora. Se encarga de ejecutar todas las órdenes y cálculos necesarios para que el equipo funcione, desde abrir programas hasta realizar operaciones complejas.<br><br> El procesador toma datos de la memoria, los procesa (es decir, los transforma o los usa de alguna forma) y luego envía los resultados de vuelta a la memoria o a otros componentes. Cuanto más rápido y eficiente sea el procesador, mejor funcionará la computadora.<br><br> En resumen, el procesador es el que hace que todo lo que ves y haces en la computadora sea posible, trabajando en segundo plano para ejecutar instrucciones rápidamente.`;
            } 
            else if(titulo.textContent =="Fuente"){
                descripcion.innerHTML = `La fuente de alimentación es el componente que suministra energía eléctrica a todos los demás componentes de la PC. Transforma la corriente alterna de la red en corriente continua, necesaria para que funcionen los dispositivos dentro del equipo.`;
            } 
            else if(titulo.textContent =="Motherboard"){
                descripcion.innerHTML = `La motherboard, o placa base, es el circuito principal de la computadora, donde se conectan todos los componentes como el procesador, la memoria RAM, y las tarjetas de expansión.`;
            }
            else if(titulo.textContent =="Disco SSD"){
                descripcion.innerHTML = `El disco SSD (Solid State Drive) es un tipo de almacenamiento que es mucho más rápido que los discos duros tradicionales, ya que utiliza memoria flash en lugar de partes mecánicas.`;
            }
            else if(titulo.textContent =="RAM"){
                descripcion.innerHTML = `La memoria RAM (Random Access Memory) es el almacenamiento temporal que usa la computadora para acceder rápidamente a los datos que necesita mientras está encendida.`;
            }
            else if(titulos.textContent =="Gráfica"){
                descripcion.innerHTML = `La tarjeta gráfica es el componente encargado de renderizar las imágenes, videos y gráficos que ves en la pantalla, fundamental para tareas como videojuegos y edición de video.`;
            }

    });
});

let botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
    boton.addEventListener("click", ()=> { 

        botones.forEach(c => c.classList.remove("filtro"));
        boton.classList.add("filtro");
    });
});

});
