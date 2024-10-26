import pacote.Utilitarios;

public class Main {
    public static void main(String[] args) {
        /*
        [modificador] tipoRetorno nomeDoMétodo([parametros]) {
        bloco de código...
        }
         */

        // Calcular Retângulo - Método instância:
        Geometria geo = new Geometria();
        double area = geo.calcularRetangulo(5.5,3.1);
        System.out.println("A área é " + area + "m");

        // Calcular Retângulo - Método estático:
        System.out.println("A área é " + Geometria.multiplicar(10,20) + "m");

        // Consultar conta bancária
        ContaBancaria contaBancaria = new ContaBancaria();
        contaBancaria.depositar(1000);
        System.out.println("Seu saldo é R$ " + contaBancaria.consultaSaldo());

        Utilitarios.print("Olá Marilene...");
    }
}