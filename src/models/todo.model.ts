import { Column, Model, Table } from 'sequelize-typescript';

enum TODO_STATUS {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  ONGOING = 'ONGOING',
  UPCOMING = 'UPCOMING',
  CLOSED = 'CLOSED',
}

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
