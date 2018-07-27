module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./TodoAppServerSide.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./TodoAppServerSide.js":
/*!******************************!*\
  !*** ./TodoAppServerSide.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\nvar path = __webpack_require__(/*! path */ \"path\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nmongoose.connect(\"mongodb://localhost:27017/TodosDB\", { useNewUrlParser: true });\nmongoose.Promise = Promise;\n\nvar port = process.env.PORT || 3000;\napp.use(bodyParser.json());\n\napp.use(express.static(\"dist\"));\napp.use(express.static(\"src\"));\n\napp.use(\"/api\", __webpack_require__(/*! ./routes/TodosApi */ \"./routes/TodosApi.js\"));\n\napp.get('*', function (req, res) {\n  res.sendfile(__dirname + \"/dist/index.html\");\n});\napp.listen(port, function () {\n  return console.log(\"Listening on port \" + port);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./TodoAppServerSide.js?");

/***/ }),

/***/ "./models/todos.js":
/*!*************************!*\
  !*** ./models/todos.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\n\nvar TodosSchema = new Schema({\n    _id: {\n        type: String,\n        required: [true, \"id is required\"]\n    },\n    title: {\n        type: String,\n        required: [true, \"title is required\"]\n    },\n    chk: {\n        type: Boolean,\n        required: [true, \"ckecked is required\"]\n    }\n});\n\nTodos = mongoose.model('todos', TodosSchema);\nmodule.exports = Todos;\n\nmodule.exports.getTotalTodos = function (callback) {\n    Todos.find(callback);\n};\n\n//# sourceURL=webpack:///./models/todos.js?");

/***/ }),

/***/ "./routes/TodosApi.js":
/*!****************************!*\
  !*** ./routes/TodosApi.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nvar Todos = __webpack_require__(/*! ../models/todos */ \"./models/todos.js\");\n\n// Fetch All Data\nrouter.get(\"/todos\", function (req, res, next) {\n  Todos.getTotalTodos(function (err, todoList) {\n    res.json(todoList);\n  });\n});\n\n// Save todos\nrouter.post(\"/todos\", function (req, res, next) {\n  Todos.create(req.body).then(function (data) {\n    res.send(data);\n  });\n});\n\n// Delete todos\nrouter.delete(\"/todos/:id\", function (req, res) {\n  Todos.findByIdAndRemove({ _id: req.params.id }).then(function (data) {\n    res.send(data);\n  });\n});\n\n// Update todo\nrouter.put(\"/todos\", function (req, res) {\n  Todos.findByIdAndUpdate(req.body._id, { chk: req.body.chk }, function (err) {\n    if (err) {\n      res.send(err);\n      return;\n    }\n    res.send({ data: \"Todo has been Updated..!!\" });\n  });\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/TodosApi.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });