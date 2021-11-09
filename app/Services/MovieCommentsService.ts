import MovieComment from "App/Models/MovieComment";
import MovieCommentsInterface from "Contracts/interfaces/MovieComments.Interface";
import BaseService from "./BaseService";
import MoviesService from "./MoviesService";



export default class MovieCommentsService extends BaseService implements MovieCommentsInterface{

  protected movieService;
  constructor(){
    super(MovieComment)
    this.movieService = new MoviesService()
  }
  async addMovieComments(data: Object,episode_id: number) {
    const movie = await this.movieService.find(episode_id)
    if(movie){
      //console.log(movie)
      try {
        const movieComment = await movie.related('comments').create(data);
        return {
          status:0,
          data:movieComment
        }
      } catch (error) {
        //console.log(error)
        return {
          status:422,
          error:'Error Occured'
        }
      }

    }
    else{
      return {
        status:404,
        error:'Movie Episode Not Found'
      }
    }

  }

  async fetchMovieComments(episode_id: number) {
    return this.model.query().where('episode_id',episode_id).orderBy('id','DESC')
  }




}
