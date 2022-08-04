import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

  const [contador, setContador] = useState(initial)

    const aumentarContador = ()=>{stock && setContador(contador+1)};
    const disminuitContador = ()=>{initial && setContador(contador-1)};
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
export  {ItemCount}