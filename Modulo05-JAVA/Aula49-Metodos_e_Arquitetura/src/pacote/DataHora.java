package pacote;
import java.time.LocalDate;
import java.time.LocalTime;

public class DataHora {
    public static void main(String[] args) {
    LocalDate hoje = LocalDate.now();
    System.out.println(hoje);

    LocalTime agora = LocalTime.now();
    System.out.println(agora);
    }
}
