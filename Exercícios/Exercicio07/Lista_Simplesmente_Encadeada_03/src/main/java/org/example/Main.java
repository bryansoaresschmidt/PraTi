package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        Scanner sc = new Scanner(System.in);
        String comando;

        do {
            System.out.println("1. Adicionar texto");
            System.out.println("2. Desfazer");
            System.out.println("3. Mostrar texto");
            System.out.println("4. Fechar");
            System.out.println("Escolha uma opção (1-4):");
            comando = sc.nextLine();
            switch (comando) {
                case "1":
                    String texto = sc.nextLine();
                    ll.push(texto);
                    break;
                case "2":
                    ll.undoPush();
                    break;
                case "3":
                    System.out.println(ll.toString());
                    break;
                case "4":
                    System.out.println("Fechando...");
                    break;
                default:
                    System.out.println("Opção inválida! Tente novamente...");
            }

        } while (!comando.equals("4"));
        sc.close();

    }
}