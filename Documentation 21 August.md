# Documentacion 21 de Agosto 

Este dia se obordo el video el cual es la introduccion a la parte de backend el cual complementara nuestro curso de fullStack 
En este video se vio como crear un servidor, como comunicarse con el, request( get, delte, plot) ademas de que se intalaron agunas extenciones las cuales nos facilitaran un poco el trabajo como lo son:
 * Express

Express es un marco de trabajo (framework) para construir aplicaciones web utilizando el lenguaje de programación JavaScript y la plataforma Node.js.Permite crear sitios web y servicios de manera más fácil al proporcionarte herramientas predefinidas para manejar rutas (URLs), solicitudes y respuestas, así como también para agregar funcionalidades como autenticación, manejo de datos y más. Express simplifica la creación de aplicaciones web al ofrecer una estructura organizada y práctica para tu código.

  ![1](https://github.com/Reivaq/Practicas/assets/140466947/33724694-544b-47b3-bf94-756f760f1dc1)
  ![2](https://github.com/Reivaq/Practicas/assets/140466947/5a33a5de-474f-4aef-b2a4-a73dbe80a0b6)


* Nodemon
 Nodemon es una herramienta que hace que desarrollar aplicaciones con Node.js sea más fácil. Observa los archivos de tu proyecto y, cada vez que haces cambios en tu código, automáticamente reinicia tu aplicación para que puedas ver los resultados al instante sin tener que reiniciar manualmente. 
    
 ![3](https://github.com/Reivaq/Practicas/assets/140466947/152c59e8-648c-4f02-8fdc-5ba88814a6a6)

**Ejercicio**

Este código representa una aplicación simple con un servidor web que puede manejar solicitudes para obtener, agregar y eliminar notas. Es una introducción básica a cómo funciona Express y cómo se pueden crear rutas para interactuar con la aplicación.

**Index.js**

Aquí, se importa el módulo 'express' y se crea una instancia de la aplicación Express llamada app.
![image](https://github.com/Reivaq/Practicas/assets/140466947/a66d571e-0a05-4922-9091-7b00575c61fb)



Este middleware permite a la aplicación procesar datos JSON en las solicitudes entrantes.

![image](https://github.com/Reivaq/Practicas/assets/140466947/8c0a7d82-3f01-4f91-b2f6-1e20fd3100c6)

Se define un arreglo de objetos llamado notes que contiene ejemplos de notas.
![image](https://github.com/Reivaq/Practicas/assets/140466947/64f6b477-7e9c-4d1d-8fd1-721a98d22b09)


Cuando accedes a la página de inicio (ruta "/"), se envía la respuesta con un título HTML.

![image](https://github.com/Reivaq/Practicas/assets/140466947/8e765be4-ed8b-45bf-bb47-2cbccc7ed753)

Al acceder a la ruta "/api/notes", se devuelve en formato JSON el arreglo de notas.

![image](https://github.com/Reivaq/Practicas/assets/140466947/80552eba-a79e-4d22-98b8-cad0c780118c)

Al acceder a una ruta como "/api/notes/2", se busca y devuelve la nota con el ID proporcionado.
![image](https://github.com/Reivaq/Practicas/assets/140466947/8d77c1c3-24e3-4e25-9a71-356d2736c982)


Permite eliminar una nota por ID y devuelve un estado 204 (sin contenido) si se elimina con éxito.

![image](https://github.com/Reivaq/Practicas/assets/140466947/f3166cd3-3c33-4c4a-81f6-20678a0ff9c4)

Permite agregar una nueva nota utilizando el cuerpo (body) de la solicitud.

![image](https://github.com/Reivaq/Practicas/assets/140466947/14b82dab-02e7-40fc-868d-40ae2cc898d6)


El servidor Express se inicia y escucha en el puerto 3001.

![image](https://github.com/Reivaq/Practicas/assets/140466947/e6d090d2-9fcb-4468-829a-1fd91216d80e)


Este código representa una aplicación simple con un servidor web que puede manejar solicitudes para obtener, agregar y eliminar notas. Es una introducción básica a cómo funciona Express y cómo se pueden crear rutas para interactuar con la aplicación.

**Package.Json**

se agregegaron los comandos "dev" y "node index" los cuales son esenciales para construir nuestra aplicacion

![image](https://github.com/Reivaq/Practicas/assets/140466947/9b7ef155-5808-42b8-affc-f108e04ee981)

### Request

**getl_All_Notes.rest**

![image](https://github.com/Reivaq/Practicas/assets/140466947/de862700-d2c2-4264-99ab-89557a365df6)

**delete_notes**
![image](https://github.com/Reivaq/Practicas/assets/140466947/8c120f47-fb2d-4f95-9556-249645fb9274)

**create_note**
![image](https://github.com/Reivaq/Practicas/assets/140466947/97d0a0cb-9961-44fa-9e9f-a6a4e0edadf4)


## Resultados 

Con el Loc el puerto 3001 
![image](https://github.com/Reivaq/Practicas/assets/140466947/32251981-d98a-4070-91a1-c2a49fae806c)

Modificando la direccion a **http://localhost:3001/api/notes**

![image](https://github.com/Reivaq/Practicas/assets/140466947/69a06401-be27-4a9e-a58b-7937936c52db)



**Anexos**

Index.js
```
const express = require('express')
const app = express() 

app.use(express.json())
let notes = [
    {
      id: 1,
      content: "HTML is eisser ",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript ",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

 app.get( '/', (request, response) =>{
  response.send('<h1> Hello Word </h1>')
 })

 app.get('/api/notes', (request, response) =>{
    response.json(notes)
 })

 // Forma dinamica de recuperar algo del pas 
 app.get('/api/notes/:id', (request, response) =>{
  console.log({id})
  const id =  Number (request.params.id)
  const note = notes.find(note => note.id === id)

  if (note){
    response.json(note)
  }else{
    response.status(404).end()
  }
  
})

app.delete ('/api/notes/:id', (request, response) =>{
  const id =  Number (request.params.id)
  const note = notes.filter(note => note.id !=  id)

  response.status(204).end()
})

app.post('/api/notes', (request, response)=>{
  const note = request.body

  const ids = notes.map(note => note.id )
  const maxId =  Math.max(...ids)

  const newNote = {
    ide:maxId +1,
    content: note.content,
    important: typeof note. important  != 'undefined' ? note.important : false,
    date: new Date ().toISOString()
  }

  notes = notes.concat(newNote)   // notes = [ ... notes, newNote]




  console.log(note)
  response.json(note)
}) 

const PORT = 3001 // Sre define el puerto en el cual va a escuchar 
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`)
}) // Escuha al puerto 3001


```

