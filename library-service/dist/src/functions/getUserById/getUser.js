"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const getUser = async (event) => {
    try {
        const { id = '' } = event.pathParameters;
        const userParams = {
            TableName: 'Users',
            Key: { id }
        };
        const { Item } = await dynamoDb_1.dynamoDbDocClient.get(userParams).promise();
        return apiGateway_1.formatJSONResponse({
            user: Item
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