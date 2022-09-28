import { hash, compare } from 'bcrypt';
import IOperacao, { IOperacaoAuth } from "../interfaces/operacao.interface";
import operacaoModel from "../models/operacao.model";
import HttpException from "../utils/httpException";
import Token from "../utils/token";


const createOperacao = async (operacao: IOperacao): Promise<IOperacao> => {
    operacao.password = (await hash(operacao.password, 8)).toString();
    const { insertId } = await operacaoModel.create(operacao);
    operacao.id = insertId;
    return operacao;
}

const getOperacaos = (): Promise<IOperacao[]> => {
    return operacaoModel.getAll();
}

const getOperacaosById = async (id: number): Promise<IOperacao> => {
    const operacao = await operacaoModel.getById(id);
    if (!operacao) throw new HttpException(404, 'Operacao não existe!');

    return operacao;
}

const updateOperacao = async (id: number, operacao: IOperacao): Promise<IOperacao> => {
    operacao.password = (await hash(operacao.password, 8)).toString();
    const teste = await operacaoModel.update(id, operacao);
    operacao.id = id;

    return operacao
}

const removeOperacao = async (id: number): Promise<void> => {
    await operacaoModel.remove(id);
}

export default { createOperacao, getOperacaos, getOperacaosById, updateOperacao, removeOperacao };