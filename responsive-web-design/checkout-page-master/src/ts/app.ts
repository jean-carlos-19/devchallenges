import { Formulario } from "@diseños/Formulario";

const formulario = Formulario.obtener_objeto();

window.addEventListener("load", () => {
  formulario.obtener_boton_enviar().addEventListener("click", (evento) => {
    evento.preventDefault();
  });
});
