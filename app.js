//Arrow function
//const saludar = () => {
//  console.log("hola a todos consola")
//  document.write("Hola manga de buto!")

//};

// invocar la funcion
//saludar();
//parametros

/*let numeroUno = Number(prompt("ingrese un numero"));
let numeroDos = Number(prompt("ingrese otro numero"));

const sumar = (num1, num2) =>{
  console.log(num1 + num2);
  resultado = (num1 + num2);

};

sumar(numeroUno, numeroDos);

alert(`${numeroUno} sumado a ${numeroDos} da ${resultado} `);*/

//Funciones

//Ejercicios

//1- sumar(a, b)

//Crear una función sumar que tome como argumentos
// dos números y devuelva
//la suma de ellos

//sumar(2, 3) // 5
//sumar(1.2, 3.4) // 4.6
//sumar(3, -5) // -2

//const sumar = (a, b) => a + b

//const suma = sumar (2, 3)
//const suma = sumar (1.2, 3.4)
//const suma = sumar (3, -5)

// console.log(suma)



//2- restar(a, b)

/*Crear una función restar que tome como argumentos 
dos números y devuelva
la resta de ellos

restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2*/

//const restar = (a, b) => a-b
 //const resta = restar (3 , 2)
 //const resta = restar (10 , 5.5)
 //const resta = restar (3 , 5)
 
//console.log(resta)




/*3- multiplicar(a, b)

Crear una función multiplicar que tome como argumentos
dos números y devuelva la multiplicación de ellos

multiplicar(2, 3) // 6
multiplicar(4, 0.5) // 2*/

//const multiplicar = (a, b) => a * b

//const por = multiplicar (2, 3) 
//const por = multiplicar (4, 0.5)
//console.log (por)



//4- dividir(a, b)



/*Crear una función dividir que tome como argumentos dos números y
devuelva la suma de ellos

dividir(12, 3) // 4
dividir(8, 4) // 2
sumar(30, 6) // 5*/

/*
const dividir = (a, b) => a/b;
const dividido = (a,b) => a/b;
const division = dividir (12, 3);


console.log(division);

const dividir2 = (a, b) => a/b;
const dividido2 = (a,b) => a/b;
const division2 = dividir (30, 6);

console.log(division2)

console.log(division + division2)


*/
/*

/*
5- esPar(numero)

Crear una función esPar que tome como argumento un número y devuelva true
si dicho números es par o false si no lo es

TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

esPar(2) // true
esPar(3) // false


const esPar = numero => numero % 2 === 0;

console.log (esPar(2)); // true
console.log (esPar(3)); // false*/



/*6-esImpar(numero)

Crear una función esImpar que tome como argumento un número y devuelva
true si dicho números es impar o false si no lo es
TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación
no es 0

esImpar(2) // false
esImpar(3) // true

const esImpar = numero => numero % 2 === 1;

console.log (esImpar(2)); // false
console.log (esImpar(3)); // true */



/*7-calcularAreaTriangulo(base, altura)

Crear una función calcularAreaTriangulo que tome como argumentos la base y
la altura de un triángulo y devuelva el área del mismo

calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40

const calcularAreaTriangulo = (base, altura) => base*altura / 2



console.log(calcularAreaTriangulo (3, 4));
console.log(calcularAreaTriangulo (5, 6));*/



/*8- gritar(str)

Crear una función gritar que tome como argumento un string y devuelva el
mismo string con un signo de exclamación al principio y al final del mismo

gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!*/



//const gritar = palabra => `¡${palabra}!`;

//console.log(gritar("hola"));
//console.log(gritar("aaaaaa"));





/*9- obtenerNombreCompleto(nombre, apellido)

Crear una función obtenerNombreCompleto que tome como argumento un
nombre y un apellido y devuelva un string con la unión de ambos valores

obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'*/

//const obtenerNombreCompleto = (nombre, apellido)=> `${nombre}, ${apellido}`;

//console.log(obtenerNombreCompleto("Ada", "Lovelace"));



/*10- saludar(nombre)

Crear una función saludar que tome como argumentos un nombre y devuelva
un saludo que lo incluya.

saludar('Ada') // 'Hola Ada, un gusto conocerte'*/

//const saludar = nombre=> `Hola ${nombre}, como garlopa estas?`;

//console.log (saludar("ada"));



/*11- saludarGritando(nombre, apellido)

Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar),
crear una función saludarGritando que tome como argumentos un nombre y
un apellido y devuelva un saludo con signos de exclamación.

saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto
conocerte!


-TIP: recordá que los resultados de funciones se pueden guardar en variables
para usarlos más adelante*/

//const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
//const saludo = saludar(nombreCompleto)
//const grito = gritar(saludo)



//console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!*/




/*12- obtenerDatosDeCiudad(nombre, poblacion, pais)

Crear una función obtenerDatosDeCiudad que tome como argumentos un string
nombre, un número poblacion y un string pais y devuelva string con el siguiente
formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y
está ubicada en PAIS

obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 'La ciudad de
Santa Fe tiene una población de 545606 habitantes y está ubicada en
Argentina'*/





/*13- convertirHorasEnSegundos(horas)

Crear una función convertirHorasEnSegundos que tome como argumento un
número de horas y devuelva la conversión a segundos de dicha cantidad de
horas

convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200*/



/*14- calcularPerimetroRectangulo(ancho, alto)

Crear una función calcularAreaTriangulo que tome como argumentos el ancho
y el alto de un rectángulo y devuelva su perímetro

calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60*/



/*15- calcularPorcentaje(numero, porcentaje)

Crear una función calcularPorcentaje que tome como argumentos un número
y un porcentaje y devuelva el valor del porcentaje correspondiente al número

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20*/



/*16- sumarPorcentaje(numero, porcentaje)

Crear una función sumarPorcentaje que tome como argumentos un número y
un porcentaje y devuelva la suma de dicho número con la de su porcentaje.
Usar la función calcularPorcentaje para obtener el porcentaje a sumar

sumarPorcentaje(100, 15) // 115
sumarPorcentaje(10, 50) // 15
sumarPorcentaje(200, 10) // 220*/



/*17-restarPorcentaje(numero, porcentaje)

Crear una función restarPorcentaje que tome como argumentos un número y
un porcentaje y devuelva la resta de dicho número con la de su porcentaje.
Usar la función calcularPorcentaje para obtener el porcentaje a restar

restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180*/



/*18-calcularFPS(fps, minutos)

FPS son cuadros por segundo (frames per second). Crear una una función
calcularFPS que tome como argumentos una cantidad de cuadros por segundo
y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad
de minutos

calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360*/



/*19-obtenerCompetencia(a, b)

Crear una función obtenerCompetencia que tome como argumentos dos strings
a y b y devuelva un string con el formato a vs. b

obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`*/

/*20- generarEmail(usuario, dominio)

Crear una función generarEmail que tome como argumentos dos string usuario
y dominio y el un string email con el formato usuario@dominio.com

generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'*/



/*21- sMayorDeEdad(edad)

Crear una función esMayorDeEdad que tome como argumento un número edad y
devuelva true si es mayor de edad (18 o más) o false de lo contrario

esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true*/



/*22- haceCalor(temperatura)

Crear una función haceCalor que tome como argumento un número
temperatura y devuelva true si hace calor (22 grados o más) o false de lo
contrario

haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true
*/

/*
23- haceFrio(temperatura)

Crear una función haceCalor que tome como argumento un número
temperatura y devuelva true si hace frio (12 grados o menos) o false de lo
contrario

haceFrio(12) // true
haceFrio(22) // false
haceFrio(3) // true
haceFrio(-2) // true  
*//*



24- calcularPuntaje(facil, normal, dificil)

Crear una función calcularPuntaje que calcule el puntaje de un examen que
consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que
consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un
número con el puntaje correspondiente. El puntaje se calcula de la siguiente
forma:

facil: 3 puntos
normal: 5 puntos
dificil: 10 puntos
calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40  

*//*



25- aceptaDeposito(monto)

Crear una función aceptaDeposito que tome como argumento un número monto
y devuelva true si el monto es divisible por 10 o false si no lo es

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true*/
