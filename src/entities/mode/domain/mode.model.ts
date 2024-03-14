import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "mode" })
export class Mode extends Model {
  @Column
  name: string;
}
