import {app} from "./app";

import { routerUsers } from "./controllers/UsersControllers";

//acessar as rotas de UsersControllers
app.use("/", routerUsers);

//iniciar o servidor na porta 8090
const port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log(
    " O servidor foi iniciado na porta 8090 com sucesso!: http://localhost:8090"
  );
});
