"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookToDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../../constants");
const uuid_1 = require("uuid");
const addBook = async (event) => {
    try {
        const { title = '', author = '', } = event?.body;
        if (!title || !author)
            throw new Error('Title and Author are required fields');
        const bookId = uuid_1.v4();
        const bookParams = {
            TableName: constants_1.Databases.Books,
            Item: {
                id: bookId,
                title,
                author,
            }
        };
        await dynamoDb_1.dynamoDbDocClient.put(bookParams).promise();
        return apiGateway_1.formatJSONResponse({
            message: `Book ${bookId} created successfully`,
            book: bookParams?.Item
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.addBookToDb = lambda_1.middyfy(addBook);
//# sourceMappingURL=addBook.js.map