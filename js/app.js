/* let testred = document.getElementById('rojo');
testred.style.backgroundColor = 'red'; */

const trafficLights = {
    stopLight: 'Red',
    cautionLight: 'Yellow',
    goLight: 'Green',

}

let luzActual = ' ';
let colorApagado = '#d5d5d5';
let color;
let siguienteColor;
let anteriorColor;


function cambiarLuz()
{
    switch (luzActual) {
        case 'Red':
            luzActual = trafficLights.goLight;
            console.log("🚀 ~ file: app.js ~ line 18 ~ luzActual", luzActual);
            color = 'rojo';
            siguienteColor = 'red';
            anteriorColor = 'amarillo';
            console.log(color);
            break;

        case 'Yellow':
            luzActual = trafficLights.stopLight;
            console.log("🚀 ~ file: app.js ~ line 18 ~ luzActual", luzActual);
            color = 'amarillo';
            siguienteColor = 'yellow';
            anteriorColor = 'verde';
            console.log(color);
            break;

        case 'Green':
            luzActual = trafficLights.cautionLight;
            console.log("🚀 ~ file: app.js ~ line 18 ~ luzActual", luzActual)
            color = 'verde';
            console.log(color);
            siguienteColor = 'green';
            anteriorColor = 'rojo';
            break;

    
        default:
            luzActual = trafficLights.stopLight;
            //console.log("🚀 ~ file: app.js ~ line 18 ~ luzActual", luzActual)
            break;
    }

    let test = document.getElementById(color);
    console.log("🚀 ~ file: app.js ~ line 57 ~ test", test)
    test.style.backgroundColor = siguienteColor;

    let testOff = document.getElementById(anteriorColor);
    console.log("🚀 ~ file: app.js ~ line 60 ~ testOff", testOff)
    
    testOff.style.backgroundColor = colorApagado;
}



setInterval(cambiarLuz, 2000); // hace que se repita el ciclo cada 2000 ms
  // cambiarLuz();