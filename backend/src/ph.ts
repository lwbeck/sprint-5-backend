//`${BASE_URL}/login`
//`${BASE_URL}/places`
//`${BASE_URL}/users`
//`${BASE_URL}/badge`

/*
Backlog Técnico

📌 Configuração Inicial
    Estrutura do projeto com NestJS - OK
    Configuração do Prisma + PostgreSQL
    Docker para ambiente local
    Modelagem de User e Room - OK
    Hash de senha segura - OK

📌 CRUD de Usuário
    Rotas, serviços, repositórios
    Middleware de autorização por level
    Validações com class-validator

📌 CRUD de Sala
    Rotas, serviços, repositórios

📌 Autenticação
    Login + JWT
    Middleware de token
    Middleware de autorização

📌 Relatórios
    CSV (csv-writer, fast-csv)
    PDF (pdfkit, puppeteer)
    Rota /report

📌 Testes e Documentação (Opcional)
    Testes com Jest
    Documentação com Swagger

Modelo de Usuário (User)
Campo 	Tipo 	Descrição
id 	UUID ou Int 	Identificador único
name 	string 	Nome do usuário
email 	string 	Deve ser único e válido
password 	string 	Armazenada com hash e salt (bcrypt ou argon2)
level 	int (1 a 5) 	Nível de acesso
profile_img 	string 	Imagem em Base64
createdAt 	timestamp 	Gerado automaticamente
deletedAt 	timestamp 	Para deleção lógica

Modelo de Sala (Room)
Campo 	Tipo 	Descrição
id 	UUID ou Int 	Identificador único
description 	string 	Nome da sala
acessLevel 	int 	Nível mínimo necessário para entrar

Funcionalidades Recomendadas (Mínimas)
1. CRUD de Usuários
Função 	Rota 	Acesso 	Observações
Criar Usuário 	POST /users 	Nível 5 	Nome, email, senha (hash), nível
Listar Usuários 	GET /users 	Autenticado 	Lista todos os usuários
Buscar por ID 	GET /users/:id 	Autenticado 	Retorna dados de um usuário específico
Atualizar Usuário 	PATCH /users/:id 	O próprio ou nível 5 	Apenas nível 5 pode alterar nível
Deletar Usuário 	DELETE /users/:id 	Nível 4 ou 5 	Deleção lógica (marca deletedAt)

2. Controle de Nível
Função 	Rota 	Acesso 	Observações
Atualizar Nível de Acesso 	PATCH /users/:id/level 	Somente nível 5 	Define novo nível entre 1 a 5

3. Autenticação e Segurança
Função 	Rota 	Acesso 	Observações
Login 	POST /auth/login 	Público 	Gera token JWT com email e senha válidos
Middleware de Autenticação 	- 	Todas as rotas 	Verifica token JWT
Middleware de Autorização 	- 	Rotas sensíveis 	Verifica level do usuário]

4. CRUD de Salas
Função 	Rota 	Acesso 	Observações
Criar Sala 	POST /room 	Autenticado 	Somente nível 5
Editar Sala 	PUT /room/:id 	Nível 5 	Pode alterar name e request_level
Listar Salas 	GET /rooms 	Autenticado 	Lista todas com id, nome e nível
Buscar Sala por ID 	GET /room/:id 	Autenticado 	Retorna dados da sala
Bloquear/Desbloquear Sala 	PATCH /room/:id 	Somente nível 5 	Alterna is_blocked

Controle Obrigatório por Nível (Role)

    Toda rota deve verificar autenticação via JWT
    Verificar level via middleware centralizado
    Restrições por level:
        1 = Usuário comum
        2 a 4 = Intermediários
        5 = Admin (acesso total)
    Falha na autorização = Erro 403 (Forbidden)

✅ Definition of Done (DoD)

    Todas rotas funcionando
    Regras de autenticação e autorização aplicadas
    Senhas hasheadas com segurança
    Testes/documentação se possível


    */