import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from '../models';
import { TodoDto } from '../dto';
import { Filter } from '../types';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private TodoModel: typeof Todo) {}

  async findAll(): Promise<Todo[]> {
    return this.TodoModel.findAll();
  }

  async findById(id: string): Promise<Todo> {
    return this.TodoModel.findByPk(id);
  }

  async findOne(filter: Filter): Promise<Todo> {
    return this.TodoModel.findOne(filter);
  }

  async remove(id: string): Promise<void> {
    const todo = await this.TodoModel.findByPk(id);
    return todo.destroy();
  }

  async create(data: TodoDto.Create): Promise<Todo> {
    const { title, detail, status, createdBy } = data;
    return this.TodoModel.create({ title, detail, status, createdBy });
  }

  async update(id: string, data: TodoDto.Update): Promise<boolean> {
    const todo = await this.findById(id);
    if (!todo) return false;

    await this.TodoModel.update(data, null);
    return true;
  }
}
