# Documentacion 29 Agosto

Testing

Creacion del archivo para cprovar el testing 

![image](https://github.com/Reivaq/Practicas/assets/140466947/1115388c-3a41-4c32-ad66-2c057d6fe413)
![image](https://github.com/Reivaq/Practicas/assets/140466947/1f47ca7c-d269-4732-9b14-e2c4270372bf)


Ejecucion del codigo 
![image](https://github.com/Reivaq/Practicas/assets/140466947/e7be4d37-5364-428c-8496-b758a63a5781)
![image](https://github.com/Reivaq/Practicas/assets/140466947/2700f5fa-80f8-4a5c-8f13-8d4681591010)

Lo visto anterior mente seria realizado por nuestra cuenta de la manera que entendamos pero ya existen diferentes herramientas o aplicaciones las cuales nos ayudan a realizarlos de mejor manera 

En este caso utilizaremos **Jest**
![image](https://github.com/Reivaq/Practicas/assets/140466947/0967fb60-1205-4131-8b35-f51acb49a160)
Realizamos su instalacion en nuestro programa 
![image](https://github.com/Reivaq/Practicas/assets/140466947/af06ac11-b9a7-40f0-a6fa-1ab34893a89f)
Para evitar que nos de algunos problemas modificaremos lo siguiente en nuestro packgeJson
![image](https://github.com/Reivaq/Practicas/assets/140466947/164632b5-55de-4a73-9d8c-46f0929ecb4a)

Ahora para probar todo esto crearemos diferentes programas


* ForTesting.js : aqui se encuentran todas las  funciones a  utilizar y que vamos a estar ocupando 
![image](https://github.com/Reivaq/Practicas/assets/140466947/f6e1f2f7-cf03-49eb-9e25-5e6948ba3e1e)
Explicacion 

Función palindrome:
Esta función toma una cadena (string) como entrada y realiza las siguientes operaciones:

.split(''): Divide la cadena en un array de caracteres individuales.
.reverse(): Invierte el orden de los elementos en el array.
.join(''): Une los elementos del array invertido para formar una cadena nuevamente. 
Así que, básicamente, esta función crea un efecto espejo de la palabra de entrada.

Función average:
Esta función calcula el promedio de los elementos en un array de números. Toma un array como entrada y realiza lo siguiente:

Comprueba si el array tiene una longitud de cero. Si es así, devuelve 0, indicando que no se puede calcular un promedio para un array vacío.
Inicializa una variable sum en 0 para mantener la suma acumulada de los elementos del array.
Itera a través de cada elemento en el array usando un bucle forEach y agrega cada elemento a la variable sum.
Calcula el promedio dividiendo la suma total (sum) entre la longitud del array (array.length).
Esta función calcula el promedio de los números en el array y lo devuelve.

Exportación de las funciones:
Al final del fragmento de código, las funciones palindrome y average se exportan como un objeto usando module.exports, lo que permite que otras partes del programa puedan importar y usar estas funciones.

* palindrome.test.js

![image](https://github.com/Reivaq/Practicas/assets/140466947/65d26eaa-710a-491e-8a22-6306c0413dd4)
Prueba 'palindrome of Javier':
Esta prueba está evaluando la función palindrome con la entrada ' Javier '. La función palindrome debería invertir la cadena y eliminar los espacios en blanco, por lo que se espera que el resultado sea 'reivaJ'. La aserción expect(result).toBe('reivaJ') verifica si el resultado de palindrome(' Javier ') es igual a 'reivaJ'.

Prueba 'palindrome of undefined':
Esta prueba está evaluando la función palindrome sin proporcionar ningún argumento, lo que significa que se espera que la función regrese undefined. La aserción expect(result).toBeUndefined() verifica si el resultado de palindrome() es undefined.

* average.test.js

![image](https://github.com/Reivaq/Practicas/assets/140466947/8e49f843-4bbe-4966-9ce0-ed41e73af96a)
Bloque describe:
El bloque describe se utiliza para agrupar pruebas relacionadas bajo un título común. En este caso, se esta agrupando las pruebas relacionadas con la función average bajo el título 'average'. Esto ayuda a organizar las pruebas y a dar contexto sobre qué se está probando.

Prueba 'Of one value is the value itself':
Esta prueba verifica si la función average calcula correctamente el promedio de un solo valor en un array. Dado [1], que es el único valor en el array, se espera que el promedio sea 1. La aserción expect(average([1])).toBe(1) verifica si el resultado de average([1]) es igual a 1.

Prueba 'Average of many values is calculated correctly':
Esta prueba verifica si la función average calcula correctamente el promedio de múltiples valores. Dado [1, 2, 3, 4, 5, 6], se espera que el promedio sea 3.5. La aserción expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5) verifica si el resultado de average([1, 2, 3, 4, 5, 6]) es igual a 3.5.

Prueba 'Average of an empty array is 0':
Esta prueba verifica si la función average devuelve 0 cuando se le proporciona un array vacío []. Se espera que el promedio de un array vacío sea 0. La aserción expect(average([])).toBe(0) verifica si el resultado de average([]) es igual a 0.

Cada prueba utiliza la función expect para verificar si el resultado calculado por la función average coincide con el valor esperado. Si todas las aserciones son verdaderas, las pruebas pasarán sin problemas.
 


Para ejecutar el codigo de una manera mas facil agregamos lo siguiente en el packJson 
![image](https://github.com/Reivaq/Practicas/assets/140466947/3184b3e9-487d-4e79-b022-05fe6900ddbd)



