

// Cotizador de cuotas donde el usuario ingresa el momento y se le da el valor a pagar

let interes3 = 1.0758
let interes6 = 1.1422
let interes9 = 1.1741
let interes12 = 1.2567

let monto= prompt("Ingrese el monto a calcular, de lo contrario escriba 'ESC'")

while (monto != "ESC" && monto != "esc") {
    if (monto > 0) {
        let cuota= alert("Te quedaria en 3 cuotas de $"+ (monto*interes3/3).toFixed(2)+"\n"+
        "Te quedaria en 6 cuotas de $"+ (monto*interes6/6).toFixed(2)+"\n"+
        "Te quedaria en 9 cuotas de $"+ (monto*interes9/9).toFixed(2)+"\n"+
        "Te quedaria en 12 cuotas de $"+(monto*interes12/12).toFixed(2)+"\n")
    }
    else{
        alert("Debe ingresar un valor valido")
    }
    monto= prompt("Ingrese el monto a calcular, de lo contrario escriba 'ESC'")
} 

alert ("Gracias por utilizar nuestro Simulador");