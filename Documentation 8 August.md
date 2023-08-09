# Documentación 8 de Agosto

Este día se realizaron ejercicios acerca del curso de React y JavaScript que se abordó el día anterior. Esto nos ayudará a mejorar la comprensión de los temas. En los siguientes días, se continuará avanzando con los videos y realizando ejercicios para una mayor comprensión de los temas correspondientes.

## Ejercicios 

### **1.1: Información del curso, paso 1**

La aplicación en la que comenzaremos a trabajar en este ejercicio se desarrollará más a fondo en algunos de los siguientes ejercicios.
Use create-react-app para inicializar una nueva aplicación. Modifique *index.js* para que coincida con lo siguiente

![1](https://github.com/Reivaq/Practicas/assets/140466947/187246f3-bfb0-4c6f-9017-b66272393ad2)

Con esto realizamos la siguiente página, la cual es una página demasiado sencilla, pero la cual no servirá para comprender las funciones, de claración de variables y cómo crear un archivo en React
![2](https://github.com/Reivaq/Practicas/assets/140466947/8d8a385d-66ad-4aa6-9a41-d35a8d477df0)

Además de esto eliminaremos los archivos adicionales (App.js, App.css, App.test.js, logo.svg, setupTests.js, reportWebVitals.js

### **1.2: Paso 2**

Refactorizamos el componente *Content* para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes *Part* de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

Se realizaron las siguientes modificaciones en el código de la estructura final

![3](https://github.com/Reivaq/Practicas/assets/140466947/a7ab7918-6e9c-4686-af4e-41ddc2b2ceeb)

![4](https://github.com/Reivaq/Practicas/assets/140466947/e6d16a11-199f-4021-8dae-8a8f0398fe06)

![5](https://github.com/Reivaq/Practicas/assets/140466947/3b786c4c-7f5b-43fd-92f3-50f5c3d9d7cc)

## Resultado 

![image](https://github.com/Reivaq/Practicas/assets/140466947/42db21ee-c426-4d8d-922e-f1e4197530cf)

La diferencia principal entre el Código 1 y el Código 2 es que en el Código 1 has creado componentes individuales para diferentes partes de la aplicación, mientras que en el Código 2 has incorporado directamente los valores y cálculos en el componente App sin la necesidad de componentes adicionales.

Ambos códigos logran el mismo resultado de mostrar información sobre un curso y sus partes, junto con la suma total de ejercicios. El Código 1 tiene una estructura más modular utilizando componentes, lo que podría hacer que el código sea más fácil de mantener y escalar a medida que la aplicación crece. El Código 2 es más directo y más simple, pero podría ser menos flexible en comparación con el Código 1.
