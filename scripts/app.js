import { stock, Redirect } from "./products";
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

            shoeDiv.addEventListener("click", () => {
                Redirect();
            })
        }
    });
});