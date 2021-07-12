import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { formatJSONResponse } from "@libs/apiGateway";
import { addUserToDB } from "../../../services/user-services/addUserToDB";

const addUser = async (event) => {
    try {
        const { user } = await addUserToDB(event?.body);

        return formatJSONResponse({
            message: `User was created successfully`,
            user
        });
    } catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        }
    }
}

export const addUserToDb = middyfy(addUser);
