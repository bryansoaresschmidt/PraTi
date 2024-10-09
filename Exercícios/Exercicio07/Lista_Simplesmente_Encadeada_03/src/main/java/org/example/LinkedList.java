package org.example;

public class LinkedList {
    private Node head;
    private Node current;

    public LinkedList() {
        this.head = null;
        this.current = null;
    }

    public void push(String action) {
        Node newNode = new Node(action);
        if (head == null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = newNode;
        }
        current.next = null;
    }

    public void undoPush(){
        if(head == null) {
            System.out.println("Não há ações a desfazer!");
            return;
        }
        if(head == current) {
            head = null;
            current = null;
            System.out.println("Desfeito!");
            return;
        }
        Node curr = head;
        while (curr.next != current) {
            curr = curr.next;
        }
        System.out.println("Ação " + current.action + " desfeita.");
        current = curr;
        current.next = null;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
         Node curr = head;
        while (curr != null) {
            sb.append(curr.action);
            curr = curr.next;
        }
        return sb.toString();
    }
}
