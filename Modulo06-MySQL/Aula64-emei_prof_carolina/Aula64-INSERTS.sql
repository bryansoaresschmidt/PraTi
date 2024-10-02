INSERT INTO `emei_prof_carolina`.`aluno` (nome, curso, nivel, idade) VALUES ('Bryan','Programação', 'Avançado', 23);
INSERT INTO `emei_prof_carolina`.`aluno` (nome, curso, nivel, idade) VALUES ('Daiane','Pedagogia', 'Avançado', 33);
INSERT INTO `emei_prof_carolina`.`aluno` (nome, curso, nivel, idade) VALUES ('Jaqueline','Engenharia', 'Intermediário', 55);
INSERT INTO `emei_prof_carolina`.`aluno` (nome, curso, nivel, idade) VALUES ('Edu','Programação', 'Iniciante', 24);
INSERT INTO `emei_prof_carolina`.`aluno` (nome, curso, nivel, idade) VALUES ('Gustavo','Engenharia', 'Iniciante', 40);


INSERT INTO `emei_prof_carolina`.`turma` (nomeTurma, sala, horario) VALUES ('0', 'Sala 1', '08:30h');
INSERT INTO `emei_prof_carolina`.`turma` (nomeTurma, sala, horario) VALUES ('15', 'Sala 2', '13:30h');
INSERT INTO `emei_prof_carolina`.`turma` (nomeTurma, sala, horario) VALUES ('30', 'Sala 3', '19:30h');


INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (7.0, 7.5, 6.5, 7.0, 3, 1);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (7.5, 9.5, 8.5, 8.5, 0, 2);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (3.5, 1.5, 3.5, 3.0, 13, 3);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (4.0, 4.5, 3.5, 4.0, 5, 4);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (5.5, 7.5, 6.0, 6.0, 6, 5);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (7.0, 7.5, 6.5, 7.0, 5, 1);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (6.0, 4.5, 5.0, 5.0, 0, 2);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (7.5, 7.5, 8.5, 8.0, 2, 3);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (5.5, 6.5, 6.0, 6.0, 1, 4);
INSERT INTO `emei_prof_carolina`.`matricula` (nota_1, nota_2, nota_3, nota_final, nr_faltas, Aluno_idAluno) VALUES (4.0, 6.5, 5.5, 5.0, 1, 5);


INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (2, 5);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (1, 5);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (3, 4);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (2, 4);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (2, 3);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (1, 3);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (1, 2);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (5, 2);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (5, 1);
INSERT INTO `emei_prof_carolina`.`conexao_turma_aluno` (Turma_idTurma, Aluno_idAluno) VALUES (4, 1);


INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (2, 5);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (1, 5);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (3, 4);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (2, 4);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (2, 3);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (1, 3);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (1, 2);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (5, 2);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (5, 1);
INSERT INTO `emei_prof_carolina`.`conexao_turma_matricula` (Matricula_idMatricula, Turma_idTurma) VALUES (4, 1);