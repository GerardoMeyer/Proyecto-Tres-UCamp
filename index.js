
import primeraLetraMayuscula from './funcion.js'

// Promedio
let myChart;


// Random número para personajes
function getRandomInt() {
    return Math.round(Math.floor(Math.random() * 81));
}


// Api
function clickMe() {
    let personaje = getRandomInt()

    fetch(`https://swapi.dev/api/people/${personaje}/`)
        .then((respuesta) => respuesta.json())
        .then((result) => {
            console.log('el resultado ', result);
            // AQUÍ SE LLAMA A LOS ARRAYS
            let alturaPromedio = []
            let pesoPromedio = []

            // Peso
            let peso = parseFloat(result.mass)
            if (isNaN(peso)) {
                peso = 0;
            }

            // Altura
            let altura = parseFloat(result.height)

            // Arrays de Peso y Altura
            alturaPromedio.push(altura)
            pesoPromedio.push(peso)


            // Cartas
            let contenedorPadre = document.querySelector('.contenedorCartas')
            let contenedorGrafico = document.querySelector('.containerGrafico')
            contenedorPadre.innerHTML = ``
            let salto = document.createElement('br')
            let nuevaCarta = document.createElement('div')
            nuevaCarta.setAttribute('class', 'card cartaPersonaje ')
            nuevaCarta.style.width = '18rem'
            nuevaCarta.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${result.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Gender: ${primeraLetraMayuscula(result.gender)}</h6>
                            <ul class="card-text">
                                <li><strong>Height:</strong> ${result.height}</li>
                                <li><strong>Weight:</strong> ${result.mass}</li> 
                            </ul>
                            <a href="${result.homeworld}" class="card-link">Homeworld</a>
                            </div>
                            `
            contenedorPadre.appendChild(nuevaCarta)

            const $grafica = document.querySelector(".graficaPrueba");
          
            const etiquetas = ["Peso - Altura"]
            
            const datosPeso = {
                label: "Peso",
                data: pesoPromedio, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                borderColor: 'rgba(54, 162, 235, 1)', 
                borderWidth: 1, 
            };
            const datosAltura = {
                label: "Altura",
                data: alturaPromedio, 
                backgroundColor: 'rgba(255, 159, 64, 0.2)', 
                borderColor: 'rgba(255, 159, 64, 1)', 
                borderWidth: 1, 
            };

            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart($grafica, {
                type: 'bar', // Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datosPeso,
                        datosAltura,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });


        })
        .catch(error => {
            console.log('No existe tu personaje', error);
        })
}


window.clickMe = clickMe;



