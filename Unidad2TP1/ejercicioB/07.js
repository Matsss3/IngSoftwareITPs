function precioComleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioComleto(19.90, 0.15);
console.log(resultado);
