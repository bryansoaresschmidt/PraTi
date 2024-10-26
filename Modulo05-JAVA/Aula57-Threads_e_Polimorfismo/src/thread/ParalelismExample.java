package thread;
import java.util.List;
import java.util.concurrent.ForkJoinPool; // Dividir tarefas em tarefas menores e fazer um processamento paralelo

public class ParalelismExample {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5); // Criando uma lista

        ForkJoinPool forkJoinPool = new ForkJoinPool((Runtime.getRuntime().availableProcessors())); // Criando n° de threads com o mesmo número de processadores disponíveis do sistema do meu computador
        // n° de threads == ao n° de núcleos da minha cpu

        forkJoinPool.submit(() -> { // Executa a lambida
            numbers.parallelStream().forEach(number -> { // Converte a lista de number numa stream paralela
                // Usar forEach pra iterar sobre cada número na minha stream
                System.out.println("Número sendo processado: " + number + " - " + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }).join(); // garante que o programa só vai executar uma vez

            forkJoinPool.shutdown();
    }
}
