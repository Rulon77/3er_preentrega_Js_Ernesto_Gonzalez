const $menuProductos = document.querySelector('#menu-contenedor');

const generarProductos= (listaDeProductos) => {
    listaDeProductos.forEach(producto => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = producto.nombre;
        descripcion.textContent = `(${producto.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuProductos.appendChild(contenedor);
    });
};

generarProductos(listaSabores);

