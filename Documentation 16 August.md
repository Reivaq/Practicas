# Documentación - 16 de Agosto

En este día se abordó el tema de Fetching y Mutación de Datos en React con el hook `useEffect`. Aprendimos cómo recabar datos de una página web y cómo mejorar el archivo de listas que habíamos trabajado en la clase anterior. En esta ocasión, optamos por extraer la lista de datos de una página.

Además de modificar el código, nos dimos a la tarea de instalar una extensión en nuestro navegador que nos facilitaría las cosas y haría el código más legible para las personas.

### Instalación de la extensión JSON Formatter

![JSON Formatter](https://github.com/Reivaq/Practicas/assets/140466947/485de68a-aea1-411a-9c5f-b188092f2dfa.png)
![JSON Formatter](https://github.com/Reivaq/Practicas/assets/140466947/b1df0511-b98c-4436-b3a7-ad884dcf7cdc.png)

### Código en Index.js
![Index.js](https://github.com/Reivaq/Practicas/assets/140466947/ad59fa0f-e032-481d-9e4f-45792cb3db35.png)

**Explicación del código:**

**Importaciones:**
- Se importa la biblioteca `ReactDOM`, que se utiliza para renderizar componentes de React en el DOM.
- Se importa el componente `App` desde el archivo `App.js`.

**Obtención del elemento raíz:**
- Se utiliza `document.getElementById("root")` para obtener el elemento HTML con el id "root". Este es el lugar donde se renderizará tu aplicación React.

**Renderización del componente App:**
- `ReactDOM.render(<App />, rootElement);` renderiza el componente `App` en el elemento raíz obtenido anteriormente. El componente `App` es el componente principal que representa toda tu aplicación.

### Código Note.js
![Note.js](https://github.com/Reivaq/Practicas/assets/140466947/4d984440-c91e-4ac9-8815-2c3871f59abf.png)

**Explicación del código:**
...

### Código App.js
![App.js Parte 1](https://github.com/Reivaq/Practicas/assets/140466947/56381047-e6a3-47bc-9356-ed86d0754a3e.png)
![App.js Parte 2](https://github.com/Reivaq/Practicas/assets/140466947/8a7393a2-db1c-43da-a4b7-29127804e0d5.png)
![App.js Parte 3](https://github.com/Reivaq/Practicas/assets/140466947/754a3358-3d07-4a48-9320-4acacb2e2d9d.png)

**Explicación del código:**

1. **Importaciones:**
   - Se importan los estilos CSS desde el archivo `styles.css`.
   - Se importa el componente `Note` desde el archivo `Note.js`.
   - Se importan `useEffect` y `useState` desde la biblioteca de React.

2. **Función App:**
   - Esta es la función de componente principal llamada `App`.
   - El componente `App` se exporta como el componente predeterminado.

3. **Estado:**
   - Se establecen dos estados utilizando `useState`:
     - `notes`: Almacena la lista de notas. Inicialmente se establece como un array vacío `[]`.
     - `newNote`: Almacena el contenido de la nueva nota que se está escribiendo. Inicialmente se establece como una cadena vacía `""`.

4. **useEffect:**
   - El hook `useEffect` se utiliza para realizar una acción después de que el componente se monta.
   - En este caso, se realiza una solicitud a `https://jsonplaceholder.typicode.com/posts` para obtener una lista de notas simuladas.
   - Cuando la respuesta se obtiene en formato JSON, se almacena en el estado `notes`.

5. **Manejadores de Eventos:**
   - `handleChange`: Este manejador se activa cuando cambia el contenido del campo de entrada. Actualiza el estado `newNote` con el valor del campo de entrada.
   - `handleSubmit`: Este manejador se activa cuando se envía el formulario. Crea un nuevo objeto de nota utilizando el valor de `newNote`, lo agrega a la lista de `notes` usando `concat`, y luego restablece el estado `newNote` a una cadena vacía.

6. **Renderización:**
   - Se muestra un título `<h1>` en la página con el texto "Notes".
   - Se mapea a través de la lista de `notes` utilizando `.map()` y se crea un componente `Note` para cada elemento.
   - Se muestra un formulario con un campo de entrada y un botón. El campo de entrada tiene su valor vinculado al estado `newNote`.
   - Cuando se envía el formulario, se activa el manejador `handleSubmit`.

## Resultados

Como se puede observar, hubo cambios significativos en el código en comparación con la versión anterior, especialmente en la obtención de datos.

![Resultados](https://github.com/Reivaq/Practicas/assets/140466947/33efb540-ef2b-4468-a41e-11d6739a4869.png)
