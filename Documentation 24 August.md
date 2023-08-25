# Documetacion 24 Agosto 

Este dia se continuo con el siguinet5e video el cual habalaba sobre Aprende Mongoose + conexión con Express + uso de Sentry, se aprendio la teoria y se realizaron ejercicios.

## Mongoose como Biblioteca

Mongoose es una popular biblioteca de modelado de datos de objetos (ODM, por sus siglas en inglés) de código abierto diseñada para trabajar con MongoDB, una base de datos NoSQL. Esta biblioteca facilita la interacción con bases de datos MongoDB desde aplicaciones Node.js al proporcionar una capa de abstracción que simplifica la gestión de datos y la definición de estructuras.

### Principales Características y Conceptos de Mongoose:

1. **Esquemas**: En Mongoose, los esquemas definen la estructura de los documentos que se guardarán en la base de datos. Un esquema especifica los campos, tipos de datos y opciones de validación para los datos.

2. **Modelos**: Los modelos son instancias creadas a partir de un esquema. Representan colecciones específicas en la base de datos y se utilizan para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos. Los modelos también proporcionan métodos convenientes para interactuar con los documentos.

3. **Consultas y Actualizaciones**: Mongoose ofrece una API para realizar consultas y actualizaciones de manera eficiente. Puedes realizar consultas complejas utilizando su sintaxis y métodos específicos.

4. **Validación**: Mongoose permite definir reglas de validación en los esquemas para asegurarse de que los datos ingresados cumplan con ciertos criterios antes de ser almacenados en la base de datos.

5. **Middleware**: Mongoose admite middleware, que son funciones que se ejecutan antes o después de ciertos eventos, como guardar o eliminar un documento. Esto permite agregar lógica personalizada en diferentes puntos del ciclo de vida de los documentos.

6. **Población**: La población es una característica que permite relacionar documentos de diferentes colecciones y recuperar información de documentos relacionados en una sola consulta.

7. **Hooks**: Los hooks son funciones que se ejecutan en respuesta a eventos específicos, como antes o después de guardar un documento. Esto permite realizar acciones adicionales en función de los eventos ocurridos.

8. **Gestión de Relaciones**: Mongoose permite definir relaciones entre documentos utilizando referencias o subdocumentos, lo que facilita la gestión de relaciones entre datos.

## Sentry: Plataforma de Monitoreo de Errores

Sentry es una plataforma de monitoreo de errores de código abierto que permite a los desarrolladores rastrear, monitorear y solucionar problemas en aplicaciones en tiempo real. La plataforma está diseñada para identificar y registrar errores y excepciones en aplicaciones web y móviles, lo que ayuda a los equipos de desarrollo a mejorar la calidad del software y brindar experiencias más estables a los usuarios.

### Características Clave de Sentry:

1. **Rastreo de Errores**: Sentry captura y registra automáticamente errores y excepciones en aplicaciones en tiempo real, lo que permite a los equipos de desarrollo identificar problemas rápidamente.

2. **Información Detallada**: Sentry proporciona información detallada sobre los errores, incluidos los registros, el contexto en el que ocurrió el error y los datos del entorno del usuario.

3. **Notificaciones en Tiempo Real**: Los equipos pueden configurar notificaciones en tiempo real para recibir alertas cuando se produzcan errores críticos en sus aplicaciones.

4. **Integraciones**: Sentry se integra con diversas herramientas y servicios populares, lo que permite una fácil incorporación a los flujos de trabajo de desarrollo existentes.

5. **Seguimiento de Problemas**: Además de rastrear errores, Sentry también facilita el seguimiento de problemas a lo largo del tiempo, lo que ayuda a evaluar la frecuencia y la gravedad de los errores.

6. **Informes de Rendimiento**: Sentry ofrece informes de rendimiento que permiten a los equipos identificar cuellos de botella y áreas de mejora en sus aplicaciones.

7. **Versionado de Errores**: Los errores se pueden asociar con versiones específicas de una aplicación, lo que ayuda a los equipos a realizar un seguimiento de cuándo se introdujeron y solucionaron problemas.

8. **Agrupación Inteligente**: Sentry utiliza técnicas de agrupación inteligente para categorizar y agrupar errores similares, lo que facilita la identificación de patrones y tendencias.


#### Configura la conexión a la base de datos usando Mongoose en tu archivo de aplicación de Express:

![image](https://github.com/Reivaq/Practicas/assets/140466947/1b587808-1e78-4555-b010-7989e522934e)


#### Configura Sentry en tu archivo de aplicación Express después de la configuración de Mongoose:

![image](https://github.com/Reivaq/Practicas/assets/140466947/777f6493-4a2a-4ffd-8bf6-cf5c031956e3)


#### Captura y envía errores a Sentry:

![image](https://github.com/Reivaq/Practicas/assets/140466947/c6297953-932b-4b03-8c44-2cb4d17e5d45)




