/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <div className="row"><h5>Filtrar por:</h5>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">mais consumidos</a>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">mais consumidos em valor</a>
                </div>
                <a className={estilo}>serviço 1</a>
                <a className="collection-item">serviço 2</a>
                <a className="collection-item">serviço 3</a>
                <a className="collection-item">serviço 4</a>
            </div>
        )
    }
}