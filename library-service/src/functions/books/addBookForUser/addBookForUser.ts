import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from "@libs/apiGateway";
import { addUserBookToDB } from '../../../services/book-service/addUserBookToDB';

const addUserBook = async (event) => {
    try {
        const { id: userId = '' } = event?.pathParameters;
        const { bookId = '', } = event?.body;

        const { success = false } = await addUserBookToDB({userId, bookId});
        return formatJSONResponse({
            success,
            message: `Book ${bookId} assigned to ${userId} successfully`,
        });

    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }
}

export const addBookForUser = middyfy(addUserBook);
