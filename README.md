## 15/04/24
Les dejo una explicación/guía de lo que tenemos hasta el momento. Obvio que cualquier duda o consulta, diganme, no soy muy buena explicando pero haré todo lo posible.<br>
En nuestra carpeta proyecto grupal, tenemos los archivos **index.html**, dos **.json**, este **README**, y un *webpack*, además de las carpetas.<br>
>Webpack es una herramienta que nos permite, en este caso en particular, trabajar en módulos con nuestros archivos js. Para que puedan ver en el navegador lo que sea que modifiquemos en los scripts js, webpack crea un archivo **bundle** (que lo podemos ver en la carpeta dist), combinando la informacion de todos los js que estemos modularizando. La configuración ya esta realizada, lo que deben hacer es:
>1. Instalar **Node.js**, si no lo tienen instalado. Tiene un montón de funciones, aca en particular me interesa que interprete el archivo Webpack
>2. Abrir la consola del VS. **Asegurense que esten parados en la carpeta proyecto grupal**
>3. Escribir en la consola **npm install**. Esto va a instalar todas las dependecias que aparecen listadas en el archivo package.json
>4. Una vez que finalice la instalación, escribir en la consola **npm run build**. Esto va a actualizar el archivo bundle.
>5. Listo, ya pueden abrir index.HTML desde sus navegadores!

Sobre los demas archivos, *package.json*, *package-lock.json*, y las carpetas: *.vscode, dist* y *node_modules*: Son configuraciones que creó Node.js y Webpack.
<br> **index.html** es nuestra página principal. La dejé vacía prácticamente, para que después decidamos qué agregarle. En ese archivo van a tener que actualizar en el nav, agregando la referencia a sus respectivas páginas.
<br>Las páginas las guarde en la carpeta tab, por ahora ignoren template, no recuerdo en qué archivo pero les expliqué qué era y por qué ahora no es importante.
>>La distribución del material se puede cambiar si lo quieren, lo hice así porque me parecía más organizado pero adhiero a lo que quiera la mayoría.

La carpeta static tiene a su vez dos carpetas, uno para el CSS *(es único para todas las páginas, recuerden referirlo bien en el link y si lo modifican, verifiquen que no pise estilos en las otras páginas)* y otra para las imágenes. En el archivo CSS agregué todos los comentarios que me parecían relevantes para entender qué estabamos haciendo, aunque la mayoría son los que había dejado Gabriel.

Por último, en la carpeta scripts encontramos los archivos app.js y product.js. Cada uno tiene sus respectivos comentarios. 

>>Les recomiendo que primero lean todo, porque para cargar sus páginas probablemente necesitarán pasar por varios de estos archivos.<br>


Perdón escribí un libro con la cantidad de comentarios, quise dejarlo lo más detallado posible para que sea ameno recorrerlo y entender por qué tomé ciertas decisiones, por qué dejé algunas cosas que parecieran que no hacen nada, etc.<br>

##

## 26/04/24

<br>
<p align="center">
<img src="https://pbs.twimg.com/media/ERE4wK2WsAABizg.jpg" width="350px">
</p>
<br>
Encontrarán cambios sustanciales en la carpeta scripts. Esto se debe a que no podía encontrar la forma de utilizar un solo archivo js para todos los html, cuando lo renderizaba tiraba error en varios aspectos porque no podía encontrar ciertos elementos. <br>
<br>

>>Por ejemplo, el contenedor donde se renderizan todos los productos de mujer solo existen en tab-mujer.html. Por lo tanto, cuando me encontraba explorando la página principal, me tiraba el error de que no podía apendear el contenido al displayMujer porque no existía, y así con cada cosa.<br>

No estoy muy contenta con cómo quedó, estoy segura que se puede simplificar más, pero me gustaría mostrarselo a Fernando y que nos ayude. La otra versión no la descarté, la guarde en una rama aparte con el nombre [dead-point](https://github.com/vpup1pu/CaC---proyecto-grupal/tree/dead-point).

También eliminé antiguas indicaciones, si necesitan volver a leerlas, pueden volver al [primer commit](https://github.com/vpup1pu/CaC---proyecto-grupal/commit/dc411a4886439ff997dd3533b118138f341bfc3c).

>>Recuerden instalar Node.js si no lo hicieron, y que **luego de cambio que hagan en los archivos scripts, tipeen en la consola *npm run build***.

*¿Qué queda hacer?* Muchas cosas todavía. Además de lo que nos repartimos, tendríamos que ponernos de acuerdo en dónde sacamos las imágenes. Yo utilicé de 3 lugares, primero para asegurarme que independientemente del tipo de imagen o tamaño, el diseño se mantenga uniforme. Pero además, para demostrar que queda raro tener productos con diferentes fondos.
También necesitamos un favicon. Pensar cómo vamos a hacer los filtros. El formulario de usuario para registrarse o iniciar sesión. Los descuentos. 
>>Hay de todo para hacer, si terminaron con su parte, subanla al github, elijan algo de esto o algo que creen que falta y trabajenlo.

Por mi parte, ahora que logré renderizar cada producto en su correspondiente lugar, voy a trabajar en la funcionalidad de **tab-template.html**. La idea es que cada vez que clickeamos un producto, se guarde su valor y en esta tab-template renderice las fotos, nombre del producto, talle, precio, disponibilidad. Incluso agregar botones para agregar al carrito. Pero primero tengo que lograr esto, que por cada producto cree página template.