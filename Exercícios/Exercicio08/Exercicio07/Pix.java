package Exercicio07;

public class Pix extends FormaPagamento {
    @Override
    public double processarPagamento(double valor) {
        return valor;
    }

    @Override
    public void validarPagamento() {
        System.out.println("Deseja confirmar o pagamento no pix?");
        System.out.println("1- Sim");
        System.out.println("2- Não");
    }
}
