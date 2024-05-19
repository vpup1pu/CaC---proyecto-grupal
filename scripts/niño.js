import { stuffNiño } from "./products";
import { displayContainer, filteredBtn } from "./functions";

const containerNiño = document.querySelector('.displayNiños');
const urbBtns = document.querySelectorAll('.urbanos-n');
const zapBtns = document.querySelectorAll('.zapatos-n');
const depBtns = document.querySelectorAll('.deportivos-n');
const indBtns = document.querySelectorAll('.indumentaria-n');
const descBtns = document.querySelectorAll('.descuentos-n');

displayContainer(stuffNiño, containerNiño);

filteredBtn(urbBtns, 'Urbanos', stuffNiño, containerNiño);
filteredBtn(zapBtns, 'Zapatos', stuffNiño, containerNiño);
filteredBtn(depBtns, 'Deportivos', stuffNiño, containerNiño);
filteredBtn(indBtns, 'Indumentaria', stuffNiño, containerNiño);
filteredBtn(descBtns, 'Descuentos', stuffNiño, containerNiño);
