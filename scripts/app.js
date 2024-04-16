import { myStuff } from "./products";
//Si miramos index.html, o cualquier html, el último script del body
//es <script src="./dist/bundle.js"></script>
//originalmente el script dirigia a este archivo. Esta asi porque
//modularice la información, es decir. Para que no quede un choclo
//largo de js, dividi la información entre funciones que va a usar 
//la página (en app.js) e información que va a renderizar la página
//(en products.js). Acá esta toda la funcionalidad que tenemos hecha
//hasta el momento. Primero, importa información de 'products.js', 
//es la funcion constructora Product y el array de objetos donde vamos
//a cargar la ropa. Eso se los explico en el otro archivo, pero el import
//que esta arriba trae esa información y la utiliza en el siguiente
//código.

//Lo que se hace en general con JS es manipular el DOM. El nombre DOM 
//proviene de sus siglas en ingles de 'Document Object Model'. Cuando 
//un navegador carga una página web,  crea una estructura de árbol 
//(el DOM), pensemos que el DOM es un modelo de la página en forma de
//objetos. JavaScript no sabe cómo trabajar con HTML, pero sí con 
//objetos. Por lo tanto, cada elemento html que esté en el dom, 
//podremos usarlo como un objeto, que tendrá sus propiedades y métodos.

//Lo hice de esta manera porque quería una función que me creara un
//contenedor por cada new Product que agregue al array que se encuentra
//en 'products.js'. Así, de esta manera, en vez de crear en el HTML
//algo como

//<main class="main">
//<div class="main-title">
//<h1 class="inicio">Mujer</h1>
//</div>
//<div class="main-body">
//<div class="filter">Filtrar</div>
//<div class="display">
//   <div class="shoeDiv">
//      <div class='imageContainer'>
//         <img class='frontImage' src='(el correspondiente de cada producto)'>
//         <img class='sideImage' src='(el correspondiente de cada producto)'>
//        </div>
//      <div class='lilDisplay'>
//         Name
//         <br>
//         Price
//      </div>
//   </div>
//</div>
//</div>
//</main>

//por cada producto, usamos esto de molde y que lo renderice el navegador.
//Entonces, como JS no entiende la etiqueta div, lo primero que tengo
//que hacer es guardarla en una constante. 
//document.querySelector() Busca en el html lo que sea que tenga clase
//'display' y lo guarda en una constante. De ahora en más, no voy a
//referirme al div class='display' del HTML como 'display' sino como
//shoeContainer.

const shoeContainer = document.querySelector('.display');

//Ahora voy a crear la funcion que quería, la que está abajo dice
//'Por cada' (forEach) 'shoe de myStuff' (recordemos que myStuff viene
//desde products.js), 'quiero que haga tal cosa'
myStuff.forEach(shoe => {
    //aca esta usando una callback. Le dice, verifica que sea un zapato
    //si es un zapato, entonces hace esto:

    //crea un div, lo guarda en la constante shoeDiv y le agrega la 
    //clase 'shoeDiv'. Esto es importante para poder seleccionarlo en 
    //el CSS y darle estilo.
    const shoeDiv = document.createElement('div');
    shoeDiv.classList.add('shoeDiv');

    //crea un div, lo guarda en la constante imageContainer y le agrega 
    //la clase 'imageContainer'.
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    //crea una etiqueta img, lo guarda en la constante frontImage y le 
    //agrega la clase 'imageContainer'. Ahora, como frontImage es una
    //constante, le sobreescribe el valor src. ¿qué valor le pone?
    //el que traemos de shoe.frontImage. ¿quién es shoe? es la verificación
    //que le pedí al comienzo de la funcion. Yo le dije 'Por cada shoe
    //de myStuff, si es shoe entonces hace esto:' Entonces, la funcion
    //va a buscar a myStuff, que esta en el archivo 'products.js' y es 
    //un array de objetos shoe. Ahi va a seleccionar la propiedad frontImage
    //y la va a guardar en mi constante frontImage
    const frontImage = document.createElement('img');
    frontImage.classList.add('frontImage');
    frontImage.src = shoe.frontImage;

    //crea una etiqueta img, lo guarda en la constante frontImage y le
    //agrega la clase 'sideImage'. Luego, hace lo mismo que en el comando
    //anterior, guarda en mi constante sideImage la información 
    //contenida en shoe.sideImage
    const sideImage = document.createElement('img');
    sideImage.classList.add('sideImage');
    sideImage.src = shoe.sideImage;

    //crea un div, lo guarda en la constante lilDisplay y le agrega
    //la clase 'lilDisplay'
    const lilDisplay = document.createElement('div');
    lilDisplay.classList.add('lilDisplay');

    //crea un texto, lo guarda en la constante shoeName y le pide
    //que escriba lo que recupera de shoe.name. Nuevamente, shoe
    //viene del array myStuff. Busca la propiedad name, copia el
    //valor y lo pega en la constante shoeName. Hace lo mismo para
    //shoePrice
    const shoeName = document.createTextNode(shoe.name);
    const shoePrice = document.createTextNode(shoe.price);

    //Hasta el momento, solo habíamos creado todos estos elementos
    //y constantes, todos los div, img, textos, pero no 'estan' en 
    //ningun lugar. Si quisieramos 'dibujar' lo que tiene el DOM
    //no veriamos la estructura del HTML, solo elementos vacios volando
    //por ahí. Por eso, ahora usamos la funcion appendChild() que lo
    //que nos permite hacer es relacionar a nuestros elementos.
    //en esencia, hace 
    //padre.appendChild(hijo)
    //y cuando lo renderiza se vería como:
    //<padre>
    //   <hijo></hijo>
    //</padre>

    //Entonces, en la siguiente linea de codigo hace:
    //agrega al texto shoeName como hijo de lilDisplay
    //a lilDisplay le agrega un elemento br (que es salto de página)
    //agrega al texto shoePrice como hijo de lilDisplay
    lilDisplay.appendChild(shoeName);
    lilDisplay.appendChild(document.createElement('br'));
    lilDisplay.appendChild(shoePrice);
    //y esto se 'vería' como:
    //      <div class='lilDisplay'>
    //         Name
    //         <br>
    //         Price
    //      </div>

    //Ahora agrega como hijos de imageContainer a frontImage y sideImage
    imageContainer.appendChild(frontImage);
    imageContainer.appendChild(sideImage);
    //y esto se 'vería' como:
    //<div class='imageContainer'>
    //    <img class='frontImage' src='(el correspondiente de cada producto)'>
    //    <img class='sideImage' src='(el correspondiente de cada producto)'>
    //</div>

    //Agrega como hijos de shoeDiv a imageContainer y lilDisplay
    shoeDiv.appendChild(imageContainer);
    shoeDiv.appendChild(lilDisplay);
    //para que se 'vea' como:
    //   <div class="shoeDiv">
    //      <div class='imageContainer'>
    //         <img class='frontImage' src='(el correspondiente de cada producto)'>
    //         <img class='sideImage' src='(el correspondiente de cada producto)'>
    //        </div>
    //      <div class='lilDisplay'>
    //         Name
    //         <br>
    //         Price
    //      </div>
    //   </div>

    //por último, agrega como hijo de shoeContainer a shoeDiv 
    shoeContainer.appendChild(shoeDiv);
    //Recordemos que shoeContainer es la constante que representa a display

    //Por último, agregué una función en la que todavía estoy trabajando.
    //me va a llevar tiempo para que quede bien. Lo que hace es 
    //redirigir a un HTML local llamado template.html. 
    //Esta función se la agregué a cada contenedor 'shoeDiv', 
    //el addEventListener se queda 'atento' a que cada vez que clickeen 
    //ese contenedor, ejecute esta funcion. El tema es que como 
    //template.html es local, cuando lo intenten hacer les va a tirar 
    //error pues necesitan configurar node.js para que les "cree" 
    //momentaneamente un servidor con todos sus archivos locales. Así 
    //la funcion Redirect() podrá ejecutarse.
    //Este arreglo sería momentaneo, porque una vez que el proyecto se
    //suba a algun servidor, nuestros archivos locales ya no serían
    //más locales y Redirect() funcionaría sin problemas.
    //La idea de hacer esto es porque, así como no quería crear un contenedor
    //'shoeDiv' por cada producto que esté en la página, tampoco quiero crear
    //una página.html donde se pueda ver el detalle del producto, agregar al carrito
    //calcular envio, etc. Por lo tanto, planeo hacer una sola página (que sería
    //template.html) que renderice las propiedades del ultimo producto clickeado.
    shoeDiv.addEventListener("click", () => {
        Redirect();
    })
});
 
function Redirect() {
    window.location.href = "http://192.168.1.103:8080/tab-template.html";
}