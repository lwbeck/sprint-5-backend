import { Module } from '@nestjs/common';
import { AuthService } from './application/services/auth.service';
import { AuthController } from './interface/controllers/auth.controller';
import { JwtStrategy } from './guard/auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user.module';


@Module({
  imports: [PassportModule, JwtModule.register({ secret: process.env.JWT_SECRET || 'secret', signOptions: { expiresIn: '1d' } }), UserModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
