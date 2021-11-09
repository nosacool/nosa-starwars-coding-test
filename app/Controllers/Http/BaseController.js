"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    sendResponse(message, result) {
        return {
            status: '00',
            message: message,
            data: result
        };
    }
    sendError(error, status = "01", errorMessages = []) {
        return {
            status: status,
            message: error,
            data: errorMessages
        };
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map