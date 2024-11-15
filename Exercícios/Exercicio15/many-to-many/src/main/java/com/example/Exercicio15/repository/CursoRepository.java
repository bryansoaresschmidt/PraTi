package com.example.Exercicio15.repository;

import com.example.Exercicio15.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    boolean existsByNome(String nome);
    Optional<Curso> findByNome(String nome);
}
