# Documentacion 21 de Agosto 

Este dia se continuo con el curso de backend en el cual vimos lo siguiente Configura el linter ESLint y DEPLOY de tu API con Heroku, desafortunadamente nos encontramos con in conveniente ala hoara de realizar el deployer debido a que la pagina de huroku estaba asaturada y no podia crear la cuanta para trabajar por lo que se tuvo que posponer hasta mañana 

## ESLint

ESLint es una herramienta de linting para JavaScript que ayuda a mantener la consistencia y calidad del código en un proyecto. Detecta y reporta patrones problemáticos en el código, proporcionando recomendaciones y reglas personalizables para garantizar que el código siga ciertos estándares y convenciones.

**Ventajas de usar ESLint:**

- **Mantenimiento de calidad de código:** Ayuda a evitar errores comunes y promueve buenas prácticas de programación.
- **Consistencia:** Establece un conjunto de reglas que se aplican de manera uniforme a todo el código.
- **Configurabilidad:** Personaliza las reglas según las necesidades del proyecto.
- **Integración con herramientas de desarrollo:** Proporciona comentarios en tiempo real sobre el código.
- **Prevención de errores:** Detecta problemas potenciales antes de que se conviertan en errores en tiempo de ejecución.

### Despliegue de una API con Heroku

Heroku es una plataforma en la nube para construir, implementar y gestionar aplicaciones. Permite llevar una aplicación en línea sin preocuparse por la configuración del servidor y la infraestructura.

**Pasos para desplegar una API con Heroku:**

1. **Registro en Heroku:** Crea una cuenta en [Heroku](https://www.heroku.com/).

2. **Instalación de Heroku CLI:** Descarga e instala la [Heroku Command Line Interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli).

3. **Preparación de la aplicación:** Asegúrate de que tu aplicación tenga un `package.json` con la configuración necesaria.

4. **Iniciar sesión en Heroku:** Ejecuta `heroku login` en la terminal.

5. **Crear una aplicación en Heroku:** Ejecuta `heroku create` en la terminal para crear una nueva aplicación.

6. **Configuración de variables de entorno:** Define variables con `heroku config:set KEY=VALUE`.

7. **Despliegue:** Ejecuta `git push heroku main` para desplegar la aplicación.

8. **Abrir la aplicación:** Usa `heroku open` para abrir la aplicación en el navegador.

9. **Monitoreo y ajustes:** Heroku ofrece herramientas para monitorear y ajustar el rendimiento.

Se continuo trabajando con el codigo del dia anterio ademas de que se agregaron unas extenciones las cuales nos informaran que nuestro codigo este escrito conforme a ciertas normas esto lo realizamos con ayuda de "Eslint" 

**Instalacion**
Se ejecuto el siguinete comando "./node_modules/.bin/eslint --init"
Para su correcta instalacion se contestaron ciertas preguntas para que todo quedara instalado correctamente y se configurara para lo que estamos trabajando 

![1](https://github.com/Reivaq/Practicas/assets/140466947/9e30a60f-1e8a-4e25-b512-0e8bdd035ae5)
![2](https://github.com/Reivaq/Practicas/assets/140466947/d9b24b46-5290-497c-b723-458b1d1c156e)
![3](https://github.com/Reivaq/Practicas/assets/140466947/730d3040-7f82-49f1-beb4-4b8d7163caba)
![4](https://github.com/Reivaq/Practicas/assets/140466947/a5893550-5519-4146-b423-9fb303c6396f)

Esto fue de gran ayuda para que nuestro codigo estuviera bien documetado y fuese mas entendible.


**Instalacion de Heroku**

Este archo es necesario para realizar un deployer y que nuestra pagina pueda obtener un link.
![1](https://github.com/Reivaq/Practicas/assets/140466947/f0a28366-953e-478b-87b1-72ff87b189e1)

Desafortunadamente se debia crear una cuenta para poder ejecutarlo pero al parecer la pagina esta saturada lo que nos impidio deployar nuestara pagina 
![image](https://github.com/Reivaq/Practicas/assets/140466947/1f37eb80-464d-4c69-ae85-ab0503b076ba)


### Ejercicio
Para este ejercicio se continuo con el ejercicio de la clase pasa, el objetivo de este dia era aplicarle  ESLint y DEPLOY con heraku pero este ultimo no se pudo cumplir 

El codigo sufrio pequeñas modificaciones y codigo de notas solo se le paso la url del cual obtendria la informacion 

El codigo quedo de la sigueinte manera 

* Importaciones
![image](https://github.com/Reivaq/Practicas/assets/140466947/318ad55e-e5ee-422d-bc51-a5cdfee2c5c3)

+ Configuración de Middleware:
![image](https://github.com/Reivaq/Practicas/assets/140466947/e57cf2e8-1537-4b63-a7e2-056bedd1e435)
Middleware para manejar el cuerpo de las solicitudes JSON
Middleware para permitir solicitudes desde diferentes orígenes
Middleware de registro personalizado

* Middleware de Error:
     ![image](https://github.com/Reivaq/Practicas/assets/140466947/e7d500df-c89d-46fd-b4a5-66e5c3ca13d8)

* Configuración del Puerto y Escucha:

![image](https://github.com/Reivaq/Practicas/assets/140466947/100c41c3-8cd5-4b31-b273-c4b80d148691)

**Otros archivo**

![image](https://github.com/Reivaq/Practicas/assets/140466947/c3a19c23-e558-49bb-9824-16b8db35d484)





**Nota**
 Ademas de esto tambien se subio el archivo a un repositorio llamado Note
 
 "https://github.com/Reivaq/Notes.git"

**Codigo**

```
const express = require('express')
const cors = require('corse')
const app = express()
const logger = require('./loggerMiddleware')

app.use(express.json()) // Maydelwer
// eslint-disable-next-line linebreak-style
app.use(cors())
app.use(logger)
let notes = [
  {
    id: 1,
    content: 'HTML is eisser',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript ',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1> Hello Word </h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// Forma dinamica de recuperar algo del pas
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    ide: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }

  notes = notes.concat(newNote) // notes = [ ... notes, newNote]

  response.status(201).json(newNote)
})
app.use((request, response) => {
  response.status(404).json({
    error: 'Not Found'
  })
})
const PORT = process.env || 3001 // Sre define el puerto en el cual va a escuchar
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) // Escuha al puerto 3001

/* Con Http

//const http = require('http')  // esto es similar a relaizar un import http from 'http'
 const app = http.createServer((request, response) => {   // Forma de crear un servidor
    response.writeHead(200, { 'Content-Type': 'application/json' })  // Cada ves que le llegue una peticon al sertvidor se ejecuta
    response.end(JSON.stringify (notes))// esta es la forma correcta de realizar la convercion de una cadena a strings
  })

*/

```
