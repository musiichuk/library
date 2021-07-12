import {dynamoDbDocClient} from '@libs/dynamoDb';
import { Databases } from "../../constants";

export const getAllUsersFromDb = async () => {
    try {
        const userParams = {
            TableName: Databases.Users,
        };

        const { Items } = await dynamoDbDocClient.scan(userParams).promise();

        return { users: Items } ;
    } catch (err) {
        throw new Error(err.message);
    }
}