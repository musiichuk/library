"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/getUsers.getAllUsers`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map