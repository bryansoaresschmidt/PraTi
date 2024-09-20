package polymorphism;

public class Animal {
    public void makeSound() {
        System.out.println("O animal está roscando");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("O cachorro late: au au!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("O gato mia: miau miau");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        Cat cat = new Cat();

        dog.makeSound();
        cat.makeSound();
    }
}


