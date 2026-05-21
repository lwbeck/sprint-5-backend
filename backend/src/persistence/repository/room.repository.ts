import { Injectable } from "@nestjs/common";
import type { UUID } from "crypto";
import { Room } from "../../domain/models/room.model";

@Injectable()
export class RoomRepository {
    private rooms: Room[] = [];

    async create(room: Room): Promise<Room> {
        this.rooms.push(room);
        return room;
    }

    async findAll(): Promise<Room[]> {
        return this.rooms;
    }

    async findById(id: UUID): Promise<Room | null> {
        return this.rooms.find(room => room.getId() === id) || null;
    }

    async updateRoom(id: UUID, room: Room): Promise<Room> {
        await this.findById(id);
        const index = this.rooms.findIndex(r => r.getId() === id);
        this.rooms[index] = room;
        return room;
    }

    async toggleBlock(id: UUID): Promise<Room | null> {
        const room = await this.findById(id);
        if (!room) return null;

        room.toggleBlock();
        return await this.updateRoom(id, room);
    }

}

