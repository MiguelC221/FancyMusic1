export default class Helpers {
/**
   * Carga un recurso HTML en una capa de la aplicación
   * @param {String} url La ruta donde se encuentra el recurso
   * @param {String} container Opcionalmente, la capa donde se inserta el contenido
   * @returns Si el segundo argumento se da, se retorna el container, si no se retorna el recurso
   */
static async loadPage(url, container = null) {
    try {
      const response = await fetch(url)

      if (response.ok) {
        const html = await response.text()
        const element = document.querySelector(container)
        if (element) {
          element.innerHTML = html
        }
        return element || html // para permitir encadenamiento o para retornar el HTML
      } else {
        throw new Error(`${response.status} - ${response.statusText}, al intentar acceder al recurso '${response.url}'`)
      }
    } catch (e) {
      console.log(e)
    }
  }

}