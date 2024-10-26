package polymorphism; // Posso usar o mesmo método só que com parâmetros difentes que eles vão continuar funcionando

public class MathOperations {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }
 }
