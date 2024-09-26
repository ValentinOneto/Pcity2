const opcions = ["skibidi", "toilet", "sigma","yakatai","aieka","alezito","ñomñom","mi pueblo no se toca"];
const input1 = document.getElementById('input1');
const busq1 = document.getElementById('busq1');

const input2 = document.getElementById('input2');
const busq2 = document.getElementById('busq2');

setupAutocomplete(input1, busq1, opcions);
setupAutocomplete(input2, busq2, opcions);

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
const boton = document.querySelectorAll(".filtro");
boton.forEach(filtro =>{
    filtro.addEventListener("click", function(){
        boton.forEach(f => f.classList.remove("filtro-seleccionado"))
        
        this.classList.add("filtro-seleccionado");
    });
})