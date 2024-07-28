// const obj = {
//     name: "bryan",
//     videogame: "ps4",
//     age: 23,
//     hobbies: ["play", 20]
// }

// for (let chave in obj) {
//     if (Array.isArray(obj[chave])) {
//         console.log(obj[chave])
//     }
// }



function criarObj(obj, com) {
    let newObj = {};
    for (let chave in obj) {
        newObj[chave] = com(obj[chave]);
    }
    return newObj
}

const object = {sale1: 100, sale2: 52, sale3: 21, sale4: 60};
const comission = (x) => x * 1.05;

const objCreated = criarObj(object, comission);
console.log(objCreated)