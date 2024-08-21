Exercício 1: Atualização de Título com useEffect

Objetivo: Atualizar o título da aba do navegador conforme o usuário interage com o componente.

Instruções:

    Crie um componente chamado TitleUpdater.
    Use useState para criar uma variável de estado number.
    Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
    Adicione botões para incrementar e decrementar number.

Exercício 2: Monitoramento de Largura da Janela

Objetivo: Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.

Instruções:

    Crie um componente chamado WindowSize.
    Utilize useState para armazenar a largura atual da janela.
    Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
    Exiba a largura atual da janela.

Exercício 3: Sincronização de Estado com Local Storage

Objetivo: Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.

Instruções:

    Crie um componente chamado PersistentCounter.
    Use useState para gerenciar o contador, inicializando-o com o valor do Local Storage, se disponível.
    Use useEffect para atualizar o Local Storage sempre que o contador mudar.
    Exiba o valor do contador e adicione botões para incrementar e decrementar.

Exercício 4: Relógio em Tempo Real

Objetivo: Criar um relógio digital que atualiza a hora a cada segundo.

Instruções:

    Crie um componente chamado RealTimeClock.
    Utilize useState para armazenar a hora atual.
    Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
    Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.

Exercício 5: Exibir/Mostrar Texto

Objetivo: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.

Instruções:

    Crie um componente chamado ToggleText.
    Use useState para gerenciar se o texto está visível ou não.
    Adicione um botão que alterne o estado de visibilidade do texto.
    Exiba o texto somente quando estiver visível.

Exercício 6: Contador com Limite

Objetivo: Criar um contador que não ultrapasse um limite superior e que avise quando atingido.

Instruções:

    Crie um componente chamado LimitedCounter.
    Use useState para armazenar o valor do contador.
    Adicione botões para incrementar e decrementar o contador.
    Não permita que o contador ultrapasse o valor 10 e exiba uma mensagem quando o limite for atingido.