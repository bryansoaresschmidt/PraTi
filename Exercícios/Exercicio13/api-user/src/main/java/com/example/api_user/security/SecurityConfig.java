package com.example.api_user.security;

// Importações necessárias para configurar a segurança e autenticação
import com.example.api_user.service.CustomUserDetailsService; // Serviço personalizado para carregar os detalhes do usuário.
import org.springframework.context.annotation.Bean; // Define que um método cria um bean gerenciado pelo Spring.
import org.springframework.context.annotation.Configuration; // Marca a classe como uma classe de configuração do Spring.
import org.springframework.security.authentication.AuthenticationManager; // Gerencia o processo de autenticação no Spring Security.
import org.springframework.security.authentication.AuthenticationProvider; // Interface que autentica um objeto com base em uma estratégia de autenticação.
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; // Implementa um AuthenticationProvider usando o padrão DAO (Data Access Object).
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; // Permite configurar a autenticação.
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Permite configurar a segurança da aplicação, como endpoints protegidos.
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; // Habilita a segurança baseada em web no Spring Security.
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Classe para criptografar senhas usando o algoritmo BCrypt.
import org.springframework.security.crypto.password.PasswordEncoder; // Interface usada para criptografar e verificar senhas.
//import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter; // Converte tokens JWT em autenticações Spring Security.
//import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter; // Converte claims JWT em autoridades do Spring Security.
import org.springframework.security.web.SecurityFilterChain; // Define a cadeia de filtros de segurança no Spring Security.
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; // Filtro que processa a autenticação baseada em nome de usuário e senha.

@Configuration// @Configuration: são tratadas como fontes de definições de beans, ou seja, é onde o Spring procura por métodos que criam e configuram beans. No contexto do Spring, "bean" refere-se a objetos que são gerenciados pelo contêiner de IoC (Inversão de Controle), significando que o Spring controla o ciclo de vida desses objetos.
@EnableWebSecurity // @EnableWebSecurity: Habilita o **Spring Security** para aplicar segurança em toda a aplicação baseada na web. É necessário em classes que configuram segurança, especialmente se você estiver sobrescrevendo as configurações padrão. Essa anotação automaticamente cria as estruturas básicas de segurança e é o ponto de entrada para customizações de segurança (como autenticação e autorização).
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter; // Filtro de autenticação JWT para verificar tokens em cada requisição.
    private final CustomUserDetailsService customUserDetailsService; // Serviço personalizado que carrega os detalhes do usuário a partir do banco de dados.

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter, CustomUserDetailsService customUserDetailsService) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean // @Bean: Define que este método cria um **bean** gerenciado pelo Spring. Um **bean** é um objeto criado, configurado e gerenciado pelo Spring, controlando seu ciclo de vida e disponibilizando-o para ser injetado em outras partes da aplicação. Métodos anotados com @Bean geralmente retornam instâncias de objetos que o Spring deve gerenciar.
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager(); // O AuthenticationManager gerencia o processo de autenticação. Ele é configurado com base na configuração definida em AuthenticationConfiguration.
    }

    @Bean // Cria um bean para o PasswordEncoder. O PasswordEncoder é usado para criptografar e verificar senhas.
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Retorna uma instância de BCryptPasswordEncoder, que usa o algoritmo BCrypt para criptografar senhas. **BCrypt** é um dos algoritmos mais seguros para hash de senhas, pois é resistente a ataques de força bruta e tem um fator de complexidade ajustável.
    }

    @Bean // Cria um bean para o AuthenticationProvider. O AuthenticationProvider autentica o usuário com base nas informações do banco de dados (DAO).
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(); // DaoAuthenticationProvider: Provê autenticação baseada em dados persistidos no banco (usando o padrão DAO).

        authProvider.setUserDetailsService(customUserDetailsService);         // Configura o UserDetailsService personalizado para carregar os detalhes do usuário a partir do banco de dados.

        authProvider.setPasswordEncoder(passwordEncoder()); // Configura o PasswordEncoder para criptografar as senhas durante a autenticação.

        return authProvider;
    }

    @Bean // Método que configura a cadeia de filtros de segurança. O SecurityFilterChain define a sequência de filtros de segurança a serem aplicados em todas as requisições HTTP. Cada requisição HTTP passa por uma cadeia de filtros que determinam se a requisição deve ser autenticada ou autorizada.
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http // Configuração da segurança HTTP usando o HttpSecurity. O HttpSecurity permite personalizar a configuração de segurança baseada na web.
                .csrf(csrf -> csrf.disable()) // CSRF (Cross-Site Request Forgery): é uma vulnerabilidade que permite que um atacante faça requisições maliciosas em nome de um usuário autenticado sem o seu consentimento. No entanto, o CSRF geralmente não é necessário quando usamos tokens JWT, porque a proteção CSRF é projetada principalmente para sessões baseadas em cookies. Como a autenticação com JWT usa um token que é enviado explicitamente pelo cliente em cada requisição (geralmente no cabeçalho Authorization), o CSRF pode ser desabilitado.
                .authorizeHttpRequests(auth -> auth // Define as regras de autorização para as requisições HTTP.
                        .requestMatchers("/auth/**").permitAll() // Permite todas as requisições para o caminho "/auth/**" (rota de autenticação).
                        .requestMatchers("/api/**").authenticated() // Requere autenticação para todas as requisições que começam com "/api/**". **authenticated()** significa que apenas usuários autenticados poderão acessar as rotas "/api/**".
                        .anyRequest().authenticated()) // Qualquer outra requisição precisa estar autenticada.
                .authenticationProvider(authenticationProvider()) // Configura o provider de autenticação (DaoAuthenticationProvider) para ser usado no processo de autenticação.
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Adiciona o filtro de autenticação JWT antes do UsernamePasswordAuthenticationFilter. Isso garante que as requisições sejam verificadas quanto à validade do token JWT antes da autenticação por nome de usuário/senha.

        return http.build(); // Retorna o HttpSecurity configurado como um SecurityFilterChain.
    }

//    @Bean // Método que configura o JwtAuthenticationConverter. O JwtAuthenticationConverter é responsável por converter o token JWT em uma autenticação Spring Security.
//    public JwtAuthenticationConverter jwtAuthenticationConverter() {
//        JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter(); // Converte as claims de um JWT em autoridades (permissões) do Spring Security.
//
//        grantedAuthoritiesConverter.setAuthoritiesClaimName("role"); // Define o nome da claim onde os papéis (roles) dos usuários são armazenados no JWT. Neste caso, a claim "role" contém os papéis do usuário (por exemplo, ROLE_USER ou ROLE_ADMIN).
//
//        grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_"); // Define o prefixo para as autoridades. Por padrão, todas as autoridades terão o prefixo "ROLE_".
//
//        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter(); // Cria um JwtAuthenticationConverter e configura o JwtGrantedAuthoritiesConverter.
//        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);
//
//        return jwtAuthenticationConverter; // Retorna o JwtAuthenticationConverter configurado.
//    }
}