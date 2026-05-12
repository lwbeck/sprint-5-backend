import { Module } from '@nestjs/common';
import { UserController } from './interface/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { UserMapper } from './application/mappers/user.mapper';
import { UserRepository } from './persistence/repository/user.repository';

@Module({
    controllers: [UserController],
    providers: [UserService, UserMapper, UserRepository],
})
export class UserModule {}