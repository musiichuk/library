import { dynamoDbDocClient } from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const getUserBooksFromDB = async (userId = '') => {
    try {
        const userBooksParams = {
            TableName: Databases.UserBooks,
            KeyConditionExpression: 'userId = :userId',
            ExpressionAttributeValues: { ':userId': userId }
        };

        const result = await dynamoDbDocClient.query(userBooksParams).promise();
        return { userBooks: result };
    } catch (err) {
       throw new Error(err.message);
    }
}