import { Component } from "react";
import React from "react";

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero1: 0,
            numero2: 0,
            calculo: 0
        }
        this.calcula = this.calcula.bind(this);
    }

    calcula() {
        console.log(this.state.numero1 + " + " + this.state.numero2);
        this.setState({ calculo: this.state.numero1 + this.state.numero2 });

    }

    render() {
        return (
            <div className="calculadora">
                <h2>Calculadora simples</h2>
                <input type="number" onChange={(event) => {
                    this.setState({ numero1: event.target.value });
                }}></input>
                <br></br>
                <input type="number" onChange={(event) => {
                    this.setState({ numero2: event.target.value })
                }}></input>
                <br></br>
                <input type="button" value="Calcular" onClick={this.calcula}></input>
                <h2>adsds: {this.state.calculo}</h2>
            </div>
        )
    }
}
export default Calculadora;