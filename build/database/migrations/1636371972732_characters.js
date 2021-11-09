"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Characters extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'characters';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('height');
            table.string('mass');
            table.string('hair_color');
            table.string('eye_color');
            table.string('skin_color');
            table.string('birth_year');
            table.string('gender');
            table.string('homeworld');
            table.json('films');
            table.json('species');
            table.json('vehicles');
            table.json('starships');
            table.string('url');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Characters;
//# sourceMappingURL=1636371972732_characters.js.map