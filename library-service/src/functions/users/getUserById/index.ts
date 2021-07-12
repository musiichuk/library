import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/getUser.getUserById`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users/{id}',
            }
        }
    ]
}
