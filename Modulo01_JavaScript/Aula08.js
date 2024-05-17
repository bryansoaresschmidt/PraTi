/* Exercício 01: Somar elementos de uma array */

function somarElementos(vetor) {
  let soma = 0;
  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}

// 1. Forma
const elementos = [0, 1, 2, 3, 4, 5];
console.log("A soma dos elementos é: " + somarElementos(elementos));
// 2. Forma

// Exercício 02: Encontrar o maior número de um array

function maiorNumero(array) {
  let numeroMaior = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > numeroMaior) {
      numeroMaior = array[i];
    }
  }
  return numeroMaior;
}
console.log("O maior número é: " + maiorNumero([1, 0, 5, -7, 2]));

// Exercício 03: Reverter um array ao contrário

function reverterArray(vetor) {
  let reverter = [];
  for (let i = vetor.length - 1; i >= 0; i--) {
    reverter.push(vetor[i]);
  }
  return reverter;
}

console.log(reverterArray([0, 1, 2, 3, 4]));

// Exercício 04: Somar todos número de uma matriz

function somarMatriz(array) {
  let soma = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      soma += array[i][j];
    }
  }
  return soma;
}

console.log(
  "A soma das matrizes são: " + somarMatriz([[1, 2, 3], [4, 5, 6]]));

// Exercício 05: Encontrar o maior número em uma matriz

let matriz = [
    [40, 10, 20],
    [50, 24, 30],
    [12, 40, 51]
];

function maiorArrayMatriz(array) {
  let arrayMaior = array[0][0];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] > arrayMaior) {
        arrayMaior = array[i][j];
      }
    }
  }
  return arrayMaior;
}
console.log("O maior é: " + maiorArrayMatriz([[0, 2, 3, 4, 8, 10], [5, 3, 4]])); // 1ª forma
console.log("O maior é: " + maiorArrayMatriz(matriz)); // 2ª forma


// Funções avançadas 01: String

/* String é um valor primitivo, porém ao ser interpretado o JS o converte em OBJETOS, 
possuindo PROPRIEDADES e MÉTODOS */

console.log("Bryan Schmidt".length); // Diz quantos caracteres tem
console.log("Bryan Schmidt".charAt(0)); // Acha o caracter do index (i)
console.log("Gabriela".indexOf('a')); // Acha o valor do primeiro index

const nome = "Ben 10";
console.log(nome.replace("Ben 10", "Mutante Rex")); // Troca o nome quando encontra a estrutura

console.log(nome.substr('2', '4')); // Sublinhado significa desuso

console.log(nome.toLocaleUpperCase());
console.log(nome.toLocaleLowerCase());

const nome2 = "  The Flash  ";
console.log(nome2.trim());


// Funções avançadas 02: Matemática

console.log(Math.ceil(10.1));
console.log(Math.floor(10.1));
console.log(Math.round(10.49));
console.log(Math.random());


// Funções avançadas 03: Datas

const data =  new Date();
console.log("Data: " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());

console.log(data.toString()); // Mais informações
console.log(data.toLocaleDateString('pt-BR')); // Deixar a data do nosso jeito
data.setDate(data.getDate() + 720); // Data mais tantos dias
console.log(data.toString());


// Exercício 06: Exibir quantos milissegudos existem entre duas datas3

let data1 = new Date();
let data2 = new Date() ;
data2 = data2 + 3
let milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime()) // Math.abs retorna o valor absoluto de um número 
