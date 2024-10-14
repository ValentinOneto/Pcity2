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
    let titu = document.getElementById("titu");
    componentes.forEach(componente => {
        componente.addEventListener("click", ()=> { 
        
        componentes.forEach(c => c.classList.remove("filtro"));
        componente.classList.add("filtro")

        let titulo = componente.parentElement.textContent.trim();
        titulo.textContent = titulo;
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