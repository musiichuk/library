"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const getUserByIdFromDb_1 = require("../../../services/user-services/getUserByIdFromDb");
const getUser = async (event) => {
    try {
        const { user } = await getUserByIdFromDb_1.getUserByIdFromDb(event.pathParameters);
        return apiGateway_1.formatJSONResponse({
            user
        });
    }
    catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        };
    }
};
exports.getUserById = lambda_1.middyfy(getUser);
//# sourceMappingURL=getUser.js.map