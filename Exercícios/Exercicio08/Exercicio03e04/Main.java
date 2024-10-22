package Exercicio03e04;

public class Main {
    public static void main(String[] args) {
        Funcionario funcionarioBernardo = new Funcionario("Bernardo", 1800.0);
        System.out.println(funcionarioBernardo.calcularBonus());

        Desenvolvedor devBryan = new Desenvolvedor("Bryan", 1800.0);
        System.out.println(devBryan.calcularBonus());

        Gerente gerJaques = new Gerente("Jaques", 1800);
        System.out.println(gerJaques.calcularBonus());
    }
}