package Exercicio05;

public class Main {
    public static void main(String[] args) {
        MeioTransporte[] newMeioTransporte = new MeioTransporte[3];

        newMeioTransporte[0] = new Carro();
        newMeioTransporte[1] = new Bicicleta();
        newMeioTransporte[2] = new Trem();

        for (MeioTransporte transporte : newMeioTransporte) {
            transporte.acelerar();
            transporte.frear();
            System.out.println("----------------------------------------------------");
        }

    }
}
