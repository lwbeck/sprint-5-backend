/*

4. CRUD de Salas
Função 	Rota 	Acesso 	Observações
Criar Sala 	POST /room 	Autenticado 	Somente nível 5
Editar Sala 	PUT /room/:id 	Nível 5 	Pode alterar name e request_level
Listar Salas 	GET /rooms 	Autenticado 	Lista todas com id, nome e nível
Buscar Sala por ID 	GET /room/:id 	Autenticado 	Retorna dados da sala
Bloquear/Desbloquear Sala 	PATCH /room/:id 	Somente nível 5 	Alterna is_blocked
*/