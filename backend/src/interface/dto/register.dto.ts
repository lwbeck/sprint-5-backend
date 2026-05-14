import { IsEmail, IsInt, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class RegisterDTO{
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
