import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/getUsers.getAllUsers`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users',
            }
        }
    ]
}
