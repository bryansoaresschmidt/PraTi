package org.example;

public class Card {
    char valor;
    String naipe;

    public Card(char valor, String naipe) {
        this.valor = valor;
        this.naipe = naipe;
    }

    @Override
    public String toString() {
        return valor + " de " + naipe;
    }
}
