"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const deleteUser = async (event) => {
    try {
        const { id = '' } = event.pathParameters;
        const userParams = {
            TableName: 'Users',
            Key: { id }
        };
        await dynamoDb_1.dynamoDbDocClient.delete(userParams).promise();
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