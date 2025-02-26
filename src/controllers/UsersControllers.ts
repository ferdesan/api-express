import express, { Request, Response } from "express";

import { AppDataSource } from "../data-source";

import { User } from "../entity/User";

const router = express.Router();

router.post("/users", async (req: Request, res: Response) => {
  try {
    var data = req.body;

    //crie uma instancia do repositorio
    const userRepository = AppDataSource.getRepository(User);

    //verificar se já existe uma registro cadastro no banco com por email
    const existingUser = await userRepository.findOne({
      where: { email: data.email },
    });

    //validar se a verificação retornou um registro existente
    if (existingUser) {
      res.status(400).json({
        message: "Este usuário já existe cadastrado no banco de dados!",
      });
      return;
    }

    const newUser = userRepository.create(data);
    await userRepository.save(newUser);

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      user: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao salvar o cadastro de usuário!", error });
  }
});

router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Seja bem vindo a nossa api[GET] test");
});

export default router;
