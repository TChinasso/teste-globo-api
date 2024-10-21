# TESTE-GLOBO-API

## Aplicação Node.js Express com TypeScript e Prisma ORM

## Visão Geral

Esta é uma aplicação Node.js construída com Express, TypeScript e Prisma ORM. Visando atender todos os requisitos listados no arquivo de requisitos para o teste.

## Funcionalidades

- **TypeScript** para segurança de tipos e uma melhor experiência de desenvolvimento.
- **Express** como framework para construção de APIs RESTful.
- **Prisma ORM** para modelagem e migrações de banco de dados.
- **PostgreSQL** como banco de dados relacional padrão.
- **jsonwebtoken** para geração e verificação de tokens JWT, permitindo autenticação segura em APIs.
- **bcryptjs** para hashing de senhas, garantindo a segurança e integridade das credenciais de usuários.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de atender os seguintes requisitos:

- **Node.js** (v18+)
- **PostgreSQL** (Executar através do docker disponibilizado na raiz do projeto)

## Começando

### 1. Clonar o Repositório

```bash
git clone https://github.com/TChinasso/teste-globo-api.git
cd teste-globo-api
```

### 2. Instalar Dependências

Usando npm:

```bash
npm install
```

Ou com yarn:

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e forneça as variáveis de ambiente necessárias:

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"
DIRECT_DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"
PORT=3001
JWT_SECRET=thatIsTheSecret
```

### 4.1 Rodar Banco de Dados

Execute os seguintes comandos para criar o banco de dados e rodar através do docker:

```bash
docker-compose up--build dcs-postgres
```

### 4.2 Configuração do Banco de Dados

Execute os seguintes comandos rodar as migrações:

```bash
npx prisma generate
npx prisma migrate deploy
```

Alternativamente, para aplicar o esquema sem migrações, use:

```bash
npx prisma db push
```

Para criar dados de teste, rode o seguinte comando:

```bash
npx prisma db seed
```

### 5. Executar a Aplicação

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

O servidor será iniciado na porta especificada no seu arquivo `.env` (o padrão é `3000`).

## Licença

Este projeto está licenciado sob a Licença MIT.

---

### Referências

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
