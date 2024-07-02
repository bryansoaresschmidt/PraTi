/* Exercício 01: Array (vetor) */

1.
let listaDeCompras = Array();

listaDeCompras[0] = "Shampoo";
listaDeCompras[1] = "Condicionador";
listaDeCompras["x"] = 200; // Não funciona com aspas duplas
listaDeCompras['x'] = 100;

console.log(listaDeCompras)

2.
listaHorti = ["Banana", 0, "Maçã", "Pera"];

console.log(listaHorti[1]);

3.
listaVisitar = Array("Dubai", "Veneza", "Guiné")
listaVisitar.unshift("Melancia");

console.log(listaVisitar);


/* Exercício 02: Arrays multidimensionais (vetor) ou Matriz */

let listaSuper = Array();

listaSuper ['Higiene'] = Array();

listaSuper ['Higiene']['Banheiro'] = Array();

listaSuper ['Higiene']['Banheiro'][0] = "Papel";
listaSuper ['Higiene']['Banheiro'][1] = "Pasta";


listaSuper ['Comida'] = Array();

listaSuper ['Comida'][0] = "Arroz";
listaSuper ['Comida'][1] = "Feijão";
listaSuper ['Comida'].unshift("Ovo"); // Insere elementos no início do array
listaSuper ['Comida'].push("Batata"); // Insera itens no final do array

console.log(listaSuper)


/* Exercício 03: Arrays multidimensionais (vetor) ou Matriz */

let listaProdutos = Array("Bola", "Tênis", "Meia")

let aux2 = listaProdutos.indexOf("ola")
let aux = listaProdutos.indexOf("Tênis")

if (aux === -1) {
    console.log("Elemento não encontrado")
} else {
    console.log("O elemento se encontra na posição: " + aux)
}

/* Exercício 04: Ordenar por ordem alfabética */

let listaCasamento = Array("Vestido", "Véu", "Terno", "Convites");

console.log(listaCasamento.sort())

let listaSorteio = Array(2, 3, 4, 5, 10, 1)

console.log(listaSorteio.sort())

/* Exercício 05: Funções */

let prompt = require('prompt-sync')() // Declaro o prompt

function calcularArea(alt, larg) { // Crio a função
    let result = alt * larg;
    return result 
}

const altura = prompt("Altura: "); // Insiro os valores
const largura = prompt("Largura: ");

const areaTerreno = calcularArea(altura, largura);
console.log("A área do terreno é: " + areaTerreno)

/* Exercício 06: Escopo */

/*Exercício 07: Função Anônima */

let exibirFuncao = function () {
    console.log("olá")
}

/* Exercício 08: Função de Callback*/ // Não entendi direito mas okay

let callbackSucesso = function(sucesso) {
    console.log(sucesso)
}

let callbackErro = function(erro) {
    console.log(erro)
}

function exibirFuncao2(callbackSucesso, callbackErro) {
    if(true) {
        callbackSucesso('Funções de callback em caso de sucesso')
    } else {
        callbackErro('Funções de callback em caso de erro')
    }
}

exibirFuncao2(callbackSucesso, callbackErro)

/* Exercício 09: Arrow Function */ // Mesma coisa que uma function só que um jeito diferente de escrever

let vida = () => {
    console.log("Goiabada");
}