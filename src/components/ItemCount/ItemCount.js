import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const aumentarContador = ()=>{setContador(contador+1)};
    const disminuitContador = ()=>{setContador(contador-1)};
    const resetearContador = ()=>{setContador(0)};


  return (
    <div>
        <p>El contador va: {contador}</p>
        <button onClick={aumentarContador}>Sumar</button>
        <button onClick={disminuitContador}>Restar</button>
        <button onClick={resetearContador}>Resetear Contador</button>
    </div>
  )
}
export default ItemCount;