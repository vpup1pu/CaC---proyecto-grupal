export function Product(frontImage, sideImage, name, type, price, discount, variations) {
    this.frontImage = frontImage;
    this.sideImage = sideImage;
    this.name = name;
    this.type = type;
    this.price = price;
    this.discount = discount;
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

export let stuffNiño = [ 
    new Product("./static/img/01front.jpg", "./static/img/01side.jpg", "Zapatillas Topper", "Urbanos", 80000, [
     {size: 8, color: "black", availability: "disponible"}
    ]),
    new Product("./static/img/02front.jpg", "./static/img/02side.jpg", "Zapatos Kickers", "Zapatos", 113000, [
        {size: 8, color: "brown", availability: "disponible"}
    ]),
    new Product("./static/img/03front.jpg", "./static/img/03side.jpg", "Botines Warskin", "Deportivos", 94000, [
        {size: 'M', color: "black", availability: "disponible"}
    ]),
    new Product("./static/img/04front.jpg", "./static/img/04side.jpg", "Remera Head", "Indumentaria", 15600, [
        {size: 8, color: "blue", availability: "disponible"}
    ]),
    new Product("./static/img/05front.jpg", "./static/img/05side.jpg", "Zapatillas Reebok", "Descuentos", 83000, 23, [
        {size: 8, color: "white", availability: "disponible"}
    ])
];

export let stuffMujer = [
    new Product(`./static/img/06front.avif`, `./static/img/06side.avif`, 'Zapatillas Gazelle', 'Urbanos', 183999, [
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
    new Product(`./static/img/07front.webp`, `./static/img/07side.webp`, 'Sandalias Modare', 'Zapatos', 12000, [
        {size: 37, color: 'brown', availability: 'disponible'},
        {size: 38, color: 'brown', availability: 'fuera de stock'},
        {size: 39, color: 'brown', availability: 'disponible'},
        {size: 40, color: 'brown', availability: 'disponible'}
    ]),
    new Product(`./static/img/08front.avif`, `./static/img/08side.avif`, 'Zapatillas Rapidmove ADV', 'Deportivos', 154999, [
        {size: 37, color: 'lime', availability: 'disponible'},
        {size: 37, color: 'red', availability: 'disponible'},
        {size: 38, color: 'lime', availability: 'fuera de stock'},
        {size: 38, color: 'red', availability: 'disponible'},
        {size: 39, color: 'lime', availability: 'fuera de stock'},
        {size: 39, color: 'red', availability: 'fuera de stock'},
        {size: 40, color: 'lime', availability: 'disponible'},
        {size: 40, color: 'red', availability: 'fuera de stock'}
    ]),
    new Product(`./static/img/09front.webp`, `./static/img/09side.webp`, 'Remerón Tropical', 'Indumentaria', 7299, [
        {size: 'S', color: 'white', availability: 'disponible'},
        {size: 'S', color: 'black', availability: 'disponible'},
        {size: 'M', color: 'white', availability: 'fuera de stock'},
        {size: 'M', color: 'black', availability: 'disponible'},
        {size: 'L', color: 'white', availability: 'disponible'},
        {size: 'L', color: 'black', availability: 'fuera de stock'},
    ]),
    new Product(`./static/img/10front.webp`, `./static/img/10side.webp`, 'Botitas Jaguar', 'Descuentos', 9899, 10, [
        {size: 37, color: 'black', availability: 'disponible'}
    ])
];

export let stuffHombre = [new Product(`./static/img/11front.webp`, `./static/img/11side.webp`, 'Zapatilla Ringo Bay', 'Urbanos', 109000, [
    {size: 40, color: 'black', availability: 'disponible'}
]), 
new Product(`./static/img/12front.webp`, `./static/img/12side.webp`, 'Zapato Hush Puppies Cities', 'Zapatos', 155000, [
    {size: 40, color: 'black', availability: 'disponible'}
]),
new Product(`./static/img/13front.jpg`, `./static/img/13side.webp`, 'Zapatilla Hush Puppies Trace', 'Deportivos', 110000, [
    {size: 40, color: 'blue', availability: 'disponible'}
]),
new Product(`./static/img/14front.webp`, `./static/img/14side.webp`, 'Remera Estampada Don-T', 'Indumentaria', 26500, [
    {size: 'M', color: 'white', availability: 'disponible'}
]),
new Product(`./static/img/15front.webp`, `./static/img/15side.webp`, 'Zapatilla Hush Puppies Willy Mid', 'Descuentos', 89500, 30, [
    {size: 40, color: 'brown', availability: 'disponible'}
])
];


export const stock = [stuffNiño, stuffMujer, stuffHombre];