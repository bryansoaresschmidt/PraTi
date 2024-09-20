package inheritance;

public class Funcionario {
    private String cpf;
    public String nome;
    public int age;
    private double salario;

    public Funcionario(String nome, int age, String cpf, double salario) {
        this.nome = nome;
        this.age = age;
        this.setCpf(cpf);
        this.setSalario(salario);
    }

    //Getter
    public String getCpf() {
        return this.cpf;
    }
    public double getSalario() {
        return this.salario;
    }

    //Setter
    public void setCpf(String cpf) {
        if (cpf == null || cpf.isEmpty()) {
            throw new IllegalArgumentException("CPF não pode ser vazio.");
        }
        this.cpf = cpf;
    }
    public void setSalario(double salario) {
        if (salario <= 0) {
            throw new IllegalArgumentException("Salário não pode ser vazio.");
        }
        this.salario = salario;
    }
}
