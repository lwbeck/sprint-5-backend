import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "src/persistence/repository/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userRepository: UserRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || "secret",
        });
    }

    async validate(payload: any) {
        const user = await this.userRepository.findByEmail(payload.email);
        if (!user) {
            throw new Error('User not found');
        }
        return { email: user.getEmail(), id: user.getId(), level : user.getLevel() };
    }
}