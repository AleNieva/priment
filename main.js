function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 1; i <= notas; i++) {
        let numero = prompt("Ingrese la nota " + i);
        suma += parseFloat(numero);
    }

    return suma / notas;
}


let nombre = prompt ("Ingrese nombre del alumno");
let notas = prompt ("Ingrese cantidad de notas que tiene");

let promedio = calcularPromedio(notas);


alert ("El promedio es " + promedio.toFixed(1));

if (promedio >=6) {
    alert("Felicidades " + nombre + " aprobo con " + promedio.toFixed(1));
  
    
} else {
    alert(nombre + " va a recuperatorio con " + promedio.toFixed(1));
}
