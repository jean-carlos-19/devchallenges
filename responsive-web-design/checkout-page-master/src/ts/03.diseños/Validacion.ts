class Validacion {
  private static validacion: Validacion = null;

  private constructor() {}

  public static obtener_objeto(): Validacion {
    if (this.validacion === null) this.validacion = new Validacion();
    return this.validacion;
  }

  public validar_correo(correo: string): boolean {
    const expresion_regular_correo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const es_valido = expresion_regular_correo.test(correo);

    if (!correo) return false;

    if (!es_valido) return false;

    return true;
  }
  public validar_telefono(telefono: string): boolean {
    if (!telefono) return false;

    if (telefono.length !== 10) return false;

    return true;
  }
  public validar_nombre_completo(nombre_completo: string): boolean {
    const valor_nombre_completo = nombre_completo.split(" ");

    if (!nombre_completo) return false;

    if (valor_nombre_completo.length !== 2) return false;

    return true;
  }
  public validar_direccion(direccion: string): boolean {
    if (!direccion) return false;

    if (direccion.length > 255) return false;

    return true;
  }
  public validar_ciudad(ciudad: string): boolean {
    if (!ciudad) return false;
    return true;
  }
  public validar_pais(pais: string): boolean {
    if (!pais) return false;
    return true;
  }
  public validar_codigo_postal(codigo_postal: string): boolean {
    if (!codigo_postal) return false;
    return true;
  }
}
export { Validacion };
