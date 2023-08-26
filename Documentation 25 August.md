# Documentacion 25 de agosto 

Este día se realizó la creación de una base de datos para nuestra aplicación de notas, la cual hemos estado desarrollando. Para lograrlo, instalaremos las dependencias de mongoose en nuestro programa utilizando el siguiente comando: 'npm install 
mongoose'.
![image](https://github.com/Reivaq/Practicas/assets/140466947/2de6e767-ed53-46fa-acfe-fec8603a66f1)

![image](https://github.com/Reivaq/Practicas/assets/140466947/c7084a4c-94fa-4df7-b559-59799670c647)

Para todo esto se realizaron ciertas modificaciones anuestro porgrama principal  **Index**

![image](https://github.com/Reivaq/Practicas/assets/140466947/b450a39c-756b-49d8-9741-1609d26a66ab)

require('./mongo.js'): Aquí estás importando un módulo mongo.js. Esto generalmente incluira el código para establecer la conexión con la base de datos

const express = require('express'): Estás importando el módulo express que se utiliza para crear una aplicación web y construir APIs.


const Note = require('./models/Note'): Estás importando el modelo Note desde el archivo Note.js ubicado en la carpeta models. Este es el modelo que defines para interactuar con la colección de notas en la base de datos.

require('./mongo.js'): Se estás importando el archivo mongo.js,estás habilitando la conexión a la base de datos al incluir este fragmento. Es importante que este archivo contenga la lógica de conexión para que puedas usar la base de datos de la aplicación.



![image](https://github.com/Reivaq/Practicas/assets/140466947/6b39a690-7e2c-4b0b-873d-bcfc881ec057)


Note.find({}): Aquí se utiliza el modelo Note que se importo anteriormente para buscar todas las notas en la base de datos. Note.find({}) busca todos los documentos en la colección asociada con el modelo Note.

.then(notes => { ... }): Este es un método de promesa que se ejecuta cuando la búsqueda de notas se completa con éxito. El resultado de la búsqueda se pasa como un argumento notes a esta función.

response.json(notes.map(note => { ... })): Aquí estás enviando una respuesta JSON al cliente. Estás mapeando cada nota en el array notes a un nuevo objeto en el que excluyes las propiedades id y v de cada nota (esto se hace mediante la desestructuración de objetos y el operador de propagación ...restOfNote). Luego, agrega una propiedad id al objeto que corresponde al _id de la nota.

.catch(error => { ... }): Si algo sale mal en la búsqueda (por ejemplo, un error de base de datos), esta parte del código capturará el error.Se imprime el error en la consola y envías una respuesta JSON con un estado de error 500 (Error interno del servidor).

**Creacion de un archivo Mongo.js**
Este realizaralas conexiones con el servidor 


![image](https://github.com/Reivaq/Practicas/assets/140466947/b6d86a78-a009-403d-b8e8-c1e8823bc91b)

En esta parte, estás importando el módulo mongoose, que es una biblioteca de JavaScript utilizada para interactuar con bases de datos MongoDB. Luego, estás importando la variable password desde un archivo llamado password.js necesaria para conectarte a la base de datos.

![image](https://github.com/Reivaq/Practicas/assets/140466947/47bd6c7a-1888-4285-a929-86a74cdbe5f6)

Aquí, estás utilizando el método connect() proporcionado por Mongoose para establecer una conexión con la base de datos MongoDB. La cadena de conexión connectionString que se definio al principio se utiliza para conectarse a la base de datos con el nombre de usuario y contraseña correspondientes.

useNewUrlParser, useUnifiedTopology, etc. son configuraciones para la conexión. Por ejemplo, useNewUrlParser se utiliza para analizar las URL de conexión con el nuevo analizador de URL de MongoDB. Una vez que la conexión se establece correctamente, se ejecutará el bloque .then(), y si ocurre algún error, se capturará y manejará en el bloque .catch().


![image](https://github.com/Reivaq/Practicas/assets/140466947/64223774-2414-4c5f-9eb7-f6f46f48cc7d)

Se estás usando la destructuración para obtener las propiedades Schema y model directamente del objeto mongoose. Esto es útil para acceder a estas propiedades de manera más sencilla en el código posterior.

Aquí, estás definiendo un esquema llamado noteSchema utilizando Schema proporcionado por Mongoose. El esquema define la estructura de los documentos que se guardarán en la colección de notas en la base de datos. En este caso, hay tres propiedades: content, date y important.

![image](https://github.com/Reivaq/Practicas/assets/140466947/fa4111de-800d-473b-8880-6afb871213ec)


Aquí, estás utilizando el método model() proporcionado por Mongoose para crear un modelo llamado Note a partir del esquema noteSchema que se definio anteriormente. Un modelo se utiliza para interactuar con la colección asociada en la base de datos.

Se creo una nueva instancia de Note con datos específicos para una nota, como el contenido, la fecha y la importancia. Después, se utilizo el método save() para guardar esta instancia como un nuevo documento en la colección de notas.

En el bloque .then(), si la nota se guarda con éxito, imprime el resultado y luego se cierra la conexión a la base de datos utilizando mongoose.connection.close(). Si ocurre algún error, se captura en el bloque .catch() y se imprime en la consola.

Despues de haber creado nuestro programa el cual conecta con MongoDB ejecutamos el siguiente comando para que corra nuestra aplicacion  'node mongo.js'

![image](https://github.com/Reivaq/Practicas/assets/140466947/123faeaa-06db-4445-a9bd-e6c519bd4371)

