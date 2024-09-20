-- MySQL Script generated by MySQL Workbench
-- Sun Sep 15 21:26:43 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emei_prof_carolina
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emei_prof_carolina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emei_prof_carolina` DEFAULT CHARACTER SET utf8 ;
USE `emei_prof_carolina` ;

-- -----------------------------------------------------
-- Table `emei_prof_carolina`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emei_prof_carolina`.`Aluno` (
  `idAluno` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `curso` VARCHAR(45) NOT NULL,
  `nivel` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL,
  PRIMARY KEY (`idAluno`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emei_prof_carolina`.`Turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emei_prof_carolina`.`Turma` (
  `idTurma` INT NOT NULL AUTO_INCREMENT,
  `nomeTurma` VARCHAR(45) NOT NULL,
  `sala` VARCHAR(45) NOT NULL,
  `horario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTurma`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emei_prof_carolina`.`Matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emei_prof_carolina`.`Matricula` (
  `idMatricula` INT NOT NULL AUTO_INCREMENT,
  `nota_1` DOUBLE NOT NULL,
  `nota_2` DOUBLE NOT NULL,
  `nota_3` DOUBLE NOT NULL,
  `nota_final` DOUBLE NOT NULL,
  `nr_faltas` INT NOT NULL,
  `Aluno_idAluno` INT NOT NULL,
  PRIMARY KEY (`idMatricula`),
  INDEX `fk_Matricula_Aluno1_idx` (`Aluno_idAluno` ASC) VISIBLE,
  CONSTRAINT `fk_Matricula_Aluno1`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `emei_prof_carolina`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emei_prof_carolina`.`conexao_turma_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emei_prof_carolina`.`conexao_turma_aluno` (
  `idconexao_turma_aluno` INT NOT NULL AUTO_INCREMENT,
  `Turma_idTurma` INT NOT NULL,
  `Aluno_idAluno` INT NOT NULL,
  PRIMARY KEY (`idconexao_turma_aluno`),
  INDEX `fk_conexao_turma_aluno_Turma1_idx` (`Turma_idTurma` ASC) VISIBLE,
  INDEX `fk_conexao_turma_aluno_Aluno1_idx` (`Aluno_idAluno` ASC) VISIBLE,
  CONSTRAINT `fk_conexao_turma_aluno_Turma1`
    FOREIGN KEY (`Turma_idTurma`)
    REFERENCES `emei_prof_carolina`.`Turma` (`idTurma`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_conexao_turma_aluno_Aluno1`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `emei_prof_carolina`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emei_prof_carolina`.`conexao_turma_matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emei_prof_carolina`.`conexao_turma_matricula` (
  `idconexao_turma_matricula` INT NOT NULL AUTO_INCREMENT,
  `Matricula_idMatricula` INT NOT NULL,
  `Turma_idTurma` INT NOT NULL,
  PRIMARY KEY (`idconexao_turma_matricula`),
  INDEX `fk_conexao_turma_matricula_Matricula1_idx` (`Matricula_idMatricula` ASC) VISIBLE,
  INDEX `fk_conexao_turma_matricula_Turma1_idx` (`Turma_idTurma` ASC) VISIBLE,
  CONSTRAINT `fk_conexao_turma_matricula_Matricula1`
    FOREIGN KEY (`Matricula_idMatricula`)
    REFERENCES `emei_prof_carolina`.`Matricula` (`idMatricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_conexao_turma_matricula_Turma1`
    FOREIGN KEY (`Turma_idTurma`)
    REFERENCES `emei_prof_carolina`.`Turma` (`idTurma`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;