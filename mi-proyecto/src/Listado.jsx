import Cita from './Cita';
import './Listado.css';

const Listado = () => {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {/* Aquí listamos las citas manualmente como pide el TP inicial */}
      <Cita 
        mascota="Nina" dueño="Martin" fecha="2021-08-05" 
        hora="08:20" sintomas="Le duele la pierna" 
      />
      <Cita 
        mascota="Sifon" dueño="Flecha" fecha="2023-08-05" 
        hora="09:24" sintomas="Duerme mucho" 
      />
      <Cita 
        mascota="Floki" dueño="Ari" fecha="2023-08-05" 
        hora="16:15" sintomas="No está comiendo" 
      />
    </div>
  );
};

export default Listado;