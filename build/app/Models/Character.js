"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Character extends Orm_1.BaseModel {
    static async jsonStringify(character) {
        character.films = JSON.stringify(character.films);
        character.species = JSON.stringify(character.species);
        character.vehicles = JSON.stringify(character.vehicles);
        character.starships = JSON.stringify(character.starships);
    }
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Character.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "name", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "height", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "mass", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "hair_color", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "skin_color", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "eye_color", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "birth_year", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "gender", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "homeworld", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "films", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "species", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "vehicles", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "starships", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Character.prototype, "url", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Character.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Character.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.beforeSave(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Character]),
    __metadata("design:returntype", Promise)
], Character, "jsonStringify", null);
exports.default = Character;
//# sourceMappingURL=Character.js.map