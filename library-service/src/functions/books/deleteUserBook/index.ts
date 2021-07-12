import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/deleteUserBook.deleteUserBook`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'users/{userId}/book/{bookId}',
            }
        }
    ]
}
