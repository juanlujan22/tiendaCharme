import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav__box">
      <div className="link_Nav">
        <Link to="/categoria/hombre"> Hombre </Link>
        <Link to="/categoria/mujer"> Mujer </Link>
        <Link to="/categoria/niño"> Niño </Link>
      </div>
      <div className="titulo_Nav">
        <CartWidget />
        <Link to="/">
          <h1 className="titulo">Tienda Charme</h1>
        </Link>
      </div>
      <div className="link_Nav">
        <Link to="/categoria/calzados"> Calzados </Link>
        <Link to="/categoria/indumentaria"> Indumentaria </Link>
        <Link to="/categoria/accesorios"> Accesorios </Link>
      </div>
      <div>
        <Link to= "/carrito">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
