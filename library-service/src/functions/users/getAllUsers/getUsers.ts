import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import {formatJSONResponse} from "@libs/apiGateway";
import { getAllUsersFromDb } from "../../../services/user-services/getAllUsersFromDb";

const getUsers = async () => {
    try {
        const { users = [] } = await getAllUsersFromDb();
        return formatJSONResponse({
            users
        });
    } catch (err) {
        return {
            statusCode: 404,
            body: err.message,
        }
    }
}

export const getAllUsers = middyfy(getUsers);
