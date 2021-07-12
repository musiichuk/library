"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAtDB = void 0;
const dynamoDb_1 = require("@libs/dynamoDb");
const constants_1 = require("../../constants");
const updateUserAtDB = async (id = '', age = 0) => {
    try {
        if (!age)
            throw new Error('Age is required fields');
        const userParams = {
            TableName: constants_1.Databases.Users,
            Key: { id },
            UpdateExpression: "set age = :a",
            ExpressionAttributeValues: {
                ":a": age,
            },
            ReturnValues: "UPDATED_NEW"
        };
        const updatedUser = await dynamoDb_1.dynamoDbDocClient.update(userParams).promise();
        return { updatedUser };
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.updateUserAtDB = updateUserAtDB;
//# sourceMappingURL=updateUserAtDB.js.map