"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookForUser = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../../constants");
const addUserBook = async (event) => {
    try {
        const { id: userId = '' } = event?.pathParameters;
        const { bookId = '', } = event?.body;
        if (!userId || !bookId)
            throw new Error('User Id and Book Id are required fields');
        const userBooksParams = {
            TableName: constants_1.Databases.UserBooks,
            Item: {
                userId,
                bookId,
            }
        };
        await dynamoDb_1.dynamoDbDocClient.put(userBooksParams).promise();
        return apiGateway_1.formatJSONResponse({
            message: `Book ${bookId} assigned to ${userId} successfully`,
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.addBookForUser = lambda_1.middyfy(addUserBook);
//# sourceMappingURL=addBookForUser.js.map