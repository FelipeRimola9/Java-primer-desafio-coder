let consigna="Adivina el número del 1 al 10"
let respuesta= 9

do {
    respuestaUsuario=prompt(`${consigna}`);
    if (respuestaUsuario==9){
        alert ("Adivinaste!")
    } else {
        alert ("Intenta nuevamente")
    }
} while (respuestaUsuario !=respuesta) 