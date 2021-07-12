"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsers_1 = __importDefault(require("@functions/users/getAllUsers"));
const getUserById_1 = __importDefault(require("@functions/users/getUserById"));
const addUser_1 = __importDefault(require("@functions/users/addUser"));
const updateUser_1 = __importDefault(require("@functions/users/updateUser"));
const deleteUser_1 = __importDefault(require("@functions/users/deleteUser"));
const getAllBooks_1 = __importDefault(require("@functions/books/getAllBooks"));
const addBook_1 = __importDefault(require("@functions/books/addBook"));
const addBookForUser_1 = __importDefault(require("@functions/books/addBookForUser"));
const getUsersBooks_1 = __importDefault(require("@functions/books/getUsersBooks"));
const deleteUserBook_1 = __importDefault(require("@functions/books/deleteUserBook"));
const serverlessConfiguration = {
    service: 'library-service',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    plugins: ['serverless-webpack', 'serverless-offline', 'serverless-dynamodb-local'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        stage: 'dev',
        region: 'eu-west-1',
        memorySize: 128,
        timeout: 6,
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    functions: {
        getAllUsers: getAllUsers_1.default,
        getUserById: getUserById_1.default,
        addUserToDb: addUser_1.default,
        updateUserAtDb: updateUser_1.default,
        deleteUserFromDb: deleteUser_1.default,
        getAllBooks: getAllBooks_1.default,
        addBookToDb: addBook_1.default,
        addBookForUser: addBookForUser_1.default,
        getUserBooks: getUsersBooks_1.default,
        deleteUserBook: deleteUserBook_1.default
    },
};
module.exports = serverlessConfiguration;
//# sourceMappingURL=serverless.js.map