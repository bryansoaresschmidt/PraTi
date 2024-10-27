//  JwtAuthenticationFilter: filtro personalizado que intercepta cada requisição HTTP para verificar se há um token JWT válido no cabeçalho de autorização
//  se houver um Token válido, autentica o usuário no contexto de segurança do Spring Security.

package com.example.api_user.security;

import com.example.api_user.service.CustomUserDetailsService; // Importa o serviço personalizado que carrega os detalhes do usuário. Esse serviço é utilizado para buscar as informações do usuário no banco de dados com base no nome de usuário.

// Importa classes para manipulação de requisições e respostas HTTP em um ambiente de servlet.
import jakarta.servlet.FilterChain; // Representa a cadeia de filtros que a requisição precisa percorrer.
import jakarta.servlet.ServletException; // Exceção que pode ser lançada durante o processamento de requisições.
import jakarta.servlet.http.HttpServletRequest; // Representa a requisição HTTP.
import jakarta.servlet.http.HttpServletResponse; // Representa a resposta HTTP.

import org.springframework.context.annotation.Configuration; // Importa o pacote de configuração do Spring. @Configuration: serve para registrar a classe no contexto do Spring.

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; // Importa classes do Spring Security relacionadas à autenticação. UsernamePasswordAuthenticationToken: token que o Spring Security usa para autenticar o usuário baseado em nome de usuário e senha.

import org.springframework.security.core.context.SecurityContextHolder; // Importa o SecurityContextHolder, que armazena as informações de segurança (autenticação) durante a requisição atual.

import org.springframework.security.core.userdetails.UserDetails; // Importa o UserDetails, que contém as informações sobre o usuário autenticado.

import org.springframework.security.web.authentication.WebAuthenticationDetailsSource; // Importa uma classe que captura detalhes da autenticação da requisição (como o IP, navegador, etc.).

import org.springframework.web.filter.OncePerRequestFilter; // Importa a classe que permite a criação de filtros para serem aplicados em cada requisição. Garante que o filtro será executado apenas uma vez por requisição.

import java.io.IOException; // Importa a classe IOException, lançada caso ocorra um erro de I/O durante o processamento da requisição.

@Configuration // @Configuration: Indica que esta classe faz parte da configuração do Spring. Isso registra a classe como um bean gerenciado pelo Spring.
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider; // Dependências injetadas por meio do construtor para manipulação de tokens e carregamento de usuários.
    private final CustomUserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService){
        this.jwtTokenProvider = jwtTokenProvider;           // jwtTokenProvider: Responsável por gerar, validar e extrair informações de tokens JWT.
        this.userDetailsService = userDetailsService;       // userDetailsService: Serviço que carrega os detalhes do usuário a partir do banco de dados.
    }

    @Override // Sobrescreve o metodo doFilterInternal para aplicar a lógica do filtro em cada requisição HTTP. Será chamado automaticamente para cada requisição que chega ao servidor.
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    )
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");         // Extrai o valor do cabeçalho/header "Authorization" da requisição HTTP.

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {     // Se o cabeçalho "Authorization" estiver ausente ou não começar com "Bearer ", o filtro não tenta autenticar. A requisição continua sem autenticação, pois não há um token válido.
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authHeader.substring(7); // Remove a parte "Bearer " do token e mantém apenas o JWT em si.

        String username = jwtTokenProvider.extractUsername(jwt); // Extrai o nome de usuário (username) do token JWT usando o jwtTokenProvider.

        UserDetails userDetails = null; // Inicializa o objeto UserDetails como null.

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) { // Se o nome de usuário for válido e não houver autenticação já ativa no contexto de segurança...
            userDetails = userDetailsService.loadUserByUsername(username);     // Carrega os detalhes do usuário a partir do nome de usuário extraído do token.
        }

        UsernamePasswordAuthenticationToken authenticationToken = null;
        if (jwtTokenProvider.isTokenValid(jwt, userDetails)) { // Verifica se o token é válido e se o usuário carregado é o correto. Se for válido, criamos um UsernamePasswordAuthenticationToken.
            authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // Configura os detalhes da autenticação (IP, informações da requisição, etc.).
        }

        SecurityContextHolder.getContext().setAuthentication(authenticationToken); // Define o objeto de autenticação no SecurityContext do Spring Security. Isso autentica o usuário para o contexto da requisição atual.

        filterChain.doFilter(request, response); // Continua o processamento da requisição, passando para o próximo filtro na cadeia de filtros.
    }
}