-- Comandos SELECT

SELECT * FROM recursos;

SELECT nomeRecurso, salario FROM recursos;

SELECT nomeRecurso, salario FROM recursos WHERE nomeRecurso = "Recurso 30";

SELECT nomeRecurso, salario FROM recursos ORDER BY salario; -- ASC é o padrão
SELECT nomeRecurso, salario FROM recursos ORDER BY salario DESC;

SELECT nomeRecurso, salario FROM recursos LIMIT 10;
SELECT nomeRecurso, salario FROM recursos ORDER BY salario DESC LIMIT 10;

SELECT nomeRecurso, salario FROM recursos WHERE salario > 8000;

SELECT nomeCargo FROM cargos WHERE nomeCargo LIKE "D%";
SELECT nomeCargo FROM cargos WHERE nomeCargo LIKE "%R";
SELECT nomeCargo FROM cargos WHERE nomeCargo LIKE "%vol%";
SELECT * FROM cargos WHERE nomeCargo LIKE "Dev___";

SELECT count(nomeCargo) FROM cargos;
SELECT sum(salario) FROM recursos;
SELECT avg(salario) FROM recursos; -- Média dos salários AVG
SELECT max(salario) FROM recursos; -- Máximo dos salário
SELECT min(salario) FROM recursos; -- Mínimo dos salário

SELECT nomeFerramenta FROM ferramentas GROUP BY nomeFerramenta;
SELECT nomeFerramenta, count(*) FROM ferramentas GROUP BY nomeFerramenta;
SELECT nomeFerramenta, count(*) FROM ferramentas GROUP BY nomeFerramenta HAVING count(*) > 5;

SELECT * FROM recursos, cargos WHERE recursos.Cargos_idCargos = cargos.idCargos;

SELECT nomeRecurso, nomeCargo FROM recursos INNER JOIN cargos ON recursos.Cargos_idCargos = cargos.idCargos;
SELECT nomeRecurso, nomeCargo FROM recursos INNER JOIN cargos ON recursos.Cargos_idCargos = cargos.idCargos
WHERE cargos.nomeCargo = "Desenvolvedor" ORDER BY salario;

SELECT nomeRecurso, nomeFerramenta, nomeCargo, versao, rua, numero, cidade
	FROM recursos 
INNER JOIN ferramentasrecursos
	ON recursos.idRecursos = ferramentasrecursos.Recursos_idRecursos
INNER JOIN ferramentas
	ON ferramentasrecursos.Ferramentas_idFerramentas = ferramentas.idFerramentas
INNER JOIN cargos
	ON cargos.idCargos = recursos.Cargos_idCargos
INNER JOIN enderecos
	ON enderecos.idEnderecos = recursos.Enderecos_idEnderecos
WHERE nomeCargo = "Desenvolvedor" AND cidade = "São Paulo"
    