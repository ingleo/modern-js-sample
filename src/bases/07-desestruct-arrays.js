const personajes = ["goku", "vegeta", "trunks"];
const [, , p3] = personajes;
console.log(p3);

const arr = () => {
  return ["abc", 123];
};

const [letras, numeros] = arr();
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
