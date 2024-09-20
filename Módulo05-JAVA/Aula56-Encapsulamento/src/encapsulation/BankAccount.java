package encapsulation;

public class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    //Getter e Setter
    public String getAccountNumber() {
        return accountNumber;
    }
    public double getBalance() {
        return balance;
    }

    //Metodo depositar
    public void deposit(double amount){
        if(amount > 0) {
            this.balance += amount;
        } else {
            throw new IllegalArgumentException("Valor inválido");
        }
    }
    //Metodo sacar
    public void withdraw(double amount) {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new IllegalArgumentException("O valor do depósito deve ser positivo!");
        }
    }
}
