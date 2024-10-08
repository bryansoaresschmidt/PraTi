// Importação: Este código começa importando React e a classe Component. Isso permite que você use JSX e crie um componente de classe estendendo Component.
import { Component } from 'react'

// Definição da Classe: TimerComponent é definido como uma classe que estende Component, o que significa que ele herda funcionalidades de um componente React.
class TimerComponent extends Component {
// Construtor: Este método é o primeiro a ser chamado na criação do componente. É usado principalmente para inicializar o estado e vincular métodos.
// super(props): Chama o construtor da classe pai (Component), o que é necessário para que o componente funcione corretamente dentro do ecossistema React.
// Estado Inicial: O estado count é inicializado com o valor 0. O estado é um objeto que armazena valores que, quando alterados, podem re-renderizar o componente.
    constructor(props) {
        super(props)
        this.state = {
            contagem: 0
        }
    }

// componentDidMount: Este método é chamado automaticamente pelo React após o componente ser montado na DOM. É usado aqui para configurar um timer.
// setInterval: Cria um intervalo que chama a função fornecida a cada 1 milissegundos. A função incrementa o count no estado.
// setState: Atualiza o estado do componente. Aqui, ele usa a forma de função de setState para garantir que o estado seja atualizado com base no valor anterior (prevState).
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState(prevState => ({
                contagem: prevState.contagem + 1
            }))}, 1)
    }

// componentDidUpdate: Chamado após qualquer atualização do componente (normalmente após setState ser chamado). Aqui, ele simplesmente loga o novo valor de count sempre que é atualizado.
    componentDidUpdate() {
        console.log(`O componente foi atualizado: ${this.state.contagem}`)
    }
    
// componentWillUnmount: Este método é chamado quando o componente está prestes a ser removido da DOM. É usado para limpar recursos para evitar vazamentos de memória. Aqui, ele limpa o intervalo que foi configurado em componentDidMount.
    componentWillUnmount() {
        clearInterval(this.timerId)
        console.log('Timer limpo')
    }

    render() {
        return <h1>{this.state.contagem}</h1>
    }
}

export default TimerComponent


/* 3 estados dos componentes */
// 1º estado do componente: Montagem
// 2º estado do componente: Atualização
// 3º estado do componente: Desmontagem