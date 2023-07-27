# Dia 1

## Introducción 

En este primer curso se llevará acabo la introducción a git y Github, de manera que se logren conocer todos los conceptos básicos, así como los comandos básicos 

## Objetivos 
* Aprender a utilizar Git y Github 
* Aprender los comandos básicos y para qué sirven



## ¿Que es Git?

Git es un sistema de control de versiones que permite a los desarrolladores rastrear y gestionar cambios en proyectos de software de manera colaborativa. Facilita el trabajo en equipo, el seguimiento de modificaciones y la creación de ramas para desarrollar nuevas características. Es ampliamente utilizado en la industria del desarrollo de software.
 

## Estados de git 

Git cuenta con 3 estados los cuales son los siguientes:
*  Working Directory 
    
    Es el estado en el que se encuentran los archivos en su forma actual, es decir, los archivos que se están modificando o creando en el proyecto

*  Stagin Area

    Una vez que se realizan cambios en los archivos en el directorio de trabajo, se pueden agregar al área de preparación. Aquí, Git rastrea los cambios que están listos para ser incluidos en el próximo commit. Se pueden seleccionar qué cambios incluir en esta etapa y cuáles ignorar.
    
*  Repository

    Cuando realizas un commit, los cambios que están en el área de preparación se guardan permanentemente en el repositorio. El repositorio es una base de datos que almacena todos los commits realizados en el proyecto a lo largo del tiempo. Cada commit contiene un conjunto de cambios, una marca de tiempo y un identificador único que permite acceder a ellos y volver a estados anteriores del proyecto si es necesario.

    
    
## Comandos Básicos de Git 

- **git init** :  Sirve para la creación de un proyecto nuevo (empezar a utilizar en cualquier poyecto git )
- **git add<file>** : Sirve para pasar archivos del working directory al a staging area
- **git status:**  Sirve para ver en qué estado están los archivos ****
- **git commit :** Sirve para pasar de staging área al repositorio
- **git commit -m**
- **git push :**  su función es subirlo a un repositorio remoto (servidor)
- **git pull :**  En caso de que se este trabajando con otros desarrolladores te muestra los cambios que le han realizado
- **git clone :** Realiza una copia desde el servidor central de donde se encuentra el codigo a tu computador
- **it config —global [user.name](http://user.name) “nombre”**
- **it config —global [user.](http://user.name)email“email”**
- **git checkout:** revertir el cambio en el archivo deseado
- **git diff “nombre del archivo”** . muestra lo que se modifico
- .**git ignore**
- Si se crea un archivo con el nombre .gitignore y adentro de este se le pone el nombre del archivo que no queremos que aparezca en nuestro proyecto
- **git branch  login** : Crea una versión alternativa
- **git branch** :para ver cuantas ramas existen y en cual estamos trabajando  
- **git checkout login** : moverse a ese destino o ramas 

## Trabajo Realizado 
    
    
    
Durante este primer video se realizará la creación de diferentes programas como son java scrip html y css los cuales no contienen nada complejo de modo que estos solo se utilizaron para lograr comprender los conceptos básicos de git y aprender a utilizar los comandos, para ellos se utilizó el visualizador de código Visual Studio     


    ![image](https://github.com/Reivaq/Practicas/assets/140466947/81763f8d-25b8-4655-a429-92bbc1998ff2)

Todos estos archivos se guardaron en una sola carpeta de modo que a la hora de trabajar con git fuera mas fácil. Abrimos el centro de comandos de git de la siguiente manera
  ![image](https://github.com/Reivaq/Practicas/assets/140466947/cd250f54-7766-4357-bdd6-2502ab8c38a5)
    
Donde posterior mente se nos mostrara la siguiente ventana la cual es muy parecida al cmd
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/0eb1e55b-bd62-4322-afa7-9f34409e199b)

Una vez en esta ventana ya podemos empezar a utilizar los comandos 


![image](https://github.com/Reivaq/Practicas/assets/140466947/41615401-371e-4242-bad3-99cf073fb9c8)


Iniciamos utilizando git init para poder empezar a trabajar en un nuevo proyecto 
    
con el comando git status vemos que archivos son los que están agregados y cuales no 
 en este caso como se muestra en la imagen tenemos dos archivos los cuales no están agregados, para agregarlos utilizaremos el comando git add <file> con el cual ya podemos empezar a trabajar con ellos

  
    ![Uploading file..._2toegawim]()


Una vez agregado los archivos verificamos el status para comenzar a trabajar con ellos  
 
![image](https://github.com/Reivaq/Practicas/assets/140466947/49e547ba-44fc-4e2c-acb6-836f4999cb8d)


  Para poder realizar cambios en los archivos tenemos que registrar nuestro correo y nombre para así poder llevar un control de quienes han modificado los archivos
    
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/36eaead5-661b-4f8a-93fb-807354f2e7dc)

 
Con el comando commit podemos darle los últimos toques a nuestro archivo
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/0f37ce89-2e5e-4831-9c43-7ed94982e5db)



Con ayuda del comando git log podemos ver todas las modificaciones que se han realizado a nuestro programa
    
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/1c88af03-2e27-4def-8207-ef6e16f6ffd1)



Con git Branch podemos crear una copia de nuestro program que sea total mente independiente de este y realizar las modificaciones que queramos teniendo dos modos el maste y el logi
    
    
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/5379b2fa-a47b-456f-b15c-77969dd4bc71)


    
    
Después de todo esto ya podemos subir nuestro código a github, para subir nuestro código entramos a nuestra página de github en donde en la parte de repositorio podemos crear uno nuevo
    
    ![image](https://github.com/Reivaq/Practicas/assets/140466947/03e89c37-d35a-47a7-8f47-093b0ef5d214)
   


![image](https://github.com/Reivaq/Practicas/assets/140466947/bda9cbe1-7200-4848-8f08-67b799468fa3)
  

Una vez configurado todo esto lo siguiente es cargar nuestro código desde la línea de comandos lo cual es relativamente fácil debido a que github ya nos da los códigos los cuales podemos utilizar 
    
 
![image](https://github.com/Reivaq/Practicas/assets/140466947/2b5da795-ed50-4fde-9c0d-7404969423c4)

    
![image](https://github.com/Reivaq/Practicas/assets/140466947/e7dc33da-c7e1-4330-9e15-084124a40bca)


 Que dando de la siguiente manera 
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/ff8213a0-4774-4b79-af0d-f3840fc143b0)


    
## Conclusión 
    
 En este primer curso se logró comprender para que sirve Git y GitHub además  de aprender los comandos básicos y como subir un archivo a github    



#Dia 2

## Tarea 
Retomando lo aprendido el día de ayer lo que deberemos hacer hoy aparte de avanzar con los videos se deberá acceder al archivo Curso GitHub.HTML desde la terminal de cmd y bash de linux en Windows 

Para ello abrimos la terminal de Git Bash  


![Captura de pantalla (2974)](https://github.com/Reivaq/Practicas/assets/140466947/78fb8f57-b008-4be3-8241-b338c85a17ab)


Con ayuda del comando ls podemos ver en donde estamos ubicados ademas de mostrarnos todas las carpetas disponibles que tenemos, hay ubicaremos la carpeta donde se ubique nuestro archo.

Una vez ubicada nuestra carpeta con el comando Cd <NAME FILE> nos moveremos ala carpeta deseada 
    
   ![Captura de pantalla (2975)](https://github.com/Reivaq/Practicas/assets/140466947/df757408-0b52-4e19-bfaa-bae1069df21c)

    
    
Ya dentro de nuestra carpeta buscamos nuestro archivo con el comando ls 
    
    
   ![Captura de pantalla (2976)](https://github.com/Reivaq/Practicas/assets/140466947/83a738b9-7351-4f3e-b8fa-886105b6d923)


    
  
Con el CMD se siguen los mismos pasos y comandos primero usando el comandos ls para saber dónde estamos ubicados
    
   ![Captura de pantalla (2977)](https://github.com/Reivaq/Practicas/assets/140466947/c171bdb5-e7dd-4d99-88ec-54e3ab13c935)

    
después el comando CD para desplazarnos entre carpetas hasta encontrar nuestro archivo
    
![Captura de pantalla (2978)](https://github.com/Reivaq/Practicas/assets/140466947/3cdddfe1-1591-423a-ab4d-4d915f0d3e17)

    
    
# Curso HTML para principiantes
    
En este pequeño curso se abordará los comandos básicos de HTML, etiquetas y el cómo crear una página de manera sencilla 
se tarto de realizar una página como se muestra a continuación

![Captura de pantalla (2981)](https://github.com/Reivaq/Practicas/assets/140466947/05d67462-fe92-422c-8606-3a1215185019)

cómo se observa en la imagen la página se dividió en 5 pasos a seguir en los que en cada uno de ellos se le tenía que dar una estructura adecuada, cabe resaltar que la pagina estar echa en HTML y no contener código css (aun) no se verá tal como la imagen, pero llevará el mismo formato.

Para iniciar con nuestra página lo primero que hicimos fue crear la carpeta y el archivo en el cual se trabajó, el archivo principal lleva de nombre index.html que es que usualmente se le da al archivo principal 

Una vez nombrado nuestro archivo en la primera línea de código escribiremos el código como en la imagen siguiente el cual indica que se está usando la versión más reciente de HTML, en la segunda línea se encuentra la etiqueta lang que es la que configura el idioma de nuestra pagina

 ![image](https://github.com/Reivaq/Practicas/assets/140466947/f1fa799e-482c-4c02-9daa-75fd90c7a34b)
 

En la primera parte de nuestro programa ira la etiqueta <head> en la cual irán otras etiquetas como los son <meta> las cuales nos ayudan de pendiendo de la especificación que le pongamos a que nuestra página pueda ser encontrada más fácilmente con ayuda de palabras clave, descripción de nuestra página y el titulo que se mostrara en la pestaña

![image](https://github.com/Reivaq/Practicas/assets/140466947/ad17868d-bc5c-4cf3-91ca-7fad663b0daf)


En la siguiente parte se inicializa el cuerpo de nuestro programa 


![image](https://github.com/Reivaq/Practicas/assets/140466947/097f67d5-f689-43b3-8ddb-73d5cf2a144a)

Dentro del cuerpo de nuestro programa podemos encontrar diversas etiquetas como lo es en el caso de la línea 20 en donde se utiliza la etiqueta h1 para definir el título de nuestra página.

En la línea 23 podemos encontrar la etiqueta nav la cual nos ayuda a representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otro documento. El cuál sería el punto numero 2


![image](https://github.com/Reivaq/Practicas/assets/140466947/204fbdd3-ecc1-4357-99f8-776076e81f89)


Una de las partes más largas dentro del body es la etiqueta sección en donde se encuentra la parte 3 de nuestra página en la cual irán los textos, subtítulos de nuestro pagina

![image](https://github.com/Reivaq/Practicas/assets/140466947/42334c92-b25d-456e-88c0-e69e33bea6dd)

 
Debido a la estructura de nuestra página contamos con varios títulos principales h1 para que no exista ningún conflicto o confusión al momento de que alguien más intente leer nuestro código lo que se hace es agruparlo con ayuda de la etiqueta hgroup la etiqueta h2 realiza un subtitulo y entre el número que acompaña la h sea más cercano a 6 este será más pequeño 

Para agregar los párrafos se utiliza el comando p el cual nos permite agregar texto, la etiqueta <time> nos permite agregar una fecha de creación de la pagina

 
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/1deb9808-8e6a-47fe-879f-95f1be3d248a)
 

 La etiqueta <image> nos permite insertar imágenes dentro de nuestro código siempre y cuando estas se encuentren dentro de la misma carpeta de nuestro código de otra manera se debe de especificar la ruta

 ![image](https://github.com/Reivaq/Practicas/assets/140466947/f36bb3f7-dbeb-4bbd-a8ee-1be4c702323f)
 

nuestro articulo termina agregando un link el cual nos puede redireccionar hacia otra página que deseemos para ello utilizamos la etiqueta a herf la cual nos permite introducir un link dentro de un texto

![image](https://github.com/Reivaq/Practicas/assets/140466947/3ba5a481-30fb-42a9-b371-97f3d743a88d)


Debido a que en nuestra imagen base se encuentran dos párrafos lo único que hacemos es copiar el formato del primer párrafo y modificar el texto. Terminado así con la parte 3

![image](https://github.com/Reivaq/Practicas/assets/140466947/04d314f6-ec62-46f7-bbf8-08489755cbb5)


La parte 4 y 5 son unas de las más sencillas a mi parecer debido a que no presenta mucha dificultad para esta parte nos ayudaremos de etiqueta aside la cual representa una sección de una página que consiste en contenido que está indirectamente relacionado con el contenido principal del documento.

en esta parte podemos poner mensaje o citas con ayuda de blockquote, terminado la parte 4


![image](https://github.com/Reivaq/Practicas/assets/140466947/d863aea2-8371-45ec-8ddb-71082ff04743)


Por ultimo para terminar el completamente el cuerpo de nuestra página se utilizara el pie de página en la cual pueden ir diferentes anotaciones, esto lo aremos con "footer"

![image](https://github.com/Reivaq/Practicas/assets/140466947/85e1ea61-e256-41ee-939b-6649fc813d07)


Así de este modo terminado nuestra primera página en HTML 
Par que la pagina quede de manera más estética se le debe aplicar código css el cual es el siguiente curso a realizar


# Dia 3

## Curso básico de CSS 

Retomado lo aprendido del día anterior, lo que se hará ahora es realizar una mejora de apariencia a nuestro programa debido a que la forma en la que se encuentra es legible para la máquina, pero muy poco agradable visualmente para los usuarios de la página, esto se solucionará con ayuda de otro programa el cual estará escrito en lenguaje CSS.

Existen diferentes maneras para darle apariencia a nuestro pagina una de ellas es modificando las etiquetas directamente en el mismo programa index, lo malo de esto es que nuestro código quedara muy mal estéticamente, para solucionar esto se creara un nuevo archivo el cual ira contenido en la misma carpeta, pero con el nombre style y extensión CSS.

Creación del archivo 

![image](https://github.com/Reivaq/Practicas/assets/140466947/c16dbbfe-e9fd-4b7c-b6ac-f02bd39f4426)

Para poder utilizar todo lo que contenga este archivo dentro de nuestro programa original deberemos utilizar el siguiente comando dentro de “<head> “ <link rel=" stylesheet" href="estilos.css">” esto os ayudara a llamar y utilizar el archivo 

![image](https://github.com/Reivaq/Practicas/assets/140466947/6fc96c2a-6cc9-4019-998f-20da2f70ddee)

Existen diferentes formas de dar estilo a nuestra página, modificando los atributos de una etiqueta, esto se realiza directamente en el programa principal.

![image](https://github.com/Reivaq/Practicas/assets/140466947/0ef231c6-cf87-40cb-907a-64c85d93a764)

Con ayuda de selectores estos van ubicados en la parte principal de nuestro programa y tiene la capacidad de modificar varios atributos ala vez 

![image](https://github.com/Reivaq/Practicas/assets/140466947/18edd230-c901-45d1-83b9-c16fda526e9d)

Otra forma es con ayuda de id o nombrar las clases para modificarlas individualmente

Para nuestro caso para un mejor entendimiento y estética se desarrollará otro programa como se mostró anteriormente.

Empezaremos modificando los todos los títulos principales y secundario esto lo haremos con la siguiente línea de código, en donde se llama ala etiqueta h1 y h2. Con el comando “Font-zise” se le da el tamaño de la letra que se desea medido en pixeles, el comando “Font-family” define el tipo de letra que se desea, el codigo “Font-weigth” define si son negritas o normales.

![image](https://github.com/Reivaq/Practicas/assets/140466947/75f5a500-2a61-4558-aa03-f8f319d2f679)


Con las siguientes líneas de código nos encargamos de que las diferentes secciones de nuestro código sean alteradas de la misma manera, en este caso con el codigo “ display:block;” se encarga de ordenar nuestros textos de manera ordenada en cajitas lo que facilita su manipulación 

![image](https://github.com/Reivaq/Practicas/assets/140466947/db397535-19e0-434e-a69a-d929eb0d469e)

Para la parte del cuerpo de nuestro pagina se realizará una alineación de manera que esta quede centrada con ayuda de “ text-aling: center,” esta poción pude variar solo cambiando a left, rigth, bottom o rigth.

![image](https://github.com/Reivaq/Practicas/assets/140466947/38fe5c7a-27c0-4248-acf7-e0f6708785b9)


Lo que se muestra a continuación es otra forma de estilizar nuestro programa, para ello se deben de crear clases dentro de las etiquetas con nombres que las distingan ene le programa original y llamarlas desde el otro programa con el nombre de la clase pero con un punto al inicio.
En este caso se modificará la clase div que es la que agrupa todo el cuerpo del programa.

Programa original modificado 

![image](https://github.com/Reivaq/Practicas/assets/140466947/6dc76dc6-709f-4022-b034-b87aa46f2069)

Líneas de código en css

En este caso con el comando withd se le da un ancho a toda la página, se opta por dejar que la maquina realice el diseño de las márgenes automáticamente con el código de la línea 25, el código de la línea 24 nos ayuda a establecer un margen para nuestra información el cual será de ancho de 1 pixel será solido y de color negro
 
![image](https://github.com/Reivaq/Practicas/assets/140466947/fbc53411-45c9-4bbc-a784-e7483bd70c48)

Otra forma diferente de agregar colores a nuestros diseños es como se muestra en la línea 30, 31 y 36. En la linea 32 y 37 e observa un padig es una propiedad o relleno que se crea alrededor del contenido de un elemento dentro de los bordes definidos y sirve para dar formato y diseño a una página web.

![image](https://github.com/Reivaq/Practicas/assets/140466947/3643ac76-c410-499b-ab90-a045c04a6762)

Para modificar nuestro menú superior se realizo una clase llamada menu como se muestra en la imagen. 

![image](https://github.com/Reivaq/Practicas/assets/140466947/b04f9af3-314e-42eb-806d-69c7a17a95d1)

Dentro del código de css primeramente en la línea 42 se quitaron todos los estilos de la listas “li” para poderles dar uno nuevo, con Font se modifico la letra y una de las partes mas importantes es que con el código de la línea 46 se colocaron los textos en forma horizontal.

![image](https://github.com/Reivaq/Practicas/assets/140466947/c509a031-8581-4d85-9134-6b8bfc4b406c)

Para la parte de las secciones se realizo lo mismo modificando el código original creando una clase con el mismo nombre 

![image](https://github.com/Reivaq/Practicas/assets/140466947/ff8be1ec-fddd-47b4-adee-a7d530030874)

Posterior mente se modificó como lo hemos venido haciendo a excepción  de la línea de código 62 y 67 donde se coloco un margen superior y con la línea de código 66 se alineo hacia la derecha 


![image](https://github.com/Reivaq/Practicas/assets/140466947/805aa1d8-22c8-4384-95cf-73280b96d287) 

Para que la fecha no resaltara mucho se optó por buscar el código de un color el cual fuese un poco mas transparente 

![image](https://github.com/Reivaq/Practicas/assets/140466947/91631567-74eb-4663-93bd-3e94caff7bc4)

Para el parte de pie de pagina se creo una clase llamada pie 

![image](https://github.com/Reivaq/Practicas/assets/140466947/809056c0-3c90-4043-bbac-0b6fc2f61a4c)

Y la cual posteriormente llamamos en nuestro código CSS. En la línea 89 es la más relevante ya que se utiliza la propiedad "clear" esta controla cómo se comportan los elementos flotantes que están alrededor del elemento con la clase "pie". En este caso, both significa que el elemento con la clase "pie" no debe permitir que ningún elemento flotante (ya sea a su izquierda o derecha) esté cerca de él.

![image](https://github.com/Reivaq/Practicas/assets/140466947/26951436-f5d2-4d09-9755-96088551901d)

Por último modificamos nuestra imagen de modo que esta se acomode aun tamaño automático para que no se salga de los márgenes cabe aclarar que esto lo podemos modificar manualmente también si deseamos.

![image](https://github.com/Reivaq/Practicas/assets/140466947/617bcc01-2866-46e8-87da-850f1a62232f)
Resultado final 

![image](https://github.com/Reivaq/Practicas/assets/140466947/7b9f95f1-34dc-41b2-8f1f-861354477617)


    






