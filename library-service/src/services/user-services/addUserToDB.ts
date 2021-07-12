import { dynamoDbDocClient } from '@libs/dynamoDb';
import { IUserParams } from "../../interfaces/user";
import { insertIf } from "../../utils/insertIf";
import { Databases } from "../../constants";

import { v4 as uuidv4 } from 'uuid';


export const addUserToDB = async ({ name = '', age = 0, gender = '' }) => {
    try {
        if (!name || !age) throw new Error('Name and age are required fields');

        const userId = uuidv4();

        const userParams: IUserParams = {
            TableName: Databases.Users,
            Item: {
                id: userId,
                name,
                age,
                ...insertIf(gender, { gender }),
            }
        };

        await dynamoDbDocClient.put(userParams).promise();

        return { user: userParams?.Item };
    } catch (err) {
        throw new Error(err.message);
    }
}