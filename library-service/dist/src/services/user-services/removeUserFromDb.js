"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserFromDb = void 0;
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../constants");
const removeUserFromDb = async ({ id = '' }) => {
    try {
        const userParams = {
            TableName: constants_1.Databases.Users,
            Key: { id }
        };
        await dynamoDb_1.dynamoDbDocClient.delete(userParams).promise();
        return { id };
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.removeUserFromDb = removeUserFromDb;
//# sourceMappingURL=removeUserFromDb.js.map