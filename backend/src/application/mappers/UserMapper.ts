import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/interface/dto/userDTO";

@Injectable()
export class UserMapper {
    public toDomain = (userDTO: UserDTO) : UserModel => 
}