class Panificado {
    constructor(nombre, sigla, descripcion) {
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
    new Panificado('Molde Integral', 'MI', 'Pan de molde 100% integral'),
    new Panificado('Molde Centeno', 'MC', 'Pan de molde con un porcentaje de harina integral y de centeno'),
    new Panificado('Zeppeling', 'ZP', 'Un tipo de pan de piso con su forma clasica de "zeppeling"'),
    new Panificado('Tipo Campo', 'TC', 'Un clasico de gran corteza 100% integral'),
    new Panificado('Baguet', 'BG', 'El rey de los mejores sanguches'),
    new Panificado('Rustico', 'RT', 'Pan de mesa, ideal para unas buenas tapas'),
];