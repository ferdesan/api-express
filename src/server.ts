import { app } from "./app";

import { routerUsers } from "./controllers/UsersControllers";

/**
 * acessar as rotas de UsersControllers
 * @param {string} path - caminho da rota
 * @param {Router} routerUsers - rota de UsersControllers
 */
app.use("/", routerUsers);

/**
 * iniciar o servidor na porta 8090
 * @param {number} port - porta do servidor
 */
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
