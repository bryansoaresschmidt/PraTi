INSERT INTO `escola_informatica`.`aluno` (nome_aluno, endereco_aluno, telefone_aluno, data_nascimento, altura, peso) VALUES
('João Silva', 'Rua José Henrique 46', '99528-0303', '2010-12-16', 1.75, 69.90),
('Maria Oliveira', 'Av. Itacolomi 202', '99515-7788', '1977-12-12', 1.60, 55.55),
('Carlos Pereira', 'Rua Zacarias 455', '98156-8844', '1977-09-13', 1.80, 100.50),
('Rodrigo', 'Rua Malok 455', '98166-8899', '2000-01-30', 1.70, 80.0);

INSERT INTO `escola_informatica`.`aluno_monitor` (nome_monitor) VALUES
('João Silva'),
('Rodrigo');

INSERT INTO `escola_informatica`.`professor` (nome_professor, data_nascimento, titulacao) VALUES
('Edu', '2000-12-18', 'Programador'),
('Hiago', '1999-12-18', 'Fullstack');

INSERT INTO `escola_informatica`.`contatos_professor` (telefone_professor, professor_CPF_professor) VALUES 
('51 99528-0000', 1),
('51 99528-0001', 2),
('51 99528-0002', 2);

INSERT INTO `escola_informatica`.`turma` (qtd_alunos, horario, duracao, data_inicio, data_final, tipo_curso, professor_CPF_professor, aluno_monitor_idaluno_monitor) VALUES
(3, '10:30', '2 horas', '2024-06-01', '2024-06-30', 'Programação', 1, 1),
(3, '10:30', '2 horas', '2024-06-01', '2024-12-31', 'Fullstack Letras Júnior', 2, 2);

INSERT INTO `escola_informatica`.`matricula` (ausencias, aluno_idaluno, turma_idturma, data_matricula) VALUES 
(3, 1, 1, '2024-01-01'),
(7, 2, 1, '2024-06-01'),
(3, 3, 2, '2024-01-01'),
(3, 4, 2, '2024-01-01');
