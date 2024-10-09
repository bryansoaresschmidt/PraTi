package org.example;

public class Controllers {
    private Tarefa inicio;

    public void addTask(String task) {
        Tarefa newTask = new Tarefa(task);
        if(inicio == null) {
            inicio = newTask; // Se estiver vazio inicio recebe newTask
        } else {
            Tarefa current = inicio; // Sempre vai dizer qual é o primeiro nó da lista
            while(current.getNext() != null) { // Se o next do current for null ele pula esse loop
                current = current.getNext(); // Se nn for null, ele vai percorrer até achar o último elemento pra assim na próxima linha poder adicionar depois do último elemento (sem ser o null)
            }
            current.setNext(newTask);
        }
    }

    public void deleteTask(String descricao) {
        if (inicio == null) {
            System.out.println("Não existem tarefas para serem deletadas");
            return;
        }
        if (inicio.getTask().equals(descricao)) {
            inicio = inicio.getNext();
            System.out.println("Tarefa '" + descricao + "' foi deletada.");
            return;
        }

        Tarefa current = inicio;
        while(current.getNext() != null) {
            if(current.getNext().getTask().equals(descricao)) {
                current.setNext(current.getNext().getNext());
                System.out.println("Tarefa " + descricao + " removida com sucesso.");
                return;
            }
        current = current.getNext();
        }
        System.out.println("Tarefa " + descricao + " não foi adicionado a lista de tarefas.");
    }

    public void doneTask(String descricao) {
        Tarefa current = inicio;
         while (current != null) {
             if (current.getTask().equals(descricao)) {
                 current.setIsDone(true);
                 System.out.println("Tarefa " + descricao + " marcado como concluída.");
                 return;
             }
             current = current.getNext();
         }
        System.out.println("Tarefa " + descricao + " não encontrada.");
    }

    public void displayTasks() {
        if(inicio == null) {
            System.out.println("Nenhuma tarefa foi adicionada até o presente momento.");
        }
        Tarefa current = inicio;
        while (current.getNext() != null) {
            System.out.println(current);
            current = current.getNext();
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        Tarefa current = inicio; // Começa do início da lista

        while (current != null) {
            sb.append(current.toString()); // Adiciona a representação da tarefa
            sb.append("\n"); // Adiciona uma quebra de linha após cada tarefa
            current = current.getNext(); // Move para o próximo nó
        }

        return sb.toString(); // Retorna a string construída
    }
}
