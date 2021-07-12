"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResolver_1 = require("@libs/handlerResolver");
exports.default = {
    handler: `${handlerResolver_1.handlerPath(__dirname)}/addBook.addBookToDb`,
    events: [
        {
            http: {
                method: 'post',
                path: 'books',
            }
        }
    ]
};
//# sourceMappingURL=index.js.map