CREATE DATABASE aula67;
drop database aula67;

CREATE TABLE clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100),
        email VARCHAR(100),
        telefone VARCHAR(15),
        cidade VARCHAR(50),
        data_registro DATE
    );

DELIMITER //

CREATE PROCEDURE insert_data()
BEGIN
    DECLARE counter INT DEFAULT 0;

    WHILE counter < 1000 DO
        INSERT INTO clientes (nome, email, telefone, cidade, data_registro) 
        VALUES 
        (CONCAT('Cliente ', counter), 
         CONCAT('cliente', counter, '@gmail.com'), 
         CONCAT('123456', counter), 
         'São Paulo', 
         CURDATE()); 

        SET counter = counter + 1;

        -- Mensagem de log para cada 100 inserções
        IF MOD(counter, 1) = 0 THEN
            SELECT CONCAT(counter, ' registros inseridos até agora.') AS progresso;
        END IF;
    END WHILE;

    SELECT 'Inserção concluída!' AS mensagem_final;
END //

DELIMITER ;

CALL insert_data(); -- Insere os dados da procedure
DROP PROCEDURE IF EXISTS insert_data; -- deleta a procedure


-- Parte 2:
SET PROFILING = 1; -- Liga o profile

SELECT * FROM clientes; -- select pra puxar tudo dos clientes
EXPLAIN SELECT * FROM clientes WHERE cidade = 'São Paulo';

SHOW PROFILE; 

INSERT INTO clientes (nome, email, telefone, cidade, data_registro)
VALUES ('Teste', 'teste@gmail.com', '000000000', 'Teste Cidade', '2023-01-01');
CREATE INDEX index_name_cidade ON clientes (cidade);
