import { IsString, IsNumber, Min, Max, IsInt, IsUUID } from 'class-validator';

export class CreateRoomDTO{
    @IsUUID()
    id: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(5)
    accessLevel: number;
}

export class RoomResponseDTO{
    id: string;
    description: string;
    accessLevel: number;
}