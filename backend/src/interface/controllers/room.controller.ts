import { Controller, Get, Post, Put, Patch, Param, Body, UseGuards,  } from "@nestjs/common";
import { JwtAuthGuard } from "src/guard/auth/jwt-auth.guard";
import { Levels } from "src/guard/auth/levels.decorator";
import { LevelsGuard } from "src/guard/auth/levels.guard";
import { CreateRoomDTO } from "../dto/room.dto";
import type { UUID } from "crypto";

@Controller('room')
export class RoomController{
    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Post()
    create(@Body() createRoomDTO: CreateRoomDTO) {
        return createRoomDTO;
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Put(':id')
    update(@Param('id') id: UUID) {
        return `This action updates a room by id: ${id}`;
    }

    @UseGuards(JwtAuthGuard)
    @Get('rooms')
    findAll() {
        return "This action returns all rooms";
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: UUID) {
        return `This action returns a room by id: ${id}`;
    }

    @UseGuards(JwtAuthGuard, LevelsGuard)
    @Levels(5)
    @Patch(':id')
    toggleBlock(@Param('id') id: UUID) {
        return `This action toggles block status of a room by id:
    }
}

