/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <div className="row"><h5>Filtrar por:</h5>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">mais consumidos</a>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">mais consumidos por gênero</a>
                </div>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className={estilo}>Produto 4</a>
            </div>
        )
    }
}
