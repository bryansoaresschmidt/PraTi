package stack;

public class StackOverflowExample {

    public static void recursiveCall() {
        recursiveCall(); // A função chama a si mesma indefinidamente
        System.out.println("Chamando recursivamente");
    }


    public static void main(String[] args) {
        try {
            recursiveCall();
        } catch (StackOverflowError error) {
            System.err.println("StackOverflow detectado!" + error);
        }
    }
}
