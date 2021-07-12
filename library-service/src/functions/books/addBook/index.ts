import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/addBook.addBookToDb`,
    events: [
        {
            http: {
                method: 'post',
                path: 'books',
            }
        }
    ]
}
