package thread;

public class MyThread extends Thread{

    @Override // Sobrescreve o método run() da classe Thread.
    public void run() {  // Método que será executado quando a thread for iniciada.
        System.out.println("Thread em execução!");
    }

    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        MyThread t1 = new MyThread(); // Cria uma nova instância de MyThread.
        t1.start(); // Inicia a execução da thread. Isso chama o método run() da instância MyThread.
    }
}
