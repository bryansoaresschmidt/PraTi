package stream;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6,7 ,8, 9, 10);

        // .map() / .filter()
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n % 2 == 0) // Vai filtrar, retornar somente os números pares
                .map(n -> n * 2) // Multiplicar todos os números por 2
                .collect(Collectors.toList()); // Transformo em uma lista (versões anteriores)

        System.out.println(evenNumbers);


        // .reduce()
        int sum = numbers.stream().reduce(0, Integer::sum);

        System.out.println("Soma: " + sum);

        System.out.println("-----------------------------------------------------------------------------");


        // .map() / .forEach()
        List<String> names = Arrays.asList("Pedro", "Miguel", "Gabriel");

        names.stream().map(String::toUpperCase)
                .forEach(System.out::println); // O :: é o operador de referência a método

    }

}
