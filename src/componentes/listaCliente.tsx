/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                
                <div className="row"><h5>Filtrar por:</h5>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn" >Gênero</a>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">Maior número de compras</a>⠀
                <a className="waves-effect #e1bee7 purple lighten-4 btn">Maior Valor</a>
                </div>
                <a className="collection-item">Cliente 1</a>
                <a className={estilo}>Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
        )
    }
}