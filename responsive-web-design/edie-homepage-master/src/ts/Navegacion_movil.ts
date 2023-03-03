class Navegacion_movil {
  private abrir_menu: HTMLElement = null;
  private menu_movil: HTMLElement = null;
  private activado_menu: boolean = null;
  private static navegacion: Navegacion_movil = null;

  private constructor() {
    this.abrir_menu = document.getElementById("icono-menu");
    this.menu_movil = document.getElementById("navegacion-movil");
    this.activado_menu = false;
  }

  public static obtener_objeto(): Navegacion_movil {
    if (this.navegacion === null) this.navegacion = new Navegacion_movil();
    return this.navegacion;
  }

  public obtener_abrir_menu(): HTMLElement {
    return this.abrir_menu;
  }
  public cambiar_estado_menu(): void {
    this.activado_menu = !this.activado_menu;
  }
  public icono_menu(): void {
    this.abrir_menu.innerHTML = "menu";
  }
  public icono_cerrar(): void {
    this.abrir_menu.innerHTML = "close";
  }
  private estado_menu(): boolean {
    return this.activado_menu;
  }
  public accion_menu(): void {
    if (!this.estado_menu()) this.abrir();
    else this.cerrar();
    this.cambiar_estado_menu();
  }
  private abrir(): void {
    this.icono_cerrar();
    let css_aparece_menu = this.menu_movil.getAttribute("class");
    css_aparece_menu += " navegacion-movil-activo";
    this.menu_movil.setAttribute("class", css_aparece_menu);
  }

  private cerrar(): void {
    this.icono_menu();
    let css_menu_movil = this.menu_movil.getAttribute("class");
    let css_actual = css_menu_movil.split(" ");
    let classNames = "";
    css_actual.forEach((className) => {
      if (className !== "navegacion-movil-activo")
        classNames += className + " ";
    });
    this.menu_movil.setAttribute("class", classNames);
  }
}

export { Navegacion_movil };
