"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.default = Env_1.default.rules({
    PG_HOST: Env_1.default.schema.string({ format: 'host' }),
    PG_PORT: Env_1.default.schema.number(),
    PG_USER: Env_1.default.schema.string(),
    PG_PASSWORD: Env_1.default.schema.string.optional(),
    PG_DB_NAME: Env_1.default.schema.string(),
});
//# sourceMappingURL=env.js.map