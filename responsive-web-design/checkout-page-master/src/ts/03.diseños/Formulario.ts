class Formulario {
  private enviar: any = null;
  private static formulario: Formulario = null;

  private constructor() {
    this.enviar = document.getElementById("enviar");
    this.boton_bloqueado();
  }

  public static obtener_objeto(): Formulario {
    if (this.formulario === null) this.formulario = new Formulario();
    return this.formulario;
  }

  public boton_bloqueado(): void {
    this.enviar.disabled = false;
  }

  public boton_activar(): void {
    this.enviar.disabled = true;
  }

  public obtener_boton_enviar(): HTMLElement {
    return this.enviar;
  }
}

export { Formulario };
