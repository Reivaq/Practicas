document.write("<h1> Hello World </h1>");

// Tipos de datos 

//Strings

" Hola mundo" 
' Hola mundo'

//numer
 21
 -9.6

 //booleand
 true
 false

//array

[ 'Jose', 'Pedro', ' Juan']
[1,2,3]
[true, false, true]
/*
Object
{
    'username':'rian',
    'score':70.4,
    "hours":14
    "profesional":true

} */

// creacion de variables con let y var 
 
var nameuser="john";
let lastname=" Ramirez";

// creacion de constatntes 
const PI = 3.1416;


// suma de dos numeros 

let numeroUno=60;
let numeroDos=20;

let resulstado = numeroDos + numeroUno;  //suma
let resulstadoR = numeroDos - numeroUno;  //resta
let resulstadoD = numeroDos / numeroUno;  //division 
console.long(resulstado);

//concatenacion 

let apellido = "Perez Leon" ;
let nombre =" Juan";

let nombre_completo= nombre + ' ' + apellido; // tambien agregamos un espacio en blanco 
console.long(nombre_complet);



// comparacion de dos valores 

let numeroOne=60;
let numeroTwo=20;

let result = numeroOne > numeroTwo ; //mayor
console.log(result);

// condicionales 

let pasword =" Quiroz";
let user=" Antonio";
let = imput == pasword;

if (result == true){
    console.log( " Loing Correct ");
}else{
     console.log("contraseña incorrecta");
}

// condicional case

let typeCard =" debitCard";

switch(typeCard){
    case 'debitCard':
        console.log("this is a debit Card");
        break;
    case "CreditCard":
        console.log("this is a credif Card");
        break;
    default :
    console.log(' you dont have a debid or credit card');
}


//Bucles
 
let count = 50;
while (count > 0 ){
        console.log(count);
        count= count-1;
}

//FOR

let nombre1 =[1, 2, 3];

for (let i = nombre1.length-1; i>=0; i--){
    console.log(nombre1[i]);
}


// funciones definimos tarea dentro de ellas y luego las podemos llamar 

function greeting (){
    console.log("hello");
}

greeting();