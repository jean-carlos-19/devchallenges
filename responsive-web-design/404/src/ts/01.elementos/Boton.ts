class Boton {
    private html_boton: HTMLElement = null
    private static boton: Boton = null
    private selectores_boton: string = ''
    private selector_nuevo_boton = 'boton-click'

    private constructor() {
        this.html_boton = document.getElementById('btn-enviar')
        this.almacenar_informacion_css()
    }

    public static obtener_objeto(): Boton {
        if (this.boton === null) this.boton = new Boton()
        return this.boton
    }

    public obtener_boton(): HTMLElement {
        return this.html_boton
    }

    private almacenar_informacion_css(): void {
        this.selectores_boton = this.html_boton.getAttribute('class')
    }

    public agregar_efecto() {
        this.html_boton.removeAttribute('class')
        this.html_boton.setAttribute(
            'class',
            `${this.selectores_boton} ${this.selector_nuevo_boton}`
        )
        this.pausar()
    }

    private pausar(): void {
        window.setTimeout(() => {
            this.resetear_efecto()
        }, 1000)
    }

    public resetear_efecto(): void {
        this.html_boton.removeAttribute('class')
        this.html_boton.setAttribute('class', this.selectores_boton)
    }
}

export { Boton }
