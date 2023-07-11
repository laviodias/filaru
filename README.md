# Backend do Trabalho de Banco de Dados

#### Grupo: Caio Nascimento, Gemini Vasconcelos, Iago Nascimento, Kennedy Rocha e Lávio Dias

---

- Como executar este projeto?
  - Antes de tudo, é necessário que você possua o [docker](https://docs.docker.com/engine/install/) instalado em sua máquina
- Após a preparação do ambiente, com o projeto baixado, siga para a execução:
  - Na raiz do projeto crie um arquivo com nome `.env` e preencha da seguinte maneira:
    ````
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=admin
    DB_PASSWORD=password
    DB_NAME=filaru
    PORT=3005
    ````
  - E para executar, com o docker rodando, rode o comando

    `docker-compose up -d --build`
