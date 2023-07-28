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




