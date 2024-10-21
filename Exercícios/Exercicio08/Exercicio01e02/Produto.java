package Exercicio01e02;

public class Produto {
    private String nome;
    private double preco;
    private int qtd;

    public Produto(String nome, double preco, int qtd) {
        this.nome = nome;
        setPreco(preco);
        setQtd(qtd);
    }

    public String getNome(){
        return nome;
    }
    public double getPreco(){
        return preco;
    }
    public int getQtd(){
        return qtd;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setPreco(double preco){
        if(preco >= 0) {
            this.preco = preco;
        } else {
            System.out.println("Insira um preço positivo.");
        }
    }
    public void setQtd(int qtd){
        if(qtd >= 0){
            this.qtd = qtd;
        } else {
            System.out.println("Insira uma quantidade positiva.");
        }
    }
}

