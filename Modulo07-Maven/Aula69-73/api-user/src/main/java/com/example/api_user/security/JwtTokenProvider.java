// JwtTokenProvider gerar, validar e extrair informações de tokens JWT.

package com.example.api_user.security;

// Importa classes do io.jsonwebtoken, que é uma biblioteca usada para gerar e analisar tokens JWT.
import io.jsonwebtoken.Claims; // Representa as "claims" (declarações) de um token JWT. Isso inclui informações como o emissor, o assunto, a data de expiração, etc.
import io.jsonwebtoken.Jwts; // Classe usada para criar, analisar e validar tokens JWT.
import io.jsonwebtoken.SignatureAlgorithm; // Enum que define o algoritmo de assinatura usado para criptografar o token JWT (neste caso, HS256).
import io.jsonwebtoken.security.Keys; // Bryan: import pra assinar o token
import java.security.Key; // Bryan: import pra assinar o token

// Importa classes do Spring para gerenciar propriedades e autenticação.
import org.springframework.beans.factory.annotation.Value; // Permite injetar valores de propriedades do arquivo application.properties diretamente em variáveis de classe.
import org.springframework.security.core.userdetails.User; // Representa um usuário autenticado no Spring Security.
import org.springframework.security.core.userdetails.UserDetails; // Interface que contém informações sobre o usuário, como nome de usuário e permissões.

// Marca a classe como um bean Spring que será gerenciado pelo contêiner de IoC (Inversão de Controle).
import org.springframework.stereotype.Component;

// Importa classes Java para manipulação de datas, mapas e funções.
import java.util.Date; // Classe usada para representar uma data no Java.
import java.util.HashMap; // Implementação da interface Map, usada para armazenar pares de chave/valor.
import java.util.Map; // Interface que define um mapa (associação de chave-valor) no Java.
import java.util.function.Function; // Interface funcional que aplica uma transformação a um dado e retorna um resultado.

@Component // @Component: Indica que essa classe é um bean Spring e será gerenciada pelo contêiner de IoC. Permite que o Spring injete essa classe em outros componentes ou serviços.
public class JwtTokenProvider {
    @Value("${jwt.secret}") // Injeção da chave secreta usada para assinar o token JWT. O valor é lido diretamente do arquivo application.properties pela anotação @Value.
    private String secretKey;

    public String extractUsername(String token) { // Metodo para extrair o nome de usuário (subject) do token JWT. Utiliza o método extractClaim para pegar a "claim" que contém o subject (nome de usuário).
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) { // Metodo genérico para extrair qualquer "claim" do token. O parâmetro claimsResolver é uma função que define qual "claim" será extraída.
        final Claims claims = extractAllClaims(token); // Extrai todas as "claims" do token e aplica a função claimsResolver.
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) { // Extrai todas as "claims" de um token JWT. Esse metodo analisa o token, valida a assinatura com a chave secreta e retorna o corpo do JWT, que contém as claims.
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes()); // Converte secretKey para um objeto key
        try {
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody(); // Usa o parser do Jwts para decodificar e verificar o token JWT, validando a assinatura com a chave (secreta).
        } catch (Exception e) {
            throw new IllegalArgumentException("Token JWT inválido ou expirado.");
        }
    }
    // Troquei: return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    // por:     return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
    // Erros/warnings: .parser() depreciado; .setSigningKey(secretKey) depreciado; precisa incluir .build() antes de .parseClaimsJws(token)
    // Adicionei um try/catch para gerenciamento de erros


    // Obs.: Certifique-se de que secretKey tenha no mínimo 32 caracteres (256 bits), pois isso é exigido pelo metodo Keys.hmacShaKeyFor para o algoritmo HS256

    public String generateToken(UserDetails userDetails) { // Metodo para gerar um novo token JWT com base nos detalhes do usuário. Recebe o objeto UserDetails e cria o token usando o nome de usuário como "subject".
        Map<String, Object> claims = new HashMap<>(); // Cria um mapa vazio para claims (pode ser usado para adicionar informações adicionais ao token).

        return createToken(claims, userDetails.getUsername()); // Chama o metodo createToken para gerar o token JWT, passando as claims e o nome de usuário.
    }

    private String createToken(Map<String, Object> claims, String subject) { // Metodo privado para criar o token JWT. Claims: Mapa de declarações (claims) a serem incluídas no token. Subject: O assunto (subject), geralmente o nome de usuário.
        return Jwts.builder() // Cria o token JWT configurando:
                .setClaims(claims) // claims: Informações adicionais no token.
                .setSubject(subject)   // subject: Nome de usuário (subject do token).
                .setIssuedAt(new Date(System.currentTimeMillis())) // issuedAt: Data de emissão do token.
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // expiration: Data de expiração (10 horas a partir da emissão).
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()), SignatureAlgorithm.HS256) // - signWith: Algoritmo de assinatura (HS256) e chave secreta para assinar o token.
                .compact(); // Compacta e retorna o token JWT
    }
    // Troquei: .signWith(SignatureAlgorithm.HS256, secretKey)
    // Por:     .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()), SignatureAlgorithm.HS256)

    // Erro: A assinatura com signWith(SignatureAlgorithm.HS256, secretKey) pode causar um erro de tipo em versões mais recentes da biblioteca jjwt, pois espera uma Key em vez de uma String como chave secreta. Se você estiver usando uma String, o ideal é convertê-la para um tipo SecretKey ou Key do Java.
    // Obs.: Para que o Keys.hmacShaKeyFor funcione, será necessário importar io.jsonwebtoken.security.Keys

    public boolean isTokenValid(String token, UserDetails userDetails) { // Metodo que verifica se o token é válido. Compara o nome de usuário extraído do token com o nome de usuário do UserDetails e verifica se o token não expirou.
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token)); // Verifica se o token não expirou e se o usuário é o correto
    }

    private boolean isTokenExpired(String token) { // Metodo privado para verificar se o token JWT expirou. Compara a data de expiração do token com a data atual.
        return extractExpiration(token).before(new Date()); // Verifica se a data de expiração é anterior à data atual
    }

    private Date extractExpiration(String token) { // Extrai a data de expiração do token JWT.
        return extractClaim(token, Claims::getExpiration); // Extrai a claim de expiração (expiration)
    }
}
