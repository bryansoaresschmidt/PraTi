package com.example.Exercicio15.controller;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.service.AlunoService;
import com.example.Exercicio15.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public ResponseEntity<Set<Aluno>> listAllStudents() {
        Set<Aluno> alunos = alunoService.listAllStudents();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/{id}/cursos")
    public ResponseEntity<Set<Curso>> listAllCoursesFromStudent(@PathVariable Long id) {
        Set<Curso> cursos = alunoService.listAllCoursesFromStudent(id);
        if (cursos != null && !cursos.isEmpty()) {
            return ResponseEntity.ok(cursos);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping
    public ResponseEntity<Aluno> createStudent(@RequestBody Aluno aluno) {
        Aluno newAluno = alunoService.createStudent(aluno);
        if (newAluno != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newAluno);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/{idAluno}/cursos/{idCurso}")
    public ResponseEntity<String> enrollStudent(@PathVariable Long idAluno, @PathVariable Long idCurso){
        Set<Long> newIdCurso = new HashSet<>();
        newIdCurso.add(idCurso);

        boolean enrolled = alunoService.enrollStudent(idAluno, newIdCurso);

        if(enrolled) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao matricular um aluno");
    }
}
