import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers";

const users = Router();

users.get("/users", UsersControllers.UsersList);
users.get("/users/:id", UsersControllers.UsersId);
users.post("/users", UsersControllers.UsersCreate);    
users.put("/users/:id", UsersControllers.UsersEdit);
users.delete("/users/:id", UsersControllers.UsersDelete);

export default users;