import util.Utilitarios;

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
//
//        // Remover um elemento
//        int lengthNewArray = 0;
//        for (int i = 0; i < vetor.length; i++) {
//            if (vetor[i] != 10) {
//                lengthNewArray++;
//            }
//        }
//
//        int index = 0;
//        int[] newArray = new int[lengthNewArray];
//        for( int i = 0; i < vetor.length; i++) {
//            if (vetor[i] != 10) {
//            newArray[index] = vetor[i];
//            index++;
//            }
//        }
//
//        System.out.println("Array após remoção: ");
//        for (int j = 0; j < newArray.length; j++) { // Itera sobre o novo array.
//            System.out.println("Elemento na posição " + j + ": " + newArray[j]); // Imprime cada elemento.
//        }


        // Matriz bidimenssional
        int[][] matrix = {
                {10, 30, 40},
                {30, 50, 10},
                {65, 70, 80}
        };
//                for(int[] row : matrix) {
//                    for (int value : row) {
//
//                    };
//                    System.out.println();
//                };
//
//        // Calcular diagonal primária e secundária
//        System.out.println("Os números das diagonal primária são: ");
//        for ( int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j < matrix[i].length; j++) {
//                if (i == j) {
//                    System.out.print(matrix[i][j] + ", ");
//                };
//            };
//        };
//
//        System.out.println();
//
//        System.out.println("Os números das diagonal secundária são: ");
//        for (int i = 0; i < matrix.length; i++) {
//            int j = matrix[i].length - 1 - i;
//                    System.out.print(matrix[i][j] + ", ");
//
//        }
//
//        // Calcular SOMA da diagonal primária e secundária
//        int pri = 0;
//        int sec = 0;
//        for ( int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j < matrix[i].length; j++) {
//                if (i == j) {
//                    pri += matrix[i][j];
//                };
//            };
//        };
//        System.out.println("A soma dos números das diagonal primária são: " + pri);
//
//
//        for (int i = 0; i < matrix.length; i++) {
//            int j = matrix[i].length - 1 - i;
//                    sec += matrix[i][j];
//        }
//        System.out.println("A soma dos números das diagonal secundária são: " + sec);
//
//
//        int n = matrix.length; // Obtém o tamanho da matriz (n x n).
//        int[][] rotacionada = new int[n][n]; // Cria uma matriz para armazenar a rotação.
//        for (int j = 0; j < n; j++) { // Itera sobre as linhas da matriz.
//            for (int k = 0; k < n; k++) { // Itera sobre as colunas da matriz.
//                rotacionada[k][n - 1 - j] = matrix[j][k]; // Rotaciona a matriz em 90 graus.
//            }
//        }
//        System.out.println("Matriz rotacionada 90 graus:");
//        for (int j = 0; j < n; j++) { // Itera sobre a matriz rotacionada.
//            for (int k = 0; k < n; k++) { // Itera sobre as colunas.
//                System.out.print(rotacionada[j][k] + " "); // Imprime cada elemento.
//            }
//            System.out.println(); // Nova linha após cada linha da matriz.
//        }
//
//        int value = 10;
//        for ( int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j < matrix[i].length; j++) {
//                if (matrix[i][j] == value) {
//                    System.out.println("Valor " + value + " encontrado nas posições [" + i + "][" + j + "] do array!");
//                }
//            }
//        }

        /*
         * [modificador] tipoRetorno nomeDoMétodo ([paramêtros]){
         *   bloco de código!
         * }
         * */

        // Instancia um objeto da classe Geometria
        Geometria geo = new Geometria();

        // Instancia um objeto da classe ContaBancaria
        ContaBancaria contaBancaria = new ContaBancaria();

        // Chama o método depositar da classe ContaBancaria, adicionando 1000 ao saldo
        contaBancaria.depositar(1000);

        // Chama o método consultaSaldo da classe ContaBancaria e imprime o saldo atual
        System.out.println(contaBancaria.consultaSaldo());

        // Chama o método calcularAreaRetangulo da classe Geometria, passando os valores 5.0 e 3.0 como parâmetros, e armazena o resultado em areaRetangulo
        double areaRetangulo = geo.calcularAreaRetangulo(5.0, 3.0);

        // Chama o método multiplicar da instância geo da classe Geometria, passando os valores 5 e 3 como parâmetros, e imprime o resultado
        System.out.println(geo.multiplicar(5, 3));

        // Chama o método estático multiplicar da classe Geometria, passando os valores 10 e 10 como parâmetros, e imprime o resultado
        System.out.println(Geometria.multiplicar(10, 10));

        // Imprime o valor da área do retângulo calculado anteriormente
        System.out.println(areaRetangulo);

        // Chama o método estático print da classe Utilitarios, passando a string "Olá, mundo!" como parâmetro
        Utilitarios.print("Olá, mundo!");

    }
}