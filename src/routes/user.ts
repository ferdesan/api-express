import { Router } from "express";
import UserControllers from "../controllers/user";

const user = Router();

user.get("/users", UserControllers.UserList);
user.get("/users/:id", UserControllers.UserId);
user.post("/users", UserControllers.UserCreate);    
user.put("/users/:id", UserControllers.UserEdit);
user.delete("/users/:id", UserControllers.UserDelete);

export default user;