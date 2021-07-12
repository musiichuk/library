import { dynamoDbClient } from './dynamoDb';

const userParams = {
    TableName : "Users",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  // Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

const bookParams = {
    TableName : "Books",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  // Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

const userBooksParams = {
    TableName : "UserBooks",
    KeySchema: [
        { AttributeName: "userId", KeyType: "HASH"},  // Partition key
        { AttributeName: "bookId", KeyType: "RANGE"},  // Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "userId", AttributeType: "S" },
        { AttributeName: "bookId", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamoDbClient.createTable(userParams, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

dynamoDbClient.createTable(bookParams, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

dynamoDbClient.createTable(userBooksParams, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});