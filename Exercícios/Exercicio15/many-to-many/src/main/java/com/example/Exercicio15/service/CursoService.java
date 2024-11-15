package com.example.Exercicio15.service;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.repository.AlunoRepository;
import com.example.Exercicio15.repository.CursoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CursoService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private CursoRepository cursoRepository;

    //   GET - Todos cursos
    public List<Curso> listAllCourses() {
        return cursoRepository.findAll();
    }
    //   GET - Todos alunos de um curso expecífico
    public List<Aluno> listAllStudentsFromCourse(Long id) {
        Optional<Curso> cursoOpt = cursoRepository.findById(id);
        if (cursoOpt.isEmpty()) {
            throw new EntityNotFoundException("Curso não encontrado.");
        }

        return cursoOpt.get().getAlunos();
    }

    //   POST - Criar curso
    public Curso createCourse(Curso curso) {
        if (cursoRepository.existsByNome(curso.getNome())) {
            throw new IllegalArgumentException("Já existe esse curso no banco de dados");
        }
        return cursoRepository.save(curso);
    }

    //   POST - Matricular alunos em um curso
    public boolean enrollCourse(Long idCurso, Long idAluno) {
        Optional<Curso> cursoOpt = cursoRepository.findById(idCurso);
        Optional<Aluno> alunoOpt = alunoRepository.findById(idAluno);
        if (cursoOpt.isEmpty() || alunoOpt.isEmpty()) {
            throw new EntityNotFoundException("Curso/aluno não encontrado");
        }

        Curso curso = cursoOpt.get();
        Aluno aluno = alunoOpt.get();

        if(curso.getAlunos().contains(aluno)) {
            return false;
        }

        curso.getAlunos().add(aluno);
        cursoRepository.save(curso);
        return true;
    }

    //   DELETE - Excluir curso de um aluno
    public boolean deleteCourseFromStudent(Long idCurso, Long idAluno) {
        Optional<Curso> cursoOpt = cursoRepository.findById(idCurso);
        Optional<Aluno> alunoOpt = alunoRepository.findById(idAluno);
        if (cursoOpt.isEmpty() || alunoOpt.isEmpty()) {
            throw new EntityNotFoundException("Curso/aluno não encontrado");
        }

        Curso curso = cursoOpt.get();
        Aluno aluno = alunoOpt.get();

        if(!curso.getAlunos().contains(aluno)) {
            return false;
        }

        curso.getAlunos().remove(aluno);
        cursoRepository.save(curso);
        return true;
    }

    // BÔNUS
    public Optional<Curso> findByNome(String nome) {
        return cursoRepository.findByNome(nome);
    }
}