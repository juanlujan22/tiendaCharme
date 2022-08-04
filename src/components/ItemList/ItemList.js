import { Item } from "../Item/Item"

const ItemList = ({listProductos}) => {
    console.log(listProductos)
  return (
    <>
        {listProductos.map(product => <Item  key={product.id} product={product}/>)}
    </>
  )
}

export {ItemList}