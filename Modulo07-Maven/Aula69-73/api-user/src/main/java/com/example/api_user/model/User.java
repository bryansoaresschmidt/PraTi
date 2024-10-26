// Classe com todas as informações de fato do nosso usuário

package com.example.api_user.model;

import jakarta.persistence.*; // Importa todas as anotações necessárias para JPA (Java Persistence API), como @Entity, @Id, @GeneratedValue, etc.
import lombok.Data;

@Entity                     // @Entity: Marca a classe como uma **entidade JPA**, o que significa que ela será mapeada para uma tabela no banco de dados. O JPA (Java Persistence API) é um padrão para mapeamento objeto-relacional, permitindo que as classes Java sejam persistidas em um banco de dados relacional. Ao usar @Entity, o Spring Data JPA trata esta classe como um objeto persistente, o que permite realizar operações de CRUD automaticamente.
@Data                       // @Data (Lombok): Faz parte da biblioteca Lombok, que simplifica o código eliminando a necessidade de escrever getters, setters, toString(), .equals() e hashCode(): Para comparar objetos de maneira eficiente, RequiredArgsConstructor: Um construtor para os campos obrigatórios.
@Table(name = "users")      // Define o nome da tabela no banco de dados que será associada à entidade(`users`). Sem a anotação @Table, o JPA assume que o nome da tabela é o mesmo da classe, mas com a anotação, você pode personalizar o nome da tabela.
public class User {
    @Id     // @Id: Marca o campo `id` como a chave primária da tabela no banco de dados.
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // @GeneratedValue: Especifica que o valor da chave primária será gerado automaticamente pelo banco de dados. `strategy = GenerationType.IDENTITY` indica que o banco de dados será responsável por gerar o valor único para a chave primária (geralmente AUTO_INCREMENT)
    private int id; // Campo que armazena o ID único de cada usuário.

    @Column(nullable = false)
    private String username; // Nome de usuário, que é obrigatório.

    @Column(nullable = false)
    private String password; // Senha do usuário, que é obrigatória.

    @Column(nullable = false)
    private String email; // Endereço de e-mail do usuário, que é obrigatório.

    @Column(nullable = false)
    private String role; // Papel ou função do usuário na aplicação, como "ROLE_USER" ou "ROLE_ADMIN".
}