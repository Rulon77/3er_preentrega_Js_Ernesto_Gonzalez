const $ = document.querySelector.bind(document);
const $menu = $('#menu');
const $opciones = $('#opciones');
const $pedido = $('#pedido');
const $contenedorFinalizar = $('#finalizar');
const $sabor = $('#sabor')
const $cantidad = $('#cantidad');
const $botonSumar = $('#boton-sumar');
const $botonRestar = $('#boton-restar');
const $botonProcesarPedido = $('#procesar-pedido');
const $botonFinalizar = $('#boton-finalizar');
const $contenedorDePago = $('#contenedor-pago');





const botonAgregar = document.createElement('button');
botonAgregar.id = 'boton-agregar';
botonAgregar.textContent = 'Agregar Productos';

const botonVaciar = document.createElement('button');
botonVaciar.id = 'boton-agregar';
botonVaciar.textContent = 'Vaciar Carrito';


const botonFinalizar = document.createElement('button');
botonFinalizar.id = 'boton-finalizar';
botonFinalizar.textContent = 'Finalizar pedido';


const crearInputSabor = (value, id) => {
    const sabor = document.createElement('input');
    sabor.disabled = true;
    sabor.type = 'text';
    sabor.className = 'sabor';
    sabor.id = id;
    sabor.value = value;
    return sabor;
};

const crearInputCantidad = (value, id) => {
    const cantidad = document.createElement('input');
    cantidad.disabled = true;
    cantidad.type = 'number';
    cantidad.className = 'cantidad';
    cantidad.id = id;
    cantidad.value = value;
    return cantidad;
};

const crearBotonSumar = () => {
    const boton = document.createElement('button');
    boton.textContent = '+';
    boton.className = 'boton-sumar';
    return boton;
};

const crearBotonRestar = () => {
    const boton = document.createElement('button');
    boton.textContent = '-';
    boton.className = 'boton-restar';
    return boton;
};

const agregarOpcionAlMenuOpciones = (value, id) => {
    let cantidadIngresada = 0;

    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-opcion';
    const cantidad = crearInputCantidad(cantidadIngresada, `cantidad${id}`);
    const botonSumar = crearBotonSumar();
    const botonRestar = crearBotonRestar();

    contenedor.append(
        crearInputSabor(value, `sabor${id}`),
        cantidad,
        botonRestar,
        botonSumar
    );

    botonSumar.addEventListener('click',() => {
        cantidadIngresada++;
        cantidad.value = cantidadIngresada;
    });

    botonRestar.addEventListener('click', () => {
        if (cantidadIngresada > 0) {
            cantidadIngresada--;
            cantidad.value = cantidadIngresada;
        }
    });

    return contenedor;
};

const crearMenuDeOpciones = (listaDeProductos) => {
    let id = 0;
    listaDeProductos.forEach(sabor => {
        id++;
        const opcion = agregarOpcionAlMenuOpciones(sabor.nombre, id);
        $opciones.append(opcion);
    });
};

crearMenuDeOpciones(listaSabores);
$opciones.append(botonAgregar);
$opciones.append(botonVaciar);


let carrito = loadCartFromLocalStorage();


const agregarSaboresAlCarrito = () => {
    let saboresIngresados = document.querySelectorAll('.sabor');
    let id = 0;
    console.log(saboresIngresados)
    saboresIngresados.forEach(sabor => {
        id++;
        const cantidad = Number(document.querySelector(`#cantidad${id}`).value);

        if (cantidad > 0) {
            carrito.push({sabor: sabor.value, cantidad: cantidad});
        }
    })
    saveCartToLocalStorage()
};

agregarSaboresAlCarrito()

const $carrito = $('#carrito');
let $saboresElegidos = $('#sabores-elegidos');
let $cantidadesElegidas = $('#cantidades-elegidas');

botonAgregar.addEventListener('click', () => {
        agregarSaboresAlCarrito();
        
        $saboresElegidos.innerHTML = "";
        $cantidadesElegidas.innerHTML = "";
        

        carrito.forEach(producto => {
            const texto = document.createElement('p');
            texto.textContent = producto.sabor;
            $saboresElegidos.append(texto);

            const cantidad = document.createElement('p');
            cantidad.textContent = `x ${producto.cantidad}`;
            $cantidadesElegidas.append(cantidad);
        })
});

let cantidadDelPedido = 0;
let clickBotonIrAPagar = 0;

$botonProcesarPedido.addEventListener('click', () => {

    clickBotonIrAPagar++;

    carrito.forEach(producto => {
        const cantidad = producto.cantidad;
        cantidadDelPedido += cantidad;
    })

    if (clickBotonIrAPagar === 1) {
        if (cantidadDelPedido > 0) {
            const mensajeFinal = document.createElement('p');
            mensajeFinal.textContent = `Tu total es de: $ ${cantidadDelPedido * precioUnidad}`;
            $contenedorDePago.append(mensajeFinal);
            $contenedorDePago.append(botonFinalizar);
        } else {
            clickBotonIrAPagar = 0;
        }
    }
});

const finalizarPedido = () => {

    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Gracias por tu compra!';
    mensaje.id = 'mensaje-finalizar';
    $contenedorFinalizar.append(mensaje);
};




botonFinalizar.addEventListener('click', () => {
            finalizarPedido();
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        
    }
);


function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(carrito));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function vaciarCarrito () {
    carrito = []
}

botonVaciar.addEventListener("click", () => {
    vaciarCarrito()
    localStorage.clear("cart");
    $saboresElegidos.innerHTML = "";
    $cantidadesElegidas.innerHTML = "";
    $contenedorDePago.innerHTML = ""
})