-- 1
SELECT nome FROM aluno;

-- 2
SELECT matricula.idMatricula, aluno.nome
FROM matricula
INNER JOIN aluno 
ON matricula.Aluno_idAluno = aluno.idAluno;

-- 3
SELECT matricula.idMatricula
FROM matricula
LEFT JOIN conexao_turma_matricula ctm ON matricula.idMatricula = ctm.Matricula_idMatricula
WHERE ctm.Matricula_idMatricula IS NULL;

-- 4
SELECT aluno.idAluno
FROM aluno
INNER JOIN conexao_turma_aluno 
	ON aluno.idAluno = conexao_turma_aluno.Aluno_idAluno
INNER JOIN turma 
	ON conexao_turma_aluno.Turma_idTurma = turma.idTurma
WHERE turma.nomeTurma = '30';

-- 5
SELECT horario FROM turma
INNER JOIN conexao_turma_aluno
	ON conexao_turma_aluno.Turma_idTurma = Turma.idTurma
INNER JOIN aluno
	ON aluno.idAluno = conexao_turma_aluno.Aluno_idAluno
WHERE aluno.nome = "Daiane";

-- 6
SELECT aluno.nome
FROM aluno
INNER JOIN conexao_turma_aluno 
	ON aluno.idAluno = conexao_turma_aluno.Aluno_idAluno
INNER JOIN turma 
	ON conexao_turma_aluno.Turma_idTurma = turma.idTurma
WHERE turma.nomeTurma = '30';

-- 7
SELECT aluno.nome
FROM aluno
LEFT JOIN conexao_turma_aluno 
	ON aluno.idAluno = conexao_turma_aluno.Aluno_idAluno
LEFT JOIN turma 
	ON conexao_turma_aluno.Turma_idTurma = turma.idTurma
WHERE turma.nomeTurma != '30' OR turma.nomeTurma IS NULL;

-- 8
SELECT nomeTurma FROM turma
INNER JOIN conexao_turma_matricula
	ON turma.idTurma = conexao_turma_matricula.Turma_idTurma
INNER JOIN matricula
	ON matricula.idMatricula = conexao_turma_matricula.Matricula_idMatricula
WHERE matricula.nota_final > 8;


