package Exercicio03e04;

public class Gerente extends Funcionario {
    public Gerente(String nome, double salario){
        super(nome, salario);
    }

    @Override
    public double calcularBonus() {
        return salario * 1.2;
    }

    @Override
    public void trabalhar() {
        System.out.println("O Gerente está fiscalizando o trabalho dos funcionários.");
    }
}
