export function Product(frontImage, sideImage, name, type, price, variations) {
    this.frontImage = frontImage;
    this.sideImage = sideImage;
    this.name = name;
    this.type = type;
    this.price = price;
    this.variations = variations;
}

export const myStuff = [
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
]

//Esta parte es importante que la lean porque aquí va a ser donde cada
//uno cargue los productos que van a aparecer en la página. La primera
//parte es una funcion constructora. Piensenla como un molde, yo le estoy
//pidiendo 'creame el objeto Product, y quiero que tenga un frontImage,
//sideImage, name, type, price y variations'.
//Las variaciones las puse así porque al principio las habia puesto como
//un array dentro del objeto, por ej, tenia
//new Product('img1', 'img2', 'zapatillas Gazelle', 'zapatillas', '$123', '[37, 38, 39, 40]', '[blanco, gris, verde]', '[fuera de stock, disponible]')
//Pero me costaba mucho elegir qué opcion queria que estuviera disponible o no
//De esta manera, como son pocos productos y solo de prueba, deje algunos
//para que se visualice la idea, y sea más facil de seleccionar. 
//Cambien y modifiquen a gusto
//La segunda parte es un array de objetos. Esto imitaría la api que no
//tenemos y que me parece medio al pedo hacer porque serían pocos productos.
//aca es donde tienen que subir cada producto que quieran que este en 
//la pagina. Las imagenes las guarde en la carpeta ./static/img 

//Una vez que carguen sus productos, es imporante que abran
//la consola y tipeen
//npm run build
//esto lo que hace es actualizar el archivo bundle con sus nuevos productos,
//, que es la info que consume el navegador. Si no lo hacen, 
//solo van a ver los que les envio yo. Tambien van a ver que en
//cualquier tab va a cargar todos los productos disponibles. No se
//preocupen, solo hay que modificar un poco la funcion que esta 
//en 'products.js' para indicarle qué debe reenderizar dependiendo
//si es para niños, mujeres, hombres, descuento, etc.

//PD: Notarán que no todas las propiedades estan siendo utilizadas
//en app.js. Eso es porque quise dejar el molde hecho para
//poder trabajar luego la funcionalidad, si asi lo quisieramos.
//Si no se usa, no pasa nada
//PD 2: Al trabajar con objetos, si algo no les funciona, es porque
//probablemente olvidaron una coma. JS es muy fifí