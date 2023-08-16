# Documentación - 15 de agosto

En este día, continuamos con los ejercicios de listas que habíamos abordado el día anterior para proporcionarles un formato más adecuado. Posteriormente, nos adentramos en el trabajo con formularios. Exploramos cómo funcionan, cuáles son las formas incorrectas y correctas de programarlos. Por último, llevamos a cabo un ejercicio que consiste en agregar datos a una lista a través de formularios.

### Índice de Notas

![Notas Index](https://github.com/Reivaq/Practicas/assets/140466947/442714e7-0299-4695-a889-a03c45bcf7b7)
![Notas Index](https://github.com/Reivaq/Practicas/assets/140466947/10225f20-1ab6-4ac6-a1ee-c546e98a61b4)

### Notes.js

![Notes.js](https://github.com/Reivaq/Practicas/assets/140466947/1f71bb57-159c-448a-99eb-52cd67dbb8bf)

## Ejercicio de Formularios

![Ejercicio de Formularios](https://github.com/Reivaq/Practicas/assets/140466947/9661bc63-c2f7-41d0-92f2-195ca07870dc)
![Ejercicio de Formularios](https://github.com/Reivaq/Practicas/assets/140466947/3729e243-7edd-475b-91a4-61409ee70aca)
![Ejercicio de Formularios](https://github.com/Reivaq/Practicas/assets/140466947/9974b3d6-8e60-470f-b1ca-d0496aeec0ed)

**Explicación del Código**

* **Importaciones:** El código comienza importando los módulos necesarios. Se importa React y useState desde 'react', y parece que también se está importando un componente llamado Note desde el archivo './Note'. Además, se importa el archivo de estilos './styles.css'.

* **Estado Inicial:** El estado inicial de la aplicación se establece utilizando el hook useState. Se definen dos estados: notes y newNote. El estado notes contiene un array de objetos que representan notas con diferentes propiedades como id, content, date e important. El estado newNote representa el contenido de la nota que se está ingresando en el campo de texto.

* **Manejo de Cambios en el Campo de Texto:** La función handleChange se llama cada vez que el valor del campo de texto cambia. Utiliza el setNewNote para actualizar el estado newNote con el valor actual del campo de texto.

* **Creación de una Nueva Nota:** La función handleClick se llama cuando se hace clic en el botón "Crear Nota". Esta función crea una nueva nota agregando el contenido ingresado al estado notes. La nueva nota se crea como un objeto con un id basado en la longitud actual del array de notas, el contenido de la nota, la fecha actual y la propiedad important inicializada como false. Luego, se actualiza el estado notes con la nueva nota y se restablece el estado newNote a una cadena vacía.

* **Renderización:** El componente App se encarga de renderizar el contenido en el navegador. Comienza con un encabezado <h1> que muestra "Notas". Luego, se utiliza un bucle map para recorrer cada nota en el array notes y renderizar un componente Note para cada una.

* **Campo de Texto y Botón:** Debajo de la lista de notas, hay un campo de texto <input> donde los usuarios pueden ingresar el contenido de la nueva nota. El atributo onChange del campo de texto está vinculado a la función handleChange para que el estado newNote se actualice a medida que se ingresa el texto. El botón "Crear Nota" tiene un evento onClick que llama a la función handleClick cuando se hace clic.

### Resultado

![Resultado](https://github.com/Reivaq/Practicas/assets/140466947/5fae91ba-9ecd-419d-a0a4-b5901dc96927)

Ahora podemos agregar notas con el botón o presionando la tecla Enter.

#### Prueba 1

![Prueba 1](https://github.com/Reivaq/Practicas/assets/140466947/e3efa93d-8654-4dde-9d33-9f2503a7b436)
![Prueba 1](https://github.com/Reivaq/Practicas/assets/140466947/4ab9242a-2ccc-4b4f-93b1-c271df729650)

#### Prueba 2

![Prueba 2](https://github.com/Reivaq/Practicas/assets/140466947/3dd58fa3-c3e9-404d-919e-4cf2d05b5320)
![Prueba 2](https://github.com/Reivaq/Practicas/assets/140466947/04812cf4-09f7-4d92-808c-816aeee4705e)
