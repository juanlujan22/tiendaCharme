import CartWidget from "./CartWidget";

const NavBar = (propiedad) => {
  if (propiedad.type == "header") {
    <nav>
      <div>
        <CartWidget />
      </div>
      <div id="titulo_Nav">
        <h1 classname="titulo">Charme Calzados</h1>
      </div>
      <div id="link_Nav">
        <a href="#"> link </a>
        <a href="#"> link </a>
        <a href="#"> link </a>
      </div>
    </nav>;
  } else {
    return (
      <>
        <nav>
          <div id="titulo_Nav">
            <h1 classname="titulo">Charme Calzados</h1>
          </div>
          <div id="link_Nav">
            <a href="#"> link </a>
            <a href="#"> link </a>
            <a href="#"> link </a>
          </div>
          <div></div>
        </nav>
      </>
    );
  }
};

export default NavBar;
