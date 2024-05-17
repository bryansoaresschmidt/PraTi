// Exercício 01: Objetos

/*const pessoa = {
    nome: "Bryan",
    age: 23,
    email: "bryan@gmail.com",
    empregado: true
}
pessoa.nome = "Vitor" // Mudar o valor
delete pessoa.email

console.log(pessoa)
console.log(pessoa.nome) // 1 método de exibição
console.log(pessoa['nome']) // 2 método de exibição

pessoa.falar = function () {
    return `Meu nome é ${this.nome}, tenho ${this.age} anos.`
}
console.log(pessoa.falar())
console.log(pessoa) */


// Exercício 02: Estrutura FOR IN
/*
const pc = {
    monitor: "LG",
    turnOn: true,
    ram: 20,
}

for (let chave in pc) {
    console.log(chave + ": " + pc[chave]) // pc["monitor"] / pc.monitor   
    console.log(chave + ": " + pc.monitor)
}

let numbers = [2, 20, 200];
for(let i in numbers) {
    console.log(i + ": " + numbers[i])
}
*/

// Exercício 03: Estrutura FOR OFF
/*
let numeros = [1, 3, 10]

for (let i of numeros) {
    console.log(i)
}

let nome = "Br yan"

for(let letras of nome) {
    console.log(letras)
}
*/


// For In: Itera sobre todas propriedades enumeráveis de um objeto
// For Of: Itera sobre valores de estruturas iteraveis como: arrays, strings(são objetos), maps, nodelists
// For Each: 


/*Exercício: Faça uma lista de objetos com diferentes tipos de veículos e suas características. 
Use o FOR IN pra listar as propriedades e valores. Depois use o FOR OF para listar apenas os modelos 
dos veículos.*/


let carros = [{
    brand: "Wolkswagen",
    year: 2012,
    color: "white",
    model: "Gol"
},

{
    brand: "Honda",
    year: 2008,
    color: "gray",
    model: "Fit"
}];


for (i in carros) {
    console.log(carros[i]);
}

for (i of carros) {
    console.log(i.brand + " " + i.model + " " + i.year)
}


// Exercício 04: FOR EACH
/*
let cores = ['Azul', 'Preto', 'Branco'];

cores.forEach(function (cor, i) {
    console.log(i + ": " + cor)
})

// ou...

cores.forEach((cor, i) => {console.log(i + ": " + cor)}) // ArrowFunction
*/

/*Exercício: Faça um array de número, calcule a soma total dos números e imprima
cada número multiplicado por 2*/
/*
let numeros = [5, 12, 20, 25];

let soma = 0;
numeros.forEach(function (valor, i) {
    soma += valor;
})
console.log(soma);

numeros.forEach(function (valor, i) {
    mult2 = valor * 2;
    console.log(`${valor} x 2 = ${mult2}`)
})
*/

// Testes:
/*
numeros.forEach(function (item, index, array) {
    console.log(`O index ${index} do array: [${array}] é o item ${item}.`)
})
*/

/*
const users  = [
    {nome: "Bernardo", age: 17},
    {nome: "Júlio", age: 16},
    {nome: "Bia", age: 33},
    {nome: "Bryan", age: 23}
]
users.forEach(function (item) {
    if (item.age >= 18) {
        console.log(`Boa noite ${item.nome}, pode entrar. Seja bem-vindo(a)!`)
    } else {
        console.log(`O(a) ${item.nome}, NÃO pode entrar. Regras da casa.`)
    }})
*/

// Exercício 05: ES5
/*
let nome = "Bryan";
let age = 23;
let sexo = "male";

let objeto = {
    nome,
    age,
    sexo
}

console.log(objeto) // Ele entende (por ser as mesmas palavras) como iguais!
*/

// Exercício 06: Design Pattern (convenção), forma de criação em massa

/*
let bicicletaFactory = function (color, price, aro) {
    return {color, price, aro}
}

const bicicleta1 = bicicletaFactory("blue", 900, 29)
console.log(bicicleta1)
const bicicleta2 = bicicletaFactory("gray", 700, 28)
console.log(bicicleta2)
const bicicleta3 = bicicletaFactory("pink", 950, 29)
console.log(bicicleta2)
*/