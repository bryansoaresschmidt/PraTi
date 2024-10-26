// Autenticar as credenciais do usuário (usuário e senha).
// Gerar um token JWT (JSON Web Token) para o usuário autenticado.
// Carregar as informações do usuário para criar o token JWT e possivelmente usá-las em futuras requisições.

package com.example.api_user.controller;

import ch.qos.logback.core.net.SMTPAppenderBase;
import com.example.api_user.dto.LoginDTO;
import com.example.api_user.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;  // AuthenticationManager: responsável por gerenciar o processo de autenticação. Dependências injetadas por meio do construtor.
    private final JwtTokenProvider jwtTokenProvider;            // JwtTokenProvider: responsável por gerar tokens JWT para os usuários autenticados.
    private final UserDetailsService userDetailsService;        // UserDetailsService: interface do Spring Security que carrega detalhes de usuários.

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {  // Construtor que recebe as dependências como parâmetros. Essas dependências são injetadas pelo Spring.
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login") // @PostMapping("/login"): Mapeia uma requisição HTTP POST para a URL "/auth/login". O metodo `login` será chamado quando o cliente enviar uma requisição POST para esta URL.
    public String login(@RequestBody LoginDTO loginDTO) { // @RequestBody: O Spring converte o corpo da requisição (que estará em formato JSON) em um objeto LoginDTO. O corpo da requisição deve conter o nome de usuário (username) e a senha (password), que serão extraídos para o objeto LoginDTO.
        try {
            Authentication authentication = authenticationManager.authenticate( // AuthenticationManager: realiza a autenticação baseada no nome de usuário e senha. A autenticação é feita criando um UsernamePasswordAuthenticationToken com as credenciais fornecidas (username e password).
                    new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));

            UserDetails user = (UserDetails) authentication.getPrincipal(); // Se a autenticação for bem-sucedida, o objeto `authentication` conterá as informações do usuário autenticado. O metodo `getPrincipal()` retorna o objeto principal da autenticação, que no caso é um `UserDetails` (detalhes do usuário autenticado).

            return jwtTokenProvider.generateToken(user);  // O JwtTokenProvider gera um token JWT usando as informações do usuário autenticado.

        } catch (AuthenticationException error) {
            throw new RuntimeException("Invalid Credentials"); // Se houver uma exceção de autenticação, significa que as credenciais são inválidas. A exceção será capturada e uma RuntimeException será lançada com a mensagem "Invalid Credentials".
        }
    }
}