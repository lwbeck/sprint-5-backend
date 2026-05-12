import { Module } from '@nestjs/common';
import { RoomController } from './interface/controllers/room.controller';
import { RoomService } from './application/services/room.service';
import { RoomMapper } from './application/mappers/room.mapper';
import { RoomRepository } from './persistence/repository/room.repository';

@Module({
    controllers: [RoomController],
    providers: [RoomService, RoomMapper, RoomRepository],
})
export class RoomModule {}