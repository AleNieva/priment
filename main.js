// Función para calcular el promedio de un array de notas
function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

// Función para buscar alumnos con un promedio superior a cierto umbral
function buscarAlumnosAprobados(alumnos, umbral) {
    return alumnos.filter(alumno => alumno.promedio >= umbral);
}

// Función para buscar un alumno por nombre
function buscarAlumnoPorNombre(alumnos, nombre) {
    return alumnos.find(alumno => alumno.nombre === nombre);
}

// Crear un array de objetos representando a los alumnos
const alumnos = [];

// Utilizamos el DOM para solicitar la cantidad de alumnos
let cantidadAlumnos = parseInt(prompt("Ingrese cantidad de alumnos"));

while (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
    alert("Por favor, ingrese una cantidad válida de alumnos.");
    cantidadAlumnos = parseInt(prompt("Ingrese cantidad de alumnos"));
}

for (let i = 0; i < cantidadAlumnos; i++) {
    let nombre = prompt("Ingrese nombre del alumno");
    let cantidadNotas = parseInt(prompt("Ingrese cantidad de notas que tiene"));

    while (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        alert("Por favor, ingrese una cantidad válida de notas.");
        cantidadNotas = parseInt(prompt("Ingrese cantidad de notas que tiene"));
    }

    const notas = [];

    for (let j = 1; j <= cantidadNotas; j++) {
        let nota = parseFloat(prompt("Ingrese la nota " + j));

        while (isNaN(nota)) {
            alert("Por favor, ingrese un número válido para la nota.");
            nota = parseFloat(prompt("Ingrese la nota " + j));
        }

        notas.push(nota);
    }

    // Crear un objeto alumno y agregarlo al array
    const alumno = {
        nombre: nombre,
        notas: notas,
        promedio: calcularPromedio(notas)
    };

    alumnos.push(alumno);
}

// Utilizamos el DOM para mostrar el promedio de cada alumno
for (let i = 0; i < alumnos.length; i++) {
    const resultado = document.createElement('p');
    resultado.textContent = `El promedio de ${alumnos[i].nombre} es ${alumnos[i].promedio.toFixed(1)}`;
    document.body.appendChild(resultado);
}

// Ejemplo de búsqueda de alumnos aprobados
const umbralAprobacion = 6;
const alumnosAprobados = buscarAlumnosAprobados(alumnos, umbralAprobacion);

// Utilizamos el DOM para mostrar los alumnos aprobados
const resultadoAprobados = document.createElement('p');
resultadoAprobados.textContent = `Alumnos aprobados (${umbralAprobacion} o más): ${alumnosAprobados.map(alumno => alumno.nombre).join(', ')}`;
document.body.appendChild(resultadoAprobados);

// Ejemplo de búsqueda de un alumno por nombre
const nombreBuscado = prompt("Ingrese el nombre del alumno que desea buscar");
const alumnoEncontrado = buscarAlumnoPorNombre(alumnos, nombreBuscado);

if (alumnoEncontrado) {
    // Utilizamos el DOM para mostrar el alumno encontrado y sus notas
    const resultadoEncontrado = document.createElement('p');
    resultadoEncontrado.textContent = `Alumno encontrado: ${alumnoEncontrado.nombre}`;
    document.body.appendChild(resultadoEncontrado);

    const resultadoNotas = document.createElement('p');
    resultadoNotas.textContent = `Notas del alumno: ${alumnoEncontrado.notas.join(', ')}`;
    document.body.appendChild(resultadoNotas);
} else {
    // Utilizamos el DOM para mostrar que no se encontró ningún alumno
    const resultadoNoEncontrado = document.createElement('p');
    resultadoNoEncontrado.textContent = `No se encontró ningún alumno con el nombre ${nombreBuscado}`;
    document.body.appendChild(resultadoNoEncontrado);
}
