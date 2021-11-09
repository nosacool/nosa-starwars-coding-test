export default interface MovieCommentsInterface{

  fetchMovieComments(episode_id:number)
  addMovieComments(data:Object, episode_id: number)
}
