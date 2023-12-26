import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Query } from 'express-serve-static-core';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'user1', password: '123', role: 'ADMIN' },
    { id: 2, username: 'user2', password: '123', role: 'USER' },
    { id: 3, username: 'user3', password: '123', role: 'USER' },
  ];

  private id: number = 3;

  create(createUserDto: CreateUserDto): User {
    this.id++;
    const created = { id: this.id, ...createUserDto };

    this.users.push(created);

    return created
  }

  findAll(query: Query): User[] {
    if(query.role) return this.users.filter(u => u.role == query.role);
    return this.users;
  }

  findOne(id: number): User {
    const searched = this.users.find(u => u.id == id);
    if(!searched) //error: this user not exist
    
    return searched;
  }

  update(id: number, updateUserDto: UpdateUserDto): { username: string, id: number } {
    const searched = this.users.find(u => u.id == id);
    if (!searched) //error: this user not exist

    this.users = this.users.filter(u => u.id != id);
    const updated = { id: searched.id, password: searched.password, ...updateUserDto, role: 'USER' };
    this.users.push(updated);
    return { id: updated.id, username: updated.username}
  }

  remove(id: number): { ok: true } {
    const searched = this.users.find(u => u.id == id);
    if(!searched) // error: this user not exist

    this.users = this.users.filter(u => u.id != id);
    return { ok: true }
  }
}
