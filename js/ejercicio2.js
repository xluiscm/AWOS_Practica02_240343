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
    ID del Usuario = ${typeof(userID_Owner)},
    Precio de la propiedad = ${typeof(priceProperty)},
    Latitud (GPS) = ${typeof(latGPS)},
    Longitud (GPS) = ${typeof(longGGPS)}, 
    Altitud (GPS) = ${typeof(altGPS)}`);