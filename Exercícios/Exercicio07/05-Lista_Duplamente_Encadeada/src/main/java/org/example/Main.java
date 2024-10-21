package org.example;

public class Main {
    public static void main(String[] args) {
        CardPlayer newCardPlayer = new CardPlayer();

        newCardPlayer.addCard(new Card('A', "Espadas"));
        newCardPlayer.addCard(new Card('K', "Copas"));
        newCardPlayer.addCard(new Card('Q', "Paus"));

        newCardPlayer.moveCard(new Card('K', "Copas"), 3);
        newCardPlayer.moveCard(new Card('K', "Copas"), 1);
        newCardPlayer.displayCards();
    }
}