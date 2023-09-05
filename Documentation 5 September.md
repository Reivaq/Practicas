# Documentacion 5 Septiembre 
Este día se continuó con el curso de fullstack, en el cual se siguió trabajando con nuestro programa de notas al cual le hemos realizado ciertas modificaciones. En esta clase abordamos el tema de usuarios y contraseñas, de modo que cada usuario con un nombre y contraseña específicos pueda acceder a nuestra página y modificar las notas.

Para esto, primeramente se crearon dos archivos, uno dentro de la carpeta 'models' llamado 'Users.js' y otro dentro de la carpeta 'controllers' llamado 'users.js'. Estos archivos son esenciales para el funcionamiento de nuestro programa. Para que esto funcionara correctamente, también se realizaron cambios en nuestro índice principal. A continuación, se explicarán los códigos.

### Users.js 
![image](https://github.com/Reivaq/Practicas/assets/140466947/4fd618d7-7e14-408e-a388-8534a807edc8)
![image](https://github.com/Reivaq/Practicas/assets/140466947/cdb69bb8-970d-499f-ae95-a30b95786138)
Primero, importamos las funciones Schema y model de la biblioteca Mongoose. Estas funciones nos permiten definir la estructura de nuestros documentos y crear modelos basados en esa estructura.

Luego, creamos un esquema de usuario (userSchema) utilizando la función Schema. Este esquema define la estructura de los documentos de usuario en nuestra base de datos. Incluye los siguientes campos:

username: Un campo de tipo String que almacena el nombre de usuario.
name: Un campo de tipo String que almacena el nombre del usuario.
passwordHash: Un campo de tipo String que almacena la contraseña del usuario (normalmente, deberías almacenar contraseñas de forma segura, por ejemplo, mediante hash).
note: Un campo de tipo Array que contiene referencias a documentos de tipo 'Note'. Esto establece una relación entre los usuarios y las notas en la base de datos.
A continuación, utilizamos userSchema.set('toJSON', ...) para definir un método de transformación que se aplicará cuando se serialice un documento de usuario a formato JSON. En este método de transformación:

Agregamos una propiedad id al objeto JSON resultante, que es igual al _id del documento.
Eliminamos las propiedades _id y _v del objeto JSON resultante.
Eliminamos la propiedad passwordHash del objeto JSON resultante para no exponer la contraseña del usuario en la respuesta JSON.
Después de definir el esquema, creamos una instancia del modelo de usuario utilizando model('User', userSchema). Esto crea un constructor que podemos utilizar para crear y manipular documentos de usuario en nuestra base de datos.

Finalmente, exportamos este modelo de usuario (User) para que otros módulos de nuestra aplicación puedan utilizarlo y realizar operaciones de base de datos relacionadas con los usuarios.


### user.js

![image](https://github.com/Reivaq/Practicas/assets/140466947/c6cf2045-e7e5-4301-bc73-1ac172fff8b0)
* Importamos el enrutador de Express y lo almacenamos en la variable 'usersRouter'.
Importamos el modelo 'User' que previamente definimos en otro archivo (generalmente '../models/User').
* Establecemos una ruta POST para manejar las solicitudes HTTP en la ruta raíz ('/').
Extraemos el cuerpo de la solicitud HTTP y desestructuramos sus campos (username, name y password).
* Creamos una nueva instancia de usuario utilizando el modelo 'User'.
* Utilizamos 'await' para llamar al método 'save()' y guardar el nuevo usuario en la base de datos.
Respondemos a la solicitud con los datos del usuario recién creado en formato JSON.
* Exportamos el enrutador 'usersRouter' para que pueda ser utilizado en otros módulos de la aplicación.

### Modificaciones en el programa principal

![image](https://github.com/Reivaq/Practicas/assets/140466947/38980028-1509-42f4-beb5-e3897c936ac6)
require('./controllers/users'): Utiliza la función require() para importar el enrutador de usuarios desde el archivo './controllers/users'. 
![image](https://github.com/Reivaq/Practicas/assets/140466947/96b79aa4-105b-4f34-9e02-8c3bd5692ea2)
app.use('/api/users', usersRouter): Esto configura Express para usar el enrutador usersRouter en la ruta '/api/users'. Cuando llega una solicitud HTTP a esta ruta (por ejemplo, '/api/users' seguido de otras subrutas), Express enruta la solicitud a usersRouter para que maneje las solicitudes específicas de usuarios.








