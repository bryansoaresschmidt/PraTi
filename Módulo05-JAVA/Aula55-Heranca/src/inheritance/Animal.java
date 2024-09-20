package inheritance;

public abstract class Animal {
    String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    abstract void emitirSom();

    void dormir() {
        System.out.println(this.nome + " está dormindo...");
    }
}
