import { Inject, Injectable } from "@nestjs/common";
import { CreateRoomDTO } from "../../interface/dto/room.dto";
import { RoomRepository } from "../../persistence/repository/room.repository";
import { RoomMapper } from "../mappers/room.mapper";
import type { UUID } from "crypto";

@Injectable()
export class RoomService {
    constructor(
        private readonly roomRepository: RoomRepository,
        private readonly roomMapper: RoomMapper
    ) {}

    async create(roomDTO: CreateRoomDTO) {
        const room = await this.roomMapper.toDomain(roomDTO);
        return await this.roomRepository.create(room);
    }

    async getAll() {
        return await this.roomRepository.findAll();
    }

    async getById(id: UUID) {
        return await this.roomRepository.findById(id);
    }

    async update(id: UUID, roomDTO: CreateRoomDTO) {
        const room = await this.roomRepository.findById(id);
        if (!room) return null;

        const updatedRoom = await this.roomMapper.updateDomain(room, roomDTO);
        return await this.roomRepository.updateRoom(id, updatedRoom);
    }

    async toggleBlock(id: UUID) {
        const room = await this.roomRepository.findById(id);
        if (!room) return null;

        room.toggleBlock();
        return await this.roomRepository.updateRoom(id, room);
    }
}