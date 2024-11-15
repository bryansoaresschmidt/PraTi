package com.example.Exercicio15.repository;

import com.example.Exercicio15.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    boolean existsByNome(String nome);
    Optional<Aluno> findByEmail(String email);
}
