"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToDb = void 0;
require("source-map-support/register");
const lambda_1 = require("@libs/lambda");
const apiGateway_1 = require("@libs/apiGateway");
const addUserToDB_1 = require("../../../services/user-services/addUserToDB");
const addUser = async (event) => {
    try {
        const { user } = await addUserToDB_1.addUserToDB(event?.body);
        return apiGateway_1.formatJSONResponse({
            message: `User was created successfully`,
            user
        });
    }
    catch (err) {
        return {
            statusCode: 400,
            body: err.message,
        };
    }
};
exports.addUserToDb = lambda_1.middyfy(addUser);
//# sourceMappingURL=addUser.js.map