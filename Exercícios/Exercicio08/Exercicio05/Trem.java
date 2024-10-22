package Exercicio05;

public class Trem implements MeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("O maquinista acelerou o trem até 70km/h");
    }
    @Override
    public void frear() {
        System.out.println("O maquinista freou a o trem e estragou a bagagem");
    }
}
