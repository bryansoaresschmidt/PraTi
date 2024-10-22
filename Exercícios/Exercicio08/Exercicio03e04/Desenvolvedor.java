package Exercicio03e04;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, double salario){
        super(nome, salario);
    }

    @Override
    public double calcularBonus() {
        return salario * 1.1;
    }

    @Override
    public void trabalhar() {
        System.out.println("O Dev está queimando os neurônios.");
    }
}
