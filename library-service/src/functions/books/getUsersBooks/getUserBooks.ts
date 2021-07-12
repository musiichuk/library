import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { getUserBooksFromDB } from '../../../services/book-service/getUserBooksFromDB';

const getAllUsersBooks = async (event) => {
    try {
        const { id: userId = '' } = event.pathParameters;

        const { userBooks } = await getUserBooksFromDB(userId);
        return formatJSONResponse({
            userBooks
        });
    } catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        }
    }

}

export const getUserBooks = middyfy(getAllUsersBooks);
