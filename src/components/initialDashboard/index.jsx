import "./style.css";
import logomarca from "./logomarca.png";
import startimage from "./startimage.svg";

function InitialDashboard({ start }) {
  return (
    <section className="sectionStart">
      <div className="aboutAplication">
        <div className="logoImage">
          <figure>
            <img src={logomarca} alt="logomarca Nu Kenzie" />
          </figure>
        </div>
        <div className="paragraphContainer">
          <p>Centralize o controle das suas finanças</p>
        </div>
        <div className="containerStart">
          <span className="spanStart">de forma rápida e segura</span>
          <button className="buttonStart" onClick={() => start()}>
            Iniciar
          </button>
        </div>
      </div>
      <div className="startImageContainer">
        <figure>
          <img src={startimage} alt="Imagem do começo" />
        </figure>
      </div>
    </section>
  );
}

export default InitialDashboard;
