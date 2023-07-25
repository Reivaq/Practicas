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
    ![](https://hackmd.io/_uploads/r1IQHe6c2.png)

Todos estos archivos se guardaron en una sola carpeta de modo que ala hora de trabajar con git fuera mas facil.Abrimos el centro de comandos de git de la siguiente manera
     ![](https://hackmd.io/_uploads/S1ayDgT5n.png)
    
Donde posterior mente se nos mostra la diguiente ventana la cual esmuy parecida al cmd 
    ![](https://hackmd.io/_uploads/rJRvvlTch.png)

Una vez en esta ventana ya podemos empezar a utilizar los comandos 

![Captura de pantalla (2968)](https://github.com/Reivaq/Practicas/assets/140466947/cd5dd532-c65d-4421-bd87-e80cc9806bbf)

    ![](https://hackmd.io/_uploads/B10pvgaq2.png)

 Iniciamos utilizando git init para poder empezar a trabbajar en un nuevo proyecto 
    
con el comando git status vemos que archivos son los que estan agregados y cuales no 
 en este caso como se muestra en la imagen tenemos dos archivos los cuales no estan agregados, para agregarlos utilizaremos el cmando git add <file> con el cual ya podrmos empezar a trabajar con ellos 
  
    ![Uploading file..._2toegawim]()


Una vez agregado los archivos verificamos el status para comenzar a trabajar con ellos  
    ![](https://hackmd.io/_uploads/HyGXFxT53.png)

  Para poder realizar cambios en los archivos tenemos que registar nuestro correo y nombre para asi poder llevar un control de quienes han modificado los archivos 
    
   ![](https://hackmd.io/_uploads/HkkRKxp92.png)
    
    
Con el comando commit podemos darle los ultimos toques a nuestro archivo 
    
![](https://hackmd.io/_uploads/HJFMsxaq3.png)

Con ayuda del comando git log podemos ver todas las modificaciones que se han realizado anuestro programa 
    
    
  ![](https://hackmd.io/_uploads/rygaiga93.png)


Con git Branch podemos crear una copia de nuestro program que sea total mente independiente de este y realizar los modificaciones que querramos teniendo dods modos el maste y el logi 
    
    
   ![](https://hackmd.io/_uploads/S1242eT53.png)

    
    
Despues de todo esto ya podemos subir nuestro codigo a github, para subir nuestro codigo entramos annuestra pagina de github en donde en la parte de repositorio podemos crear uno nuevo 
    
    
   ![](https://hackmd.io/_uploads/rk9c3xaq3.png)
    
    De mdo que configuremos todo lo siguiente 


  ![](https://hackmd.io/_uploads/rkMcaxTch.png)
  

  Una vez configurado todo esto lo siguiente es cargar nuestro codigo desde la linea de comandos lo cual es relativamente facil debido a que github ya nos da los cudigos los cuales podemos utilizar 
    
 
   ![](https://hackmd.io/_uploads/rkt30g652.png)

    
![](https://hackmd.io/_uploads/S19Ieb69n.png)

 Que dando de la siguiente manera 
    
![](https://hackmd.io/_uploads/Sy99gW653.png)

    
## Conclucion 
    
 En este primer curso se logro comprender para que sirve Git y GitHub ademas  de aprender los comandos basicos y como subir un archivo a github    
