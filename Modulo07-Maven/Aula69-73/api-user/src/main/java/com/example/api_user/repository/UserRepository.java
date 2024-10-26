package com.example.api_user.repository;

import org.springframework.data.jpa.repository.JpaRepository; // Interface que fornece métodos CRUD e mais para trabalhar com persistência JPA.
import com.example.api_user.model.User; // A classe modelo que representa a entidade User no banco de dados.
import org.springframework.stereotype.Repository; // Anotação que marca esta interface como um repositório (repositórios são componentes que fazem a conexão entre a aplicação e o banco de dados), uma especialização de um componente Spring.

@Repository // @Repository: Marca esta interface como um repositório do Spring. A anotação `@Repository` é uma especialização da anotação `@Component`, e além de registrar o bean (bean é qualquer objeto instanciado, configurado e mantido pelo Spring, ajudando a gerenciar a complexidade de dependências e facilitar o desenvolvimento modular) no Spring, também transforma exceções específicas do banco de dados em exceções de persistência do Spring (como `DataAccessException`).
public interface UserRepository extends JpaRepository<User, Integer> {

    // Interface JpaRepository: JpaRepository é uma interface do Spring Data JPA que fornece metodos prontos para realizar operações básicas de CRUD (Create, Read, Update, Delete) e mais. Ao estender JpaRepository, não precisamos implementar manualmente os metodos para salvar, deletar ou buscar dados no banco de dados. Esta interface é genérica e recebe dois parâmetros: O tipo da entidade com a qual trabalhará, neste caso, `User`. O tipo da chave primária (ID) da entidade, neste caso, `Integer`.

    User findByUsername(String username); // Metodo findByUsername: Este metodo personalizado permite que o Spring gere uma query automaticamente para buscar um usuário pelo nome de usuário. Com base no nome do metodo, o Spring gera uma query SQL do tipo `SELECT * FROM user WHERE username = ?`. Elimina a necessidade de escrever SQL manualmente.
}