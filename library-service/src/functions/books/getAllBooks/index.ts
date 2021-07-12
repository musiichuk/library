import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/getBooks.getAllBooks`,
    events: [
        {
            http: {
                method: 'get',
                path: 'books',
            }
        }
    ]
}
