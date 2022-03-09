let readlineSync = require("readline-sync");
// esto es la libreria

// let nom = readlineSync.question("Com et dius? ");
// console.log("Hola " + nom + "!");

let introduccion = "vol seguir amb aquesta aventura";
console.log(introduccion);
let resposta = readlineSync.question("si o no ");
// console.log(resposta);
if (resposta === "si")
    console.log('vale, ara et poso la segona part de la historia');
else console.log(" bona tarda adeu");

let comentario = "creus que apendrás a programar basicament";
console.log(comentario);
let resposta2 = readlineSync.question("si o no ");
if (resposta2 === "si")
    console.log("molt be y que et caldra");
else console.log("tan jodido lo ves?");


let decisionfinal = " despúes de mucho divagar e intentar averiguar todo este rollo lo mejor es que nos tomemos un café";
console.log(decisionfinal);
let respuesta3 = readlineSync.question("que te parece si o no");
if (respuesta3 === "si")
    console.log("si lo necesito cafeina en vena");
else console.log("mejor no te lo tomes que bastante nervioso vas.");

































