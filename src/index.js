import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import Temperatura from "./Temperatura/index";
import Formulario from "./Formulario/Formulario";
// Redux Store
import configureStore from "./redux/configureStore";

/*const initialState = {
  temperatura: 90,
  formulario: {
    nombre: "Godofredo",
    apellidos: "I Dinamarca"
  }
};
*/

// Configuring Redux Store
const store = configureStore();

function App() {
  const matriz_aficiones_checkbox = [
    {
      nombre: "Musica",
      checked: false
    },
    {
      nombre: "Cine",
      checked: true
    },
    {
      nombre: "Programacion",
      checked: true
    }
  ];
  return (
    <Provider store={store}>
      <div>
        <Temperatura />
        <Formulario aficiones={matriz_aficiones_checkbox} />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
