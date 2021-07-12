"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../../constants");
const getBooks = async () => {
    try {
        const bookParams = {
            TableName: constants_1.Databases.Books,
        };
        const { Items } = await dynamoDb_1.dynamoDbDocClient.scan(bookParams).promise();
        return apiGateway_1.formatJSONResponse({
            books: Items
        });
    }
    catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        };
    }
};
exports.getAllBooks = lambda_1.middyfy(getBooks);
//# sourceMappingURL=getBooks.js.map