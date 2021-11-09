"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MovieComment_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MovieComment"));
const BaseService_1 = __importDefault(require("./BaseService"));
const MoviesService_1 = __importDefault(require("./MoviesService"));
class MovieCommentsService extends BaseService_1.default {
    constructor() {
        super(MovieComment_1.default);
        this.movieService = new MoviesService_1.default();
    }
    async addMovieComments(data, episode_id) {
        const movie = await this.movieService.find(episode_id);
        if (movie) {
            try {
                const movieComment = await movie.related('comments').create(data);
                return {
                    status: 0,
                    data: movieComment
                };
            }
            catch (error) {
                return {
                    status: 422,
                    error: 'Error Occured'
                };
            }
        }
        else {
            return {
                status: 404,
                error: 'Movie Episode Not Found'
            };
        }
    }
    async fetchMovieComments(episode_id) {
        return this.model.query().where('episode_id', episode_id).orderBy('id', 'DESC');
    }
}
exports.default = MovieCommentsService;
//# sourceMappingURL=MovieCommentsService.js.map