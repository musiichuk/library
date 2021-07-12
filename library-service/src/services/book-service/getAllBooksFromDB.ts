import {dynamoDbDocClient} from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const getAllBooksFromDB = async () => {
    try {
        const bookParams = {
            TableName: Databases.Books,
        };

        const { Items } = await dynamoDbDocClient.scan(bookParams).promise();

        return { books: Items };
    } catch (err) {
        throw new Error(err.message);
    }
}
