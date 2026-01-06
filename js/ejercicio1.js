// Comentario en una sola linea

/* Comentarios en 
multilineas */

// Declaracion de variables en JavaScript

// 1. Utilizando la palabra reservada "VAR"

console.warn("Declaracion de variables utilizando VAR");
console.error("--------------------------------------------------");

var nombre = "Luis Felipe";
console.log("El valor almacenado en la variable nombre es: " + nombre);

// Modificacion del valor de la variable

/* var nombre = "xLuisCM";
console.log("El nuevo valor almacenado en la variable nombre es: " + nombre); */

var misApellidos;
console.log("El valor almacenado en la variable misApellidos es: " + misApellidos);

// Una variable puede cambiar su valor durante la ejecucion del programa

console.warn("Declaracion de variables utilizando el prefijo CONST");

/* Una constante a diferencia de una variable es que su velor no cambia durante la 
ejecucion del programa, y al momento de ser declarada esta debera ser inicializada */

const miMatricula = "240343";
console.log("El valor almacenado en la constante miMatricula es: " + miMatricula);

// Intentando modificar el valor de la constante

/* miMatricula = "XXXXXX";*/ // Esto generaria un error en tiempo de ejecucion
console.log("El nuevo valor almacenado en la constante miMatricula es: " + miMatricula);

// 3. Utilizando la palabra reservada "LET"
/* LET es el prefijo utilizado muy similar a VAR con la diferencia en sus alcance (SCOPE),
aquellas declaradas con VAR tienen un alcance global en el codigo no importand bloques o
secciones, mientras que las variables declaradas con LET solo existiran dentro del bloque 
o funcion */

var fecha_nacimiento = new Date("2002-08-16");
var edad = calcularEdad(fecha_nacimiento); // Se asigna el valor retornado por la función
console.log("La edad calculada es: " + edad + " años");

// Verificacion si es mayor de edad
if (edad >= 18) {
    var esMayorEdad = true;
    let esMenorEdad = false;
}

if (esMayorEdad)
    console.log("Es mayor de edad");
else
    console.log("Es menor de edad");

/*console.log("El valor de esMenorEdad es: " + esMayorEdad);
La variable booleana no puede persistir por el tipo de declaracion LET, solo fue de 
alcance local, mientras el condicional LET se ejecuta */

function calcularEdad(fecha_nacimiento) {
    // Para calcular la edad requerimos de la fecha del dia de hoy 

    var fecha_hoy = new Date();

    /* Dado que los datos de fecha son almacenados en milisegundos por default en
    JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos 
    por dia */

    let milisegundospordia = 24 * 60 * 60 * 1000;

    /* Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha
    en que nacimos para calcular los milisegundos que hemos vivido */

    let diasvividos = (fecha_hoy - fecha_nacimiento) / milisegundospordia;

    /* Invocamos el metodo matematico de la funcion piso (FLOOR) */

    var edadResultado = diasvividos / 365.25;
    return Math.floor(edadResultado); // Se retorna el resultado para que sea accesible fuera
}

// Interpretacion de datos 

// $ {}

misApellidos = "Cázarez Márquez";
console.log(`Hola, ${nombre} ${misApellidos} actualemnte tienes ${edad} años de edad.`);


// Autor: Luis Felipe Cázarez Márquez