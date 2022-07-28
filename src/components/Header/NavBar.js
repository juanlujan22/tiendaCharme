import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav id="nav__box">
      <div id="link_Nav">
        <a href="#"> Hombre </a>
        <a href="#"> Mujer </a>
        <a href="#"> Niño </a>
      </div>
      <div id="titulo_Nav">
        <CartWidget />
        <h1 classname="titulo">Tienda Charme</h1>
      </div>
      <div id="link_Nav">
        <a href="#"> Calzados </a>
        <a href="#"> Vestimenta </a>
        <a href="#"> Accesorios </a>
      </div>
    </nav>
  );
};

export default NavBar;
