package Exercicio08;

public class Desenvolvedor extends Funcionario {
    static final double SALARIO_BASE = 1100;
    private String senioridade;

    public Desenvolvedor(String nome, String senioridade) {
        super(nome, SALARIO_BASE);
        this.senioridade = senioridade;
    }

    public String getSenioridade(){
        return senioridade;
    }

    public void setSenioridade(String senioridade) {
        this.senioridade = senioridade;
    }
    @Override
    public double calcularSalario() {
        if (senioridade == null || senioridade.isEmpty()) {
            throw new IllegalArgumentException("Senioridade não pode ser nula ou vazia.");
        }

        switch (senioridade) {
            case "Júnior":
                return getSalario();
            case "Pleno":
                return getSalario() * 3;
            case "Sênior":
                return getSalario() * 9;
            default:
                throw new IllegalArgumentException("Escolha uma opção válida: Júnior/Pleno/Sênior");
        }
    }
    @Override
    public double calcularBonus() {
        return getSalario() * 0.2;
    }
}
