import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="nav__box">
      <div className="link_Nav">
        <a href="#"> Hombre </a>
        <a href="#"> Mujer </a>
        <a href="#"> Niño </a>
      </div>
      <div className="titulo_Nav">
        <CartWidget />
        <h1 classname="titulo">Tienda Charme</h1>
      </div>
      <div className="link_Nav">
        <a href="#"> Calzados </a>
        <a href="#"> Vestimenta </a>
        <a href="#"> Accesorios </a>
      </div>
    </nav>
  );
};

export default NavBar;
