"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movie"));
const BaseService_1 = __importDefault(require("./BaseService"));
class MoviesService extends BaseService_1.default {
    constructor() {
        super(Movie_1.default);
    }
    async insertData(data) {
        try {
            data.forEach(async (movie) => {
                const movies = new this.model();
                movies.title = movie.title;
                movies.episode_id = movie.episode_id;
                movies.opening_crawl = movie.opening_crawl;
                movies.director = movie.director;
                movies.producer = movie.producer;
                movies.release_date = movie.release_date;
                movies.comment_count = 0;
                await movies.save();
                return true;
            });
        }
        catch (error) {
            return error;
        }
    }
    async fetchMovies() {
        const movies = await Movie_1.default.query().orderBy('release_date', 'asc').withCount('comments', (query) => {
            query.as('totalComments');
        });
        movies.forEach((movie) => {
            movie.comment_count = movie.$extras.totalComments;
            movie.save();
        });
        return movies;
    }
    async fetchMovieComments(id) {
        const movie = await this.model.find(id);
        if (movie) {
            await movie.preload('comments').orderBy('id', 'DESC');
            return movie.comments;
        }
    }
}
exports.default = MoviesService;
//# sourceMappingURL=MoviesService.js.map