import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/deleteUser.deleteUserFromDb`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'users/{id}',
            }
        }
    ]
}
