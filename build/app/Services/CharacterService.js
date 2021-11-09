"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Character"));
const BaseService_1 = __importDefault(require("./BaseService"));
const axios_1 = __importDefault(require("axios"));
class CharacterService extends BaseService_1.default {
    constructor() {
        super(Character_1.default);
    }
    async fetchCharacters(sortType, order, filter) {
        try {
            (await Character_1.default.query());
            if ((filter != undefined) && (sortType != undefined)) {
                const result = await this.model.query().where('gender', filter).orderBy(sortType, order);
                return result;
            }
            else if ((sortType != undefined) && (filter == undefined)) {
                const result = this.model.query().orderBy(sortType, order);
                return result;
            }
            else if ((sortType == undefined) && (filter != undefined)) {
                const result = this.model.query().where('gender', filter);
                return result;
            }
            else {
                const result = this.model.query();
                return result;
            }
        }
        catch (error) {
            console.log(error);
            return sortType + ' is not a valid sort Type';
        }
    }
    async fetchdata() {
        try {
            for (var i = 1; i <= 9; i++) {
                const result = (await axios_1.default.get('https://swapi.dev/api/people/?page=' + i)).data;
                result.results.forEach(async (character) => {
                    delete character.created;
                    delete character.edited;
                    await Character_1.default.create(character);
                });
            }
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.default = CharacterService;
//# sourceMappingURL=CharacterService.js.map