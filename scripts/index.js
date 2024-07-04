class Panificado {
    constructor(id, nombre, sigla, descripcion) {
        this.id = id
        this.nombre = nombre;
        this.sigla = sigla;
        this.descripcion = descripcion;
    }
    
    mostrarInfo() {
        return `${this.nombre} (${this.sigla})`;
    }
}

const precioUnidad = 250;
const descuentoMediaDocena = 0.10;
const descuentoDocena = 0.15;
const cantidadDeOpciones = 6;





const listaSabores= [
    new Panificado(1,'Molde Integral', 'MI', 'Pan de molde 100% integral'),
    new Panificado(2,'Molde Centeno', 'MC', 'Pan de molde con un porcentaje de harina integral y de centeno'),
    new Panificado(3,'Zeppeling', 'ZP', 'Un tipo de pan de piso con su forma clasica de "zeppeling"'),
    new Panificado(4,'Tipo Campo', 'TC', 'Un clasico de gran corteza 100% integral'),
    new Panificado(5,'Baguet', 'BG', 'El rey de los mejores sanguches'),
    new Panificado(6,'Rustico', 'RT', 'Pan de mesa, ideal para unas buenas tapas'),
];


async function loadJSON() {
    try {
        const response = await fetch("./datos/sabores.json")
        console.log(response)
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        displayRecetas(data)
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
        
    }
}

function displayRecetas(recetas) {
    const recetasDiv = document.getElementById('sabores');
    recetas.forEach(receta => {
        const recetaDiv = document.createElement('div');
        recetaDiv.innerHTML = `
            <h2>${receta.nombre}</h2>
            <p>${receta.descripcion}</p>`;
        recetasDiv.appendChild(recetaDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadJSON);

