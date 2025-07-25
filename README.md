# Pizza Backend

Backend API para sistema de pizzaria desenvolvido em Node.js com TypeScript.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express** - Framework web
- **Prisma** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **bcryptjs** - Criptografia de senhas
- **Multer** - Upload de arquivos
- **CORS** - Cross-origin resource sharing

## 📁 Estrutura do Projeto

```
src/
├── controllers/     # Controladores (MVC)
├── services/        # Lógica de negócio
├── middlewares/     # Middlewares de autenticação
├── config/          # Configurações (multer)
├── prisma/          # Schema e migrations
└── @types/          # Tipos TypeScript
```

## 🏗️ Padrões de Projeto

- **MVC (Model-View-Controller)** - Separação de responsabilidades
- **Repository Pattern** - Acesso a dados via Prisma
- **Service Layer** - Lógica de negócio isolada
- **Middleware Pattern** - Autenticação e validação
- **RESTful API** - Endpoints seguindo convenções REST

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- Yarn ou npm

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/fernandoalbuquerqueponte/pizzaria-backend.git
cd pizzaria-backend
```

2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env
```

4. **Configure o banco de dados**

```bash
# Execute as migrations
npx prisma migrate dev

# Gere o cliente Prisma
npx prisma generate
```

5. **Execute o projeto**

```bash
# Desenvolvimento
yarn dev
# ou
npm run dev
```

### Variáveis de Ambiente

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pizzaria"
JWT_SECRET="sua_chave_secreta_aqui"
```

## 📋 Funcionalidades

- **Usuários**: Cadastro, autenticação e gerenciamento
- **Categorias**: CRUD de categorias de produtos
- **Produtos**: Cadastro com upload de imagens
- **Pedidos**: Criação, gerenciamento e finalização
- **Itens**: Adição e remoção de itens nos pedidos

## 🔧 Scripts Disponíveis

- `yarn dev` - Executa o servidor em modo desenvolvimento
- `npx prisma migrate dev` - Executa migrations
- `npx prisma generate` - Gera cliente Prisma
- `npx prisma studio` - Abre interface do Prisma

## 📡 Endpoints Principais

- `POST /users` - Criar usuário
- `POST /session` - Autenticar usuário
- `POST /category` - Criar categoria
- `POST /product` - Criar produto
- `POST /order` - Criar pedido
- `GET /orders` - Listar pedidos

## 🚀 Deploy

O projeto está configurado para rodar na porta 3333. Para produção, configure:

- Variáveis de ambiente
- Banco de dados PostgreSQL
- Process manager (PM2, etc.)
- Proxy reverso (Nginx, etc.)
