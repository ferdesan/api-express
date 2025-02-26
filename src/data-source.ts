import "reflect-metadata";

import { DataSource } from "typeorm";

import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [__dirname + "/migration/*.js"],
});

// iniciar conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao tentar acessar banco de dados", error);
  });
