import { AppDataSource } from "./config/data-source";

import express from "express";

import routes from "./routes";

// criar a aplicaão express
export const app = express();

// configurar a aplicação para aceitar JSON
app.use(express.json());

// configurar a aplicação para aceitar urlencoded
app.use("/", routes);

// iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    " O servidor foi iniciado na porta 3000 com sucesso!: http://localhost:3000"
  );
  process.on("SIGINT", () => {
    console.log("Servidor encerrado");
    process.exit();
  });
});

// iniciar conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao tentar acessar banco de dados", error);
  });
