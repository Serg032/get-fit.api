import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "user" })
export class User extends Model {
  @Column
  name: string;

  @Column
  lastname: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column
  password: string;

  @Column({ allowNull: false, unique: true })
  username: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
