import { dynamoDbDocClient } from '@libs/dynamoDb';
import { IBookParams } from "../../interfaces/book";
import { Databases } from "../../constants";

import { v4 as uuidv4 } from 'uuid';


export const addBookToDB = async ({title = '', author = ''}) => {
    try {
        if (!title || !author) throw new Error('Title and Author are required fields');

        const bookId = uuidv4();

        const bookParams: IBookParams = {
            TableName: Databases.Books,
            Item: {
                id: bookId,
                title,
                author,
            }
        };

        await dynamoDbDocClient.put(bookParams).promise();

        return { book: bookParams?.Item, bookId }
    } catch (err) {
        throw new Error(err.message);
    }
}