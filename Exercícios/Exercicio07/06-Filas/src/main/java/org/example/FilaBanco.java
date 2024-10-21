package org.example;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

public class FilaBanco {
    private Queue<String> filaAtendimento;
    private Random random;

    public FilaBanco() {
        filaAtendimento = new LinkedList<>();
        random = new Random();
    }

    public void addCliente(String nome) {
        filaAtendimento.add(nome);
        System.out.println(nome + " está esperando na fila.");
    }
    public void atenderCliente() {
        if (!filaAtendimento.isEmpty()) {
            String cliente = filaAtendimento.poll();
            System.out.println("--------------------------------------------------");
            System.out.println("Atendendo " + cliente + "...");
            int timer = random.nextInt(3) + 1;
            try {
               Thread.sleep(timer * 1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println(cliente + " foi atendido em " + timer + " segundo(s).");
        } else {
            System.out.println("--------------------------------------------------");
            System.out.println("Não há mais clientes esperando na fila.");
        }
    }

}
