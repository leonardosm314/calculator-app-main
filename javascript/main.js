// global function

import { CalculadoraOperar } from "./funciones.js";

function forEach(list, callback) {
  Array.prototype.forEach.call(list, callback);
}
//instanciar componentes
const btnGro = document.querySelectorAll(".btn");
const containerRes = document.querySelector("#calc-result");
const toggle = document.querySelector("#calc-switch");
const container = document.querySelector("#container");
//estado de la aplicaccion
let inputTexto = "";
let listInput = [];
let theme = 1;
// funcion de inicio
const init = () => {
  container.classList.add("theme-" + theme);
  toggle.addEventListener("click", () => {
    container.classList.remove("theme-" + theme);
    if (theme >= 3) {
      theme = 1;
    } else {
      theme++;
    }
    container.classList.add("theme-" + theme);
  });
  forEach(btnGro, (value) => {
    const { id, textContent } = value;
    value.addEventListener("click", () => {
      if (id === "btn-calcular") {
        calcular();
      } else if (id === "btn-del") {
        del();
      } else if (id === "btn-equis") {
        escribirInput("*");
      } else if (id === "btn-reset") {
        reset();
      } else {
        escribirInput(textContent);
      }
    });
  });
};

// funcion de escribir
const escribirInput = (numAndOper) => {
  listInput.push(numAndOper);
  inputTexto += numAndOper;
  containerRes.textContent = inputTexto;
};
// limpiar
const reset = () => {
  inputTexto = "";
  listInput = [];
  containerRes.textContent = "";
};
// eliminar el ultimo caracter escrito
const del = () => {
  inputTexto = inputTexto.substring(0, inputTexto.length - 1);
  listInput.pop();
  containerRes.textContent = inputTexto;
};
// calcular el total
const calcular = () => {
  if (!inputTexto) {
    containerRes.innerHTML = `<p style="color: red;" >vacio</P>`;
    return;
  }
  CalculadoraOperar(
    inputTexto,
    (r) => {
      inputTexto = r;
      containerRes.textContent = inputTexto;
      listInput = [r];
    },
    (e) => {
      containerRes.innerHTML = `<p style="color: red;" >Error</P>`;
    }
  );
};

init();
