import { Link } from "react-router-dom";
const Item = ({ product }) => {
  console.log(product);
  return (
    <>
      <article className="item">
        <h3>{product.producto}</h3>
        <img src={product.imagen} alt="" />
        <h4>Categoria: {product.categoria}</h4> <br />
        <p>{product.descripcion}</p>
        <h4>${product.precio}</h4>
        <Link to={`/detail/${product.id}`} >
          <button>Ver Detalle</button>
        </Link>
      </article>
    </>
  );
};

export { Item };
