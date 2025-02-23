let texto = "JavaScript";

console.log(texto.charAt(4)); // Exibe: S

let lista = "maçã, banana, uva, melancia";

let frutas = lista.split(",");

console.log(frutas); // Exibe: ["maçã", "banana", "uva", "melancia"]

let frase1 = "O gato subiu no telhado e depois pulou.";

console.log(frase1.indexOf("gato")); // Exibe: 2

console.log(frase1.lastIndexOf("pulou")); // Exibe: 37

let palavra = "abcdefgh";

console.log(palavra.substring(2, 5)); // Exibe: cde

let texto1 = "Esta é uma string.";

console.log(texto1.slice(5, 7)); // Exibe: é

let frase2 = "O JavaScript é incrível!";

let novaFrase = frase2.replace("JavaScript", "Python");

console.log(novaFrase); // Exibe: O Python é incrível!

let texto2 = "JavaSCRIPT";

console.log(texto2.toLowerCase()); // Exibe: javascript

console.log(texto2.toUpperCase()); // Exibe: JAVASCRIPT

let texto3 = "   Espaços ao redor   ";

console.log(texto3.trim()); // Exibe: Espaços ao redor