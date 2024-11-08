import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'Vitaly', age: 35 },
    { id: '2', name: 'Gena', age: 39 },
    { id: '3', name: 'Vlad', age: 30 },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('Юзер не найден');
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: new Date().getTime().toString(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.users.map((u) =>
      u.id === id ? { ...u, ...updateUserDto } : u,
    );
  }

  deleteUser(id: string) {
    const removeUser = this.users.find((u) => u.id === id);
    this.users.filter((u) => u.id !== id);
    return removeUser;
  }
}
