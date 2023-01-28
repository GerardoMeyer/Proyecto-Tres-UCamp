export default function primeraLetraMayuscula(cadena) {
    let primerCaracter = cadena.charAt(0).toUpperCase();
    let restoDeLaCadena = cadena.substring(1, cadena.length);
    return primerCaracter.concat(restoDeLaCadena);
}













