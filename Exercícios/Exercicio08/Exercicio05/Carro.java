package Exercicio05;

public class Carro implements MeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("O carro acelerou até 110km/h");
    }
    @Override
    public void frear() {
        System.out.println("O carro freou e salvou o motorista");
    }
}
