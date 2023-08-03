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



# Dia 2

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


# Dia 4 

En esta ocasión continuaremos con el curso básico para la creación de páginas con Javascript, para ello lo unió que utilizaremos será el editor de código visual estudio code y nuestro navegador.

## Tipo de datos en JavaScript

* Strings: los strings son cadenas las cuales se conforman por palabras y los cuales contienen información de cualquier índole que queramos como se muestra en la siguiente imagen 

![image](https://github.com/Reivaq/Practicas/assets/140466947/7e23b520-ed2c-4e9a-97c7-dec5cf13b937)

* numer: como su nombre lo dice son los cuales pueden almacenar cualquier tipo de numero 

![image](https://github.com/Reivaq/Practicas/assets/140466947/2c8a70ed-2841-4799-b9ac-dec247a83b42)

* Booleand 
Los booleanos son condiciones para indicar si algo es verdadero (true) o falso (false)

![image](https://github.com/Reivaq/Practicas/assets/140466947/bff34b09-9ec7-4189-ab7f-ee759397e468)

* Los array nos sirven para almacenar información en forma de lista, vector o cadena y así poder agruparlos 

![image](https://github.com/Reivaq/Practicas/assets/140466947/8bfea2b1-327d-4e0a-815b-2179ef91ecfe)

* Object: las clases object sirven para acinar información especifica a una variable u objeto 

![image](https://github.com/Reivaq/Practicas/assets/140466947/b380755a-3955-426e-bbd0-033aca73ebc5)

## Variables 
Existen diferentes maneras de inicializar una variable como lo son “lent” y “var”, cualquiera de las dos sirve para lo mismo además, de que su sintaxis es muy parecida  

![image](https://github.com/Reivaq/Practicas/assets/140466947/8b46bb7d-770e-4fcf-b417-6c51e27a5785)

## Constantes 

Las constantes son muy similares alas variables, pero como su nombre lo indica estas ya no pueden cambiar su valor si no que son valor que asignamos y no podemos modificar lo cual es de gran ayuda.

![image](https://github.com/Reivaq/Practicas/assets/140466947/c51b01af-c9ec-4f48-bb68-829617764a78)

## Operaciones Lógicas 

Como en todo lenguaje también contamos con operaciones lógicas las cuales son 
* suma: “+”
* Resta:”- “
* multiplicación:” ()()”
* división: “/”
* Comparación: ">", "<", ">=", "<=", "==", "!="

Cada uno de ellos esta diseñado para acciones específicas, pero no todos se limitan a solo números, sino que también se pueden utilizar para cadenas de nombres y variables.

#### Ejemplo de suma de dos numero 

![image](https://github.com/Reivaq/Practicas/assets/140466947/c36d3acd-6fb9-493c-bbfc-25dfec6acec7)

#### Ejemplo de concatenación de un nombre y apellido 

![image](https://github.com/Reivaq/Practicas/assets/140466947/d4482d50-40ed-4cb6-9f5a-704ed1eb07c3)

### Ejemplo de comparación de dos números 
 
![image](https://github.com/Reivaq/Practicas/assets/140466947/c30ff808-1afb-4231-a3c0-0cec1ceae697)

## Condicionales 

Los condicionales son estructuras de control que permiten que el código tome decisiones y ejecute diferentes bloques de código basados en ciertas condiciones. Los condicionales son fundamentales para la programación, ya que permiten que un programa se adapte y responda a diferentes situaciones.

Los condicionales más comunes en JavaScript son "if", "else if", "else", “case”

* if: Es la forma más básica de un condicional. Permite ejecutar un bloque de código si una condición especificada es verdadera

* else if: Permite comprobar múltiples condiciones en secuencia y ejecutar diferentes bloques de código según la primera condición verdadera que se encuentre.

* else: Es la última parte de un condicional y se ejecuta cuando todas las condiciones anteriores son falsas. No lleva ninguna condición, simplemente se ejecuta si las condiciones previas no se cumplen. Solo puede haber un "else" por cada bloque de "if" o "else if".

* El switch es otra estructura de control en JavaScript que también se utiliza para tomar decisiones basadas en el valor de una expresión. Se diferencia del if-else en que está diseñado para comparar una única expresión con varios casos posibles y ejecutar el código asociado al caso que coincida.

#### Ejemplo de condicional If-else

En este ejemplo temeos tres variables, la cual una es pasword, otra user y otro input la cual se encarga de realizar una comparación entre estas dos ultimas en caso de que coincidan se imprime loing correct, en caso contrario Contraseña incorrecta 

![image](https://github.com/Reivaq/Practicas/assets/140466947/c910c20f-6a92-42c0-963a-e6e60a593c83)

#### Ejemplo con el condicional case 

Este código es un ejemplo de cómo se utiliza la estructura de control switch en JavaScript para tomar decisiones basadas en el valor de la variable
Se define una variable typeCard con el valor "debitCard". Este será el valor que utilizaremos para tomar decisiones en el switch.

Comienza el bloque switch, donde la expresión entre paréntesis switch(typeCard) es la variable que queremos evaluar.

El primer caso (case 'debitCard') compara el valor de typeCard con la cadena 'debitCard'. Si la variable typeCard tiene el valor "debitCard",El break; indica que una vez que se ejecuta el caso correspondiente, se debe salir del switch, evitando que se ejecuten los otros casos accidentalmente.

El siguiente caso (case 'CreditCard') compara el valor de typeCard con la cadena 'CreditCard'. Si la variable typeCard tiene el valor "CreditCard"
Nuevamente, encontramos el bloque default. Si ninguna de las comparaciones anteriores coincide con el valor de typeCard, este bloque se ejecutará por defecto.

![image](https://github.com/Reivaq/Practicas/assets/140466947/26fb6e14-8836-439c-92c1-69cd0341ac28)

## Bucles 

Los bucles (también conocidos como loops) en JavaScript son estructuras de control que permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica. Los bucles son esenciales para automatizar tareas repetitivas en la programación y permiten que un programa realice acciones de manera eficiente y rápida.

En JavaScript, hay principalmente tres tipos de bucles:

* Bucle "for": El bucle "for" se utiliza cuando conocemos la cantidad exacta de veces que queremos que se repita el código. Tiene tres partes: la inicialización, la condición y la actualización.
* Bucle "while": El bucle "while" se repite mientras una condición sea verdadera. Es útil cuando no sabemos cuántas veces se ejecutará el código.
* Bucle "do-while": Es similar al bucle "while", pero la diferencia es que el bloque de código se ejecuta al menos una vez antes de verificar la condición.
#### Ejemplo con bucle For

* let nombre1 = [1, 2, 3];: Se crea un array llamado nombre1 con tres elementos: 1, 2 y 3.

* for (let i = nombre1.length - 1; i >= 0; i--) {: El bucle "for" se inicializa con i (el índice del array) inicializado con el valor de nombre1.length - 1, que es el último índice del array (3 - 1 = 2, ya que los índices en JavaScript comienzan en 0). La condición de terminación del bucle es i >= 0, lo que significa que el bucle se ejecutará mientras i sea mayor o igual a 0. Y después de cada iteración, se decrementará i en uno con i--.

* console.log(nombre1[i]);: Dentro del bucle, se accede al elemento del array nombre1 en el índice i (que va desde el último elemento hasta el primero). Luego, se imprime ese elemento en la consola.

![image](https://github.com/Reivaq/Practicas/assets/140466947/5f4b62da-edf8-4e3f-8822-370ab55b76fa)

#### Ejemplo con bucle while

* let count = 50;: Se inicializa la variable count con el valor 50.

* while (count > 0) {: El bucle "while" se ejecutará siempre que la condición count > 0 sea verdadera. Es decir, mientras el valor de count sea mayor que 0, el bucle se repetirá.

* console.log(count);: Dentro del bucle, se imprime el valor actual de la variable count en la consola.

* count = count - 1;: Después de imprimir el valor de count, se le resta 1 a la variable count, lo que hace que disminuya en 1 en cada iteración del bucle.

* El bucle continuará ejecutándose mientras count sea mayor que 0. En cada iteración, imprimirá el valor actual de count y luego disminuirá en 1. Esto se repetirá hasta que count llegue a 0, momento en el cual la condición count > 0 será falsa y el bucle se detendrá.

![image](https://github.com/Reivaq/Practicas/assets/140466947/7a0e12c0-a17f-49df-81fd-befbc4f01349)

## Funciones 

Las funciones son bloques de código en JavaScript que se definen una vez y pueden ser reutilizados y llamados en cualquier parte del programa. Permiten encapsular una lógica específica y ejecutarla cuando se necesita, lo que hace que el código sea más organizado, modular y fácil de mantener.

#### Ejemplo de función 

se define la función greeting sin parámetros. La función simplemente contiene una línea de código que utiliza console.log() para imprimir el mensaje "hello" en la consola
En esta línea, la función greeting se llama o invoca utilizando greeting(). Al hacer esto, el código dentro de la función se ejecuta y se imprime en la consola el mensaje "hello".
La función greeting() es un ejemplo simple que ilustra cómo definir y llamar funciones en JavaScript.

![image](https://github.com/Reivaq/Practicas/assets/140466947/8c7e134c-5a68-432f-9a5e-96fa67c62708)


Lo primero que realizamos es crear nuestra carpeta la cual contendrá nuestro curso de JavaScript ala cual llamaremos “course_javascript” después de esto nuestro navegador de preferencia crearemos una pagina en blanco lolocando “ about:blanck”

![image](https://github.com/Reivaq/Practicas/assets/140466947/5a64505d-8cb6-4cd8-8541-19d7b34ea81f)

![image](https://github.com/Reivaq/Practicas/assets/140466947/5fbe93d4-461a-4470-b6db-3357212f1215)

En esa misma pagina en la parte de más herramientas abriremos la parte de entorno para desarrolladores 

![image](https://github.com/Reivaq/Practicas/assets/140466947/ddb3d58f-8649-4c42-b0d0-1c9017ae3898)

En este caso nos concentraremos trabajando en la parte de la consola 

![image](https://github.com/Reivaq/Practicas/assets/140466947/2939cb46-d2b5-4577-a1de-459b7738923f)

Dentro de nuestro editor de código crearemos dos archivos uno llamado index con extensión .html y otro llamado app con extensión .js

![image](https://github.com/Reivaq/Practicas/assets/140466947/804adb3c-8d51-4a29-8c85-9ae554bb256c)

Escribiendo el comando html:5 crearemos una pagina muy sencilla de manera automática

![image](https://github.com/Reivaq/Practicas/assets/140466947/1b6890e1-01af-462c-b931-378aae703020)

Así como se hizo con html y css aquí también tendremos que usar la línea de código 10 para poder conectar java y html.

![image](https://github.com/Reivaq/Practicas/assets/140466947/bb6e03eb-7db1-4794-92b9-67afd894e495)



# Dia 5

Al haber finalizad los cursos básicos lo siguiente es aplicar todo lo aprendido para desarrollar un sitio web personal el cual nuestro perfil de cv, para esto se deben seguir ciertas condiciones:

*La página debe estar hecha en ReactJs
*El proyecto se debe exponer públicamente en la plataforma que prefiramos 
*El proyecto se debe compartir en GitHub


Para poder cumplir con los objetivos, nos dimos ala tarea de investigar que era ReactJS el cual es una biblioteca de JavaScript de código abierto que se utiliza para construir interfaces de usuario interactivas y reactivas. Es una de las bibliotecas más populares para el desarrollo de aplicaciones web modernas y de una sola página (SPA). ReactJS se enfoca en la creación de componentes reutilizables y permite construir interfaces de usuario complejas mediante el uso de una sintaxis declarativa.
Para poder crear un archivo esto se realiza desde el cmd ejecutando el siguiente comando “npx créate-react-app”

![image](https://github.com/Reivaq/Practicas/assets/140466947/4467d6cb-546e-4ff6-80e5-148a6c619361)

Al momento de ejecutarlo su tuvieron algunos problemas que nos retrasaron con respecto a una extensión llamada noe.js que es la que se encarga de ejecutar este comando

Este error se debía a algo relacionado con el proxi así que realizando una investigación se pudieron encontrar los siguientes comandos para solucionarlo.

![image](https://github.com/Reivaq/Practicas/assets/140466947/ff5e620e-903f-4347-bded-a9b183199ca2)

Una vez solucionado pudimos crear nuestros archivos de ReactJs

![image](https://github.com/Reivaq/Practicas/assets/140466947/80aaa3bf-f914-4f97-b5a6-e8f8d8dd7b25)

Que dando de la siguiente manera 

![image](https://github.com/Reivaq/Practicas/assets/140466947/b5cdb5cd-dae4-4a0c-87b5-943e9df5f21f)


# Dia 6

Para realizar el proyecto final se tuvo que investigar un poco mas acerca de todas las ventajas que estos nos ofrecia.
React.js, también conocido como React, es una popular biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y escalables. Fue desarrollada por Facebook y lanzada en 2013, y desde entonces ha ganado una amplia adopción en la comunidad de desarrollo web debido a sus ventajas y características únicas.

## Ventajas y Características Clave

1. Componentes Reutilizables
React se basa en el concepto de componentes, que son bloques de construcción independientes y reutilizables de una aplicación. Estos componentes encapsulan tanto la lógica como la interfaz de usuario, lo que facilita su mantenimiento y extensión a medida que la aplicación crece.

2. Virtual DOM (DOM Virtual)
Una de las características distintivas de React es el uso de Virtual DOM (DOM Virtual). Cuando los datos cambian en una aplicación React, en lugar de actualizar directamente el DOM del navegador, React actualiza primero el Virtual DOM. Luego, compara el Virtual DOM actualizado con el estado anterior del Virtual DOM y aplica solo las diferencias al DOM real. Esto mejora significativamente el rendimiento y la eficiencia de la actualización de la interfaz de usuario.

3. JSX (JavaScript XML)
React utiliza JSX, una sintaxis que combina JavaScript y XML, para definir la estructura de los componentes. JSX facilita la escritura de código más legible y declarativo, lo que ayuda a los desarrolladores a visualizar la interfaz de usuario y a trabajar de manera más eficiente.

4. Unidireccionalidad de Datos
El flujo de datos en React sigue un patrón unidireccional, lo que significa que los datos fluyen desde el componente padre hacia los componentes hijos. Esto mejora la previsibilidad y facilita el seguimiento de los cambios en los datos, lo que simplifica el proceso de depuración y evita efectos secundarios no deseados.

5. React Native
React Native es una extensión de React que permite el desarrollo de aplicaciones móviles nativas para iOS y Android utilizando JavaScript. Comparte una gran cantidad de código entre plataformas, lo que permite a los desarrolladores crear aplicaciones móviles multiplataforma de manera más rápida y sencilla.

    
# Dia 7

Una vez entendido todo como funciona React lo siguiente es crear un archvio el cual contendra nuestra pagina con el siguiente comando en cmd "npx create-react-app cv"

 ![image](https://github.com/Reivaq/Practicas/assets/140466947/b42a1bc2-a51d-487f-abe0-5c130d2adc25)

 
 una vez cereado nos lo abriremos con visual studio code en donde se nos mostra las siguientes carpetas, donde trabajaremos son en las carpetas scr para se mas especificos en la carpeta index.js y index css.
 
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/e2161b32-0d71-4480-aa13-f5d8aeb7c606)

 
 En estas carpetas ya viene con un codigo por defecto del programa estos lo borraremos y empezaremos a escribir el nuestro 
 
En la carpeta "App.js" comenzaremos a escribir toda la estructura que llevar nuestro codigo mientras que en la carpeta "App.css" pondremos lo que estodo los detalles esteticos de nuestro programa 

## Estructura del Código "App.js"

![image](https://github.com/Reivaq/Practicas/assets/140466947/5ed0cd45-68a0-497b-aa03-96801f2c6a10)

1. **Importaciones:**
   - Se importa un archivo de imagen llamado "logo.svg".
   - También se importa un archivo de estilos llamado "App.css" para aplicar estilos a la aplicación.

2. **Función `App()`:**
   - Esta función representa el componente principal de la aplicación.

3. **Estructura JSX:**
   - Se define una estructura JSX que define cómo se verá la aplicación en el navegador.
   - Comienza con un contenedor principal `<div>` con la clase "App".
   - Dentro del contenedor, se encuentran tres secciones principales:

     1. `<header>`: Esta sección contiene un título principal `<h1>` con el nombre "Antonio Quiroz" y un subtítulo `<h3>` con el texto "Ingeniero Mecatrónico".

     2. `<div className='imagen_fondo'>`: Esta sección contiene una imagen que se muestra en la página. La imagen tiene la ruta "ia.jpeg".

     3. `<nav className='descripcion'>`: Esta sección contiene un párrafo de texto.

     4. `<article className='barra_izq'>`: Esta sección contiene un título `<h3>` que dice "Contacto", pero actualmente no contiene más información.

4. **Estilos:**
   - Los estilos se aplican a través del archivo "App.css", que contiene reglas de estilos para las clases "imagen_fondo", "descripcion" y "barra_izq".
   - Los estilos definidos en este archivo afectan el diseño y la apariencia de las secciones correspondientes en la aplicación.

## Estructura del Código "App.css"

![image](https://github.com/Reivaq/Practicas/assets/140466947/8da67464-d560-4eb8-a8e5-8f6179ea7238)

![image](https://github.com/Reivaq/Practicas/assets/140466947/99c90104-2404-4908-9cb6-bb79cf8e6ebc)

![image](https://github.com/Reivaq/Practicas/assets/140466947/85adbd0d-8731-411d-accd-33618659057b)

### Explicación del Código CSS

Este código CSS proporciona estilos y diseño para la aplicación personal de Antonio Quiroz. A continuación, se explica cada parte del código:

### Estilos Generales

- `.App`: Establece las propiedades generales del contenedor principal de la aplicación. Se define un ancho de 1300px y un alto de 1000px. También se le aplica un borde de 1px de grosor en color negro, y se ajustan los márgenes y el relleno a 0 para eliminar espacios innecesarios.

- `header`: Aplica estilos al encabezado de la página. Se establece un fondo de color "#fef9e7" (amarillo claro), se centra el texto y se cambia el tamaño del texto a 30px. Además, se aplica un borde de 1px en color "#FFE176" (amarillo más oscuro) para resaltar el encabezado. Se ajusta el margen izquierdo a 250px para dar espacio al contenido y mejorar la apariencia.

### Estilos de la Sección de Descripción

- `.descripcion`: Establece estilos para la sección de descripción de header. Se alinea el texto a la derecha y se aplica negrita al texto con un tamaño de fuente de 100px en la fuente "Arial". El fondo se establece en blanco. La sección tiene un margen superior, izquierdo y inferior de 250px, lo que separa la descripción de la imagen y la barra lateral.

### Estilos de la Sección de Imagen de Fondo

- `.imagen_fondo`: Establece estilos para la sección de imagen de fondo. Utiliza flexbox para centrar tanto horizontal como verticalmente la imagen. Se posiciona absolutamente en la parte superior de la página y ocupa un área de 250x250px. Además, aplica un fondo degradado utilizando `linear-gradient` con colores "#ffa751" (naranja) y "#ffe259" (amarillo claro) para dar un aspecto llamativo.

### Estilos de la Barra Lateral

- `.barra_izq`: Define los estilos para la barra lateral. La barra se posiciona absolutamente en la parte superior de la página y tiene un ancho de 250px y un alto de 748px. Se establece un fondo de color "#fef9e7" (amarillo claro) y se centra el texto. Además, se aplica un borde de 1px en color "#FFE176" (amarillo más oscuro) para resaltar la barra.

### Estilos de la Imagen

- `img`: Establece un alto y un ancho de 150px para la imagen. Esto ajusta el tamaño de la imagen para que tenga una apariencia más adecuada en la página.


# Dia 8

Este dia se continuo trabajando con la pagina de cv donde se lograron avanzes significativos agregado la mayor parte de los componetes.

Seprecenta lo agregado a App.css

![image](https://github.com/Reivaq/Practicas/assets/140466947/8b786326-81ec-4624-b050-ced32e8681ca)

![image](https://github.com/Reivaq/Practicas/assets/140466947/c9b1a749-a3d6-4431-8d4f-036c90a415a1)

![image](https://github.com/Reivaq/Practicas/assets/140466947/2079d4c1-416b-44ca-863b-c5fbb2c8e0e8)

![image](https://github.com/Reivaq/Practicas/assets/140466947/9e174cdf-6b4d-453d-9b90-eead75f34cc0)

    ## Clase .barra_izq

- `padding: 0;` y `padding-left: 0px;`: Se establece el relleno (padding) a cero y se anula el relleno izquierdo.
- `position: absolute;`: Posiciona el elemento de forma absoluta en la página.
- `top: 0;` y `margin-top: 250px;`: Establece el desplazamiento desde la parte superior de la página a 250px.
- `background-color: #73C6B6;`: Define el color de fondo como "#73C6B6".
- `text-align: center;`: Centra el texto horizontalmente en el contenedor.
- `font: bold 100px Arial;`: Establece la fuente en negrita de tamaño 100px y utiliza la familia de fuentes Arial.
- `border: 1px solid #FFE176;`: Agrega un borde de 1px sólido con color "#FFE176".
- `width: 250px;`: Define el ancho del elemento a 250px.
- `height: 748px;`: Define la altura del elemento a 748px.

## Clase .contac

- `position: absolute;`: Posiciona el elemento de forma absoluta en la página.
- `top: 500px;`: Establece el desplazamiento desde la parte superior de la página a 500px.

## Etiqueta img

- `height: 150px;` y `width: 150px;`: Limita el tamaño de todas las imágenes a 150x150 píxeles.

## Clase .dos y .arrob

- `.dos`: Establece una altura de 20px y un ancho de 20px. Se posiciona desde la izquierda (`position: left;`) y a 30px desde la parte superior (`top: 30px;`).
- `.arrob`: Establece una altura de 30px y un ancho de 30px.

## Selector header nav img div article

- Se define que todos los elementos `<header>`, `<nav>`, `<img>`, `<div>`, y `<article>` deben mostrarse como bloques (`display: block;`).

## Clase .lista y .lunguages

- `.lista`: Establece el texto alineado a la izquierda (`text-align: left;`) y un relleno izquierdo de 20px (`padding-left: 20px;`).
- `.lunguages`: Al igual que `.lista`, también establece el texto alineado a la izquierda y un relleno izquierdo de 20px.

## Clase .aptitud

- `text-align: center;`: Centra el texto horizontalmente en el contenedor.

## Clase .centro

- `padding: 0;`, `padding-right: 15px;`, `padding-left: 270px;`, `padding-top: 10px;`, `padding-bottom: 30px;`: Define diferentes valores de relleno en todas las direcciones.
- `background: ...`: Establece un fondo con un degradado utilizando colores degradados desde `#a8e063` hasta `#56ab2f`.

## Clase .Mi_persona

- `text-align: justify;`: Justifica el texto dentro del contenedor.

## Selectores h1 h2 h3 h4 h5 h6

- Se establece la familia de fuentes `'Times New Roman', Times, serif` y se pone el texto en negrita (`font-weight: bold;`) para los encabezados de todos los niveles.

## Etiqueta p

- `font-family: sans-serif;`: Define la familia de fuentes como sans-serif para todos los párrafos (`<p>`) en la página.



Se presentara lo agregado en la aplicacion App.js

![image](https://github.com/Reivaq/Practicas/assets/140466947/b9d80f1f-a217-4026-8b7f-c6a9ec1ca2ba)

![image](https://github.com/Reivaq/Practicas/assets/140466947/b671b5b7-cfc7-45e0-a177-1e47867a99c6)


![image](https://github.com/Reivaq/Practicas/assets/140466947/769ca9c1-c73b-4265-bc93-b3134000761c)

Se muestra una imagen con la etiqueta '<img>'. Se le ha asignado la clase 'arrob' utilizando className, lo cual  se usará para aplicar estilos CSS específicos a esta imagen. La imagen se cargará desde el archivo 'arroba.jpeg'.
Luego, hay un párrafo (<p>) con la clase 'correo'. El contenido de este párrafo es una dirección de correo electrónico: gowafaf473@naymedia.com

Despues encontramos un contenedor '<div>' con la clase 'lista'.Este div se utilizará para aplicar estilos a una lista de aptitudes.
Dentro del div, hay un encabezado de nivel 3 "'(h3)'" con la clase 'aptitud', que muestra el título "Aptitudes".
Después del encabezado, hay una lista desordenada '(<ul>)' que contiene varios elementos de lista '(<li>)' que enumeran las aptitudes del individuo. Cada aptitud se muestra como un ítem de la lista.
    
Se muestra otro encabezado de nivel 3 (h3) que indica la sección "Idiomas".
Luego, hay otro contenedor div con la clase 'lunguages', utilizado para aplicar estilos específicos a esta sección.
Dentro del div, encontramos otra lista desordenada (ul) que muestra dos elementos de lista (li). Cada elemento de lista enumera un idioma y su nivel de dominio.
    
Encontramos un artículo (article) con la clase 'centro'. Este artículo  contiene varias secciones que muestran detalles personales, académicos y de experiencia laboral.
Dentro del artículo, hay dos contenedores div con las clases 'Mi_persona' y 'academia'. Cada div se utiliza para agrupar información relacionada.
Dentro del primer div ('Mi_persona'), hay un encabezado de nivel 3 (h3) que indica la sección "Descripción de mi persona" y un párrafo (p) donde se invluye el texto de la descripción personal.
Dentro del segundo div ('academia'), hay un encabezado de nivel 3 (h3) que indica la sección "Formación académica" y una lista desordenada (ul) donde se espera que se incluyan detalles sobre la formación académica.
Luego, hay otro encabezado de nivel 3 (h3) que indica la sección "Experiencia laboral" y una lista desordenada (ul) con la clase 'silla_cama'. Se espera que aquí se incluyan detalles sobre la experiencia.
    
 


 
 

 



 
 

 





