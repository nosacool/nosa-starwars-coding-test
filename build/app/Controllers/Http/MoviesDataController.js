"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MovieCommentsService_1 = __importDefault(global[Symbol.for('ioc.use')]("MyProject/MovieCommentsService"));
const MoviesService_1 = __importDefault(global[Symbol.for('ioc.use')]("MyProject/MoviesService"));
const Helpers_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helpers/Helpers"));
const axios_1 = __importDefault(require("axios"));
const BaseController_1 = __importDefault(require("./BaseController"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class MoviesDataController extends BaseController_1.default {
    async getData({ response }) {
        const result = (await axios_1.default.get('https://swapi.dev/api/films/')).data;
        var answer = await MoviesService_1.default.insertData(result.results);
        if (answer == true) {
            response.send({ done: true });
        }
        else {
            response.status(500).send({ done: answer });
        }
    }
    async fetchMovies({ response }) {
        return response.status(200).send(this.sendResponse(Helpers_1.default.successMessage(), await MoviesService_1.default.fetchMovies()));
    }
    async fetchMovieComments({ params, response }) {
        const comments = await MovieCommentsService_1.default.fetchMovieComments(params.id);
        if (comments) {
            return response.send(this.sendResponse(Helpers_1.default.successMessage(), comments));
        }
        return response.status(404).send(this.sendError(Helpers_1.default.ErrorNotFound('Movie'), '404'));
    }
    async addMovieComments({ request, params, response }) {
        const movieCommentSchema = Validator_1.schema.create({
            body: Validator_1.schema.string({ trim: true, escape: true }, [
                Validator_1.rules.maxLength(500),
                Validator_1.rules.required()
            ])
        });
        var payload = await request.validate({ schema: movieCommentSchema });
        payload['author'] = request.ip();
        const result = await MovieCommentsService_1.default.addMovieComments(payload, params.id);
        if (result.status == 0) {
            return this.sendResponse(Helpers_1.default.successMessage(), result.data);
        }
        else {
            return response.status(result.status).send(this.sendError(result.error, result.status.toString()));
        }
    }
}
exports.default = MoviesDataController;
//# sourceMappingURL=MoviesDataController.js.map