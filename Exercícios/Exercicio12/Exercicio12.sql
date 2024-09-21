/*
Estudo de Caso - Escola de Informática

Uma escola de informática deseja manter um controle do seu funcionamento. Os alunos são organizados em turmas associadas a um tipo específico de curso. As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. Cada turma é orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e todos os telefones possíveis para sua localização. Um professor pode orientar várias turmas que podem ser de diferentes cursos. Para cada turma existe um aluno monitor que auxilia o professor da turma, sendo que um aluno pode ser monitor no máximo em uma turma. Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso. Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é mantido um registro das ausências do aluno.

Fazer consultas SQL que respondam as seguintes questões:

1) Listar os dados dos alunos;
2) Listar os dados dos alunos e as turmas que eles estão matriculados;
3) Listar os alunos que não possuem faltas;
4) Listar os professores e a quantidade de turmas que cada um leciona;
5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;

Fazer alterações nas tabelas:


1) Alterar o nome de todos os professores para maiúsculo;
2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
3) Excluir as ausências dos alunos nas turmas que estes são monitores;
*/

-- 1
select * from aluno;

-- 2
select aluno.*, turma.* from aluno
join matricula on aluno.idaluno = matricula.aluno_idaluno
join turma on matricula.turma_idturma = turma.idturma
;

-- 3
select nome_aluno, ausencias from aluno
join matricula on matricula.aluno_idaluno = aluno.idaluno
where matricula.ausencias <= 3
;
/* update e select


select * from matricula;

update matricula
set ausencias = 2
where idmatricula = 7;
*/

-- 4
select nome_professor, count(turma.professor_CPF_professor) as qtd_turmas from professor
join turma on turma.professor_CPF_professor = professor.idCPF_professor
group by professor.idCPF_professor
;

-- 5
select nome_professor, 
	turma.idturma, turma.data_inicio, turma.data_final, turma.horario, turma.tipo_curso,
	min(telefone_professor) as Telefone,
	count(DISTINCT matricula.aluno_idaluno) as qtd_Alunos
from professor
join turma 
	on turma.professor_CPF_professor = professor.idCPF_professor
join contatos_professor 
	on contatos_professor.professor_CPF_professor = professor.idCPF_professor
join matricula 
	on matricula.turma_idturma = turma.idturma
join aluno 
	on aluno.idaluno = matricula.aluno_idaluno
group by nome_professor, turma.idturma, turma.data_inicio, turma.data_final, turma.horario, turma.tipo_curso
order by professor.nome_professor, turma.idturma, aluno.nome_aluno
;

select * from matricula;
select * from turma;
select * from professor;
select * from aluno;

-- 6 Listar o nome dos professores e a turma que cada um leciona com maior número de alunos
WITH AlunosPorTurma AS (
    SELECT 
        professor.idCPF_professor,
        nome_professor,
        turma.idturma,
        COUNT(matricula.aluno_idaluno) AS qtd_alunos
    FROM professor
    JOIN turma ON turma.professor_CPF_professor = professor.idCPF_professor
    JOIN matricula ON matricula.turma_idturma = turma.idturma
    GROUP BY professor.idCPF_professor, turma.idturma
),
MaxAlunos AS (
    SELECT 
        idCPF_professor,
        MAX(qtd_alunos) AS max_qtd
    FROM AlunosPorTurma
    GROUP BY idCPF_professor
)
SELECT 
    a.nome_professor, 
    a.idturma, 
    a.qtd_alunos
FROM AlunosPorTurma a
JOIN MaxAlunos m ON a.idCPF_professor = m.idCPF_professor AND a.qtd_alunos = m.max_qtd;

-- 7 Listar os nomes dos alunos ordenados pelas turmas que estes possuem mais faltas. Deve aparecer apenas a turma em que este aluno tem maior qtd de faltas.
select nome_aluno, ausencias, idturma
from aluno
join matricula on matricula.aluno_idaluno = aluno.idaluno
join turma on turma.idturma = matricula.turma_idturma
WHERE matricula.ausencias = (
    SELECT MAX(matricula.ausencias)
    FROM matricula
    WHERE matricula.aluno_idaluno = aluno.idaluno
)
order by matricula.ausencias desc;

-- 1
update professor
set nome_professor = UPPER(nome_professor);
select nome_professor from professor;

-- 2
update aluno
set nome_aluno = UPPER(nome_aluno)
where idaluno in (
select matricula.aluno_idaluno
from matricula
join turma on turma.idturma = matricula.turma_idturma
where turma.qtd_alunos = (select MAX(qtd_alunos) from turma)
);

-- 3
update matricula
join turma on turma.idturma = matricula.turma_idturma
set ausencias = 0
where matricula.aluno_idaluno = turma.aluno_monitor_idaluno_monitor;

select * from matricula;
select * from aluno_monitor;
select * from turma;

