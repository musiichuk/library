"use strict";
exports.__esModule = true;
var dynamoDb_1 = require("./dynamoDb");
var params = {
    TableName: "Users",
    KeySchema: [
        { AttributeName: "userId", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" }, //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "userId", AttributeType: "N" },
        { AttributeName: "name", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
dynamoDb_1["default"].createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
