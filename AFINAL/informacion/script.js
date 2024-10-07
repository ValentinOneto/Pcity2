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
});
