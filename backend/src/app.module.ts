import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { RoomModule } from './room.module';

@Module({
  imports: [AuthModule, UserModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
