"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    constructor(model) {
        this.model = model;
    }
    find(id) {
        return this.model.find(id);
    }
}
exports.default = BaseService;
//# sourceMappingURL=BaseService.js.map