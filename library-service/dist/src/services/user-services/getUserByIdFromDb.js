"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdFromDb = void 0;
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../constants");
const getUserByIdFromDb = async ({ id = '' }) => {
    try {
        const userParams = {
            TableName: constants_1.Databases.Users,
            Key: { id }
        };
        const { Item } = await dynamoDb_1.dynamoDbDocClient.get(userParams).promise();
        return { user: Item };
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.getUserByIdFromDb = getUserByIdFromDb;
//# sourceMappingURL=getUserByIdFromDb.js.map