# Documentacion 18 de Agosto 

Este dia se termino el video que trataba acerca de de feaching y mutacion de datos, se continuo trabajando con la lista de la pagina de la cual habiamos obtenido los datos, posterior mente ahora se continuo modificando los datos de la lista, utilizando dos maneras diferentes una fecth y Axio esto para mostrarnos los diferencias entre cada una de ellas y poder elegir la correcta en el momento adecuado.

### Diferencias entre fecht y Axio

Axios y fetch son dos formas comunes de realizar solicitudes HTTP en JavaScript, pero tienen diferencias significativas en términos de características y usabilidad. Aquí hay algunas diferencias clave entre Axios y fetch:

API y Sintaxis:

Axios: Es una biblioteca externa que proporciona una API más simple y amigable para realizar solicitudes HTTP. Su sintaxis es más intuitiva y fácil de usar.
fetch: Es una API nativa de JavaScript que está incorporada en la mayoría de los navegadores modernos. Utiliza una sintaxis basada en promesas.
Soporte de Promesas:

Axios: Utiliza promesas directamente para manejar las solicitudes y respuestas HTTP, lo que hace que el código sea más legible y fácil de entender.
fetch: También utiliza promesas, pero en comparación con Axios, su manejo de promesas puede ser menos intuitivo, especialmente para manejar errores y rechazos.
Manejo de Errores:

Axios: Tiene un manejo más robusto y claro de los errores. Puedes definir un bloque .catch para manejar errores de manera más directa.
fetch: Requiere un poco más de trabajo para manejar los errores correctamente. La promesa de fetch solo rechaza en caso de problemas de red, por lo que debes verificar el estado de respuesta manualmente para manejar otros tipos de errores.
Configuración Global:

Axios: Puedes configurar opciones globales para todas las solicitudes, como encabezados, tiempo de espera, etc.
fetch: No tiene una configuración global incorporada. Necesitas configurar opciones en cada llamada individualmente.
Compatibilidad con Navegadores:

Axios: Funciona en navegadores y en Node.js, lo que lo hace adecuado para aplicaciones tanto en el lado del cliente como en el servidor.
fetch: Es una API de navegadores, por lo que no es compatible con Node.js a menos que se use una implementación adicional.
Interceptores y Cancelación:

Axios: Proporciona interceptores para transformar solicitudes y respuestas. También admite la cancelación de solicitudes.
fetch: No tiene estas características incorporadas.
Transformación de Datos:

Axios: Puede transformar automáticamente los datos de respuesta en varios formatos (JSON, XML, etc.).
fetch: Requiere que transformes los datos manualmente, ya que solo proporciona el cuerpo de la respuesta en forma de ReadableStream.
Librería Externa vs. API Nativa:

Axios: Requiere la instalación de una librería externa.
fetch: Es una API nativa del navegador y no necesita instalaciones adicionales.

## Codigos 

 Derntro del programa realizamos una modificaciones utilizando fecht y Axio los cuales realizavan lo mismo pero de manera diferente 
 
 **Codigo en fecht**
 
 ![1](https://github.com/Reivaq/Practicas/assets/140466947/862c1af8-71af-413d-9631-a0778aabb09a)


**Codigo en Axio**

![2](https://github.com/Reivaq/Practicas/assets/140466947/9773922f-7029-4116-a441-894c58d420b8)


### Ejercicio

Durate este programa se decidio de utilizar Axios para una mayor comodidad, y ademas de eso se realzaron diferentes funciones en diferentes archivos para poder realizar nuestro programa mas entendible 


**App.js**

1. Imports:Se importan las dependencias necesarias, incluyendo useEffect y useState de React, axios para realizar solicitudes HTTP, y dos funciones getAllNotes y createNotes desde archivos de servicio.
![image](https://github.com/Reivaq/Practicas/assets/140466947/67f67a03-37b9-4600-a2ce-fc55bdd4b22a)

2. Componente App: 
Se define el componente funcional App.
Se establecen los estados iniciales para notes, newNote y loading.
Se utiliza useEffect para cargar las notas iniciales al montar el componente.
Dentro de useEffect, se establece loading como true y luego se llama a getAllNotes para obtener las notas. Una vez obtenidas, se actualiza el estado de notes y se cambia loading a false.
![image](https://github.com/Reivaq/Practicas/assets/140466947/06872570-012f-42d3-a691-196e83858b57)

3. Manejo de Cambios y Envío del Formulario: HandleChange maneja los cambios en el campo de entrada.
handleSubmit se activa cuando se envía el formulario. Crea una nueva nota con el contenido ingresado en el campo y luego agrega esta nueva nota a través de la función createNotes. Una vez agregada, se limpia el campo de entrada.

![image](https://github.com/Reivaq/Practicas/assets/140466947/cffabdba-cb86-435d-8e18-67b6ade0c875)

4. Renderizado:Se renderiza el título y, si loading es true, muestra "Cargando ...".
Se utiliza notes.map para renderizar cada nota individual en la lista.
Se renderiza un formulario para crear nuevas notas con un campo de entrada y un botón.
![image](https://github.com/Reivaq/Practicas/assets/140466947/dab59993-7215-494d-a0bc-5a4ba33dbe19)


Nota: Los codigos de la parte de index y nota.js siguen siendo los mismo que la clase 5 debido que estos no sufrieron modificaciones, sin embargo se crearon dos archivos adicioneles '(getAllNotes.js y createNotes.js)'
 
 **getAllNotes**
 
 import axios from "axios";: Importa la biblioteca Axios para realizar solicitudes HTTP.

export const getAllNotes = () => { ... }: Exporta una función llamada getAllNotes como parte de un módulo. Esta función se puede importar y usar en otros archivos de tu proyecto.

axios.get('https://jsonplaceholder.typicode.com/posts'): Realiza una solicitud GET a la URL proporcionada. En este caso, la URL apunta a "https://jsonplaceholder.typicode.com/posts", que es un servicio de pruebas que devuelve datos simulados de publicaciones.

.then(response => { ... }): Utiliza el método .then para manejar la respuesta de la solicitud. El parámetro response contiene la respuesta completa de la solicitud.

const { data } = response;: Extrae el objeto data de la respuesta. En el contexto de Axios, data contiene los datos reales que la solicitud ha obtenido.

return data;: Devuelve los datos obtenidos de la respuesta. Esto significa que la función getAllNotes devolverá una promesa que resuelve con los datos de las notas.
 
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/b5055ff2-4c7d-462d-bd64-d30b2a397f6b)
 
 **createNotes.js**
 
 import axios from "axios";: Importa la biblioteca Axios para realizar solicitudes HTTP.

export const createNotes = ({ title, body, userId } = {}) => { ... }: Exporta una función llamada createNotes como parte de un módulo. Esta función acepta un objeto como argumento con las propiedades title, body y userId. Si no se proporciona ningún objeto, se asigna un objeto vacío como valor predeterminado.

axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId }): Realiza una solicitud POST a la URL proporcionada con los datos de la nota proporcionados en forma de objeto. Esto enviará los datos de la nueva nota al servidor.

.then(response => { ... }): Utiliza el método .then para manejar la respuesta de la solicitud. El parámetro response contiene la respuesta completa de la solicitud.

const { data } = response;: Extrae el objeto data de la respuesta. En el contexto de Axios, data contiene los datos reales que la solicitud ha obtenido.

return data;: Devuelve los datos obtenidos de la respuesta. Esto significa que la función createNotes devolverá una promesa que resuelve con los datos de la nota creada.

![image](https://github.com/Reivaq/Practicas/assets/140466947/749dd913-8dd1-4cab-a51a-4c75f53d2e34)


## Resultado 

![image](https://github.com/Reivaq/Practicas/assets/140466947/a8010b55-8904-40a0-bde1-46c2037f5eb3)

![image](https://github.com/Reivaq/Practicas/assets/140466947/7e453224-6990-421e-9846-03982350dd2e)


 
