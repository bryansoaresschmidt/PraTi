import MyComponent from '../../classComponent/ClassComponent'
import TimerComponent from '../../classComponent/TimerComponent'

import Navegacao from '../../functionalComponent/Navegacao'
import TimerComponent_useEffect from '../../functionalComponent/TimerComponent_useEffect'

function App() {

  return (
    <>
     <MyComponent />
     <TimerComponent />

     <Navegacao />
     <TimerComponent_useEffect />
    </>
  )
}

export default App

/*
Estado:
class - this.state
funcionais - useState Hook

Métodos de Ciclo de Vida:
class - componentDidMount, etc.
funcionais - useEffect Hook

Manipulação de Eventos:
class - Métodos de instância (this.increment)
funcionais - Funções dentro do corpo do componente (increment)

Performance:
class - Menos performático em alguns casos
funcionais - Geralmente mais performático

Simplicidade:
class - Mais verboso, mais complexo
funcionais - Mais conciso e legível

Recomendações:
class - Ainda útil, mas menos comum em novos projetos
funcionais - Recomendado para novos projetos
*/