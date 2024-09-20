
/* Desenvolva: classe bancária com constructor, getters, setters, depositar, sacar,
transferir, exibirExtrato, registrarExtrato */

package abstraction;
import java.util.ArrayList;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Iterator;

    // Classe
public class ContaBancaria {
    private String numeroConta;
    private double saldo;
    private String titular;
    private double limiteSaque;
    private List<String> historicoTransacao;

    // Constructor
    public ContaBancaria(String numeroConta, String titular, double limiteSaque){
        // Validações
        if (numeroConta == null || numeroConta.isEmpty()) {
            throw new IllegalArgumentException("Não pode ser vazio.");
        }
        if (titular == null || titular.isEmpty()) {
            throw new IllegalArgumentException("Não pode ser vazio.");
        }
        if (limiteSaque < 0) {
            throw new IllegalArgumentException("Limite deve ser maior que zero.");
        }
        // Inicializadores
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0.0;
        this.limiteSaque = limiteSaque;
        this.historicoTransacao = new ArrayList<>(); // Inicializa o histórico de transações como uma lista vazia
    }

    // Getters
    public String getNumeroConta() {
        return this.numeroConta;
    }
    public double getSaldo() {
        return this.saldo;
    }
    public String getTitular() {
        return this.titular;
    }
    public double getLimiteSaque() {
        return this.limiteSaque;
    }

    // Depositar, sacar, transferir...
    public void depositar(double valor) {
        // Validação
        if (valor <= 0.0) {
            throw new IllegalArgumentException("O valor deve ser maior que zero!");
        }
        this.saldo+= valor;
        this.registrarTransacao("Depósito de R$ " + valor + " realizado com sucesso");
    }

    public void sacar(double valor) throws Exception { /* Eu digo que existem excessões*/
        // Validações
        if (valor <= 0) {
            throw new IllegalArgumentException("O valor deve ser maior que zero!");
        }
        if(valor > this.saldo) {
            throw new Exception("Saldo insuficiente, trabalhe mais.");
        }
        if (valor > this.limiteSaque) {
            throw new Exception("Limite de saque diário insuficiente.");
        }
        this.saldo -= valor;
        this.registrarTransacao("Saque de R$ " + valor + " realizado com sucesso");
    }

    public void transferir(double valor, ContaBancaria contaDestino) throws Exception {
        if (valor <= 0.0) {
            throw new IllegalArgumentException("O valor deve ser maior que zero!");
        }
        if(valor > this.saldo) {
            throw new Exception("Saldo insuficiente, trabalhe mais.");
        }
        this.saldo -= valor;
        contaDestino.depositar(valor);
        this.registrarTransacao("Transferência de R$ " + valor + " para a conta de "+ contaDestino.getNumeroConta() + " realizada com sucesso");
    }

    // Exibir o extrato
    public void exibirExtrato() {
        System.out.println("Extrato da conta: " + this.getNumeroConta());
        Iterator<String> iterator = this.historicoTransacao.iterator();

        while (iterator.hasNext()) {
            String transacao = iterator.next();
            System.out.println(transacao);
        }

        System.out.println("Saldo atual é: R$ " + this.getSaldo());
    }

    // Registrar data e valor da transação
    private void registrarTransacao(String descricao) {
        LocalDateTime data = LocalDateTime.now(); // Captura a data e hora atuais
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"); // Formato desejado
        String dataFormatada = data.format(formatter); // Formata a data e hora

        StringBuilder sb = new StringBuilder(); // Cria um StringBuilder para concatenar as strings
        sb.append(dataFormatada).append(" - ").append(descricao); // Concatena a data e a descrição
        this.historicoTransacao.add(sb.toString()); // Adiciona a descrição da transação ao histórico
    }
}
