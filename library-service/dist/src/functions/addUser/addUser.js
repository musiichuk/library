"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const insertIf_1 = require("../../utils/insertIf");
const uuid_1 = require("uuid");
const addUser = async (event) => {
    try {
        const { name = '', age = 0, gender = '' } = event?.body;
        if (!name || !age)
            throw new Error('Name and age are required fields');
        const userId = uuid_1.v4();
        const userParams = {
            TableName: 'Users',
            Item: {
                id: userId,
                name,
                age,
                ...insertIf_1.insertIf(gender, { gender }),
            }
        };
        await dynamoDb_1.dynamoDbDocClient.put(userParams).promise();
        return apiGateway_1.formatJSONResponse({
            message: `User ${userId} created successfully`,
            user: userParams?.Item
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.addUserToDb = lambda_1.middyfy(addUser);
//# sourceMappingURL=addUser.js.map