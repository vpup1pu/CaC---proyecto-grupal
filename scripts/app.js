const { stuffNiño, stuffMujer, stuffHombre } = require('../scripts/products'); 
import { displayContainer } from "./functions";

const containerAd = document.querySelector('.displayAd');

const allProducts = [...stuffNiño, ...stuffMujer, ...stuffHombre];

console.log(allProducts);

let arrayDescuentos = [];

// Itera sobre cada producto en allProducts
allProducts.forEach(product => {
    if (product.type === 'Descuentos') {
        arrayDescuentos.push(product);
    }
});

displayContainer(arrayDescuentos, containerAd);
