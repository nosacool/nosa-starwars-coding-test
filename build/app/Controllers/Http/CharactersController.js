"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterService_1 = __importDefault(global[Symbol.for('ioc.use')]("MyProject/CharacterService"));
const BaseController_1 = __importDefault(require("./BaseController"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Helpers_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helpers/Helpers"));
class CharactersController extends BaseController_1.default {
    async fetchData() {
        if (await CharacterService_1.default.fetchdata()) {
            return 'done';
        }
        else {
            return 'error';
        }
    }
    async getCharacters({ request }) {
        const characterSchema = Validator_1.schema.create({
            sort: Validator_1.schema.string.optional({ trim: true, escape: true }, [
                Validator_1.rules.regex(new RegExp('^(gender|name|height)$'))
            ]),
            order: Validator_1.schema.string.optional({ trim: true, escape: true }, [
                Validator_1.rules.regex(new RegExp('^(asc|ASC|desc|DESC)$')),
                Validator_1.rules.requiredIfExists('sort')
            ]),
            filter: Validator_1.schema.string.optional({ trim: true, escape: true })
        });
        const payload = await request.validate({ schema: characterSchema, messages: {
                'sort.regex': 'Please use gender, name or height for the sort parameter',
                'order.regex': 'Please use ASC or DESC for the order parameter'
            } });
        const data = await CharacterService_1.default.fetchCharacters(payload.sort, payload.order, payload.filter);
        const result = {
            metadata: {
                count: data.length,
                Height: await this.totalHeight(data),
            },
            characters: data
        };
        return this.sendResponse(Helpers_1.default.successMessage(), result);
    }
    async totalHeight(characters) {
        var total = 0;
        characters.forEach(async (character) => {
            if (!isNaN(character.height)) {
                total += Number(character.height);
            }
        });
        return {
            cm: total,
            feet: await this.toFeet(total)
        };
    }
    async toFeet(n) {
        var realFeet = ((n * 0.393700) / 12);
        var feet = Math.floor(realFeet);
        var inches = ((realFeet - feet) * 12).toFixed(2);
        return feet + "ft" + ' ' + inches + 'inches';
    }
}
exports.default = CharactersController;
//# sourceMappingURL=CharactersController.js.map