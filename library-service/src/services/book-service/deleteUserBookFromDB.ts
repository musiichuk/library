import {dynamoDbDocClient} from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const deleteUserBookFromDB = async ({ userId = '', bookId = '' }) => {
    try {
        const userParams = {
            TableName: Databases.UserBooks,
            Key: { userId, bookId }
        };

        await dynamoDbDocClient.delete(userParams).promise();

        return { success: true };
    } catch (err) {
        throw new Error(err.message)
    }
}