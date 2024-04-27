export function Product(frontImage, sideImage, name, type, price, variations) {
    this.frontImage = frontImage;
    this.sideImage = sideImage;
    this.name = name;
    this.type = type;
    this.price = price;
    this.variations = variations;
};

export const stuffMujer = [
    new Product('../static/img/01 front.avif', '../static/img/01 side.avif', 'Zapatillas Gazelle', 'Urbanos', '$183.999', [
        { size: 37, color: 'gray', availability: 'disponible'},
        { size: 37, color: 'green', availability: 'fuera de stock'},
        { size: 37, color: 'white', availability: 'disponible'},
        { size: 38, color: 'gray', availability: 'disponible'},
        { size: 38, color: 'green', availability: 'disponible'},
        { size: 38, color: 'white', availability: 'fuera de stock'},
        { size: 39, color: 'gray', availability: 'disponible'},
        { size: 39, color: 'green', availability: 'disponible'},
        { size: 39, color: 'white', availability: 'disponible'},
        { size: 40, color: 'gray', availability: 'fuera de stock'},
        { size: 40, color: 'green', availability: 'fuera de stock'},
        { size: 40, color: 'white', availability: 'fuera de stock'}
    ]),
    new Product('../static/img/02 front.webp', '../static/img/02 side.webp', 'Sandalias Modare', 'Zapatos', '$12.000', [
        {size: 37, color: 'brown', availability: 'disponible'},
        {size: 38, color: 'brown', availability: 'fuera de stock'},
        {size: 39, color: 'brown', availability: 'disponible'},
        {size: 40, color: 'brown', availability: 'disponible'}
    ]),
    new Product('../static/img/03 front.avif', '../static/img/03 side.avif', 'Zapatillas Rapidmove ADV', 'Deportivos', '$154.999', [
        {size: 37, color: 'lime', availability: 'disponible'},
        {size: 37, color: 'red', availability: 'disponible'},
        {size: 38, color: 'lime', availability: 'fuera de stock'},
        {size: 38, color: 'red', availability: 'disponible'},
        {size: 39, color: 'lime', availability: 'fuera de stock'},
        {size: 39, color: 'red', availability: 'fuera de stock'},
        {size: 40, color: 'lime', availability: 'disponible'},
        {size: 40, color: 'red', availability: 'fuera de stock'}
    ]),
    new Product('../static/img/04 front.webp', '../static/img/04 side.webp', 'Remerón Tropical', 'Indumentaria', '$7.299,00', [
        {size: 'S', color: 'white', availability: 'disponible'},
        {size: 'S', color: 'black', availability: 'disponible'},
        {size: 'M', color: 'white', availability: 'fuera de stock'},
        {size: 'M', color: 'black', availability: 'disponible'},
        {size: 'L', color: 'white', availability: 'disponible'},
        {size: 'L', color: 'black', availability: 'fuera de stock'},
    ]),
    new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [
        {size: 37, color: 'black', availability: 'disponible'}
    ])
];

//Solo le cargue un producto para poder visualizarlo en el código, aqui es donde 
//cada uno va a agregar lo que corresponda.

export const stuffHombre = [new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [
    {size: 37, color: 'black', availability: 'disponible'}
])];
export const stuffNiño = [new Product('../static/img/05 front.webp', '../static/img/05 side.webp', 'Botitas Jaguar', 'Descuentos', '$9.899', [
    {size: 37, color: 'black', availability: 'disponible'}
])];

//este array contiene todo el stock, se utiliza unicamente en app.js lo cree pensando en filtrar objetos en descuento.
export const stock = [stuffMujer, stuffHombre, stuffNiño];

//función que se utilizará en todas las páginas
export function Redirect() {
    window.location.href = "http://192.168.1.103:8080/tab-template.html";
}