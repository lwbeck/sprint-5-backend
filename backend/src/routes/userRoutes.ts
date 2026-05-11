/*
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

*/