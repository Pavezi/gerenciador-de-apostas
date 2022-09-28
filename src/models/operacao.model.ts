import { ResultSetHeader } from "mysql2";
import IOperacao from "../interfaces/user.interface";
import connection from "./connection";

const create = async (user: IOperacao): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>("INSERT INTO operacao (tipo, id_categoria_operacao, valor, odd) VALUES (?, ?, ?, ?)",
        [user.tipo, user.id_categoria_operacao, user.valor, user.odd]);

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
    const [user] = rows as IOperacao[];
    return user as IOperacao;
}

const getOperacaoEmail = async (id_categoria_operacao: string): Promise<IOperacao> => {
    const [rows] = await connection.execute(
        'SELECT * FROM operacao WHERE id_categoria_operacao = ?', [id_categoria_operacao],
    );
    const [user] = rows as IOperacao[];
    return user as IOperacao;
}

const update = async (id: number, user: IOperacao): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
        "UPDATE operacao SET tipo=?, id_categoria_operacao=?, valor=?, odd=? WHERE id=?",
        [user.tipo, user.id_categoria_operacao, user.valor, user.odd, id]
    );

    return result;
}

const remove = async (id: number): Promise<void> => {
    await connection.execute(
        "DELETE FROM operacao WHERE id=?",
        [id]
    );
}


export default { create, getAll, getById, getOperacaoEmail, update, remove };