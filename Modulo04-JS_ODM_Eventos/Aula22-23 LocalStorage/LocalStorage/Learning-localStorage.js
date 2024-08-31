// 1. Inserir dados
localStorage.setItem("name", "Bryan")

// 2. Resgatar dado
const name = localStorage.getItem("name")
console.log(name)

// 3. Resgatar dado inexistente
const lastName = localStorage.getItem("lastName")
console.log(lastName)
if (lastName === null) {
    console.log("O sobrenome não foi inserido")
}

// 4. Remover dado
localStorage.removeItem("name")

// 5. Remover todos dados
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

console.log(typeof localStorage.getItem("a"))
/* EXTRA: O dado dentro do localStorage sempre será uma STRING */

localStorage.clear()

// 6. Salvar dado como: Objeto
const person1 = {
    name: "Bryan",
    age: 23,
    dating: true,
}

const person = {
    name: "Bryan",
    age: 23,
    dating: true,
}

localStorage.setItem("person1", person1) /* O localStorage não entende o objeto */
localStorage.setItem("person", JSON.stringify(person)) /* Temos que transformar em String para armezenar no localStorage */

// 7. Exibir dado como: objeto
const getPerson = localStorage.getItem("person");
console.log(getPerson);

const objPerson = JSON.parse(getPerson); /* Temos que transformar em Object para exibir no console */
console.log(typeof objPerson)
console.log(objPerson);
