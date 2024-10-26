package encapsulation;

public class Transaction implements TransactionInterface { // IMPLEMENTS é usada quando uma classe deseja implementar uma interface

    private final BankAccount account; // FINAL a variável se torna uma constante.
    private final double amount;
    private final TransactionType type;

    public enum TransactionType { // enum é uma classe de constantes
        DEPOSIT,
        WITHDRAWAL
    } // Sempre que uma transação acontecer, sempre será somente desses dois tipos

    public Transaction(BankAccount account, double amount, TransactionType type) {
        this.account = account;
        this.amount = amount;
        this.type = type;
    }

    @Override
    public void execute() {
        switch (type) {
            case DEPOSIT -> this.account.deposit(amount);
            case WITHDRAWAL -> this.account.withdraw(amount);
        }
    }

    @Override
    public String getDetails() {
        return String.format("Transação do tipo %s com valor de %.2f na conta %s", this.type, this.amount, this.account.getAccountNumber());
    }
}
