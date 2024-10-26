package inheritance;

public class Empresa {
    public static void main(String[] args) {
        // Criando uma instância da classe Gerente
        Gerente gerente1 = new Gerente("Bryan", 23, "232040", 2101.43, 3, 24051.68);

        // Exibindo as informações do gerente
        gerente1.exibirFuncionario();
    }
}