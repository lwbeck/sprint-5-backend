import { IsString, IsEmail, IsOptional, IsEnum, IsNumber, Min, Max, IsInt, IsUUID } from 'class-validator';
import type { UUID } from 'crypto';

export class CreateUserDTO{
    @IsUUID()
    id: UUID;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(5)
    level: number;

    @IsOptional()
    profile_img: string;
}

export class UpdateUserDTO{
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(5)
    level?: number;

    @IsOptional()
    profile_img?: string;
}

export class UserResponseDTO{
    id: string;
    name: string;
    email: string;
    level: number;
    profile_img: string;
    createdAt: number;
    deletedAt: number | null;
}
