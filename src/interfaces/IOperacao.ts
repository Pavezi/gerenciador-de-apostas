import Operacao from '../classes/Operacao';

interface IOperacao {
    _tipo: string;
    _id_categoria_operacao: string;
    _valor: string;
    _odd: string;
    _resultado: string;

    cadastrar(Operacao: Operacao): string;
    remover(Operacao: Operacao): string;
}

export default IOperacao;