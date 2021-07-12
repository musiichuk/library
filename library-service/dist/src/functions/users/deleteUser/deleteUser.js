"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const removeUserFromDb_1 = require("../../../services/user-services/removeUserFromDb");
const deleteUser = async (event) => {
    try {
        const { id = '' } = await removeUserFromDb_1.removeUserFromDb(event?.pathParameters);
        return apiGateway_1.formatJSONResponse({
            message: `User ${id} was removed successfully`
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.deleteUserFromDb = lambda_1.middyfy(deleteUser);
//# sourceMappingURL=deleteUser.js.map