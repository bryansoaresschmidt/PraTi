package list;

import java.util.ArrayList;

public class ArrayLista {
    public static void main(String[] args) {

    ArrayList<Integer> list = new ArrayList<>();

        list.add(89);
        list.add(99);
        list.add(100);

        System.out.println(list.get(2));

        list.remove(1);
        System.out.println(list.get(1));
}
    }
