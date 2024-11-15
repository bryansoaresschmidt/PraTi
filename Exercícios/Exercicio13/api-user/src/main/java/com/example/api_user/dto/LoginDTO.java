package com.example.api_user.dto;

import lombok.AllArgsConstructor; // Gera automaticamente um construtor que aceita argumentos para todos os campos da classe.
import lombok.Data; // Gera automaticamente getters, setters, equals, hashCode, toString e outros métodos úteis.
import lombok.NoArgsConstructor; // Gera automaticamente um construtor vazio (sem parâmetros).

@AllArgsConstructor // @AllArgsConstructor: Esta anotação faz parte da biblioteca Lombok e gera automaticamente um **construtor** que aceita valores para todos os campos da classe. O construtor gerado incluirá parâmetros para cada um dos campos definidos na classe (`username` e `password`).
@NoArgsConstructor // @NoArgsConstructor: Gera automaticamente um **construtor vazio** (sem parâmetros) para a classe. Isso é útil em muitos cenários, como ao trabalhar com frameworks como o Spring ou JPA, que exigem um construtor sem parâmetros para criar instâncias de objetos.
@Data
public class LoginDTO {
    private String username; // Nome de usuário (identificador usado no processo de login)
    private String password; // Senha do usuário (usada para autenticação)
}