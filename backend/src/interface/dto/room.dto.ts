import { IsString, IsNumber, Min, Max, IsInt, IsUUID, IsOptional, IsBoolean } from 'class-validator';
import type { UUID } from 'crypto';

export class CreateRoomDTO{
    @IsUUID()
    id: UUID;

    @IsString()
    description: string;

    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(5)
    accessLevel: number;

    @IsOptional()
    @IsBoolean()
    isBlocked: boolean;
}

export class UpdateRoomDTO{
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(5)
    accessLevel?: number;
}

export class ToggleBlockDTO{
    @IsBoolean()
    isBlocked: boolean;
}

export class RoomResponseDTO{
    id: string;
    description: string;
    accessLevel: number;
    isBlocked: boolean;
}