import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from '../models';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private TodoModel: typeof Todo) {}

  async findAll(): Promise<Todo[]> {
    return this.TodoModel.findAll();
  }

  async findOne(id: string): Promise<Todo> {
    return this.TodoModel.findOne({
      where: { id },
    });
  }

  async remove(id: string): Promise<void> {
    const todo = await this.TodoModel.findByPk(id);
    return todo.destroy();
  }

  // async create(data: Todo): Promise<Todo> {
  //   return this.TodoModel.create();
  // }
}
