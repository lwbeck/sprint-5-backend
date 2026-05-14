import { Injectable } from "@nestjs/common";
import type { UUID } from "crypto";
import { User } from "src/domain/models/user.model";

@Injectable()
export class UserRepository {
    private users: User[] = [];

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.users.filter(user => user.getDeletedAt() === null);
    }

    async findById(id: UUID): Promise<User | null> {
        return this.users.find(user => user.getId() === id && user.getDeletedAt() === null) || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.getEmail() === email && user.getDeletedAt() === null) || null;
    }

    async update(id: UUID, user: User): Promise<User> {
        await this.findById(id);
        const index = this.users.findIndex(u => u.getId() === id);
        this.users[index] = user;
        return user;
    }

    async delete(id: UUID): Promise<void> {
        const user = await this.findById(id);
        if (user) user.delete();
    }
}

