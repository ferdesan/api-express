import express, { Request, Response } from "express";

import { AppDataSource } from "../data-source";

import { User } from "../entity/User";

const router = express.Router();

type UserRequest = {
  id: string;
};

router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //crie uma instancia do repositorio
    const userRepository = AppDataSource.getRepository(User);

    //buscar um registro de usuário por id
    const user = await userRepository.findOneBy({ id: parseInt(id) });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado!" });
      return;
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar o usuário!", error });
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    //crie uma instancia do repositorio
    const userRepository = AppDataSource.getRepository(User);

    //buscar todos os registros de usuários
    const users = await userRepository.find();

    res.status(200).json(users);
    return;
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar os usuários!", error });
  }
});

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

// criar uma rota GET do app principal
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Seja bem vindo! a página home.");
});

export default router;
