import { Router, Request, Response } from "express";
import user from "./user";

const routes = Router();

routes.use("/", user);

// criar uma rota GET do app principal
routes.get("/", (req: Request, res: Response) => {
  res.status(200).send("Seja bem vindo! a página home de nossa API.");
});

// criar uma rota GET para testar a api
routes.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Seja bem vindo a nossa api[GET] test");
});

export default routes;

