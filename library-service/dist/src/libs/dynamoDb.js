"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoDbDocClient = exports.dynamoDbClient = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    dynamodb: {
        region: "localhost",
        endpoint: "http://localhost:8042",
    }
});
const client = new aws_sdk_1.default.DynamoDB();
const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.dynamoDbClient = client;
exports.dynamoDbDocClient = docClient;
//# sourceMappingURL=dynamoDb.js.map