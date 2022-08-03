import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
  <div id="ItemListContainer">
    <p>{greeting}</p>
    <ItemCount />
  </div>);
};

export default ItemListContainer;
