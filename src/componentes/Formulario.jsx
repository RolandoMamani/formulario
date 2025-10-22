
import './Formulario.css';

function Formulario() {
  return (
    <form className="formulario" method="post">
      <div className="form-group">
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input className="form-input" type="text" id="nombre" name="nombre" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email:</label>
        <input className="form-input" type="email" id="email" name="email" />
      </div>

      <button type="submit" className="form-button">Enviar</button>
    </form>
  );
}

export default Formulario;