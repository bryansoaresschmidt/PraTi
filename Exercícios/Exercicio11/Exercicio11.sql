A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda. No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

Desenvolva os scripts SQL para atender cada uma das questões abaixo:

1) Faça uma listagem do cardápio ordenada por nome;
2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
5) Qual o total de faturamento por data? ordene por data esta consulta.

CREATE database cafeteria_bom_gosto;
-- drop database cafeteria_bom_gosto;

create table comanda (
comanda_id int primary key auto_increment not null,
data_comanda date not null,
mesa int not null,
nome_cliente varchar(100) not null
);

create table itensComanda (
item_id int primary key auto_increment not null,
comanda_id int not null,
cardapio_id int not null,
qtd_itens int not null,
preco_total decimal(5,2) not null,
foreign key (comanda_id) references comanda(comanda_id),
foreign key (cardapio_id) references cardapio(cardapio_id),
unique(comanda_id, cardapio_id)
);

create table cardapio (
cardapio_id int primary key auto_increment not null,
nome_cafe varchar(100) unique not null,
descricao varchar(255) not null,
preco decimal(5,2) not null
);

insert into cardapio(nome_cafe, descricao, preco) values
('Café Expresso', 'Café puro moído', 5.00),
('Cappuccino', 'Café expresso com leite vaporizado com espuma de leite', 6.50),
('Leite puro', 'Leite integral', 3.00);

insert into comanda(data_comanda, mesa, nome_cliente) values
('2024-09-08', 5, 'Hagrid'),
('2024-09-18', 7, 'Minerva');

insert into itenscomanda(comanda_id, cardapio_id, qtd_itens, preco_total) values
(1, 1, 3, 15.00),
(1, 2, 1, 6.50),
(2, 1, 1, 5.00);

-- 1
select * from cardapio order by nome_cafe;

-- 2
select * from comanda
inner join itenscomanda on itenscomanda.comanda_id = comanda.comanda_id
inner join cardapio on cardapio.cardapio_id = itenscomanda.cardapio_id
order by data_comanda, comanda.comanda_id, cardapio.nome_cafe;

-- 3
select comanda.*, SUM(itenscomanda.preco_total) from comanda
inner join itenscomanda on itenscomanda.comanda_id = comanda.comanda_id
group by comanda.comanda_id
order by data_comanda;

-- 4
select comanda.*, SUM(itenscomanda.preco_total) from comanda
inner join itenscomanda on itenscomanda.comanda_id = comanda.comanda_id
group by comanda.comanda_id
having
	count(itenscomanda.comanda_id) > 1
order by data_comanda;

-- 5 
select comanda.data_comanda, sum(itenscomanda.preco_total) as faturamento
from comanda
inner join itenscomanda on itenscomanda.comanda_id = comanda.comanda_id
group by comanda.data_comanda;

-- 6 Escreva um scrip pra excluir do cardápio os cafés que nunca foram vendidos
delete from cardapio
where cardapio_id not in (select distinct cardapio_id from itenscomanda);
-- select distinct cardapio_id from itenscomanda;

-- 7 Aumente em 10% o preço de todos os cafés da loja
update cardapio
set preco = preco * 1.10;
select * from cardapio;
select * from itenscomanda;

-- 8 Faça uma listagem do cardápio apresentando as seguintes colunas extras: quantidade de café vendidos e total vendido por café
select 
	cardapio.*, 
	sum(itenscomanda.qtd_itens) as Total_Itens_Vendidos, 
	sum(itenscomanda.preco_total) Faturamento 
from cardapio
left join itenscomanda on itenscomanda.cardapio_id = cardapio.cardapio_id
group by cardapio_id;

-- 9 Diminua 5% do valor de todos os cafés que venderam mais que 50 unidades vendidas
update cardapio
join (
select cardapio_id, sum(qtd_itens) as total_vendido 
from itenscomanda
group by cardapio_id
) as j
on cardapio.cardapio_id = j.cardapio_id
set preco = preco * 0.95
where total_vendido > 50;

select * from cardapio;


