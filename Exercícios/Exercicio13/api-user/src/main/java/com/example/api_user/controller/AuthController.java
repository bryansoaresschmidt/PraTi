package com.example.api_user.controller;

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
    private final AuthenticationManager authenticationManager;     // AuthenticationManager é o responsável por gerenciar o processo de autenticação.
    private final JwtTokenProvider jwtTokenProvider;    // JwtTokenProvider é responsável por gerar tokens JWT para os usuários autenticados.
    private final UserDetailsService userDetailsService;     // UserDetailsService é uma interface do Spring Security que fornece a funcionalidade para carregar detalhes de usuários.

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {      // Construtor que recebe as dependências como parâmetros. Essas dependências são injetadas pelo Spring.
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")// @PostMapping("/login"): Mapeia uma requisição HTTP POST para a URL "/auth/login". O método `login` será chamado quando o cliente enviar uma requisição POST para esta URL.
    public String login(@RequestBody LoginDTO loginDTO) {   //  @RequestBody: O corpo da requisição deve conter o nome de usuário (username) e a senha (password), que serão extraídos para o objeto LoginDTO.
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginDTO.getUsername(), loginDTO.getPassword()
                    )
            );// O AuthenticationManager realiza a autenticação baseada no nome de usuário e senha. A autenticação é feita criando um UsernamePasswordAuthenticationToken com as credenciais fornecidas (username e password).

            UserDetails user = (UserDetails) authentication.getPrincipal(); // Se a autenticação for bem-sucedida, o objeto `authentication` conterá as informações do usuário autenticado. O método `getPrincipal()` retorna o objeto principal da autenticação, que no caso é um `UserDetails` (detalhes do usuário autenticado).

            String token = jwtTokenProvider.generateToken(user);    // O JwtTokenProvider gera um token JWT usando as informações do usuário autenticado.

            return token;

        } catch (AuthenticationException error) {
            throw new RuntimeException("Invalid Credentials");      // Se houver uma exceção de autenticação, significa que as credenciais são inválidas. A exceção será capturada e uma RuntimeException será lançada com a mensagem "Invalid Credentials".
        }
    }
}
