package queue;

public class SimpleQueue {                  // Declara a classe
    private Node first;                     // Declara atributo da classe SimpleQueue (primeiro nó)
    private Node last;                      // Declara atributos da classe SimpleQueue (último nó)

    public SimpleQueue() {                  // Construtor inicializa a fila com first e last como null.
        this.first = null;                  // ... indica que a fila está vazia!
        this.last = null;
    }

    private static class Node {             // Declara uma classe interna estática Node, que representa um nó na fila.
        int data;                           // Cada nó contém um dado (data) e uma referência para o próximo nó (next).
        Node next;

        public Node(int data) {             // Construtor da classe Node que inicializa o nó com o dado fornecido e...
            this.data = data;               // ...define o próximo nó como null.
            this.next = null;
        }
    }

    public void enqueue(int data) {         // Metodo enqueue para adicionar um novo elemento à fila.
        Node newNode = new Node(data);      // Cria um novo nó (newNode) com o dado fornecido.

        if (this.last == null) { // Se last for null, significa que a fila está vazia, então o novo nó se torna tanto o primeiro quanto o último nó da fila.
            this.first = newNode;
            this.last = newNode;
        } else { // Caso contrário, adiciona o novo nó ao final da fila e atualiza o ponteiro last para o novo nó.
            this.last.next = newNode;
            this.last = newNode;
        }
    }

        public int dequeue() {
            if (this.first == null) {
                throw new IllegalStateException("Fila vazia!");
            }

            int data = this.first.data;
            this.first = this.first.next;

            if (this.first == null) {
                this.last = null;
            }

            return data;
        }

        public boolean isEmpty() {
            return this.first == null;
        }
}
