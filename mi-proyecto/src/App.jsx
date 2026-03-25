import React from 'react';
import Formulario from "./Formulario";
import Listado from "./Listado";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            <Listado />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;