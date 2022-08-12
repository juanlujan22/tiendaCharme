const ItemDetail = ({ listProducto }) => {
  console.table(listProducto);
  return (
    <>
      <article className="item">
        <h2><strong>{listProducto.producto}</strong></h2>
        <img src={listProducto.imagen} alt="imagen del producto" />
        <section>Descripción:{listProducto.descripcion}</section>
        <h2>${listProducto.precio}</h2>
        <button>Agregar al Carrito</button>
      </article>
    </>
  );
}; 
export { ItemDetail };
