"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const getUsers = async () => {
    try {
        const userParams = {
            TableName: 'Users',
        };
        const { Items } = await dynamoDb_1.dynamoDbDocClient.scan(userParams).promise();
        return apiGateway_1.formatJSONResponse({
            users: Items
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