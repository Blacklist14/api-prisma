# Tópicos do Projeto
- [Guia para instalação](#guia-para-instalação)
- [Sobre repositório](#sobre-repositório)
- [Dependências usadas](#dependências-usadas)
- [Objetivos](#objetivos)

# Guia para instalação
* instale o [Docker/Docker-compose](https://docs.docker.com/compose/install/)

* Para instalar dependências digite no terminal oque esta  aqui ⬇️

```
npm install
```
```
docker-compose up
```
```
npx prisma migrate dev --name init
```
* Abra um novo terminal para iniciarmos o servidor ⬇️
```npm
npm start
```
* Crie um .env usando o arquivo .env_exemplo como exemplo.


# Sobre repositório
* Uma API com autenticação usando JWT e usando BANCO DE DADOS.
* Tabelas (usuários).

# Dependências usadas
* @prisma/client: ^3.10.0
* dotenv: ^16.0.0
* express: ^4.17.3
* prisma: ^3.10.0

# Objetivos

- [x] Criar DB.
- [x] Utilizar o prisma
- [ ] Criar CRUD para Usuarios.
- [ ] Adicionar JWT.