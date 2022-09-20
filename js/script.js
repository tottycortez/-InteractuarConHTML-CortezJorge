const listaNombres = []

let desicion = Number(prompt("¿Qué desea hacer?\n1.Agregar alumno.\n2.Finalizar"))
while (desicion == 1) {

    let nombre = prompt("Ingrese un Nombre:")
    let nota = Number(prompt("Ingrese la Nota:"))
    let aprobado
    if (nota >= "6") {
        aprobado = true
    } else {
        aprobado = false
    }

    listaNombres.push(nombre, nota, aprobado)
    desicion = Number(prompt("¿Qué desea hacer?\n1.Agregar alumno.\n2.Finalizar"))
}

console.log(listaNombres)

for (let nombre of listaNombres) {
    let nombres = document.createElement("h1")
    nombres.innerHTML = nombre
    document.body.appendChild(nombres)
}