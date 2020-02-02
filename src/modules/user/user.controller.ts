import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {

    constructor(private readonly _userServices: UserService) {

    }

    @Get()
    async getUser(@Param() id: number): Promise<UserDto> {
        const user = await this._userServices.get(id);
        return user;
    }

    @Get()
    async getUsers(): Promise<UserDto[]>  {
        const users = await this._userServices.getAll();
        return users;
    }

    @Post()
    async createUser(@Body() user: User): Promise<UserDto>  {
        const users = await this._userServices.create(user);
        return users;
    }
}
