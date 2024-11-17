package com.example.Exercicio16.repository;

import com.example.Exercicio16.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    boolean existsByNome(String nome);

}
