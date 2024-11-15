package com.example.Exercicio15.service;

import com.example.Exercicio15.dto.AlunoDTO;
import com.example.Exercicio15.dto.CursoDTO;
import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.repository.AlunoRepository;
import com.example.Exercicio15.repository.CursoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class CursoService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CursoRepository cursoRepository;

    //   GET - Todos cursos
    public Set<Curso> listAllCourses() {
        return new HashSet<>(cursoRepository.findAll());
    }
    //   GET - Todos alunos de um curso expecífico
    public Set<Aluno> listAllStudentsFromCourse(Long id) {
        Optional<Curso> curso = cursoRepository.findById(id);
        if (curso.isEmpty()) {
            throw new EntityNotFoundException("Curso não encontrado.");
        }

        return curso.get().getAlunos();
    }

    //   POST - Criar curso
    public Curso createCourse(Curso curso) {
        return cursoRepository.save(curso);
    }
    //   POST - Matricular vários alunos em um curso
    public boolean enrollCourse(Long idCurso, Set<Long> newIdAluno) {
        try {

        Optional<Curso> curso = cursoRepository.findById(idCurso);
        if (curso.isEmpty()) {
            throw new EntityNotFoundException("Curso não encontrado");
        }

        Set<Aluno> alunos = new HashSet<>();
        for (Long idAluno : newIdAluno) {
            Optional<Aluno> aluno = alunoRepository.findById(idAluno);
            if (aluno.isEmpty()) {
                throw new EntityNotFoundException("Aluno não encontrado");
            }
            alunos.add(aluno.get());
        }

        curso.get().getAlunos().addAll(alunos);
        cursoRepository.save(curso.get());

        return true;
        } catch (Exception e) {
            throw new RuntimeException("Erro ao matricular aluno no curso", e);
        }
    }
}
