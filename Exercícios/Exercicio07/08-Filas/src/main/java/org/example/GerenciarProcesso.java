package org.example;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

public class GerenciarProcesso {
    private Queue<Processo> fila;
    private Random random;

    public GerenciarProcesso (){
        this.fila = new LinkedList<>();
        random = new Random();
    }

    public void addProcess(Processo processo) {
        fila.add(processo);
        System.out.println("Processo adicionado.");
    }

    public void execNextProcess() {
        Processo processo = fila.poll();

        if (processo != null) {
            int timer = random.nextInt(10000);
            System.out.println("Executando próximo processo...");
            try {
                Thread.sleep(timer);
                System.out.println("Processo: '" + processo + "' foi executado corretamente.");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        } else {
            System.out.println("Nenhum processo a ser executado pelo sistema.");
        }
    }

    public boolean isQueueEmpty() {
        return fila.isEmpty();
    }
}
