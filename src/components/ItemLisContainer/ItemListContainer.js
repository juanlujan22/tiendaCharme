import {ItemCount} from "../ItemCount/ItemCount";
import { customFetch } from "../../assets/customFetch";
import {useState, useEffect} from "react"
import { productos } from "../../assets/productos" 
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  console.log(productos)
  const [listProductos, setListProductos]=useState([])
  const [loading, setLoading] = useState(false);
  

  useEffect(()=>{
    customFetch(productos)
    .then( data =>{
        setLoading(true)
        setListProductos(data)
    })
    .catch(console.log("pedido salio mal"))
  },[])

  console.log(listProductos)


  return (
  <div className="ItemListContainer">
    <p>{greeting}</p>
    <ItemCount initial={1} stock={22} onAdd={()=>{}}/>
    {!loading && <h4>Cargando...</h4> }
    {loading && <ItemList listProductos={listProductos}/>}
  </div>);
};

export {ItemListContainer}
