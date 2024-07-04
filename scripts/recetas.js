async function loadJSON() {
    try {
        const response = await fetch("./datos/recetas.json");
        console.log(response)
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        displayRecetas(data);
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
    }
}

function displayRecetas(recetas) {
    const recetasDiv = document.getElementById('recetas');
    recetas.forEach(receta => {
        const recetaDiv = document.createElement('div');
        recetaDiv.innerHTML = `
            <h2>${receta.nombre}</h2>
            <p>Dificultad: ${receta.dificultad}</p>
            <p>Duración: ${receta.duracion}</p>
            <p>Ingredientes: ${receta.ingredientes.join(', ')}</p>
            <p>Categoría: ${receta.categoria}</p>`;
        recetasDiv.appendChild(recetaDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadJSON);