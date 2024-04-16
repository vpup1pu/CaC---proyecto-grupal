Les dejo una explicación/guía de lo que tenemos hasta el momento. Obvio que cualquier duda o consulta, diganme, no soy muy buena explicando pero haré todo lo posible.
En nuestra carpeta proyecto grupal, tenemos los archivos index.html, dos .json, este readme, y un webpack, además de las carpetas.
Webpack es una herramienta que nos permite, en este caso en particular, trabajar en módulos con nuestros archivos js. Para que puedan ver en el navegador lo que sea que modifiquemos en los scripts js, webpack crea un archivo bundle (que lo podemos ver en la carpeta dist), combinando la informacion de todos los js que estemos modularizando. La configuración ya esta realizada, lo que deben hacer es:
    1- Instalar Node.js, si no lo tienen instalado. Tiene un montón de funciones, aca en particular me interesa que interprete el archivo Webpack
    2- Abrir la consola del VS. Asegurense que esten parados en la carpeta proyecto grupal
    3- Escribir en la consola 'npm install'. Esto va a instalar todas las dependecias que aparecen listadas en el archivo package.json
    4- Una vez que finalice la instalación, escribir en la consola 'npm run build'. Esto va a actualizar el archivo bundle.
    5- Listo, ya pueden abrir index.HTML desde sus navegadores!

Sobre los demas archivos, package.json, package-lock.json, y las carpetas: .vscode, dist y node_modules. Son configuraciones que creó Node.js y Webpack

index.html es nuestra página principal. La dejé vacía prácticamente, para que después decidamos qué agregarle. En ese archivo van a tener que actualizar en el nav, agregando la referencia a sus respectivas páginas.
Las páginas las guarde en la carpeta tab, por ahora ignoren template, no recuerdo en qué archivo pero les expliqué qué era y por qué ahora no es importante.
La distribución del material se puede cambiar si lo quieren, lo hice así porque me parecía más organizado pero adhiero a lo que quiera la mayoría.

La carpeta static tiene a su vez dos carpetas, uno para el CSS (es único para todas las páginas, recuerden referirlo bien en el link y si lo modifican, verifiquen que no pise estilos en las otras páginas) y otra para las imágenes. En el archivo CSS agregué todos los comentarios que me parecían relevantes para entender qué estabamos haciendo, aunque la mayoría son los que había dejado Gabriel.

Por último, en la carpeta scripts encontramos los archivos app.js y product.js. Cada uno tiene sus respectivos comentarios. 

Les recomiendo que primero lean todo, porque para cargar sus páginas probablemente necesitarán pasar por varios de estos archivos.
Perdón escribí un libro con la cantidad de comentarios, quise dejarlo lo más detallado posible para que sea ameno recorrerlo y entender por qué tomé ciertas decisiones, por qué dejé algunas cosas que parecieran que no hacen nada, etc.