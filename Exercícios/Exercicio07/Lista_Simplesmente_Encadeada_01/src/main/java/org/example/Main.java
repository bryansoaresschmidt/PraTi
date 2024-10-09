package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Controllers lista = new Controllers();
        Scanner scanner = new Scanner(System.in);
        String comando;

        do {
            System.out.println("1 - Adicionar tarefa");
            System.out.println("2 - Remover tarefa");
            System.out.println("3 - Marcar tarefa como concluída");
            System.out.println("4 - Exibir todas as tarefas");
            System.out.println("5 - Sair");
            System.out.print("Escolha uma opção: ");
            comando = scanner.nextLine();

            switch (comando) {
                case "1":
                    System.out.print("Digite a descrição da tarefa: ");
                    String descricao = scanner.nextLine();
                    lista.addTask(descricao); // Adiciona nova tarefa
                    System.out.println("Tarefa adicionada.");
                    break;

                case "2":
                    System.out.print("Digite a descrição da tarefa a ser removida: ");
                    descricao = scanner.nextLine();
                    lista.deleteTask(descricao); // Remove a tarefa com a descrição dada
                    break;

                case "3":
                    System.out.print("Digite a descrição da tarefa a ser marcada como concluída: ");
                    descricao = scanner.nextLine();
                    lista.doneTask(descricao); // Marca a tarefa como concluída
                    break;

                case "4":
                    System.out.println("\nTarefas:");
                    lista.displayTasks(); // Exibe todas as tarefas
                    break;

                case "5":
                    System.out.println("Saindo...");
                    break;

                default:
                    System.out.println("Opção inválida.");
            }
        } while (!comando.equals("5"));

        scanner.close();
    }
}