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

##

## 06/05/24

<br>
<p align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56evHDkDIknHLaVItNK2DdMqHbWUktQyaL0sxustqkMMFIE4-ZU411MCs7Wde8qHHSHU&usqp=CAU" width="250px">
</p>
<br>

Siguiendo el consejo de Fernando, abandoné la función Redirect(), ya que desde el Front se puede hacer poco en relación a la idea de esa función. Por este motivo, eliminé el archivo tab-template.html que se encontraba en la carpeta tab, ya que no va a tener ningún uso.
Todavía me quedan hacer cosas, pero sólo va a afectar esta carpeta, la de scripts. También puede ser que modifique el style.css, pero solo para los estilos que se apliquen a esta parte.

>>Por lo tanto, toda mi modificación se encuentra en los **scripts** y obviamente en sus **bundles**. Cuando descarguen esta versión, recuerden actualizar el bundle con el comando *npm run build*.
<br>

También cree un html que se llama creadores.html. Este lo vamos a referenciar en el footer, donde dice:

>     <p class="copyright">Copyright <a href="./tab/creadores.html">Elegance Edg</a> <br>

ahí es donde iría referenciado el html creadores que donde irían nuestros nombres con links a donde queramos, si queremos github, linkedin, lo que quieran. Yo la dejé para que ocupe el lugar pero Matías dijo que la iba a hacer él.

Por otro lado, fusioné lo que teníamos con lo que subió Matías al github. Unifiqué los estilos, modifiqué un poco la tab de contacto para que tenga el mismo header y footer, y no mucho más.

>>En cada html, cambie las referencias de los links (el atributo href=""), por lo que, con lo que esta cargado hasta este momento, es funcional todo.



Por último, Matías agregó el favicon. Me mostraba que cuando lo quería renderizar, no aparecía en el navegador. Yo le consulté en su momento al profe porque había tenido el mismo problema, me dijo que es un bug conocido de LiveServer, la extensión que usamos para que nuestro proyecto se habra en el navegador. Agregandole un 1 al nombre del favicon, por alguna razón soluciona el problema. Me aconsejó igual que a la hora de entregar el proyecto, dejemos el nombre sin ninguna modificación, es decir *favicon.ico* porque el navegador siempre va a estar buscando ese nombre.

##

## 07/05/24

Perdón por la cantidad de commits, me volví loca. En el lado bueno, **estamos online a través de Github** y cada cambio que realicen, lo van a hacer apuntando al main, así que con recargar la página deberían ver reflejados los cambios.<br>
En lo malo, *presten atención a las cosas que cambiaron*. Necesité sacar los html de la carpeta porque la referencia que usaban para renderizar imágenes es diferente a la que tenía index.html, así que cuando funcionaba uno, fallaban los otros, y viceversa. *Con este cambio, todo funciona correctamente*.<br>
Realicé algunas correcciones que me indicaba la herramienta inspector de google, y la que nos pasó el profe que cuenta como [parte del puntaje](https://validator.w3.org/#validate_by_upload).<br>
Renombré el favicon, y cambié sus referencias, ahora lo renderiza bien sin necesidad de recurrir a nombres alternativos por el bug de LiveServer.<br>
**Renombré las imágenes** porque cuando tenían un espacio en su nombre, perdía el rastro a su ubicación. *Para quienes tienen que cargar productos, tengan esto en cuenta.*<br>
Finalmente, agregué los estilos al dialog, y la funcionalidad del contador.
<br>
>>Por mi parte, me queda terminar algunas funciones. Estoy creando una para poder seleccionar las variaciones de los productos (talle y color), y que muestre si está disponible o no. Si no esta disponible, quiero que algo cambie en el CSS, que diga sin stock o algo así. Y la otra función es pequeña, pero va a hacer que si un producto tiene type="Descuentos", que cambie algo en el CSS también para que lo demuestre.<br>

Quedan hacer algunas cosas, crear imágenes para publicidades, hacer la responsividad, y agregar las dos pestañas que nos faltan con sus respectivos productos. Creo que también cambiar los comentarios para cuando lo entreguemos, así es más fácil recorrer el código y evaluarlo. <br>
**Fuerza, queda poco**
<br>
>PD: les conviene o clonar este último commit por completo, o descargar individualmente los archivos prestando atención a dónde va cada cosa.