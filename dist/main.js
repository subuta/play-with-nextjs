require('source-map-support/register')
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_api__ = __webpack_require__(7);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var port = parseInt(process.env.PORT, 10) || 3000;
var dev = "development" !== 'production';
var app = __WEBPACK_IMPORTED_MODULE_1_next___default()({ dev: dev });
var handle = app.getRequestHandler();

app.prepare().then(function () {
  var server = new __WEBPACK_IMPORTED_MODULE_2_koa___default.a();
  var router = new __WEBPACK_IMPORTED_MODULE_3_koa_router___default.a();

  router.get('/p/:id', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
      var actualPage, queryParams;
      return __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              actualPage = '/post';
              queryParams = { id: ctx.params.id };
              _context.next = 4;
              return app.render(ctx.req, ctx.res, actualPage, queryParams);

            case 4:
              ctx.respond = false;

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  router.get('*', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return handle(ctx.req, ctx.res);

            case 2:
              ctx.respond = false;

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  server.use(__WEBPACK_IMPORTED_MODULE_4__src_api__["a" /* default */].routes());

  server.use(function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx.res.statusCode = 200;
              _context3.next = 3;
              return next();

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());

  server.use(router.routes());

  server.listen(port, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + port);
  });
}).catch(function (ex) {
  console.error(ex.stack);
  process.exit(1);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_db__ = __webpack_require__(8);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.get('/api/hoge', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_db__["a" /* default */])();

          case 2:
            ctx.body = _context.sent;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["a"] = (_asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
  return __WEBPACK_IMPORTED_MODULE_0__Users_subuta_repo_play_with_nextjs_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'fuga';

        case 2:
          return _context.abrupt('return', _context.sent);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
})));

/***/ })
/******/ ]);
//# sourceMappingURL=main.map