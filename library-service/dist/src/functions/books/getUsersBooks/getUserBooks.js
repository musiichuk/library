"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBooks = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../../constants");
const getAllUsersBooks = async (event) => {
    try {
        const { id: userId = '' } = event.pathParameters;
        const userBooksParams = {
            TableName: constants_1.Databases.UserBooks,
            KeyConditionExpression: 'userId = :userId',
            ExpressionAttributeValues: { ':userId': userId }
        };
        const result = await dynamoDb_1.dynamoDbDocClient.query(userBooksParams).promise();
        return apiGateway_1.formatJSONResponse({
            userBooks: result
        });
    }
    catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        };
    }
};
exports.getUserBooks = lambda_1.middyfy(getAllUsersBooks);
//# sourceMappingURL=getUserBooks.js.map