var componentes;

fetchData('componentes', (componentes) => {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');

    function componentesFuncion(categoria, componentesCategoria) {
        console.log(categoria, componentesCategoria);
        
        componentes.forEach(componente => {
            const option1 = document.createElement('option');
            option1.textContent = `${componente.charAt(0).toUpperCase()+ componente.slice(1).toLowerCase()} - ${categoria}`;

            const option2 = document.createElement('option');
            option2.textContent = `${componente.charAt(0).toUpperCase()+ componente.slice(1).toLowerCase()} - ${categoria}`;

            select1.appendChild(option1);
            select2.appendChild(option2);
        });

    }

    for(let categoria in componentes){
        const option1 = document.createElement('option');
        option1.value = categoria.nombre;
        option1.textContent = `${categoria.charAt(0).toUpperCase()+ categoria.slice(1).toLowerCase()} - ${categoria.nombre}`;
       

            const option2 = document.createElement('option');
            option2.value = categoria.nombre;
            option2.textContent = `${categoria.charAt(0).toUpperCase()+ categoria.slice(1).toLowerCase()} - ${categoria.nombre}`;


    

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