
function* myGenerator() { // (*) -> indica que uma função é generator
    
    yield 5 // yield -> vai retornar o valor que for passado (return) e depois se foi pausado ou não
            // Ex.: {value: 5, done: false}
    yield 10
}

let generator = myGenerator()
// Variável NÃO vai receber o valor passado pra YIELD, vai receber o OBJETO que vai informar o VALOR e se o
// GENERATOR foi finalizado, e pra pegar esse valor temos que usar uma função chamada NEXT
let generatorValue = generator.next()
let generatorValue2 = generator.next()
let generatorValue3 = generator.next()

console.log(generator) // -> Object [Generator] {}
console.log(generatorValue) // -> { value: 5, done: false }
console.log(generatorValue2) // -> { value: 10, done: false }
console.log(generatorValue3)// -> { value: undefined, done: true }