package org.example;

public class Main {
    public static void main(String[] args) {
            Editor newEditor = new Editor();

            newEditor.addText("Olá amigo");
            newEditor.addText(", tudo bem?");

            System.out.println(newEditor.showText());
            System.out.println("====================");

            newEditor.undo();
            System.out.println(newEditor.showText());
            System.out.println("====================");

            newEditor.redo();
            System.out.println(newEditor.showText());

    }
}