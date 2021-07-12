"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersFromDb = void 0;
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../constants");
const getAllUsersFromDb = async () => {
    try {
        const userParams = {
            TableName: constants_1.Databases.Users,
        };
        const { Items } = await dynamoDb_1.dynamoDbDocClient.scan(userParams).promise();
        return { users: Items };
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.getAllUsersFromDb = getAllUsersFromDb;
//# sourceMappingURL=getAllUsersFromDb.js.map