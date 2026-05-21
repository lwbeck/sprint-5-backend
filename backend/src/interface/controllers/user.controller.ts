import { Controller, Get, Param, Patch, Post, Body, Delete, UseGuards } from "@nestjs/common";
import type { UUID } from "crypto";
import type { CreateUserDTO, UpdateLevelDTO, UpdateUserDTO } from "../dto/user.dto";
import { LevelsGuard } from "../../guard/auth/levels.guard";
import { JwtAuthGuard } from "../../guard/auth/jwt-auth.guard";
import { Levels } from "../../guard/auth/levels.decorator";
import { UserService } from "../../application/services/user.service";

@Controller('users')
export class UserController{

    constructor( private readonly _userService: UserService) {}
    
    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return this._userService.create(createUserDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this._userService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: UUID) {
        return this._userService.getById(id);
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Patch(':id')
    update(@Param('id') id: UUID, @Body() updateUserDTO: UpdateUserDTO) {
        return this._userService.update(id, updateUserDTO);
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Patch(':id/level')
    updateLevel(@Param('id') id: UUID, @Body() updateLevelDTO: UpdateLevelDTO) {
        return this._userService.updateLevel(id, updateLevelDTO);
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(4, 5)
    @Delete(':id')
    delete(@Param('id') id: UUID) {
        return this._userService.deleteUser(id);
    }
}

/*
Criar Usuário 	POST /users 	Nível 5 	Nome, email, senha (hash), nível
Listar Usuários 	GET /users 	Autenticado 	Lista todos os usuários
Buscar por ID 	GET /users/:id 	Autenticado 	Retorna dados de um usuário específico
Atualizar Usuário 	PATCH /users/:id 	O próprio ou nível 5 	Apenas nível 5 pode alterar nível
Deletar Usuário 	DELETE /users/:id 	Nível 4 ou 5 	Deleção lógica (marca deletedAt)
/*/