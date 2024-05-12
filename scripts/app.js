import { stock } from "./products";
import { displayContainer } from "./functions";
//Esta funcionalidad solo se va a implementar para mostrar los descuentos. Para visualizar que funciona, solo la
//puse en index.html, como para ver los descuentos en la página de entrada. Como ya esta hecha, se puede mover 
//a cualquier parte del proyecto, nos queda ponernos de acuerdo
const containerAd = document.querySelector('.displayAd');

stock.forEach(array => {
    array.forEach(shoe => {
        if (shoe.type == 'Descuentos') {
            let arrayDescuentos = [];
            arrayDescuentos.push(shoe);
            displayContainer(arrayDescuentos, containerAd);
        }
    });
});