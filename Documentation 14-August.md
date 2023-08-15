# Documentacion  14 de agosto 

Este dia se practico lo aprendido la clase pasada sobre listas en react y se realizo un pequeño ejercicio 
se continuara con los videos y realizando ejercicios 


### Ejemplo Lista

![image](https://github.com/Reivaq/Practicas/assets/140466947/732747cd-f8f5-4d35-a9cd-e78e18eadaee)
![image](https://github.com/Reivaq/Practicas/assets/140466947/55313918-d2a6-4306-9ea0-b8e26fc3b5ea)

#### Explicacion

Importaciones:

import React from 'react': Importa la biblioteca de React, que se utiliza para construir interfaces de usuario interactivas.
import ReactDOM from 'react-dom': Importa ReactDOM, que es la biblioteca que permite renderizar componentes de React en el navegador.
Datos de las notas:
Se define una matriz llamada notes que contiene objetos. Cada objeto representa una nota y tiene las siguientes propiedades:

id: Un identificador único para la nota.
content: El contenido de la nota.
date: La fecha de la nota.
important: Un valor booleano que indica si la nota es importante o no.
Componente App:
Se define un componente de función llamado App. Este componente toma un prop notes. El componente renderiza una estructura HTML usando JSX (una extensión de sintaxis de JavaScript utilizada en React).

Renderizado del componente App:
Se utiliza ReactDOM.render para renderizar el componente App en el elemento con el ID 'root' en el HTML. El prop notes se pasa al componente App para que pueda acceder a los datos de las notas.

Dentro del componente App:

Se muestra un título h1>Notes</h1.
Se crea una lista desordenada (<ul) que contiene tres elementos de lista (<li). Los elementos de lista muestran el contenido de las notas utilizando la notación JSX y accediendo a los datos de la matriz notes.
