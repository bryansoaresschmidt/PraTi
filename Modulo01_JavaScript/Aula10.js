/* Exercício 01: Use o FOR IN para Iterar sobre as propriedades das notas. Calcule a média da turma.
- Caso a média esteja acima de 6 indique a turma está acima da média de aprovação.*/

const professor = {
    nome: "Tony Stark",
    materia: "matemática",
    notas: {
        Bernardo: 6.6,
        Sophia: 8.2,
        Gustavo: 5.5
    } 
}

// Resp.:

let somaNotas = 0;
let numeroAlunos = 0;

for(let i in professor.notas) {
    somaNotas += professor.notas[i]
    numeroAlunos++ 
}

const media = somaNotas / numeroAlunos;
const passed = somaNotas / numeroAlunos > 6;

if (passed) {
    console.log(`A média da turma é: ${media} e está acima da taxa de aprovação.`);
} else {
    console.log(`A média da turma é: ${media} e está abaixo da taxa de aprovação.`); 
}
/* podia ter usado operador ternário para deixar o código mais enxuto*/


const biblioteca = [
    {titulo: "12 regras para a vida", autor: "Jordan Peterson", ano: 1925},
    {titulo: "O Hobbit", autor: "J. R. R. Tolkien", ano: 1937},
    {titulo: "Senhora do jogo", autor: "Sidney Sheldon", ano: 2009},
    {titulo: "Zé Carioca", autor: "Disney", ano: 1999},
    {titulo: "Nação dopamina", autor: "Anna Lembke", ano: 2021}
]


/* Exercício 02: Use o FOR OF para iterar sobre o array biblioteca.
- Para cada livro, verifique se foi publicado antes de 2009.
- Imprimir o título e o ano dos livros que atendem essa condição.*/

for (let i of biblioteca) {
    if (i.ano < 2009) {
        console.log(`O livro "${i.titulo}" do autor ${i.autor} foi publicado antes de 2009`)
    }
}


/* Exercício 03: Use o FOR EACH para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
- Para cada filme no array verifique se o gênero já existe no objeto contagem.
- Se existir incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1.
- Após o loop imprima cada gênero e o número dos filmes correspondentes. */

const filmes = [
    { titulo: "Tropa de Elite", genero: "ação"},
    { titulo: "Capitão Fantástico", genero: "drama"},
    { titulo: "O Poderoso Chefão", genero: "crime"},
    { titulo: "O Clube da Luta", genero: "drama"},
    { titulo: "Oppenheimer", genero: "biografia"},
    { titulo: "High School Musical", genero: "musical"},
    { titulo: "Barbie", genero: "live-action"},
]

let contagemGenero = {}

filmes.forEach(i => {
    if (contagemGenero[i.genero]) {
    contagemGenero[i.genero]++;
    } else {
        contagemGenero[i.genero] = 1;
    }
});

for (i in contagemGenero) {
    console.log(`Existem ${contagemGenero[i]} filme(s) do gênero ${i}.`)
}


/* Exercício 04: PESQUISA BINÁRIA:*/ 
/*Desenvolva um algoritmo que seja capaz de receber uma lista, e um valor correto.
Execute uma pesquisa binária para encontrar o valor certo.*/


const binarySearch = (array, item) => {
    let low = 0;                        /* Saber quantos números...*/
    let high = array.length - 1;                              /*... têm na array*/
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);      // Calculo a metade do array, quantos números têm
        let guess = array[mid]                    // Defino que meu 'chute' é o index da metade do array
        
        if (guess === item) {                     // Se meu chute for igual ao item que tô procurando...
            return mid;                        // Retorno o meio!
        } else if (guess > item) {            // Se chute for maior que o item...
            high = mid - 1;           // Atribuo o número maior igual ao número do meio -1!
        } else if (guess < item) {
            low = mid + 1;
        }
    } return null
}

let listArray = [0,3,4,6,9,10];
console.log(binarySearch(listArray, 6))

// Exercício 05: SPREAD and REST
    // SPREAD

let tituloArtigo = "Movimento Ágil"

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

// Ex 02.:

let timesGrandes = ["Grêmio", "Caxias", "Juventude"];
let timesGrandes2 = ["São José", "Novo Hamburgo"];

let timesGrandesBrasil = ["Flamengo", "Palmeiras", ...timesGrandes, timesGrandes2]

console.log(timesGrandesBrasil)

// Ex 03.:

let pessoa = {nome: "Augusto", idade: 23};

let dadosCompletos = {numero: 995270401, ...pessoa};

console.log(dadosCompletos);

// Exercício 05: SPREAD and REST
    // REST

function soma (...param) {
    let result = 0;

    console.log(param)

    param.forEach(i => result += i)

    return result
}

console.log(soma([1,2,3,4,5]))

// ou...

function multiplying (m, ...p) {
    console.log(m);
    console.log(p);

    let resultado = 0;

    p.forEach(element => resultado += m * element);

    return resultado;

}

console.log(multiplying(5,3,6,7,8,9));