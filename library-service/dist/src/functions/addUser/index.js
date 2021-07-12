"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/addUser.addUserToDb`,
    events: [
        {
            http: {
                method: 'post',
                path: 'users',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map