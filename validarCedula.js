function validarCedula(cedula) {
    // Remover los guiones de la cédula
    let cedulaSinGuiones = cedula.replace(/-/g, '');

    // Verificar que la cédula tenga 11 dígitos
    if (cedulaSinGuiones.length !== 11) {
        return false;
    }

    // Obtener el dígito verificador
    let digitoVerificador = parseInt(cedulaSinGuiones[10]);

    // Tomar los primeros 10 dígitos de la cédula
    let cedulaNumeros = cedulaSinGuiones.substring(0, 10);

    let suma = 0;
    let multiplicadores = [1, 2]; // Alternar entre 1 y 2
    for (let i = 0; i < cedulaNumeros.length; i++) {
        let digito = parseInt(cedulaNumeros[i]);
        let producto = digito * multiplicadores[i % 2]; // Alterna entre 1 y 2
        if (producto >= 10) {
            // Si el producto es de dos dígitos, sumamos esos dos dígitos
            producto = Math.floor(producto / 10) + (producto % 10);
        }
        suma += producto;
    }

    // Calcular el módulo 10
    let modulo10 = (10 - (suma % 10)) % 10;

    // Comparar con el dígito verificador
    return modulo10 === digitoVerificador;
}

// Ejemplo de uso
let cedula = "001-2110745-7";
if (validarCedula(cedula)) {
    console.log("La cédula es válida.");
} else {
    console.log("La cédula es inválida.");
}
