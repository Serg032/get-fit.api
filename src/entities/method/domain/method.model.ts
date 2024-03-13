import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "method" })
export class Method extends Model {
  @Column
  name: string;
}
