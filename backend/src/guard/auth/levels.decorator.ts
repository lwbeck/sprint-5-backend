import { SetMetadata } from "@nestjs/common";

export const LEVELS_KEY = 'levels';

export const Levels = (...levels: number[]) => SetMetadata(LEVELS_KEY, levels);