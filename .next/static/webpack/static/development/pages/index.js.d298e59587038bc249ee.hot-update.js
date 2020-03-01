webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/marnigoltsman/Documents/code/today-i-weigh/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])('/api/randomQuote', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log('*** data: ', data);
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, quote), data && __jsx("span", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "- ", data[2].latestWeight));
}

/***/ })

})
//# sourceMappingURL=index.js.d298e59587038bc249ee.hot-update.js.map