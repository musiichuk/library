import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { getUserByIdFromDb } from '../../../services/user-services/getUserByIdFromDb';

const getUser = async (event) => {
    try {
        const { user } = await getUserByIdFromDb(event.pathParameters)
        return formatJSONResponse({
           user
        });
    } catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        }
    }

}

export const getUserById = middyfy(getUser);
