package Exercicio07;

public class CartaoCredito extends FormaPagamento {
    @Override
    public double processarPagamento(double valor) {
        return valor * 1.03;
    }

    @Override
    public void validarPagamento() {
        System.out.println("Deseja confirmar o pagamento no cartão de crédito?");
        System.out.println("1- Sim");
        System.out.println("2- Não");
    }
}
