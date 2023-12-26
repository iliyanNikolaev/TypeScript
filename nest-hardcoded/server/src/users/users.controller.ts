import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: ExpressQuery) {

    return this.usersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}

//ако е без ParseIntPipe и парамс ид-то е стринг който не би могъл да бъде преобразуван в число,
//сървъра няма на изтрие запис понеже ид-то от парамс няма да съвпадне с ид-то на никой елемент от
//users масива, но в същото време ще върне { ok: true }

//ако е с ParseIntPipe и парамс ид-то не е стринг който би могъл да бъде преобразуван в число сървъра,
//ще върне грешка 400 "Validation failed (numeric string is expected)"