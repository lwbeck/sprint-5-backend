;import type { UUID } from 'crypto';

export interface CreateUserDTO{
    id: UUID;
    name: string;
    email: string;
    password: string;
    level: number;
    profile_img: string;
}

export interface UpdateUserDTO{
    name?: string;
    email?: string;
    password?: string;
    profile_img?: string;
}

export interface UpdateLevelDTO{
    level: number;
}

export interface DeleteUserDTO{
    deletedAt: number;
}

export interface UserResponseDTO{
    id: string;
    name: string;
    email: string;
    level: number;
    profile_img: string;
    createdAt: number;
    deletedAt: number | null;
}
