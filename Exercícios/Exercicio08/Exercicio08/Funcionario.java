package Exercicio08;

public abstract class Funcionario {
    private String nome;
    private double salarioBase;

    public Funcionario(String nome, double salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    public String getNome(){
        return nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public double getSalario(){
        return salarioBase;
    }

    public abstract double calcularSalario();
    public abstract double calcularBonus();

}
