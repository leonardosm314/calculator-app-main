//funciones de calculo

export const CalculadoraOperar = (sOperator, result, error) => {
  // evaluar si esta Bien escrito
  try {
    result(eval(sOperator));
  } catch (e) {
    error(e);
  }
};
