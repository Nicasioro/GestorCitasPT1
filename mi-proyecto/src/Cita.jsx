import './Cita.css';

const Cita = ({ mascota, dueño, fecha, hora, sintomas }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button className="button eliminar u-full-width">Eliminar &times;</button>
    </div>
  );
};

export default Cita;