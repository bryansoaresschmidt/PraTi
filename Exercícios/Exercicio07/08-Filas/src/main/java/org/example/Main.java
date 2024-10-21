package org.example;

public class Main {
    public static void main(String[] args) {
        GerenciarProcesso gerenciarProcesso = new GerenciarProcesso();

        Processo processo1 = new Processo("Abrir GTA V");
        Processo processo2 = new Processo("Jogar GTA...");
        Processo processo3 = new Processo("Desligar computador.");

        gerenciarProcesso.addProcess(processo1);
        gerenciarProcesso.addProcess(processo2);
        gerenciarProcesso.addProcess(processo3);

        gerenciarProcesso.execNextProcess();
        gerenciarProcesso.execNextProcess();
        gerenciarProcesso.execNextProcess();
    }
}