SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema it_solutions
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `it_solutions` DEFAULT CHARACTER SET utf8 ;
USE `it_solutions` ;

-- -----------------------------------------------------
-- Table `it_solutions`.`Cargos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Cargos` (
  `idCargos` INT NOT NULL AUTO_INCREMENT,
  `nomeCargo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCargos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Enderecos` (
  `idEnderecos` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEnderecos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Equipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Equipes` (
  `idEquipes` INT NOT NULL AUTO_INCREMENT,
  `nomeEquipe` VARCHAR(255) NOT NULL,
  `numeroRecursos` INT NOT NULL,
  PRIMARY KEY (`idEquipes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Recursos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Recursos` (
  `idRecursos` INT NOT NULL AUTO_INCREMENT,
  `nomeRecurso` VARCHAR(45) NOT NULL,
  `salario` FLOAT NOT NULL,
  `Cargos_idCargos` INT NOT NULL,
  `Enderecos_idEnderecos` INT NOT NULL,
  `Equipes_idEquipes` INT NOT NULL,
  PRIMARY KEY (`idRecursos`),
  INDEX `fk_Recursos_Cargos1_idx` (`Cargos_idCargos` ASC) VISIBLE,
  INDEX `fk_Recursos_Enderecos1_idx` (`Enderecos_idEnderecos` ASC) VISIBLE,
  INDEX `fk_Recursos_Equipes1_idx` (`Equipes_idEquipes` ASC) VISIBLE,
  CONSTRAINT `fk_Recursos_Cargos1`
    FOREIGN KEY (`Cargos_idCargos`)
    REFERENCES `it_solutions`.`Cargos` (`idCargos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recursos_Enderecos1`
    FOREIGN KEY (`Enderecos_idEnderecos`)
    REFERENCES `it_solutions`.`Enderecos` (`idEnderecos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recursos_Equipes1`
    FOREIGN KEY (`Equipes_idEquipes`)
    REFERENCES `it_solutions`.`Equipes` (`idEquipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Telefone` (
  `idTelefone` INT NOT NULL AUTO_INCREMENT,
  `tipoTelefone` VARCHAR(45) NOT NULL,
  `numeroTelefone` VARCHAR(45) NOT NULL,
  `Recursos_idRecursos` INT NOT NULL,
  PRIMARY KEY (`idTelefone`),
  INDEX `fk_Contatos_Recursos1_idx` (`Recursos_idRecursos` ASC) VISIBLE,
  CONSTRAINT `fk_Telefone_Recursos1`
    FOREIGN KEY (`Recursos_idRecursos`)
    REFERENCES `it_solutions`.`Recursos` (`idRecursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Ferramentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Ferramentas` (
  `idFerramentas` INT NOT NULL AUTO_INCREMENT,
  `nomeFerramenta` VARCHAR(255) NOT NULL,
  `versao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idFerramentas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`FerramentasRecursos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`FerramentasRecursos` (
  `idFerramentasRecursos` INT NOT NULL AUTO_INCREMENT,
  `Recursos_idRecursos` INT NOT NULL,
  `Ferramentas_idFerramentas` INT NOT NULL,
  INDEX `fk_Recursos_has_Ferramentas_Ferramentas1_idx` (`Ferramentas_idFerramentas` ASC) VISIBLE,
  INDEX `fk_Recursos_has_Ferramentas_Recursos1_idx` (`Recursos_idRecursos` ASC) VISIBLE,
  PRIMARY KEY (`idFerramentasRecursos`),
  CONSTRAINT `fk_Recursos_has_Ferramentas_Recursos1`
    FOREIGN KEY (`Recursos_idRecursos`)
    REFERENCES `it_solutions`.`Recursos` (`idRecursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recursos_has_Ferramentas_Ferramentas1`
    FOREIGN KEY (`Ferramentas_idFerramentas`)
    REFERENCES `it_solutions`.`Ferramentas` (`idFerramentas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Projetos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Projetos` (
  `idProjetos` INT NOT NULL AUTO_INCREMENT,
  `nomeProjeto` VARCHAR(255) NOT NULL,
  `dataInicio` DATE NOT NULL,
  `dataPrevisaoTermino` DATE NOT NULL,
  `dataTermino` DATE NULL,
  `status` ENUM("Em aberto", "Em andamento", "Concluido") NOT NULL,
  `horasPrevistas` DOUBLE NOT NULL,
  `horasUtilizadas` DOUBLE NULL,
  `Equipes_idEquipes` INT NOT NULL,
  `Recursos_idGerente` INT NOT NULL,
  PRIMARY KEY (`idProjetos`),
  INDEX `fk_Projetos_Equipes1_idx` (`Equipes_idEquipes` ASC) VISIBLE,
  INDEX `fk_Projetos_Recursos1_idx` (`Recursos_idGerente` ASC) VISIBLE,
  CONSTRAINT `fk_Projetos_Equipes1`
    FOREIGN KEY (`Equipes_idEquipes`)
    REFERENCES `it_solutions`.`Equipes` (`idEquipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projetos_Recursos1`
    FOREIGN KEY (`Recursos_idGerente`)
    REFERENCES `it_solutions`.`Recursos` (`idRecursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Atividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Atividades` (
  `idAtividades` INT NOT NULL AUTO_INCREMENT,
  `nomeAtividade` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idAtividades`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`ProjetosAtividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`ProjetosAtividades` (
  `idProjetosAtividades` INT NOT NULL AUTO_INCREMENT,
  `Projetos_idProjetos` INT NOT NULL,
  `Atividades_idAtividades` INT NOT NULL,
  PRIMARY KEY (`idProjetosAtividades`),
  INDEX `fk_Projetos_has_Atividades_Atividades1_idx` (`Atividades_idAtividades` ASC) VISIBLE,
  INDEX `fk_Projetos_has_Atividades_Projetos1_idx` (`Projetos_idProjetos` ASC) VISIBLE,
  CONSTRAINT `fk_Projetos_has_Atividades_Projetos1`
    FOREIGN KEY (`Projetos_idProjetos`)
    REFERENCES `it_solutions`.`Projetos` (`idProjetos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projetos_has_Atividades_Atividades1`
    FOREIGN KEY (`Atividades_idAtividades`)
    REFERENCES `it_solutions`.`Atividades` (`idAtividades`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`Tarefas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`Tarefas` (
  `idTarefas` INT NOT NULL AUTO_INCREMENT,
  `descricaoTarefa` TEXT NOT NULL,
  `Atividades_idAtividades` INT NOT NULL,
  PRIMARY KEY (`idTarefas`),
  INDEX `fk_Tarefas_Atividades1_idx` (`Atividades_idAtividades` ASC) VISIBLE,
  CONSTRAINT `fk_Tarefas_Atividades1`
    FOREIGN KEY (`Atividades_idAtividades`)
    REFERENCES `it_solutions`.`Atividades` (`idAtividades`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `it_solutions`.`HistoricoSalario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `it_solutions`.`HistoricoSalario` (
  `idHistoricoSalario` INT NOT NULL AUTO_INCREMENT,
  `dataAumento` DATE NULL,
  `valorAumento` FLOAT NULL,
  `Recursos_idRecursos` INT NOT NULL,
  PRIMARY KEY (`idHistoricoSalario`),
  INDEX `fk_HistoricoSalario_Recursos1_idx` (`Recursos_idRecursos` ASC) VISIBLE,
  CONSTRAINT `fk_HistoricoSalario_Recursos1`
    FOREIGN KEY (`Recursos_idRecursos`)
    REFERENCES `it_solutions`.`Recursos` (`idRecursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Analista');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('DevOps');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('DevOps');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Analista');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('DevOps');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Analista');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('DevOps');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Analista');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Analista');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Gerente de Projetos');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('Desenvolvedor');
INSERT INTO `it_solutions`.`Cargos` (nomeCargo) VALUES ('QA');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 1', '623', 'Porto Alegre', 'PR', '07068-620');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 2', '860', 'Salvador', 'BA', '05173-414');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 3', '102', 'Salvador', 'BA', '09108-519');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 4', '144', 'Curitiba', 'RJ', '02851-384');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 5', '752', 'Rio de Janeiro', 'RS', '05919-766');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 6', '408', 'Curitiba', 'PR', '01561-595');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 7', '782', 'Salvador', 'PR', '06530-204');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 8', '111', 'Salvador', 'SP', '06259-612');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 9', '240', 'Rio de Janeiro', 'BA', '07860-630');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 10', '732', 'Curitiba', 'PR', '02670-539');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 11', '7', 'Salvador', 'PR', '03692-218');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 12', '21', 'Rio de Janeiro', 'SP', '04090-676');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 13', '857', 'São Paulo', 'BA', '03704-613');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 14', '318', 'Porto Alegre', 'RS', '03244-501');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 15', '107', 'Curitiba', 'RS', '08488-493');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 16', '184', 'Rio de Janeiro', 'BA', '09482-865');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 17', '528', 'São Paulo', 'PR', '08053-957');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 18', '757', 'São Paulo', 'RJ', '03368-538');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 19', '430', 'Rio de Janeiro', 'RJ', '09750-889');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 20', '847', 'São Paulo', 'RJ', '01947-237');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 21', '823', 'Rio de Janeiro', 'RJ', '01991-751');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 22', '445', 'Porto Alegre', 'RJ', '09535-881');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 23', '637', 'São Paulo', 'SP', '09761-350');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 24', '103', 'Curitiba', 'RJ', '04640-965');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 25', '157', 'Salvador', 'SP', '03591-920');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 26', '474', 'Salvador', 'RS', '02255-590');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 27', '627', 'Salvador', 'RJ', '01960-527');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 28', '468', 'Salvador', 'PR', '04601-431');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 29', '853', 'São Paulo', 'RS', '04483-967');
INSERT INTO `it_solutions`.`Enderecos` (rua, numero, cidade, estado, cep) VALUES ('Rua 30', '151', 'Porto Alegre', 'BA', '05749-764');
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 1', 9);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 2', 11);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 3', 9);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 4', 11);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 5', 8);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 6', 9);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 7', 13);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 8', 9);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 9', 12);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 10', 14);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 11', 13);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 12', 7);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 13', 12);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 14', 18);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 15', 11);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 16', 8);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 17', 18);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 18', 17);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 19', 15);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 20', 20);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 21', 14);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 22', 8);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 23', 17);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 24', 9);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 25', 14);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 26', 15);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 27', 10);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 28', 20);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 29', 5);
INSERT INTO `it_solutions`.`Equipes` (nomeEquipe, numeroRecursos) VALUES ('Equipe 30', 15);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 1', 8414.52, 2, 29, 15);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 2', 12540.66, 2, 5, 20);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 3', 2263.88, 4, 13, 14);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 4', 10979.31, 2, 20, 3);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 5', 5335.63, 3, 20, 8);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 6', 11766.92, 5, 24, 19);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 7', 3589.95, 4, 19, 5);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 8', 5231.99, 1, 20, 6);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 9', 13780.9, 3, 8, 28);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 10', 12407.74, 5, 3, 6);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 11', 7683.06, 1, 28, 12);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 12', 7896.68, 4, 4, 19);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 13', 8056.31, 1, 16, 1);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 14', 4981.51, 3, 13, 25);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 15', 11422.34, 4, 16, 4);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 16', 5505.95, 3, 11, 16);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 17', 7449.35, 4, 17, 21);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 18', 3579.66, 1, 29, 4);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 19', 3655.74, 3, 29, 25);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 20', 8182.07, 2, 10, 1);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 21', 2954.76, 3, 27, 24);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 22', 12518.16, 1, 15, 10);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 23', 5433.7, 5, 20, 25);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 24', 3925.97, 4, 28, 23);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 25', 11974.9, 3, 26, 12);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 26', 7339.74, 2, 22, 25);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 27', 2601.42, 1, 15, 19);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 28', 8304.53, 1, 27, 25);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 29', 14269.84, 3, 21, 27);
INSERT INTO `it_solutions`.`Recursos` (nomeRecurso, salario, Cargos_idCargos, Enderecos_idEnderecos, Equipes_idEquipes) VALUES ('Recurso 30', 10654.92, 2, 18, 4);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 95461-6587', 3);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 98588-3408', 3);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 99629-2749', 17);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 99488-1657', 9);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 94485-9509', 2);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97155-2967', 29);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 98049-4160', 4);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 92616-3695', 8);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 99003-2336', 19);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 95106-3043', 27);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 94778-9905', 21);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 94039-6177', 13);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97667-4072', 8);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97781-8633', 18);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 93274-7472', 20);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97914-9665', 15);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 92326-2557', 8);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 98471-9018', 14);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97990-5922', 5);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 96035-6636', 5);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 95046-4004', 14);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 97390-3941', 18);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 98962-1567', 23);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 95685-1451', 30);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 94388-3130', 20);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 91795-8793', 27);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 92991-3485', 29);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 91313-3091', 12);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 91191-3359', 11);
INSERT INTO `it_solutions`.`Telefone` (tipoTelefone, numeroTelefone, Recursos_idRecursos) VALUES ('Celular', '(11) 95975-1489', 21);
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v4.6');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jira', 'v3.8');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v5.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Slack', 'v4.8');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jenkins', 'v5.4');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v5.4');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v3.7');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v2.2');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v3.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jenkins', 'v3.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jenkins', 'v4.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jira', 'v3.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jira', 'v3.8');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v4.3');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jira', 'v4.6');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Slack', 'v3.9');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v1.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v5.9');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v4.5');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v3.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Slack', 'v5.2');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v5.0');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v3.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Git', 'v3.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Slack', 'v5.4');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v3.5');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jenkins', 'v3.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Slack', 'v5.3');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Jenkins', 'v5.1');
INSERT INTO `it_solutions`.`Ferramentas` (nomeFerramenta, versao) VALUES ('Trello', 'v1.9');
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (14, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (10, 1);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (19, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (16, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (12, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (8, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (8, 4);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (28, 4);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (4, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (28, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (22, 1);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (30, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (5, 1);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (26, 1);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (17, 4);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (3, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (1, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (13, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (13, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (30, 4);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (5, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (27, 4);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (11, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (26, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (14, 3);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (10, 2);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (28, 5);
INSERT INTO `it_solutions`.`FerramentasRecursos` (Recursos_idRecursos, Ferramentas_idFerramentas) VALUES (10, 3);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 1', '2023-11-15 00:00:00', '2024-07-20 00:00:00', NULL, 'Concluido', 965, NULL, 9, 12);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 2', '2023-01-08 00:00:00', '2024-02-15 00:00:00', NULL, 'Em andamento', 917, NULL, 22, 4);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 3', '2023-08-26 00:00:00', '2024-08-31 00:00:00', NULL, 'Em andamento', 787, NULL, 4, 10);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 4', '2023-06-17 00:00:00', '2024-05-13 00:00:00', NULL, 'Em andamento', 971, NULL, 23, 15);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 5', '2023-06-11 00:00:00', '2024-12-20 00:00:00', NULL, 'Concluido', 518, NULL, 21, 6);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 6', '2023-05-09 00:00:00', '2024-04-02 00:00:00', NULL, 'Em andamento', 555, NULL, 20, 11);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 7', '2023-01-05 00:00:00', '2024-04-03 00:00:00', NULL, 'Em andamento', 808, NULL, 24, 10);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 8', '2023-11-07 00:00:00', '2024-03-29 00:00:00', NULL, 'Em aberto', 944, NULL, 4, 9);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 9', '2023-06-07 00:00:00', '2024-12-04 00:00:00', NULL, 'Em aberto', 763, NULL, 8, 17);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 10', '2023-02-20 00:00:00', '2024-08-28 00:00:00', NULL, 'Em andamento', 703, NULL, 8, 13);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 11', '2023-07-24 00:00:00', '2024-01-10 00:00:00', NULL, 'Concluido', 669, NULL, 22, 7);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 12', '2023-12-21 00:00:00', '2024-12-04 00:00:00', NULL, 'Em andamento', 970, NULL, 12, 23);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 13', '2023-03-16 00:00:00', '2024-12-13 00:00:00', NULL, 'Em andamento', 653, NULL, 3, 25);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 14', '2023-05-05 00:00:00', '2024-12-02 00:00:00', NULL, 'Concluido', 568, NULL, 26, 14);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 15', '2023-03-01 00:00:00', '2024-05-31 00:00:00', NULL, 'Concluido', 512, NULL, 11, 3);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 16', '2023-04-08 00:00:00', '2024-01-26 00:00:00', NULL, 'Concluido', 896, NULL, 13, 25);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 17', '2023-02-03 00:00:00', '2024-08-01 00:00:00', NULL, 'Em andamento', 542, NULL, 22, 12);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 18', '2023-05-29 00:00:00', '2024-07-27 00:00:00', NULL, 'Em andamento', 605, NULL, 25, 18);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 19', '2023-11-22 00:00:00', '2024-07-30 00:00:00', NULL, 'Em aberto', 519, NULL, 29, 8);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 20', '2023-03-06 00:00:00', '2024-11-28 00:00:00', NULL, 'Em aberto', 990, NULL, 19, 4);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 21', '2023-01-27 00:00:00', '2024-02-07 00:00:00', NULL, 'Em andamento', 553, NULL, 17, 30);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 22', '2023-01-14 00:00:00', '2024-03-27 00:00:00', NULL, 'Em aberto', 911, NULL, 10, 21);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 23', '2023-09-01 00:00:00', '2024-04-03 00:00:00', NULL, 'Em aberto', 811, NULL, 18, 5);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 24', '2023-02-23 00:00:00', '2024-04-18 00:00:00', NULL, 'Em aberto', 896, NULL, 1, 15);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 25', '2023-01-09 00:00:00', '2024-06-10 00:00:00', NULL, 'Em aberto', 746, NULL, 13, 3);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 26', '2023-10-16 00:00:00', '2024-09-02 00:00:00', NULL, 'Em aberto', 637, NULL, 8, 18);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 27', '2023-12-15 00:00:00', '2024-01-16 00:00:00', NULL, 'Em andamento', 926, NULL, 4, 22);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 28', '2023-02-07 00:00:00', '2024-11-14 00:00:00', NULL, 'Em aberto', 648, NULL, 9, 30);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 29', '2023-09-29 00:00:00', '2024-05-04 00:00:00', NULL, 'Em aberto', 831, NULL, 29, 18);
INSERT INTO `it_solutions`.`Projetos` (nomeProjeto, dataInicio, dataPrevisaoTermino, dataTermino, status, horasPrevistas, horasUtilizadas, Equipes_idEquipes, Recursos_idGerente) VALUES ('Projeto 30', '2023-03-02 00:00:00', '2024-01-09 00:00:00', NULL, 'Em aberto', 953, NULL, 30, 10);
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Planejamento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Desenvolvimento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Desenvolvimento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Planejamento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Planejamento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Desenvolvimento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Testes');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Planejamento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Deploy');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Desenvolvimento');
INSERT INTO `it_solutions`.`Atividades` (nomeAtividade) VALUES ('Documentação');
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (16, 2);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (5, 1);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (2, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (12, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (23, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (28, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (10, 5);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (17, 2);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (20, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (23, 5);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (11, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (26, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (1, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (18, 5);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (8, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (29, 1);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (23, 2);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (19, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (19, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (23, 5);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (19, 1);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (17, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (28, 2);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (29, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (12, 1);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (24, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (19, 2);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (15, 3);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (15, 4);
INSERT INTO `it_solutions`.`ProjetosAtividades` (Projetos_idProjetos, Atividades_idAtividades) VALUES (21, 5);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 1', 4);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 2', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 3', 3);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 4', 3);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 5', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 6', 4);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 7', 5);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 8', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 9', 5);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 10', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 11', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 12', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 13', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 14', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 15', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 16', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 17', 3);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 18', 3);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 19', 3);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 20', 4);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 21', 4);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 22', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 23', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 24', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 25', 5);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 26', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 27', 2);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 28', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 29', 1);
INSERT INTO `it_solutions`.`Tarefas` (descricaoTarefa, Atividades_idAtividades) VALUES ('Descrição da Tarefa 30', 3);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-02-14 00:00:00', 144.69, 1);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-08-16 00:00:00', 230.2, 8);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-02-26 00:00:00', 123.0, 22);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-09-10 00:00:00', 293.93, 25);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-01-22 00:00:00', 232.75, 4);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-07-28 00:00:00', 186.81, 29);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-01-02 00:00:00', 161.47, 14);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-02-15 00:00:00', 400.57, 6);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-09-06 00:00:00', 248.45, 13);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-07-11 00:00:00', 359.6, 20);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-11-22 00:00:00', 252.89, 22);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-09-05 00:00:00', 217.2, 20);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-03-05 00:00:00', 355.86, 6);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-09-10 00:00:00', 410.87, 1);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-04-22 00:00:00', 463.54, 9);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-05-09 00:00:00', 395.94, 30);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-06-15 00:00:00', 368.84, 25);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-10-10 00:00:00', 442.01, 24);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-06-11 00:00:00', 227.87, 6);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-01-10 00:00:00', 236.39, 16);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-04-09 00:00:00', 197.17, 6);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-08-18 00:00:00', 110.73, 17);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-08-21 00:00:00', 423.77, 14);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-02-01 00:00:00', 340.65, 14);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-05-29 00:00:00', 488.15, 26);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-02-02 00:00:00', 332.86, 15);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-12-14 00:00:00', 424.79, 4);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-06-09 00:00:00', 194.12, 27);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-06-25 00:00:00', 272.02, 26);
INSERT INTO `it_solutions`.`HistoricoSalario` (dataAumento, valorAumento, Recursos_idRecursos) VALUES ('2023-04-28 00:00:00', 409.25, 26);