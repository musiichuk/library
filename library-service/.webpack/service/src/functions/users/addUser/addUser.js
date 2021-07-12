/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Databases = void 0;\nvar Databases;\n(function (Databases) {\n    Databases[\"Users\"] = \"Users\";\n    Databases[\"Books\"] = \"Books\";\n    Databases[\"UserBooks\"] = \"UserBooks\";\n})(Databases = exports.Databases || (exports.Databases = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1zZXJ2aWNlLy4vc3JjL2NvbnN0YW50cy50cz84NWVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIERhdGFiYXNlcyB7XG4gICAgVXNlcnMgPSBcIlVzZXJzXCIsXG4gICAgQm9va3MgPSBcIkJvb2tzXCIsXG4gICAgVXNlckJvb2tzID0gXCJVc2VyQm9va3NcIlxufSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.ts\n");

/***/ }),

/***/ "./src/functions/users/addUser/addUser.ts":
/*!************************************************!*\
  !*** ./src/functions/users/addUser/addUser.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addUserToDb = void 0;\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\nconst lambda_1 = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\nconst apiGateway_1 = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\nconst addUserToDB_1 = __webpack_require__(/*! ../../../services/user-services/addUserToDB */ \"./src/services/user-services/addUserToDB.ts\");\nconst addUser = async (event) => {\n    try {\n        const { user } = await addUserToDB_1.addUserToDB(event?.body);\n        return apiGateway_1.formatJSONResponse({\n            message: `User was created successfully`,\n            user\n        });\n    }\n    catch (err) {\n        return {\n            statusCode: 400,\n            body: err.message,\n        };\n    }\n};\nexports.addUserToDb = lambda_1.middyfy(addUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL2FkZFVzZXIvYWRkVXNlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItc2VydmljZS8uL3NyYy9mdW5jdGlvbnMvdXNlcnMvYWRkVXNlci9hZGRVc2VyLnRzPzA5N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tIFwiQGxpYnMvYXBpR2F0ZXdheVwiO1xuaW1wb3J0IHsgYWRkVXNlclRvREIgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdXNlci1zZXJ2aWNlcy9hZGRVc2VyVG9EQlwiO1xuXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBhZGRVc2VyVG9EQihldmVudD8uYm9keSk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgVXNlciB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlgLFxuICAgICAgICAgICAgdXNlclxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgICAgIGJvZHk6IGVyci5tZXNzYWdlLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkVXNlclRvRGIgPSBtaWRkeWZ5KGFkZFVzZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/users/addUser/addUser.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1zZXJ2aWNlLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCJcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/dynamoDb.ts":
/*!******************************!*\
  !*** ./src/libs/dynamoDb.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dynamoDbDocClient = exports.dynamoDbClient = void 0;\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\naws_sdk_1.default.config.update({\n    dynamodb: {\n        region: \"localhost\",\n        endpoint: \"http://localhost:8042\",\n    }\n});\nconst client = new aws_sdk_1.default.DynamoDB();\nconst docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();\nexports.dynamoDbClient = client;\nexports.dynamoDbDocClient = docClient;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9keW5hbW9EYi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItc2VydmljZS8uL3NyYy9saWJzL2R5bmFtb0RiLnRzPzM2MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcblxuQVdTLmNvbmZpZy51cGRhdGUoe1xuICAgIGR5bmFtb2RiOiB7XG4gICAgICAgIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDQyXCIsXG4gICAgfVxufSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBV1MuRHluYW1vREIoKTtcbmNvbnN0IGRvY0NsaWVudCA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbmV4cG9ydCBjb25zdCBkeW5hbW9EYkNsaWVudCA9IGNsaWVudDtcbmV4cG9ydCBjb25zdCBkeW5hbW9EYkRvY0NsaWVudCA9IGRvY0NsaWVudDsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/dynamoDb.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.middyfy = void 0;\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst middyfy = (handler) => {\n    return core_1.default(handler).use(http_json_body_parser_1.default());\n};\nexports.middyfy = middyfy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLXNlcnZpY2UvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/services/user-services/addUserToDB.ts":
/*!***************************************************!*\
  !*** ./src/services/user-services/addUserToDB.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addUserToDB = void 0;\nconst dynamoDb_1 = __webpack_require__(/*! @libs/dynamoDb */ \"./src/libs/dynamoDb.ts\");\nconst insertIf_1 = __webpack_require__(/*! ../../utils/insertIf */ \"./src/utils/insertIf.ts\");\nconst constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nconst addUserToDB = async ({ name = '', age = 0, gender = '' }) => {\n    try {\n        if (!name || !age)\n            throw new Error('Name and age are required fields');\n        const userId = uuid_1.v4();\n        const userParams = {\n            TableName: constants_1.Databases.Users,\n            Item: {\n                id: userId,\n                name,\n                age,\n                ...insertIf_1.insertIf(gender, { gender }),\n            }\n        };\n        await dynamoDb_1.dynamoDbDocClient.put(userParams).promise();\n        return { user: userParams?.Item };\n    }\n    catch (err) {\n        throw new Error(err.message);\n    }\n};\nexports.addUserToDB = addUserToDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci1zZXJ2aWNlcy9hZGRVc2VyVG9EQi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItc2VydmljZS8uL3NyYy9zZXJ2aWNlcy91c2VyLXNlcnZpY2VzL2FkZFVzZXJUb0RCLnRzPzdlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZHluYW1vRGJEb2NDbGllbnQgfSBmcm9tICdAbGlicy9keW5hbW9EYic7XG5pbXBvcnQgeyBJVXNlclBhcmFtcyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3VzZXJcIjtcbmltcG9ydCB7IGluc2VydElmIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2luc2VydElmXCI7XG5pbXBvcnQgeyBEYXRhYmFzZXMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRVc2VyVG9EQiA9IGFzeW5jICh7IG5hbWUgPSAnJywgYWdlID0gMCwgZ2VuZGVyID0gJycgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhYWdlKSB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgYW5kIGFnZSBhcmUgcmVxdWlyZWQgZmllbGRzJyk7XG5cbiAgICAgICAgY29uc3QgdXNlcklkID0gdXVpZHY0KCk7XG5cbiAgICAgICAgY29uc3QgdXNlclBhcmFtczogSVVzZXJQYXJhbXMgPSB7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IERhdGFiYXNlcy5Vc2VycyxcbiAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYWdlLFxuICAgICAgICAgICAgICAgIC4uLmluc2VydElmKGdlbmRlciwgeyBnZW5kZXIgfSksXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZHluYW1vRGJEb2NDbGllbnQucHV0KHVzZXJQYXJhbXMpLnByb21pc2UoKTtcblxuICAgICAgICByZXR1cm4geyB1c2VyOiB1c2VyUGFyYW1zPy5JdGVtIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/user-services/addUserToDB.ts\n");

/***/ }),

/***/ "./src/utils/insertIf.ts":
/*!*******************************!*\
  !*** ./src/utils/insertIf.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.insertIf = void 0;\nconst insertIf = (condition, object) => (condition ? object : {});\nexports.insertIf = insertIf;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5zZXJ0SWYudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLXNlcnZpY2UvLi9zcmMvdXRpbHMvaW5zZXJ0SWYudHM/NmI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5zZXJ0SWYgPSAoY29uZGl0aW9uOiBhbnksIG9iamVjdDogb2JqZWN0KSA9PiAoY29uZGl0aW9uID8gb2JqZWN0IDoge30pO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/insertIf.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/users/addUser/addUser.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;