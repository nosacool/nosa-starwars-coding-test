"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
class AppProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
    }
    async boot() {
        const { default: MoviesService } = await Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Services/MoviesService')));
        const { default: MovieCommentsService } = await Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Services/MovieCommentsService')));
        const { default: CharacterService } = await Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Services/CharacterService')));
        this.app.container.singleton('MyProject/MoviesService', () => new MoviesService());
        this.app.container.singleton('MyProject/MovieCommentsService', () => new MovieCommentsService());
        this.app.container.singleton('MyProject/CharacterService', () => new CharacterService());
    }
    async ready() {
    }
    async shutdown() {
    }
}
exports.default = AppProvider;
//# sourceMappingURL=AppProvider.js.map