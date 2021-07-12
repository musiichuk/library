import type { AWS } from '@serverless/typescript';

import getAllUsers from '@functions/users/getAllUsers';
import getUserById from '@functions/users/getUserById';
import addUserToDb from '@functions/users/addUser';
import updateUserAtDb from '@functions/users/updateUser';
import deleteUserFromDb from '@functions/users/deleteUser';

import getAllBooks from '@functions/books/getAllBooks';
import addBookToDb from '@functions/books/addBook';
import addBookForUser from '@functions/books/addBookForUser';
import getUserBooks from '@functions/books/getUsersBooks';
import deleteUserBook from '@functions/books/deleteUserBook';

const serverlessConfiguration: AWS = {
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
    getAllUsers,
    getUserById,
    addUserToDb,
    updateUserAtDb,
    deleteUserFromDb,
    getAllBooks,
    addBookToDb,
    addBookForUser,
    getUserBooks,
    deleteUserBook
  },
};

module.exports = serverlessConfiguration;
