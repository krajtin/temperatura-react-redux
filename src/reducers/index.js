// Dependencies
import { combineReducers } from "redux";

// Shared Reducers
import temperatura from "./temperaturaReducer";
import formulario from "./formularioReducer";

const rootReducer = combineReducers({
  temperatura,
  formulario
});

export default rootReducer;
