import { Navegacion_movil } from './01.elementos/Navegacion_movil';

const navegacion_movil: Navegacion_movil = Navegacion_movil.obtener_objeto();

window.addEventListener('load', () => {
  navegacion_movil.obtener_abrir_menu().addEventListener('click', () => {
    navegacion_movil.abrir();
    console.log('hola');
  });

  navegacion_movil.obtener_cerrar_menu().addEventListener('click', () => {
    navegacion_movil.cerrar();
  });
});
