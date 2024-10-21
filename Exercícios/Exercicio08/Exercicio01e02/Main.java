package Exercicio01e02;

public class Main {
    public static void main(String[] args){
        ProdutoComDesconto shampoo = new ProdutoComDesconto("Shampoo", 20, 5);

        System.out.println("Preço unitário: R$ " + shampoo.getPreco());
        shampoo.aplicarDesconto(10);
        System.out.println("Preço unitário com desconto: R$ " + shampoo.getPreco());
        System.out.println("Unidades: " + shampoo.getQtd());
    }
}
