//import abstraction.Pessoa;
//import abstraction.Carro;
import abstraction.ContaBancaria;

//public class Main {
//    public static void main(String[] args){
//
//    Pessoa pessoa1 = new Pessoa();
//  pessoa1.CPF = "049955"; /* public */
//  pessoa1.altura = 1.69; /* protected */
//  pessoa1.nome = "João"; /* default*/
//  pessoa1.peso = 1.69; /* private */
//      System.out.println(pessoa1.CPF);
//      System.out.println(pessoa1.altura);
//
//    Pessoa pessoa2 = new Pessoa();
//  pessoa2.nome = "Maria";
//  pessoa2.altura = 1.60;
//      System.out.println(pessoa2.nome);
//      System.out.println(pessoa2.altura);
//    }
//}


//public class Main {
//    public static void main(String[] args) {
//        Carro myCar = new Carro();
//
//        myCar.setProps("Azul", "Wolkswaggen", 1999, 1.5);
//
//        System.out.println("Opção 1:");
//        System.out.println("Color: " + myCar.getColor());
//        System.out.println("Marca: " + myCar.getBrand());
//        System.out.println("Ano: " + myCar.getYear());
//        System.out.println("Motor: " + myCar.getEngine());
//    }
//}

//public class Main {
//    public static void main(String[] args) {
//        Carro myCarDirectly = new Carro("Vermelho", "Ford", 2004, 1.0);
//        System.out.println("Cor: " + myCarDirectly.getColor());
//        System.out.println("Marca: " + myCarDirectly.getBrand());
//        System.out.println("Ano: " + myCarDirectly.getYear());
//        System.out.println("Motor: " + myCarDirectly.getEngine());
//    }
//}

//public class Main{
//    public static void main(String[] args) {
//        Pessoa pessoa1 = new Pessoa("Bryan", 30);
//    }
//}

public class Main{
    public static void main(String[] args) {
        try {
            ContaBancaria contaBryan = new ContaBancaria("Bryan Schmidt", "1234567-7", 1000);
            ContaBancaria contaJose = new ContaBancaria("José Soares", "1234567-9", 500);

            contaBryan.depositar(1000);
            contaBryan.sacar(50);
            contaBryan.transferir(50, contaJose);
            contaBryan.exibirExtrato();

//            System.out.println(contaBryan.getSaldo());
//            System.out.println(contaJose.getSaldo());

        } catch (Exception error) {
            System.out.println(error.getMessage());
        }

    }
}