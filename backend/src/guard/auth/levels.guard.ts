import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { LEVELS_KEY } from "./levels.decorator";

@Injectable()
export class LevelsGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredLevels = this.reflector.getAllAndOverride<number[]>(LEVELS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredLevels) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !requiredLevels.includes(user.level)) {
            throw new ForbiddenException('Insufficient permissions');
        }
        return true;
    }
}