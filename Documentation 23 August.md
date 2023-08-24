# Documentacion 23 Agosto

Se termino el video de la clase anterior y se continuo trabajando con MongoDB desde cero, este fui una introduccion a MongoDB ademas de + Deploy Base de Datos con Atlas

##  MongoDB

MongoDB es una base de datos NoSQL de código abierto, orientada a documentos y ampliamente utilizada en diversas aplicaciones.

## Características clave:

- **Esquema flexible:** A diferencia de las bases de datos relacionales, MongoDB no requiere un esquema predefinido, lo que permite almacenar documentos con diferentes estructuras y campos.

- **Escalabilidad:** MongoDB es escalable tanto vertical como horizontalmente. Puede gestionar grandes volúmenes de datos y distribuirlos en clústeres para aumentar la capacidad.

- **Alto rendimiento:** Está diseñado para un rendimiento eficiente en operaciones de lectura y escritura, especialmente en entornos de alta carga.

- **Consulta avanzada:** MongoDB ofrece un lenguaje de consulta poderoso para realizar consultas complejas en los datos almacenados.

- **Indexación:** Permite la creación de índices en campos de documentos para mejorar la velocidad y eficiencia de las consultas.

- **Replicación y alta disponibilidad:** Admite la replicación automática, manteniendo copias actualizadas en nodos múltiples para mejorar la disponibilidad y la tolerancia a fallos.

- **Sharding:** Facilita la distribución de datos en varios servidores para mejorar el rendimiento y la escalabilidad.

## Aplicaciones:

MongoDB se utiliza en diversas aplicaciones, como:

- Aplicaciones web.
- Análisis de datos.
- Aplicaciones móviles.

Es importante comprender las ventajas y limitaciones de MongoDB según tus necesidades específicas.


# Despliegue de una Base de Datos con MongoDB Atlas

A continuación, se describen los pasos generales para desplegar una base de datos utilizando MongoDB Atlas.

## Pasos:

1. **Crea una cuenta en MongoDB Atlas:**
   Regístrate en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) si aún no tienes una cuenta.

2. **Inicia sesión y crea un clúster:**
   - Inicia sesión en MongoDB Atlas.
   - Desde el panel de control, crea un nuevo clúster.
   - Elige un proveedor de nube, una región y un tipo de clúster adecuado.

3. **Configura las opciones del clúster:**
   - Define el tamaño de las instancias y el tipo de almacenamiento.
   - Especifica la versión de MongoDB que deseas utilizar.

4. **Configura la seguridad:**
   - Configura las reglas de acceso para permitir conexiones.
   - Define direcciones IP permitidas, usuarios y contraseñas.

5. **Crea una base de datos:**
   - Una vez que el clúster esté listo, crea una nueva base de datos.
   - Define las colecciones necesarias dentro de la base de datos.

6. **Obtén la cadena de conexión:**
   - En la página de detalles del clúster, encontrarás una cadena de conexión.
   - Esta cadena incluirá el nombre de usuario, la contraseña y otros detalles necesarios.

7. **Conéctate a tu base de datos:**
   - Utiliza la cadena de conexión en tu aplicación para establecer una conexión con la base de datos alojada en MongoDB Atlas.

8. **Comienza a trabajar:**
   - Interactúa con tu base de datos, crea documentos, realiza consultas y otras operaciones necesarias.

