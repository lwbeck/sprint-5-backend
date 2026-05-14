import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/persistence/repository/user.repository';

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JwtService) {}

    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await user.verifyPassword(password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        const payload = { email: user.getEmail(), sub: user.getId(), level : user.getLevel() };
        return this.jwtService.sign(payload);
    }
}
