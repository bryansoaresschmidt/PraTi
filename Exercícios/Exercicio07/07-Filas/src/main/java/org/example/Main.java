package org.example;

public class Main {
    public static void main(String[] args) {
        GerenciarImpressoes gerenciarImpressoes = new GerenciarImpressoes();
        Impressao impressao1 = new Impressao("Semana das criança", 2);
        Impressao impressao2 = new Impressao("Fabi", 1);
        Impressao impressao3 = new Impressao("Ponto001", 3);

        gerenciarImpressoes.addImpressao(impressao1);
        gerenciarImpressoes.addImpressao(impressao1);
        gerenciarImpressoes.addImpressao(impressao3);

        gerenciarImpressoes.print();
        gerenciarImpressoes.print();
        gerenciarImpressoes.print();
    }
}