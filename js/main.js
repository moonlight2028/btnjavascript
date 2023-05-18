function saludo() {
  alert("Bienvenido usuario");
  alert(
    "acontinucion econtraras unos botenes que ejcutan algoritmso realizados con js puro"
  );
}
// funcion pra sumar
function suma() {
  let a = 0;
  let b = 0;
  let suma = 0;

  a = parseInt(prompt("profavor ingrese el primer valor a sumar"));
  b = parseInt(prompt("profavor ingrese el segundo valor a sumar"));
  suma = a + b;

  alert("el resultado es: " + suma);
}
// funcion para realizar las cuatro operaciones basicas
function operacion() {
  let a = 0;
  let b = 0;
  let suma = 0;
  let resta = 0;
  let multiplicacion = 0;
  let divisor = 0;

  a = parseInt(
    prompt("profavor ingrese el primer valor a utilizar para la operacion")
  );
  b = parseInt(
    prompt("profavor ingrese el segundo valor a utilizar para la operacion")
  );
  suma = a + b;
  resta = a - b;
  multiplicacion = a * b;
  divisor = a / b;

  alert(
    "el resultado de suam es: " +
      suma +
      " el resultado de resta es:  " +
      resta +
      " el resultado de multiplicacion es: " +
      multiplicacion +
      " el resultado de division es: " +
      divisor
  );
}
// funcion para calcular el cuadrado de un numero
function cuadrado() {
  let a = 0;
  let b = 0;

  a = parseInt(prompt("porfavor ingrese un numero"));

  b = a * a;

  alert("el cuadrado del numero: " + a + " es: " + b);
}
// funcion para calcular el area de un triangulo
function area() {
  let a = 2;
  let b = 0;
  let c = 0;
  let area = 0;

  b = parseInt(prompt("porfavor ingrese la base del triangulo"));
  c = parseInt(prompt("porfavor ingrese la altura del triangulo"));

  area = (b * c) / a;

  alert("el area del triangulo es: " + area);
}
// funcion para calcular la inversion capital
function inversion() {
  let int = 0.017;
  let inversion = parseInt(prompt("ingrese el valor a invertir"));
  let ANios = parseInt(prompt("igrese la cantidad de años"));

  let ganancia = inversion * (1 + int * ANios * 12);
  let neto = ganancia - inversion;

  alert("su ganancia despues de: " + ANios + " años es: " + neto);
}

// funcion para calcular el menor de 3 numeros
function min() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  num1 = parseInt(prompt("ingrese los numeros "));
  num2 = parseInt(prompt("ingrese los numeros "));
  num3 = parseInt(prompt("ingrese los numeros "));

  if ((num1 == num2) & (num3 == num1)) {
    alert("los numeros son iguales");
  } else {
    let menor = Math.min(num1, num2, num3);
    alert("el menor es: " + menor);
  }
}
// funcion para calcular el mayor de 2 numeros
function max() {
  let num1 = 0;
  let num2 = 0;

  num1 = parseInt(prompt("ingrese los numeros "));
  num2 = parseInt(prompt("ingrese los numeros "));

  if (num1 == num2) {
    alert("los numeros son iguales");
  } else {
    let mayor = Math.max(num1, num2);
    alert("el mayor es: " + mayor);
  }
}
// funcion para sacar el promedio de 7 notas
function colegioABC() {
  let cal1 = 0;

  let nombre = String(prompt("ingrese su nombre"));
  let materia = String(prompt("ingrese la materia cursada "));
  let notas = 7;
  let promedio = 0;

  for (let i = 0; i <= notas; i++) {
    cal1 = parseInt(prompt("ingrese la nota"));
    promedio = promedio + cal1;
  }
  promedio = promedio / 7;
  if (promedio >= 6.2) {
    alert(
      "el estudiante: " +
        nombre +
        " en la materia: " +
        materia +
        "aprobo con: " +
        promedio.toFixed(2)
    );
  } else {
    alert(
      "el estudiante: " +
        nombre +
        " en la materia: " +
        materia +
        " reprobo con: " +
        promedio.toFixed(2)
    );
  }
}
// funcion para calcular el descuento de la cantidad de manzanas a comprar
function Kilosdescuento() {
  let precio = 4500;
  let cantidad = parseInt(prompt("Ingrese los kilos de manzanas"));

  switch (true) {
    case cantidad === 0 || cantidad < 2:
      let descuento = parseInt(precio * cantidad);
      alert("Su descuento es 0, el total es: " + descuento);
      break;

    case cantidad >= 3 && cantidad <= 5:
      let subtotal2 = parseInt(precio * cantidad);
      let descuento2 = parseInt(subtotal2 * (10 / 100));
      let total2 = subtotal2 - descuento2;
      alert("Su descuento es del 10%, el total es: " + total2);
      break;

    case cantidad >= 6 && cantidad <= 8:
      let subtotal3 = parseInt(precio * cantidad);
      let descuento3 = parseInt(subtotal3 * (16 / 100));
      let total3 = subtotal3 - descuento3;
      alert("Su descuento es del 16%, el total es: " + total3);
      break;

    case cantidad >= 9:
      let subtotal4 = parseInt(precio * cantidad);
      let descuento4 = parseInt(subtotal4 * (20 / 100));
      let total4 = subtotal4 - descuento4;
      alert("Su descuento es del 20%, el total es: " + total4);
      break;

    default:
      alert("No ha ingresado una cantidad válida");
      break;
  }
}
