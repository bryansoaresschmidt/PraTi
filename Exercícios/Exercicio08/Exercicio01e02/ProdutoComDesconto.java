package Exercicio01e02;

public class ProdutoComDesconto extends Produto {
    public ProdutoComDesconto(String nome, double preco, int qtd) {
        super(nome, preco, qtd);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            System.out.println("Percentual de desconto inválido");
        } else {
            setPreco(getPreco() * (1 - porcentagem / 100));
        }
    }
}
