import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code style={{ color: "blueviolet" }}>Básicos js moderno</code>
        </p>
        <p>Para revisar ejemplos en carpeta pública...</p>
        <p>
          host:puerto
          <strong style={{ color: "blueviolet" }}>/js/nombrearchivo.js</strong>
        </p>
        <p>Nombre de archivos js</p>
        <ul style={{ textAlign: "left" }}>
          <li>01-const-let.js</li>
          <li>02-template-string.js</li>
          <li>03-literal-object.js</li>
          <li>04-arreglos.js</li>
          <li>05-funciones.js</li>
          <li>06-desestruct-obj.js</li>
          <li>07-desestruct-arrays.js</li>
          <li>08-import-export.js</li>
          <li>09-promesas.js</li>
          <li>10-fetch.js</li>
          <li>11-async-await.js</li>
          <li>12-ternario.js</li>
        </ul>
        <p>Ejemplo: localhost:8080/js/06-desestruct-obj.js</p>
      </header>
    </div>
  );
}

export default App;
