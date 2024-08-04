// Usando YIELD com arrays...

function* gen() {
    yield [1,2,3,4,5]
}

function* gen2() {
    yield* [1,2,3,4,5]
}

const gene = gen()
const gene2 = gen2()

const genObj = gene.next()
const genObj2 = gene2.next()
const genObj3 = gene2.next()
const genObj4 = gene2.next()

console.log(genObj)
console.log(genObj2)
console.log(genObj3)
console.log(genObj4)