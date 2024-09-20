package inheritance;

public class Cachorro extends Animal {
    // Constructor
    public Cachorro(String nome) {
        super(nome);
    }

    // Method to emit sound
    @Override
    public void emitirSom() {
        System.out.println(this.nome + " fez au au");
    }

    // Main method to run the program
    public static void main(String[] args) {
        // Example usage
        Cachorro cachorro = new Cachorro("Rex");
        cachorro.emitirSom();
    }
}