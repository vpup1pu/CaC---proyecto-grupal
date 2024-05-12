import { stuffMujer } from "./products";
import { displayContainer, filteredBtn } from "./functions";

const containerMujer = document.querySelector('.displayMujer');
const urbBtnsM = document.querySelectorAll('.urbanos-m');
const zapBtnsM = document.querySelectorAll('.zapatos-m');
const depBtnsM = document.querySelectorAll('.deportivos-m');
const indBtnsM = document.querySelectorAll('.indumentaria-m');
const descBtnsM = document.querySelectorAll('.descuentos-m');

displayContainer(stuffMujer, containerMujer);

filteredBtn(urbBtnsM, 'Urbanos', stuffMujer, containerMujer);
filteredBtn(zapBtnsM, 'Zapatos', stuffMujer, containerMujer);
filteredBtn(depBtnsM, 'Deportivos', stuffMujer, containerMujer);
filteredBtn(indBtnsM, 'Indumentaria', stuffMujer, containerMujer);
filteredBtn(descBtnsM, 'Descuentos', stuffMujer, containerMujer);