// Peguem um parágrafo de texto e usem streams para contar o número de palavras únicas, ignorar maiúsculas,
// minúsculas e pontuações.
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class IgnorarPalavras {
    public static void main(String[] args) {
        String paragraph = "Olá! Isso é um exemplo de texto. Texto serve para mostrar como contar palavras únicas, ignorando pontuações e letras maiúsculas ou minúsculas.";

        // Contar o número de palavras únicas
        long uniqueWordCount = Arrays.stream(paragraph.toLowerCase()  // Ignora maiúsculas e minúsculas
                        .replaceAll("[^a-zà-ú0-9\\s]", "")  // Remove pontuações
                        .split("\\s+"))  // Divide o texto em palavras com base em espaços
                        .distinct()  // Filtra palavras únicas
                        .count();  // Conta o número de palavras únicas

        System.out.println("Número de palavras únicas: " + uniqueWordCount);
    }
}