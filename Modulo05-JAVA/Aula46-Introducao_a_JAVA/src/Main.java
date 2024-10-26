import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.printf("Hello world!"); // Printar coisa no terminal
        System.out.println("Hello world!");

        byte byteVar = 127; // Tipos primitivos de dados
        short shortVar = 3200;
        int intVar = 20000;
        long longVar = 200000000;

        float floatVar = 13.4589F;
        double doubleVar = 19.5;

        char charVar = 'A';
        boolean booleanVar = true;

        System.out.println("Byte: " + byteVar);
        System.out.println("Short: " + shortVar);
        System.out.println("Int: " + intVar);
        System.out.println("Long: " + longVar);

        System.out.printf("Float: " + "%2f\n", floatVar);
        System.out.println("Double " + doubleVar);
        System.out.println("Char: " + charVar);
        System.out.println("Boolean: " + booleanVar);

        String name = "Bryan"; // Dados mais complexos
        System.out.println(name);

        // Comentários

        Locale.setDefault(Locale.US); // Juntamente com o import, trocar o Local
        System.out.printf("Float: " + "%2f\n", floatVar); // Aparece número com vírgula

        byte a;
        byte b;
        byte c;
        double area;
        a = 5;
        b = 7;
        c = 3;
        area = (double) (a+b)/2 * c; // Defino que algo como Number(...) dessa forma
        System.out.println("Area: " + area);


        Scanner sc = new Scanner(System.in); // Pedir dados pelo terminal

        String nome = sc.next();
        System.out.println("Nome: " + nome); // Strings

        int idade = sc.nextInt();
        System.out.println("Idade: " + idade); // Números

        double pi = sc.nextDouble();
        System.out.println("Pi: " + pi); // Com vírgula

        char caracter = sc.next().charAt(0);
        System.out.println("O primeiro caracter é: " + caracter);
    }
}