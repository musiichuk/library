import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { updateUserAtDB } from '../../../services/user-services/updateUserAtDB';

const updateUser = async (event) => {
    try {
        const { id = '' } = event.pathParameters;
        const { age = 0, } = event?.body;
        const { updatedUser } = await updateUserAtDB(id, age);
        return formatJSONResponse({
            message: `User ${id} was updated successfully`,
            updatedUser
        });
    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }
}

export const updateUserAtDb = middyfy(updateUser);
