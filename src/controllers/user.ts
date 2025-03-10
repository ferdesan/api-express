import { Request, Response } from "express";
import { Not } from "typeorm";

import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";

class UserControllers {
  static UserCreate = async (req: Request, res: Response) => {
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

      //criar um novo registro de usuário
      const newUser = userRepository.create(data);

      //salvar o novo registro de usuário
      await userRepository.save(newUser);

      //retornar os dados do novo usuário cadastrado
      res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        user: newUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao salvar o cadastro de usuário!", error });
    }
  };

  static UserId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      //crie uma instancia do repositorio
      const userRepository = AppDataSource.getRepository(User);

      //buscar um registro de usuário por id
      const user = await userRepository.findOneBy({ id: parseInt(id) });

      //validar se o usuário existe
      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado!" });
        return;
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar o usuário!", error });
    }
  };

  static UserEdit = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = req.body;

      //crie uma instancia do repositorio
      const userRepository = AppDataSource.getRepository(User);

      //buscar um registro de usuário por id
      const user = await userRepository.findOneBy({ id: parseInt(id) });

      //validar se o usuário existe
      if (!user) {
        res.status(404).json({
          message:
            "Usuário não encontrado, verifique todos os dados ou tente novamente mais tarde!",
        });
        return;
      }

      //verificar se o email já existe no banco de dados
      const existingUser = await userRepository.findOne({
        where: {
          email: data.email,
          id: Not(parseInt(id)),
        },
      });

      //validar se o email já existe no banco de dados
      if (existingUser) {
        res.status(400).json({
          message: "Este email já existe no cadastro de outro usuário!",
        });
        return;
      }

      //atualizar os dados do usuário
      userRepository.merge(user, data);

      //salvar os dados atualizados
      const updatedUser = await userRepository.save(user);

      //retornar os dados atualizados
      res.status(200).json({
        message: "Dados do usuário atualizado com sucesso!",
        user: updatedUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao atualizar os dados do usuário!", error });
    }
  };

  static UserDelete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      //crie uma instancia do repositorio
      const userRepository = AppDataSource.getRepository(User);

      //buscar um registro de usuário por id
      const user = await userRepository.findOneBy({ id: parseInt(id) });

      //validar se o usuário existe
      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado!" });
        return;
      }

      //remover o registro do usuário
      await userRepository.remove(user);

      //retornar uma mensagem de sucesso
      res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao remover o usuário!", error });
    }
  };

  static UserList = async (req: Request, res: Response) => {
    try {
      /**
       * criar uma instancia do repositorio
       */
      const userRepository = AppDataSource.getRepository(User);

      /**
       * buscar todos os registros de usuários
       */
      const users = await userRepository.find();

      //retornar os dados dos usuários
      res.status(200).json(users);
      return;
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar dados dos usuários!", error });
    }
  };
}

export default UserControllers;
