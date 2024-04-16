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

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./scripts/products.js\");\n\n//Si miramos index.html, o cualquier html, el último script del body\n//es <script src=\"./dist/bundle.js\"></script>\n//originalmente el script dirigia a este archivo. Esta asi porque\n//modularice la información, es decir. Para que no quede un choclo\n//largo de js, dividi la información entre funciones que va a usar \n//la página (en app.js) e información que va a renderizar la página\n//(en products.js). Acá esta toda la funcionalidad que tenemos hecha\n//hasta el momento. Primero, importa información de 'products.js', \n//es la funcion constructora Product y el array de objetos donde vamos\n//a cargar la ropa. Eso se los explico en el otro archivo, pero el import\n//que esta arriba trae esa información y la utiliza en el siguiente\n//código.\n\n//Lo que se hace en general con JS es manipular el DOM. El nombre DOM \n//proviene de sus siglas en ingles de 'Document Object Model'. Cuando \n//un navegador carga una página web,  crea una estructura de árbol \n//(el DOM), pensemos que el DOM es un modelo de la página en forma de\n//objetos. JavaScript no sabe cómo trabajar con HTML, pero sí con \n//objetos. Por lo tanto, cada elemento html que esté en el dom, \n//podremos usarlo como un objeto, que tendrá sus propiedades y métodos.\n\n//Lo hice de esta manera porque quería una función que me creara un\n//contenedor por cada new Product que agregue al array que se encuentra\n//en 'products.js'. Así, de esta manera, en vez de crear en el HTML\n//algo como\n\n//<main class=\"main\">\n//<div class=\"main-title\">\n//<h1 class=\"inicio\">Mujer</h1>\n//</div>\n//<div class=\"main-body\">\n//<div class=\"filter\">Filtrar</div>\n//<div class=\"display\">\n//   <div class=\"shoeDiv\">\n//      <div class='imageContainer'>\n//         <img class='frontImage' src='(el correspondiente de cada producto)'>\n//         <img class='sideImage' src='(el correspondiente de cada producto)'>\n//        </div>\n//      <div class='lilDisplay'>\n//         Name\n//         <br>\n//         Price\n//      </div>\n//   </div>\n//</div>\n//</div>\n//</main>\n\n//por cada producto, usamos esto de molde y que lo renderice el navegador.\n//Entonces, como JS no entiende la etiqueta div, lo primero que tengo\n//que hacer es guardarla en una constante. \n//document.querySelector() Busca en el html lo que sea que tenga clase\n//'display' y lo guarda en una constante. De ahora en más, no voy a\n//referirme al div class='display' del HTML como 'display' sino como\n//shoeContainer.\n\nvar shoeContainer = document.querySelector('.display');\n\n//Ahora voy a crear la funcion que quería, la que está abajo dice\n//'Por cada' (forEach) 'shoe de myStuff' (recordemos que myStuff viene\n//desde products.js), 'quiero que haga tal cosa'\n_products__WEBPACK_IMPORTED_MODULE_0__.myStuff.forEach(function (shoe) {\n  //aca esta usando una callback. Le dice, verifica que sea un zapato\n  //si es un zapato, entonces hace esto:\n\n  //crea un div, lo guarda en la constante shoeDiv y le agrega la \n  //clase 'shoeDiv'. Esto es importante para poder seleccionarlo en \n  //el CSS y darle estilo.\n  var shoeDiv = document.createElement('div');\n  shoeDiv.classList.add('shoeDiv');\n\n  //crea un div, lo guarda en la constante imageContainer y le agrega \n  //la clase 'imageContainer'.\n  var imageContainer = document.createElement('div');\n  imageContainer.classList.add('imageContainer');\n\n  //crea una etiqueta img, lo guarda en la constante frontImage y le \n  //agrega la clase 'imageContainer'. Ahora, como frontImage es una\n  //constante, le sobreescribe el valor src. ¿qué valor le pone?\n  //el que traemos de shoe.frontImage. ¿quién es shoe? es la verificación\n  //que le pedí al comienzo de la funcion. Yo le dije 'Por cada shoe\n  //de myStuff, si es shoe entonces hace esto:' Entonces, la funcion\n  //va a buscar a myStuff, que esta en el archivo 'products.js' y es \n  //un array de objetos shoe. Ahi va a seleccionar la propiedad frontImage\n  //y la va a guardar en mi constante frontImage\n  var frontImage = document.createElement('img');\n  frontImage.classList.add('frontImage');\n  frontImage.src = shoe.frontImage;\n\n  //crea una etiqueta img, lo guarda en la constante frontImage y le\n  //agrega la clase 'sideImage'. Luego, hace lo mismo que en el comando\n  //anterior, guarda en mi constante sideImage la información \n  //contenida en shoe.sideImage\n  var sideImage = document.createElement('img');\n  sideImage.classList.add('sideImage');\n  sideImage.src = shoe.sideImage;\n\n  //crea un div, lo guarda en la constante lilDisplay y le agrega\n  //la clase 'lilDisplay'\n  var lilDisplay = document.createElement('div');\n  lilDisplay.classList.add('lilDisplay');\n\n  //crea un texto, lo guarda en la constante shoeName y le pide\n  //que escriba lo que recupera de shoe.name. Nuevamente, shoe\n  //viene del array myStuff. Busca la propiedad name, copia el\n  //valor y lo pega en la constante shoeName. Hace lo mismo para\n  //shoePrice\n  var shoeName = document.createTextNode(shoe.name);\n  var shoePrice = document.createTextNode(shoe.price);\n\n  //Hasta el momento, solo habíamos creado todos estos elementos\n  //y constantes, todos los div, img, textos, pero no 'estan' en \n  //ningun lugar. Si quisieramos 'dibujar' lo que tiene el DOM\n  //no veriamos la estructura del HTML, solo elementos vacios volando\n  //por ahí. Por eso, ahora usamos la funcion appendChild() que lo\n  //que nos permite hacer es relacionar a nuestros elementos.\n  //en esencia, hace \n  //padre.appendChild(hijo)\n  //y cuando lo renderiza se vería como:\n  //<padre>\n  //   <hijo></hijo>\n  //</padre>\n\n  //Entonces, en la siguiente linea de codigo hace:\n  //agrega al texto shoeName como hijo de lilDisplay\n  //a lilDisplay le agrega un elemento br (que es salto de página)\n  //agrega al texto shoePrice como hijo de lilDisplay\n  lilDisplay.appendChild(shoeName);\n  lilDisplay.appendChild(document.createElement('br'));\n  lilDisplay.appendChild(shoePrice);\n  //y esto se 'vería' como:\n  //      <div class='lilDisplay'>\n  //         Name\n  //         <br>\n  //         Price\n  //      </div>\n\n  //Ahora agrega como hijos de imageContainer a frontImage y sideImage\n  imageContainer.appendChild(frontImage);\n  imageContainer.appendChild(sideImage);\n  //y esto se 'vería' como:\n  //<div class='imageContainer'>\n  //    <img class='frontImage' src='(el correspondiente de cada producto)'>\n  //    <img class='sideImage' src='(el correspondiente de cada producto)'>\n  //</div>\n\n  //Agrega como hijos de shoeDiv a imageContainer y lilDisplay\n  shoeDiv.appendChild(imageContainer);\n  shoeDiv.appendChild(lilDisplay);\n  //para que se 'vea' como:\n  //   <div class=\"shoeDiv\">\n  //      <div class='imageContainer'>\n  //         <img class='frontImage' src='(el correspondiente de cada producto)'>\n  //         <img class='sideImage' src='(el correspondiente de cada producto)'>\n  //        </div>\n  //      <div class='lilDisplay'>\n  //         Name\n  //         <br>\n  //         Price\n  //      </div>\n  //   </div>\n\n  //por último, agrega como hijo de shoeContainer a shoeDiv \n  shoeContainer.appendChild(shoeDiv);\n  //Recordemos que shoeContainer es la constante que representa a display\n\n  //Por último, agregué una función en la que todavía estoy trabajando.\n  //me va a llevar tiempo para que quede bien. Lo que hace es \n  //redirigir a un HTML local llamado template.html. \n  //Esta función se la agregué a cada contenedor 'shoeDiv', \n  //el addEventListener se queda 'atento' a que cada vez que clickeen \n  //ese contenedor, ejecute esta funcion. El tema es que como \n  //template.html es local, cuando lo intenten hacer les va a tirar \n  //error pues necesitan configurar node.js para que les \"cree\" \n  //momentaneamente un servidor con todos sus archivos locales. Así \n  //la funcion Redirect() podrá ejecutarse.\n  //Este arreglo sería momentaneo, porque una vez que el proyecto se\n  //suba a algun servidor, nuestros archivos locales ya no serían\n  //más locales y Redirect() funcionaría sin problemas.\n  //La idea de hacer esto es porque, así como no quería crear un contenedor\n  //'shoeDiv' por cada producto que esté en la página, tampoco quiero crear\n  //una página.html donde se pueda ver el detalle del producto, agregar al carrito\n  //calcular envio, etc. Por lo tanto, planeo hacer una sola página (que sería\n  //template.html) que renderice las propiedades del ultimo producto clickeado.\n  shoeDiv.addEventListener(\"click\", function () {\n    Redirect();\n  });\n});\nfunction Redirect() {\n  window.location.href = \"http://192.168.1.103:8080/tab-template.html\";\n}\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/products.js":
/*!*****************************!*\
  !*** ./scripts/products.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: () => (/* binding */ Product),\n/* harmony export */   myStuff: () => (/* binding */ myStuff)\n/* harmony export */ });\nfunction Product(frontImage, sideImage, name, type, price, variations) {\n  this.frontImage = frontImage;\n  this.sideImage = sideImage;\n  this.name = name;\n  this.type = type;\n  this.price = price;\n  this.variations = variations;\n}\nvar myStuff = [new Product('../static/img/01 front.avif', '../static/img/01 side.avif', 'Zapatillas Gazelle', 'Urbanos', '$183.999', [{\n  size: 37,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 37,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'gray',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'green',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'gray',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'green',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'white',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/02 front.webp', '../static/img/02 side.webp', 'Sandalias Modare', 'Zapatos', '$12.000', [{\n  size: 37,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'brown',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'brown',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'brown',\n  availability: 'disponible'\n}]), new Product('../static/img/03 front.avif', '../static/img/03 side.avif', 'Zapatillas Rapidmove ADV', 'Deportivos', '$154.999', [{\n  size: 37,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 37,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 38,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 38,\n  color: 'red',\n  availability: 'disponible'\n}, {\n  size: 39,\n  color: 'lime',\n  availability: 'fuera de stock'\n}, {\n  size: 39,\n  color: 'red',\n  availability: 'fuera de stock'\n}, {\n  size: 40,\n  color: 'lime',\n  availability: 'disponible'\n}, {\n  size: 40,\n  color: 'red',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/04 front.webp', '../static/img/04 side.webp', 'Remerón Tropical', 'Indumentaria', '$7.299,00', [{\n  size: 'S',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'S',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'M',\n  color: 'white',\n  availability: 'fuera de stock'\n}, {\n  size: 'M',\n  color: 'black',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'white',\n  availability: 'disponible'\n}, {\n  size: 'L',\n  color: 'black',\n  availability: 'fuera de stock'\n}]), new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [{\n  size: 37,\n  color: 'black',\n  availability: 'disponible'\n}])];\n\n//Esta parte es importante que la lean porque aquí va a ser donde cada\n//uno cargue los productos que van a aparecer en la página. La primera\n//parte es una funcion constructora. Piensenla como un molde, yo le estoy\n//pidiendo 'creame el objeto Product, y quiero que tenga un frontImage,\n//sideImage, name, type, price y variations'.\n//Las variaciones las puse así porque al principio las habia puesto como\n//un array dentro del objeto, por ej, tenia\n//new Product('img1', 'img2', 'zapatillas Gazelle', 'zapatillas', '$123', '[37, 38, 39, 40]', '[blanco, gris, verde]', '[fuera de stock, disponible]')\n//Pero me costaba mucho elegir qué opcion queria que estuviera disponible o no\n//De esta manera, como son pocos productos y solo de prueba, deje algunos\n//para que se visualice la idea, y sea más facil de seleccionar. \n//Cambien y modifiquen a gusto\n//La segunda parte es un array de objetos. Esto imitaría la api que no\n//tenemos y que me parece medio al pedo hacer porque serían pocos productos.\n//aca es donde tienen que subir cada producto que quieran que este en \n//la pagina. Las imagenes las guarde en la carpeta ./static/img \n\n//Una vez que carguen sus productos, es imporante que abran\n//la consola y tipeen\n//npx webpack\n//esto lo que hace es actualizar el archivo bundle con sus nuevos productos,\n//, que es la info que consume el navegador. Si no lo hacen, \n//solo van a ver los que les envio yo. Tambien van a ver que en\n//cualquier tab va a cargar todos los productos disponibles. No se\n//preocupen, solo hay que modificar un poco la funcion que esta \n//en 'products.js' para indicarle qué debe reenderizar dependiendo\n//si es para niños, mujeres, hombres, descuento, etc.\n\n//PD: Notarán que no todas las propiedades estan siendo utilizadas\n//en app.js. Eso es porque quise dejar el molde hecho para\n//poder trabajar luego la funcionalidad, si asi lo quisieramos.\n//Si no se usa, no pasa nada\n//PD 2: Al trabajar con objetos, si algo no les funciona, es porque\n//probablemente olvidaron una coma. JS es muy fifí\n\n//# sourceURL=webpack:///./scripts/products.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;