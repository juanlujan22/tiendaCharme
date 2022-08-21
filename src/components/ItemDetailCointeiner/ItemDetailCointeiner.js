import { customFetch } from "../../assets/customFetch";
import { useState, useEffect } from "react";
import { productos } from "../../assets/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailCointeiner = () => {
  const [listProducto, setListProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.table(productos);
  useEffect(() => {
    customFetch(productos).then((data) => {
      setLoading(false);
      setListProducto(data.find((item) => item.id == id));
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <h4>Cargando...</h4>
      ) : (
        <ItemDetail listProducto={listProducto} />
      )}
    </>
  );
};
export { ItemDetailCointeiner };
