import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { removeUserFromDb } from '../../../services/user-services/removeUserFromDb';

const deleteUser = async (event) => {
    try {
        const { id = '' } = await removeUserFromDb(event?.pathParameters);
        return formatJSONResponse({
            message: `User ${id} was removed successfully`
        });
    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }

}

export const deleteUserFromDb = middyfy(deleteUser);
