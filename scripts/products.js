class Product {
    constructor(frontImage, sideImage, name, type, price, variations, discount) {
        this.frontImage = frontImage;
        this.sideImage = sideImage;
        this.name = name;
        this.type = type;
        this.price = price;
        this.variations = variations;
        this.discount = discount;
    }

    sale() {
        let sale = false;
        if (this.type === 'Descuentos') {
            sale = true;
        }
        return sale;
    }
}

export let stuffNiño = [
    new Product(`./static/img/01front.jpg`, `./static/img/01side.jpg`, 'Zapatillas Topper', 'Urbanos', 80000, [
        { size: 8, color: 'negro', availability: 'disponible' },
        { size: 8, color: 'azul', availability: 'disponible' },
        { size: 9, color: 'negro', availability: 'disponible' },
        { size: 9, color: 'azul', availability: 'fuera de stock' },
        { size: 10, color: 'negro', availability: 'disponible' },
        { size: 10, color: 'azul', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/02front.jpg`, `./static/img/02side.jpg`, 'Zapatos Kickers', 'Zapatos', 113000, [
        { size: 8, color: 'marrón', availability: 'fuera de stock' },
        { size: 8, color: 'gris', availability: 'disponible' },
        { size: 9, color: 'marrón', availability: 'disponible' },
        { size: 9, color: 'gris', availability: 'disponible' },
        { size: 10, color: 'marrón', availability: 'fuera de stock' },
        { size: 10, color: 'gris', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/03front.jpg`, `./static/img/03side.jpg`, 'Botines Warskin', 'Deportivos', 94000, [
        { size: 8, color: 'negro', availability: 'disponible' },
        { size: 9, color: 'negro', availability: 'fuera de stock' },
        { size: 10, color: 'negro', availability: 'disponible' }
    ]),
    new Product(`./static/img/04front.jpg`, `./static/img/04side.jpg`, 'Remera Head', 'Indumentaria', 15600, [
        { size: 14, color: 'azul', availability: 'disponible' },
        { size: 16, color: 'azul', availability: 'disponible' },
        { size: 'S', color: 'azul', availability: 'fuera de stock' },
        { size: 'M', color: 'azul', availability: 'disponible' }
    ]),
    new Product(`./static/img/05front.jpg`, `./static/img/05side.jpg`, 'Zapatillas Reebok', 'Descuentos', 83000, [
        { size: 8, color: 'blanco', availability: 'disponible' },
        { size: 9, color: 'blanco', availability: 'fuera de stock' },
        { size: 10, color: 'blanco', availability: 'disponible' }
    ], 25)
];

export let stuffMujer = [
    new Product(`./static/img/06front.avif`, `./static/img/06side.avif`, 'Zapatillas Gazelle', 'Urbanos', 183999, [
        { size: 37, color: 'gris', availability: 'disponible' },
        { size: 37, color: 'verde', availability: 'fuera de stock' },
        { size: 37, color: 'blanco', availability: 'disponible' },
        { size: 38, color: 'gris', availability: 'disponible' },
        { size: 38, color: 'verde', availability: 'disponible' },
        { size: 38, color: 'blanco', availability: 'fuera de stock' },
        { size: 39, color: 'gris', availability: 'disponible' },
        { size: 39, color: 'verde', availability: 'disponible' },
        { size: 39, color: 'blanco', availability: 'disponible' },
        { size: 40, color: 'gris', availability: 'fuera de stock' },
        { size: 40, color: 'verde', availability: 'fuera de stock' },
        { size: 40, color: 'blanco', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/07front.webp`, `./static/img/07side.webp`, 'Sandalias Modare', 'Zapatos', 62000, [
        { size: 37, color: 'marrón', availability: 'disponible' },
        { size: 38, color: 'marrón', availability: 'fuera de stock' },
        { size: 39, color: 'marrón', availability: 'disponible' },
        { size: 40, color: 'marrón', availability: 'disponible' }
    ]),
    new Product(`./static/img/08front.avif`, `./static/img/08side.avif`, 'Zapatillas Rapidmove ADV', 'Deportivos', 154999, [
        { size: 37, color: 'lima', availability: 'disponible' },
        { size: 37, color: 'rojo', availability: 'disponible' },
        { size: 38, color: 'lima', availability: 'fuera de stock' },
        { size: 38, color: 'rojo', availability: 'disponible' },
        { size: 39, color: 'lima', availability: 'fuera de stock' },
        { size: 39, color: 'rojo', availability: 'fuera de stock' },
        { size: 40, color: 'lima', availability: 'disponible' },
        { size: 40, color: 'rojo', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/09front.webp`, `./static/img/09side.webp`, 'Remerón Tropical', 'Indumentaria', 27299, [
        { size: 'S', color: 'blanco', availability: 'disponible' },
        { size: 'S', color: 'negro', availability: 'disponible' },
        { size: 'M', color: 'blanco', availability: 'fuera de stock' },
        { size: 'M', color: 'negro', availability: 'disponible' },
        { size: 'L', color: 'blanco', availability: 'disponible' },
        { size: 'L', color: 'negro', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/10front.webp`, `./static/img/10side.webp`, 'Botitas Jaguar', 'Descuentos', 39899, [
        { size: 37, color: 'negro', availability: 'disponible' },
        { size: 38, color: 'negro', availability: 'fuera de stock' },
        { size: 39, color: 'negro', availability: 'fuera de stock' },
    ], 10)
];

export let stuffHombre = [
    new Product(`./static/img/11front.webp`, `./static/img/11side.webp`, 'Zapatilla Ringo Bay', 'Urbanos', 109000, [
        { size: 40, color: 'negro', availability: 'disponible' },
        { size: 41, color: 'negro', availability: 'disponible' },
        { size: 42, color: 'negro', availability: 'fuera de stock' },
        { size: 40, color: 'azul', availability: 'fuera de stock' },
        { size: 41, color: 'azul', availability: 'disponible' },
        { size: 42, color: 'azul', availability: 'fuera de stock' },
    ]),
    new Product(`./static/img/12front.webp`, `./static/img/12side.webp`, 'Zapato Hush Puppies Cities', 'Zapatos', 155000, [
        { size: 40, color: 'negro', availability: 'disponible' },
        { size: 41, color: 'negro', availability: 'disponible' },
        { size: 42, color: 'negro', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/13front.jpg`, `./static/img/13side.webp`, 'Zapatilla Hush Puppies Trace', 'Deportivos', 110000, [
        { size: 40, color: 'azul', availability: 'fuera de stock' },
        { size: 41, color: 'azul', availability: 'disponible' },
        { size: 42, color: 'azul', availability: 'disponible' }
    ]),
    new Product(`./static/img/14front.webp`, `./static/img/14side.webp`, 'Remera Estampada Don-T', 'Indumentaria', 26500, [
        { size: 'S', color: 'blanco', availability: 'disponible' },
        { size: 'M', color: 'blanco', availability: 'disponible' },
        { size: 'L', color: 'blanco', availability: 'disponible' },
        { size: 'XL', color: 'blanco', availability: 'fuera de stock' }
    ]),
    new Product(`./static/img/15front.webp`, `./static/img/15side.webp`, 'Zapatilla Hush Puppies Willy Mid', 'Descuentos', 89500, [
        { size: 40, color: 'marrón', availability: 'fuera de stock' },
        { size: 41, color: 'marrón', availability: 'disponible' },
        { size: 42, color: 'marrón', availability: 'fuera de stock' },
    ], 30),
    new Product(`./static/img/16front.webp`, `./static/img/16side.webp`, 'Zapato Marsanto', 'Descuentos', 89900, [
        {size: 40, color: 'marrón', availability: 'disponible'},
        {size: 41, color: 'marrón', availability: 'fuera de stock'}
    ], 50)
];

export const stock = [stuffNiño, stuffMujer, stuffHombre];