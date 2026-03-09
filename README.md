# Order API

API REST desenvolvida com **Node.js e Express** para gerenciamento de pedidos (orders).  
A aplicação possui **autenticação com JWT**, **operações CRUD de pedidos**, e **documentação interativa com Swagger**.

Este projeto foi desenvolvido como parte de um teste técnico e segue uma **arquitetura em camadas**, separando responsabilidades entre controllers, services, DTOs, validações e middlewares.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB (MongoDB Atlas)**
- **Mongoose**
- **JWT (jsonwebtoken)** – autenticação
- **bcryptjs** – hash de senha
- **Joi** – validação de requisições
- **Swagger (swagger-jsdoc + swagger-ui-express)** – documentação da API
- **dotenv** – variáveis de ambiente
- **nodemon** – servidor de desenvolvimento

---

## Arquitetura

O projeto segue uma arquitetura em camadas semelhante a aplicações backend corporativas.
```
Controller → DTO → Validation → Service → Database
```

Estrutura do projeto:
```
src
│
├── config
│   └── database.js
│
├── controllers
│   ├── OrderController.js
│   ├── UserController.js
│   └── SessionController.js
│
├── dto
│   ├── CreateOrderRequest.js
│   └── CreateUserRequest.js
│
├── mappers
│   └── OrderMapper.js
│
├── middlewares
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validationMiddleware.js
│
├── models
│   ├── Order.js
│   └── User.js
│
├── routes
│   ├── orderRoutes.js
│   ├── userRoutes.js
│   └── authRoutes.js
│
├── services
│   ├── OrderService.js
│   └── UserService.js
│
├── swagger
│   ├── swagger.js
│   ├── order.yaml
│   ├── user.yaml
│   └── auth.yaml
│
└── validators
    └── orderValidator.js
```

---

## Instalação

Clone o repositório:
```bash
git clone https://github.com/seu-repositorio/order-api.git
cd order-api
```

Instale as dependências:
```bash
npm install
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
MONGO_URI=mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/order-api
JWT_SECRET=seu_segredo_jwt
```

---

## Configuração do MongoDB

A aplicação utiliza **MongoDB Atlas**. Passos para configurar:

1. Criar um cluster no MongoDB Atlas
2. Criar um usuário do banco de dados
3. Adicionar seu IP em **Network Access**
4. Copiar a string de conexão
5. Inserir no `.env` na variável `MONGO_URI`

---

## Executando a Aplicação

Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## Documentação da API

A documentação interativa está disponível em:
```
http://localhost:3000/api-docs
```

Através do Swagger é possível testar todos os endpoints diretamente pelo navegador.

---

## Autenticação

A API utiliza autenticação baseada em **JWT**.

### Criar Usuário
```http
POST /users
```
```json
{
  "name": "Gabriel Medeiros",
  "email": "gabriel@email.com",
  "password": "123456"
}
```

### Login
```http
POST /login
```
```json
{
  "email": "gabriel@email.com",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "user": {
    "id": "user_id",
    "email": "gabriel@email.com"
  },
  "token": "JWT_TOKEN"
}
```

Utilize o token nos endpoints protegidos:
```
Authorization: Bearer TOKEN
```

---

## Endpoints de Pedido (Orders)

> Todos os endpoints de pedido exigem autenticação.

### Criar Pedido
```http
POST /order
```
```json
{
  "orderId": "ORD-1001",
  "value": 1000,
  "creationDate": "2026-03-09T10:00:00Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

### Listar Pedidos
```http
GET /order/list
```

### Buscar Pedido por ID
```http
GET /order/{orderId}
```

### Atualizar Pedido
```http
PUT /order/{orderId}
```

### Deletar Pedido
```http
DELETE /order/{orderId}
```

---

## Modelos de Dados

### User
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "senha criptografada"
}
```

> A senha é armazenada utilizando hash com **bcrypt**.

### Order
```json
{
  "_id": "ObjectId",
  "orderId": "string",
  "value": "number",
  "creationDate": "date",
  "items": [
    {
      "productId": "number",
      "quantity": "number",
      "price": "number"
    }
  ]
}
```

---

## Tratamento de Erros

A aplicação possui um middleware global de tratamento de erros.

### Pedido duplicado
```
409 Conflict
```
```json
{
  "message": "Order with this orderId already exists"
}
```

### Pedido não encontrado
```
404 Not Found
```

---

## Possíveis Melhorias

- Associar pedidos a usuários (controle de propriedade do pedido)
- Implementar paginação na listagem de pedidos
- Adicionar testes unitários e de integração
- Implementar controle de roles/permissões
- Implementar logs estruturados
- Rate limiting na API

---

## Autor

**Gabriel Medeiros**