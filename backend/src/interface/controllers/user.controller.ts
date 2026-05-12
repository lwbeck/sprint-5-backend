import { Controller, Get, Param, Patch, Post, Body } from "@nestjs/common";
import type { UUID } from "crypto";
import { CreateUserDTO } from "../dto/user.dto";

@Controller('users')
export class UserController{
    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return "This action creates a new user";
    }

    @Get()
    findAll() {
        return "This action returns all users";
    }

    @Get(':id')
    findOne(@Param('id') id: UUID) {
        return `This action returns a user by id: ${id}`;
    }

    @Patch(':id')
    update(@Param('id') id: UUID) {
        return `This action updates a user by id: ${id}`;
    }

    @Get(':id')
    delete(@Param('id') id: UUID) {
        return `This action deletes a user by id: ${id}`;
    }
}

/*
Criar Usuário 	POST /users 	Nível 5 	Nome, email, senha (hash), nível
Listar Usuários 	GET /users 	Autenticado 	Lista todos os usuários
Buscar por ID 	GET /users/:id 	Autenticado 	Retorna dados de um usuário específico
Atualizar Usuário 	PATCH /users/:id 	O próprio ou nível 5 	Apenas nível 5 pode alterar nível
Deletar Usuário 	DELETE /users/:id 	Nível 4 ou 5 	Deleção lógica (marca deletedAt)
/*/