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

/***/ "./scripts/mujer.js":
/*!**************************!*\
  !*** ./scripts/mujer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./scripts/products.js\");\n\nvar containerMujer = document.querySelector('.displayMujer');\n_products__WEBPACK_IMPORTED_MODULE_0__.stuffMujer.forEach(function (shoe) {\n  var shoeDiv = document.createElement('div');\n  shoeDiv.classList.add('shoeDiv');\n  var imageContainer = document.createElement('div');\n  imageContainer.classList.add('imageContainer');\n  var frontImage = document.createElement('img');\n  frontImage.classList.add('frontImage');\n  frontImage.src = shoe.frontImage;\n  var sideImage = document.createElement('img');\n  sideImage.classList.add('sideImage');\n  sideImage.src = shoe.sideImage;\n  var lilDisplay = document.createElement('div');\n  lilDisplay.classList.add('lilDisplay');\n  var shoeName = document.createTextNode(shoe.name);\n  var shoePrice = document.createTextNode(shoe.price);\n  lilDisplay.appendChild(shoeName);\n  lilDisplay.appendChild(document.createElement('br'));\n  lilDisplay.appendChild(shoePrice);\n  imageContainer.appendChild(frontImage);\n  imageContainer.appendChild(sideImage);\n  shoeDiv.appendChild(imageContainer);\n  shoeDiv.appendChild(lilDisplay);\n  containerMujer.appendChild(shoeDiv);\n  shoeDiv.addEventListener(\"click\", function () {\n    (0,_products__WEBPACK_IMPORTED_MODULE_0__.Redirect)();\n  });\n});\n\n//# sourceURL=webpack:///./scripts/mujer.js?");

/***/ }),

/***/ "./scripts/products.js":
/*!*****************************!*\
  !*** ./scripts/products.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: () => (/* binding */ Product),\n/* harmony export */   Redirect: () => (/* binding */ Redirect),\n/* harmony export */   stock: () => (/* binding */ stock),\n/* harmony export */   stuffHombre: () => (/* binding */ stuffHombre),\n/* harmony export */   stuffMujer: () => (/* binding */ stuffMujer),\n/* harmony export */   \"stuffNiño\": () => (/* binding */ stuffNiño)\n/* harmony export */ });\nfunction Product(frontImage, sideImage, name, type, price, variations) {\n  this.frontImage = frontImage;\n  this.sideImage = sideImage;\n  this.name = name;\n  this.type = type;\n  this.price = price;\n  this.variations = variations;\n}\n;\nvar stuffMujer = [new Product('../static/img/01 front.avif', '../static/img/01 side.avif', 'Zapatillas Gazelle', 'Urbanos', '$183.999', [{\n  size: 37,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 37,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'gray',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'white',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/02 front.webp', '../static/img/02 side.webp', 'Sandalias Modare', 'Zapatos', '$12.000', [{\n  size: 37,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'brown',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'brown',\n  availability: 'disponible'\n}]), new Product('../static/img/03 front.avif', '../static/img/03 side.avif', 'Zapatillas Rapidmove ADV', 'Deportivos', '$154.999', [{\n  size: 37,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 38,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'red',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'red',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/04 front.webp', '../static/img/04 side.webp', 'Remerón Tropical', 'Indumentaria', '$7.299,00', [{\n  size: 'S',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'S',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'M',\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 'M',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'black',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [{\n  size: 37,\n  color: 'black',\n  availability: 'disponible'\n}])];\n\n//Solo le cargue un producto para poder visualizarlo en el código, aqui es donde \n//cada uno va a agregar lo que corresponda.\n\nvar stuffHombre = [new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [{\n  size: 37,\n  color: 'black',\n  availability: 'disponible'\n}])];\nvar stuffNiño = [new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [{\n  size: 37,\n  color: 'black',\n  availability: 'disponible'\n}])];\nvar stock = [stuffMujer, stuffHombre, stuffNiño];\n\n//función que se utilizará en todas las páginas\nfunction Redirect() {\n  window.location.href = \"http://192.168.1.103:8080/tab-template.html\";\n}\n\n//# sourceURL=webpack:///./scripts/products.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/mujer.js");
/******/ 	
/******/ })()
;