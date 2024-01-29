// Función para calcular el promedio de un array de las notas
function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

// Función para buscar alumnos con promedio mayot
function buscarAlumnosAprobados(alumnos, umbral) {
    return alumnos.filter(alumno => alumno.promedio >= umbral);
}

// Función para buscar un alumno por nombre
function buscarAlumnoPorNombre(alumnos, nombre) {
    return alumnos.find(alumno => alumno.nombre === nombre);
}

// Crear array alumnos
const alumnos = [];

let cantidadAlumnos = prompt("Ingrese cantidad de alumnos");

while (isNaN(parseInt(cantidadAlumnos)) || parseInt(cantidadAlumnos) <= 0) {
    alert("Por favor, ingrese una cantidad válida de alumnos.");
    cantidadAlumnos = prompt("Ingrese cantidad de alumnos");
}

for (let i = 0; i < parseInt(cantidadAlumnos); i++) {
    let nombre = prompt("Ingrese nombre del alumno");
    let cantidadNotas = prompt("Ingrese cantidad de notas que tiene");

    while (isNaN(parseInt(cantidadNotas)) || parseInt(cantidadNotas) <= 0) {
        alert("Por favor, ingrese una cantidad válida de notas.");
        cantidadNotas = prompt("Ingrese cantidad de notas que tiene");
    }

    const notas = [];

    for (let j = 1; j <= parseInt(cantidadNotas); j++) {
        let nota = prompt("Ingrese la nota " + j);

        while (isNaN(parseFloat(nota))) {
            alert("Por favor, ingrese un número válido para la nota.");
            nota = prompt("Ingrese la nota " + j);
        }

        notas.push(parseFloat(nota));
    }

    // Crear un objeto alumno y agregarlo al array
    const alumno = {
        nombre: nombre,
        notas: notas,
        promedio: calcularPromedio(notas)
    };

    alumnos.push(alumno);
}

// Mostrar el promedio de cada alumno
for (let i = 0; i < alumnos.length; i++) {
    alert(`El promedio de ${alumnos[i].nombre} es ${alumnos[i].promedio.toFixed(1)}`);
}

//  búsqueda de alumnos aprobados
const umbralAprobacion = 6;
const alumnosAprobados = buscarAlumnosAprobados(alumnos, umbralAprobacion);
alert(`Alumnos aprobados (${umbralAprobacion} o más): ${alumnosAprobados.map(alumno => alumno.nombre).join(', ')}`);

//  búsqueda de un alumno por nombre
const nombreBuscado = prompt("Ingrese el nombre del alumno que desea buscar");
const alumnoEncontrado = buscarAlumnoPorNombre(alumnos, nombreBuscado);

if (alumnoEncontrado) {
    alert(`Alumno encontrado: ${alumnoEncontrado.nombre}`);
    alert(`Notas del alumno: ${alumnoEncontrado.notas.join(', ')}`);
} else {
    alert(`No se encontró ningún alumno con el nombre ${nombreBuscado}`);
}
