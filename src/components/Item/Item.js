const Item = ({product}) => {
  console.log(product)
  return (
    <>
    <article className="item">
       <h3>{product.producto}</h3>  
       <img src={product.imagen} alt="" />
       <p>{product.descripcion}</p>
       <h4>${product.precio}</h4>
       <button disabled="disabled">Ver Detalle</button>
    </article>
    </>
  )
}

export {Item}