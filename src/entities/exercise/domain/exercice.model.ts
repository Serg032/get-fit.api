import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "exercise" })
export class Exercise extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @Column
  method: string;
}
