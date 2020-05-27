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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "table {\n  border-collapse: collapse; }\n\ntd {\n  width: 20px;\n  height: 20px;\n  border: 1px solid black; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ts/Generator.ts":
/*!*****************************!*\
  !*** ./src/ts/Generator.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const cell_1 = __webpack_require__(/*! ./cell */ "./src/ts/cell.ts");
class Board {
    constructor() {
        this.size = 10;
        this.GenerateVisualBoard();
        this.GenerateCellTabel();
        this.GenerateCarrier();
        this.GenerateBattleship();
        this.GenerateSubmarine();
        this.GenerateCruiser();
        this.GenereteDestroyer();
    }
    GenerateCellTabel() {
        this.cells = [];
        for (var i = 0; i < this.size; i++) {
            this.cells[i] = [];
            for (var j = 0; j < this.size; j++) {
                this.cells[i][j] = new cell_1.Cell(i, j);
            }
        }
    }
    GenerateVisualBoard() {
        this.table = document.getElementById("Board");
        for (var i = 0; i < this.size; i++) {
            let row = this.table.insertRow(0);
            for (var j = 0; j < this.size; j++) {
                let cell = row.insertCell(0);
                cell.setAttribute('onclick', 'board.Click(' + i + ',' + j + ');');
                cell.id = i + "|" + j;
            }
        }
    }
    GenerateCarrier() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row < 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row >= 5 && col < 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row >= 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
    }
    GenerateBattleship() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied && !this.cells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied && !this.cells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row < 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied && !this.cells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied && !this.cells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row >= 5 && col < 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied && !this.cells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied && !this.cells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row >= 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied && !this.cells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied && !this.cells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
    }
    GenerateSubmarine() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenerateSubmarine();
    }
    GenerateCruiser() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenerateCruiser();
    }
    GenereteDestroyer() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 8 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied) {
            for (i = row; i < row + 2; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 1 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied) {
            for (i = col; i > col - 2; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 1 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied) {
            for (i = row; i > row - 2; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 8 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied) {
            for (i = col; i < col + 2; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenereteDestroyer();
    }
}
exports.Board = Board;


/***/ }),

/***/ "./src/ts/cell.ts":
/*!************************!*\
  !*** ./src/ts/cell.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
class Cell {
    constructor(row, col) {
        this.lock = false;
        this.occupied = false;
        this.cellV = document.getElementById(row + "|" + col);
    }
    DrawShip(row, col) {
        this.cellV.style.backgroundColor = "black";
    }
}
exports.Cell = Cell;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Generator_1 = __webpack_require__(/*! ./Generator */ "./src/ts/Generator.ts");
__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
document.getElementById("Start").addEventListener("click", function () { StartGame(); });
let board;
function StartGame() {
    var table = document.getElementById("Board");
    while (table.hasChildNodes())
        table.removeChild(table.firstChild);
    board = new Generator_1.Board();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzdjMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1C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Q0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1Qjt3QkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO3FCQUN2QjtpQkFDSjtxQkFFRDtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7aUJBQzVCO2FBQ0o7WUFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQ2xCO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDOUk7b0JBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1Qjt3QkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO3FCQUN2QjtpQkFDSjtxQkFFRDtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7aUJBQzVCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFF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S0FBSyxHQUFHLElBQUksaUJBQUssRUFBRSxDQUFDO0FBQ3JCLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxcblxcbnRkIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQge0NlbGx9IGZyb20gJy4vY2VsbCdcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCBcclxue1xyXG4gICAgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY2VsbHM6Q2VsbFtdW107XHJcbiAgICBzaXplOm51bWJlciA9IDEwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlVmlzdWFsQm9hcmQoKTsgICBcdFxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVDZWxsVGFiZWwoKVxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVDYXJyaWVyKClcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVN1Ym1hcmluZSgpXHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZUNydWlzZXIoKVxyXG4gICAgICAgIHRoaXMuR2VuZXJldGVEZXN0cm95ZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlQ2VsbFRhYmVsKCkgIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgajogbnVtYmVyID0gMDsgajwgdGhpcy5zaXplOyBqKyspIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdID0gbmV3IENlbGwoaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGVWaXN1YWxCb2FyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgXHR0aGlzLnRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQm9hcmRcIik7XHJcblx0XHRmb3IodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coMCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgajogbnVtYmVyID0gMDsgajwgdGhpcy5zaXplOyBqKyspIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgIFx0XHRjZWxsLnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdib2FyZC5DbGljaygnK2krJywnK2orJyk7Jyk7XHJcbiAgICAgICAgXHRcdGNlbGwuaWQ9aStcInxcIitqO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlQ2FycmllcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3c6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGxcclxuICAgICAgICBsZXQgaTpudW1iZXJcclxuICAgICAgICBpZiAocm93IDwgNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMilcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPCBjb2wrNTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdys1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPCA1ICYmIGNvbCA+PSA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtNTsgaS0tKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdys1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+PSA1ICYmIGNvbCA8IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTU7IGktLSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID49IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC01OyBpLS0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTU7IGktLSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZUJhdHRsZXNoaXAoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93Om51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgbGV0IGNvbDpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsXHJcbiAgICAgICAgbGV0IGk6bnVtYmVyXHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sIDwgNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wrMl0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wrM10ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpIDwgY29sKzQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3JvdysxXVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3JvdysyXVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3JvdyszXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdys0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtM10ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpID4gY29sLTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3crMl1bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3crM11bY29sXS5vY2N1cGllZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crNDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPj0gNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvd11bY29sKzFdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvd11bY29sKzJdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvd11bY29sKzNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID49IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtM10ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpID4gY29sLTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlU3VibWFyaW5lKCkgOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93Om51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgbGV0IGNvbDpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsXHJcbiAgICAgICAgbGV0IGk6bnVtYmVyXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMCAmJiByb3cgPD0gNyAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93KzFdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93KzJdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crMzsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSAmJiBjb2wgPj0gMiAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtMzsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMiAmJiByb3cgPj0gMiAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctMzsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMyAmJiBjb2wgPD0gNyAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2wrMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPCBjb2wrMzsgaSsrKSAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLkdlbmVyYXRlU3VibWFyaW5lKClcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZUNydWlzZXIoKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3c6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGxcclxuICAgICAgICBsZXQgaTpudW1iZXJcclxuICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwICYmIHJvdyA8PSA3ICYmICF0aGlzLmNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3crMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdyszOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxICYmIGNvbCA+PSAyICYmICF0aGlzLmNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbC0xXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbC0yXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyICYmIHJvdyA+PSAyICYmICF0aGlzLmNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ctMV1bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ctMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSB0aGlzLmNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAzICYmIGNvbCA8PSA3ICYmICF0aGlzLmNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbCsxXS5vY2N1cGllZCAmJiAhdGhpcy5jZWxsc1tyb3ddW2NvbCsyXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCszOyBpKyspICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVDcnVpc2VyKClcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmV0ZURlc3Ryb3llcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdzpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIGxldCBjb2w6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbFxyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDAgJiYgcm93IDw9IDggJiYgIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3JvdysxXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEgJiYgY29sID49IDEgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvd11bY29sLTFdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gY29sOyBpID4gY29sLTI7IGktLSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDIgJiYgcm93ID49IDEgJiYgIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvdy0xXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTI7IGktLSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDMgJiYgY29sIDw9IDggJiYgIXRoaXMuY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICF0aGlzLmNlbGxzW3Jvd11bY29sKzFdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gY29sOyBpIDwgY29sKzI7IGkrKykgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5jZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5HZW5lcmV0ZURlc3Ryb3llcigpXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENlbGwge1xyXG4gICAgY2VsbFY6IEhUTUxJbnB1dEVsZW1lbnQ7IFxyXG4gICAgbG9jazogYm9vbGVhbjtcclxuICAgIG9jY3VwaWVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvdzpudW1iZXIsIGNvbDpudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9jaz1mYWxzZTtcclxuICAgICAgICB0aGlzLm9jY3VwaWVkPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2VsbFY9PEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvdytcInxcIitjb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdTaGlwKHJvdzpudW1iZXIsIGNvbDpudW1iZXIpIDp2b2lke1xyXG4gICAgICAgIHRoaXMuY2VsbFYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0JvYXJkfSBmcm9tICcuL0dlbmVyYXRvcic7XHJcbmltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTdGFydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtTdGFydEdhbWUoKTt9KTtcclxuXHJcbmxldCBib2FyZDogQm9hcmQ7XHJcblxyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lKCkgOnZvaWRcclxue1xyXG5cdHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQm9hcmRcIik7XHJcblx0d2hpbGUodGFibGUuaGFzQ2hpbGROb2RlcygpKSB0YWJsZS5yZW1vdmVDaGlsZCh0YWJsZS5maXJzdENoaWxkKTtcclxuXHJcblx0Ym9hcmQgPSBuZXcgQm9hcmQoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=