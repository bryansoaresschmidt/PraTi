package abstraction;

public class Carro {

    private String cor;
    private String marca;
    private int ano;
    private double motor;

    // Getters...
    public String getColor() {
        return this.cor;
    }
    public String getBrand() {
        return this.marca;
    }
    public int getYear() {
        return this.ano;
    }
    public double getEngine() {
        return this.motor;
    }

    // Setters...
    public void setProps(String cor, String marca, int ano, double motor) {
        this.cor = cor;
        this.marca = marca;
        this.ano = ano;
        this.motor = motor;
    }

    // Constructor
    public Carro(String cor, String marca, int ano, double motor) {
        this.cor = cor;
        this.marca = marca;
        this.ano = ano;
        this.motor = motor;
    }
}
