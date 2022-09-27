/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/style.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/style.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n\\n#main-container {\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\nheader {\\n  height: 5.5rem;\\n  position: relative;\\n}\\n\\nform {\\n  height: 100%;\\n}\\n\\n.form-group {\\n  float: right;\\n  height: 80%;\\n  position: relative;\\n  margin: 2.5rem 3.5rem 0 0;\\n}\\n\\n.submit-btn {\\n  position: absolute;\\n  top: 27%;\\n  left: 6%;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\n.fa-search {\\n  color: #f3f3f3;\\n  font-size: 1.8rem;\\n}\\n\\ninput[type=text] {\\n  width: 24rem;\\n  height: 100%;\\n  border: none;\\n  outline: none;\\n  background: rgba(255, 255, 255, 0.2);\\n  padding: 0 0 0.3rem 4.5rem;\\n  color: #ffffff;\\n  font-size: 1.6rem;\\n  border-radius: 0.5rem;\\n}\\n\\ninput[type=text]::placeholder {\\n  color: #f3f3f3;\\n}\\n\\n.error-msg {\\n  position: absolute;\\n  left: 2rem;\\n  color: #ff3333;\\n  font-size: 15px;\\n  display: none;\\n}\\n\\n.main-weather-display {\\n  position: absolute;\\n  top: 30%;\\n  margin-left: 10%;\\n  color: #f3f3f3;\\n}\\n\\n.condition {\\n  font-size: 2.2rem;\\n  letter-spacing: 0.1rem;\\n  display: flex;\\n  align-items: center;\\n}\\n.condition img {\\n  height: 5rem;\\n}\\n\\n.location {\\n  font-size: 4rem;\\n  line-height: 3.5rem;\\n  margin-bottom: 1rem;\\n  font-weight: 800;\\n  letter-spacing: 0.1rem;\\n}\\n\\n.degrees {\\n  font-size: 15rem;\\n  font-weight: 900;\\n  font-family: \\\"Nunito\\\", sans-serif;\\n  position: relative;\\n}\\n\\n.degrees::after {\\n  content: \\\"°C\\\";\\n  font-size: 3rem;\\n  position: absolute;\\n  top: 1.8rem;\\n  left: 17.3rem;\\n}\\n\\n.weather-details {\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 1.5rem;\\n  font-weight: 900;\\n  letter-spacing: 0.1rem;\\n  position: absolute;\\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\\n  top: 45%;\\n  left: 22.5rem;\\n  height: 10rem;\\n  padding-left: 3.5rem;\\n  justify-content: space-between;\\n}\\n.weather-details p {\\n  width: max-content;\\n}\\n\\n.feels-like {\\n  position: relative;\\n}\\n\\n.feels-like::after {\\n  content: \\\"°C\\\";\\n  position: absolute;\\n  bottom: 1.1rem;\\n  left: 11.4rem;\\n  font-size: 1rem;\\n}\\n\\n.humidity::after {\\n  content: \\\"%\\\";\\n}\\n\\n.fade-in {\\n  animation: fadeIn 0.2s;\\n}\\n\\n.fade-in2 {\\n  animation: fadeIn2 1.1s;\\n}\\n\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n    top: 6rem;\\n  }\\n  100% {\\n    opacity: 0.5;\\n    top: 4.4rem;\\n  }\\n}\\n@keyframes fadeIn2 {\\n  0% {\\n    opacity: 0.1;\\n    transform: scale(0.9, 0.9);\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@media (max-width: 800px) {\\n  header {\\n    height: 5.5rem;\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n  }\\n  #main-container {\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n  }\\n  .main-weather-display {\\n    position: static;\\n    top: 30%;\\n    margin-top: 15rem;\\n    color: #f3f3f3;\\n    display: flex;\\n    flex-direction: column;\\n    margin-left: 0;\\n    align-items: center;\\n  }\\n  .condition {\\n    justify-content: center;\\n  }\\n  .form-group {\\n    float: right;\\n    height: 80%;\\n    position: relative;\\n    margin: 2.5rem 0 0 0;\\n  }\\n  .weather-details {\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 1.5rem;\\n    font-weight: 900;\\n    letter-spacing: 0.1rem;\\n    position: static;\\n    border-left: none;\\n    /* top: 45%; */\\n    /* left: 22.5rem; */\\n    height: 10rem;\\n    padding-left: 0;\\n    justify-content: space-between;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable consistent-return */\n\nconst weatherData = async (location) => {\n    const [response1, response2] = await Promise.all([\n        fetch(\n            `http://api.weatherapi.com/v1/forecast.json?key=2fc531ab42724d4ba6a110316222409&q=${location}`,\n            { mode: 'cors' }\n        ),\n        fetch(\n            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f5bfad9a4c075a3a9ebfa4137dd6a339`,\n            { mode: 'cors' }\n        ),\n    ]);\n\n    const cityName = await response1.json();\n    const data = await response2.json();\n\n    return [\n        `${cityName.location.name.toUpperCase()}, ${cityName.location.country.toUpperCase()}`,\n        data.weather[0].description.toUpperCase(),\n        Math.round(data.main.temp - 273.15),\n        Math.round(data.main.feels_like - 273.15),\n        Math.round(data.wind.speed * 3.6 * 10) / 10,\n        Math.round(data.main.humidity),\n        data.weather[0].main,\n        data.weather[0].icon,\n    ];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/apis.js?");

/***/ }),

/***/ "./src/domhandlers.js":
/*!****************************!*\
  !*** ./src/domhandlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis */ \"./src/apis.js\");\n/* harmony import */ var _assets_clear_sky_day_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/clear-sky-day.jpg */ \"./src/assets/clear-sky-day.jpg\");\n/* harmony import */ var _assets_clear_sky_night_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/clear-sky-night.jpg */ \"./src/assets/clear-sky-night.jpg\");\n/* harmony import */ var _assets_few_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/few-clouds-day.jpg */ \"./src/assets/few-clouds-day.jpg\");\n/* harmony import */ var _assets_few_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/few-clouds-night.jpg */ \"./src/assets/few-clouds-night.jpg\");\n/* harmony import */ var _assets_scattered_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/scattered-clouds-day.jpg */ \"./src/assets/scattered-clouds-day.jpg\");\n/* harmony import */ var _assets_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/scattered-clouds-night.jpg */ \"./src/assets/scattered-clouds-night.jpg\");\n/* harmony import */ var _assets_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/broken-clouds.jpg */ \"./src/assets/broken-clouds.jpg\");\n/* harmony import */ var _assets_rain_day_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/rain-day.jpg */ \"./src/assets/rain-day.jpg\");\n/* harmony import */ var _assets_rain_night_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/rain-night.jpg */ \"./src/assets/rain-night.jpg\");\n/* harmony import */ var _assets_snow_day_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/snow-day.jpg */ \"./src/assets/snow-day.jpg\");\n/* harmony import */ var _assets_snow_night_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/snow-night.jpg */ \"./src/assets/snow-night.jpg\");\n/* harmony import */ var _assets_thunder_day_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/thunder-day.jpg */ \"./src/assets/thunder-day.jpg\");\n/* harmony import */ var _assets_thunder_night_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/thunder-night.jpg */ \"./src/assets/thunder-night.jpg\");\n/* harmony import */ var _assets_fog_day_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/fog-day.jpg */ \"./src/assets/fog-day.jpg\");\n/* harmony import */ var _assets_fog_night_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/fog-night.jpg */ \"./src/assets/fog-night.jpg\");\n/* eslint-disable no-unused-expressions */\n/* eslint-disable prefer-destructuring */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst mainContainer = document.querySelector('#main-container');\nconst form = document.querySelector('form');\nconst error = document.querySelector('.error-msg');\nconst input = document.querySelector('input');\ninput.setAttribute('type', 'text');\n\nconst location = document.querySelector('.location');\nconst condition = document.querySelector('.condition');\nconst degrees = document.querySelector('.degrees');\nconst feelsLike = document.querySelector('.feels-like');\nconst windSpeed = document.querySelector('.wind-kmph');\nconst humidity = document.querySelector('.humidity');\n\nwindow.addEventListener('load', async () => {\n    const initialData = await (0,_apis__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Kasserine').catch((err) => {\n        throw err;\n    });\n\n    displayWeather(initialData);\n});\n\nform.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const city = input.value;\n    const data = await (0,_apis__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city).catch((err) => {\n        if (err.message === 'cityName.location is undefined') {\n            error.style.display = 'block';\n            if (error.classList.contains('fade-in')) {\n                error.style.display = 'none';\n                error.classList.remove('fade-in2');\n                error.classList.add('fade-in');\n                error.style.display = 'block';\n            } else {\n                error.classList.add('fade-in');\n            }\n        }\n    });\n\n    if (data) {\n        displayWeather(data);\n    }\n});\n\nconst displayWeather = (data) => {\n    error.style.display = 'none';\n    location.textContent = data[0];\n    condition.textContent = data[1];\n    degrees.textContent = data[2];\n    feelsLike.textContent = `FEELS LIKE: ${data[3]}`;\n    windSpeed.textContent = `WIND: ${data[4]} KM/H`;\n    humidity.textContent = `HUMIDITY: ${data[5]}`;\n    input.value = '';\n\n    const img = document.createElement('img');\n    img.src = `https://openweathermap.org/img/wn/${data[7]}@2x.png`;\n    condition.appendChild(img);\n\n    changeBg(data[7]);\n};\n\nfunction changeBg(weatherCondition) {\n    /* Set background depending on weather */\n    switch (weatherCondition) {\n        case '01d':\n            mainContainer.style.backgroundImage = `url(${_assets_clear_sky_day_jpg__WEBPACK_IMPORTED_MODULE_1__})`;\n            break;\n        case '01n':\n            mainContainer.style.backgroundImage = `url(${_assets_clear_sky_night_jpg__WEBPACK_IMPORTED_MODULE_2__})`;\n            break;\n        case '02d':\n            mainContainer.style.backgroundImage = `url(${_assets_few_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\n            break;\n        case '02n':\n            mainContainer.style.backgroundImage = `url(${_assets_few_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_4__})`;\n            break;\n        case '03d':\n            mainContainer.style.backgroundImage = `url(${_assets_scattered_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_5__})`;\n            break;\n        case '03n':\n            mainContainer.style.backgroundImage = `url(${_assets_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_6__})`;\n            break;\n        case '04d':\n            mainContainer.style.backgroundImage = `url(${_assets_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_7__})`;\n            break;\n        case '04n':\n            mainContainer.style.backgroundImage = `url(${_assets_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_6__})`;\n            break;\n        case '09d':\n            mainContainer.style.backgroundImage = `url(${_assets_rain_day_jpg__WEBPACK_IMPORTED_MODULE_8__})`;\n            break;\n        case '09n':\n            mainContainer.style.backgroundImage = `url(${_assets_rain_night_jpg__WEBPACK_IMPORTED_MODULE_9__})`;\n            break;\n        case '10d':\n            mainContainer.style.backgroundImage = `url(${_assets_rain_day_jpg__WEBPACK_IMPORTED_MODULE_8__})`;\n            break;\n        case '10n':\n            mainContainer.style.backgroundImage = `url(${_assets_rain_night_jpg__WEBPACK_IMPORTED_MODULE_9__})`;\n            break;\n        case '11d':\n            mainContainer.style.backgroundImage = `url(${_assets_thunder_day_jpg__WEBPACK_IMPORTED_MODULE_12__})`;\n            break;\n        case '11n':\n            mainContainer.style.backgroundImage = `url(${_assets_thunder_night_jpg__WEBPACK_IMPORTED_MODULE_13__})`;\n            break;\n        case '13d':\n            mainContainer.style.backgroundImage = `url(${_assets_snow_day_jpg__WEBPACK_IMPORTED_MODULE_10__})`;\n            break;\n        case '13n':\n            mainContainer.style.backgroundImage = `url(${_assets_snow_night_jpg__WEBPACK_IMPORTED_MODULE_11__})`;\n            break;\n        case '50d':\n            mainContainer.style.backgroundImage = `url(${_assets_fog_day_jpg__WEBPACK_IMPORTED_MODULE_14__})`;\n            break;\n        case '50n':\n            mainContainer.style.backgroundImage = `url(${_assets_fog_night_jpg__WEBPACK_IMPORTED_MODULE_15__})`;\n            break;\n        default:\n            break;\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/domhandlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _domhandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domhandlers */ \"./src/domhandlers.js\");\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/assets/broken-clouds.jpg":
/*!**************************************!*\
  !*** ./src/assets/broken-clouds.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac1347459a6cbc0b4c3d.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/broken-clouds.jpg?");

/***/ }),

/***/ "./src/assets/clear-sky-day.jpg":
/*!**************************************!*\
  !*** ./src/assets/clear-sky-day.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d5fab4a45c4cbb91440.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/clear-sky-day.jpg?");

/***/ }),

/***/ "./src/assets/clear-sky-night.jpg":
/*!****************************************!*\
  !*** ./src/assets/clear-sky-night.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2c9286ce2f179d0cf90.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/clear-sky-night.jpg?");

/***/ }),

/***/ "./src/assets/few-clouds-day.jpg":
/*!***************************************!*\
  !*** ./src/assets/few-clouds-day.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccae97df18a077868144.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/few-clouds-day.jpg?");

/***/ }),

/***/ "./src/assets/few-clouds-night.jpg":
/*!*****************************************!*\
  !*** ./src/assets/few-clouds-night.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cacaec39817095747e04.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/few-clouds-night.jpg?");

/***/ }),

/***/ "./src/assets/fog-day.jpg":
/*!********************************!*\
  !*** ./src/assets/fog-day.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a28fed85a2ce13539ad.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/fog-day.jpg?");

/***/ }),

/***/ "./src/assets/fog-night.jpg":
/*!**********************************!*\
  !*** ./src/assets/fog-night.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66f744984e31f7aa6a1c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/fog-night.jpg?");

/***/ }),

/***/ "./src/assets/rain-day.jpg":
/*!*********************************!*\
  !*** ./src/assets/rain-day.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eafe7498a0daa2a50876.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/rain-day.jpg?");

/***/ }),

/***/ "./src/assets/rain-night.jpg":
/*!***********************************!*\
  !*** ./src/assets/rain-night.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60645232ae8e4c03f7be.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/rain-night.jpg?");

/***/ }),

/***/ "./src/assets/scattered-clouds-day.jpg":
/*!*********************************************!*\
  !*** ./src/assets/scattered-clouds-day.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c9d6b074b9e88d118f9.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/scattered-clouds-day.jpg?");

/***/ }),

/***/ "./src/assets/scattered-clouds-night.jpg":
/*!***********************************************!*\
  !*** ./src/assets/scattered-clouds-night.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5a8ec801b6065831f3b.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/scattered-clouds-night.jpg?");

/***/ }),

/***/ "./src/assets/snow-day.jpg":
/*!*********************************!*\
  !*** ./src/assets/snow-day.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"937974489e269952ae04.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/snow-day.jpg?");

/***/ }),

/***/ "./src/assets/snow-night.jpg":
/*!***********************************!*\
  !*** ./src/assets/snow-night.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5aa4c866ad95b0eb7ed.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/snow-night.jpg?");

/***/ }),

/***/ "./src/assets/thunder-day.jpg":
/*!************************************!*\
  !*** ./src/assets/thunder-day.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0376f33b867cd3a09d6e.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/thunder-day.jpg?");

/***/ }),

/***/ "./src/assets/thunder-night.jpg":
/*!**************************************!*\
  !*** ./src/assets/thunder-night.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0597e9396bc37456d4c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/thunder-night.jpg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;