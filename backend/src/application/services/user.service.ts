import { Delete, Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO, UpdateLevelDTO, UpdateUserDTO, DeleteUserDTO } from "../../interface/dto/user.dto";
import { UserRepository } from "../../persistence/repository/user.repository";
import { UserMapper } from "../mappers/user.mapper";
import type { UUID } from "crypto";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userMapper: UserMapper
    ) {}

    async create(userDTO: CreateUserDTO) {
        const user = await this.userMapper.toDomain(userDTO);
        return await this.userRepository.create(user);
    }

    async getAll() {
        return await this.userRepository.findAll();
    }

    async getById(id: UUID) {
        return await this.userRepository.findById(id);
    }

    async update(id: UUID, userDTO: UpdateUserDTO) {
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        const updatedUser = await this.userMapper.updateDomain(user, userDTO);
        return await this.userRepository.update(id, updatedUser);
    }

    async updateLevel(id: UUID, updateLevelDTO: UpdateLevelDTO) {
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        const updatedUser = await this.userMapper.updateLevel(user, updateLevelDTO);
        return await this.userRepository.update(id, updatedUser);
    }

    async deleteUser(id: UUID) {
        await this.userRepository.delete(id);
    }


}