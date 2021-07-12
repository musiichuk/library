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

/***/ "./src/functions/books/deleteUserBook/deleteUserBook.ts":
/*!**************************************************************!*\
  !*** ./src/functions/books/deleteUserBook/deleteUserBook.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUserBook = void 0;\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\nconst lambda_1 = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\nconst apiGateway_1 = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\nconst deleteUserBookFromDB_1 = __webpack_require__(/*! ../../../services/book-service/deleteUserBookFromDB */ \"./src/services/book-service/deleteUserBookFromDB.ts\");\nconst deleteUserBookFromDb = async (event) => {\n    try {\n        const { userId = '', bookId } = event.pathParameters;\n        const { success } = await deleteUserBookFromDB_1.deleteUserBookFromDB({ userId, bookId });\n        return apiGateway_1.formatJSONResponse({\n            success,\n            message: `User's ${userId} book ${bookId} was removed successfully`\n        });\n    }\n    catch (err) {\n        return {\n            statusCode: 400,\n            body: err.message,\n        };\n    }\n};\nexports.deleteUserBook = lambda_1.middyfy(deleteUserBookFromDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2Jvb2tzL2RlbGV0ZVVzZXJCb29rL2RlbGV0ZVVzZXJCb29rLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1zZXJ2aWNlLy4vc3JjL2Z1bmN0aW9ucy9ib29rcy9kZWxldGVVc2VyQm9vay9kZWxldGVVc2VyQm9vay50cz9mZDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQge2Zvcm1hdEpTT05SZXNwb25zZX0gZnJvbSBcIkBsaWJzL2FwaUdhdGV3YXlcIjtcbmltcG9ydCB7IGRlbGV0ZVVzZXJCb29rRnJvbURCIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYm9vay1zZXJ2aWNlL2RlbGV0ZVVzZXJCb29rRnJvbURCJztcblxuY29uc3QgZGVsZXRlVXNlckJvb2tGcm9tRGIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXJJZCA9ICcnLCBib29rSWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gYXdhaXQgZGVsZXRlVXNlckJvb2tGcm9tREIoeyB1c2VySWQsIGJvb2tJZH0pXG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogYFVzZXIncyAke3VzZXJJZH0gYm9vayAke2Jvb2tJZH0gd2FzIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5YFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgICAgIGJvZHk6IGVyci5tZXNzYWdlLFxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyQm9vayA9IG1pZGR5ZnkoZGVsZXRlVXNlckJvb2tGcm9tRGIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/books/deleteUserBook/deleteUserBook.ts\n");

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

/***/ "./src/services/book-service/deleteUserBookFromDB.ts":
/*!***********************************************************!*\
  !*** ./src/services/book-service/deleteUserBookFromDB.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUserBookFromDB = void 0;\nconst dynamoDb_1 = __webpack_require__(/*! @libs/dynamoDb */ \"./src/libs/dynamoDb.ts\");\nconst constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\nconst deleteUserBookFromDB = async ({ userId = '', bookId = '' }) => {\n    try {\n        const userParams = {\n            TableName: constants_1.Databases.UserBooks,\n            Key: { userId, bookId }\n        };\n        await dynamoDb_1.dynamoDbDocClient.delete(userParams).promise();\n        return { success: true };\n    }\n    catch (err) {\n        throw new Error(err.message);\n    }\n};\nexports.deleteUserBookFromDB = deleteUserBookFromDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYm9vay1zZXJ2aWNlL2RlbGV0ZVVzZXJCb29rRnJvbURCLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1zZXJ2aWNlLy4vc3JjL3NlcnZpY2VzL2Jvb2stc2VydmljZS9kZWxldGVVc2VyQm9va0Zyb21EQi50cz9kZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZHluYW1vRGJEb2NDbGllbnR9IGZyb20gJ0BsaWJzL2R5bmFtb0RiJztcbmltcG9ydCB7IERhdGFiYXNlcyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXJCb29rRnJvbURCID0gYXN5bmMgKHsgdXNlcklkID0gJycsIGJvb2tJZCA9ICcnIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyUGFyYW1zID0ge1xuICAgICAgICAgICAgVGFibGVOYW1lOiBEYXRhYmFzZXMuVXNlckJvb2tzLFxuICAgICAgICAgICAgS2V5OiB7IHVzZXJJZCwgYm9va0lkIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkeW5hbW9EYkRvY0NsaWVudC5kZWxldGUodXNlclBhcmFtcykucHJvbWlzZSgpO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyci5tZXNzYWdlKVxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/book-service/deleteUserBookFromDB.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/books/deleteUserBook/deleteUserBook.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;