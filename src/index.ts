import express from "express";

import UsersControllers from "./controllers/UsersControllers";

// criar a aplicação express
const app = express();

app.use(express.json());

//acessar as rotas de UsersControllers
app.use("/", UsersControllers);

//iniciar o servidor na porta 8090
const port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log(
    " O servidor foi iniciado na porta 8090 com sucesso!: http://localhost:8090"
  );
});
