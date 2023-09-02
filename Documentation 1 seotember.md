# Documentacion 1 Septiembre

El dia de hoy se continuo con el el tema de test y supertest del dia anterio con ladiferencia de que hoy se mmodifico el codigo y se crearon nuevos archicvos para que este fuese mas comprensible y estuviese estructurado de mejor manera.

### Creacion de del archivo helpers
Para llevar un mejor control de nurestro codigo y duese mas entendible se deidio crear un archivo llamado helpers el cual contendria nuestros test para que fuese mas entendibles.
![image](https://github.com/Reivaq/Practicas/assets/140466947/4a0895f9-3ee8-4578-b4f3-f0e102540c0e)
![image](https://github.com/Reivaq/Practicas/assets/140466947/6b633259-a6cf-4445-9a1d-97de85739a0c)


Ademas de esto secontinuo medificando nuestro archivo note.tes.js para una mejor comprencion, se utilizaron secuencias en paralelo y secuenciales las cuales cada una de ellas brinda diferentes ventajas y desventajas.
**Función beforeEach** 
![image](https://github.com/Reivaq/Practicas/assets/140466947/10f5c915-dc05-43d8-abf3-aa23f2a203ee)
![image](https://github.com/Reivaq/Practicas/assets/140466947/3f050129-1224-435d-b564-184cc067378d)
Antes de cada prueba, se eliminan todas las notas de la base de datos MongoDB y se imprime "BeforeEach" en la consola.
Luego, se crean objetos de notas iniciales y se almacenan en la base de datos, utilizando tanto enfoques paralelos como secuenciales.
Pruebas
El código contiene bloques describe que agrupan pruebas relacionadas:

Obtener Todas las Notas
Pruebas para verificar el estado de la respuesta y el contenido de las notas.
Crear una Nota
Pruebas para verificar la creación de notas válidas y notas sin contenido.
Eliminar una Nota
Pruebas para verificar la eliminación de notas y la actualización de la cantidad de notas en la base de datos
![image](https://github.com/Reivaq/Practicas/assets/140466947/57b620fc-b6dd-4b9c-bb61-dd79868e8cf6)
![image](https://github.com/Reivaq/Practicas/assets/140466947/90f3f694-d0c7-4da5-9edc-b9eb04faf199)
![image](https://github.com/Reivaq/Practicas/assets/140466947/8f202169-4023-4102-a8ca-a8457c2ebf88)
![image](https://github.com/Reivaq/Practicas/assets/140466947/a354e207-ae35-47fb-a7ef-fc8157883561)
Antes de cada prueba, se eliminan todas las notas de la base de datos MongoDB y se imprime "BeforeEach" en la consola.
Luego, se crean objetos de notas iniciales y se almacenan en la base de datos. Esto se hace tanto de forma paralela (usando Promise.all) como de forma secuencial para verificar diferentes enfoques.
Bloque describe para Obtener Todas las Notas:

Aquí se agrupan las pruebas relacionadas con obtener todas las notas de la base de datos.
Pruebas en el Bloque describe:

Se realizan tres pruebas relacionadas con la obtención de todas las notas, verificando el estado de la respuesta y el contenido de las notas.
Bloque describe para Crear una Nota:

Este bloque agrupa las pruebas relacionadas con la creación de nuevas notas en la base de datos.
Pruebas en el Bloque describe:

Se realizan dos pruebas relacionadas con la creación de notas válidas, verificando el estado de la respuesta y la inclusión de la nueva nota en la base de datos.
Pruebas en el Bloque describe para Eliminar una Nota:

Aquí se agrupan las pruebas relacionadas con la eliminación de notas de la base de datos.
Pruebas en el Bloque describe:

Se realizan dos pruebas relacionadas con la eliminación de notas, verificando el estado de la respuesta y la actualización de la cantidad de notas en la base de datos.


