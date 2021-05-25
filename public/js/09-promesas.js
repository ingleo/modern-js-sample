import { getHeroeById } from "./bases/08-import-export";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(3);
    resolve(heroe);
  }, "2000");
});

promesa
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.err(err);
  }); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se ha encontrado el heroe");
      }
    }, 2000);
  });
};

/* getHeroeByIdAsync(3)
  .then((resp) => console.log("Heroe", resp))
  .catch((err) => console.error(err));
 */


getHeroeByIdAsync(10)
.then(console.log)
.catch(console.error)
