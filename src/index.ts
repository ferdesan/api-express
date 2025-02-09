import express, {Request, Response} from "express";

// importar o arquivo com as credenciais de acesso ao banco de dados
import { AppDataSource } from "./data-source";

// criar a aplicação express
const app = express();

// iniciar conexão com o banco de dados
AppDataSource.initialize()
.then(()=> {
    console.log("Conexão com o banco de dados realizado com sucesso")
}).catch((error)=>{
    console.log("Erro ao tentar acessar banco de dados", error)
});

// criar uma rota GET do app principal
app.get("/", (req: Request, res:Response) => {
    res.send("Seja bem vindo!");
})

//iniciar o servidor na porta 8090
app.listen(8090, () => {
    console.log(" O servidor foi iniciado na porta 8090 com sucesso!: http://localhost:8090");
})

