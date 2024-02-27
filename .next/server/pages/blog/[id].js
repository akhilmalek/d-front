"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./pages/blog/[id].jsx":
/*!*****************************!*\
  !*** ./pages/blog/[id].jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogPost)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import posts from \"../blog-post.json\";\nfunction BlogPost() {\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/users/\").then((response)=>{\n            setUsers(response.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id  } = router.query;\n    console.log(id, \"log 1\");\n    const getUserById = (userID)=>{\n        const parsedUserId = parseInt(userID);\n        return users.find((user)=>user.id === parsedUserId);\n    };\n    let found = getUserById(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingTop: \"100px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.username\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.website\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.email\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.address.street\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.phone\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: found === null || found === void 0 ? void 0 : found.company.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2025\\\\d-blog\\\\pages\\\\blog\\\\[id].jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDeEI7QUFDYztBQUV4Qyx5Q0FBeUM7QUFHMUIsU0FBU0ssV0FBVztJQUVqQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVqQyxNQUFNTyxZQUFZLElBQU07UUFDdEJMLGdEQUFTLENBQUMsK0NBQStDTyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUN4RUosU0FBU0ksU0FBU0MsSUFBSTtRQUMxQjtJQUNGO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDZE07SUFDRixHQUFHLEVBQUU7SUFFVCxNQUFNSyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDVSxHQUFFLEVBQUMsR0FBR0QsT0FBT0UsS0FBSztJQUN6QkMsUUFBUUMsR0FBRyxDQUFDSCxJQUFJO0lBR2hCLE1BQU1JLGNBQWMsQ0FBQ0MsU0FBVztRQUM5QixNQUFNQyxlQUFlQyxTQUFTRjtRQUM5QixPQUFPYixNQUFNZ0IsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLVCxFQUFFLEtBQUtNO0lBQ3hDO0lBR0YsSUFBSUksUUFBUU4sWUFBWUo7SUFFdEIscUJBRUUsOERBQUNXO1FBQUlDLE9BQU87WUFBQ0MsWUFBWTtRQUFPOzswQkFFaEMsOERBQUNGO2dCQUFJRyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUdMLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT00sUUFBUTs7Ozs7O2tDQUNuQiw4REFBQ0Q7a0NBQUdMLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT08sT0FBTzs7Ozs7O2tDQUNsQiw4REFBQ0Y7a0NBQUdMLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT1EsS0FBSzs7Ozs7O2tDQUNoQiw4REFBQ0g7a0NBQUdMLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT1MsT0FBTyxDQUFDQyxNQUFNOzs7Ozs7a0NBQ3pCLDhEQUFDTDtrQ0FBR0wsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPVyxLQUFLOzs7Ozs7a0NBQ2hCLDhEQUFDTjtrQ0FBR0wsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPWSxPQUFPLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNaO2dCQUFJRyxXQUFVOzs7Ozs7Ozs7Ozs7QUFXckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2QtYmxvZy8uL3BhZ2VzL2Jsb2cvW2lkXS5qc3g/NmY5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBpbXBvcnQgcG9zdHMgZnJvbSBcIi4uL2Jsb2ctcG9zdC5qc29uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3QoKSB7XHJcblxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy9cIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coaWQsIFwibG9nIDFcIik7XHJcblxyXG5cclxuICBjb25zdCBnZXRVc2VyQnlJZCA9ICh1c2VySUQpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlZFVzZXJJZCA9IHBhcnNlSW50KHVzZXJJRCk7XHJcbiAgICByZXR1cm4gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IHBhcnNlZFVzZXJJZCk7XHJcbiAgfTtcclxuXHJcblxyXG5sZXQgZm91bmQgPSBnZXRVc2VyQnlJZChpZCk7XHJcbiAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTAwcHhcIn19PlxyXG4gXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8cD57Zm91bmQ/LnVzZXJuYW1lfTwvcD5cclxuICAgICAgPHA+e2ZvdW5kPy53ZWJzaXRlfTwvcD5cclxuICAgICAgPHA+e2ZvdW5kPy5lbWFpbH08L3A+XHJcbiAgICAgIDxwPntmb3VuZD8uYWRkcmVzcy5zdHJlZXR9PC9wPlxyXG4gICAgICA8cD57Zm91bmQ/LnBob25lfTwvcD5cclxuICAgICAgPHA+e2ZvdW5kPy5jb21wYW55Lm5hbWV9PC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICB7LyogPGlmcmFtZSBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCJ9fSB0aXRsZT1cIlRvZ2dsZSBIaWRlIGFuZCBTaG93XCIgc3JjPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3dlYmRldi1nbWFpbC9lbWJlZC95TFFWTnd4P2RlZmF1bHQtdGFiPXJlc3VsdCZ0aGVtZS1pZD1kYXJrXCIgZnJhbWVib3JkZXI9XCJub1wiIGxvYWRpbmc9XCJsYXp5XCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgU2VlIHRoZSBQZW4gPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby93ZWJkZXYtZ21haWwvcGVuL3lMUVZOd3hcIj5cclxuICAgICAgICAgIFRvZ2dsZSBIaWRlIGFuZCBTaG93PC9hPiBieSB3ZWJkZXYgKDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vd2ViZGV2LWdtYWlsXCI+QHdlYmRldi1nbWFpbDwvYT4pXHJcbiAgICAgICAgICBvbiA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvXCI+Q29kZVBlbjwvYT4uXHJcbiAgICAgICAgPC9pZnJhbWU+ICovfVxyXG5cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiQmxvZ1Bvc3QiLCJ1c2VycyIsInNldFVzZXJzIiwiZmV0Y2hEYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckJ5SWQiLCJ1c2VySUQiLCJwYXJzZWRVc2VySWQiLCJwYXJzZUludCIsImZpbmQiLCJ1c2VyIiwiZm91bmQiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJjbGFzc05hbWUiLCJwIiwidXNlcm5hbWUiLCJ3ZWJzaXRlIiwiZW1haWwiLCJhZGRyZXNzIiwic3RyZWV0IiwicGhvbmUiLCJjb21wYW55IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].jsx"));
module.exports = __webpack_exports__;

})();