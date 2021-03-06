import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UserAdminController } from './user.admin.controller';
import { UserAppController } from './user.app.controller';
import { UsersService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserAppController, UserAdminController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
