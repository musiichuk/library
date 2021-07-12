"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAtDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const updateUserAtDB_1 = require("../../../services/user-services/updateUserAtDB");
const updateUser = async (event) => {
    try {
        const { id = '' } = event.pathParameters;
        const { age = 0, } = event?.body;
        const { updatedUser } = await updateUserAtDB_1.updateUserAtDB(id, age);
        return apiGateway_1.formatJSONResponse({
            message: `User ${id} was updated successfully`,
            updatedUser
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.updateUserAtDb = lambda_1.middyfy(updateUser);
//# sourceMappingURL=updateUser.js.map