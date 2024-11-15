package Exercicio08;

public class Estagiario extends Funcionario {
    static final double SALARIO_BASE = 800.00;

    public Estagiario(String nome) {
        super(nome, SALARIO_BASE);
    }

    @Override
    public double calcularSalario() {
        return getSalario();
    }

    @Override
    public double calcularBonus() {
        return 0; // Estagiários não recebem bônus
    }
}
