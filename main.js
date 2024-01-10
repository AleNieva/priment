let nombre = prompt ("Ingrese nombre del alumno")
let nota = prompt ("Ingrese cantidad de notas que tiene")
let suma=0
let promedio =0


for ( i=1; i<= nota; i++) {
    numero = prompt ("Ingrese la nota")
     suma = parseFloat(suma)+ parseFloat(numero)
    
}

promedio = suma / numero

alert ("El promedio es " + promedio)

if (promedio >=6) {
    alert("Felicidades " + nombre + " aprobo con " + promedio)
  
    
} else {
    alert(nombre + " va a recuperatorio con " + promedio)
}
