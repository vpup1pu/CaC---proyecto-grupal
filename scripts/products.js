export function Product(frontImage, sideImage, name, type, price, variations) {
    this.frontImage = frontImage;
    this.sideImage = sideImage;
    this.name = name;
    this.type = type;
    this.price = price;
    this.variations = variations;
    this.outOfStock = function(){
        for(let i=0; i<this.variations.length; i++){
            let stock = false;
            if (this.variations[i].availability === 'disponible'){
                stock = true;
            }
            return stock;
        }
    };
    this.sale = function(){
        let sale = false;
        if (this.type === 'Descuentos'){
            sale = true;
        }
        return sale;
    }
};

export let stuffMujer = [
    new Product(`./static/img/01front.avif`, `./static/img/01side.avif`, 'Zapatillas Gazelle', 'Urbanos', 183999, [
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
    new Product(`./static/img/02front.webp`, `./static/img/02side.webp`, 'Sandalias Modare', 'Zapatos', 12000, [
        {size: 37, color: 'brown', availability: 'disponible'},
        {size: 38, color: 'brown', availability: 'fuera de stock'},
        {size: 39, color: 'brown', availability: 'disponible'},
        {size: 40, color: 'brown', availability: 'disponible'}
    ]),
    new Product(`./static/img/03front.avif`, `./static/img/03side.avif`, 'Zapatillas Rapidmove ADV', 'Deportivos', 154999, [
        {size: 37, color: 'lime', availability: 'disponible'},
        {size: 37, color: 'red', availability: 'disponible'},
        {size: 38, color: 'lime', availability: 'fuera de stock'},
        {size: 38, color: 'red', availability: 'disponible'},
        {size: 39, color: 'lime', availability: 'fuera de stock'},
        {size: 39, color: 'red', availability: 'fuera de stock'},
        {size: 40, color: 'lime', availability: 'disponible'},
        {size: 40, color: 'red', availability: 'fuera de stock'}
    ]),
    new Product(`./static/img/04front.webp`, `./static/img/04side.webp`, 'Remerón Tropical', 'Indumentaria', 7299, [
        {size: 'S', color: 'white', availability: 'disponible'},
        {size: 'S', color: 'black', availability: 'disponible'},
        {size: 'M', color: 'white', availability: 'fuera de stock'},
        {size: 'M', color: 'black', availability: 'disponible'},
        {size: 'L', color: 'white', availability: 'disponible'},
        {size: 'L', color: 'black', availability: 'fuera de stock'},
    ]),
    new Product(`./static/img/05front.webp`, `./static/img/05side.webp`, 'Botitas Jaguar', 'Descuentos', 9899, [
        {size: 37, color: 'black', availability: 'disponible'}
    ])
];

export let stuffHombre = [];
export let stuffNiño = [ 
    new Product("./static/img/1-Cost.jpg", "./static/img/1-Frent.jpg", "Zapatillas Topper", "Urbanos", 10000, [
     {size: 8, color: "white", availability: "disponible"}
    ]),
    new Product("./static/img/002side.jpg", "./static/img/002front.jpg", "Zapatos Kickers", "Zapatos", 13000, [
        {size: 8, color: "white", availability: "disponible"}
    ]),
    new Product("./static/img/006side.jpg", "./static/img/006front.jpg", "Botines Warskin", "Deportivos", 54000, [
        {size: 8, color: "white", availability: "disponible"}
    ]),
    new Product("./static/img/005side.jpg", "./static/img/005front.jpg", "Remera Head", "Indumentaria", 15600, [
        {size: 8, color: "white", availability: "disponible"}
    ]),
    new Product("./static/img/004side.jpg", "./static/img/004front.jpg", "zapato", "Descuentos", 23000, [
        {size: 8, color: "white", availability: "disponible"}
    ])
];

export const stock = [stuffMujer, stuffHombre, stuffNiño];