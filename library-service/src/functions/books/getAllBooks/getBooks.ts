import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { getAllBooksFromDB } from '../../../services/book-service/getAllBooksFromDB';

const getBooks = async () => {
    try {
        const { books } = await getAllBooksFromDB();

        return formatJSONResponse({
            books
        });
    } catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        }
    }

}

export const getAllBooks = middyfy(getBooks);
