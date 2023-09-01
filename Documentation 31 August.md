# Documentación 31 de Agosto

## Pruebas para el Backend

Lo primero que necesitamos hacer es especificar en qué entorno se está ejecutando nuestra aplicación.

Instalamos una dependencia que nos ayudará a utilizar las variables de entorno correctamente.

![image](https://github.com/Reivaq/Practicas/assets/140466947/4fd2a6fb-97bd-44ff-a19a-538ca6c2f3fc)

Posteriormente, en el archivo `package.json`, definimos algunas variables de entorno que serán de gran ayuda.

![image](https://github.com/Reivaq/Practicas/assets/140466947/74321d38-649c-42e8-afa7-a8c18fc3b367)

Estos scripts son configuraciones en el archivo `package.json` que te permiten ejecutar varios comandos desde la línea de comandos.

1. **"dev": "cross-env NODE_ENV=development nodemon index.js":**

   Este script se utiliza para iniciar la aplicación en modo de desarrollo.
   Utiliza `nodemon` para observar cambios en el archivo `index.js` y reiniciar automáticamente la aplicación cuando se realizan cambios.
   Establece la variable de entorno `NODE_ENV` en `development` para indicar que estás en modo de desarrollo.

2. **"lint": "npm run lint .":**

   Ejecuta un linter para analizar y verificar el estilo y la calidad del código en los archivos del proyecto.

3. **"start": "cross-env NODE_ENV=production node index.js":**

   Este script se utiliza para iniciar la aplicación en modo de producción.
   Utiliza la variable de entorno `NODE_ENV` para establecer el entorno de producción antes de ejecutar el archivo `index.js`.

4. **"test": "cross-env NODE_ENV=test jest --verbose --silent test/notes.test.js --detectOpenHandles":**

   Este script se utiliza para ejecutar pruebas utilizando Jest en modo de prueba.
   Establece la variable de entorno `NODE_ENV` en `test` para indicar que estás en modo de prueba.
   Ejecuta Jest para correr las pruebas en el archivo `test/notes.test.js`.
   `--verbose` muestra información detallada sobre las pruebas, `--silent` deshabilita la salida de logs en la consola, y `--detectOpenHandles` detecta si hay manejadores abiertos al finalizar las pruebas.

5. **"test:watch": "npm run test -- --watch":**

   Este script se utiliza para ejecutar las pruebas en modo de observación (watch mode), lo que significa que Jest estará observando los archivos en busca de cambios y ejecutará las pruebas automáticamente cuando haya cambios.
   Utiliza el script "test" con `--watch` para activar el modo de observación.

En el archivo `mongo.js` que habías creado anteriormente, realizaremos unas modificaciones que nos ayudarán a ejecutar las pruebas correctamente.

![image](https://github.com/Reivaq/Practicas/assets/140466947/08877e9c-0e10-4ff1-88a9-2344d7718e38)

Realizado esto, lo siguiente será realizar un test para todos los endpoints. La forma más fácil de acceder a ellos es utilizando `supertest`, por lo que instalaremos nuestra dependencia de desarrollo.

![image](https://github.com/Reivaq/Practicas/assets/140466947/5b6e3a75-337c-4738-9445-b44729988e55)

Realizaremos un programa que se encargue de realizar el `supertest`.

![image](https://github.com/Reivaq/Practicas/assets/140466947/1ae41e51-4df1-4d72-845d-4c8835b2a97b)
![image](https://github.com/Reivaq/Practicas/assets/140466947/135b017a-9399-4457-8326-95dd670aaeee)
![image](https://github.com/Reivaq/Practicas/assets/140466947/86e97ee7-a70f-42b6-97c5-af0f1df79d4b)

Este código está diseñado para realizar pruebas de integración en una API basada en una aplicación Express y una base de datos MongoDB utilizando las bibliotecas `mongoose` y `supertest`. A continuación, explicaré cada parte del código:


1.  Importación de Módulos:

Se importan las bibliotecas mongoose y supertest, que se utilizan para interactuar con la base de datos MongoDB y realizar solicitudes HTTP en las pruebas, respectivamente.
Se importa la instancia de la aplicación Express y el servidor desde el archivo index.
2. Configuración de Pruebas:

Se crea una instancia de supertest llamada api que se utilizará para realizar las solicitudes HTTP a la aplicación Express.
3. Datos de Prueba Iniciales:

initialNotes es un arreglo que contiene dos objetos simulando notas iniciales para la base de datos.
beforeEach() - Configuración Previa a las Pruebas:

Antes de cada prueba, se elimina todo el contenido de la colección de notas en la base de datos utilizando Note.deleteMany({}).
Luego, se crean y guardan en la base de datos dos notas iniciales utilizando los objetos del arreglo initialNotes.
3. Prueba: Obtener Notas en Formato JSON:

Se realiza una solicitud GET a la ruta /api/notes utilizando api.get('/api/notes').
Se espera que la respuesta tenga un código de estado 200 y que el encabezado Content-Type sea application/json.
4. Prueba: Verificar la Cantidad de Notas:

Se realiza una solicitud GET a la ruta /api/notes y se almacena la respuesta en response.
Se espera que el cuerpo de la respuesta (response.body) sea un arreglo y que su longitud (response.body.length) sea igual a la longitud del arreglo initialNotes.
5. Prueba: Verificar el Contenido de una Nota:

Se realiza una solicitud GET a la ruta /api/notes y se almacena la respuesta en response.
Se crea un arreglo contents que contiene los contenidos de las notas en la respuesta.
Se espera que el arreglo contents contenga el contenido específico de una de las notas iniciales.
afterAll() - Cierre de Conexiones al Finalizar las Pruebas:

Se utiliza afterAll para cerrar la conexión a la base de datos MongoDB y cerrar el servidor Express una vez que todas las pruebas hayan terminado.

Porcedemos aprobamos nuestro codigo 

![image](https://github.com/Reivaq/Practicas/assets/140466947/737e668a-8cc8-4b69-ac12-e3d710af7aa5)



Ademas de todo esto tambien se pueden ejecutar test en especifico con el siguiente comando **' npm run test -- -t " Nombre especifico del test"'**
![image](https://github.com/Reivaq/Practicas/assets/140466947/4fca839d-fe04-46c6-92ad-59f58d06ab00)
