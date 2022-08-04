import Header from "./components/Header/Header";
import {ItemListContainer} from "./components/ItemLisContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Bienvenido/a a Nuestra Tienda"} />
    </>
  );
};

export default App;
