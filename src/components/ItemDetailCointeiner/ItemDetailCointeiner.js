import { customFetch } from "../../assets/customFetch";
import { useState, useEffect } from "react";
import { productos } from "../../assets/productos";

import { ItemDetail } from "../ItemDetail/ItemDetail";

const ItemDetailCointeiner = () => {
  const [listProducto, setListProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    customFetch(productos).then((data) => {
      setLoading(false);
      setListProducto(data.find((item) => item.id == 1));
    });
  }, []);

  return (
    <>
      {!loading ? (
        <ItemDetail listProducto={listProducto} />
      ) : (
        <h4>Cargando...</h4>
      )}
    </>
  );
};
export { ItemDetailCointeiner };
