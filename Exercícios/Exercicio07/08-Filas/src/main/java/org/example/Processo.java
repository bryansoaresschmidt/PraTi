package org.example;

public class Processo {
    private String nome;

    public Processo(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return nome;
    }
}
