import { dynamoDbDocClient } from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const getUserByIdFromDb = async ({id = ''}) => {
    try {
        const userParams = {
            TableName: Databases.Users,
            Key: { id }
        };

        const { Item } = await dynamoDbDocClient.get(userParams).promise();
        return { user: Item };
    } catch (err) {
        throw new Error(err.message);
    }
}