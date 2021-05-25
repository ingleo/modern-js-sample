const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New york",
        lat: 13.23123,
        lng: 34.3123123
    }
};

//asignación por referencia
const persona2 = persona;
persona2.nombre = "Le1ni";

//creacion de nuevo objeto con spread operator
const persona3 = {...persona};
persona.nombre = "Leonardo";

const {nombre, apellido, ...data} = persona3;

console.log(persona);
console.log(persona2);
console.log(persona3);
console.log(data);