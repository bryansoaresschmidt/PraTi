package com.example.api_user.service;

// Importações necessárias para acessar o repositório de usuários e serviços de segurança
import com.example.api_user.model.User; // Classe modelo que representa um usuário no banco de dados.
import com.example.api_user.repository.UserRepository; // Interface para realizar operações de banco de dados com a entidade User.
import org.springframework.beans.factory.annotation.Autowired; // Injeta automaticamente dependências (beans) do Spring.
import org.springframework.security.core.userdetails.UserDetails; // Interface que representa os detalhes de um usuário para autenticação.
import org.springframework.security.core.userdetails.UserDetailsService; // Interface que define um serviço que carrega dados do usuário para autenticação.
import org.springframework.security.core.userdetails.UsernameNotFoundException; // Exceção lançada quando o nome de usuário não é encontrado.
import org.springframework.stereotype.Service; // Anotação que marca a classe como um serviço gerenciado pelo Spring.

@Service // @Service: Indica que esta classe é um **serviço** do Spring, que contém lógica de negócios. A anotação `@Service` registra a classe como um bean no contexto do Spring, o que significa que o Spring gerencia seu ciclo de vida. Serviços geralmente contêm lógica de negócios e podem ser reutilizados e injetados em outras partes da aplicação.
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired // @Autowired: Injeta automaticamente a dependência `UserRepository`, que permite acessar e realizar operações de banco de dados. O Spring gerencia a instância de `UserRepository` e injeta ela automaticamente nesta classe quando for necessário.
    private UserRepository userRepository;

    @Override // Sobrescreve o metodo `loadUserByUsername` da interface `UserDetailsService`. Esse metodo é usado pelo Spring Security para buscar os dados do usuário no banco de dados com base no nome de usuário fornecido durante a autenticação.
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username); // Busca o usuário no banco de dados pelo nome de usuário usando o UserRepository. O metodo `findByUsername` deve ser definido no `UserRepository` para buscar o usuário pelo campo `username`.

        if (user == null) { // Se o usuário não for encontrado no banco de dados, lança a exceção `UsernameNotFoundException`. Isso indica ao Spring Security que o nome de usuário fornecido não é válido.
            throw new UsernameNotFoundException("Usuário não encontrado: " + username);
        }

        return org.springframework.security.core.userdetails.User // Se o usuário for encontrado, retorna uma instância de `UserDetails`, que o Spring Security usa para autenticar o usuário. O objeto `UserDetails` é criado usando a classe auxiliar `User.withUsername()` do Spring Security. A senha e o nome de usuário do banco de dados são passados para o `UserDetails`.
                .withUsername(user.getUsername()) // Define o nome de usuário
                .password(user.getPassword()) // Define a senha (criptografada) do usuário
                .build(); // Constrói o objeto UserDetails
    }
}
