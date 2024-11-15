package Exercicio08;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String comando = "";

        do {
            System.out.println("Escolha um funcionário para calcular o salário.");
            System.out.println("1- Gerente");
            System.out.println("2- Desenvolvedor");
            System.out.println("3- Estagiário");
            System.out.println("4- Fechar o programa");
            System.out.print("Escolha um cargo: ");

            comando = sc.nextLine();
            switch (comando) {
                case "1":
                    System.out.print("Digite o nome do gerente: ");
                    String nomeGer = sc.nextLine();

                    System.out.print("Qual a quantidade de vendas da filial? ");
                    int vendasFilial = sc.nextInt();
                    sc.nextLine();

                    Gerente ger = new Gerente(nomeGer, vendasFilial);

                    System.out.println();
                    System.out.println("1- Calcular salário");
                    System.out.println("2- Calcular bônus");
                    System.out.print("Escolha uma opção: ");

                    String comandoCalcularGer = sc.nextLine();
                    switch (comandoCalcularGer) {
                        case "1":
                            System.out.println("O salário do gerente " + nomeGer + " nesse mês foi de R$ " + ger.calcularSalario());
                            System.out.println("");
                            break;
                        case "2":
                            System.out.println("O bônus do gerente nesse mês foi de R$ " + ger.calcularBonus());
                            System.out.println("");
                            break;
                    }
                    break;
                case "2":
                    System.out.print("Digite o nome do desenvolvedor: ");
                    String nomeDev = sc.nextLine();

                    System.out.print("Qual a senioridade do desenvolvedor? (Júnior/Pleno/Sênior): ");
                    String senioridade = sc.nextLine();

                    Desenvolvedor dev = new Desenvolvedor(nomeDev, senioridade);

                    System.out.println();
                    System.out.println("1- Calcular salário");
                    System.out.println("2- Calcular bônus");
                    System.out.print("Escolha uma opção: ");

                    String comandoCalcularDev = sc.nextLine();
                    switch (comandoCalcularDev) {
                        case "1":
                            System.out.println("O salário do desenvolvedor " + nomeDev + " nesse mês foi de R$ " + dev.calcularSalario());
                            System.out.println("");
                            break;
                        case "2":
                            System.out.println("O bônus do desenvolvedor nesse mês foi de R$ " + dev.calcularBonus());
                            System.out.println("");
                            break;
                        }
                    break;
                case "3":
                    System.out.print("Digite o nome do estagiário: ");
                    String nomeEst = sc.nextLine();

                    Estagiario est = new Estagiario(nomeEst);

                    System.out.println();
                    System.out.println("1- Calcular salário");
                    System.out.println("2- Calcular bônus");
                    System.out.print("Escolha uma opção: ");

                    String comandoCalcularEst = sc.nextLine();

                    switch (comandoCalcularEst) {
                        case "1":
                            System.out.println("O salário do estagiário " + nomeEst + " nesse mês foi de R$ " + est.calcularSalario());;
                            System.out.println("");
                            break;
                        case "2":
                            System.out.println("Estagiários não recebem bônus!");;
                            System.out.println("");
                            break;
                    }
                    break;
            }
        } while (!comando.equals("4"));
        System.out.println("Encerrando o programa...");
        sc.close();
    }
}