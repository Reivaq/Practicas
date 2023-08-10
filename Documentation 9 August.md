# Documentación 9 de agosto

En este día se logró avanzar con el tercer video del curso, aunque no se completó en su totalidad debido a la realización de ejercicios que retrasaron el progreso. Durante este video, se exploraron los siguientes aspectos:

- Rendereización de la aplicación con nuevos datos.
- Uso de estados en componentes, utilizando el hook `useState`.
- Control de eventos en React.

Se abordaron diferentes enfoques para cada uno de estos puntos, tanto correctos como incorrectos.

Comenzamos con un código base que se fue modificando a medida que avanzábamos.

## Código en Index.js

![Index.js](https://github.com/Reivaq/Practicas/assets/140466947/3fcb60f1-ae51-4751-81b0-2bdbff8b513e)

## Código en App.js

![App.js](https://github.com/Reivaq/Practicas/assets/140466947/d29a9e97-fa54-4f65-83b2-5188578ab1eb)

## Código modificado

### Index.js

![Index.js modificado](https://github.com/Reivaq/Practicas/assets/140466947/2f39d580-3801-4a7d-a27b-b814644640f1)
![Index.js modificado](https://github.com/Reivaq/Practicas/assets/140466947/fb1470db-d79f-4614-91ec-a363303a32ff)

Se importa `ReactDOM` de "react-dom", que se utiliza para renderizar componentes de React en el DOM.

Se importa `useState` de "react", que es un hook de React utilizado para agregar estados a componentes funcionales.

`rootElement` almacena el elemento del DOM donde se renderizará el componente.

Se define el componente funcional `App`. Este componente utiliza el hook `useState` para crear un estado llamado `contadorValue` con un valor inicial de 13. También crea una función `updateContador` para actualizar el estado.

`setInterval` se utiliza para ejecutar una función en intervalos regulares. En este caso, cada 2 segundos, incrementa el valor del contador usando la función `updateContador`.

El retorno del componente (return) contiene elementos JSX que se renderizarán en la interfaz de usuario. Muestra el valor del contador (`contadorValue`) en un encabezado (`h1`) y agrega un texto adicional.

Finalmente, se utiliza `ReactDOM.render` para renderizar el componente `App` en el elemento con el ID "root" en el DOM.

### Código App.js

![App.js modificado](https://github.com/Reivaq/Practicas/assets/140466947/30cfa369-b9a4-41e9-bf7b-25d4c0cbab3c)

Explicación del código:

- `import "./styles.css"`: Importa el archivo de estilo CSS llamado "styles.css". Esto indica que este archivo de estilo contiene reglas de diseño que se aplicarán al componente.

- `export default function App() { ... }`: Define una función de componente llamada `App`. Esta es una forma común de crear componentes en React. El componente se exporta como `default`, lo que significa que se puede importar con cualquier nombre en otros archivos.

- En el retorno (return) del componente, hay un bloque `<div>` con la clase CSS `App`. Esto es importante para aplicar estilos al componente utilizando las reglas definidas en el archivo "styles.css".

- `<h1>Hello Reivaj</h1>`: Muestra un encabezado de nivel 1 con el texto "Hello Reivaj". En este caso, "Reivaj" parece ser el nombre al revés del autor.

- `<h2>Start to edit to see some magic happen!</h2>`: Muestra un encabezado de nivel 2 con el texto "Start to edit to see some magic happen!". Este mensaje invita al usuario a editar el código y ver cómo los cambios afectan la interfaz.

### Resultados

![Resultado de la aplicación](https://github.com/Reivaq/Practicas/assets/140466947/3ab786e5-53f9-4c07-821b-ac7beae45623)
