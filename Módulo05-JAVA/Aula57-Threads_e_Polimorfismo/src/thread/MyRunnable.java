package thread;

public class MyRunnable implements Runnable{

    @Override
    public void run() {
        System.out.println("Thread em execução!");
    }
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
