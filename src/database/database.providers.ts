import { Sequelize } from "sequelize-typescript";
import { User } from "../user/user.model";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        username: "getfit",
        password: "getfit",
        database: "getfit",
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
