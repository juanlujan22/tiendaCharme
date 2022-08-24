import { customFetch } from "../../assets/customFetch";
import { useState, useEffect } from "react";
import { productos } from "../../assets/productos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [listProductos, setListProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    customFetch(productos).then((data) => {
      setLoading(false);
      console.log(data);
      categoria === undefined
        ? setListProductos(data)
        : setListProductos(data.filter((item) => item.categoria === categoria));
    });
  }, [categoria]);

  return (
    <div className="ItemListContainer">
      <p>{greeting}</p>

      {loading ? (
        <h4>Cargando...</h4>
      ) : (
        <ItemList listProductos={listProductos} />
      )}
    </div>
  );
};

export { ItemListContainer };
