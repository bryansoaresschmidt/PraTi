package org.example;

public class Editor {
    private Node current;

    public Editor() {
        current = new Node("");
    }

    public void addText(String text) {
        Node newNode = new Node(text);

        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }

    public void undo() {
        if(current.prev != null) {
            current = current.prev;
        } else {
            System.out.println("Não há histórico a desfazer!");
        }
    }

    public void redo() {
        if (current.next != null) {
            current = current.next;
        } else {
            System.out.println("Não há nada a refazer!");
        }
    }

    public String showText() {
        StringBuilder SB = new StringBuilder();

        Node temp = current;

        // Navega até o início
        while (temp.prev != null) {
            temp = temp.prev;
        }

        while (temp != current.next) {
            SB.append(temp.content);
            temp = temp.next;
        }

        return SB.toString();
    }


}
