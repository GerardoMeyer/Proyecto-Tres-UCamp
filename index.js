// Promedio
let alturaPromedio = []
let pesoPromedio = []
let sumaAltura = 0

console.log(alturaPromedio.length)

// Random
function getRandomInt() {
    return Math.round(Math.floor(Math.random() * 82));
}

function getAltura(sumaAltura) {
    for (i = 0; i < alturaPromedio.length; i++) {
        sumaAltura += alturaPromedio[i]
        //divisor += 1
    }
    return sumaAltura
}


// Api
function clickMe() {
    console.log(getRandomInt(82));
    let personaje = getRandomInt()

    fetch(`https://swapi.dev/api/people/${personaje}/`)
        .then((respuesta) => respuesta.json())
        .then((result) => {
            console.log('el resultado ', result);
            // AQUÍ CÓDIGO
            let peso = parseFloat(result.mass)
            let altura = parseFloat(result.height)
            console.log(peso)
            console.log(altura)
            alturaPromedio.push(altura)
            // pesoPromedio.push(peso)

            let numerador = getAltura(sumaAltura)
            let divisor = alturaPromedio.length

            console.log(`Denominador ${divisor}`)
            console.log(`Promedio: ${numerador / divisor}`)
            // console.log(pesoPromedio)





        })
        .catch(error => {
            console.log('no existe tu personaje', error);
        })
}