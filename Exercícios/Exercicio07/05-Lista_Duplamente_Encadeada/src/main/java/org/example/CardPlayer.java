package org.example;

public class CardPlayer {
    Node head;
    Node tail;

    public CardPlayer() {
        this.head = null;
        this.tail = null;
    }

    public void addCard(Card card) {
        Node newNode = new Node(card); // Crio um novo nó (instância)
        if(head == null) { // Se vazio...
           head = tail = newNode; // Adiciona o head/tail como novo nó!
        } else {
            tail.next = newNode;
            newNode.prev = tail;

            tail = newNode;
        }
    }

    public void deleteCard(Card card) {
        Node current = head;
        boolean found = false;
        while (current != null) {
            if(current.card.valor == card.valor && current.card.naipe.equals(card.naipe)) { // Se for a carta...

                if (current.prev == null) { // 1- Primeira carta ele vai colocar o head como:  (1)a próxima carta, que pode ser uma carta mesmo ou (2)se for a única ela vai ser nula
                    head = current.next;
                } else {
                    current.prev.next = current.next;
                }

                if (current.next == null) { // 2- Última carta
                    tail = current.prev;
                } else {
                    current.next.prev = current.prev;
                }

                found = true;
                System.out.println("Carta " + card + " foi movida.");
                break;
            }
            current = current.next;
        }
        if(!found) {
            System.out.println("Você não possui essa carta.");
        }
    }

    public void moveCard(Card card, int index) {
        Node current = head;

        while (current != null && (current.card.valor != card.valor || !current.card.naipe.equals(card.naipe))) {
            current = current.next;
        }

        if(current == null) {
            System.out.println("Carta não encontrada.");
            return;
        }

        deleteCard(card);
        addAtPosition(card, index);

        System.out.println("Carta movida para posição " + index + ".");
    }

    private void addAtPosition(Card card, int index) {
        Node newNode = new Node(card);

        if (index == 1) {
                newNode.next = head;
                if (head != null) {
                    head.prev = newNode;
                }
                head = newNode;

                if (tail == null) {
                    tail = newNode;
                }
                System.out.println("Carta adicionada na posição " + index);
                return;
        }

        Node current = head;
        int currentIndex = 1;

        while (current != null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        if (current == null || current.next == null) { // Adicionando no final da lista
            addCard(card);
        } else {
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
            newNode.prev = current.prev;
        }

    }

    public void displayCards() {
        Node current = head;
        StringBuilder SB = new StringBuilder("Sua mão: ");
        if (head == null) {
            System.out.println(SB.append("Vazia."));
            return;
        }
        while (current != null) {
            SB.append(current.card).append(", ");
            current = current.next;
        }
        if (SB.length() > 6) {
            SB.setLength(SB.length() - 2);
        }
        System.out.println(SB + ".");
    }
}
