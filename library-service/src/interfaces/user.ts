export interface User {
    id: string,
    name: string,
    age: number,
    gender?: string,
}

export interface IUserParams {
    TableName: string,
    Item: User,
}