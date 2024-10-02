create user 'Atchim'@'%' identified by 'senha'; 
-- '%': É um caractere curinga (wildcard) que significa "qualquer host". Isso permite que o usuário se conecte a partir de qualquer endereço IP.
--  @: é usado para especificar o host de onde o usuário pode se conectar ao banco de dados
grant all privileges on it_solutions.* to 'Atchim'; 

flush privileges; 
-- Garante que o servidor MySQL atualize suas informações sobre quem tem acesso a quê. Quaisquer modificações que você fez se tornam ativas.

revoke select on it_solutions.* from 'Atchim';
show grants for 'Atchim';
show privileges;

drop user 'Zangado';
-- O usuário será removido do sistema de usuários do MySQL.