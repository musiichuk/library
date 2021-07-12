"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/deleteUserBook.deleteUserBook`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'users/{userId}/book/{bookId}',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map