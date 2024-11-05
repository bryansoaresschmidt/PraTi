package Exercicio07;

public class Boleto extends FormaPagamento {
    @Override
    public double processarPagamento(double valor) {
        return valor * 1.005;
    }

    @Override
    public void validarPagamento() {
        System.out.println("Deseja confirmar o pagamento do boleto?");
        System.out.println("1- Sim");
        System.out.println("2- Não");
    }
}
