const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "ironman",
    rango: "soldado",
  };

  const useContext = ({ nombre, edad, rango = "Capitán" }) => {
    return {
      nombreClave: nombre,
      anios: edad,
      latlng: {
        lat: 4.123213,
        lng: 23.12312,
      },
    };
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { nombreClave, anios, latlng: { lat, lng} } = useContext(persona);

  console.log(nombreClave, anios, lat, lng);
