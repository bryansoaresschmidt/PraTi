// Lista de Exercícios 02:
const prompt = require("prompt-sync")();

/* Instruções: execute node Exercicios02.js no terminal e mude o if (false) para if (true) para rodar os códigos
individualmente. */

/*Exercício 01. Escreva um programa para calcular a redução do tempo de vida de um fumante.
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

/*Exercício 02. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
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

/*Exercício 03. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
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

/*Exercício 04. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
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

/*Exercício 05. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/
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

/*Exercício 06. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
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

/*Exercício 07. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
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
if (false) {
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
      }
      console.log(`O valor do aluguel será R$ ${cost.toFixed(2)}`);
      break;
    } else {
      console.log("Opção inválida.");
    }
  }
}

/*Exercício 08. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/
if (false) {
  let hours = parseInt(prompt("Insira as horas de atividades no mês: "));
  let point = 2;
  let point2 = 5;
  let point3 = 10;
  let pointEarned = 0.05;

  if (hours <= 10) {
    cashEarned = point * pointEarned * hours;
    totalPontos = point * hours;
  } else if (hours <= 20) {
    cashEarned = 10 * point * pointEarned + (hours - 10) * point2 * pointEarned;
    totalPontos = point * hours + point2 * (hours - 10);
  } else {
    cashEarned =
      10 * point * pointEarned +
      10 * point2 * pointEarned +
      (hours - 20) * point3 * pointEarned;
    totalPontos = point * hours + point2 * (hours - 10) + point3 * (hours - 20);
  }

  console.log(
    `Você fez ${totalPontos} pontos e ganhou R$ ${cashEarned.toFixed(2)}`
  );
}

/*Exercício 09. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/
if (false) {
  const employeesData = [];

  let summSalaryMan = 0;
  let summSalaryWoman = 0;
  let insertData;

  do {
    let userName = prompt("Insira o nome do usuário: ");
    let userSalary = parseInt(prompt("Insira o salário do usuário: "));
    while (isNaN(userSalary)) {
      userSalary = parseInt(prompt("Salário inválido, insira um número: "));
    }
    let userSex = prompt("O usuário é homem ou mulher? ").toLowerCase();
    employeesData.push({ name: userName, salary: userSalary, sex: userSex });

    insertData = prompt(
      "Você quer inserir mais dados dos empregados? "
    ).toLowerCase();
  } while (insertData === "sim" || insertData === "s" || insertData === "ss");

  for (let i = 0; i < employeesData.length; i++) {
    if (employeesData[i].sex === "homem") {
      summSalaryMan += employeesData[i].salary;
    } else if (employeesData[i].sex === "mulher") {
      summSalaryWoman += employeesData[i].salary;
    }
  }
  console.log(`O salário total dos homens é R$ ${summSalaryMan.toFixed(
    2
  )} e o das mulheres é 
  R$ ${summSalaryWoman.toFixed(2)}`);
}

/*Exercício 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/
if (false) {
  let insertNumbers;
  let numbers = [];
  console.log(
    "Insira números para calcular a soma dos valores, descobrir o menor entre eles, a média e a quantidade dos números pares: "
  );
  console.log('Digite "ok" para finalizar e receber os cálculos!');

  do {
    insertNumbers = prompt("Insira o número: ");

    if (insertNumbers.toLowerCase() === "ok") {
      break;
    } else if (
      (insertNumbers.toLowerCase !== "ok" && isNaN(insertNumbers)) ||
      insertNumbers.trim() === ""
    ) {
      insertNumbers = prompt(
        "Caracter inválido, insira um NÚMERO ou OK para finalizar: "
      );
    } else {
      numbers.push(parseFloat(insertNumbers));
    }
  } while (!isNaN(insertNumbers));

  let soma = 0;
  let minorNumber = "";
  let media = "";
  let allEvens = [];

  for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
    if (numbers[i] % 2 === 0) {
      allEvens.push(numbers[i]);
    }
  }
  minorNumber = Math.min(...numbers);
  media = soma / numbers.length;

  console.log(soma);
  console.log(minorNumber);
  console.log(media);
  console.log(allEvens.length);
}

/*Exercício 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/
if (false) {
  let promptNumbers = Number(prompt("Insira o número que começa sua PA: "));
  let promptRatio = Number(prompt("Insira a razão da PA: "));

  let numbers = [promptNumbers];
  sumNumbers = 0;

  for (let i = 0; i < 9; i++) {
    numbers.push(numbers[numbers.length - 1] + promptRatio);
    sumNumbers += numbers[i];
  }

  let numbersString;
  if (numbers.length === 0) {
    numbersString === "";
  } else if (numbers.length === 1) {
    numbersString === numbers[0];
  } else if (numbers.length === 2) {
    numbersString === numbers.join(" e ");
  } else {
    const allLessLastNumber = numbers.slice(0, -1);
    const lastNumber = numbers[numbers.length - 1];
    numbersString = `Os números da PA são: ${allLessLastNumber.join(
      ", "
    )} e ${lastNumber}`;
  }

  console.log(`A soma dos números da PA é: ${sumNumbers}`);
  console.log(numbersString);
}

/*Exercício 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/
if (false) {
  let array = [1, 1];
  for (let i = 0; i < 8; i++) {
    let num = array[array.length - 2] + array[array.length - 1];
    array.push(num);
  }
  console.log(`Os 10 primeiros números da sequência são: ${array.join(", ")}`);
}

/*Exercício 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor(array) numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/
if (false) {
  let vetor = [1, 1];
  for (let i = 0; i < 13; i++) {
    let num = vetor[vetor.length - 2] + vetor[vetor.length - 1];
    vetor.push(num);
  }
  console.log(`Os 15 primeiros números da sequência são: ${vetor.join(", ")}`);
}

/*Exercício 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/
if (false) {
  let vetorNames = [];
  for (let i = 0; i < 7; i++) {
    let promptNames = prompt("Informe os nomes separadamente: ");
    vetorNames.unshift(promptNames);
  }
  console.log(
    `Os nomes informados na ordem inversa são: ${vetorNames.join(", ")}.`
  );
}

/*Exercício 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/
if (false) {
  console.log(
    "Digite 10 números e descubra quais são pares e em que posição estão."
  );
  let oddFound = false;
  let vetorNumber = [];
  let positions = [];

  for (let i = 0; i < 10; i++) {
    let promptNumber = parseInt(prompt(`Posição ${[i]}: `));
    if (promptNumber % 2 === 0) {
      vetorNumber.push(promptNumber);
      positions.push(i);
    }
  }
  console.log(
    `Os números pares são ${vetorNumber.join(
      ", "
    )} e os index estão nas posições ${positions.join(", ")} respectivamente.`
  );
}

/*16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/
if (false) {
  let vetor = [];

  for (let i = 0; i < 20; i++) {
    let randonNumber = Math.floor(Math.random() * 100);
    vetor.push(randonNumber);
  }

  vetor.sort(ordenarVetor);
  function ordenarVetor(a, b) {
    /*Ordenar vetores usando função, ele faz isso comparando o número anterio com o próximo número*/
    return a - b;
  }

  console.log(vetor);
}

/*Exercício 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/
if (false) {
  let vetorName = [];
  let vetorAge = [];

  for (let i = 0; i < 3; i++) {
    let promptName = prompt("Insira o nome da pessoa:");
    let promptAge = parseInt(prompt("Insira a idade da pessoa:"));
    while (promptName === "" || isNaN(promptAge)) {
      console.log("Dados inválidos, insira o dado correto.");
      promptName = prompt("Insira o nome da pessoa:");
      promptAge = parseInt(prompt("Insira a idade da pessoa:"));
    }
    vetorName.push(promptName);
    vetorAge.push(promptAge);
  }

  for (let i = 0; i < vetorName.length; i++) {
    if (vetorAge[i] < 18) {
      console.log(`${vetorName[i]} tem ${vetorAge[i]} anos.`);
    }
  }
}

/*Exercício 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/
if (false) {
  let promptName = prompt("Insira o nome: ");
  let promptCharge = prompt("Insira o cargo: ");
  let promptSalary = parseFloat(prompt("Insira o salário: "));

  while (promptName === "" || promptCharge === "" || isNaN(promptSalary)) {
    console.log("Dado incorreto, insira novamente.");
    promptName = prompt("Insira o nome: ");
    promptCharge = prompt("Insira o cargo: ");
    promptSalary = parseFloat(prompt("Insira o salário: "));
  }

  let registerWorkers = {
    name: promptName,
    charge: promptCharge,
    salary: promptSalary,
  };

  console.log(`O(a) colaborador(a) ${registerWorkers.name} exerce a função de ${
    registerWorkers.charge
  } e recebe um
  total de R$ ${registerWorkers.salary.toFixed(2)}.`);
}

/*Exercício 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/
if (false) {
  let vetorHour = [];
  let vetorMin = [];
  let vetorSec = [];

  console.log("Forneça 5 horários.");

  for (let i = 1; i <= 5; i++) {
    let promptHour = parseInt(prompt(`Forneça as horas: `));
    while (promptHour < 0 || isNaN(promptHour) || promptHour > 23) {
      promptHour = parseInt(prompt("Forneça horas válidas: "));
    }
    let promptMin = parseInt(prompt(`Forneça os minutos: `));
    while (promptMin < 0 || isNaN(promptMin) || promptMin > 59) {
      promptMin = parseInt(prompt("Forneça minutos válidos: "));
    }
    let promptSec = parseInt(prompt(`Forneça as segundos: `));
    while (promptSec < 0 || isNaN(promptSec) || promptSec > 59) {
      promptSec = parseInt(prompt("Forneça segundos válidos: "));
    }
    vetorHour.push(promptHour);
    vetorMin.push(promptMin);
    vetorSec.push(promptSec);
  }
  for (let i = 0; i < vetorHour.length; i++) {
    console.log(
      `O ${i + 1}º horário é ${vetorHour[i]
        .toString()
        .padStart(2, "0")}:${vetorMin[i]
        .toString()
        .padStart(2, "0")}:${vetorSec[i].toString().padStart(2, "0")}`
    );
  }
}

/*Exercício 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseadano seguinte: 
existe uma tabela com os dados de cada funcionalidade: matrícula, nome esalário bruto. Escreva um 
programa que leia e processe a tabela e emita (escreva natela), cada funcionário, seu contracheque, 
cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).*/
if (false) {
  let promptYesNot;
  let deductionInss = 12;
  let vetorWorkers = [];

  do {
    let promptId = parseInt(prompt(`Digite o ID: `));
    while (isNaN(promptId) || promptId < 0) {
      promptId = parseInt(prompt(`Digite o ID: `));
    }
    let promptName = prompt(`Digite o nome do colaborador: `);
    let promptSalary = parseFloat(prompt(`Digite o salário bruto: `));
    while (isNaN(promptSalary)) {
      promptSalary = parseFloat(prompt(`Digite o salário bruto: `));
    }

    workers = {
      id: promptId,
      name: promptName,
      salario: promptSalary,
      inss: deductionInss,
      salarioLiquido: promptSalary - promptSalary * (deductionInss / 100),
    };

    vetorWorkers.push(workers);

    promptYesNot = prompt(
      `Deseja inserir dados de funcionários? `
    ).toLowerCase();
  } while (
    promptYesNot === "sim" ||
    promptYesNot === "ss" ||
    promptYesNot === "s"
  );

  for (let i = 0; i < vetorWorkers.length; i++) {
    console.log(`===========================`);
    console.log(`Matrícula: ${vetorWorkers[i].id.toString().padStart(3, "0")}`);
    console.log(`Nome: ${vetorWorkers[i].name}`);
    console.log(`Salário Bruto: R$ ${vetorWorkers[i].salario.toFixed(2)}`);
    console.log(`Dedução INSS: ${vetorWorkers[i].inss}%`);
    console.log(
      `Salário Líquido: R$ ${vetorWorkers[i].salarioLiquido.toFixed(2)}`
    );
  }
}

/*Exercício 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/
if (false) {
  console.log("Descubra seu peso ideal informando sua altura e sexo.");

  let sex = prompt(`Você é homem ou mulher? `).toLowerCase();
  while (sex !== "homem" && sex !== "mulher") {
    sex = prompt(`Sexo inválido, insira homem ou mulher: `).toLowerCase();
  }

  let alt = parseFloat(prompt(`Qual a sua altura? `));
  while (isNaN(alt) || alt <= 0) {
    alt = parseFloat(prompt(`Altura inválida, insira uma altura válida: `));
  }

  const calcImc = (alt, sex) => {
    if (sex === "homem") {
      return `O seu peso ideal é ${(72.7 * alt - 58).toFixed(2)}kg`;
    } else if (sex === "mulher") {
      return `O seu peso ideal é ${(62.1 * alt - 44.7).toFixed(2)}kg`;
    } else {
      return "Opção inválida";
    }
  };

  console.log(calcImc(alt, sex));
}

/*Exercício 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/
if (false) {
  let vetorPeople = [];
  let promptYesNot;
  let sumSalary = 0;
  let sumChildren = 0;
  let greaterSalary = 0;
  let quantSalaryLess = 0;

  console.log(
    "Esse é um programa 10% confiável. Pode inserir suas informações sem medo :v"
  );

  do {
    let promptSalary = parseFloat(prompt("Insira o salário: "));
    while (isNaN(promptSalary) || promptSalary < 0) {
      promptSalary = parseFloat(
        prompt("Informação inválida, digite novamente: ")
      );
    }

    let promptChildren = parseInt(prompt("Insira o número de filhos: "));
    while (isNaN(promptChildren) || promptChildren < 0) {
      promptChildren = parseInt(
        prompt("Informação inválida, digite novamente: ")
      );
    }

    person = {
      salary: promptSalary,
      children: promptChildren,
    };

    vetorPeople.push(person);

    promptYesNot = prompt("Deseja inserir mais famílias? ").toLowerCase();
  } while (
    promptYesNot === "sim" ||
    promptYesNot === "ss" ||
    promptYesNot === "s"
  );

  for (let i = 0; i < vetorPeople.length; i++) {
    sumSalary += vetorPeople[i].salary;
    sumChildren += vetorPeople[i].children;
    if (vetorPeople[i].salary > greaterSalary) {
      greaterSalary = vetorPeople[i].salary;
    }
    if (vetorPeople[i].salary <= 350) {
      quantSalaryLess++;
    }
  }
  mediaSalary = sumSalary / vetorPeople.length;
  mediaChildren = sumChildren / vetorPeople.length;
  percentage = (quantSalaryLess / vetorPeople.length) * 100;

  console.log(
    `A média dos salários informados é R$ ${mediaSalary.toFixed(2)}.`
  );
  console.log(`A média de filhos por pessoa é ${mediaChildren}.`);
  console.log(`O maior salário é R$ ${greaterSalary.toFixed(2)}.`);
  console.log(
    `A porcentagem de salários abaixo de R$ 350,00 é ${percentage.toFixed(2)}%.`
  );
}

/*Exercício 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/
if (false) {
  let vetorLinhaColuna = [];

  for (let i = 0; i < 7; i++) {
    vetorLinhaColuna[i] = [];
    for (let j = 0; j < 7; j++) {
      vetorLinhaColuna[i][j] = [];
      if (i === j) {
        vetorLinhaColuna[i][j] = 1;
      } else {
        vetorLinhaColuna[i][j] = 0;
      }
    }
  }

  for (let i of vetorLinhaColuna) {
    console.log(...i);
  }
}

/*Exercício 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/
if (false) {
  let vetorMatriz = [];
  let vetorC = [];

  for (let i = 0; i < 6; i++) {
    vetorMatriz[i] = []; /* [0],[1],[2]...[6] */
    vetorC[i] = [];
    for (let j = 0; j < 8; j++) {
      vetorMatriz[i][j] = [];
      /* vetorMatriz = [ [0[0, 1, 2,...8]]; [1[0, 1, 2,...8];... [8[0, 1, 2,...8]] ] */
      vetorMatriz[i][j] = Math.floor(Math.random() * (10 - -10 + 1) + -10);
      if (vetorMatriz[i][j] < 0) {
        vetorC[i].push(vetorMatriz[i][j]);
      }
    }
  }

  for (let k of vetorMatriz) {
    console.log(...k);
  }

  for (let l = 0; l < 6; l++) {
    console.log(`A linha ${l} tem ${vetorC[l].length} números negativos.`);
  }
}

/*Exercício 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/
if (false) {
  let matrizReais = [];
  let vetor = [];

  for (let i = 0; i < 15; i++) {
    matrizReais[i] = [];
    vetor[i] = 0;
    for (let j = 0; j < 20; j++) {
      matrizReais[i][j] = parseInt(
        prompt(`Digite o ${j + 1}º número da linha ${i + 1}: `)
      );
      vetor[i] += matrizReais[i][j];
    }
  }

  for (let i = 0; i < vetor.length; i++) {
    console.log(`A linha ${[i + 1]} somada tem ${vetor[i]}`);
  }
}
/*Exercício 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]*/
if (false) {
  let matrizA = [];
  let matrizB = [];
  let matrizP = [];

  for (let i = 0; i < 3; i++) {
    matrizA[i] = [];
    matrizB[i] = [];
    matrizP[i] = [];
    for (let j = 0; j < 5; j++) {
      matrizA[i][j] = Math.floor(Math.random() * 10);
      matrizB[i][j] = Math.floor(Math.random() * 10);
      matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
    }
  }

  console.log(...matrizA);
  console.log(...matrizB);
  console.log(...matrizP);
}

/*Exercício 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/
if (false) {
  let matrizM = [];
  let vetor36 = [];

  for (let i = 0; i < 6; i++) {
    matrizM[i] = [];
    vetor36[i] = [];
    for (let j = 0; j < 6; j++) {
      matrizM[i][j] = Number(prompt("Insira o valor: "));
      let valorMultiplicado = Number(
        prompt("Insira o valor a ser multiplicado: ")
      );
      vetor36[i][j] = matrizM[i][j] * valorMultiplicado;
    }
  }

  console.table(vetor36);
}

/*Exercício 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal*/
if (false) {
  let matriz10x10 = [];
  let somaAboveDiagonal = 0;
  let somaUnderDiagonal = 0;

  for (let i = 0; i < 10; i++) {
    matriz10x10[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz10x10[i][j] = Math.floor(Math.random() * 10);
      if (i < j) {
        somaAboveDiagonal += matriz10x10[i][j];
      } else if (i > j) {
        somaUnderDiagonal += matriz10x10[i][j];
      }
    }
  }

  console.table(matriz10x10);
  console.log(`A soma dos valores acima da diagonal é ${somaAboveDiagonal}`);
  console.log(`A soma dos valores abaixo da diagonal é ${somaUnderDiagonal}`);
}

/*Exercício 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz*/
if (false) {
  let matriz5x5 = [];
  let somaL4 = 0;
  let somaC2 = 0;
  let somaDiagonal = 0;
  let somaTotal = 0;

  for (let i = 0; i < 5; i++) {
    matriz5x5[i] = [];
    for (let j = 0; j < 5; j++) {
      matriz5x5[i][j] = Number(prompt("Insira o valor: "));
      if (i === 4) {
        somaL4 += matriz5x5[i][j];
      }
      if (j === 2) {
        somaC2 += matriz5x5[i][j];
      }
      if (i === j) {
        somaDiagonal += matriz5x5[i][j];
      }
      somaTotal += matriz5x5[i][j];
    }
  }

  console.log(matriz5x5);
  console.log(`A soma da linha 4 é ${somaL4}`);
  console.log(`A soma da coluna 2 é ${somaC2}`);
  console.log(`A soma da diagonal é ${somaDiagonal}`);
  console.log(`A soma de todos os elementos é ${somaTotal}`);
}

/*Exercício 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/
if (false) {
  let matriz5x5 = [];
  let sL = [];
  let sC = [];

  for (let i = 0; i < 5; i++) {
    sL[i] = 0;
    sC[i] = 0;
  }

  for (let i = 0; i < 5; i++) {
    matriz5x5[i] = []; // [0,1,2,...5]]
    for (let j = 0; j < 5; j++) {
      matriz5x5[i][j] = Number(prompt("Insira o valor: "));
      /*matriz5x5[i][j] = Math.floor(Math.random() * 10);*/

      sL[i] += matriz5x5[i][j];
      sC[j] += matriz5x5[i][j];
    }
  }

  for (i of matriz5x5) {
    console.log(i);
  }
  for (let i = 0; i < 5; i++) {
    console.log(`A soma da ${i + 1}ª linha é ${sL[i]}`);
    console.log(`A soma da ${i + 1}ª coluna é ${sC[i]}`);
  }
}

/*Exercício 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/
if (false) {
  let matrizV30x30 = [];
  let int = parseInt(prompt("Insira um número inteiro para multiplicar: "));
  let vetorInt = [];
  let matrizX30x30 = [];

  for (let i = 1; i <= 30; i++) {
    matrizV30x30[i] = [];
    matrizX30x30[i] = [];
    for (let j = 1; j <= 30; j++) {
      matrizV30x30[i][j] = parseInt(
        prompt("Insira os valores da matriz 30x30: ")
      );
      // matrizV30x30[i][j] = Math.floor(Math.random() * 10);
      if (matrizV30x30[i][j] === int) {
        vetorInt.push(matrizV30x30[i][j]);
      } else {
        matrizX30x30[i][j] = matrizV30x30[i][j];
      }
    }
  }

  console.table(matrizV30x30);
  console.table(matrizX30x30);

  console.log(
    `A matriz tem ${vetorInt.length} números iguais ao número fornecido.`
  );
}

/*Exercício 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificado.*/
if (false) {
  let matrizM12x13 = [];
  let matrizModificada12x13 = [];

  for (let i = 0; i < 12; i++) {
    matrizM12x13[i] = [];
    for (let j = 0; j < 13; j++) {
      matrizM12x13[i][j] = parseInt(
        prompt("Insira os valores da matriz 12x13: ")
      );
      // let randomNumber = Math.random() * 11;
      // matrizM12x13[i][j] = randomNumber >= 10 ? matrizM12x13[i][j] = '10.00' : randomNumber.toFixed(2);
    }
  }

  for (let i = 0; i < 12; i++) {
    let maiorElemento = matrizM12x13[i][0];
    for (let j = 0; j < 13; j++) {
      if (matrizM12x13[i][j] > maiorElemento) {
        maiorElemento = matrizM12x13[i][j];
      }
    }
    matrizModificada12x13[i] = [];
    for (let k = 0; k < 13; k++) {
      matrizModificada12x13[i][k] = (
        parseFloat(matrizM12x13[i][k]) / maiorElemento
      ).toFixed(2);
      if (matrizModificada12x13[i][k] > 1) {
        matrizModificada12x13[i][k] = "1.00";
      }
    }
  }

  console.table(matrizM12x13);
  console.table(matrizModificada12x13);
}

/*Exercício 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.*/
if (false) {
  let matriz3x3 = [];
  let somaMedia = 0;

  for (let i = 0; i < 3; i++) {
    matriz3x3[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz3x3[i][j] = parseFloat(prompt("Insira os valores da matriz 3x3: "));
      if (i + j === 2) {
        somaMedia += matriz3x3[i][j];
      }
    }
  }

  console.log("Matriz com valores normais:");
  console.table(matriz3x3);

  let media = somaMedia / matriz3x3.length;

  for (let i = 0; i < matriz3x3.length; i++) {
    for (let j = 0; j < matriz3x3.length; j++) {
      if (i === j) {
        matriz3x3[i][j] = matriz3x3[i][j] * media;
      }
    }
  }
  console.log("Matriz com valores multiplicados:");
  console.table(matriz3x3);
}

/*Exercício 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
  cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
  multiplicações.*/
if (false) {
  let matriz50x50 = [];
  vetorLinha = [];

  for (let i = 0; i < 50; i++) {
    matriz50x50[i] = [];
    for (let j = 0; j < 50; j++) {
      // matriz50x50[i][j] = parseInt(prompt("Insira os valores da matriz 50x50: "));
      matriz50x50[i][j] = Math.floor(Math.random() * 11);
      if (i === j) {
        vetorLinha[i] = matriz50x50[i][j];
      }
    }
  }
  console.log("Matriz com valores normais:");
  console.table(matriz50x50);

  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      matriz50x50[i][j] *= vetorLinha[i];
    }
  }

  console.log("Matriz com valores multiplicados:");
  console.table(matriz50x50);
}

/*Exercício 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/
if (false) {
  vetorPar = [];
  vetorImpar = [];
  vetorNumbers = [];
  numberVetorPar = 1;
  numberVetorImpar = 1;

  for (let i = 0; i < 30; i++) {
    // promptNumber = parseInt(prompt("Insira o número: "));
    promptNumber = Math.floor(Math.random() * 11);
    vetorNumbers.push(promptNumber);

    if (vetorNumbers[i] % 2 === 0) {
      vetorPar.push(vetorNumbers[i]);
      if (vetorPar.length === 5) {
        console.log(
          `O ${numberVetorPar}º vetor par contém os números: [${vetorPar.join(
            ", "
          )}]`
        );
        numberVetorPar++;
        vetorPar = [];
      }
    }
    if (vetorNumbers[i] % 2 === 1) {
      vetorImpar.push(vetorNumbers[i]);
      if (vetorImpar.length === 5) {
        console.log(
          `O ${numberVetorImpar}º vetor impar contém os números: [${vetorImpar.join(
            ", "
          )}]`
        );
        numberVetorImpar++;
        vetorImpar = [];
      }
    }
  }

  if (vetorPar.length > 0) {
    console.log(
      `O ${numberVetorPar}º vetor par contém os números: [${vetorPar.join(
        ", "
      )}]`
    );
  }
  if (vetorImpar.length > 0) {
    console.log(
      `O ${numberVetorImpar}º vetor impar contém os números: [${vetorImpar.join(
        ", "
      )}]`
    );
  }
}

/*Exercício 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/
if (false) {
  // Gerar os números da ProgramaCena:
  const vetorWinner =
    new Set(); /* new Set() = aceita apenas números diferentes */

  while (vetorWinner.size < 13) {
    /* .size = similar ao .length mas para o método new Set() */
    vetorWinner.add(
      Math.floor(Math.random() * 60) + 1
    ); /* .add = similar ao .push */
  }

  console.log(
    `Os números da ProgramaCena foram: ${Array.from(vetorWinner)
      .sort((a, b) => a - b) // Coloca os elementos em ordem
      .join(", ")}` // Separa os elementos por ", "
  );

  // Gerar os números dos apostadores:

  for (let i = 1; i <= 100; i++) {
    let vetorChoosen = new Set();

    while (vetorChoosen.size < 13) {
      vetorChoosen.add(Math.floor(Math.random() * 60) + 1);
    }

    console.log(
      `Os números escolhidos foram: ${Array.from(vetorChoosen)
        .sort((a, b) => a - b)
        .join(", ")}`
    );

    // Números de respostas corretas:
    let answersRigth = 0;
    for (num of vetorWinner) {
      // for of para pegar os elementos da vetor vetorWinner
      if (vetorChoosen.has(num)) {
        // conferir se o vetorChoosen tem o mesmo número do vetorWinner
        answersRigth++; // se sim, respotas corretas +1
      }
    }
    if (answersRigth === 13) {
      console.log(`|                            |`);
      console.log(`|                            |`);
      console.log(`|PARABÉNS, tu foi o GANHADOR.|`);
      console.log(`|                            |`);
      console.log(`|                            |`);
    } else if (answersRigth > 0) {
      console.log(`O apostador ${i} acertou ${answersRigth} número(s).`);
    } else {
      console.log(`O apostador ${i} acertou NENHUM número.`);
    }
  }
}

/*Exercício 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/
if (false) {

  let vetorG = [];
  let quantQuestions = parseInt(prompt("Insira a quantidade de questões da prova: "));
  let acertos = parseInt(prompt("Insira a quantidade mínima de acertos: "));
  
  while (vetorG.length < quantQuestions) {
    let promptAnswers = prompt("Insira o gabarito da prova: ").toUpperCase();
    if (
      promptAnswers === "A" ||
      promptAnswers === "B" ||
      promptAnswers === "C" ||
      promptAnswers === "D" ||
      promptAnswers === "E"
    ) {
      vetorG.push(promptAnswers);
    } else {
      console.log("Opção inválida, insira novamente.");
    }
  }
  console.log(`Gabarito: ${vetorG}`);
  
  let promptQuant = parseInt(prompt("Insira a quantidade de crianças: "));
  
  for (let i = 0; i < promptQuant; i++) {
    let answersCorrect = 0;
    let vetorAluno = [];
    let student = prompt("Insira o nome do aluno: ");
    while (vetorAluno.length < quantQuestions) {
      let promptStudentAnswers = prompt("Insira as respostas do aluno: ").toUpperCase();
      if (promptStudentAnswers === "A" || promptStudentAnswers === "B" || promptStudentAnswers === "C" || promptStudentAnswers === "D" || promptStudentAnswers === "E") {
        vetorAluno.push(promptStudentAnswers);
        if (vetorAluno[vetorAluno.length - 1] === vetorG[vetorAluno.length - 1]) {
          answersCorrect++;
        }
      } else {
        console.log("Resposta inválida, insira as respostas do aluno: ");
      }
    }
    
    if (answersCorrect >= acertos) {
      console.log(`${student} acertou ${answersCorrect} questões e foi: APROVADO`);
    } else {
      console.log(`${student} acertou ${answersCorrect} questões e foi: REPROVADO`);
    }
  }
  
}

/*Exercício 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/
if (false) {
  let vetor = [];
  
  while (vetor.length < 6) {
    let promptVetor = Number(prompt("Insira um número: "));
    if(!isNaN(promptVetor)) {
      vetor.push(promptVetor)
    }
  }
  console.log(vetor)
  
  console.log("Digite 1 para somar os elementos.")
  console.log("Digite 2 para o produto dos elementos.")
  console.log("Digite 3 para a média dos elementos.")
  console.log("Digite 4 para ordenar em ordem crescente.")
  console.log("Digite 5 para mostrar o vetor.")
  
  let promptResp = parseInt(prompt("Insira um número de 1-5: "));
  while (promptResp !== 1 && promptResp !== 2 && promptResp !== 3 && promptResp !== 4 && promptResp !== 5) {
    promptResp = parseInt(prompt("Opção inválida, insira um número de 1-5: "));
  }
  
  let soma = 0;
  if (promptResp === 1) {
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i]
    }
    console.log(`A soma é ${soma}.`)
  }
  
  let produto = 1;
  if (promptResp === 2) {
    for (let i = 0; i < vetor.length; i++) {
      produto *= vetor[i]
    }
    console.log(`O produto é ${produto}.`)
  }
  
  let somaMediaedia = 0;
  if (promptResp === 3) {
    for (let i = 0; i < vetor.length; i++) {
      somaMedia += vetor[i];
    }
    media = somaMedia / vetor.length;
    console.log(`A média é ${media}.`)
  }
  
  if (promptResp === 4) {
    vetor.sort(function(a, b) {
      return a - b
    })
    console.log(vetor)
  }
  
  if (promptResp === 5) {
    console.log(vetor)
  }
  
}

/*Exercício 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/
if (false) {
  let vetorA = [];
  
  while (vetorA.length < 100) {
    /*let min = -100;
    let max = 100;
    let promptVetorA = Math.floor(Math.random() * (max - min) + min);*/
    let promptVetorA = Number(prompt("Insira um número: "));
    if (!isNaN(promptVetorA)) {
      vetorA.push(promptVetorA)
    }
  }
  console.log(...vetorA);
  console.log();
  
  vetorB = [];
  for (let i = 0; i < vetorA.length/*100*/; i++) {
    if (vetorA[i] <= 0) {
      vetorB.push(vetorA[i]);
      vetorA.splice(i, 1); /*corta um elemento, mas não remove a quantidade de index*/
      i--; /*vai fazer com que ele continue no mesmo index*//*se nn tivesse isso ele pularia se tivesse 2 números negativos lado a lado*/
    }
  }
  
  console.log(...vetorA)
  console.log()
  console.log(...vetorB)
}
  
  /*Exercício 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
  resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
  cada), representando as apostas feitas. Compare os números das apostas com o
  resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
  corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
  e quadras, apenas por quinas.)*/
if (false) {
    // Gerar os números da ProgramaCena:
    const vetorWinner = new Set(); /* new Set() = aceita apenas números diferentes */
  
    while (vetorWinner.size < 5) {
      /* .size = similar ao .length mas para o método new Set() */
      // vetorWinner.add(Math.floor(Math.random() * 60) + 1); /* .add = similar ao .push */
      let promptQuina = parseInt(prompt("Insira um número da quina: "));
    while (promptQuina < 0 || promptQuina > 60 || isNaN(promptQuina)) {
      promptQuina = parseInt(prompt("Número inválido, insira novamente: "));
    }
      vetorWinner.add(promptQuina); /* .add = similar ao .push */
    }
  
    console.log(`Os números da Loto foram: ${Array.from(vetorWinner).sort((a, b) => a - b) // Coloca os elementos em ordem
        .join(", ")}` // Separa os elementos por ", "
    );
  
    // Gerar os números dos apostadores:
    
    for (let i = 1; i <= 50; i++) {
      let vetorChoosen = new Set();
      
      while (vetorChoosen.size < 5) {
        vetorChoosen.add(Math.floor(Math.random() * 60) + 1);
      }
      
      console.log(`Os números escolhidos foram: ${Array.from(vetorChoosen).sort((a, b) => a - b).join(", ")}`);
      
      // Números de respostas corretas:
      let answersRigth = 0;
      for (num of vetorWinner) {
        // for of para pegar os elementos da vetor vetorWinner
        if (vetorChoosen.has(num)) {
          // conferir se o vetorChoosen tem o mesmo número do vetorWinner
          answersRigth++; // se sim, respotas corretas +1
        }
      }
      if (answersRigth === 5) {
        console.log(`GANHADOR`);
      } else if (answersRigth > 0) {
        console.log(`O apostador ${i} acertou ${answersRigth} número(s).`);
      } else {
        console.log(`O apostador ${i} acertou NENHUM número.`);
      }
      console.log()
    }
 
}
  /*Exercício 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/
if (false) {
let pessoa = {
  nome: "Bryan",
  idade: 23,
}

console.log(pessoa.idade)

pessoa.email = "bryanstoise@gmail.com"

console.log(pessoa)
}

/*Exercício 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

let dados = {
  numeros: 10,
  strings: "ovo",
  arrays: [1,2,3,4]
}

