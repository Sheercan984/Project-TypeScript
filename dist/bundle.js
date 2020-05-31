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
exports.push([module.i, "table {\n  border-collapse: collapse; }\n\ntd {\n  width: 20px;\n  height: 20px;\n  border: 1px solid black; }\n\n#PlayerBoard {\n  float: left; }\n\n#AIBoard {\n  float: right; }\n\n#container {\n  align-content: center;\n  flex-direction: row;\n  width: 600px; }\n", ""]);
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

/***/ "./src/ts/ai.ts":
/*!**********************!*\
  !*** ./src/ts/ai.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
const game_1 = __webpack_require__(/*! ./game */ "./src/ts/game.ts");
const checks_1 = __webpack_require__(/*! ./checks */ "./src/ts/checks.ts");
let AI = (() => {
    class AI {
        static Random() {
            let cell;
            this.x = Math.floor(Math.random() * 10);
            this.y = Math.floor(Math.random() * 10);
            cell = game_1.Board.pcells[this.x][this.y];
            let i = 0;
            if (this.hit) {
                if (this.d == 1) {
                    if (this.hitx == 9) {
                        cell = game_1.Board.pcells[this.hitx][this.hity];
                        this.x = this.hitx;
                        this.y = this.hity;
                    }
                    else {
                        cell = game_1.Board.pcells[this.hitx + 1][this.hity];
                        this.x = this.hitx + 1;
                        this.y = this.hity;
                    }
                    this.d++;
                }
                else if (this.d == 2) {
                    if (this.hitx == 0) {
                        cell = game_1.Board.pcells[this.hitx][this.hity];
                        this.x = this.hitx;
                        this.y = this.hity;
                    }
                    else {
                        cell = game_1.Board.pcells[this.hitx - 1][this.hity];
                        this.x = this.hitx - 1;
                        this.y = this.hity;
                    }
                    this.d++;
                }
                else if (this.d == 3) {
                    if (this.hity == 9) {
                        cell = game_1.Board.pcells[this.hitx][this.hity];
                        this.x = this.hitx;
                        this.y = this.hity;
                    }
                    else {
                        cell = game_1.Board.pcells[this.hitx][this.hity + 1];
                        this.x = this.hitx;
                        this.y = this.hity + 1;
                    }
                    this.d++;
                }
                else if (this.d == 4) {
                    if (this.hity == 9) {
                        cell = game_1.Board.pcells[this.hitx][this.hity];
                        this.x = this.hitx;
                        this.y = this.hity;
                    }
                    else {
                        cell = game_1.Board.pcells[this.hitx][this.hity - 1];
                        this.x = this.hitx;
                        this.y = this.hity - 1;
                    }
                    this.d++;
                }
                else if (this.d == 5) {
                    this.d = 0;
                    this.hit = false;
                }
            }
            if (cell.occupied && !cell.lock) {
                cell.aHit();
                cell.lock = true;
                this.hitx = this.x;
                this.hity = this.y;
                this.hit = true;
                this.d = 1;
                for (i = 0; i < 5; i++) {
                    if (cell == game_1.Board.pcarrier[i])
                        checks_1.Checks.AICarrierCheck();
                }
                for (i = 0; i < 4; i++) {
                    if (cell == game_1.Board.pbattleship[i])
                        checks_1.Checks.AIBattleshipCheck();
                }
                for (i = 0; i < 3; i++) {
                    if (cell == game_1.Board.psubmarine[i])
                        checks_1.Checks.AISubmarineCheck();
                }
                for (i = 0; i < 3; i++) {
                    if (cell == game_1.Board.pcruiser[i])
                        checks_1.Checks.AICruiserCheck();
                }
                for (i = 0; i < 2; i++) {
                    if (cell == game_1.Board.pdestroyer[i])
                        checks_1.Checks.AIDestroyerCheck();
                }
                checks_1.Checks.AWinCheck();
            }
            else if (!cell.occupied && !cell.lock) {
                cell.aMiss();
                cell.lock = true;
            }
            else {
                this.Random();
            }
        }
    }
    AI.d = 1;
    return AI;
})();
exports.AI = AI;


/***/ }),

/***/ "./src/ts/aiBoard.ts":
/*!***************************!*\
  !*** ./src/ts/aiBoard.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AiBoard = void 0;
const game_1 = __webpack_require__(/*! ./game */ "./src/ts/game.ts");
const cell_1 = __webpack_require__(/*! ./cell */ "./src/ts/cell.ts");
class AiBoard {
    constructor() {
        this.GenerateVisualBoard();
        this.GenerateCellTabel();
        this.GenerateCarrier();
        this.GenerateBattleship();
        this.GenerateSubmarine();
        this.GenerateCruiser();
        this.GenereteDestroyer();
    }
    GenerateCellTabel() {
        game_1.Board.acells = new Array(game_1.Board.size);
        for (var i = 0; i < game_1.Board.size; i++) {
            game_1.Board.acells[i] = new Array(game_1.Board.size);
            for (var j = 0; j < game_1.Board.size; j++) {
                game_1.Board.acells[i][j] = new cell_1.Cell(i, j);
            }
        }
    }
    GenerateVisualBoard() {
        this.atable = document.getElementById("AIBoard");
        for (var i = 10; i < game_1.Board.size + 10; i++) {
            let arow = this.atable.insertRow(0);
            for (var j = 10; j < game_1.Board.size + 10; j++) {
                let cell = arow.insertCell(0);
                cell.id = i + "|" + j;
                let ii = i - 10;
                let jj = j - 10;
                document.getElementById(i + "|" + j).addEventListener("click", function () { game_1.Board.Clack(ii, jj); });
            }
        }
    }
    GenerateCarrier() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let j = 0;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = game_1.Board.acells[row][i];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = game_1.Board.acells[i][col];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
        }
        if (row < 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = game_1.Board.acells[row][i];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = game_1.Board.acells[i][col];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
        }
        if (row >= 5 && col < 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = game_1.Board.acells[row][i];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = game_1.Board.acells[i][col];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
        }
        if (row >= 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = game_1.Board.acells[row][i];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = game_1.Board.acells[i][col];
                    cell.occupied = true;
                    game_1.Board.acarrier[j++] = game_1.Board.acells[row][i];
                }
            }
        }
    }
    GenerateBattleship() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let j = 0;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col + 1].occupied && !game_1.Board.acells[row][col + 2].occupied && !game_1.Board.acells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = game_1.Board.acells[row][i];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row + 1][col].occupied && !game_1.Board.acells[row + 2][col].occupied && !game_1.Board.acells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = game_1.Board.acells[i][col];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[i][col];
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
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col - 1].occupied && !game_1.Board.acells[row][col - 2].occupied && !game_1.Board.acells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = game_1.Board.acells[row][i];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row + 1][col].occupied && !game_1.Board.acells[row + 2][col].occupied && !game_1.Board.acells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = game_1.Board.acells[i][col];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[i][col];
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
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col + 1].occupied && !game_1.Board.acells[row][col + 2].occupied && !game_1.Board.acells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = game_1.Board.acells[row][i];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row - 1][col].occupied && !game_1.Board.acells[row - 2][col].occupied && !game_1.Board.acells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = game_1.Board.acells[i][col];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[i][col];
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
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col - 1].occupied && !game_1.Board.acells[row][col - 2].occupied && !game_1.Board.acells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = game_1.Board.acells[row][i];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            if (direction == 1) {
                if (!game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row - 1][col].occupied && !game_1.Board.acells[row - 2][col].occupied && !game_1.Board.acells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = game_1.Board.acells[i][col];
                        cell.occupied = true;
                        game_1.Board.abattleship[j++] = game_1.Board.acells[i][col];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row + 1][col].occupied && !game_1.Board.acells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.asubmarine[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col - 1].occupied && !game_1.Board.acells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.asubmarine[j++] = game_1.Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row - 1][col].occupied && !game_1.Board.acells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.asubmarine[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col + 1].occupied && !game_1.Board.acells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.asubmarine[j++] = game_1.Board.acells[row][i];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row + 1][col].occupied && !game_1.Board.acells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.acruiser[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col - 1].occupied && !game_1.Board.acells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.acruiser[j++] = game_1.Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row - 1][col].occupied && !game_1.Board.acells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.acruiser[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col + 1].occupied && !game_1.Board.acells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.acruiser[j++] = game_1.Board.acells[row][i];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 8 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row + 1][col].occupied) {
            for (i = row; i < row + 2; i++) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.adestroyer[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 1 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col - 1].occupied) {
            for (i = col; i > col - 2; i--) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.adestroyer[j++] = game_1.Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 1 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row - 1][col].occupied) {
            for (i = row; i > row - 2; i--) {
                cell = game_1.Board.acells[i][col];
                cell.occupied = true;
                game_1.Board.adestroyer[j++] = game_1.Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 8 && !game_1.Board.acells[row][col].occupied && !game_1.Board.acells[row][col + 1].occupied) {
            for (i = col; i < col + 2; i++) {
                cell = game_1.Board.acells[row][i];
                cell.occupied = true;
                game_1.Board.adestroyer[j++] = game_1.Board.acells[row][i];
            }
        }
        else
            this.GenereteDestroyer();
    }
}
exports.AiBoard = AiBoard;


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
        let prow = row + 10;
        let pcol = col + 10;
        this.lock = false;
        this.occupied = false;
        this.cellV = document.getElementById(row + "|" + col);
        this.pcellV = document.getElementById(prow + "|" + pcol);
    }
    DrawShip() {
        this.cellV.style.backgroundColor = "black";
    }
    aHit() {
        this.cellV.style.backgroundColor = "pink";
    }
    aMiss() {
        this.cellV.style.backgroundColor = "grey";
    }
    AIShipShot() {
        this.cellV.style.backgroundColor = "red";
    }
    pHit() {
        this.pcellV.style.backgroundColor = "pink";
    }
    pMiss() {
        this.pcellV.style.backgroundColor = "grey";
    }
    ShipShot() {
        this.pcellV.style.backgroundColor = "red";
    }
}
exports.Cell = Cell;


/***/ }),

/***/ "./src/ts/checks.ts":
/*!**************************!*\
  !*** ./src/ts/checks.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Checks = void 0;
const game_1 = __webpack_require__(/*! ./game */ "./src/ts/game.ts");
let Checks = (() => {
    class Checks {
        static PWinCheck() {
            this.PShoot++;
            if (this.PShoot == 17) {
                alert("Player Wins");
            }
        }
        static AWinCheck() {
            this.AIPShoot++;
            if (this.AIPShoot == 17) {
                alert("AI Wins");
            }
        }
        static CarrierCheck() {
            let cell;
            let i;
            for (i = 0; i < 5; i++) {
                cell = game_1.Board.acarrier[i];
                if (cell.lock) {
                    this.CaShot++;
                }
            }
            if (this.CaShot == 15) {
                for (i = 0; i < 5; i++) {
                    cell = game_1.Board.acarrier[i];
                    cell.ShipShot();
                }
            }
        }
        static BattleshipCheck() {
            let cell;
            let i;
            for (i = 0; i < 4; i++) {
                cell = game_1.Board.abattleship[i];
                if (cell.lock) {
                    this.BShot++;
                }
            }
            if (this.BShot == 10) {
                for (i = 0; i < 4; i++) {
                    cell = game_1.Board.abattleship[i];
                    cell.ShipShot();
                }
            }
        }
        static SubmarineCheck() {
            let cell;
            let i;
            for (i = 0; i < 3; i++) {
                cell = game_1.Board.asubmarine[i];
                if (cell.lock) {
                    this.SShot++;
                }
            }
            if (this.SShot == 6) {
                for (i = 0; i < 3; i++) {
                    cell = game_1.Board.asubmarine[i];
                    cell.ShipShot();
                }
            }
        }
        static CruiserCheck() {
            let cell;
            let i;
            for (i = 0; i < 3; i++) {
                cell = game_1.Board.acruiser[i];
                if (cell.lock) {
                    this.CrShot++;
                }
            }
            if (this.CrShot == 6) {
                for (i = 0; i < 3; i++) {
                    cell = game_1.Board.acruiser[i];
                    cell.ShipShot();
                }
            }
        }
        static DestroyerCheck() {
            let cell;
            let i;
            for (i = 0; i < 2; i++) {
                cell = game_1.Board.adestroyer[i];
                if (cell.lock) {
                    this.DShot++;
                }
            }
            if (this.DShot == 3) {
                for (i = 0; i < 2; i++) {
                    cell = game_1.Board.adestroyer[i];
                    cell.ShipShot();
                }
            }
        }
        static AICarrierCheck() {
            let cell;
            let i;
            for (i = 0; i < 5; i++) {
                cell = game_1.Board.pcarrier[i];
                if (cell.lock) {
                    this.AICaShot++;
                }
            }
            if (this.AICaShot == 15) {
                for (i = 0; i < 5; i++) {
                    cell = game_1.Board.pcarrier[i];
                    cell.AIShipShot();
                }
            }
        }
        static AIBattleshipCheck() {
            let cell;
            let i;
            for (i = 0; i < 4; i++) {
                cell = game_1.Board.pbattleship[i];
                if (cell.lock) {
                    this.AIBShot++;
                }
            }
            if (this.AIBShot == 10) {
                for (i = 0; i < 4; i++) {
                    cell = game_1.Board.pbattleship[i];
                    cell.AIShipShot();
                }
            }
        }
        static AISubmarineCheck() {
            let cell;
            let i;
            for (i = 0; i < 3; i++) {
                cell = game_1.Board.psubmarine[i];
                if (cell.lock) {
                    this.AISShot++;
                }
            }
            if (this.AISShot == 6) {
                for (i = 0; i < 3; i++) {
                    cell = game_1.Board.psubmarine[i];
                    cell.AIShipShot();
                }
            }
        }
        static AICruiserCheck() {
            let cell;
            let i;
            for (i = 0; i < 3; i++) {
                cell = game_1.Board.pcruiser[i];
                if (cell.lock) {
                    this.AICrShot++;
                }
            }
            if (this.AICrShot == 6) {
                for (i = 0; i < 3; i++) {
                    cell = game_1.Board.pcruiser[i];
                    cell.AIShipShot();
                }
            }
        }
        static AIDestroyerCheck() {
            let cell;
            let i;
            for (i = 0; i < 2; i++) {
                cell = game_1.Board.pdestroyer[i];
                if (cell.lock) {
                    this.AIDShot++;
                }
            }
            if (this.AIDShot == 3) {
                for (i = 0; i < 2; i++) {
                    cell = game_1.Board.pdestroyer[i];
                    cell.AIShipShot();
                }
            }
        }
    }
    Checks.PShoot = 0;
    Checks.CaShot = 0;
    Checks.BShot = 0;
    Checks.SShot = 0;
    Checks.CrShot = 0;
    Checks.DShot = 0;
    Checks.AIPShoot = 0;
    Checks.AICaShot = 0;
    Checks.AIBShot = 0;
    Checks.AISShot = 0;
    Checks.AICrShot = 0;
    Checks.AIDShot = 0;
    return Checks;
})();
exports.Checks = Checks;


/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const checks_1 = __webpack_require__(/*! ./checks */ "./src/ts/checks.ts");
const playerBoard_1 = __webpack_require__(/*! ./playerBoard */ "./src/ts/playerBoard.ts");
const aiBoard_1 = __webpack_require__(/*! ./aiBoard */ "./src/ts/aiBoard.ts");
const ai_1 = __webpack_require__(/*! ./ai */ "./src/ts/ai.ts");
let Board = (() => {
    class Board {
        constructor() {
            let pboard = new playerBoard_1.PlayerBoard();
            let aboard = new aiBoard_1.AiBoard();
        }
        static Clack(x, y) {
            let cell;
            cell = Board.acells[x][y];
            let i;
            if (cell.occupied && !cell.lock) {
                cell.lock = true;
                cell.pHit();
                for (i = 0; i < 5; i++) {
                    if (cell == this.acarrier[i])
                        checks_1.Checks.CarrierCheck();
                }
                for (i = 0; i < 4; i++) {
                    if (cell == this.abattleship[i])
                        checks_1.Checks.BattleshipCheck();
                }
                for (i = 0; i < 3; i++) {
                    if (cell == this.asubmarine[i])
                        checks_1.Checks.SubmarineCheck();
                }
                for (i = 0; i < 3; i++) {
                    if (cell == this.acruiser[i])
                        checks_1.Checks.CruiserCheck();
                }
                for (i = 0; i < 2; i++) {
                    if (cell == this.adestroyer[i])
                        checks_1.Checks.DestroyerCheck();
                }
                checks_1.Checks.PWinCheck();
                ai_1.AI.Random();
            }
            else if (!cell.occupied && !cell.lock) {
                cell.lock = true;
                cell.pMiss();
                ai_1.AI.Random();
            }
        }
    }
    Board.pcells = new Array();
    Board.acells = new Array();
    Board.pcarrier = new Array();
    Board.pbattleship = new Array();
    Board.psubmarine = new Array();
    Board.pcruiser = new Array();
    Board.pdestroyer = new Array();
    Board.acarrier = new Array();
    Board.abattleship = new Array();
    Board.asubmarine = new Array();
    Board.acruiser = new Array();
    Board.adestroyer = new Array();
    Board.size = 10;
    return Board;
})();
exports.Board = Board;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __webpack_require__(/*! ./game */ "./src/ts/game.ts");
__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
document.getElementById("Start").addEventListener("click", function () { StartGame(); });
let board;
function StartGame() {
    var ptable = document.getElementById("PlayerBoard");
    while (ptable.hasChildNodes())
        ptable.removeChild(ptable.firstChild);
    var atable = document.getElementById("AIBoard");
    while (atable.hasChildNodes())
        atable.removeChild(atable.firstChild);
    board = new game_1.Board();
}


/***/ }),

/***/ "./src/ts/playerBoard.ts":
/*!*******************************!*\
  !*** ./src/ts/playerBoard.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const game_1 = __webpack_require__(/*! ./game */ "./src/ts/game.ts");
const cell_1 = __webpack_require__(/*! ./cell */ "./src/ts/cell.ts");
class PlayerBoard {
    constructor() {
        this.GenerateVisualBoard();
        this.GenerateCellTabel();
        this.GenerateCarrier();
        this.GenerateBattleship();
        this.GenerateSubmarine();
        this.GenerateCruiser();
        this.GenereteDestroyer();
    }
    GenerateCellTabel() {
        game_1.Board.pcells = new Array(game_1.Board.size);
        for (var i = 0; i < game_1.Board.size; i++) {
            game_1.Board.pcells[i] = new Array(game_1.Board.size);
            for (var j = 0; j < game_1.Board.size; j++) {
                game_1.Board.pcells[i][j] = new cell_1.Cell(i, j);
            }
        }
    }
    GenerateVisualBoard() {
        this.ptable = document.getElementById("PlayerBoard");
        for (var i = 0; i < game_1.Board.size; i++) {
            let prow = this.ptable.insertRow(0);
            for (var j = 0; j < game_1.Board.size; j++) {
                let cell = prow.insertCell(0);
                cell.id = i + "|" + j;
            }
        }
    }
    GenerateCarrier() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let j = 0;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = game_1.Board.pcells[row][i];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = game_1.Board.pcells[i][col];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[i][col];
                }
            }
        }
        if (row < 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = game_1.Board.pcells[row][i];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = game_1.Board.pcells[i][col];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[i][col];
                }
            }
        }
        if (row >= 5 && col < 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = game_1.Board.pcells[row][i];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = game_1.Board.pcells[i][col];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[i][col];
                }
            }
        }
        if (row >= 5 && col >= 5) {
            let direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = game_1.Board.pcells[row][i];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[row][i];
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = game_1.Board.pcells[i][col];
                    cell.occupied = true;
                    cell.DrawShip();
                    game_1.Board.pcarrier[j++] = game_1.Board.pcells[i][col];
                }
            }
        }
    }
    GenerateBattleship() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let cell;
        let i;
        let j = 0;
        if (row < 5 && col < 5) {
            let direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col + 1].occupied && !game_1.Board.pcells[row][col + 2].occupied && !game_1.Board.pcells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = game_1.Board.pcells[row][i];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row + 1][col].occupied && !game_1.Board.pcells[row + 2][col].occupied && !game_1.Board.pcells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = game_1.Board.pcells[i][col];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[i][col];
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
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col - 1].occupied && !game_1.Board.pcells[row][col - 2].occupied && !game_1.Board.pcells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = game_1.Board.pcells[row][i];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row + 1][col].occupied && !game_1.Board.pcells[row + 2][col].occupied && !game_1.Board.pcells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = game_1.Board.pcells[i][col];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[i][col];
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
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col + 1].occupied && !game_1.Board.pcells[row][col + 2].occupied && !game_1.Board.pcells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = game_1.Board.pcells[row][i];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row - 1][col].occupied && !game_1.Board.pcells[row - 2][col].occupied && !game_1.Board.pcells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = game_1.Board.pcells[i][col];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[i][col];
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
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col - 1].occupied && !game_1.Board.pcells[row][col - 2].occupied && !game_1.Board.pcells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = game_1.Board.pcells[row][i];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[row][i];
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            if (direction == 1) {
                if (!game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row - 1][col].occupied && !game_1.Board.pcells[row - 2][col].occupied && !game_1.Board.pcells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = game_1.Board.pcells[i][col];
                        cell.occupied = true;
                        cell.DrawShip();
                        game_1.Board.pbattleship[j++] = game_1.Board.pcells[i][col];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row + 1][col].occupied && !game_1.Board.pcells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.psubmarine[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col - 1].occupied && !game_1.Board.pcells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.psubmarine[j++] = game_1.Board.pcells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row - 1][col].occupied && !game_1.Board.pcells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.psubmarine[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col + 1].occupied && !game_1.Board.pcells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.psubmarine[j++] = game_1.Board.pcells[row][i];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row + 1][col].occupied && !game_1.Board.pcells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pcruiser[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col - 1].occupied && !game_1.Board.pcells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pcruiser[j++] = game_1.Board.pcells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row - 1][col].occupied && !game_1.Board.pcells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pcruiser[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col + 1].occupied && !game_1.Board.pcells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pcruiser[j++] = game_1.Board.pcells[row][i];
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
        let j = 0;
        let direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 8 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row + 1][col].occupied) {
            for (i = row; i < row + 2; i++) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pdestroyer[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 1 && col >= 1 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col - 1].occupied) {
            for (i = col; i > col - 2; i--) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pdestroyer[j++] = game_1.Board.pcells[row][i];
            }
        }
        else if (direction == 2 && row >= 1 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row - 1][col].occupied) {
            for (i = row; i > row - 2; i--) {
                cell = game_1.Board.pcells[i][col];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pdestroyer[j++] = game_1.Board.pcells[i][col];
            }
        }
        else if (direction == 3 && col <= 8 && !game_1.Board.pcells[row][col].occupied && !game_1.Board.pcells[row][col + 1].occupied) {
            for (i = col; i < col + 2; i++) {
                cell = game_1.Board.pcells[row][i];
                cell.occupied = true;
                cell.DrawShip();
                game_1.Board.pdestroyer[j++] = game_1.Board.pcells[row][i];
            }
        }
        else
            this.GenereteDestroyer();
    }
}
exports.PlayerBoard = PlayerBoard;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzdjMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FpLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9haUJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVja3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9wbGF5ZXJCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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QUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ3hHO1lBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1QjtnQkFDSSxJQUFJLEdBQUcsWUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsWUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEQ7U0FDSjthQUNJLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQzdHO1lBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1QjtnQkFDSSxJQUFJLEdBQUcsWUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsWUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDSjthQUNJLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQzdHO1lBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1QjtnQkFDSSxJQUFJLEdBQUcsWUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsWUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEQ7U0FDSjthQUNJLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQzdHO1lBQ0ksS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUM1QjtnQkFDSSxJQUFJLEdBQUcsWUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsWUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDSjs7WUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7SUFDNUIsQ0FBQztDQUNKO0FBNWRE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O0lBQzVCLENBQUM7Q0FFSjtBQXZkRCxrQ0F1ZEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxcblxcbnRkIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cXG5cXG4jUGxheWVyQm9hcmQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4jQUlCb2FyZCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogNjAwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQge0JvYXJkfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQge0NlbGx9IGZyb20gJy4vY2VsbCc7XHJcbmltcG9ydCB7Q2hlY2tzfSBmcm9tICcuL2NoZWNrcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFJe1xyXG4gICAgc3RhdGljIHg6bnVtYmVyO1xyXG4gICAgc3RhdGljIHk6bnVtYmVyO1xyXG4gICAgc3RhdGljIGhpdHg6bnVtYmVyO1xyXG4gICAgc3RhdGljIGhpdHk6bnVtYmVyO1xyXG4gICAgc3RhdGljIGhpdDpib29sZWFuO1xyXG4gICAgc3RhdGljIGQ6bnVtYmVyID0gMTtcclxuXHJcbiAgICBzdGF0aWMgUmFuZG9tKCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGNlbGw6Q2VsbDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XHJcbiAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1t0aGlzLnhdW3RoaXMueV07XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodGhpcy5oaXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpdHggPT0gOSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3RoaXMuaGl0eF1bdGhpcy5oaXR5XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmhpdHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5oaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbdGhpcy5oaXR4KzFdW3RoaXMuaGl0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5oaXR4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmhpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZCA9PSAyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXR4ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1t0aGlzLmhpdHhdW3RoaXMuaGl0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5oaXR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuaGl0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3RoaXMuaGl0eC0xXVt0aGlzLmhpdHldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuaGl0eCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5oaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmQgPT0gMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGl0eSA9PSA5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbdGhpcy5oaXR4XVt0aGlzLmhpdHldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuaGl0eDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmhpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1t0aGlzLmhpdHhdW3RoaXMuaGl0eSsxXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmhpdHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5oaXR5ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kID09IDQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpdHkgPT0gOSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3RoaXMuaGl0eF1bdGhpcy5oaXR5XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmhpdHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5oaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbdGhpcy5oaXR4XVt0aGlzLmhpdHktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5oaXR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuaGl0eSAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZCA9PSA1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2VsbC5vY2N1cGllZCAmJiAhY2VsbC5sb2NrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2VsbC5hSGl0KClcclxuICAgICAgICAgICAgY2VsbC5sb2NrID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaXR4ID0gdGhpcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhpdHkgPSB0aGlzLnk7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kID0gMTtcclxuICAgICAgICAgICAgZm9yKGkgPSAwOyBpPDU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY2VsbCA9PSBCb2FyZC5wY2FycmllcltpXSlcclxuICAgICAgICAgICAgICAgIENoZWNrcy5BSUNhcnJpZXJDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihpID0gMDsgaTw0OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNlbGwgPT0gQm9hcmQucGJhdHRsZXNoaXBbaV0pXHJcbiAgICAgICAgICAgICAgICBDaGVja3MuQUlCYXR0bGVzaGlwQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGk8MzsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihjZWxsID09IEJvYXJkLnBzdWJtYXJpbmVbaV0pXHJcbiAgICAgICAgICAgICAgICBDaGVja3MuQUlTdWJtYXJpbmVDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihpID0gMDsgaTwzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNlbGwgPT0gQm9hcmQucGNydWlzZXJbaV0pXHJcbiAgICAgICAgICAgICAgICBDaGVja3MuQUlDcnVpc2VyQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGk8MjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihjZWxsID09IEJvYXJkLnBkZXN0cm95ZXJbaV0pXHJcbiAgICAgICAgICAgICAgICBDaGVja3MuQUlEZXN0cm95ZXJDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENoZWNrcy5BV2luQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWNlbGwub2NjdXBpZWQgJiYgIWNlbGwubG9jaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwuYU1pc3MoKTtcclxuICAgICAgICAgICAgY2VsbC5sb2NrID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SYW5kb20oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHtDZWxsfSBmcm9tICcuL2NlbGwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFpQm9hcmRcclxue1xyXG5cclxuICAgIGF0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVZpc3VhbEJvYXJkKCk7ICAgXHRcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQ2VsbFRhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZUNhcnJpZXIoKTtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpO1xyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVTdWJtYXJpbmUoKTtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQ3J1aXNlcigpO1xyXG4gICAgICAgIHRoaXMuR2VuZXJldGVEZXN0cm95ZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgR2VuZXJhdGVDZWxsVGFiZWwoKSAgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQm9hcmQuYWNlbGxzID0gbmV3IEFycmF5KEJvYXJkLnNpemUpO1xyXG4gICAgICAgIGZvcih2YXIgaTogbnVtYmVyID0gMDsgaSA8IEJvYXJkLnNpemU7IGkrKykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCb2FyZC5hY2VsbHNbaV0gPSBuZXcgQXJyYXkoQm9hcmQuc2l6ZSk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgajogbnVtYmVyID0gMDsgajwgQm9hcmQuc2l6ZTsgaisrKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQm9hcmQuYWNlbGxzW2ldW2pdID0gbmV3IENlbGwoaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGVWaXN1YWxCb2FyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQUlCb2FyZFwiKTtcclxuXHRcdGZvcih2YXIgaTogbnVtYmVyID0gMTA7IGkgPCBCb2FyZC5zaXplKzEwOyBpKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFyb3cgPSB0aGlzLmF0YWJsZS5pbnNlcnRSb3coMCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgajogbnVtYmVyID0gMTA7IGo8IEJvYXJkLnNpemUrMTA7IGorKykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gYXJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pZD1pK1wifFwiK2o7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWkgPSBpLTEwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGpqID0gai0xMDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkrXCJ8XCIraikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Qm9hcmQuQ2xhY2soaWksamopO30pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGVDYXJyaWVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdzpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlcjtcclxuICAgICAgICBsZXQgajpudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmIChyb3cgPCA1ICYmIGNvbCA8IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQuYWNhcnJpZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crNTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLmFjYXJyaWVyW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC01OyBpLS0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQuYWNhcnJpZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crNTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLmFjYXJyaWVyW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+PSA1ICYmIGNvbCA8IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAocm93LGkpXHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQuYWNhcnJpZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctNTsgaS0tKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLmFjYXJyaWVyW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+PSA1ICYmIGNvbCA+PSA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtNTsgaS0tKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKHJvdyxpKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLmFjYXJyaWVyW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTU7IGktLSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgICAgICBCb2FyZC5hY2FycmllcltqKytdID0gQm9hcmQuYWNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlQmF0dGxlc2hpcCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3c6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNvbDpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbDtcclxuICAgICAgICBsZXQgaTpudW1iZXI7XHJcbiAgICAgICAgbGV0IGo6bnVtYmVyID0gMDtcclxuICAgICAgICBpZiAocm93IDwgNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbCsyXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sKzNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKHJvdyxpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZC5hYmF0dGxlc2hpcFtqKytdID0gQm9hcmQuYWNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93KzFdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3crMl1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3JvdyszXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdys0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZC5hYmF0dGxlc2hpcFtqKytdID0gQm9hcmQuYWNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sLTFdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbC0zXS5vY2N1cGllZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtNDsgaS0tKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChyb3csaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQuYWJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLmFjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3JvdysyXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93KzNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvYXJkLmFiYXR0bGVzaGlwW2orK10gPSBCb2FyZC5hY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID49IDUgJiYgY29sIDwgNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjEpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbCsyXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sKzNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKHJvdyxpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZC5hYmF0dGxlc2hpcFtqKytdID0gQm9hcmQuYWNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvdy0xXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ctM11bY29sXS5vY2N1cGllZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctNDsgaS0tKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQuYWJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLmFjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPj0gNSAmJiBjb2wgPj0gNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjEpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbC0yXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sLTNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC00OyBpLS0pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKHJvdyxpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZC5hYmF0dGxlc2hpcFtqKytdID0gQm9hcmQuYWNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLmFjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ctMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvdy0yXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93LTNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvYXJkLmFiYXR0bGVzaGlwW2orK10gPSBCb2FyZC5hY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlU3VibWFyaW5lKCkgOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93Om51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjb2w6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGw7XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyO1xyXG4gICAgICAgIGxldCBqOm51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMCAmJiByb3cgPD0gNyAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3JvdysxXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93KzJdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crMzsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hc3VibWFyaW5lW2orK10gPSBCb2FyZC5hY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSAmJiBjb2wgPj0gMiAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sLTFdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtMzsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hc3VibWFyaW5lW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMiAmJiByb3cgPj0gMiAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvdy0xXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctMzsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hc3VibWFyaW5lW2orK10gPSBCb2FyZC5hY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMyAmJiBjb2wgPD0gNyAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sKzFdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wrMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPCBjb2wrMzsgaSsrKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hc3VibWFyaW5lW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVN1Ym1hcmluZSgpXHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGVDcnVpc2VyKCkgOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93Om51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjb2w6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGw7XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyO1xyXG4gICAgICAgIGxldCBqOm51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMCAmJiByb3cgPD0gNyAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3JvdysxXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93KzJdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPCByb3crMzsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hY3J1aXNlcltqKytdID0gQm9hcmQuYWNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEgJiYgY29sID49IDIgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbC0xXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sLTJdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gY29sOyBpID4gY29sLTM7IGktLSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQuYWNydWlzZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyICYmIHJvdyA+PSAyICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ctMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgIEJvYXJkLmFjcnVpc2VyW2orK10gPSBCb2FyZC5hY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMyAmJiBjb2wgPD0gNyAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sKzFdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wrMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPCBjb2wrMzsgaSsrKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hY3J1aXNlcltqKytdID0gQm9hcmQuYWNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVDcnVpc2VyKClcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmV0ZURlc3Ryb3llcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdzpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlcjtcclxuICAgICAgICBsZXQgajpudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDAgJiYgcm93IDw9IDggJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdysyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgIEJvYXJkLmFkZXN0cm95ZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxICYmIGNvbCA+PSAxICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5hY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtMjsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL2NlbGwuRHJhd1NoaXAoaSxjb2wpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5hZGVzdHJveWVyW2orK10gPSBCb2FyZC5hY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMiAmJiByb3cgPj0gMSAmJiAhQm9hcmQuYWNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQuYWNlbGxzW3Jvdy0xXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTI7IGktLSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy9jZWxsLkRyYXdTaGlwKGksY29sKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQuYWRlc3Ryb3llcltqKytdID0gQm9hcmQuYWNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDMgJiYgY29sIDw9IDggJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLmFjZWxsc1tyb3ddW2NvbCsxXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCsyOyBpKyspICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vY2VsbC5EcmF3U2hpcChpLGNvbClcclxuICAgICAgICAgICAgICAgIEJvYXJkLmFkZXN0cm95ZXJbaisrXSA9IEJvYXJkLmFjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLkdlbmVyZXRlRGVzdHJveWVyKClcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDZWxsIHtcclxuICAgIGNlbGxWOiBIVE1MSW5wdXRFbGVtZW50OyBcclxuICAgIHBjZWxsVjogSFRNTElucHV0RWxlbWVudDsgXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG4gICAgb2NjdXBpZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm93Om51bWJlciwgY29sOm51bWJlcikgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb3c6IG51bWJlciA9IHJvdysxMDtcclxuICAgICAgICBsZXQgcGNvbDogbnVtYmVyID0gY29sKzEwO1xyXG4gICAgICAgIHRoaXMubG9jaz1mYWxzZTtcclxuICAgICAgICB0aGlzLm9jY3VwaWVkPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2VsbFY9PEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvdytcInxcIitjb2wpO1xyXG4gICAgICAgIHRoaXMucGNlbGxWPTxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm93K1wifFwiK3Bjb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdTaGlwKCkgOnZvaWR7XHJcbiAgICAgICAgdGhpcy5jZWxsVi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICBhSGl0KCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jZWxsVi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIlxyXG4gICAgfVxyXG5cclxuICAgIGFNaXNzKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jZWxsVi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIlxyXG4gICAgfVxyXG5cclxuICAgIEFJU2hpcFNob3QoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmNlbGxWLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcEhpdCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMucGNlbGxWLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiXHJcbiAgICB9XHJcblxyXG4gICAgcE1pc3MoKTogdm9pZHtcclxuICAgICAgICB0aGlzLnBjZWxsVi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIlxyXG4gICAgfVxyXG5cclxuICAgIFNoaXBTaG90KCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5wY2VsbFYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrc3tcclxuXHJcbiAgICBzdGF0aWMgUFNob290Om51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgQ2FTaG90Om51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgQlNob3Q6bnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBTU2hvdDpudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIENyU2hvdDpudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIERTaG90Om51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIEFJUFNob290Om51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgQUlDYVNob3Q6bnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBBSUJTaG90Om51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgQUlTU2hvdDpudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIEFJQ3JTaG90Om51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgQUlEU2hvdDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBQV2luQ2hlY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuUFNob290KytcclxuICAgICAgICBpZiAodGhpcy5QU2hvb3QgPT0gMTcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsYXllciBXaW5zXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBBV2luQ2hlY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuQUlQU2hvb3QrK1xyXG4gICAgICAgIGlmICh0aGlzLkFJUFNob290ID09IDE3KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBSSBXaW5zXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDYXJyaWVyQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDU7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2FycmllcltpXVxyXG4gICAgICAgICAgICBpZihjZWxsLmxvY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FTaG90KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5DYVNob3QgPT0gMTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCA1OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY2FycmllcltpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5TaGlwU2hvdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBCYXR0bGVzaGlwQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDQ7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hYmF0dGxlc2hpcFtpXVxyXG4gICAgICAgICAgICBpZihjZWxsLmxvY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQlNob3QrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLkJTaG90ID09IDEwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGkgPSAwOyBpIDwgNDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWJhdHRsZXNoaXBbaV1cclxuICAgICAgICAgICAgICAgIGNlbGwuU2hpcFNob3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgU3VibWFyaW5lQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hc3VibWFyaW5lW2ldXHJcbiAgICAgICAgICAgIGlmKGNlbGwubG9jaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TU2hvdCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuU1Nob3QgPT0gNilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihpID0gMDsgaSA8IDM7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFzdWJtYXJpbmVbaV1cclxuICAgICAgICAgICAgICAgIGNlbGwuU2hpcFNob3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ3J1aXNlckNoZWNrKCkgOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbDtcclxuICAgICAgICBsZXQgaTpudW1iZXJcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCAzOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjZWxsID0gQm9hcmQuYWNydWlzZXJbaV1cclxuICAgICAgICAgICAgaWYoY2VsbC5sb2NrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNyU2hvdCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQ3JTaG90ID09IDYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCAzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5hY3J1aXNlcltpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5TaGlwU2hvdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBEZXN0cm95ZXJDaGVjaygpIDp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGw7XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyXHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgMjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2VsbCA9IEJvYXJkLmFkZXN0cm95ZXJbaV1cclxuICAgICAgICAgICAgaWYoY2VsbC5sb2NrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRTaG90KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5EU2hvdCA9PSAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGkgPSAwOyBpIDwgMjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQuYWRlc3Ryb3llcltpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5TaGlwU2hvdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBBSUNhcnJpZXJDaGVjaygpIDp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGw7XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyXHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgNTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjYXJyaWVyW2ldXHJcbiAgICAgICAgICAgIGlmKGNlbGwubG9jaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BSUNhU2hvdCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQUlDYVNob3QgPT0gMTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCA1OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2FycmllcltpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5BSVNoaXBTaG90KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEFJQmF0dGxlc2hpcENoZWNrKCkgOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbDtcclxuICAgICAgICBsZXQgaTpudW1iZXJcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCA0OyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjZWxsID0gQm9hcmQucGJhdHRsZXNoaXBbaV1cclxuICAgICAgICAgICAgaWYoY2VsbC5sb2NrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFJQlNob3QrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLkFJQlNob3QgPT0gMTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCA0OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wYmF0dGxlc2hpcFtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5BSVNoaXBTaG90KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEFJU3VibWFyaW5lQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wc3VibWFyaW5lW2ldXHJcbiAgICAgICAgICAgIGlmKGNlbGwubG9jaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BSVNTaG90KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BSVNTaG90ID09IDYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCAzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wc3VibWFyaW5lW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLkFJU2hpcFNob3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQUlDcnVpc2VyQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY3J1aXNlcltpXVxyXG4gICAgICAgICAgICBpZihjZWxsLmxvY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQUlDclNob3QrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLkFJQ3JTaG90ID09IDYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCAzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY3J1aXNlcltpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5BSVNoaXBTaG90KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEFJRGVzdHJveWVyQ2hlY2soKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlclxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IDI7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wZGVzdHJveWVyW2ldXHJcbiAgICAgICAgICAgIGlmKGNlbGwubG9jaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BSURTaG90KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BSURTaG90ID09IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCAyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wZGVzdHJveWVyW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLkFJU2hpcFNob3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q2VsbH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHtDaGVja3N9IGZyb20gJy4vY2hlY2tzJztcclxuaW1wb3J0IHtQbGF5ZXJCb2FyZH0gZnJvbSAnLi9wbGF5ZXJCb2FyZCc7XHJcbmltcG9ydCB7QWlCb2FyZCB9IGZyb20gJy4vYWlCb2FyZCc7XHJcbmltcG9ydCB7QUl9IGZyb20gJy4vYWknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIFxyXG57XHJcbiAgICBcclxuICAgIFxyXG4gICAgc3RhdGljIHBjZWxsczpDZWxsW11bXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIGFjZWxsczpDZWxsW11bXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIHBjYXJyaWVyOiBDZWxsW10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHN0YXRpYyBwYmF0dGxlc2hpcDogQ2VsbFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICBzdGF0aWMgcHN1Ym1hcmluZTogQ2VsbFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICBzdGF0aWMgcGNydWlzZXI6IENlbGxbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIHBkZXN0cm95ZXI6IENlbGxbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIGFjYXJyaWVyOiBDZWxsW10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHN0YXRpYyBhYmF0dGxlc2hpcDogQ2VsbFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICBzdGF0aWMgYXN1Ym1hcmluZTogQ2VsbFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICBzdGF0aWMgYWNydWlzZXI6IENlbGxbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIGFkZXN0cm95ZXI6IENlbGxbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3RhdGljIHNpemU6bnVtYmVyID0gMTA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBwYm9hcmQ6UGxheWVyQm9hcmQgPSBuZXcgUGxheWVyQm9hcmQoKTtcclxuICAgICAgICBsZXQgYWJvYXJkOkFpQm9hcmQgPSBuZXcgQWlCb2FyZCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGFjayh4Om51bWJlciwgeTpudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNlbGw6Q2VsbDtcclxuICAgICAgICBjZWxsID0gQm9hcmQuYWNlbGxzW3hdW3ldO1xyXG4gICAgICAgIGxldCBpOm51bWJlcjtcclxuICAgICAgICBpZihjZWxsLm9jY3VwaWVkICYmICFjZWxsLmxvY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjZWxsLmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBjZWxsLnBIaXQoKTtcclxuICAgICAgICAgICAgZm9yKGkgPSAwOyBpPDU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoY2VsbCA9PSB0aGlzLmFjYXJyaWVyW2ldKVxyXG4gICAgICAgICAgICAgICAgQ2hlY2tzLkNhcnJpZXJDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihpID0gMDsgaTw0OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNlbGwgPT0gdGhpcy5hYmF0dGxlc2hpcFtpXSlcclxuICAgICAgICAgICAgICAgIENoZWNrcy5CYXR0bGVzaGlwQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGk8MzsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihjZWxsID09IHRoaXMuYXN1Ym1hcmluZVtpXSlcclxuICAgICAgICAgICAgICAgIENoZWNrcy5TdWJtYXJpbmVDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihpID0gMDsgaTwzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNlbGwgPT0gdGhpcy5hY3J1aXNlcltpXSlcclxuICAgICAgICAgICAgICAgIENoZWNrcy5DcnVpc2VyQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGk8MjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihjZWxsID09IHRoaXMuYWRlc3Ryb3llcltpXSlcclxuICAgICAgICAgICAgICAgIENoZWNrcy5EZXN0cm95ZXJDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENoZWNrcy5QV2luQ2hlY2soKTtcclxuICAgICAgICAgICAgQUkuUmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFjZWxsLm9jY3VwaWVkICYmICFjZWxsLmxvY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjZWxsLmxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBjZWxsLnBNaXNzKCk7XHJcbiAgICAgICAgICAgIEFJLlJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0JvYXJkfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU3RhcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7U3RhcnRHYW1lKCk7fSk7XHJcblxyXG5sZXQgYm9hcmQ6IEJvYXJkO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZSgpIDp2b2lkXHJcbntcclxuXHR2YXIgcHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQbGF5ZXJCb2FyZFwiKTtcclxuXHR3aGlsZShwdGFibGUuaGFzQ2hpbGROb2RlcygpKSBwdGFibGUucmVtb3ZlQ2hpbGQocHRhYmxlLmZpcnN0Q2hpbGQpO1xyXG5cdHZhciBhdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFJQm9hcmRcIik7XHJcblx0d2hpbGUoYXRhYmxlLmhhc0NoaWxkTm9kZXMoKSkgYXRhYmxlLnJlbW92ZUNoaWxkKGF0YWJsZS5maXJzdENoaWxkKTtcclxuXHJcblx0Ym9hcmQgPSBuZXcgQm9hcmQoKTtcclxufSIsImltcG9ydCB7Qm9hcmR9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7Q2VsbH0gZnJvbSAnLi9jZWxsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyQm9hcmRcclxue1xyXG5cclxuICAgIHB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVZpc3VhbEJvYXJkKCk7ICAgXHRcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQ2VsbFRhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZUNhcnJpZXIoKTtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpO1xyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVTdWJtYXJpbmUoKTtcclxuICAgICAgICB0aGlzLkdlbmVyYXRlQ3J1aXNlcigpO1xyXG4gICAgICAgIHRoaXMuR2VuZXJldGVEZXN0cm95ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZUNlbGxUYWJlbCgpICA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBCb2FyZC5wY2VsbHMgPSBuZXcgQXJyYXkoQm9hcmQuc2l6ZSk7XHJcbiAgICAgICAgZm9yKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgQm9hcmQuc2l6ZTsgaSsrKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJvYXJkLnBjZWxsc1tpXSA9IG5ldyBBcnJheShCb2FyZC5zaXplKTtcclxuICAgICAgICAgICAgZm9yKHZhciBqOiBudW1iZXIgPSAwOyBqPCBCb2FyZC5zaXplOyBqKyspIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBCb2FyZC5wY2VsbHNbaV1bal0gPSBuZXcgQ2VsbChpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZVZpc3VhbEJvYXJkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICBcdHRoaXMucHRhYmxlID0gPEhUTUxUYWJsZUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUGxheWVyQm9hcmRcIik7XHJcblx0XHRmb3IodmFyIGk6IG51bWJlciA9IDA7IGkgPCBCb2FyZC5zaXplOyBpKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3cgPSB0aGlzLnB0YWJsZS5pbnNlcnRSb3coMCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgajogbnVtYmVyID0gMDsgajwgQm9hcmQuc2l6ZTsgaisrKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBwcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlkPWkrXCJ8XCIrajtcclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZUNhcnJpZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm93Om51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjb2w6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNlbGw6IENlbGw7XHJcbiAgICAgICAgbGV0IGk6bnVtYmVyO1xyXG4gICAgICAgIGxldCBqOm51bWJlciA9IDA7XHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sIDwgNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpIDwgY29sKzU7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLnBjYXJyaWVyW2orK10gPSBCb2FyZC5wY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzU7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW2ldW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIEJvYXJkLnBjYXJyaWVyW2orK10gPSBCb2FyZC5wY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA8IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC01OyBpLS0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICBCb2FyZC5wY2FycmllcltqKytdID0gQm9hcmQucGNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdys1OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICBCb2FyZC5wY2FycmllcltqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPj0gNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPCBjb2wrNTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQucGNhcnJpZXJbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctNTsgaS0tKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQucGNhcnJpZXJbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID49IDUgJiYgY29sID49IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxKVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC01OyBpLS0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICBCb2FyZC5wY2FycmllcltqKytdID0gQm9hcmQucGNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy01OyBpLS0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICBCb2FyZC5wY2FycmllcltqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlQmF0dGxlc2hpcCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3c6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNvbDpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbDtcclxuICAgICAgICBsZXQgaTpudW1iZXI7XHJcbiAgICAgICAgbGV0IGo6bnVtYmVyID0gMDtcclxuICAgICAgICBpZiAocm93IDwgNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbCsyXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sKzNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCs0OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvYXJkLnBiYXR0bGVzaGlwW2orK10gPSBCb2FyZC5wY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3JvdysyXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93KzNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQucGJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPCA1ICYmIGNvbCA+PSA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbC0xXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sLTJdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wtM10ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpID4gY29sLTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQucGJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3JvdysyXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93KzNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQucGJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPj0gNSAmJiBjb2wgPCA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMSlcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbCsxXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sKzJdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wrM10ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY29sOyBpIDwgY29sKzQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQucGJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ctMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvdy0yXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93LTNdW2NvbF0ub2NjdXBpZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcm93OyBpID4gcm93LTQ7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmQucGJhdHRsZXNoaXBbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlQmF0dGxlc2hpcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPj0gNSAmJiBjb2wgPj0gNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjEpXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbC0yXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sLTNdLm9jY3VwaWVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC00OyBpLS0pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvYXJkLnBiYXR0bGVzaGlwW2orK10gPSBCb2FyZC5wY2VsbHNbcm93XVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghQm9hcmQucGNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvdy0xXVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93LTJdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ctM11bY29sXS5vY2N1cGllZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSByb3c7IGkgPiByb3ctNDsgaS0tKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZC5wYmF0dGxlc2hpcFtqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVCYXR0bGVzaGlwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZVN1Ym1hcmluZSgpIDp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdzpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlcjtcclxuICAgICAgICBsZXQgajpudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDAgJiYgcm93IDw9IDcgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3JvdysyXVtjb2xdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gcm93OyBpIDwgcm93KzM7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5wc3VibWFyaW5lW2orK10gPSBCb2FyZC5wY2VsbHNbaV1bY29sXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSAmJiBjb2wgPj0gMiAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sLTFdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wtMl0ub2NjdXBpZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBjb2w7IGkgPiBjb2wtMzsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgIEJvYXJkLnBzdWJtYXJpbmVbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyICYmIHJvdyA+PSAyICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ctMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucHN1Ym1hcmluZVtqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDMgJiYgY29sIDw9IDcgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbCsxXS5vY2N1cGllZCAmJiAhQm9hcmQucGNlbGxzW3Jvd11bY29sKzJdLm9jY3VwaWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpID0gY29sOyBpIDwgY29sKzM7IGkrKykgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gQm9hcmQucGNlbGxzW3Jvd11baV1cclxuICAgICAgICAgICAgICAgIGNlbGwub2NjdXBpZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjZWxsLkRyYXdTaGlwKClcclxuICAgICAgICAgICAgICAgIEJvYXJkLnBzdWJtYXJpbmVbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLkdlbmVyYXRlU3VibWFyaW5lKClcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0ZUNydWlzZXIoKSA6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3c6bnVtYmVyID1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IGNvbDpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY2VsbDogQ2VsbDtcclxuICAgICAgICBsZXQgaTpudW1iZXI7XHJcbiAgICAgICAgbGV0IGo6bnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uOm51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwICYmIHJvdyA8PSA3ICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93KzFdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3crMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdyszOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGNydWlzZXJbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxICYmIGNvbCA+PSAyICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wtMV0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbC0yXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGNydWlzZXJbaisrXSA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyICYmIHJvdyA+PSAyICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93LTFdW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ctMl1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy0zOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGNydWlzZXJbaisrXSA9IEJvYXJkLnBjZWxsc1tpXVtjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAzICYmIGNvbCA8PSA3ICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2xdLm9jY3VwaWVkICYmICFCb2FyZC5wY2VsbHNbcm93XVtjb2wrMV0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbCsyXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCszOyBpKyspICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VsbCA9IEJvYXJkLnBjZWxsc1tyb3ddW2ldXHJcbiAgICAgICAgICAgICAgICBjZWxsLm9jY3VwaWVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2VsbC5EcmF3U2hpcCgpXHJcbiAgICAgICAgICAgICAgICBCb2FyZC5wY3J1aXNlcltqKytdID0gQm9hcmQucGNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuR2VuZXJhdGVDcnVpc2VyKClcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmV0ZURlc3Ryb3llcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdzpudW1iZXIgPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgY29sOm51bWJlciA9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGxldCBjZWxsOiBDZWxsO1xyXG4gICAgICAgIGxldCBpOm51bWJlcjtcclxuICAgICAgICBsZXQgajpudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDAgJiYgcm93IDw9IDggJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3crMV1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA8IHJvdysyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGRlc3Ryb3llcltqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDEgJiYgY29sID49IDEgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbC0xXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA+IGNvbC0yOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGRlc3Ryb3llcltqKytdID0gQm9hcmQucGNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDIgJiYgcm93ID49IDEgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ctMV1bY29sXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHJvdzsgaSA+IHJvdy0yOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbaV1bY29sXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGRlc3Ryb3llcltqKytdID0gQm9hcmQucGNlbGxzW2ldW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IDMgJiYgY29sIDw9IDggJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbF0ub2NjdXBpZWQgJiYgIUJvYXJkLnBjZWxsc1tyb3ddW2NvbCsxXS5vY2N1cGllZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGNvbDsgaSA8IGNvbCsyOyBpKyspICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBCb2FyZC5wY2VsbHNbcm93XVtpXVxyXG4gICAgICAgICAgICAgICAgY2VsbC5vY2N1cGllZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNlbGwuRHJhd1NoaXAoKVxyXG4gICAgICAgICAgICAgICAgQm9hcmQucGRlc3Ryb3llcltqKytdID0gQm9hcmQucGNlbGxzW3Jvd11baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuR2VuZXJldGVEZXN0cm95ZXIoKVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9