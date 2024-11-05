import { append } from "vary";

let componentes;

fetchData('componentes', (todosLosComponentes) => {
    componentes = todosLosComponentes;
});


let selects = document.querySelectorAll('.select');
    selects.forEach(select => {  
        componentes.forEach(componente => {
            let opcion = document.createElement('option').innerHTML;
            let componente = opcion;
            select.appendChild(componente);
    })
});

postData('envioComponentes', componentesSeleccionados,() => {

})