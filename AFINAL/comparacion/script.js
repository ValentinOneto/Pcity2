var componentes;

fetchData('componentes', (todosLosComponentes) => {
    componentes = todosLosComponentes;
    function componentesFuncion() {
        const select1 = document.getElementById('select1');
        const select2 = document.getElementById('select2');
    
        for(const categoria in componentes) {
            componentes[categoria].forEach(componente => {
                const option1 = document.createElement('option');
                option1.value = componente.nombre;
                option1.textContent = `${categoria.charAt(0).toUpperCase()+ categoria.slice(1).toLowerCase()} - ${componente.nombre}`;
    
                const option2 = document.createElement('option');
                option2.value = componente.nombre;
                option2.textContent = `${categoria.charAt(0).toUpperCase()+ categoria.slice(1).toLowerCase()} - ${componente.nombre}`;
    
                select1.appendChild(option1);
                select2.appendChild(option2);
            });
        }
    }
    componentesFuncion();
});

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

document.getElementById("comparar").addEventListener("click", () => {
    postData('componentesComparar', [select1.value, select2.value], (response) => {
        if (response.ok)
        {
            window.location.href = "../resultados/index.html"
        }
        else {
            alert("los datos no se envian correctamente")
        }
    })
})


