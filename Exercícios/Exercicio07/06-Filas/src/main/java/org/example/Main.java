package org.example;

public class Main {
    public static void main(String[] args) {
        FilaBanco filaBanco = new FilaBanco();

        filaBanco.addCliente("Joaquim");
        filaBanco.addCliente("Valério");
        filaBanco.addCliente("Rogér Guedess");
        filaBanco.addCliente("Geromito");

        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
        filaBanco.atenderCliente();
    }
}