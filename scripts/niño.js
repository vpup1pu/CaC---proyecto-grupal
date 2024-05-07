import { stuffNiño } from "./products";
//La deje armada para probar que funcionaba, tanto esta como hombre.js van a funcionar en sus respectivas tab,
//cuando cada integrante suba su pestaña correspondiente. Seguramente se deban modificar algunos nombres, como los
//div pero es algo que no altera la funcionalidad.
const containerNiño = document.querySelector('.displayNiño');

stuffNiño.forEach(shoe => {
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
    containerNiño.appendChild(shoeDiv);
});
