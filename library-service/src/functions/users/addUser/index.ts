import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/addUser.addUserToDb`,
    events: [
        {
            http: {
                method: 'post',
                path: 'users',
            }
        }
    ]
}
