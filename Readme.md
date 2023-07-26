# Dia 1

## Introduccion 

En este primer curso se llevara acabo la introduccion a git y Github, de manera que se logren conocer todos los conceptos basicoas asi como los comandoa basicos 

## Objetivos 
* Aprender a utilizar Git y Github 
* Aprender los comandos basicos y para que sirven



## ¿Que es Git?

Git es un sistema de control de versiones que permite a los desarrolladores rastrear y gestionar cambios en proyectos de software de manera colaborativa. Facilita el trabajo en equipo, el seguimiento de modificaciones y la creación de ramas para desarrollar nuevas características. Es ampliamente utilizado en la industria del desarrollo de software.
 

## Estados de git 

Git cuenta con 3 estados los cuales son los siguientes:
*  Working Directory 
    
    Es el estado en el que se encuentran los archivos en su forma actual, es decir, los archivos que se estan modificando o creando en el proyecto.

*  Stagin Area

    Una vez que se  realizan cambios en los archivos en el directorio de trabajo, se pueden agregar al área de preparación. Aquí, Git rastrea los cambios que están listos para ser incluidos en el próximo commit. Se pueden seleccionar qué cambios incluir en esta etapa y cuáles ignorar.
    
*  Repository

    Cuando realizas un commit, los cambios que están en el área de preparación se guardan permanentemente en el repositorio. El repositorio es una base de datos que almacena todos los commits realizados en el proyecto a lo largo del tiempo. Cada commit contiene un conjunto de cambios, una marca de tiempo y un identificador único que permite acceder a ellos y volver a estados anteriores del proyecto si es necesario.
    
    
## Comados Basicos de Git 

- **git init** :  Sirve para la creación de un proyecto nuevo (empezar a utilizar en cualquier poyecto git )
- **git add<file>** : Sirve para pasar archivos del working directory al a staging area
- **git status:**  Sirve para ver en que estado estan los archivos ****
- **git commit :** Sirve para pasar de staging area al repositorio
- **git commit -m**
- **git push :**  su funcion es subirlo a un repositorio remoto (servidor)
- **git pull :**  En caso de que se este trabajando con otros desarrolladores te muestra los cambios que le han realizado
- **git clone :** Realiza una copia desde el servidor central de donde se encuentra el codigo a tu computador
- **it config —global [user.name](http://user.name) “nombre”**
- **it config —global [user.](http://user.name)email“email”**
- **git checkout:** revertir el cambio en el archivo deseado
- **git diff “nombre del archivo”** . muestra lo que se modifico
- .**git ignore**
- Si se crea un archivo con el nombre .gitignore y adentro de este se le pone el nombre del archivo que no queremos que aparezca en nuestro proyecto
- **git branch  login** : Crea una version alternativa
- **git branch** :para ver cuantas ramas existen y en cual estamos trabajando  
- **git checkout login** : moverse a ese destino o ramas 
    
 ## Trabajo Realizado 
    
    
    
Durante este primer video se reralizara la creacion de diferentes programas como son java scrip html y css los cuales no contienen nada complejo de modo que estos solo se utilizaron para lograr comprender los conceptos basicos de git y aprender a utilizar los comandos, para ellos se utilizo el visualizador de codigo Visual Studio 

    ![image](https://github.com/Reivaq/Practicas/assets/140466947/81763f8d-25b8-4655-a429-92bbc1998ff2)

Todos estos archivos se guardaron en una sola carpeta de modo que ala hora de trabajar con git fuera mas facil.Abrimos el centro de comandos de git de la siguiente manera
  ![image](https://github.com/Reivaq/Practicas/assets/140466947/cd250f54-7766-4357-bdd6-2502ab8c38a5)
    
Donde posterior mente se nos mostra la diguiente ventana la cual esmuy parecida al cmd 
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/0eb1e55b-bd62-4322-afa7-9f34409e199b)

Una vez en esta ventana ya podemos empezar a utilizar los comandos 


![image](https://github.com/Reivaq/Practicas/assets/140466947/41615401-371e-4242-bad3-99cf073fb9c8)


 

 Iniciamos utilizando git init para poder empezar a trabbajar en un nuevo proyecto 
    
con el comando git status vemos que archivos son los que estan agregados y cuales no 
 en este caso como se muestra en la imagen tenemos dos archivos los cuales no estan agregados, para agregarlos utilizaremos el cmando git add <file> con el cual ya podrmos empezar a trabajar con ellos 
  
    ![Uploading file..._2toegawim]()


Una vez agregado los archivos verificamos el status para comenzar a trabajar con ellos  
 
![image](https://github.com/Reivaq/Practicas/assets/140466947/49e547ba-44fc-4e2c-acb6-836f4999cb8d)




  Para poder realizar cambios en los archivos tenemos que registar nuestro correo y nombre para asi poder llevar un control de quienes han modificado los archivos 
    
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/36eaead5-661b-4f8a-93fb-807354f2e7dc)


    
    
Con el comando commit podemos darle los ultimos toques a nuestro archivo 
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/0f37ce89-2e5e-4831-9c43-7ed94982e5db)



Con ayuda del comando git log podemos ver todas las modificaciones que se han realizado a nuestro programa 
    
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/1c88af03-2e27-4def-8207-ef6e16f6ffd1)



Con git Branch podemos crear una copia de nuestro program que sea total mente independiente de este y realizar los modificaciones que querramos teniendo dods modos el maste y el logi 
    
    
 ![image](https://github.com/Reivaq/Practicas/assets/140466947/5379b2fa-a47b-456f-b15c-77969dd4bc71)


    
    
Despues de todo esto ya podemos subir nuestro codigo a github, para subir nuestro codigo entramos annuestra pagina de github en donde en la parte de repositorio podemos crear uno nuevo 
    
    ![image](https://github.com/Reivaq/Practicas/assets/140466947/03e89c37-d35a-47a7-8f47-093b0ef5d214)
    
    De mdo que configuremos todo lo siguiente 


![image](https://github.com/Reivaq/Practicas/assets/140466947/bda9cbe1-7200-4848-8f08-67b799468fa3)
  

  Una vez configurado todo esto lo siguiente es cargar nuestro codigo desde la linea de comandos lo cual es relativamente facil debido a que github ya nos da los cudigos los cuales podemos utilizar 
    
 
  ![image](https://github.com/Reivaq/Practicas/assets/140466947/2b5da795-ed50-4fde-9c0d-7404969423c4)

    
![image](https://github.com/Reivaq/Practicas/assets/140466947/e7dc33da-c7e1-4330-9e15-084124a40bca)


 Que dando de la siguiente manera 
    
![image](https://github.com/Reivaq/Practicas/assets/140466947/ff8213a0-4774-4b79-af0d-f3840fc143b0)


    
## Conclucion 
    
 En este primer curso se logro comprender para que sirve Git y GitHub ademas  de aprender los comandos basicos y como subir un archivo a github    



#Dia 2

### Tarea 
Retomando lo aprendido el dia de ayer lo que deberemos hcaer hoy aparte de avanzar con los videos se debera accerder al archivo Curso GitHub.HTML desde la terminal de cmd y bash de linux en Windows 

Para ello abrimos la terminal de Git Bash 

![Captura de pantalla (2974)](https://github.com/Reivaq/Practicas/assets/140466947/78fb8f57-b008-4be3-8241-b338c85a17ab)


Con ayuda del comando ls podemos ver en donde estamos ubicados ademas de mostrarnos todas las carpetas disponibles que tenemos, hay ubicaremos la carpeta donde se ubique nuestro archo.

Una vez ubicada nuestra carpeta con el comando Cd <NAME FILE> nos moveremos ala carpeta deseada 
    
    Imagen 2
    
    
Ya dentro de nuestra carpeta buscamos nuestro archivo con el comando ls 
    
    
    Imagen 3 
    
    
Con el CMD se siguen los mismos pasos y comandos primero usando el comado ls para saber donde estamos ubicados 
    
    Imagen 4
    
despues el comando CD para desplazarnos entre carpetas 
    
    Imagen 5 
    
    
    Asi hasta encontrar nuestro Archivo 
    
    
# Curso HTML para principiantes
    
En este pequeño curso se abordara los comandos basicos de HTML, etiquetas y el como crear una pagina de manera sencilla 
    
## Etiquetas basicas utilizadas 
    






