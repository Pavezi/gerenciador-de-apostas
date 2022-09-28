import ICategoria from "../interfaces/ICategoria";

class Categoria implements ICategoria {
    _nome: string;

    constructor(nome: string, id_categoria_operacao: string, valor: string, odd: string, resultado: string) {
        this._nome = nome;

    }

    get getNome(): string {
        return this._nome;
    }

    set setNome(nome: string) {
        this._nome = nome;
    }

    public cadastrar(operacao: Categoria): string {
        return "Faz aqui o cadastro da operacao";
    }

    public remover(operacao: Categoria): string {
        return "Faz aqui o cadastro da operacao";
    }

}

export default Categoria;