//template string
const nombre = "Leonardo";
const apellido = "Gonzalez";

const getSaludo = (nombre) => {
  return ` ${nombre} ${apellido}`;
};

console.log(`Este es un saludo ${getSaludo(nombre)}`);
