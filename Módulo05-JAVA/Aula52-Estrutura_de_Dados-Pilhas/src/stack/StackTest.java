package stack;

public class StackTest {
    public static void main(String[] args) {
        StackExample stack = new StackExample();

        stack.push(10);
        stack.push(100);
        stack.push(1000);

        System.out.println(stack.peek());
        System.out.println(stack.pop());

    }
}
