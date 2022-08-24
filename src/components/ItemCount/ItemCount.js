import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

  const [contador, setContador] = useState(initial)

    const aumentarContador = ()=>{stock && setContador(contador+1)};
    const disminuirtContador = ()=>{ contador > 0 && setContador(contador-1)};


  return (
    <div>
        <p>Cantidad: {contador}</p>
        <button onClick={aumentarContador}>Más Producto</button>
        <button onClick={disminuirtContador}>Menos Producto</button><br />
        <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  )
}
export  {ItemCount}