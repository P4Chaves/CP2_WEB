import { Link } from 'react-router-dom';
import Logo from "../images/fav_icon.png";

function NavBar() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/"><img className="logo" src={Logo} alt="Logo Alien" /></Link>
        <div className="links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre_nos">Sobre Nós</Link></li>
            <li><Link to="/lista_projetos">Lista de Projetos</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
