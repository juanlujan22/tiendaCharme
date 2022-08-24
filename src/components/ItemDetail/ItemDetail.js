import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom"
const ItemDetail = ({ listProducto }) => {
  const [agregar, setAgregar] = useState(false)
  const onAdd = ()=>{
    setAgregar(true)
  }
  return (
    <>
      <article className="item">
        <h2>
          <strong>{listProducto.producto}</strong>
        </h2>
        <img src={listProducto.imagen} alt="imagen del producto" />
        <section>Descripción: {listProducto.descripcion}</section>
        <h2>Valor: ${listProducto.precio}</h2>
        {
          !agregar ? 
          <ItemCount initial={0} stock={22} onAdd={onAdd} />
          :
          (<><h4>el producto ya se agrego al carrito</h4> <Link to="/carrito"><button>ir al Carrito</button></Link></>)
        }
        
      </article> 
    </>
  );
};
export { ItemDetail };
