import heroes, { owners } from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getOwnerById = (name) => owners.find((owner) => owner === name);

export const getHeroesbyOwner = (ownerId) =>
  heroes.filter((heroe) => heroe.owner === ownerId);
