import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.update(id, userUpdate);
  }
  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
