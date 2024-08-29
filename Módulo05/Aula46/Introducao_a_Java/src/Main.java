import java.util.Locale;
import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                // Declaração de variáveis primitivas

                byte byteVar = 127;   // Variável byte pode armazenar valores de -128 a 127.
                short shortVar = 32000; // Variável short pode armazenar valores de -32.768 a 32.767.
                int intVar = 2100000000; // Variável int pode armazenar valores de -2.147.483.648 a 2.147.483.647.
                long longVar = 9000000000000000000L; // Variável long pode armazenar valores muito grandes, sendo necessário um 'L' no final para indicar que é long.

                float floatVar = 3.1415F; // Variável float é um ponto flutuante de precisão simples, é necessário adicionar um 'F' no final.
                double doubleVar = 3.14159265; // Variável double é um ponto flutuante de precisão dupla.

                char charVar = 'A'; // Variável char armazena um único caractere Unicode, que aqui é 'A'.

                boolean booleanVar = true; // Variável boolean armazena valores true ou false.

                // Saída das variáveis na console usando System.out.println e System.out.printf
                System.out.println("Byte: " + byteVar); // Imprime o valor de byteVar.
                System.out.println("Short: " + shortVar); // Imprime o valor de shortVar.
                System.out.println("Int: " + intVar); // Imprime o valor de intVar.
                System.out.println("Long: " + longVar); // Imprime o valor de longVar.
                System.out.println("Float: " + floatVar); // Imprime o valor de floatVar.
                System.out.println("Double: " + doubleVar); // Imprime o valor de doubleVar.
                System.out.println("Char: " + charVar); // Imprime o valor de charVar.
                System.out.println("Boolean: " + booleanVar); // Imprime o valor de booleanVar.

                // Formatação de ponto flutuante com duas casas decimais
                System.out.printf("%.2f\n", floatVar); // Imprime floatVar com duas casas decimais.

                String name = "Jaques"; // Declara uma variável do tipo String e a inicializa com "Jaques".

                System.out.println(name); // Imprime o valor da String 'name'.

                // Configuração de Localidade para a formatação numérica
                Locale.setDefault(Locale.US); // Define a localidade padrão como US para garantir o uso do ponto decimal.
                System.out.printf("%.2f\n", floatVar); // Imprime floatVar com formatação de duas casas decimais no padrão US.

                int a, b, c; // Declara três variáveis inteiras a, b e c.
                double area; // Declara uma variável double para armazenar o valor da área.

                a = 5; // Atribui o valor 5 à variável a.
                b = 7; // Atribui o valor 7 à variável b.
                c = 3; // Atribui o valor 3 à variável c.

                area = (double) (a + b) / 2 * c; // Calcula a área do trapézio usando a fórmula: área = ((a + b) / 2) * c, com casting para garantir a precisão do cálculo.

                System.out.println(area); // Imprime o valor da área calculada.

                // Criando um objeto Scanner para leitura de dados do console
                Scanner sc = new Scanner(System.in); // Scanner é usado para ler a entrada do usuário a partir do console.
    }
}