import { Request, Response, Router } from "express";
import operacaoService from "../services/operacao.service";
import authMiddleware from '../middlewares/authMiddleware';
const operacaoController = Router();

operacaoController.post("/auth", async (req: Request, res: Response): Promise<Response> => {
    const authData = req.body;
    const token = await operacaoService.auth(authData);
    return res.status(201).json(token);
})

operacaoController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const operacao = req.body;
    const operacaos = await operacaoService.createOperacao(operacao);
    return res.status(200).json(operacaos);
})

operacaoController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const operacaos = await operacaoService.getOperacoes();

    return res.status(200).json(operacaos);
})

operacaoController.get("/:id", authMiddleware, async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const operacaos = await operacaoService.getOperacoesById(Number(id));

    return res.status(200).json(operacaos);
})

operacaoController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const operacao = req.body;
    const operacaos = await operacaoService.updateOperacao(Number(id), operacao);

    return res.status(200).json(operacaos);
})

operacaoController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await operacaoService.removeOperacao(id);

    return res.status(201).json({ message: 'Registro removido com sucesso' });
})


export default operacaoController;