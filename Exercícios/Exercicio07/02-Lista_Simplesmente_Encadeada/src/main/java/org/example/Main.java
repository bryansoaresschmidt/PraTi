package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        BrowserHistory browserHistory = new BrowserHistory(2);
        HistoryControllers controller = new HistoryControllers(browserHistory);

        Scanner scan = new Scanner(System.in);
        String comando;

        do {
            System.out.println("1- Para adicionar um histórico");
            System.out.println("2- Para remover o histórico mais antigo");
            System.out.println("3- Para mostrar todo o histórico");
            System.out.println("4- Para fechar o app");
            System.out.print("Escolha sua opção: ");
            comando = scan.nextLine();

            switch(comando) {
                case "1":
                    System.out.print("URL: ");
                    String url = scan.nextLine();
                    controller.addUrl(url);

                    System.out.println();
                    System.out.println("URL " + url + " foi adicionada!");
                    System.out.println();
                    break;
                case "2":
                    String removedUrl = controller.removeOldest();
                    if (removedUrl != null) {
                        System.out.println();
                        System.out.println("URL " + removedUrl + " foi removida!");
                        System.out.println();
                    } else {
                        System.out.println();
                        System.out.println("Histórico já está vazio!");
                        System.out.println();
                    }
                    break;
                case "3":
                    System.out.println();
                    System.out.println("Histórico do navegatricolor.");
                    System.out.println();
                    controller.showHistory();
                    System.out.println();
                    break;
                case "4":
                    System.out.println();
                    System.out.println("Fechando...");
                    System.out.println();
                    break;
                default:
                    System.out.println();
                    System.out.println("Opção inválida!");
                    System.out.println();
            }
        } while (!comando.equals("4"));
        scan.close();
    }
}