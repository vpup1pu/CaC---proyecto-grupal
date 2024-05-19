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

/***/ "./scripts/functions.js":
/*!******************************!*\
  !*** ./scripts/functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display),\n/* harmony export */   displayContainer: () => (/* binding */ displayContainer),\n/* harmony export */   filter: () => (/* binding */ filter),\n/* harmony export */   filteredBtn: () => (/* binding */ filteredBtn),\n/* harmony export */   variety: () => (/* binding */ variety)\n/* harmony export */ });\nfunction displayContainer(productsArray, currentContainer) {\n  currentContainer.innerHTML = \"\";\n  productsArray.forEach(function (shoe) {\n    var shoeDiv = document.createElement('div');\n    shoeDiv.classList.add('shoeDiv');\n    var imageContainer = document.createElement('div');\n    imageContainer.classList.add('imageContainer');\n    var frontImage = document.createElement('img');\n    frontImage.classList.add('frontImage');\n    frontImage.src = shoe.frontImage;\n    var sideImage = document.createElement('img');\n    sideImage.classList.add('sideImage');\n    sideImage.src = shoe.sideImage;\n    var lilDisplay = document.createElement('div');\n    lilDisplay.classList.add('lilDisplay');\n    var shoeName = document.createTextNode(shoe.name);\n    var priceCont = document.createElement('div');\n    priceCont.classList.add('priceCont');\n    var shoePrice = document.createElement('span');\n    shoePrice.innerHTML = \"$\".concat(shoe.price.toLocaleString());\n    priceCont.appendChild(shoePrice);\n    lilDisplay.appendChild(shoeName);\n    lilDisplay.appendChild(document.createElement('br'));\n    lilDisplay.appendChild(priceCont);\n    imageContainer.appendChild(frontImage);\n    imageContainer.appendChild(sideImage);\n    shoeDiv.appendChild(imageContainer);\n    shoeDiv.appendChild(lilDisplay);\n    onSale(shoe, shoePrice, 20, priceCont, imageContainer);\n\n    //Hace lo mismo que la otra función, para entenderla, leerlo en el primer commit (el README tiene el link)\n    //La única diferencia en cada archivo js es a donde lo apendea. Es decir, en qué contenedor padre le crea\n    //el hijo shoeDiv.\n    currentContainer.appendChild(shoeDiv);\n\n    //Aca es donde viene el nuevo cambio. Lo de abajo dice \"me quedo atento \n    //a que cada vez que cliqueen shoeDiv, ejecuten lo siguiente: \"\n    shoeDiv.addEventListener(\"click\", function () {\n      //Primero le pido que clone el contenedor imageContainer y toda su \n      //descendencia, y lo guarde en una variable llamada clone_imageContainer\n      var clone_imageContainer = imageContainer.cloneNode(true);\n      clone_imageContainer.classList.add('imageContainer'); //El clon de imageContainer no tiene clase, por eso le asigno la misma que tenía la original. Aca se reutiliza todo.\n      var clone_priceCont = priceCont.cloneNode(true);\n      clone_priceCont.classList.add('priceCont');\n      Display(clone_imageContainer, shoe.name, clone_priceCont, currentContainer); //Esta es la función que se encuentra en products.js\n      //Recibe como parámetro el clon clone_imageContainer, con todos sus descendientes\n      //y clase '.imageContainer', recibe acceso a la propiedad name de shoe(shoe.name),\n      //recibe acceso a la propiedad price de shoe(shoe.price), y al contenedor\n      //de este html, containerMujer. Para entender qué hace, mirar junto con\n      //products.js. En resumen, ejecuta el dialog por cada producto.\n    });\n  });\n}\nfunction onSale(product, priceSpan, discount, containerText, containerImg) {\n  if (product.sale()) {\n    var saleTag = document.createElement('span');\n    saleTag.innerHTML = \"\".concat(discount, \"% OFF\");\n    saleTag.classList.add('ribbon');\n    containerImg.appendChild(saleTag);\n    priceSpan.classList.add('priceDisc');\n    var newPrice = document.createElement('span');\n    newPrice.classList.add('newPrice');\n    var discountedPrice = (100 - discount) * product.price / 100;\n    newPrice.innerHTML = \"$\".concat(discountedPrice.toLocaleString(undefined, {\n      minimumFractionDigits: 2,\n      maximumFractionDigits: 2\n    }));\n    containerText.appendChild(newPrice);\n  }\n}\n\n// función que se utilizará en todas las páginas\n// Lo que hace es crear un dialog, una ventanita que se despliega solo en el HTML donde\n// Nos encontremos parados. Seguramente se eliminará cuando nos toque hacer la parte\n//del backend. La función Display tiene como parámetros a imageContainer, name, price, \n//y currentContainer, y los argumentos los recibe en los otros js.\nfunction Display(imageContainer, name, price, currentContainer) {\n  var dialog = document.createElement('dialog'); //Crea al elemento dialog\n  dialog.classList.add('dialog'); //Le agrega una clase para darle estilo, '.dialog'\n  currentContainer.appendChild(dialog); //currentContainer recibirá como argumento, por ej en la pestaña mujer, a containerMujer, pues es el container al que se le va a apendear este dialog. Es necesario apendearlo antes de darle instrucciones, porque lo de abajo es un método de dialog, y no lo puede ejecutar si no existe.\n  dialog.showModal(); //método de dialog, ahora funciona porque existe en nuestro DOM\n  var closeBtn = document.createElement('button'); //Le crea un botón para cerrar esta pestaña\n  closeBtn.classList.add('closeBtn'); //Le asigna un estilo\n  closeBtn.innerHTML = 'Cerrar'; //Le crea el texto, para que se \"vea\" así: <button class='closeBtn'>Cerrar</button>\n  closeBtn.addEventListener(\"click\", function () {\n    dialog.close();\n  }); //Funcion para que, cuando se cliquee el boton, cierre el dialog.\n\n  var closeContainer = document.createElement('div'); //Cree este contenedor para poder darle estilo al botón en el CSS.\n  closeContainer.classList.add('closeContainer');\n  closeContainer.appendChild(closeBtn); //El botón queda dentro del contenedor, algo asi como <div class='closeContainer'><button class='closeBtn'>Cerrar</button></div>\n  dialog.appendChild(closeContainer); //Ahora el contenedor es parte del dialog.\n\n  var displayContainer = document.createElement('div'); //En este contenedor es donde se va a renderizar la información del producto\n  displayContainer.classList.add('displayContainer');\n  displayContainer.appendChild(imageContainer); //Va a apendear algo que va a entrar por argumento, como no quise crear un contenedor nuevo para las imágenes, clone el que tenemos en la otra función y es el que va a entrar acá\n\n  var rightContainer = document.createElement('div'); //Es otro container donde va a renderizar la info restante. Nombre, precio, botones para agregar o quitar del carrito, y agregar al carrito\n  rightContainer.classList.add('rightContainer');\n  //Aca esta la info que va a renderizar\n  var description = document.createElement('h1');\n  description.textContent = name; //Guarda el argumento que reciba en un h1\n  rightContainer.appendChild(description); //Se lo agrega a rightContainer\n  rightContainer.appendChild(price); //Se lo agrega a rightContainer\n  //Aca la creacion de los botones y sus contenedores\n  var shoppingCart = document.createElement('div');\n  shoppingCart.classList.add('shoppingCart');\n  var quantity = document.createElement('div'); //contenedor de los botones para agregar/quitar cantidad\n  quantity.classList.add('quantity');\n  var plusBtn = document.createElement('button'); //botón para agregar\n  plusBtn.classList.add('plusBtn');\n  var plusFA = document.createElement('i'); //para agregarle el estilo desde fontawesome\n  plusFA.classList.add('fas', 'fa-plus'); //para agregarle el estilo desde fontawesome\n  var counter = document.createElement('input'); //donde se va a contar cuantos productos se agregan/quitan\n  counter.classList.add('counter');\n  counter.type = \"number\";\n  counter.name = \"name\";\n  counter.value = \"0\";\n  var minusBtn = document.createElement('button'); //boton para quitar productos\n  minusBtn.classList.add('minusBtn');\n  var minusFA = document.createElement('i'); //para agregarle el estilo desde fontawesome\n  minusFA.classList.add('fas', 'fa-minus'); //para agregarle el estilo desde fontawesome\n  var cartBtn = document.createElement('button'); //boton par agregar al carrito\n  cartBtn.classList.add('cartBtn');\n  var cartFA = document.createElement('i'); //para agregarle el estilo desde fontawesome\n  cartFA.classList.add('fas', 'fa-shopping-cart'); //para agregarle el estilo desde fontawesome\n  cartBtn.innerHTML = ' Agregar al carrito'; //Leyenda del botón\n  //funcionalidad de los botones\n  minusBtn.addEventListener(\"click\", function () {\n    if (parseInt(counter.value) > 0) {\n      counter.value = parseInt(counter.value) - 1;\n    }\n  });\n  plusBtn.addEventListener(\"click\", function () {\n    var maxValue = 101;\n    if (parseInt(counter.value) < maxValue) {\n      counter.value = parseInt(counter.value) + 1;\n    }\n  });\n  //Apendeo de los botones\n  plusBtn.appendChild(plusFA); //Le agregamos el <i class='..'> para que tenga el icono\n  minusBtn.appendChild(minusFA); //Le agregamos el <i class='..'> para que tenga el icono\n  cartBtn.appendChild(cartFA); //Le agregamos el <i class='..'> para que tenga el icono\n  //metemos los botones y el contador en un contenedor para poder darle estilo\n  quantity.appendChild(plusBtn);\n  quantity.appendChild(counter);\n  quantity.appendChild(minusBtn);\n  //metemos el contenedor de arriba y elboton del carrito en otro contenedor para darle estilo:\n  shoppingCart.appendChild(quantity);\n  shoppingCart.appendChild(cartBtn);\n  //Finalmente, lo agregamos al contenedor de la información de productos:\n  rightContainer.appendChild(shoppingCart);\n\n  //Y ahora, todo lo que se encuentra en el contenedor rightContainer se lo agregamos al contenedor\n  //donde vemos toda la información:\n  displayContainer.appendChild(rightContainer);\n  //Por último, este contenedor se lo agregamos al dialog:\n  dialog.appendChild(displayContainer);\n}\n\n//Para visualizarlo, en el DOM se va a crear algo así:\n//<dialog>\n//   <div class=\"closeContainer\">\n//       <button class=\"closeBtn\">Cerrar</button> <-Es el botón que va a cerrar el dialog\n//   </div>\n//   <div class=\"displayContainer\">\n//       (Acá apendea algo que le llega por parámetro. No le agrega clase ni nada, va a recibir la instruccion cuando la funcion se ejecute)\n//       <div class=\"rightContainer\">\n//           <h1>(Recibe un nombre por parámetro)</h1>\n//           <h3>(Recibe un precio por parámetro)</h3>\n//           <div class=\"shoppingCart\">\n//               <div class=\"quantity\">\n//                   <button class=\"plusBtn\">\n//                      <i class=\"fas fa-plus\"></i>\n//                   </button>\n//                   <input class=\"counter\" type=\"text\" name=\"name\" value=\"0\">\n//                   <button class=\"minusBtn\">\n//                      <i class=\"fas fa-minus\"></i>\n//                   </button>\n//               </div>\n//               <button class=\"cartBtn\">\n//                   <i class=\"fas fa-shopping-cart\"></i> Agregar al carrito\n//               </button>\n//           </div>\n//       </div>\n//   </div>\n//</dialog>\n\nfunction filter(typeVariation, currentContainer) {\n  var filteredContainer = currentContainer.slice();\n  for (var i = filteredContainer.length - 1; i >= 0; i--) {\n    if (filteredContainer[i].type !== typeVariation) {\n      filteredContainer.splice(i, 1);\n    }\n  }\n  return filteredContainer;\n}\n;\nfunction filteredBtn(arrayBtn, typeVariation, arrayCurrent, currentContainer) {\n  arrayBtn.forEach(function (btn) {\n    btn.addEventListener(\"click\", function () {\n      var filteredArray = filter(typeVariation, arrayCurrent.slice());\n      displayContainer(filteredArray, currentContainer);\n    });\n  });\n}\nfunction variety() {}\n;\n\n//# sourceURL=webpack:///./scripts/functions.js?");

/***/ }),

/***/ "./scripts/hombre.js":
/*!***************************!*\
  !*** ./scripts/hombre.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./scripts/products.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./scripts/functions.js\");\n\n\n//La deje armada para probar, pero tanto esta como niño.js van a funcionar en sus respectivas tab,\n//cuando cada integrante suba su pestaña correspondiente. Seguramente se deban modificar algunos nombres, como los\n//div pero es algo que no altera la funcionalidad.\nvar containerHombre = document.querySelector('.displayHombre');\nvar urbBtns = document.querySelectorAll('.urbanos-h');\nvar zapBtns = document.querySelectorAll('.zapatos-h');\nvar depBtns = document.querySelectorAll('.deportivos-h');\nvar indBtns = document.querySelectorAll('.indumentaria-h');\nvar descBtns = document.querySelectorAll('.descuentos-h');\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayContainer)(_products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.filteredBtn)(urbBtns, 'Urbanos', _products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.filteredBtn)(zapBtns, 'Zapatos', _products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.filteredBtn)(depBtns, 'Deportivos', _products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.filteredBtn)(indBtns, 'Indumentaria', _products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n(0,_functions__WEBPACK_IMPORTED_MODULE_1__.filteredBtn)(descBtns, 'Descuentos', _products__WEBPACK_IMPORTED_MODULE_0__.stuffHombre, containerHombre);\n\n//# sourceURL=webpack:///./scripts/hombre.js?");

/***/ }),

/***/ "./scripts/products.js":
/*!*****************************!*\
  !*** ./scripts/products.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: () => (/* binding */ Product),\n/* harmony export */   stock: () => (/* binding */ stock),\n/* harmony export */   stuffHombre: () => (/* binding */ stuffHombre),\n/* harmony export */   stuffMujer: () => (/* binding */ stuffMujer),\n/* harmony export */   \"stuffNiño\": () => (/* binding */ stuffNiño)\n/* harmony export */ });\nfunction Product(frontImage, sideImage, name, type, price, variations) {\n  this.frontImage = frontImage;\n  this.sideImage = sideImage;\n  this.name = name;\n  this.type = type;\n  this.price = price;\n  this.variations = variations;\n  this.outOfStock = function () {\n    for (var i = 0; i < this.variations.length; i++) {\n      var _stock = false;\n      if (this.variations[i].availability === 'disponible') {\n        _stock = true;\n      }\n      return _stock;\n    }\n  };\n  this.sale = function () {\n    var sale = false;\n    if (this.type === 'Descuentos') {\n      sale = true;\n    }\n    return sale;\n  };\n}\n;\nvar stuffMujer = [new Product(\"./static/img/01front.avif\", \"./static/img/01side.avif\", 'Zapatillas Gazelle', 'Urbanos', 183999, [{\n  size: 37,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 37,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'gray',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'white',\n  availability: 'fuera de stock'\n}]), new Product(\"./static/img/02front.webp\", \"./static/img/02side.webp\", 'Sandalias Modare', 'Zapatos', 12000, [{\n  size: 37,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'brown',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'brown',\n  availability: 'disponible'\n}]), new Product(\"./static/img/03front.avif\", \"./static/img/03side.avif\", 'Zapatillas Rapidmove ADV', 'Deportivos', 154999, [{\n  size: 37,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 38,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'red',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'red',\n  availability: 'fuera de stock'\n}]), new Product(\"./static/img/04front.webp\", \"./static/img/04side.webp\", 'Remerón Tropical', 'Indumentaria', 7299, [{\n  size: 'S',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'S',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'M',\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 'M',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'black',\n  availability: 'fuera de stock'\n}]), new Product(\"./static/img/05front.webp\", \"./static/img/05side.webp\", 'Botitas Jaguar', 'Descuentos', 9899, [{\n  size: 37,\n  color: 'black',\n  availability: 'disponible'\n}])];\n\n//Aqui es donde cada uno va a agregar lo que corresponda.\n\nvar stuffHombre = [];\nvar stuffNiño = [new Product(\"./static/img/1-Cost.jpg\", \"./static/img/1-Frent.jpg\", \"Zapatillas Topper\", \"Urbanos\", 10000, [{\n  size: 8,\n  color: \"white\",\n  availability: \"disponible\"\n}]), new Product(\"./static/img/002side.jpg\", \"./static/img/002front.jpg\", \"Zapatos Kickers\", \"Zapatos\", 13000, [{\n  size: 8,\n  color: \"white\",\n  availability: \"disponible\"\n}]), new Product(\"./static/img/006side.jpg\", \"./static/img/006front.jpg\", \"Botines Warskin\", \"Deportivos\", 54000, [{\n  size: 8,\n  color: \"white\",\n  availability: \"disponible\"\n}]), new Product(\"./static/img/005side.jpg\", \"./static/img/005front.jpg\", \"Remera Head\", \"Indumentaria\", 15600, [{\n  size: 8,\n  color: \"white\",\n  availability: \"disponible\"\n}]), new Product(\"./static/img/004side.jpg\", \"./static/img/004front.jpg\", \"zapato\", \"Descuentos\", 23000, [{\n  size: 8,\n  color: \"white\",\n  availability: \"disponible\"\n}])];\n\n//este array contiene todo el stock, se utiliza unicamente en app.js lo cree pensando en filtrar objetos en descuento.\nvar stock = [stuffMujer, stuffHombre, stuffNiño];\n\n//# sourceURL=webpack:///./scripts/products.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/hombre.js");
/******/ 	
/******/ })()
;