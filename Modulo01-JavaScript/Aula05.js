// Aula 04

/*Atalhos:
Ctrl +/-     ->  Zoom In/Out
Ctrl ;     ->  Comentários
Shift alt (seta pra cima ou pra baixo)     ->  Copiar linha
Alt (seta pra cima ou pra baixo)     ->  Arrasta linha
Ctrl D     ->  Acha as mesmas palavras que estão selecionadas
Shift Del     ->    Deleta toda a linha
*/

//Exercício 1: Apresente a seguinte mensagem: "Meu nome é (Bryan) e estou na aula do professor Jaques".

const name1 = "Bryan";
const name2 = "Jaques";
const messageBegin = "Meu nome é ";
const messageEnd = " e estou na aula do professor ";
console.log(messageBegin + name1 + messageEnd + name2 + ".");
console.log(messageBegin + name2 + messageEnd + name1 + ".");

// let; var; const;

// nome = Bryan // NÃO RECOMENDADO;
// let name = Bryan;
// var name = Bryan; Forma inadequada e antiga;

// const name = Bryan;

let test;
console.log(test); // Erros

let meuNull = null;
console.log(meuNull); // Preencher um formulário sem nada

const meuNumber = 10.1;
console.log(typeof(meuNumber)); // "typeof" Verificar qual é o tipo da minha variável
let minhaString = "Sou Desenvolvedor";
console.log(typeof(minhaString)); // "typeof" Verificar qual é o tipo da minha variável

let num1 = "5.5";
let num2 = 10;
// let num1Teste = parseInt(num1);    parseInt = inteiro / parseFloat = decimais / Number = number
// let num1Teste = parseFloat(num1);
let num1Teste = Number(num1);
console.log(num1 + num2);
console.log(num1Teste + num2);

let contador = 1;
contador = contador + 1;
contador++
console.log(contador++);
console.log(++contador);

let contador2 = 0;
const passo = 5;
// contador2 += passo;
contador2 -= passo;
// contador2 *= passo;
// contador2 /= passo;
console.log(contador2);

console.log(10 == "10");
console.log(10 === "10");

const user = "Bryan";
const password = "123";
const autenticacao = (user === "Bryan") && (password === "123");
console.log(autenticacao)

const nota = 105

// Estrutura If e Else
if (nota >= 60 && nota <= 100) {
    console.log("Aprovado")

} else if (nota < 60 && nota >= 50) {
    console.log("Recuperação")

} else if (nota > 100) {
    console.log("Algo está errado")

} else {
    console.log("Reprovado")
}

// Operadores Ternários
const result = (5454 > 4565) ? "Aprovado" : "Reprovado";
console.log(result)

const result2 = (5454 > 4565) ? false : "true";
console.log(result2)

// Prompt 

const prompt = require('prompt-sync')();

let teste = prompt("Digite seu nome: ")
console.log(teste)
