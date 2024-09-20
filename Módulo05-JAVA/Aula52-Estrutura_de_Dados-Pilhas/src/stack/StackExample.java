package stack;

class Node {
    Node next;
    int data;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }


}

public class StackExample {
    private Node top;

    public StackExample() {
        this.top = null; // Momento de criação
    }

    public void push(int data) {
        Node newNode = new Node(data); // Instância, crio um novo nó
        newNode.next = this.top; // O next vai receber o nó anterior
        this.top = newNode; // Atualizo o nó
    }

    public int pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Pilha vazia!");
        }

        int poppedData = this.top.data;
        this.top = this.top.next;

        return poppedData;
    }

    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Pilha vazia!");
        }
        return this.top.data;
    }

    public boolean isEmpty() {
        return top == null;
    }

}
