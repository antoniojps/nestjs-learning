import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'Antonio' },
    { id: 1, name: 'Marco' },
  ];

  findAll(name?: string) {
    return this.users.find((user) => user.name === name);
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
