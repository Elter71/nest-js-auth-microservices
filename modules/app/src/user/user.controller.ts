import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthGuard } from 'src/auth.guard';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('app')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<User> {
    return this.userService.findOne({ username: data.username });
  }

  @Post('create')
  async createUser(@Request() req) {
    return await this.userService.createUser(req.body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
