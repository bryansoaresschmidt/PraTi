-- 1
select nome from alunos;

-- 2
select matricula_id from matricula;

-- 3
select matricula_id from matricula where matricula_id is null;

-- 4
select aluno_id from matricula where turma_id = 30;

-- 5
select horario from turmas
inner join matricula on matricula.turma_id = turmas.turma_id
inner join alunos on alunos.aluno_id = matricula.aluno_id
where alunos.nome = 'Patolino'; 