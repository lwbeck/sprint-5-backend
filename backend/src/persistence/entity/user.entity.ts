import type { UUID } from 'crypto';
import { User } from '/workspaces/Sprint-5-Backend/backend/generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id!: UUID;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  password!: string;

  @ApiProperty()
  level!: number;

  @ApiProperty({ required: false, nullable: true })
  profile_img!: string | null;

  @ApiProperty()
  createdAt!: number;

  @ApiProperty({ required: false, nullable: true })
  deletedAt!: number | null;
}