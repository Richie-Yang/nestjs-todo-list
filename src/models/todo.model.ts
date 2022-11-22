import { Column, Model, Table } from 'sequelize-typescript';
import { TODO_STATUS } from '../variables';

@Table
export class Todo extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  title: string;

  @Column
  detail: string;

  @Column
  status: TODO_STATUS;

  @Column
  createdBy: string;
}
