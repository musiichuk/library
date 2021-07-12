import { dynamoDbDocClient } from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const addUserBookToDB = async ({userId = '', bookId = '' }) => {
    try {
        if (!userId || !bookId) throw new Error('User Id and Book Id are required fields');

        const userBooksParams = {
            TableName: Databases.UserBooks,
            Item: {
                userId,
                bookId,
            }
        };

        await dynamoDbDocClient.put(userBooksParams).promise();

        return { success: true }
    } catch (err) {
        throw new Error(err.message);
    }
}