"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToDB = void 0;
const dynamoDb_1 = require("@libs/dynamoDb");
const insertIf_1 = require("../../utils/insertIf");
const constants_1 = require("../../constants");
const uuid_1 = require("uuid");
const addUserToDB = async ({ name = '', age = 0, gender = '' }) => {
    try {
        if (!name || !age)
            throw new Error('Name and age are required fields');
        const userId = uuid_1.v4();
        const userParams = {
            TableName: constants_1.Databases.Users,
            Item: {
                id: userId,
                name,
                age,
                ...insertIf_1.insertIf(gender, { gender }),
            }
        };
        await dynamoDb_1.dynamoDbDocClient.put(userParams).promise();
        return { user: userParams?.Item };
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.addUserToDB = addUserToDB;
//# sourceMappingURL=addUserToDB.js.map