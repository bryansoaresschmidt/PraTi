package Exercicio05;

public class Bicicleta implements MeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("A bicicleta acelerou até 30km/h");
    }
    @Override
    public void frear() {
        System.out.println("O ciclista freou a bicicleta e quase bateu no dev que tava dirigindo");
    }
}
