export interface Book {
    id: string,
    title: string,
    author: string,
}

export interface IBookParams {
    TableName: string,
    Item: Book,
}