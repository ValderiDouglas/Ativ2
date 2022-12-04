import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Snome" type="text" className="validate" />
                            <label htmlFor="Snome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Sduracao" type="text" className="validate" />
                            <label htmlFor="Sduracao">Duração</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Sdescricao" type="text" className="validate" />
                            <label htmlFor="Sdescricao">Descrição</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Spreço" type="text" className="validate" />
                            <label htmlFor="Spreço">Preço por hora</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}