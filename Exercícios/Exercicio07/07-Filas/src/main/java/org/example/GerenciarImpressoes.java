package org.example;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

public class GerenciarImpressoes {
    private Queue<Impressao> fila;
    private Random random;

    public GerenciarImpressoes() {
        this.fila = new LinkedList<>();
        random = new Random();
    }

    public void addImpressao(Impressao impressao) {
        fila.add(impressao);
        System.out.println("Documento: '" + impressao.doc + "' adicionado a fila de impressão.");
    }

    public void print() {
        Impressao impressao = fila.poll();
        if (impressao != null) {
            int timer = (impressao.paginas * (random.nextInt(3000) + 1));
            try {
                System.out.println("-------------------------");
                System.out.println("Imprimindo...");
                Thread.sleep(timer);
                System.out.println(impressao.paginas + " página(s) impressas em " + timer + " milisegundos.");

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        } else {
            System.out.println("Não há documentos na fila de impressão.");
        }
    }
}
