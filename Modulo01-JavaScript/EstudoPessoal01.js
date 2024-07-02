
// Duas barras significam um comentário

/* 
Use uma barra com asterisco no início e
no final para comentários de várias linhas 
*/

// Para testar um comando, vá no terminal e digite: "node" + "o nome do arquivo"


console.log(/*Boas Vindas ao*/"Motiro!");

console.log("Bem Vindo ao Motiro");

/* Padrão ECMASript 6: 7 tipos de dados fundamentais -> 1. number / 2. string / 3. boolean / 4. null / 5. undefined / 
6. symbol / 7. object*/

// - 1. NUMBER - números decimais. Ex.: 3; 8; 15; 21,3

const quantidade = 24
const preco = 1.99

const account = quantidade * preco
console.log(account)

// - 2. STRING - caracteres (letra, número, espaço, símbolo, etc). Ex.: 3; A; *; etc

let simples = "'Onde está o Niro?'"
let duplo = '"Onde está o Niro?"'

console.log(duplo)

const num1 = "2"
const num2 = 4

console.log(num1 && num2) /* Errado -> not string */
console.log(num1 - num2) /* Errado -> not string */ 

const num3 = "2"
const num4 = "4"

console.log(num3 + num4) /* Certo -> string */

// - 3. BOOLEAN - dado com apenas dois valores possíveis. Ex.: true/false 

const horaDeAprender = true;
let tardeParaAprender = false;

console.log("Ele está em casa estudando? " + horaDeAprender)

// - 4. NULL - ausência intencional de um valor. 

let y = null;
const k = null;

// - 5. UNDEFINED - variáveis que são declaradas mas não são inicializadas com um valor.

var programar;
console.log(programar);

// - 6. SYMBOL - identificadores exclusivos com instâncias únicas e imutáveis. 

// - 7. OBJECT - são recipientes para os valores 


// |DICA|: Calcular restante use %
console.log(90 % 1)
console.log(9 % 10)
console.log(10 % 3)

