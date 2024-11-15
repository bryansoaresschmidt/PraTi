package com.example.Exercicio15.controller;

import com.example.Exercicio15.model.Aluno;
import com.example.Exercicio15.model.Curso;
import com.example.Exercicio15.service.AlunoService;
import com.example.Exercicio15.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/curso")
public class CursoController {
    @Autowired
    private AlunoService alunoService;
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public ResponseEntity<List<Curso>> listAllCourses() {
        List<Curso> cursos = cursoService.listAllCourses();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/{id}/alunos")
    public ResponseEntity<List<Aluno>> listAllStudentsFromCourse(@PathVariable Long id) {
        List<Aluno> alunosList = cursoService.listAllStudentsFromCourse(id);
        if(alunosList != null && !alunosList.isEmpty()) {
            return ResponseEntity.ok(alunosList);
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
    public ResponseEntity<String> enrollCourse(@PathVariable Long idCurso, @PathVariable Long idAluno) {
        boolean enrolled = cursoService.enrollCourse(idCurso, idAluno);

        if(enrolled) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao matricular um aluno");
    }

    @DeleteMapping("/{idCurso}/alunos/{idAluno}")
    public ResponseEntity<String> deleteCourseFromStudent(@PathVariable Long idCurso, @PathVariable Long idAluno) {
        boolean removed = cursoService.deleteCourseFromStudent(idCurso, idAluno);

        if(removed) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao matricular um aluno");
    }

    @GetMapping("/search")
    public ResponseEntity<?> findByNome(@RequestParam String nome) {
        Optional<Curso> cursoOpt = cursoService.findByNome(nome);
        if (cursoOpt.isPresent()) {
            return ResponseEntity.ok(cursoOpt.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Curso não encontrado");
    }
}
