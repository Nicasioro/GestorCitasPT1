import './Cita.css';

const Cita = ({ cita, setCitas }) => {

  const eliminar = () => {
    const confirmar = window.confirm("¿Eliminar cita?");

    if (confirmar) {
      setCitas(prev => prev.filter(c => c.id !== cita.id));
    }
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <button 
        className="button eliminar u-full-width"
        onClick={eliminar}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Cita;