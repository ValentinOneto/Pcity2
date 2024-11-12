let componentesTodo;

fetchData('componentes', (data) => {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    componentesTodo = data; 
    
    function componentesFuncion(categoria) {
        if (componentesTodo[categoria]) {
            componentesTodo[categoria].forEach(componente => {
                const option1 = document.createElement('option');
                option1.textContent = `${componente.nombre.charAt(0).toUpperCase() + componente.nombre.slice(1).toLowerCase()} - ${categoria}`;
                option1.value = componente.nombre;

                const option2 = document.createElement('option');
                option2.textContent = `${componente.nombre.charAt(0).toUpperCase() + componente.nombre.slice(1).toLowerCase()} - ${categoria}`;
                option2.value = componente.nombre;

                select1.appendChild(option1);
                select2.appendChild(option2);
            });
        }
    }

    for (let categoria in componentesTodo) {
        componentesFuncion(categoria);
    }
});

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

document.getElementById("comparar").addEventListener("click", () => {
    postData('componentesComparar', [select1.value, select2.value], (response) => {
        if (response.ok) {
            window.location.href = "../resultados/index.html";
        } else {
            alert("Los datos no se envían correctamente");
        }
    });
});
