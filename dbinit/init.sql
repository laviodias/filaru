DROP DATABASE IF EXISTS `filaru`;
CREATE DATABASE `filaru`;
USE `filaru`;

CREATE USER 'root'@'172.29.0.2' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.29.0.2';
ALTER USER 'root'@'172.29.0.2' IDENTIFIED BY 'root'
UPDATE USER SET plugin="auth_socket" where User='root'

DROP TABLE IF EXISTS `alunos`;
DROP TABLE IF EXISTS `filas`;
DROP TABLE IF EXISTS `restaurantes`;
DROP TABLE IF EXISTS `funcionarios`;
DROP TABLE IF EXISTS `funcionario_restaurante`;
DROP TABLE IF EXISTS `cardapios`;
DROP TABLE IF EXISTS `aluno_fila`;
DROP TABLE IF EXISTS `pratos`;
DROP TABLE IF EXISTS `cardapio_prato`;

CREATE TABLE alunos (
  matricula VARCHAR(20) PRIMARY KEY
);

CREATE TABLE restaurantes (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(60)
);

CREATE TABLE filas (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  restaurante_codigo INT,
  vagas_restantes INT,
  posicao_atual INT,
  data_fila DATE,
  FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo)
);

CREATE TABLE funcionarios (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(60),
  data_admissao DATE
);

CREATE TABLE funcionario_restaurante (
 restaurante_codigo INT,
 funcionario_codigo INT,
 FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo),
 FOREIGN KEY (funcionario_codigo) REFERENCES funcionarios(codigo),
 PRIMARY KEY (restaurante_codigo, funcionario_codigo)
);

CREATE TABLE pratos (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  principal VARCHAR(30),
  salada VARCHAR(30),
  carne VARCHAR(30),
  suco VARCHAR(30),
  sobremesa VARCHAR(30)
);

CREATE TABLE cardapios (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  restaurante_codigo INT,
  data_cardapio DATE,
  pratos_codigo INT,
  FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo),
  FOREIGN KEY (pratos_codigo) REFERENCES pratos(codigo)
);

CREATE TABLE aluno_fila (
  aluno_matricula VARCHAR(20),
  codigo_fila INT,
  posicao INT,
  FOREIGN KEY (aluno_matricula) REFERENCES alunos(matricula),
  FOREIGN KEY (codigo_fila) REFERENCES filas(codigo),
  PRIMARY KEY (aluno_matricula, codigo_fila)
);

CREATE TABLE cardapio_prato (
  cardapio_codigo INT,
  prato_codigo INT,
  FOREIGN KEY (cardapio_codigo) REFERENCES cardapios(codigo),
  FOREIGN KEY (prato_codigo) REFERENCES pratos(codigo)
);
