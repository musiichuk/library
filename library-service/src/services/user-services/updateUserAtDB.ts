import {dynamoDbDocClient} from "@libs/dynamoDb";
import { Databases } from "../../constants";

export const updateUserAtDB = async (id = '', age = 0) => {
    try {
        if (!age) throw new Error('Age is required fields');

        const userParams = {
            TableName: Databases.Users,
            Key: { id },
            UpdateExpression: "set age = :a",
            ExpressionAttributeValues:{
                ":a": age,
            },
            ReturnValues:"UPDATED_NEW"
        };

        const updatedUser = await dynamoDbDocClient.update(userParams).promise();

        return { updatedUser };
    } catch (err) {
        throw new Error(err.message);
    }
}