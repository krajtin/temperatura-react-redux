import { AUMENTAR_100, CAMBIAR_VALOR } from "./actionTypes";
const aumentar100 = () => {
  return {
    type: AUMENTAR_100,
    num: 100
  };
};
const cambiarValor = valor => {
  return {
    type: CAMBIAR_VALOR,
    num: valor
  };
};

export { aumentar100, cambiarValor };
