import {dynamoDbDocClient} from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const removeUserFromDb = async ({id = ''}) => {
    try {
        const userParams = {
            TableName: Databases.Users,
            Key: { id }
        };

        await dynamoDbDocClient.delete(userParams).promise();

        return { id };
    } catch (err) {
        throw new Error(err.message);
    }
}