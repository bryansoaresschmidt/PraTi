const prompt = require('prompt-sync')();



// // Exercício 1: Par ou Ímpar

// let num = parseInt(prompt("Insira um número seu jaguara: "));

// if (num % 2 === 0) {
//     console.log("É par!")
// } else {
//     console.log("É ímpar!")
// }

// const parOuImpar = num % 2 === 0 ? "O número é par" : "O número é impar"
// console.log(parOuImpar)

// entendi poha nenhuma



// // Exercício 2: Qual número é maior?

// let num1 = parseInt(prompt("Insira o primeiro número seu jaguara: "));
// let num2 = parseInt(prompt("Insira o segundo número seu jaguara: "));

// if(num1 > num2) {
//     console.log("O primeiro é maior")
// } else if(num1 === num2) {
//     console.log("Os dois são iguais")
// } else {
//     console.log("O segundo é maior")
// }



// // Exercício 3: Tipos de Triângulos

// let lado1 = parseInt(prompt("Insira o primeiro lado: "))
// let lado2 = parseInt(prompt("Insira o segundo lado: "))
// let lado3 = parseInt(prompt("Insira o terceiro lado: "))

// if(lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado2 !== lado3 || lado2 === lado3 && lado1 !== lado3) {
//     console.log("É possível formar um triângulo isósceles.")
// } else if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
//     console.log("É possível formar um triângulo equilátero.")
// } else {
//     console.log("É possível formar um triângulo escaleno.")
// }



// // Exercício 4: Calculadora Simples

// let number1 = parseInt(prompt("Primeiro número: "));
// let operacao = prompt("Operação desejada: ");
// let number2 = parseInt(prompt("Segundo número: "));

// let resultado;

// if (operacao === "+") {
//     resultado = number1 + number2;
// } else if (operacao === "-") {
//     resultado = number1 - number2;
// } else if (operacao === "*") {
//     resultado = number1 * number2;
// } else if (operacao === "/") {
//     if (number2 !== 0) {
//     resultado = number1 / number2;
//     } else {
//     console.log("Erro: Nenhum número divide por zero.");
//     resultado = undefined;
//     }
// } else {
//     console.log("Operação inválida, tente novamente.")
// }

// if (resultado !== undefined) {
//     console.log("Total: " + resultado)
// }

// // Exercício 5: Switch Case

// let dia = parseInt(prompt("Insira o dia da semana: "))

// let nomeDia;

// switch(dia) {
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-feira";
//         break;
//     case 3:
//         nomeDia = "Terça-feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-feira";
//         break;
//     case 5:
//         nomeDia = "Quinta-feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-feira";
//         break;
//     case 7:
//         nomeDia = "Sábado";
//         break;
//     default:
//         nomeDia = "Opção inválida"
//         console.log("Digite um número de 1 a 7")
//         break;

// }
// console.log("O dia é: " + nomeDia);

// // Exercício 5 parte b: Criar calculadora com Switch

// // Exercício 5 parte c: Dias no mês

// let mes = parseInt(prompt("Insira o número (1 a 12): "))

// let diasNoMes;

// switch(mes) {
//     case 1:  case 3: case 5: case 7: case 8: case 10: case 12:
//         diasNoMes = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         diasNoMes = 30;
//         break;
//     case 2:
//         diasNoMes = 28;
//         break;
//     default:
//         diasNoMes = -1;
//         break;
// }

// if (diasNoMes !== -1) {
//     console.log("O mês " + mes + " tem " + diasNoMes + " dias.")
// } else {
//     console.log("Mês inválido.")
// }

// // Exercício 6: Estrutura de repetição FOR (Tabuada)

// for (let contagem = 0; contagem <= 5; contagem+=2){
//     console.log(contagem)
// }

// let tabuadoDoNumero = 5
            /*variável*/             /*condição*/        /*incremento ou decremento*/
// for (let contadorInicial = 0; contadorInicial <= 2; contadorInicial++)  {
//     console.log(`${multiplicando} * ${contadorInicial} =`, multiplicando * contadorInicial);
// }

// soma = 0
// for (let i = 0; i <= 5; i+=2){
//     soma += i;
//     console.log(soma) // Soma de todos os números
// }

// soma2 = 0;
// for (let i = 1; i <= 5; i++){
//     soma2 += i;
// }
// console.log(soma2)

// // Exercício 7: Estrutura de repetição WHILE (Imprimir múltiplos de 5 até 100)

// let i = 5;
// while (i < 10) {
    //     console.log(i);
    //     i+=5;
    // }
    
    // let i = 0;
    // let soma = 0;
    // while (i <= 10) {
        //     i++;
        //     soma += i; // ou seja soma = soma + i;
        // }
        // console.log(soma);
        
    // // Exercício 8 (A): Estrutura de repetição DO WHILE (Solicitar senha)

    // do {
    //     senha = prompt("Senha: ");

    //    } while (senha !== "9263"); 
    //     console.log("Senha Incorreta");

    // // Exercício 8 (B): Adivinhar número randômico

    const numeroRandom = parseInt(Math.random() * 10 + 1);
    // console.log(numeroRandom)

    let number;
    do {
        number = parseInt(prompt("Adivinhe um número entre 1 e 10: "));
        if (isNaN(number < numeroRandom)) {
            console.log("Insira um número válido")
        } else if (number < numeroRandom) {
            console.log("O número é maior");
        } else if (number > numeroRandom) {
            console.log("O número é menor");
        }
    } while (number !== numeroRandom)
        console.log("Parabéns você acertou")
