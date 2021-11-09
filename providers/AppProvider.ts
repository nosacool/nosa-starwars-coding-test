import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const {default:MoviesService} = await import('App/Services/MoviesService')
    const {default:MovieCommentsService} = await import('App/Services/MovieCommentsService')
    const {default:CharacterService} = await import('App/Services/CharacterService')
    this.app.container.singleton('MyProject/MoviesService',() =>  new MoviesService() )
    this.app.container.singleton('MyProject/MovieCommentsService',() => new MovieCommentsService())
    this.app.container.singleton('MyProject/CharacterService',() => new CharacterService())
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
