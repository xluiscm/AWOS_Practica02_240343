// Tipos de datos en JavaScript 
// Personalización de salida a consola

// Corrección: Es "gradient", no "gradiant"
//const bg = "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;

console.log("%cEjercicio 02: Tipo de datos", style_console);

/* 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas */

console.warn("1.- UNDEFINED (No definido)");
let usuarioLogueado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables: ");
// Corrección: Usar ${} para interpolación de strings
console.log(`usuarioLogueado = ${usuarioLogueado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* El operador typeof nos devuelve el tipo de dato */

console.log("Tipos de datos de las variables declaradas: ");
console.log(`usuarioLogueado: ${typeof usuarioLogueado}`);
console.log(`rolUsuario: ${typeof rolUsuario}`);
console.log(`ultimoAcceso: ${typeof ultimoAcceso}`);

/* Cambio de valor y tipo (Tipado Dinámico) */

usuarioLogueado = "xLuisCM";

console.log(`El valor de la variable usuarioLogueado es: ${usuarioLogueado} y su nuevo tipo de dato es: ${typeof usuarioLogueado}`);

// 2. BOOLEAN (true/false) - verdadero o falso

var hayUsuarioLogueado = true

/* Supongamos que nuestra app tendra un menu especifico para los usuarios registrados, en el podrian visualziar sus mensajes o estado
de sus publicaciones de renta o venta de propieades, a diferencia de un usuario que entra de manera incognita a visualizar las propiedades */

function validacionUsuarioLogueado() {
    console.log(`El valor de la variable hayUsuarioLogueado es:  ${hayUsuarioLogueado}, que es de tipo: ${typeof hayUsuarioLogueado}`);

    if (hayUsuarioLogueado === true) {
        console.log("Dado que se ha logueado un usuario, la app mostrara el menu de usuario");
    } else if (!hayUsuarioLogueado) {
        console.log("Dado que no hay usuario logueado, no se mostrara el menu de usuario");
    } else {
        console.log("No puedo procesar este tipo de dato, requiero un booleano");
    }
}
// Test 1 : Usuario logueado = true

hayUsuarioLogueado = true;
console.log("\n-- Test 1: Usuario logueado = true --");
validacionUsuarioLogueado();

// Test 2 : Usuario logueado = false

hayUsuarioLogueado = false;
console.log("\n-- Test 2: Usuario logueado = false --");
validacionUsuarioLogueado();

// Test 3 : Usuario logueado = cualquier otra cosa (null, string, number, etc)

hayUsuarioLogueado = 52.5;
console.log("\n-- Test 3: Usuario logueado = 52.5 --");
validacionUsuarioLogueado();

// 3. Number (enteros y decimales)

console.warn("3.- NUMBER (Numerico)");

/* Es iimportante saber que Java Script a diferencia de otros lenguajes, no diferencia los datos de tipo numerico, 
lo que para otro lenguajes de programacion lo que un ENTERO (Int), Flotante (Float), DECIMAL, DOBLE (Double) pera el
solo son NUMEROS (number) */

let userID_Owner = 225
let priceProperty = 1250000.50
let latGPS = 20.240508
let longGGPS = -97.052881
let altGPS = 1100

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${userID_Owner},
    Precio de la propiedad = ${priceProperty},
    Latitud (GPS) = ${latGPS},
    Longitud (GPS) = ${longGGPS}, 
    Altitud (GPS) = ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${typeof (userID_Owner)},
    Precio de la propiedad = ${typeof (priceProperty)},
    Latitud (GPS) = ${typeof (latGPS)},
    Longitud (GPS) = ${typeof (longGGPS)}, 
    Altitud (GPS) = ${typeof (altGPS)}`);

// 4.- STRING (Cadena de Caracteres)

var fullnameOwner = "Marco A. Ramírez";
let nameProperty = "                 Hermosa Casa en la Playa de Puerto Vallarta            ";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
caracteres especiales como acentos o símbolos de algún idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");

console.log(`El usuario: ${fullnameOwner}, 
    esta vendiendo o rentando: ${nameProperty}
    que consiste en: ${descriptionProperty}
    actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
console.log(`Las variables declaradas son del tipo:
        fullnameOwner :   ${typeof (fullnameOwner)}
        nameProperty :   ${typeof (nameProperty)}
        descriptionProperty:  ${typeof (descriptionProperty)}
        statusProperty :   ${typeof (statusProperty)}
        typeProperty :   ${typeof (typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos metodos para manipular su valor por mencionar algunos

// Transformar a MAYUSCULAS

console.log(`Nombre del Propietario ${usuarioLogueado.toUpperCase()}`);

// Transformar a minusculas

console.log(`Descripción de la Propiedad: ${descriptionProperty.toLocaleLowerCase()}`);

// Numero de caracteres

console.log(`Numero de letras en el tipo de propiedad: ${typeProperty.length} `);

// Subcadena

console.log(`Apellido del propietario: ${fullnameOwner.slice(8, fullnameOwner.length)}`);

// Eliminar espacios 

console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);

// Reemplazar caracteres

console.log(`Descripción modificada: ${descriptionProperty.replace("MAR", "RIO")}`);

// Reemplazar todos

console.log(`Descripción modificada: ${descriptionProperty.replaceAll("A", "4")}`);

// 5. BIGINI (Entero de grandes dimensiones)

/* Este tipo de datos permite almacenar numeros exageradamente amplios que usualmente aplcaciones cientificas
avanzadas requieren; esto para no perder presicion en los valores alamacenasdos */

const numeroGrande = 12134567890;
let numeroGrande2 = 1213456789012134567890;
let numeroGrande3 = 121345678901213456789012134567890;
let numeroGrande4 = 12134567890121345678901213456789012134567890;

console.warn("5.- BIGINT (Enteros de gran tamaño)");
console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof (numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza
a sufrir problemas de presicion`);

numeroGrande2 = BigInt(1213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza a sufrir problemas de presicion`);
numeroGrande3 = BigInt(121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza a sufrir problemas de presicion`);
numeroGrande4 = BigInt(12134567890121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza a sufrir problemas de presicion`);

// 6. SYMBOL (simbolo)

/* Es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicacion del espacio en memoria, por lo que todos los valores
asignados a una variable de este tipo siempre seran UNICOS*/

console.warn("6.- SYMBOL (Simbolos)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

// Valores y tipos de datos

console.log(`Valores y tipos:
    numero1 - Valor: ${numero1}, Tipo: ${typeof (numero1)}
    numero2 - Valor: ${numero2}, Tipo: ${typeof (numero2)}
    numero3 - Valor: ${numero3}, Tipo: ${typeof (numero3)}
    numero4 - Valor: ${numero4}, Tipo: ${typeof (numero4)}
    numero5 - Valor: ${numero5.description}, Tipo: ${typeof (numero5)}
    numero6 - Valor: ${numero6.description}, Tipo: ${typeof (numero6)}
    numero7 - Valor: ${numero7.description}, Tipo: ${typeof (numero7)}
    numero8 - Valor: ${numero8.description}, Tipo: ${typeof (numero8)}
`);

// Pruebas comparativas

if (numero1 == numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if (numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")
if (numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")
if (numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")
if (numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

// 7. NULL (NULO)

/* El tipo de dato nulo es similar a UNDEFINED, con la variaciacion de que hay un consentimiento del usuario o del sistema
a que esta variable intencionalmente fue iniciada con este valor*/

var isPremiumUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7.- NULL (Nulo)");
console.log(`
    El usuario: ${usuarioLogueado}, tipo de dato: ${typeof (usuarioLogueado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}
`);

// Validacion del usuario

if (todayDate == lastLogin) {
    isNewUser = true
} else {
    isNewUser = false
}

/* Como es un usuario nuevo aun no ve, ni publica ninguna propiedad, por defecto no interesa por el momento que sea premium
hasta que inbteractue con la plataforma */

isPremiumUser = null;
console.log("Datos despues de la validacion del usuario:");
console.log(`
    El usuario: ${usuarioLogueado}, tipo de dato: ${typeof (usuarioLogueado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}
`);