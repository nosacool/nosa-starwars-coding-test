"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.group(() => {
    Route_1.default.get('/', 'MoviesDataController.fetchMovies');
    Route_1.default.get('/getData', 'MoviesDataController.getData');
    Route_1.default.get(':id/comments', 'MoviesDataController.fetchMovieComments');
    Route_1.default.post(':id/comments', 'MoviesDataController.addMovieComments');
    Route_1.default.get('characters', 'CharactersController.getCharacters');
    Route_1.default.get('getChar', 'CharactersController.fetchData');
}).prefix('movies');
//# sourceMappingURL=routes.js.map