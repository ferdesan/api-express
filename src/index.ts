import express, { Request, Response } from "express";

import UsersControllers from "./controllers/UsersControllers";

// criar a aplicação express
const app = express();

app.use(express.json());

// criar uma rota GET do app principal
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Seja bem vindo! a página home.");
});

//acessando as rotas de UsersControllers
app.use("/", UsersControllers);

//iniciar o servidor na porta 8090
const port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log(
    " O servidor foi iniciado na porta 8090 com sucesso!: http://localhost:8090"
  );
});
