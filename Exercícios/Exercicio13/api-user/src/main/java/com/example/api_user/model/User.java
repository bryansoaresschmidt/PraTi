package com.example.api_user.model;

import jakarta.persistence.*; // Importa todas as anotações necessárias para JPA (Java Persistence API), como @Entity, @Id, @GeneratedValue, etc.
import lombok.Data; // Importa a anotação @Data do Lombok, que gera automaticamente getters, setters, equals, hashCode, toString e outros métodos úteis.

@Data
@Entity // Anotação @Entity: Marca a classe como uma **entidade JPA**, o que significa que ela será mapeada para uma tabela no banco de dados. O JPA (Java Persistence API) é um padrão para mapeamento objeto-relacional, permitindo que as classes Java sejam persistidas em um banco de dados relacional. Ao usar @Entity, o Spring Data JPA trata esta classe como um objeto persistente, o que permite realizar operações de CRUD automaticamente.
@Table(name = "users") // Anotação @Table: Define o nome da tabela no banco de dados que será associada à entidade. Neste caso, a tabela será chamada de `users`. Sem a anotação @Table, o JPA assume que o nome da tabela é o mesmo da classe, mas com a anotação, você pode personalizar o nome da tabela.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // @GeneratedValue: Especifica que o valor da chave primária será gerado automaticamente pelo banco de dados. O parâmetro `strategy = GenerationType.IDENTITY` indica que o banco de dados será responsável por gerar o valor único para a chave primária (geralmente usado com colunas AUTO_INCREMENT).
    private int id; // Campo que armazena o ID único de cada usuário.

    @Column(nullable = false, unique = true)     // @Column: Define uma coluna no banco de dados associada ao campo `username`. O parâmetro `nullable = false` significa que este campo não pode ser nulo no banco de dados, ou seja, é obrigatório.
    private String username; // Nome de usuário, que é obrigatório.

    @Column(nullable = false)
    private String password; // Senha do usuário, que é obrigatória.

    @Column(nullable = false, unique = true)
    private String email; // Endereço de e-mail do usuário, que é obrigatório.

    @Column(nullable = false)
    private String role; // Papel ou função do usuário na aplicação, como "ROLE_USER" ou "ROLE_ADMIN".
}