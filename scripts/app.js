import { stock, Display } from "./products";
//Esta funcionalidad solo se va a implementar para mostrar los descuentos. Para visualizar que funciona, solo la
//puse en index.html, como para ver los descuentos en la página de entrada. Como ya esta hecha, se puede mover 
//a cualquier parte del proyecto, nos queda ponernos de acuerdo
const containerAd = document.querySelector('.displayAd');

stock.forEach(array => {
    array.forEach(shoe => {
        if (shoe.type == 'Descuentos') {
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
            const shoePrice = document.createTextNode(shoe.price);

            lilDisplay.appendChild(shoeName);
            lilDisplay.appendChild(document.createElement('br'));
            lilDisplay.appendChild(shoePrice);
            imageContainer.appendChild(frontImage);
            imageContainer.appendChild(sideImage);

            shoeDiv.appendChild(imageContainer);
            shoeDiv.appendChild(lilDisplay);

            //Hace lo mismo que la otra funcion, para entenderla, leerlo en el primer commit (el README tiene el link)
            //La única diferencia en cada archivo js es a donde lo apendea. Es decir, en qué contenedor padre le crea
            //el hijo shoeDiv.
            containerAd.appendChild(shoeDiv);

            //Aca es donde viene el nuevo cambio. Lo de abajo dice "me quedo atento 
            //a que cada vez que cliqueen shoeDiv, ejecuten lo siguiente: "
            shoeDiv.addEventListener("click", () => {
                //Primero le pido que clone el contenedor imageContainer y toda su 
                //descendencia, y lo guarde en una variable llamada clone_imageContainer
                let clone_imageContainer = imageContainer.cloneNode(true);
                clone_imageContainer.classList.add('imageContainer');//El clon de imageContainer no tiene clase, por eso le asigno la misma que tenía la original. Aca se reutiliza todo.
                Display(clone_imageContainer, shoe.name, shoe.price, containerAd); //Esta es la función que se encuentra en products.js
            });
            //Recibe como parámetro el clon clone_imageContainer, con todos sus descendientes
            //y clase '.imageContainer', recibe acceso a la propiedad name de shoe(shoe.name),
            //recibe acceso a la propiedad price de shoe(shoe.price), y al contenedor
            //de este html, containerAd. Para entender qué hace, mirar junto con
            //products.js. En resumen, ejecuta el dialog por cada producto.
        }
    });
});
