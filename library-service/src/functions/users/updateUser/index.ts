import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/updateUser.updateUserAtDb`,
    events: [
        {
            http: {
                method: 'put',
                path: 'users/{id}',
            }
        }
    ]
}
