"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/getUserBooks.getUserBooks`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users/{id}/book',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map