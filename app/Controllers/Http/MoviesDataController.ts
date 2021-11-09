 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovieCommentsServices from '@ioc:MyProject/MovieCommentsService';
import MoviesServices from '@ioc:MyProject/MoviesService';
import Helpers from 'App/Helpers/Helpers';
import axios from 'axios';
import BaseController from './BaseController';
import { schema, rules } from '@ioc:Adonis/Core/Validator'



export default class MoviesDataController extends BaseController {



  public async getData({response}:HttpContextContract){

    const result =(await axios.get('https://swapi.dev/api/films/')).data
    var answer = await MoviesServices.insertData(result.results)
    if(answer == true){
      response.send({done: true})
    }
    else{
      response.status(500).send({done: answer})
    }

  }

  public async fetchMovies({response}: HttpContextContract ){
    return response.status(200).send(this.sendResponse(Helpers.successMessage(),await MoviesServices.fetchMovies()))
  }

  public async fetchMovieComments({params,response}:HttpContextContract){
    const comments = await MovieCommentsServices.fetchMovieComments(params.id)
    if(comments){
      return response.send(this.sendResponse(Helpers.successMessage(),comments))
    }
    return response.status(404).send(this.sendError(Helpers.ErrorNotFound('Movie'),'404'))
  }

  public async addMovieComments({request,params,response}: HttpContextContract){
    const movieCommentSchema = schema.create({
      body: schema.string({ trim: true,escape:true}, [
        rules.maxLength(500),
        rules.required()
      ])

    })

    var payload = await request.validate({schema: movieCommentSchema})
    payload['author'] = request.ip()
    const result = await MovieCommentsServices.addMovieComments(payload,params.id)
    if(result.status == 0){
      return this.sendResponse(Helpers.successMessage(),result.data)
    }
    else{
      return response.status(result.status).send(this.sendError(result.error,result.status.toString()))
    }
  }

}
