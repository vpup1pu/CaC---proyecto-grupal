import { stock } from "./products";
import { displayContainer } from "./functions";

const containerAd = document.querySelector('.displayAd');

let arrayDescuentos = [];

stock.forEach(array => {
    array.forEach(shoe => {
        if (shoe.type === 'Descuentos') {
            arrayDescuentos.push(shoe);
        }
    });
});

displayContainer(arrayDescuentos, containerAd);