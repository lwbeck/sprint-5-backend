import { Controller, Get, Param, Patch, Post, Body, Delete, UseGuards } from "@nestjs/common";
import type { UUID } from "crypto";
import { CreateUserDTO, UpdateLevelDTO, UpdateUserDTO } from "../dto/user.dto";
import { LevelsGuard } from "src/guard/auth/levels.guard";
import { JwtAuthGuard } from "src/guard/auth/jwt-auth.guard";
import { Levels } from "src/guard/auth/levels.decorator";

@Controller('users')
export class UserController{
    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return createUserDTO;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return "This action returns all users";
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: UUID) {
        return `This action returns a user by id: ${id}`;
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Patch(':id')
    update(@Param('id') id: UUID, @Body() updateUserDTO: UpdateUserDTO) {
        return `This action updates a user by id: ${id}`;
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Patch(':id/level')
    updateLevel(@Param('id') id: UUID, @Body() updateLevelDTO: UpdateLevelDTO) {
        return `This action updates a user's level by id: ${id}`;
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(4, 5)
    @Delete(':id')
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