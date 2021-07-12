import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/addBookForUser.addBookForUser`,
    events: [
        {
            http: {
                method: 'post',
                path: 'users/{id}/book',
            }
        }
    ]
}
