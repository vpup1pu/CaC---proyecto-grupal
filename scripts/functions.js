export function displayContainer(productsArray, currentContainer){
    currentContainer.innerHTML = "";
    productsArray.forEach(shoe => {
        const shoeDiv = document.createElement('div');
        shoeDiv.classList.add('shoeDiv');
    
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
    
        const frontImage = document.createElement('img');
        frontImage.classList.add('frontImage');
        frontImage.src = shoe.frontImage;
    
        const sideImage = document.createElement('img');
        sideImage.classList.add('sideImage');
        sideImage.src = shoe.sideImage;
    
        const lilDisplay = document.createElement('div');
        lilDisplay.classList.add('lilDisplay');
    
        const shoeName = document.createTextNode(shoe.name);
        const priceCont = document.createElement('div');
        priceCont.classList.add('priceCont')
        const shoePrice = document.createElement('span');
        shoePrice.innerHTML = `$${shoe.price.toLocaleString()}`;
        priceCont.appendChild(shoePrice);
    
        lilDisplay.appendChild(shoeName);
        lilDisplay.appendChild(document.createElement('br'));
        lilDisplay.appendChild(priceCont);
        imageContainer.appendChild(frontImage);
        imageContainer.appendChild(sideImage);
    
        shoeDiv.appendChild(imageContainer);
        shoeDiv.appendChild(lilDisplay);

        onSale(shoe, shoePrice, shoe.discount, priceCont, imageContainer);
    
        currentContainer.appendChild(shoeDiv);
    
        shoeDiv.addEventListener("click", () => {
            let clone_imageContainer = imageContainer.cloneNode(true);
            clone_imageContainer.classList.add('imageContainer');
            let clone_priceCont = priceCont.cloneNode(true);
            clone_priceCont.classList.add('priceCont');
            Display(clone_imageContainer, shoe.name, clone_priceCont, currentContainer); 
        });
    });
}

function onSale(product, priceSpan, discount, containerText, containerImg){
    if(product.sale()){
        const saleTag = document.createElement('span');
        saleTag.innerHTML = `${discount}% OFF`;
        saleTag.classList.add('ribbon');
        containerImg.appendChild(saleTag);
        priceSpan.classList.add('priceDisc');
        const newPrice = document.createElement('span');
        newPrice.classList.add('newPrice');
        const discountedPrice = ((100 - discount) * (product.price))/100;
        newPrice.innerHTML = `$${discountedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`; 
        containerText.appendChild(newPrice);
    }
}

// función que se utilizará en todas las páginas
// Lo que hace es crear un dialog, una ventanita que se despliega solo en el HTML donde
// Nos encontremos parados. Seguramente se eliminará cuando nos toque hacer la parte
//del backend. La función Display tiene como parámetros a imageContainer, name, price, 
//y currentContainer, y los argumentos los recibe en los otros js.
export function Display(imageContainer, name, price, currentContainer) {
    const dialog = document.createElement('dialog'); //Crea al elemento dialog
    dialog.classList.add('dialog'); //Le agrega una clase para darle estilo, '.dialog'
    currentContainer.appendChild(dialog); //currentContainer recibirá como argumento, por ej en la pestaña mujer, a containerMujer, pues es el container al que se le va a apendear este dialog. Es necesario apendearlo antes de darle instrucciones, porque lo de abajo es un método de dialog, y no lo puede ejecutar si no existe.
    dialog.showModal();//método de dialog, ahora funciona porque existe en nuestro DOM
    const closeBtn = document.createElement('button'); //Le crea un botón para cerrar esta pestaña
    closeBtn.classList.add('closeBtn');//Le asigna un estilo
    closeBtn.innerHTML = 'Cerrar'; //Le crea el texto, para que se "vea" así: <button class='closeBtn'>Cerrar</button>
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });//Funcion para que, cuando se cliquee el boton, cierre el dialog.
    
    const closeContainer = document.createElement('div');//Cree este contenedor para poder darle estilo al botón en el CSS.
    closeContainer.classList.add('closeContainer');
    closeContainer.appendChild(closeBtn); //El botón queda dentro del contenedor, algo asi como <div class='closeContainer'><button class='closeBtn'>Cerrar</button></div>
    dialog.appendChild(closeContainer);//Ahora el contenedor es parte del dialog.

    const displayContainer = document.createElement('div');//En este contenedor es donde se va a renderizar la información del producto
    displayContainer.classList.add('displayContainer');

    displayContainer.appendChild(imageContainer);//Va a apendear algo que va a entrar por argumento, como no quise crear un contenedor nuevo para las imágenes, clone el que tenemos en la otra función y es el que va a entrar acá

    const rightContainer = document.createElement('div'); //Es otro container donde va a renderizar la info restante. Nombre, precio, botones para agregar o quitar del carrito, y agregar al carrito
    rightContainer.classList.add('rightContainer');
    //Aca esta la info que va a renderizar
    const description = document.createElement('h1');
    description.textContent  = name; //Guarda el argumento que reciba en un h1
    rightContainer.appendChild(description); //Se lo agrega a rightContainer
    rightContainer.appendChild(price); //Se lo agrega a rightContainer
    //Aca la creacion de los botones y sus contenedores
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shoppingCart');
    const quantity = document.createElement('div');//contenedor de los botones para agregar/quitar cantidad
    quantity.classList.add('quantity');
    const plusBtn = document.createElement('button');//botón para agregar
    plusBtn.classList.add('plusBtn');
    const plusFA = document.createElement('i');//para agregarle el estilo desde fontawesome
    plusFA.classList.add('fas', 'fa-plus'); //para agregarle el estilo desde fontawesome
    const counter = document.createElement('input'); //donde se va a contar cuantos productos se agregan/quitan
    counter.classList.add('counter');
    counter.type = "number";
    counter.name = "name";
    counter.value = "0";
    const minusBtn = document.createElement('button');//boton para quitar productos
    minusBtn.classList.add('minusBtn');
    const minusFA = document.createElement('i');//para agregarle el estilo desde fontawesome
    minusFA.classList.add('fas', 'fa-minus');//para agregarle el estilo desde fontawesome
    const cartBtn = document.createElement('button');//boton par agregar al carrito
    cartBtn.classList.add('cartBtn');
    const cartFA = document.createElement('i');//para agregarle el estilo desde fontawesome
    cartFA.classList.add('fas', 'fa-shopping-cart');//para agregarle el estilo desde fontawesome
    cartBtn.innerHTML = ' Agregar al carrito';//Leyenda del botón
    //funcionalidad de los botones
    minusBtn.addEventListener("click", () =>{
        if (parseInt(counter.value) > 0) {
            counter.value = parseInt(counter.value) - 1;
        }
    });
    plusBtn.addEventListener("click", () =>{
        const maxValue = 101; 
        if (parseInt(counter.value) < maxValue) {
            counter.value = parseInt(counter.value) + 1;
        }
    });
    //Apendeo de los botones
    plusBtn.appendChild(plusFA);//Le agregamos el <i class='..'> para que tenga el icono
    minusBtn.appendChild(minusFA);//Le agregamos el <i class='..'> para que tenga el icono
    cartBtn.appendChild(cartFA);//Le agregamos el <i class='..'> para que tenga el icono
    //metemos los botones y el contador en un contenedor para poder darle estilo
    quantity.appendChild(plusBtn); 
    quantity.appendChild(counter);
    quantity.appendChild(minusBtn);
    //metemos el contenedor de arriba y elboton del carrito en otro contenedor para darle estilo:
    shoppingCart.appendChild(quantity);
    shoppingCart.appendChild(cartBtn);
    //Finalmente, lo agregamos al contenedor de la información de productos:
    rightContainer.appendChild(shoppingCart);

    //Y ahora, todo lo que se encuentra en el contenedor rightContainer se lo agregamos al contenedor
    //donde vemos toda la información:
    displayContainer.appendChild(rightContainer);
    //Por último, este contenedor se lo agregamos al dialog:
    dialog.appendChild(displayContainer);
}

//Para visualizarlo, en el DOM se va a crear algo así:
//<dialog>
//   <div class="closeContainer">
//       <button class="closeBtn">Cerrar</button> <-Es el botón que va a cerrar el dialog
//   </div>
//   <div class="displayContainer">
//       (Acá apendea algo que le llega por parámetro. No le agrega clase ni nada, va a recibir la instruccion cuando la funcion se ejecute)
//       <div class="rightContainer">
//           <h1>(Recibe un nombre por parámetro)</h1>
//           <h3>(Recibe un precio por parámetro)</h3>
//           <div class="shoppingCart">
//               <div class="quantity">
//                   <button class="plusBtn">
//                      <i class="fas fa-plus"></i>
//                   </button>
//                   <input class="counter" type="text" name="name" value="0">
//                   <button class="minusBtn">
//                      <i class="fas fa-minus"></i>
//                   </button>
//               </div>
//               <button class="cartBtn">
//                   <i class="fas fa-shopping-cart"></i> Agregar al carrito
//               </button>
//           </div>
//       </div>
//   </div>
//</dialog>

export function filter(typeVariation, currentContainer) {
    let filteredContainer = currentContainer.slice();
    for (let i = filteredContainer.length - 1; i >= 0; i--) {
        if (filteredContainer[i].type !== typeVariation) {
            filteredContainer.splice(i, 1);
        }
    }
    return filteredContainer;
};

export function filteredBtn(arrayBtn, typeVariation, arrayCurrent, currentContainer){
    arrayBtn.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const filteredArray = filter(typeVariation, arrayCurrent.slice());
            displayContainer(filteredArray, currentContainer);
        })
    })
}

export function variety(){};