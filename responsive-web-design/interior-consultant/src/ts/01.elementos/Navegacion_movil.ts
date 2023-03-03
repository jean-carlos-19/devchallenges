class Navegacion_movil {
  private icono_abrir_menu: HTMLElement = null;
  private icono_cerrar_menu: HTMLElement = null;
  private html_navegacion_movil: HTMLElement = null;
  private static navegacion_movil: Navegacion_movil = null;
  private css_navegacion: string = "navegacion-movil fon-secund-oscuro";

  private constructor() {
    this.icono_abrir_menu = document.getElementById("icono-abrir-menu");
    this.icono_cerrar_menu = document.getElementById("icono-cerrar-menu");
    this.html_navegacion_movil = document.getElementById("navegacion-movil");
  }

  public static obtener_objeto(): Navegacion_movil {
    if (this.navegacion_movil === null)
      this.navegacion_movil = new Navegacion_movil();
    return this.navegacion_movil;
  }

  public obtener_abrir_menu(): HTMLElement {
    return this.icono_abrir_menu;
  }
  public obtener_cerrar_menu(): HTMLElement {
    return this.icono_cerrar_menu;
  }
  public abrir(): void {
    this.html_actualizar_atributo_class("navegacion-movil__abre");
  }
  public cerrar(): void {
    this.html_actualizar_atributo_class("");
  }

  private html_actualizar_atributo_class(nuevo_class_css:any): void {
    this.html_navegacion_movil.removeAttribute("class");
    this.html_navegacion_movil.setAttribute(
      "class",
      `${this.css_navegacion} ${nuevo_class_css}`,
    );
  }
}
export { Navegacion_movil };
