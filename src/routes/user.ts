import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers";

const user = Router();

user.get("/users", UsersControllers.UserList);
user.get("/users/:id", UsersControllers.UserId);
user.post("/users", UsersControllers.UserCreate);    
user.put("/users/:id", UsersControllers.UserEdit);
user.delete("/users/:id", UsersControllers.UserDelete);

export default user;