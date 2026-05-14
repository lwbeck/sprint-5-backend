import { Injectable } from "@nestjs/common";
import { CreateRoomDTO, UpdateRoomDTO, RoomResponseDTO } from "src/interface/dto/room.dto";
import { Room } from "src/domain/models/room.model";

@Injectable()
export class RoomMapper {
    public toDomain = async (roomDTO: CreateRoomDTO) : Promise<Room> => {
        return new Room(
            roomDTO.id,
            roomDTO.description,
            roomDTO.accessLevel,
            roomDTO.isBlocked || false
        );
    }

    public toDTO = (room: Room) : RoomResponseDTO => {
        return {
            id: room.getId(),
            description: room.getDescription(),
            accessLevel: room.getAccessLevel(),
            isBlocked: room.getIsBlocked()
        };
    }

    public updateDomain = async (
        room: Room, 
        updateDTO: UpdateRoomDTO
    ) : Promise<Room> => {
        if (updateDTO.description) room.changeDescription(updateDTO.description);
        if (updateDTO.accessLevel) room.changeAccessLevel(updateDTO.accessLevel);

        return room;
    }

    public toggleBlock = async (
        room: Room, 
        isBlocked: boolean
    ) : Promise<Room> => {
        if (isBlocked !== room.getIsBlocked()) room.toggleBlock();
        return room;
    }
}