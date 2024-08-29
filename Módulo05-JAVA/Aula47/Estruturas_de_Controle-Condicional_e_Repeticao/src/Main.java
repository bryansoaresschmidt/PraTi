import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        System.out.println("Hello world!");
//
//
//        // Exercício 1: Conversão de Celsius para Fahrenheit
//        double celsius = 25.0;
//
//        double fahrenheit = (celsius * 9/5) + 32;
//
//        System.out.println(fahrenheit);
//        int age = 18;
//
//
//        // Exercício 2: Verificação de maioridade
//        if (age >= 18) {
//            System.out.println("Você é maior");
//        } else {
//            System.out.println("Você é menor");
//        }
//
//
//        // Exercício 3: Verificação de par ou ímpar
//        int number = 12;
//        if (number % 2 == 0) {
//            System.out.println("O número é par");
//        } else {
//            System.out.println("O número é impar");
//        }
//
//
//        // Exercício 4: Dia da semana usando switch-case
//        System.out.println("Digite o dia sa semana: ");
//        int dia = 6;
//        switch(dia) {
//            case 1:
//                System.out.println("Domingo!");
//                break;
//            case 2:
//                System.out.println("Segunda!");
//                break;
//            case 3:
//                System.out.println("Terça!");
//                break;
//            case 4:
//                System.out.println("Quarta!");
//                break;
//            case 5:
//                System.out.println("Quinta!");
//                break;
//            default:
//                System.out.println("Dia inválido!");
//                break;
//
//
//                // Exercício 5: Verificação de ano bissexto
//                System.out.println("Digite o ano para verificar: ");
//                int ano = sc.nextInt();
//
//                if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
//                    System.out.println(ano + " é bissexto");
//                } else {
//                    System.out.println(ano + "não é bissexto!");
//                }
//        }
//
//
//                // Exercício 6: Calculadora simples
//                System.out.println("Digite um número: ");
//                double num1 = sc.nextDouble();
//                System.out.println("Digite o segundo número: ");
//                double num2 = sc.nextDouble();
//                System.out.println("Digite um operador: (+,-,*,/)");
//                char operador = sc.next().charAt(0);
//
//                double resultado = 0;
//
//                switch (operador) {
//                    case '+':
//                        resultado = num1 + num2;
//                        break;
//                    case '-':
//                        resultado = num1 - num2;
//                        break;
//                    case '*':
//                        resultado = num1 * num2;
//                        break;
//                    case '/':
//                        if (num2 != 0) {
//                        resultado = num1 / num2;
//                        } else {
//                            System.out.println("Divisão por zero não permitida!");
//                        }
//                        break;
//                    default:
//                        System.out.println("Operador inválido!");
//                        break;
//                }
//                        System.out.println(resultado);
//
//
//        // Exercício 7: Login básico com limite de tentativas
//        int counter = 0;
//        while (true) {
//            if(counter == 3) {
//                System.out.println("Limite de tentativas atingido!");
//                break;
//            }
//            System.out.println("Digite o usuário");
//            String user = sc.next();
//            System.out.println("Digite a senha");
//            String password = sc.next();
//            if(user.equals("Bryan") && password.equals("gostoso")) {
//                System.out.println("Usuário logado com sucesso!");
//                break;
//            } else {
//                System.out.println("Tente novamente...");
//                counter++;
//            }
//        }
//
//
//        // Estruturas de repetição: FOR
//        for (int i = 0; i < 10; i++) { // Loop de 0 a 9 (10 iterações).
//            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
//        }
//
//        // Estruturas de repetição: WHILE
//        int i = 0; // Inicializa a variável i.
//        while (i < 10) { // Loop enquanto i for menor que 10.
//            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
//            i++; // Incrementa i.
//        }
//
//        // Estruturas de repetição: DO-WHILE
//        i = 0; // Reinicializa a variável i.
//        do {
//            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
//            i++; // Incrementa i.
//        } while (i < 10); // Executa o loop enquanto i for menor que 10.
//
//
//        // Manipulação de Strings
//        String texto = "Java é ruim!";
//
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculas = texto.toUpperCase(); // Converte a String para maiúsculas.
//        System.out.println(maiusculas); // Imprime a String em maiúsculas.
//
//        String minusculas = texto.toLowerCase(); // Converte a String para minúsculas.
//        System.out.println(minusculas); // Imprime a String em minúsculas.
//
//        boolean contem = texto.contains("Java");
//        System.out.println(contem);
//
//        String subs = texto.replace("Java", "Python");
//        System.out.println(subs);
//
//
//        // Matemática
//        double num = 50.30; // Declara uma variável double.
//
//        double arredondado = Math.round(num); // Arredonda o número para o inteiro mais próximo.
//        System.out.println(arredondado); // Imprime o valor arredondado.
//
//        double arredondadoPraCima = Math.ceil(num); // Arredonda o número para cima.
//        System.out.println(arredondadoPraCima); // Imprime o valor arredondado para cima.
//
//        double arredondadoPraBaixo = Math.floor(num); // Arredonda o número para baixo.
//        System.out.println(arredondadoPraBaixo); // Imprime o valor arredondado para baixo.
//
//        double raizQuadrada = Math.sqrt(num); // Calcula a raiz quadrada do número.
//        System.out.println(raizQuadrada); // Imprime a raiz quadrada.
//
//        double absoluto = Math.abs(num); // Obtém o valor absoluto do número.
//        System.out.println(absoluto); // Imprime o valor absoluto.
//
//        double aleatorio = Math.random(); // Gera um número aleatório entre 0.0 e 1.0.
//        System.out.println(aleatorio); // Imprime o número aleatório.
//
//        // Fatorial de um número e sequência de Fibonacci
//        // (Implementações de fatorial e Fibonacci podem ser adicionadas aqui)
//
            // Fatorial
          System.out.println("Recebe o fatorial do número digitado: ");
          int num3 = sc.nextInt();
          int fatorial = 1;

          for (int i = 2; i <= num3;  i++) {
            fatorial *= i;
        }

          System.out.println(fatorial);

          // Fibonacci
        System.out.print("Digite o número de termos da sequência de Fibonacci: ");
        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println("Por favor, insira um número maior que 0.");
        } else {
            System.out.println("Sequência de Fibonacci até " + n + " termos:");

            int num01 = 0, num02 = 1;

            for (int i = 1; i <= n; i++) {
                System.out.print(num01 + " ");

                int sum = num01 + num02;
                num01 = num02;
                num02 = sum;
            }
        }
    }
}