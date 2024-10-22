package Exercicio06;

public class Main {
    public static void main(String[] args) {
        Animal[] animal = new Animal[3];

        animal[0] = new Cachorro();
        animal[1] = new Gato();
        animal[2] = new Vaca();

        for (Animal obj : animal) {
            obj.emitirSom();
            System.out.println("------------");
        }
    }
}
