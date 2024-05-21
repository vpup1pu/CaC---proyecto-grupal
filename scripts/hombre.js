import { stuffHombre} from "./products";
import { displayContainer, filteredBtn } from "./functions";

const containerHombre = document.querySelector('.displayHombre');
const urbBtnsH = document.querySelectorAll('.urbanos-h');
const zapBtnsH = document.querySelectorAll('.zapatos-h');
const depBtnsH = document.querySelectorAll('.deportivos-h');
const indBtnsH = document.querySelectorAll('.indumentaria-h');
const descBtnsH = document.querySelectorAll('.descuentos-h');

displayContainer(stuffHombre, containerHombre);

filteredBtn(urbBtnsH, 'Urbanos', stuffHombre, containerHombre);
filteredBtn(zapBtnsH, 'Zapatos', stuffHombre, containerHombre);
filteredBtn(depBtnsH, 'Deportivos', stuffHombre, containerHombre);
filteredBtn(indBtnsH, 'Indumentaria', stuffHombre, containerHombre);
filteredBtn(descBtnsH, 'Descuentos', stuffHombre, containerHombre);