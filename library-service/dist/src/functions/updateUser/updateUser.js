"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAtDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const dynamoDb_1 = require("@libs/dynamoDb");
const updateUser = async (event) => {
    try {
        const { id = '' } = event.pathParameters;
        const { age = 0, } = event?.body;
        if (!age)
            throw new Error('Age is required fields');
        const userParams = {
            TableName: 'Users',
            Key: { id },
            UpdateExpression: "set age = :a",
            ExpressionAttributeValues: {
                ":a": age,
            },
            ReturnValues: "UPDATED_NEW"
        };
        const updateUser = await dynamoDb_1.dynamoDbDocClient.update(userParams).promise();
        return apiGateway_1.formatJSONResponse({
            message: `User ${id} was updated successfully`,
            updateUser
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.updateUserAtDb = lambda_1.middyfy(updateUser);
//# sourceMappingURL=updateUser.js.map