import React from 'react';

//Creacion de un Componente en React Js
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.execute = this.execute.bind(this);
        this.state = {contador: 0};
    }

    execute(event) {
        this.setState({contador: this.state.contador + 1})
    }

    render() {
        return (
            <button onClick={this.execute} className={`button-class`}>
                contador {this.state.contador}
            </button>
        );
    }
}

export default ClassComponent;