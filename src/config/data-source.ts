import "reflect-metadata";

import { DataSource } from "typeorm";

import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1854",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [__dirname + "/migration/*.js"],
});
