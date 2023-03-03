import { Navegacion_movil } from "./Navegacion_movil";

const navegacion_movil = Navegacion_movil.obtener_objeto();

window.addEventListener("load", () => {
  navegacion_movil.obtener_abrir_menu().addEventListener("click", () => {
    navegacion_movil.accion_menu();
  });
});
