import { Sequelize } from "sequelize-typescript";
import { User } from "../entities/user/domain/user.model";
import { Exercise } from "src/entities/exercise/domain/exercice.model";

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
      sequelize.addModels([User, Exercise]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
