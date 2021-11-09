declare module '@ioc:MyProject/MoviesService' {
  import MoviesService from 'App/Services/MoviesService'

  const MoviesServices: MoviesService
  export default MoviesServices
}

declare module '@ioc:MyProject/MovieCommentsService' {
  import MovieCommentsService from 'App/Services/MovieCommentsService'

  const MovieCommentsServices: MovieCommentsService
  export default MovieCommentsServices
}

declare module '@ioc:MyProject/CharacterService' {
  import CharacterService from 'App/Services/CharacterService'

  const CharacterServices: CharacterService
  export default CharacterServices
}

