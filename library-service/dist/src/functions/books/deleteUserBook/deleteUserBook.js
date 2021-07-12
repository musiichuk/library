"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserBook = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../../constants");
const deleteUserBookFromDb = async (event) => {
    try {
        const { userId = '', bookId } = event.pathParameters;
        const userParams = {
            TableName: constants_1.Databases.UserBooks,
            Key: { userId, bookId }
        };
        await dynamoDb_1.dynamoDbDocClient.delete(userParams).promise();
        return apiGateway_1.formatJSONResponse({
            message: `User's ${userId} book ${bookId} was removed successfully`
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.deleteUserBook = lambda_1.middyfy(deleteUserBookFromDb);
//# sourceMappingURL=deleteUserBook.js.map