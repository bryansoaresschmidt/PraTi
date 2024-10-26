package encapsulationII;

public abstract sealed class Shape permits Circle, Rectangle {
    // Abstrata é uma classe que não pode ser
    public abstract double area();

    public static void main(String[] args) {
        System.out.println("----------------------------");

        Shape circle = new Circle(5);
        System.out.println("Área do círculo: " + circle.area());

        Shape rectangle = new Rectangle(4.0, 5.0);
        System.out.println("Área do Retângulo: " + rectangle.area());

        System.out.println("----------------------------");

        Point point = new Point(2, 3);
        System.out.println("Pontos: " + point);
        System.out.println("Ponto X: " + point.x());
        System.out.println("Ponto Y: " + point.y());

        System.out.println("----------------------------");
    }
}


