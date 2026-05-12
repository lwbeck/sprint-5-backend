import { Injectable } from "@nestjs/common";
import { CreateUserDTO, UpdateUserDTO, UserResponseDTO } from "src/interface/dto/user.dto";
import { User } from "src/domain/models/user.model";

@Injectable()
export class UserMapper {
    public toDomain = async (userDTO: CreateUserDTO) : Promise<User> => {
        const user = new User(
            userDTO.id,
            userDTO.name,
            userDTO.email,
            userDTO.password,
            userDTO.level,
            userDTO.profile_img
        );

        await user.hashPassword();
        return user;
    }

    public toDTO = (user: User) : UserResponseDTO => {
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            level: user.getLevel(),
            profile_img: user.getProfileImg(),
            createdAt: user.getCreatedAt(),
            deletedAt: user.getDeletedAt()
        };
    }

    public updateDomain = async (
        user: User, 
        updateDTO: UpdateUserDTO
    ) : Promise<User> => {
        if (updateDTO.name) user.changeName(updateDTO.name);
        if (updateDTO.email) user.changeEmail(updateDTO.email);
        if (updateDTO.password) user.changePassword(updateDTO.password);
        if (updateDTO.level) user.changeLevel(updateDTO.level);
        if (updateDTO.profile_img) user.changeProfileImg(updateDTO.profile_img);

        return user;
    }
}