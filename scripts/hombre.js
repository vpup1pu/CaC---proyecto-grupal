import { stuffHombre} from "./products";
import { displayContainer, filteredBtn } from "./functions";
//La deje armada para probar, pero tanto esta como niño.js van a funcionar en sus respectivas tab,
//cuando cada integrante suba su pestaña correspondiente. Seguramente se deban modificar algunos nombres, como los
//div pero es algo que no altera la funcionalidad.
const containerHombre = document.querySelector('.displayHombre');
const urbBtns = document.querySelectorAll('.urbanos-h');
const zapBtns = document.querySelectorAll('.zapatos-h');
const depBtns = document.querySelectorAll('.deportivos-h');
const indBtns = document.querySelectorAll('.indumentaria-h');
const descBtns = document.querySelectorAll('.descuentos-h');

displayContainer(stuffHombre, containerHombre);

filteredBtn(urbBtns, 'Urbanos', stuffHombre, containerHombre);
filteredBtn(zapBtns, 'Zapatos', stuffHombre, containerHombre);
filteredBtn(depBtns, 'Deportivos', stuffHombre, containerHombre);
filteredBtn(indBtns, 'Indumentaria', stuffHombre, containerHombre);
filteredBtn(descBtns, 'Descuentos', stuffHombre, containerHombre);