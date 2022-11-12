import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../services';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(): string {
    return this.todoService.getTodo();
  }
}
