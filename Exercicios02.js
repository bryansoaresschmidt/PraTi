// Lista de Exercícios 02:
const prompt = require("prompt-sync")();

/* Instruções: execute node Exercicios02.js no terminal e mude o if (false) para if (true) para rodar os códigos
individualmente. */

/*Exercício 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

if (false) {
  let quantCigarettesPerDay = parseInt(
    prompt("How many cigarettes do you smoke per day? ")
  );
  let yearsSmoking = parseInt(prompt("How many years have you been smoking? "));

  const quantCigarettesAllLife = quantCigarettesPerDay * 365 * yearsSmoking;
  const daysLost = quantCigarettesAllLife / 1440;

  console.log(
    `You've lost ${daysLost.toFixed(1)} days of your life by smoking.`
  );
}

/*Exercício 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

if (false) {
  let speed = parseInt(prompt("Insira a velocidade: "));
  if (speed > 80) {
    finePerKm = 5;
    fine = (speed - 80) * finePerKm;
    console.log(`Você foi multado em ${fine} reais.`);
  } else {
    console.log(`Velocidade dentro do limite.`);
  }
}

/*Exercício 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

if (false) {
  let km = parseInt(prompt("Qual a distância da viajem em km? "));
  if (km <= 200) {
    price = 0.5;
  } else {
    price = 0.45;
  }
  cost = price * km;
  console.log(`A viajem custará ${cost} reais`);
}

/*Exercício 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

if (false) {
  let reta1 = prompt("Informe o comprimento da primeira reta: ");
  let reta2 = prompt("Informe o comprimento da segunda reta: ");
  let reta3 = prompt("Informe o comprimento da terceira reta: ");

  if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
    console.log("É possível formar um triângulo.");
    let reta3 = prompt("Quer saber qual triângulo? ");
    console.log("Vai ficar querendo. HAHA");
  } else {
    console.log("Não é possível formar um triângulo.");
  }
}

/*Exercício 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

if (false) {
  let array = ["pedra", "papel", "tesoura"];
  i = Math.floor(Math.random() * 3);

  console.log("Vamos jogar pedra, papel e tesoura!");
  let choose = prompt("Peeedra, papel, teesooouraa: ").toLowerCase();

  console.log(`Você escolheu ${choose}.`);
  console.log(`O computador escolheu ${array[i]}.`);

  if (choose === array[i]) {
    console.log("Empate, ninguém ganhou. Vamos de novo!");
  } else if (
    (choose === "pedra" && array[i] === "tesoura") ||
    (choose === "tesoura" && array[i] === "papel") ||
    (choose === "papel" && array[i] === "pedra")
  ) {
    console.log("Parabéns, você ganhou!");
  } else {
    console.log("O computador ganhou!");
  }
}

/*Exercício 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/
if (false) {
  let guess;
  let number = Math.ceil(Math.random() * 5);

  while (true) {
    guess = parseInt(prompt("Adivinhe um número de 1 a 5: "));
    if (number === guess) {
      console.log("Você acertou!");
      break;
    } else {
      console.log("Você errou!");
    }
  }
}

/*Exercício 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

if (true) {
  while (true) {
    let car = prompt("Você quer um carro de luxo ou popular? ").toLowerCase();

    if (car === "popular" || car === "luxo") {
      let days = parseInt(prompt("Quantos dias? "));
      let kms = parseInt(prompt("Quantos quilometros rodados? "));
      let cost;

      if (car === "popular") {

        if (kms <= 100) {
          cost = 90 * days + 0.2 * kms;
        } else {
          cost = 90 * days + 0.2 * 100 + 0.1 * (kms - 100);
        }
        
      } else {

        if (kms <= 200) {
            cost = 150 * days + 0.3 * kms;
          } else {
            cost = 150 * days + 0.3 * 200 + 0.25 * (kms - 200);
          }

      } console.log(`O valor do aluguel será R$ ${cost.toFixed(2)}`)
      break;

    } else {
      console.log("Opção inválida.");
    } 
  }
}
