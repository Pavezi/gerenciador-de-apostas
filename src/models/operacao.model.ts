import { ResultSetHeader } from "mysql2";
import IOperacao from "../interfaces/IOperacao";
import connection from "./connection";

const create = async (operacao: IOperacao): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>("INSERT INTO operacao (tipo, id_categoria_operacao, valor, odd) VALUES (?, ?, ?, ?)",
        [operacao.tipo, operacao.id_categoria_operacao, operacao.valor, operacao.odd]);

    return result;
}

const getAll = async (): Promise<IOperacao[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM operacao',
    );
    return rows as IOperacao[];
}

const getById = async (id: number): Promise<IOperacao> => {
    const [rows] = await connection.execute(
        'SELECT * FROM operacao WHERE id = ?', [id],
    );
    const [operacao] = rows as IOperacao[];
    return operacao as IOperacao;
}

const getOperacaoTipo = async (id_categoria_operacao: string): Promise<IOperacao> => {
    const [rows] = await connection.execute(
        'SELECT * FROM operacao WHERE id_categoria_operacao = ?', [id_categoria_operacao],
    );
    const [operacao] = rows as IOperacao[];
    return operacao as IOperacao;
}

const update = async (id: number, operacao: IOperacao): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
        "UPDATE operacao SET tipo=?, id_categoria_operacao=?, valor=?, odd=? WHERE id=?",
        [operacao.tipo, operacao.id_categoria_operacao, operacao.valor, operacao.odd, id]
    );

    return result;
}

const remove = async (id: number): Promise<void> => {
    await connection.execute(
        "DELETE FROM operacao WHERE id=?",
        [id]
    );
}


export default { create, getAll, getById, getOperacaoTipo, update, remove };