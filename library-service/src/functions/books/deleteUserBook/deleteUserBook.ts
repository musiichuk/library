import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { deleteUserBookFromDB } from '../../../services/book-service/deleteUserBookFromDB';

const deleteUserBookFromDb = async (event) => {
    try {
        const { userId = '', bookId } = event.pathParameters;

        const { success } = await deleteUserBookFromDB({ userId, bookId})

        return formatJSONResponse({
            success,
            message: `User's ${userId} book ${bookId} was removed successfully`
        });
    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }

}

export const deleteUserBook = middyfy(deleteUserBookFromDb);
