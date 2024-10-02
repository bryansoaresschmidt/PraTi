
select nome from aluno;
explain select nome from aluno;

show status like 'handler_read%';

SET profiling = 0; -- Desativa o profiling, se ainda estiver ativo
SET profiling = 1; -- Ativa o profiling

explain select nome from aluno where nome = 'Bryan';
show profiles; -- Mostra as execuções com informações detalhadas de desempenho, mas precisa ativar o profiling pra funcionar
show profile CPU;
show profile for query 32;

SET profiling_history_size = 15;  -- Limpa o histórico de profiling


select * from performance_schema.events_statements_history
limit 5;

