!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s="./js/scripts.js")}({"./js/modules/Test.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Test =\n/*#__PURE__*/\nfunction () {\n  function Test() {\n    _classCallCheck(this, Test);\n\n    this.events();\n  }\n\n  _createClass(Test, [{\n    key: "events",\n    value: function events() {\n      var headLine = document.querySelector(\'.headLine\');\n      headLine.classList.add(\'active\');\n    }\n  }]);\n\n  return Test;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Test);\n\n//# sourceURL=webpack:///./js/modules/Test.js?')},"./js/scripts.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Test */ "./js/modules/Test.js");\n\nvar test = new _modules_Test__WEBPACK_IMPORTED_MODULE_0__["default"]();\n\n//# sourceURL=webpack:///./js/scripts.js?')}});