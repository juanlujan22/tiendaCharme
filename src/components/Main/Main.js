import { ItemListContainer } from "../ItemLisContainer/ItemListContainer";
import { ItemDetailCointeiner } from "../ItemDetailCointeiner/ItemDetailCointeiner";
import { Carrito } from "../Carrito/Carrito";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido/a a Nuestra Tienda"} />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailCointeiner />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
    </>
  );
};
export { Main };
