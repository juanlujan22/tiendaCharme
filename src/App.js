import Header from "./components/Header/Header";
import {ItemListContainer} from "./components/ItemLisContainer/ItemListContainer";
import {ItemDetailCointeiner } from "./components/ItemDetailCointeiner/ItemDetailCointeiner"
const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Bienvenido/a a Nuestra Tienda"} />
      <ItemDetailCointeiner />
    </>
  );
};

export default App;
