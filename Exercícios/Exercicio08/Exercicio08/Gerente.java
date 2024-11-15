package Exercicio08;

public class Gerente extends Funcionario {
    static final double SALARIO_BASE = 3400.00;
    private int numeroVendasFilial;


    public Gerente(String nome, int numeroVendasFilial) {
        super(nome, SALARIO_BASE);
        this.numeroVendasFilial = numeroVendasFilial;
    }

    @Override
    public double calcularSalario() {
        return getSalario() + (getSalario() * (numeroVendasFilial * 0.001));
    }
    @Override
    public double calcularBonus() {
        return getSalario() * 0.1;
    }
    public int getNumeroVendasFilial(){
        return numeroVendasFilial;
    }
    public void setNumeroVendasFilial(int numeroVendasFilial){
        this.numeroVendasFilial = numeroVendasFilial;
    }
}
