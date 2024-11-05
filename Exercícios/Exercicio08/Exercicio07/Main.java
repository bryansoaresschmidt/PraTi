package Exercicio07;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        CartaoCredito credito = new CartaoCredito();
        Boleto boleto = new Boleto();
        Pix pix = new Pix();

        Scanner scan = new Scanner(System.in);
        String comando;
        double pagamento;
        String pagComando;
        String validarComando;

        do {
            System.out.println("Deseja realizar um pagamento? Digite o número correspondente à opção: ");
            System.out.println("1- Sim");
            System.out.println("2- Não");
            System.out.print("Opção: ");
            comando = scan.nextLine().trim();

            switch (comando) {
                case "1":
                    System.out.println("Digite o valor do pagamento: ");
                    System.out.print("R$ ");
                    pagamento = Double.parseDouble(scan.nextLine());

                    System.out.println("Qual o método de pagamento?");
                    System.out.println("1- Crédito");
                    System.out.println("2- Boleto");
                    System.out.println("3- Pix");
                    System.out.print("Opção: ");
                    pagComando = scan.nextLine().trim();

                    switch (pagComando) {
                        case "1":
                            double pagCredito = credito.processarPagamento(pagamento);
                            System.out.println();
                            System.out.println("Valor com taxas: R$ " + String.format("%.2f", pagCredito));
                            credito.validarPagamento();
                            System.out.print("Opção: ");
                            validarComando = scan.nextLine().trim();

                            switch (validarComando) {
                                case "1":
                                    System.out.println("O valor do pagamento no cartão de crédito foi de R$ " + String.format("%.2f", pagCredito) + ".");
                                    break;
                                case "2":
                                    System.out.println("Cancelando...");
                                    break;
                                default:
                                    System.out.println("Opção inválida");
                                    break;
                            }
                            break;

                        case "2":
                            double pagBoleto = boleto.processarPagamento(pagamento);
                            System.out.println();
                            System.out.println("Valor com taxas: R$ " + String.format("%.2f", pagBoleto));
                            boleto.validarPagamento();
                            System.out.print("Opção: ");
                            validarComando = scan.nextLine().trim();

                            switch (validarComando) {
                                case "1":
                                    System.out.println("O valor do pagamento do boleto foi de R$ " + String.format("%.2f", pagBoleto) + ".");
                                    break;
                                case "2":
                                    System.out.println("Cancelando...");
                                    break;
                                default:
                                    System.out.println("Opção inválida");
                                    break;
                            }
                            break;
                        case "3":
                            double pagPix = pix.processarPagamento(pagamento);
                            System.out.println();
                            System.out.println("Valor com taxas: R$ " + String.format("%.2f", pagPix));
                            pix.validarPagamento();
                            System.out.print("Opção: ");
                            validarComando = scan.nextLine().trim();

                            switch (validarComando) {
                                case "1":
                                    System.out.println("O valor do pagamento no pix foi de R$ " + String.format("%.2f", pagPix) + ".");
                                    break;
                                case "2":
                                    System.out.println("Cancelando...");
                                    break;
                                default:
                                    System.out.println("Opção inválida");
                                    break;
                            }
                            break;
                        default:
                            System.out.println("Opção de pagamento inválida. Tente novamente!");
                            break;
                    }
                    break;

                case "2":
                    System.out.println("Encerrando o programa...");
                    scan.close();
                    break;

                default:
                    System.out.println("Opção inválida.");
                    break;
            }

        } while (!comando.equals("2"));
    }
}
