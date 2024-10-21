package org.example;

public class Node {
    Card card;
    Node prev;
    Node next;

    public Node(Card card) {
        this.card = card;
        this.prev = null;
        this.next = null;
    }


}
