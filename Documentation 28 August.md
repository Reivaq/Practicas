# Documetacion 28 Agosto 

Este dia se continuo con el video de Mongoose + conexión con Express + uso de Sentry, en el cual creamos un nuevo archivo '.env' el cual nos ayudara para manejar las contraseñas correspondientes de nuestro servidor 

![image](https://github.com/Reivaq/Practicas/assets/140466947/8a7806db-2f2a-4f9d-9f19-523812daea4e)

Ademas de esto instalaremos una dependencia con el comando 'npm dotenv' esta dependencia nos va apermitir conectarlo 


![image](https://github.com/Reivaq/Practicas/assets/140466947/534202a9-6aa6-459f-935d-a704ad75d2dc)

Creacion de archivo **Put_note.reset**

![image](https://github.com/Reivaq/Practicas/assets/140466947/9c42b229-8a33-4a7e-a338-af5c65e812c6)

**Creacion de el archivi handleError**
Este archivo se encarga de regresar los errores de nuestro siestema 
![image](https://github.com/Reivaq/Practicas/assets/140466947/e071391d-04af-4b31-92e7-29a30077052f)

**Creacion del archivo notFound**
![image](https://github.com/Reivaq/Practicas/assets/140466947/9d57253c-9677-4775-bd60-ba771492adca)


Intregracion de Sentry 

Lo integramos a nuestro programa con el siguiente comado 'npm install @sentry/react'
![image](https://github.com/Reivaq/Practicas/assets/140466947/c5c91383-e967-4fba-bf6e-91cfdeed5b87)
![image](https://github.com/Reivaq/Practicas/assets/140466947/047d4304-4307-4821-8da7-776a5b9ac95e)

**Codigo de Sentry**

![image](https://github.com/Reivaq/Practicas/assets/140466947/0796644a-7d16-4563-8e4d-a3f7c8d1750b)
* Sentry.init({ ... }): Este es el punto de inicio de la configuración de Sentry. Dentro del objeto de configuración, se proporcionan varias opciones y valores para personalizar cómo Sentry funcionará.

* dsn: Es la URL única y segura que conecta tu aplicación con tu proyecto en Sentry. Esta URL se genera en el panel de control de Sentry cuando se crea un nuevo proyecto. Representa la ubicación a la que se enviarán los datos de seguimiento y errores.

* integrations: Aquí se configuran las integraciones que se desean habilitar en la aplicación. Las integraciones son módulos que se conectan a diferentes partes de la aplicación para capturar datos y realizar un seguimiento. En este caso, dos integraciones se están configurando:

* Sentry.integrations.Http({ tracing: true }): Esta integración captura información sobre solicitudes HTTP realizadas, incluido el seguimiento. Ayuda a rastrear los tiempos de respuesta y la información de las solicitudes.

* Tracing.Integrations.Express({ app }): Esta integración se conecta a Express, el marco de aplicación web de Node.js. Permite el seguimiento de las rutas, controladores y tiempos de respuesta en de la aplicacion Express.

* tracesSampleRate: Define la tasa a la que se muestrearán los datos de seguimiento. Un valor de 1.0 significa que todos los datos se registrarán (100% de tasa de muestreo). Se puede ajustar esto para limitar la cantidad de datos de seguimiento que se envían a Sentry si es necesario.



