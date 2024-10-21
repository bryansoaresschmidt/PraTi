package org.example;

public class Node {
    String content;
    Node prev;
    Node next;

    public Node(String content) {
        this.content = content;
        this.prev = null;
        this.next = null;
    }
}
