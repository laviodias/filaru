USE `filaru`;

INSERT INTO alunos (matricula) VALUES ('2017000001');
INSERT INTO alunos (matricula) VALUES ('2017000002');
INSERT INTO alunos (matricula) VALUES ('2017000003');

INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário Ondina');
INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário São Lázaro');

INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-01');
INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-02');
INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (2, 100, 1, '2017-10-03');

INSERT INTO funcionarios (nome, data_admissao) VALUES ('João', '2017-10-01');
INSERT INTO funcionarios (nome, data_admissao) VALUES ('Maria', '2017-10-01');

INSERT INTO funcionario_restaurante (restaurante_codigo, funcionario_codigo) VALUES (1, 1);
INSERT INTO funcionario_restaurante (restaurante_codigo, funcionario_codigo) VALUES (2, 2);

INSERT INTO pratos (principal, salada, carne, suco, sobremesa) VALUES ('Arroz', 'Salada', 'Carne', 'Suco', 'Sobremesa');

INSERT INTO cardapios (restaurante_codigo, data_cardapio, pratos_codigo) VALUES (1, '2017-10-01', 1);
INSERT INTO cardapios (restaurante_codigo, data_cardapio, pratos_codigo) VALUES (2, '2017-10-02', 1);

INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000001', 1, 1);
INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000002', 1, 2);
INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000003', 2, 1);

INSERT INTO cardapio_prato (cardapio_codigo, prato_codigo) VALUES (1, 1);
INSERT INTO cardapio_prato (cardapio_codigo, prato_codigo) VALUES (2, 1);
