

Crear un nuevo archivo dentro de la carpeta `Clases` llamado `introduccion_js` donde deberás escribir a un costado los valores que tomaran los siguentes ejercicios:

6 / "3"         resultado 2  java asume que ambos son numeros 
"2" * "3"       resultado 6  java asume que ambos son numeros
4 + 5 + "px"    resultado 9px java suma los numeros y suma el texto al final
"$" + 4 + 5     resultado $9  java suma los numeros y el texto al inicio
"4" - 2         resultado 2   java asume que ambos son numeros
"4px" - 2       resultado indefinido  
7 / 0           resultado undefined  
{}[0]           resultado 0  es elunico valor
parseInt("09")  resultado 9 como numero entero
5 && 2          resultado 2 entrega el numero final
2 && 5          resultado 5 entrega el numero final
5 || 0          resultado 5 entrega el numero inicial
0 || 5          resultado 0 entrega el numero inicial
[3]+[3]-[10]    resultado -4 
3>2>1           resultado true el tres es mayor que el 2 y el 2 es mayor que el 1
[] == ![]       resultado falso porque no se cumple la igualdad


Analiza cual sera el resultado de los console.log:

var profesor = "Jhoswe";
let teacher = "Jose";
if (true) {
    var profesor = "The Flash";
    let teacher = "Reverse Flash";
    console.log(profesor);          the flash
    console.log(teacher);          reverse flash
}
console.log(profesor);   the flash
console.log(teacher);   jose