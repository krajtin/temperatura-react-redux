// Action Types
import { AUMENTAR_100, CAMBIAR_VALOR } from "../acciones/actionTypes";

// Initial State
const initialState = {
  celsius: 70
};

export default function temperaturaReducer(state = initialState, action) {
  switch (action.type) {
    case AUMENTAR_100: {
      //El reducer es necesario crear json vacio, estado, y la propiedad a cambiar
      /*return {
        ...state,
        celsius: state.celsius + 100
      };
      */

      return Object.assign({}, state, { celsius: state.celsius + action.num });
    }
    case CAMBIAR_VALOR: {
      //El reducer es necesario crear json vacio, estado, y la propiedad a cambiar
      return Object.assign({}, state, { celsius: action.num });
    }
    default: {
      return state;
    }
  }
}
