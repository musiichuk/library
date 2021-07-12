import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/getUserBooks.getUserBooks`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users/{id}/book',
            }
        }
    ]
}
