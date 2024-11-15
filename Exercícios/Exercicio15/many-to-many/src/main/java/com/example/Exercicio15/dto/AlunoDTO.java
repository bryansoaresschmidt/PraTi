package com.example.Exercicio15.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AlunoDTO {
    private Long id;
    private String nome;
    private String email;
}
