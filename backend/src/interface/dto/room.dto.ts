import type { UUID } from 'crypto';

export interface CreateRoomDTO{
    id: UUID;
    description: string;
    accessLevel: number;
    isBlocked: boolean;
}

export interface UpdateRoomDTO{
    description?: string;
    accessLevel?: number;
}

export interface ToggleBlockDTO{
    isBlocked: boolean;
}

export interface RoomResponseDTO{
    id: string;
    description: string;
    accessLevel: number;
    isBlocked: boolean;
}