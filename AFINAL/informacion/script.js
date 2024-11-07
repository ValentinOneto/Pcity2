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
                descripcion.innerHTML = `Un procesador, también conocido como CPU (Unidad Central de Procesamiento), es el "cerebro" de una computadora. Se encarga de ejecutar todas las órdenes y cálculos necesarios para que el equipo funcione, desde abrir programas hasta realizar operaciones complejas. <br><br> El procesador toma datos de la memoria, los procesa (es decir, los transforma o los usa de alguna forma) y luego envía los resultados de vuelta a la memoria o a otros componentes. Cuanto más rápido y eficiente sea el procesador, mejor funcionará la computadora.<br><br>En resumen, el procesador es el que hace que todo lo que ves y haces en la computadora sea posible, trabajando en segundo plano para ejecutar instrucciones rápidamente.`;
            } 
            else if(titulo.textContent =="Motherboard"){
                descripcion.innerHTML = `La tarjeta madre, también conocida como motherboard o placa base, es el componente central que conecta y permite la comunicación entre todos los elementos de una computadora. En ella se encuentran conectados el procesador, la memoria RAM, la tarjeta gráfica, el almacenamiento, y otros componentes esenciales para el funcionamiento del sistema.<br><br>La motherboard distribuye energía y permite el intercambio de datos entre los distintos componentes. Además, incluye puertos y ranuras de expansión que permiten añadir funciones adicionales, como tarjetas de sonido, tarjetas de red, o almacenamiento adicional, adaptándose a las necesidades de cada usuario.<br><br>En resumen, la motherboard es el "centro de operaciones" de una computadora, asegurando que cada componente pueda comunicarse eficientemente y trabajar en conjunto para el rendimiento óptimo del equipo.`;
            }
            else if(titulo.textContent =="Disco SSD"){
                descripcion.innerHTML = `Un disco SSD (Solid State Drive) es un dispositivo de almacenamiento que utiliza memoria flash en lugar de partes mecánicas para guardar datos, lo que lo hace mucho más rápido y duradero que los discos duros tradicionales (HDD). Los SSD pueden cargar el sistema operativo, aplicaciones y archivos de manera casi instantánea, mejorando significativamente la velocidad y el rendimiento general de la computadora.<br><br>Al no tener piezas móviles, los SSD son más resistentes a golpes y vibraciones, lo que los hace ideales para laptops y dispositivos portátiles. Además, consumen menos energía y generan menos calor, lo que contribuye a la eficiencia del equipo.<br><br>En resumen, un SSD ofrece un almacenamiento rápido, confiable y eficiente, acelerando todas las tareas de la computadora y mejorando la experiencia de uso en comparación con los discos tradicionales.`;
            }
            else if(titulo.textContent =="RAM"){
                descripcion.innerHTML = `La memoria RAM (Random Access Memory) es un componente clave que almacena temporalmente los datos y programas que el procesador necesita para realizar tareas de manera rápida. A diferencia del almacenamiento permanente como los discos duros o SSD, la RAM permite que el procesador acceda a la información de forma mucho más veloz, lo que mejora el rendimiento general del sistema.<br><br>Cuanta más RAM tenga una computadora, más eficiente será al manejar múltiples aplicaciones o procesos al mismo tiempo, sin experimentar ralentizaciones. Esto es especialmente útil en actividades que requieren mucho poder de procesamiento, como juegos, edición de video o multitarea intensiva.<br><br>En resumen, la RAM es esencial para que la computadora funcione de manera fluida y eficiente, permitiendo un acceso rápido a los datos necesarios para ejecutar las tareas diarias.`;
            }
            else {
                descripcion.innerHTML = `La tarjeta gráfica, o GPU (Graphics Processing Unit), es un componente esencial en una computadora encargado de generar y procesar las imágenes que se muestran en la pantalla. Se especializa en tareas relacionadas con los gráficos, como renderizar videojuegos, videos o diseños 3D, aliviando al procesador de estas tareas tan exigentes.<br><br>Las tarjetas gráficas pueden tener su propia memoria, conocida como VRAM, que les permite almacenar y acceder rápidamente a los datos visuales sin depender de la memoria principal (RAM). Esto mejora el rendimiento en aplicaciones gráficas pesadas, como la edición de video, la animación o los juegos de alta calidad.<br><br>En resumen, la tarjeta gráfica es fundamental para obtener una experiencia visual fluida y detallada en la computadora, especialmente en actividades que requieren un alto rendimiento gráfico.`;
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
