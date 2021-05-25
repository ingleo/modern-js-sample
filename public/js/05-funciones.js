//especificacion de funciones

function saludar(nombre) {
  return `Hola ${nombre}`;
}

//Paso de funcion por referencia a variable
const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

//sin necesidad de palabra function
const saludar3 = (nombre) => {
  return `Hola ${nombre}`;
};

//sin necesidad de brackets cuando solo hay 1 linea de ejecución
const saludar4 = (nombre) => `Hola ${nombre}`;

console.log(saludar("Goku"));
console.log(saludar2("Vegetta"));
console.log(saludar3("Gohan"));
console.log(saludar4("Gothen"));

/** EJEMPLO DE CAMBIO DE IMPLEMENTACIÓN EN FUNCIONES CON ESPECIFICACIÓN ECMA6 */

//antiguo
function getUsuarioActivo(nombre) {
  return {
    uid: "12345",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("leonardo");
console.log(usuarioActivo);

//moderno
const getUsuarioActivo2 = (nombre) => ({ uid: "12345", username: nombre });
console.log(getUsuarioActivo2("Le1ni"));
