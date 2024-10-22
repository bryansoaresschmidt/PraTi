package Exercicio03e04;

public class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario){
        this.nome = nome;
        this.salario = salario;
    }

    public double calcularBonus() {
        return salario;
    }

    public void trabalhar() {
        System.out.println("O funcionário está trabalhando.");
    }
}
