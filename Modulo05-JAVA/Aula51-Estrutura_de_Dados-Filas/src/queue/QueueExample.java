package queue;
import com.sun.source.util.SourcePositions;

import java.util.Queue;
import java.util.LinkedList;

public class QueueExample {
    public static void main(String[] args){
    Queue<Integer> queue = new LinkedList<>();

    queue.add(10);
    queue.add(20);
    queue.add(30);

    System.out.println("Primeiro elemento da fila: " + queue.peek()); // Pegar o primeiro elemento

    System.out.println("Primeiro elemento removido: " + queue.poll()); // Remover o primeiro elemento

    System.out.println("Primeiro elemento da fila: " + queue.peek());
    }
}
