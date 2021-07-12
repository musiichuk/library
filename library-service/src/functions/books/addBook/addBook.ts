import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from "@libs/apiGateway";
import { addBookToDB } from '../../../services/book-service/addBookToDB';


const addBook = async (event) => {
    try {

        const { book, bookId = '' } = await addBookToDB(event?.body)

        return formatJSONResponse({
            message: `Book ${bookId} created successfully`,
            book
        });
    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }
}

export const addBookToDb = middyfy(addBook);
