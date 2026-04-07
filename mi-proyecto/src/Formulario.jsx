import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ setCitas }) => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const hoy = new Date().toISOString().split("T")[0];

    // VALIDAR CAMPOS VACÍOS
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // VALIDAR FECHA
    if (fecha < hoy) {
      setError("La fecha no puede ser anterior a hoy");
      return;
    }

    setError('');

    const nuevaCita = {
      id: Date.now(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    };

    setCitas(prev => [...prev, nuevaCita]);

    // LIMPIAR FORMULARIO
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div>
      <h2>Crear mi Cita</h2>

      {error && <p className="error formOnErrorMessage">{error}</p>}

      <form onSubmit={handleSubmit}>

        <label>Nombre Mascota</label>
        <input 
          type="text"
          value={mascota}
          onChange={e => setMascota(e.target.value)}
          className="u-full-width"
        />

        <label>Nombre Dueño</label>
        <input 
          type="text"
          value={propietario}
          onChange={e => setPropietario(e.target.value)}
          className="u-full-width"
        />

        <label>Fecha</label>
        <input 
          type="date"
          value={fecha}
          min={new Date().toISOString().split("T")[0]}
          onChange={e => setFecha(e.target.value)}
          className="u-full-width"
        />

        <label>Hora</label>
        <input 
          type="time"
          value={hora}
          onChange={e => setHora(e.target.value)}
          className="u-full-width"
        />

        <label>Sintomas</label>
        <textarea 
          value={sintomas}
          onChange={e => setSintomas(e.target.value)}
          className="u-full-width"
        ></textarea>

        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>

      </form>
    </div>
  );
};

export default Formulario;