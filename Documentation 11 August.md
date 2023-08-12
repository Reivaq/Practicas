# Documentacion 11 de Agosto 

Este dia se abordo el cuarto video del curso, casi en su totalidad. En esta parte se abordaron temas como:
* **Renderizar listas de elementos en React:**
  
    Renderizar listas de elementos es una tarea común en el desarrollo de aplicaciones web. En React, puedes utilizar el método .map() para generar componentes repetitivos a partir de un conjunto de datos, como una matriz (array) o un objeto. Esto te permite crear una lista de componentes de manera dinámica, en lugar de escribir manualmente cada componente.
      **Ejemplo :**
      
     ![image](https://github.com/Reivaq/Practicas/assets/140466947/18ff2c17-b642-4550-988f-39c128916e5e)
     
     En este ejemplo:

Importamos React.
Creamos un componente llamado ListaElementos que toma una prop llamada elementos.
Usamos el método .map() para recorrer la matriz elementos y generamos un li para cada elemento en la matriz.
Cada li tiene un atributo key que se establece en el índice del elemento en la matriz. Nota: El atributo key es importante para la optimización de rendimiento y debe ser único para cada elemento.
Exportamos el componente ListaElementos.

   
* **Problemas al recorrer listas que pueden venir con tipos de datos incorrectos en React**

Cuando r3ecorremos listas en React, es importante tener en cuenta que los datos que recibes pueden variar en tipo y estructura. Esto puede llevar a problemas si no se manejan adecuadamente. Aquí hay algunos problemas comunes al recorrer listas con tipos de datos incorrectos y cómo solucionarlos:

1. Validación de datos:
Validación y manejo de tipos de datos:
Si los tipos de datos en la lista pueden ser incorrectos, debemos de asegurarnos  de validarlos antes de intentar recorrerlos o mostrarlos en la interfaz. Podemos utilizar operadores de verificación de tipos, como typeof, instanceof o funciones específicas de validación para asegurarnos de que los datos sean del tipo esperado.

Ejemplo:

![image](https://github.com/Reivaq/Practicas/assets/140466947/e9601100-4bfd-492d-b859-2faac206936b)


### Filtrar datos incorrectos:

Filtrar datos incorrectos implica eliminar o ignorar elementos de una lista que no cumplen con ciertos criterios de validación. Esto es útil para asegurarte de que solo estás trabajando con datos válidos antes de recorrer la lista o renderizar componentes en nuestra aplicación React.

Supongamos que tienes una lista de objetos que deben cumplir con ciertos requisitos, como tener una propiedad name de tipo string. Quieres filtrar solo los objetos que cumplan con este requisito antes de usarlos. Aquí hay un ejemplo de cómo se puede hacerlo:

![image](https://github.com/Reivaq/Practicas/assets/140466947/5ea7f695-7d33-4daf-8ef1-eb55ea8ae0e3)

En este ejemplo, datos es la lista de objetos que se pasa como propiedad al componente ListaDeObjetos. Antes de mapear y renderizar la lista, se utiliza el método filter para crear un nuevo array llamado objetosValidos, que contiene solo los objetos que tienen la propiedad name de tipo string.

Luego, se recorre el array objetosValidos y se renderizan los elementos de la lista. Esto garantiza que solo se rendericen los objetos que cumplen con los criterios de validación establecidos.


* **Uso de key en elementos en React**

En React, la propiedad key se utiliza para dar a cada elemento renderizado en una lista un identificador único. Esto permite que React optimice la actualización y el rendimiento de la lista al realizar cambios en los elementos. La propiedad key es importante cuando renderizas listas dinámicas, ya que ayuda a React a rastrear los elementos y determinar cuándo es necesario re-renderizarlos.

**Puntos clave sobre el uso de la propiedad key en elementos en React:**

* Identificador único: 
    La propiedad key debe ser un identificador único para cada elemento en la lista. Usualmente, se utiliza un valor único como un ID único asociado a cada elemento en tus datos.

* Evitar el uso del índice: 
    Si bien es tentador usar el índice del elemento como key, esto no es recomendable, ya que puede llevar a problemas de rendimiento y actualización incorrecta en ciertos casos. React necesita una clave única y constante para identificar los elementos de manera eficiente.

* Cambios en la clave: 
 Si cambias las claves de los elementos en una lista durante las actualizaciones, React considerará que esos elementos son diferentes y los re-renderizará por completo, incluso si los datos dentro del elemento no han cambiado. Esto puede tener un impacto negativo en el rendimiento.

* Elementos eliminados: Si un elemento con una determinada clave se elimina de la lista, React también lo eliminará del DOM. Por lo tanto, las claves ayudan a React a rastrear qué elementos se agregan, eliminan o actualizan en la lista.

* Elementos agregados: Cuando se agrega un nuevo elemento a la lista, es importante proporcionar una clave única para ese elemento. Esto asegura que React pueda identificar correctamente los elementos nuevos y antiguos durante la actualización.

Ejemplo de uso de key en una lista:

![image](https://github.com/Reivaq/Practicas/assets/140466947/c6119a09-5841-42ff-8540-f0148f25e8dd)




export default ListaDeElementos;
En este ejemplo, se asume que cada objeto en la lista elementos tiene una propiedad id única que se usa como key. Esto permite que React rastree los elementos correctamente durante las actualizaciones.

En resumen, la propiedad key es una parte esencial de la optimización y el rendimiento al trabajar con listas dinámicas en React. Proporciona a React una forma de identificar y rastrear elementos de manera eficiente durante las actualizaciones.





