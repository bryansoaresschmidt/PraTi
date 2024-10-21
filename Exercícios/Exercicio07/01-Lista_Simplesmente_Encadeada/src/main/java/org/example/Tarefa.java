package org.example;

public class Tarefa { // Blueprint
    private String task; // Dado em si
    private Tarefa next; // Referência ao próximo elemento depois de T
    private boolean isDone;

    // Constructor que vai receber os parâmetros
    public Tarefa(String task) {
        this.task = task;
        this.next = null;
        this.isDone = false;
    }

    // Getters and setters
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public Tarefa getNext() {return next;}
    public void setNext(Tarefa next) {this.next = next;}

    public boolean getIsDone() { return isDone; }
    public void setIsDone(boolean isDone) { this.isDone = true; }

    @Override
    public String toString() {
        return (isDone ? "[✓] " : "[✗] ") + task;
    }
}
