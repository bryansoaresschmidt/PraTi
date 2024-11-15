package com.example.Exercicio15.controller;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.service.AlunoService;
import com.example.Exercicio15.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/curso")
public class CursoController {
    @Autowired
    private AlunoService alunoService;
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public ResponseEntity<Set<Curso>> listAllCourses() {
        Set<Curso> cursos = cursoService.listAllCourses();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/{id}/alunos")
    public ResponseEntity<Set<Aluno>> listAllStudentsFromCourse(@PathVariable Long id) {
        Set<Aluno> alunos = cursoService.listAllStudentsFromCourse(id);
        if(alunos != null && !alunos.isEmpty()) {
            return ResponseEntity.ok(alunos);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @PostMapping
    public ResponseEntity<Curso> createCourse(@RequestBody Curso curso) {
        Curso newCurso = cursoService.createCourse(curso);
        if (newCurso != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newCurso);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/{idCurso}/alunos/{idAluno}")
    public ResponseEntity<Void> enrollCourse(@PathVariable Long idCurso, @PathVariable Long idAluno) {
        Set<Long> newIdAluno = new HashSet<>();
        newIdAluno.add(idAluno);

        boolean enrolled = cursoService.enrollCourse(idCurso, newIdAluno);

        if(enrolled) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
