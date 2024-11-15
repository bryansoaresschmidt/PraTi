package com.example.Exercicio15.service;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.repository.AlunoRepository;
import com.example.Exercicio15.repository.CursoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CursoRepository cursoRepository;

    //   GET - Todos alunos
    public Set<Aluno> listAllStudents() {
        return new HashSet<>(alunoRepository.findAll());
    }
    //   GET - Todos cursos de um aluno específico
    public Set<Curso> listAllCoursesFromStudent(Long id) {
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if (aluno.isEmpty()) {
            throw new EntityNotFoundException("Alunos não encontrado.");
        }

        return aluno.get().getCursos();
    }

    //   POST - Criar
    public Aluno createStudent(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    //   POST - Matricular vários cursos a um aluno
    public boolean enrollStudent(Long idAluno, Set<Long> newIdCurso) {
        Optional<Aluno> aluno = alunoRepository.findById(idAluno); // Achar aluno
        if (aluno.isEmpty()) {
            throw new EntityNotFoundException("Aluno não encontrado");
        }

        Set<Curso> cursos = new HashSet<>();
        for (Long idCurso : newIdCurso) {
            Optional<Curso> curso = cursoRepository.findById(idCurso); // Achar curso
            if (curso.isEmpty()) {
                throw new EntityNotFoundException("Curso de id " + idCurso + " não encontrado");
            }
            cursos.add(curso.get());
        }

        aluno.get().getCursos().addAll(cursos); // Add cursos
        alunoRepository.save(aluno.get()); // Salvar o "novo" usuário
        return true;
    }

}
