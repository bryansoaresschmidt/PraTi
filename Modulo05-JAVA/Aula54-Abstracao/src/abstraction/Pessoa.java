package abstraction;

// Public - acessa de qualquer lugar
// Protected - acessa dentro do mesmo pacote ou subclasses (classes filhas têm acesso)
// Default - só dentro do mesmo pacote (classes dentro do mesmo pacote)
// Private - só a classe pode acessar!

public class Pessoa { // Ela desenha o objeto como ele tem que ser, mas não é o objeto em si, é uma blueprint, um molde

    // Parâmetros:
    public String CPF;
    protected double altura;
    /*default*/ String nome;
    private String nascimento;

    // Nem todos alunos vão receber esses parâmetros
    double peso;
    int idade;
    char genero;

    // Métodos:
    void caminha() {
        System.out.println("Estou caminhando");
    }
    void estuda() {
        System.out.println("Estou estudando");
    }

    // Constructor:
    public Pessoa(String nome, int idade) {
        if (nome != "Bryan") {
            this.nome = nome;
    }
        System.out.println(getNome());

        this.nome = nome;
        this.idade = idade;
    }

    // Getter
    public String getNome() {
        return this.nome;
    }


}
