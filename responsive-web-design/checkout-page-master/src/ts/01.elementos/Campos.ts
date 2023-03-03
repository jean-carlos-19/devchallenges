import { Validacion } from "@diseños/Validacion";

class Campos {
  private correo: HTMLElement = null;
  private telefono: HTMLElement = null;
  private nombre_completo: HTMLElement = null;
  private direccion: HTMLElement = null;
  private ciudad: HTMLElement = null;
  private pais: HTMLElement = null;
  private codigo_postal: HTMLElement = null;
  private static campo: Campos = null;
  private validacion: Validacion = Validacion.obtener_objeto();

  private constructor() {
    this.correo = document.getElementById("email");
    this.telefono = document.getElementById("phone");
    this.nombre_completo = document.getElementById("fullname");
    this.direccion = document.getElementById("address");
    this.ciudad = document.getElementById("city");
    this.pais = document.getElementById("country");
    this.codigo_postal = document.getElementById("postal_code");
  }

  public static obtener_objeto(): Campos {
    if (this.campo === null) this.campo = new Campos();
    return this.campo;
  }

  buscar_campo(campo: string, valor: string): boolean {
    switch (campo) {
      case "correo":
        return this.validacion.validar_correo(valor);
      case "telefono":
        return this.validacion.validar_telefono(valor);
      case "nombre_completo":
        return this.validacion.validar_nombre_completo(valor);
      case "direccion":
        return this.validacion.validar_direccion(valor);
      case "ciudad":
        return this.validacion.validar_ciudad(valor);
      case "pais":
        return this.validacion.validar_pais(valor);
      case "codigo_postal":
        return this.validacion.validar_codigo_postal(valor);
      default:
        return undefined;
    }
  }
}

export { Campos };
