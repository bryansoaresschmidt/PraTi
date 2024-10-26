
package inheritance;

public class Gerente extends Funcionario {
    public int tempoServico;
    private double vendasMedia;

    public Gerente(String nome, int age, String cpf, double salario, int tempoServico, double vendasMedia) {
    super(nome, age, cpf, salario);
    this.tempoServico = tempoServico;
    this.vendasMedia = vendasMedia;
    }

    //Getter
    public double getVendasMedia() {
        return vendasMedia;
    }
    //Setter
    public void setVendasMedia(double vendasMedia) { this.vendasMedia = vendasMedia; }

    //Calcular salário
    public double calcularSalarioBonus(){
        double bonusVendas = 0.05 * this.getVendasMedia();
        double bonusTempoServico = getSalario() * tempoServico / 10;
        return getSalario() + bonusVendas + bonusTempoServico;
    }

    public void exibirFuncionario() {
        System.out.println("Nome: " + this.nome);
        System.out.println("Idade: " + this.age);
        System.out.println("CPF: " + this.getCpf());
        System.out.println("Salário sem bônus: " + this.getSalario());
        System.out.println("Tempo de serviço: " + this.tempoServico + " anos");
        System.out.println("Lucro total da filial: " + this.getVendasMedia());
        System.out.println("Salário com bônus aplicados: " + this.calcularSalarioBonus());
    }


}
