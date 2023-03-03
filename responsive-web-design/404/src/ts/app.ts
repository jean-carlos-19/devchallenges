import { Boton } from '@elementos/Boton';

const boton: Boton = Boton.obtener_objeto()

window.addEventListener('load', () => {
    boton.obtener_boton().addEventListener('click', () => {
        boton.agregar_efecto()
    })
})
