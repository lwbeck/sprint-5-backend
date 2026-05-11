/*

3. Autenticação e Segurança
Função 	Rota 	Acesso 	Observações
Login 	POST /auth/login 	Público 	Gera token JWT com email e senha válidos
Middleware de Autenticação 	- 	Todas as rotas 	Verifica token JWT
Middleware de Autorização 	- 	Rotas sensíveis 	Verifica level do usuário]

*/