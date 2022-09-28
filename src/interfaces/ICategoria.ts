import Categoria from '../classes/Categoria';

interface ICategoria {
    _nome: string;

    cadastrar(Categoria: Categoria): string;
    remover(Categoria: Categoria): string;
}

export default ICategoria;