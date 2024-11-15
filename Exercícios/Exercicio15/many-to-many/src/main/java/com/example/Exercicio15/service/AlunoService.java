package com.example.Exercicio15.service;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.repository.AlunoRepository;
import com.example.Exercicio15.repository.CursoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CursoRepository cursoRepository;

    //   GET - Todos alunos
    public List<Aluno> listAllStudents() {
        return alunoRepository.findAll();
    }
    //   GET - Todos cursos de um aluno específico
    public List<Curso> listAllCoursesFromStudent(Long id) {
        Optional<Aluno> alunoOpt = alunoRepository.findById(id);
        if (alunoOpt.isEmpty()) {
            throw new EntityNotFoundException("Curso não encontrado.");
        }

        return alunoOpt.get().getCursos();
    }

    //   POST - Criar
    public Aluno createStudent(Aluno aluno) {
        if (alunoRepository.existsByNome(aluno.getNome())) {
            throw new IllegalArgumentException("Já existe esse aluno no banco de dados");
        }
        return alunoRepository.save(aluno);
    }

    //   POST - Matricular cursos a um aluno
    public boolean enrollStudent(Long idAluno, Long idCurso) {
        Optional<Aluno> alunoOpt = alunoRepository.findById(idAluno); // Achar aluno
        Optional<Curso> cursoOpt = cursoRepository.findById(idCurso); // Achar curso
        if (alunoOpt.isEmpty() || cursoOpt.isEmpty()) {
            throw new EntityNotFoundException("Aluno não encontrado");
        }

        Aluno aluno = alunoOpt.get();
        Curso curso = cursoOpt.get();

        if (aluno.getCursos().contains(curso)) {
            return false;
        }

        aluno.getCursos().add(curso);
        alunoRepository.save(aluno);
        return true;
    }

    // DELETE - Excluir aluno de um curso
    public boolean deleteStudentFromCourse(Long idAluno, Long idCurso) {
        Optional<Aluno> alunoOpt = alunoRepository.findById(idAluno); // Buscar aluno
        Optional<Curso> cursoOpt = cursoRepository.findById(idCurso); // Buscar curso
        if (alunoOpt.isEmpty() || cursoOpt.isEmpty()) {
            throw new EntityNotFoundException("Aluno ou curso não encontrado");
        }

        Aluno aluno = alunoOpt.get();
        Curso curso = cursoOpt.get();

        if (!aluno.getCursos().contains(curso)) {
            return false;
        }

        aluno.getCursos().remove(curso);
        alunoRepository.save(aluno);
        return true;
    }


    // BÔNUS:
    public Optional<Aluno> findByEmail(String email) {
        return alunoRepository.findByEmail(email);
    }
}