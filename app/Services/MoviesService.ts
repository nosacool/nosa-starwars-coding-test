import Movie from "App/Models/Movie";
import MoviesInterface from "Contracts/interfaces/Movies.Interface";
//import { Position } from "monaco-editor";
import BaseService from "./BaseService";

export default class MoviesService extends BaseService implements MoviesInterface{

  constructor(){
    super(Movie)
  }

  async insertData(data: Array<any>) {
    try {
      data.forEach(async movie => {
        const movies = new this.model()
        movies.title = movie.title
        movies.episode_id = movie.episode_id
        movies.opening_crawl = movie.opening_crawl
        movies.director = movie.director
        movies.producer = movie.producer
        movies.release_date = movie.release_date
        movies.comment_count = 0
        await movies.save()
        return true
      });
    } catch (error) {
      return false
    }


  }

  async fetchMovies(){
    const movies =  await Movie.query().orderBy('release_date','asc').withCount('comments',(query) => {
      query.as('totalComments')
    })
    movies.forEach((movie) => {
      movie.comment_count = movie.$extras.totalComments
      movie.save()
    })

    return movies
    //return  this.model.query().withCount('comments')
  }

  async fetchMovieComments(id:number){
   // console.log(id);
    const movie = await this.model.find(id)

    if(movie){
      await movie.preload('comments').orderBy('id','DESC')
      //console.log(movie)
      return movie.comments
    }
  }

}
