import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
               <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" name="nome" type="text"  className="validate"  placeholder="Nome"/>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" name="preco" type="text" className="validate"   placeholder="Preço"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="descricao" name="descricao" type="text" className="validate"  placeholder="Descrição"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
            </form>
            </div>
        )
    }
}