import AWS from 'aws-sdk';

AWS.config.update({
    dynamodb: {
        region: "localhost",
        endpoint: "http://localhost:8042",
    }
});

const client = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
export const dynamoDbClient = client;
export const dynamoDbDocClient = docClient;