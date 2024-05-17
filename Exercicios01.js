/*prompt declarado no início do arquivo para não dar erro nas atividades declarando novamente*/

const prompt = require("prompt-sync")();

/*Atividade 1: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/

let celsius = 24;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/*Atividade 2: Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

let eleitores = 200;
let nulos = 10;
let brancos = 20;
let validos = 160;

let percEleitores = (eleitores / 200) * 100;
console.log(percEleitores + " %");
let percNulos = (nulos / 200) * 100;
console.log(percNulos + " %");
let percBrancos = (brancos / 200) * 100;
console.log(percBrancos + " %");
let percValidos = (validos / 200) * 100;
console.log(percValidos + " %");

/*Atividade 3: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

let num1 = 5;
let resultNum1 = num1 + 25;
console.log(resultNum1);
let num2 = 10;
let resultNum2 = num2 * 3;
console.log(resultNum2);
let num3 = 250;
let resultNum3 = num3 * 0.12;
console.log(resultNum3);
let num4 = num1 + num2 + num3;
console.log(num4);

// 30 = 12% . x

/*Atividade 4: Dúvida nessa atividade*/

let test1 = 6;
let test2 = 5;

let grade = (test1 + test2) / 2;

if (grade >= 6) {
  console.log("'PARABÉNS! Você foi aprovado'");

  /*Atividade 5: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0.*/
} else {
  console.log("'Você foi REPROVADO! Estude mais'");
}

/*Atividade 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

let lado1 = 2;
let lado2 = 6;
let lado3 = 5;
let valor;

if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
  console.log(`Esses valores formam um triângulo!`);
} else {
  console.log("Esses valores não formam um triângulo!");
}

if (
  (lado1 === lado2 && lado1 !== lado3) ||
  (lado1 === lado3 && lado2 !== lado3) ||
  (lado2 === lado3 && lado1 !== lado3)
) {
  console.log("É possível formar um triângulo isósceles.");
} else if (lado1 === lado2 && lado1 === lado3) {
  console.log("É possível formar um triângulo equilátero.");
} else {
  console.log("É possível formar um triângulo escaleno.");
}

/*Atividade 7: As maçãs custam R$ 0,30 se forem compradas menos que uma dúzia (12) e R$ 0,25 
se forem compradas pelo menos um dúzia (12). Escreva um algoritmo que leia o número de maçãs 
compradas, calcule e escreva o total da compra.*/

let maca1 = 0.3;
let maca2 = 0.25;

let comprar = parseInt(prompt("Insira a quantidade de maçãs: "));
if (comprar >= 12) {
  console.log("Total: R$ " + maca1 * comprar);
} else {
  console.log("Total: R$ " + maca2 * comprar);
}

/*Atividade 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

let nume1 = prompt("Insira o primeiro número: ");
let nume2 = prompt("Insira o segundo número: ");

if (nume1 > nume2) {
  console.log(nume2, nume1);
} else if (nume2 > nume1) {
  console.log(nume1, nume2);
} else {
  console.log(nume1, nume2);
}

/*Atividade 9: Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
|===========================================|
| 1= Sul       |       5-6 = Nordeste       |
| 2= Norte     |       7-9 = Sudeste        |
| 3= Leste     |       10-20 = Centro-Oeste |
| 4= Oeste     |       25-50 = Nordeste     |
|-------------------------------------------|
| Fora dos intervalos = produtos importados |
|===========================================|
*/

let codRegiao = parseInt(
  prompt(
    "Descubra de qual região seu produto veio inserindo o código que consta na caixa: "
  )
);

if (codRegiao === 1) {
  console.log("Sul");
} else if (codRegiao === 2) {
  console.log("Norte");
} else if (codRegiao === 3) {
  console.log("Leste");
} else if (codRegiao === 4) {
  console.log("Oeste");
} else if (codRegiao === 5 || codRegiao === 6) {
  console.log("Nordeste");
} else if (codRegiao >= 7 && codRegiao <= 9) {
  console.log("Sudeste");
} else if (codRegiao >= 10 && codRegiao <= 20) {
  console.log("Centro-Oeste");
} else if (codRegiao >= 25 && codRegiao <= 50) {
  console.log("Nordeste");
} else {
  console.log("Fora dos intervalos - Produto importado");
}

/*Exercício 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

let num100 = 1;

for (i = 0; i < 10; i++) {
  console.log(num100);
}

/*Exercício 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/

let request = 1;

do {
  request = parseInt(prompt("Insira um número e descubra se é PAR ou IMPAR: "));
  if (!isNaN(request) && request > 0) {
    if (request % 2 === 0) {
      console.log("É par");
    } else if (request % 2 === 1) {
      console.log("É impar");
    }
  }
} while (!isNaN(request) && request > 0);

                /* ou... */

while (request > 0) {
  request = parseInt(prompt("Insira um número e descubra se é PAR ou IMPAR: "));
  if (!isNaN(request) && request > 0) {
    if (request % 2 === 0) {
      console.log("É par");
    } else {
      console.log("É impar");
    }
  }
}

/*Exercício 12: Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.*/

for (i = 1000; i <= 1999; i++)
  if (i % 11 === 5) {
    console.log(i);
  }

/*Exercício 13: Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
...*/

for (let repetir = 0; repetir < 5; repetir++) {
  let variavel;
  while (isNaN(variavel)) {
    variavel = parseInt(prompt("Digite um número para obter seus múltiplos: "));
    if (!isNaN(variavel)) {
      break;
    }
    console.log("Escolha um número seu tonto.");
  }
  for (let i = 1; i <= variavel; i++)
    console.log(i + " x " + variavel + " = " + i * variavel);
}

/*Exercício 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

let armazenar = 0;
let quantidadeDeNumeros = 0;

while (true) {
  let n = parseFloat(prompt("Insira os dados:"));
  if (isNaN(n)) {
    console.log("Forneça apenas números!");
  } else {
    armazenar += n;
    quantidadeDeNumeros++;

    if (n === 0) {
      console.log(armazenar / quantidadeDeNumeros);
      break;
    }
  }
}

/*Exercício 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.*/

let somaPeso = 0;
let somaAcertos = 0;
let somaMultiplicacao = 0;

while (true) {
  let peso = parseFloat(prompt("Insira o valor da questão: "));
  let acertos = parseFloat(prompt("Insira a quantidade de acertos: "));
  if (isNaN(peso) || isNaN(acertos)) {
    console.log("Forneça apenas números, não seja tonto!");
  } else {
    let multiplicacao = peso * acertos;
    somaMultiplicacao += multiplicacao;
    somaPeso += peso;
    somaAcertos += acertos;

    if (peso === 0) {
      console.log(
        "A média ponderada dos pesos é: " + somaMultiplicacao / somaAcertos
      );
      break;
    }
  }
}

/*Exercício 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. Não entendi nada desse código, mas enfim, tá aí...*/

let numeroAtual = 100;
let numerosMostrados = 0;
let divisor = 2;
let isPrime = true;

while (numerosMostrados < 50) {
  divisor = 2;
  isPrime = true;
  while (numeroAtual > divisor) {
    if (numeroAtual % divisor === 0) {
      isPrime = false;
    }
    divisor++;
  }
  if (isPrime) {
    console.log(numeroAtual);
    numerosMostrados++;
    numeroAtual++
  }}