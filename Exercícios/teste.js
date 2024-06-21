const obj = {
    name: "bryan",
    videogame: "ps4",
    age: 23,
    hobbies: ["play", "study", "gym", 20]
}

for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
        console.log(obj[chave])
    }
}