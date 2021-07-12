"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const getAllUsersFromDb_1 = require("../../../services/user-services/getAllUsersFromDb");
const getUsers = async () => {
    try {
        const { users = [] } = await getAllUsersFromDb_1.getAllUsersFromDb();
        return apiGateway_1.formatJSONResponse({
            users
        });
    }
    catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        };
    }
};
exports.getAllUsers = lambda_1.middyfy(getUsers);
//# sourceMappingURL=getUsers.js.map