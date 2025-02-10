import Helpers from './helpers.js'
class App{
    static async main(){
        const Inicio = Helpers.loadPage('./resources/html/home.html', 'main') 
  
      const listOptions = document.querySelectorAll('#main-menu a')
      listOptions.forEach(item => item.addEventListener('click', App.#mainMenu))
}
/**
   * Determina la acción a llevar a cabo según la opción elegida en el menú principal
   * @param {String} option El texto del ancla seleccionada
   */
static #mainMenu = async e => {
    let option = 'ninguna'
    if (e !== undefined) {
      e.preventDefault()
      option = e.target.text
    }

    switch (option) {
      case 'Inicio':
        const Inicio = Helpers.loadPage('./resources/html/home.html', 'main')
        break
        case 'Fancy Music': 
          const FancyMusic = Helpers.loadPage('./resources/html/home.html', 'main')
          break
      case 'Canciones':
        const Canciones = Helpers.loadPage('./resources/html/songs.html', 'main')
        break
      case 'Artistas':
        const Artistas = Helpers.loadPage('./resources/html/artists.html', 'main')
        break
      case 'Reproduciendo Ahora':
        const Reproduciendo = Helpers.loadPage('./resources/html/playing.html', 'main')
        break
      case 'Ajustes':
        const settingsPage = Helpers.loadPage('./resources/html/settings.html','main')
          break
      case 'Acerca de...':
        const aboutPage = Helpers.loadPage('./resources/html/about.html', 'main')
        break
      default:
        console.log("ELDIABLO")
        console.warn('Fallo en ', e.target)
      // Toast se puede usar en los modos 'success', 'warning', 'danger' o 'info'
      // Toast.info({ message: `No hay un caso para la opción ${option} `, mode: 'warning' })
    }
  }
}
App.main()