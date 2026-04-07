import React, { useState } from 'react';
import Formulario from "./Formulario";
import Listado from "./Listado";

import "./App.css";

function App() {

  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Formulario setCitas={setCitas} />
          </div>

          <div className="one-half column">
            <Listado citas={citas} setCitas={setCitas} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;