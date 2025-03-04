import express from "express"

import routes from "./routes";

// criar a aplicaão express
export const app = express();

// configurar a aplicação para aceitar JSON
app.use(express.json());

// configurar a aplicação para aceitar urlencoded
app.use("/", routes);

// iniciar o servidor
const port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log(
    " O servidor foi iniciado na porta 8090 com sucesso!: http://localhost:8090"
  );

  /**
   * encerrar o servidor
   */
  process.on("SIGINT", () => {
    console.log("Servidor encerrado");
    process.exit();
  });
});
