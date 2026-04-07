import Cita from './Cita';
import './Listado.css';

const Listado = ({ citas, setCitas }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>

      {citas.map(cita => (
        <Cita 
          key={cita.id}
          cita={cita}
          setCitas={setCitas}
        />
      ))}

    </div>
  );
};

export default Listado;