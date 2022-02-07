import "./style.css";
import logo from "./logomarca.png";

function Header() {
  return (
    <>
      <header className="headerLogo">
        <figure>
          <img src={logo} alt="logomarca Nu Kenzie" />
        </figure>
        <button className="buttonInicio">Inicio</button>
      </header>
    </>
  );
}

export default Header;
