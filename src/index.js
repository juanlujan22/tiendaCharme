import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./estilos.scss";
import "./components/Header/Header.scss";
import "./components/ItemLisContainer/ItemListContainer.scss";
import "./components/Item/Item.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
