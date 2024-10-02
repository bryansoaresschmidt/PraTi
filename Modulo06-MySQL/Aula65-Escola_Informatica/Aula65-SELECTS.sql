-- 4.1
select * from aluno;

-- 4.2
select 
	aluno.idaluno,
    aluno.nome_aluno,
    aluno.endereco_aluno,
    aluno.telefone_aluno,
    aluno.data_nascimento,
    aluno.altura,
    aluno.peso,
    turma.idturma
from aluno
INNER JOIN matricula ON aluno.idaluno = matricula.aluno_idaluno
INNER JOIN turma ON matricula.turma_idturma = turma.idturma;

-- 4.3
SELECT aluno.nome_aluno from aluno
INNER JOIN matricula ON aluno.idaluno = matricula.aluno_idaluno
WHERE ausencias = 0;

-- 4.4 (alterei um pouco pq cada um só tem 1 turma)
SELECT nome_professor, qtd_alunos from professor
INNER JOIN turma ON professor.idCPF_professor = professor_CPF_professor;


-- 4.5
SELECT 
	nome_professor, 
	MIN(contatos_professor.telefone_professor) AS telefone_professor,  -- Pega o menor número de telefone
	idturma,
	data_inicio,
	data_final,
	horario
FROM professor
INNER JOIN contatos_professor ON professor.idCPF_professor = contatos_professor.professor_CPF_professor
INNER JOIN turma ON turma.professor_CPF_professor = professor.idCPF_professor
GROUP BY 
    professor.nome_professor, 
    turma.idturma, 
    turma.data_inicio, 
    turma.data_final, 
    turma.horario
ORDER BY nome_professor, idturma;

-- 4.6
SELECT nome_professor, idturma, count(matricula.idmatricula) FROM professor
INNER JOIN turma ON turma.professor_CPF_professor = professor.idCPF_professor
INNER JOIN matricula ON matricula.turma_idturma = turma.idturma
GROUP BY professor.nome_professor, turma.idturma
ORDER BY count(matricula.idmatricula) desc;

-- 4.7
SELECT nome_aluno, ausencias, idturma FROM aluno
INNER JOIN matricula ON matricula.aluno_idaluno = aluno.idaluno
INNER JOIN turma ON turma.idturma = matricula.turma_idturma;

SELECT aluno.nome_aluno, turma.idturma
FROM aluno
INNER JOIN matricula ON matricula.aluno_idaluno = aluno.idaluno
INNER JOIN turma ON turma.idturma = matricula.turma_idturma
WHERE matricula.turma_idturma = (
    SELECT matricula2.turma_idturma
    FROM matricula matricula2
    WHERE matricula2.aluno_idaluno = aluno.idaluno
    GROUP BY matricula2.turma_idturma
    ORDER BY COUNT(matricula2.ausencias) DESC
    LIMIT 1
)
ORDER BY aluno.nome_aluno;
