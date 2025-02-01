import express, {Request, Response} from "express";

// criar a aplicação express
const app = express();

// criar uma rota GET do app principal
app.get("/", (req: Request, res:Response) => {
    res.send("Seja bem vindo!");
})

//iniciar o servidor na porta 8090
app.listen(8090, () => {
    console.log(" O servidor foi iniciado na porta 8090 com sucesso: http://localhost:8090");
})

