import IOperacao from "../interfaces/IOperacao";

class Operacao implements IOperacao {
    _tipo: string;
    _id_categoria_operacao: string;
    _valor: string;
    _odd: string;
    _resultado: string;

    constructor(tipo: string, id_categoria_operacao: string, valor: string, odd: string, resultado: string) {
        this._tipo = tipo;
        this._id_categoria_operacao = id_categoria_operacao;
        this._valor = valor;
        this._odd = odd;
        this._resultado = resultado;
    }

    get getNome(): string {
        return this._tipo;
    }

    set setNome(nome: string) {
        this._tipo = nome;
    }

    get getId_categoria_operacao(): string {
        return this._id_categoria_operacao;
    }

    set setId_categoria_operacao(id_categoria_operacao: string) {
        this._id_categoria_operacao = id_categoria_operacao;
    }

    get getValor(): string {
        return this._valor;
    }

    set setValor(valor: string) {
        this._valor = valor;
    }

    get getOdd(): string {
        return this._odd;
    }

    set setOdd(odd: string) {
        this._odd = odd;
    }
    get getResultado(): string {
        return this._resultado;
    }

    set setResultado(resultado: string) {
        this._resultado = resultado;
    }
    public cadastrar(operacao: Operacao): string {
        return "Faz aqui o cadastro da operacao";
    }

    public remover(operacao: Operacao): string {
        return "Faz aqui o cadastro da operacao";
    }

}

export default Operacao;