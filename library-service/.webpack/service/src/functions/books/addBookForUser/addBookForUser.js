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

/***/ "./src/functions/books/addBookForUser/addBookForUser.ts":
/*!**************************************************************!*\
  !*** ./src/functions/books/addBookForUser/addBookForUser.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addBookForUser = void 0;\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\nconst lambda_1 = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\nconst apiGateway_1 = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\nconst addUserBookToDB_1 = __webpack_require__(/*! ../../../services/book-service/addUserBookToDB */ \"./src/services/book-service/addUserBookToDB.ts\");\nconst addUserBook = async (event) => {\n    try {\n        const { id: userId = '' } = event?.pathParameters;\n        const { bookId = '', } = event?.body;\n        const { success = false } = await addUserBookToDB_1.addUserBookToDB({ userId, bookId });\n        return apiGateway_1.formatJSONResponse({\n            success,\n            message: `Book ${bookId} assigned to ${userId} successfully`,\n        });\n    }\n    catch (err) {\n        return {\n            statusCode: 400,\n            body: err.message,\n        };\n    }\n};\nexports.addBookForUser = lambda_1.middyfy(addUserBook);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2Jvb2tzL2FkZEJvb2tGb3JVc2VyL2FkZEJvb2tGb3JVc2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1zZXJ2aWNlLy4vc3JjL2Z1bmN0aW9ucy9ib29rcy9hZGRCb29rRm9yVXNlci9hZGRCb29rRm9yVXNlci50cz9iZGM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tIFwiQGxpYnMvYXBpR2F0ZXdheVwiO1xuaW1wb3J0IHsgYWRkVXNlckJvb2tUb0RCIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYm9vay1zZXJ2aWNlL2FkZFVzZXJCb29rVG9EQic7XG5cbmNvbnN0IGFkZFVzZXJCb29rID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBpZDogdXNlcklkID0gJycgfSA9IGV2ZW50Py5wYXRoUGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgeyBib29rSWQgPSAnJywgfSA9IGV2ZW50Py5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcyA9IGZhbHNlIH0gPSBhd2FpdCBhZGRVc2VyQm9va1RvREIoe3VzZXJJZCwgYm9va0lkfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgICAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBCb29rICR7Ym9va0lkfSBhc3NpZ25lZCB0byAke3VzZXJJZH0gc3VjY2Vzc2Z1bGx5YCxcbiAgICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgICAgIGJvZHk6IGVyci5tZXNzYWdlLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkQm9va0ZvclVzZXIgPSBtaWRkeWZ5KGFkZFVzZXJCb29rKTtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/books/addBookForUser/addBookForUser.ts\n");

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

/***/ "./src/services/book-service/addUserBookToDB.ts":
/*!******************************************************!*\
  !*** ./src/services/book-service/addUserBookToDB.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addUserBookToDB = void 0;\nconst dynamoDb_1 = __webpack_require__(/*! @libs/dynamoDb */ \"./src/libs/dynamoDb.ts\");\nconst constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\nconst addUserBookToDB = async ({ userId = '', bookId = '' }) => {\n    try {\n        if (!userId || !bookId)\n            throw new Error('User Id and Book Id are required fields');\n        const userBooksParams = {\n            TableName: constants_1.Databases.UserBooks,\n            Item: {\n                userId,\n                bookId,\n            }\n        };\n        await dynamoDb_1.dynamoDbDocClient.put(userBooksParams).promise();\n        return { success: true };\n    }\n    catch (err) {\n        throw new Error(err.message);\n    }\n};\nexports.addUserBookToDB = addUserBookToDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYm9vay1zZXJ2aWNlL2FkZFVzZXJCb29rVG9EQi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItc2VydmljZS8uL3NyYy9zZXJ2aWNlcy9ib29rLXNlcnZpY2UvYWRkVXNlckJvb2tUb0RCLnRzP2JlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZHluYW1vRGJEb2NDbGllbnQgfSBmcm9tICdAbGlicy9keW5hbW9EYic7XG5pbXBvcnQgeyBEYXRhYmFzZXMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9va1RvREIgPSBhc3luYyAoe3VzZXJJZCA9ICcnLCBib29rSWQgPSAnJyB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvb2tJZCkgdGhyb3cgbmV3IEVycm9yKCdVc2VyIElkIGFuZCBCb29rIElkIGFyZSByZXF1aXJlZCBmaWVsZHMnKTtcblxuICAgICAgICBjb25zdCB1c2VyQm9va3NQYXJhbXMgPSB7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IERhdGFiYXNlcy5Vc2VyQm9va3MsXG4gICAgICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgIGJvb2tJZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkeW5hbW9EYkRvY0NsaWVudC5wdXQodXNlckJvb2tzUGFyYW1zKS5wcm9taXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/book-service/addUserBookToDB.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/books/addBookForUser/addBookForUser.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;