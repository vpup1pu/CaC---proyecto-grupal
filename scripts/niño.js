import { stuffNiño } from "./products";
import { displayContainer, filteredBtn } from "./functions";

const containerNiño = document.querySelector('.displayNiños');
const urbBtnsN = document.querySelectorAll('.urbanos-n');
const zapBtnsN = document.querySelectorAll('.zapatos-n');
const depBtnsN = document.querySelectorAll('.deportivos-n');
const indBtnsN = document.querySelectorAll('.indumentaria-n');
const descBtnsN = document.querySelectorAll('.descuentos-n');

displayContainer(stuffNiño, containerNiño);

filteredBtn(urbBtnsN, 'Urbanos', stuffNiño, containerNiño);
filteredBtn(zapBtnsN, 'Zapatos', stuffNiño, containerNiño);
filteredBtn(depBtnsN, 'Deportivos', stuffNiño, containerNiño);
filteredBtn(indBtnsN, 'Indumentaria', stuffNiño, containerNiño);
filteredBtn(descBtnsN, 'Descuentos', stuffNiño, containerNiño);
