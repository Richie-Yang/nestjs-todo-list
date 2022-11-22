import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from '../services';
import { TodoDto } from '../dto/index';
import { Filter } from '../types';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todoBody: TodoDto.Create) {
    return this.todoService.create(todoBody);
  }

  @Get()
  find(@Body() todoBody: Filter) {
    return this.todoService.findOne(todoBody);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() todoBody: TodoDto.Update) {
    return this.todoService.update(id, todoBody);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
