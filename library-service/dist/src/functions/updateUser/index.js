"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/updateUser.updateUserAtDb`,
    events: [
        {
            http: {
                method: 'put',
                path: 'users/{id}',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map