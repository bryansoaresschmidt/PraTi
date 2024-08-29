public class Main {
    public static void main(String[] args) {
//        // Manipulação de arrays
//
        int[] vetor = new int[5]; // Declara um array de inteiros com tamanho 5.
        vetor[0] = 10; // Atribui o valor 10 à primeira posição do array.
        vetor[1] = 20; // Atribui o valor 20 à segunda posição do array.
        vetor[2] = 30; // Atribui o valor 30 à terceira posição do array.
        vetor[3] = 40; // Atribui o valor 40 à quarta posição do array.
        vetor[4] = 50; // Atribui o valor 50 à quinta posição do array.

//        // Imprimindo elementos do array
//        System.out.println("Elementos do array 'vetor': ");
//        for (int j = 0; j < vetor.length; j++) { // Itera sobre o array.
//            System.out.println("Elemento na posição " + j + ": " + vetor[j]); // Imprime cada elemento.
//        }
//
//        // Soma dos elementos do array
//        int soma = 0; // Inicializa a variável para armazenar a soma.
//        for (int j = 0; j < vetor.length; j++) { // Itera sobre o array.
//            soma += vetor[j]; // Soma cada elemento à variável soma.
//        }
//        System.out.println("Soma do array 'vetor': " + soma); // Imprime a soma dos elementos.
//
//        // Encontrando o valor máximo no array
//        int max = vetor[0]; // Assume que o primeiro elemento é o maior.
//        for (int value : vetor) { // Itera sobre cada elemento do array.
//            if (value > max) { // Compara com o valor atual máximo.
//                max = value; // Atualiza o valor máximo, se necessário.
//            }
//        }
//        System.out.println("Valor máximo no array: " + max); // Imprime o valor máximo.
//
//        // Revertendo o array
//        int start = 0;
//        int end = vetor.length - 1;
//        while (start < end) {
//            int temp = vetor[start];
//            vetor[start] = vetor[end];
//            vetor[end] = temp;
//            start++;
//            end--;
//            System.out.println("Array 'vetor' invertido: ");
//            for (int j = 0; j < vetor.length; j++) { // Itera sobre o array.
//                System.out.println("Element " + vetor[j] + " está na posição: " + j);
//            }
//        }
//
//        // Adicionando um elemento ao array
//        int[] newArray = new int[vetor.length + 1]; // Cria um novo array com espaço adicional.
//        for (int i = 0; i < vetor.length; i++) {    // Itera sobre o array original.
//            newArray[i] = vetor[i];                 // Copia os elementos para o novo array.
//        }
//        newArray[vetor.length] = 2; // Adiciona o novo elemento no final do array.
//
//        // Pesquisar um elemento
//        for (int i = 0; i <vetor.length; i++) {
//            if (vetor[i] == 20) {
//                System.out.print("20 está na posição: " + (i + 1));
//            }
//        }

        // Remover um elemento
        int lengthNewArray = 0;
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] != 10) {
                lengthNewArray++;
            }
        }

        int index = 0;
        int[] newArray = new int[lengthNewArray];
        for( int i = 0; i < vetor.length; i++) {
            if (vetor[i] != 10) {
            newArray[index] = vetor[i];
            index++;
            }
        }

        System.out.println("Array após remoção: ");
        for (int j = 0; j < newArray.length; j++) { // Itera sobre o novo array.
            System.out.println("Elemento na posição " + j + ": " + newArray[j]); // Imprime cada elemento.
        }

    }
}