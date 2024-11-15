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

import java.util.*;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public ResponseEntity<List<Aluno>> listAllStudents() {
        List<Aluno> alunosList = alunoService.listAllStudents();
        return ResponseEntity.ok(alunosList);
    }

    @GetMapping("/{id}/cursos")
    public ResponseEntity<List<Curso>> listAllCoursesFromStudent(@PathVariable Long id) {
        List<Curso> cursosList = alunoService.listAllCoursesFromStudent(id);
        if (cursosList != null && !cursosList.isEmpty()) {
            return ResponseEntity.ok(cursosList);
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
        boolean enrolled = alunoService.enrollStudent(idAluno, idCurso);

        if(enrolled) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao matricular um aluno");
    }

    @DeleteMapping("/{idAluno}/cursos/{idCurso}")
    public ResponseEntity<String> deleteStudentFromCourse(@PathVariable Long idAluno, @PathVariable Long idCurso){
        boolean removed = alunoService.deleteStudentFromCourse(idAluno, idCurso);

        if(removed) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao matricular um aluno");
    }

    @GetMapping("/search")
    public ResponseEntity<?> findByEmail(@RequestParam String email) {
        Optional<Aluno> alunoOpt = alunoService.findByEmail(email);
        if (alunoOpt.isPresent()) {
            return ResponseEntity.ok(alunoOpt.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Esse email não consta na base de dados");
    }
}
