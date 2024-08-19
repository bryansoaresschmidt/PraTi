import { Component } from 'react'

class MyComponent extends Component {
    // My Component é um papagaio e Componente é uma ave
    constructor(props) {
        // contrutor vai ser chamado sempre que um objeto for criado
        super(props)
        // super vai chamar um construtor da classe pai, vai chamar o construtor de Component

        this.state = {
            contador: 0
        }
    }

    add = () => {
        this.setState({ contador: this.state.contador +1 })
    }
    remove = () => {
        this.setState({ contador: this.state.contador -1 })
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.remove}>-1</button>
            </div>
        )
    } 
}

export default MyComponent

// Já aprendemos uma HOOK (useState) pra trabalhar com componentes FUNCIONAIS

// Agora vamos aprender a trabalhar com THIS.STATE e THIS.SETSTATE para trabalhar com componentes de CLASSE