import { IsString, IsEmail, IsOptional, IsEnum, IsNumber, Min, Max, IsInt, IsUUID } from 'class-validator';

export class CreateUserDTO{
    @IsUUID()
    id: string;

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

export class UserResponseDTO{
    id: string;
    name: string;
    email: string;
    level: number;
    profile_img: string;
    createdAt: number;
    deletedAt: number | null;
}
