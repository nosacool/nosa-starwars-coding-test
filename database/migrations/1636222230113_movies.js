"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Movies extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'movies';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.string('title');
            table.integer('episode_id').primary();
            table.text('opening_crawl');
            table.string('director');
            table.string('producer');
            table.string('release_date');
            table.integer('comment_count');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Movies;
//# sourceMappingURL=1636222230113_movies.js.map